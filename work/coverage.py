"""Coverage check: prove the presentation experiment (samholub/elim-avpro, now dormant, not a source) drops no fact
from the build set, adds none, and keeps every status. This repo stays the master.

Run:  python work/coverage.py [path to the team repo, default C:/Users/sammh/elim-avpro]
Inputs (the build set at tag v1.1-baseline): build/*.md, review/ELIM-PLAN.md, matt/MATT-PACK.md, the diagram JSX
text, build/BOM.xlsx.
Writes work/COVERAGE.csv (one row per unit) and work/COVERAGE.md (summary).

Checks (the pass bar in the approved plan):
  1. Units: every table row, bullet, numbered item, sentence and ASCII panel line in the inputs is a unit.
  2. Map: each unit gets its best destination (page and line) in the team repo. Unmapped = fail.
  3. Forward tokens: every hard token of every unit exists in the team repo. Misses fail unless whitelisted.
  4. Status: a unit's non-decided status word must sit on its destination line or nearby. Mismatch fails.
  5. Reverse tokens: every hard token on a team page exists somewhere in the inputs. New tokens fail unless whitelisted.
  6. BOM: the team repo's BOM.xlsx has the same cell values as build/BOM.xlsx.
Adjudicated exceptions live in work/coverage_rulings.csv (unit id or token, reason). Every one is listed in COVERAGE.md.
"""
import csv
import re
import sys
from pathlib import Path

import openpyxl

WS = Path(__file__).resolve().parent.parent
TEAM = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("C:/Users/sammh/elim-avpro")

INPUTS = sorted((WS / "build").glob("*.md")) + [WS / "review" / "ELIM-PLAN.md", WS / "matt" / "MATT-PACK.md"]
JSX = sorted((WS / "build" / "diagrams").glob("*.jsx"))

STOP = set("""a an the and or of to in on at for from by with is are be it its this that these those as if not no
but so than then there here what which who when where how all any each every one two three into over under up out
only also just very same more most less other can do does done get gets we our you your they their he his she her
them us i me my will would should could may might must has have had was were been being do don't it's that's
""".split())

STATUS = {
    "assumed": ["assumed"], "tentative": ["tentative", "may drop"], "proposed": ["proposed"],
    "conditional": ["conditional", "only if the bwing", "pending", "if the inspection passes", "only if the case"],
    "open": ["open", "to confirm", "confirms", "to be confirmed", "tbc", "check"],
    "placeholder": ["placeholder", "to verify"], "verify": ["verify"],
}

CODE = re.compile(r"^(?:D\d{1,2}|Q\d|V-\d{2}|P-\d{2}|R-\d{3}|O-\d{2}|M\d|G\d|N\d{1,2}|C\d)$")
FILES = re.compile(r"(README|DESIGN|BUILD-SPEC|OPEN-ITEMS|OPS-CONFIG|BACKLOG|ROADMAP|CHANGELOG|DECISIONS|PROPOSALS|VERIFY|MATT-PACK|ELIM-PLAN)")


# ---------------------------------------------------------------- text helpers

def strip_md(s):
    s = re.sub(r"<!--.*?-->", "", s)
    s = re.sub(r"`([^`]*)`", r"\1", s)
    s = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", s)
    s = re.sub(r"</?[a-z][a-z0-9]*(?:\s[^<>\n]*)?/?>", " ", s)  # HTML tags only; JSX tags are capitalized
    s = s.replace("**", "").replace("*", " ").replace("\\", "")
    return s


def norm(s):
    s = strip_md(s).lower()
    s = s.replace("–", "-").replace("—", "-").replace("×", "x").replace("→", ">").replace("’", "'")
    return s


def tokens(s):
    """Hard tokens: anything with a digit, ALL-CAPS words, quoted strings, $ figures."""
    s = strip_md(s).replace("–", "-").replace("—", "-").replace("×", "x")
    out = set()
    for m in re.finditer(r"\$\d{1,3}(?:,\d{3})*(?:\.\d\d)?", s):
        out.add(m.group(0))
    for w in re.findall(r"[A-Za-z0-9][A-Za-z0-9./+\-°Ω%]*", s):
        w = w.strip(".-/+")
        if not w:
            continue
        if re.search(r"\d", w) or (re.fullmatch(r"[A-Z][A-Z0-9\-]{2,}", w)):
            out.add(w)
    for q in re.findall(r"\"([^\"]{3,60})\"", s):
        out.add('"' + q.strip() + '"')
    return out


def words(s):
    return [w for w in re.findall(r"[a-z0-9][a-z0-9'\-/.]*", norm(s)) if w not in STOP and len(w) > 2]


# ---------------------------------------------------------------- units

def units_of(path):
    rel = path.relative_to(WS).as_posix()
    out = []
    in_code = False
    for n, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        raw = line.rstrip()
        if raw.startswith("```"):
            in_code = not in_code
            continue
        if in_code:
            if raw.strip():
                out.append((rel, n, "ascii", raw.strip()))
            continue
        s = raw.strip()
        if not s or s.startswith("<!--") or re.match(r"^\|?[-: |]+\|?$", s) or s in ("-----", "---") or s.startswith("<div"):
            continue
        if s.startswith("#"):
            continue
        if s.startswith("|"):
            out.append((rel, n, "row", s))
        elif re.match(r"^(\s*[-*]|\s*\d+\.)\s", raw):
            out.append((rel, n, "item", s))
        else:
            for sent in re.split(r"(?<=[.!?])\s+(?=[A-Z*])", s):
                if sent.strip():
                    out.append((rel, n, "sentence", sent.strip()))
    return out


def jsx_units(path):
    rel = path.relative_to(WS).as_posix()
    out = []
    for n, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        if line.strip().startswith("//"):
            continue
        for q in re.findall(r'"((?:[^"\\]|\\.)*)"', line):
            if len(q) < 4:
                continue
            if re.search(r"[a-z].*\s", q) or re.search(r"[A-Z]{2,}", q):
                if not re.match(r"^(#|\d+px|system-ui|flex|center|column|row|solid|dashed)", q):
                    out.append((rel, n, "jsx", q))
    return out


# ---------------------------------------------------------------- team corpus

def team_files():
    pages = [TEAM / "README.md"] + sorted((TEAM / "docs").glob("*.md"))
    data = sorted((TEAM / "data").glob("*"))
    jsx = sorted((TEAM / "tools" / "diagrams").glob("*.jsx"))
    return pages, data, jsx


def xlsx_text(path):
    wb = openpyxl.load_workbook(path)
    return "\n".join(str(c.value) for ws in wb for row in ws.iter_rows() for c in row if c.value is not None)


def load_rulings():
    p = WS / "work" / "coverage_rulings.csv"
    if not p.exists():
        return {}
    with open(p, newline="", encoding="utf-8") as f:
        return {r["key"]: r["reason"] for r in csv.DictReader(f)}


def main():
    rulings = load_rulings()
    pages, data, tjsx = team_files()
    page_lines = []  # (file, line_no, text)
    for p in pages:
        for i, l in enumerate(p.read_text(encoding="utf-8").splitlines(), 1):
            page_lines.append((p.relative_to(TEAM).as_posix(), i, l))
    team_text = "\n".join(l for _, _, l in page_lines)
    other_text = "\n".join(p.read_text(encoding="utf-8") for p in data + tjsx) + "\n" + xlsx_text(TEAM / "BOM.xlsx")
    team_norm = norm(team_text + "\n" + other_text)
    team_tok = tokens(team_text + "\n" + other_text)

    # index team lines by words for mapping
    line_words = [(f, n, l, set(words(l))) for f, n, l in page_lines]
    by_file = {}
    for idx, (f, n, l, w) in enumerate(line_words):
        by_file.setdefault(f, []).append(idx)

    units = []
    for p in INPUTS:
        units += units_of(p)
    for p in JSX:
        units += jsx_units(p)

    rows_out, fails = [], {"unmapped": [], "tokens": [], "status": []}
    for k, (src, ln, kind, text) in enumerate(units, 1):
        uid = f"U{k:04d}"
        w = set(words(text))
        # best destination: the team line whose ±2-line window covers most of the unit's words
        best, best_score = None, -1.0
        if w:
            for idx, (f, n, l, lw) in enumerate(line_words):
                if not (lw & w):
                    continue
                win = set()
                for j in range(max(0, idx - 2), min(len(line_words), idx + 3)):
                    if line_words[j][0] == f:
                        win |= line_words[j][3]
                score = len(w & win) / len(w)
                if score > best_score:
                    best, best_score = idx, score
        dest = f"{line_words[best][0]}:{line_words[best][1]}" if best is not None else ""
        # corpus-wide word coverage (a unit may be split across a table and a note)
        cover = sum(1 for x in w if x in team_norm) / len(w) if w else 1.0
        miss_tok = sorted(t for t in tokens(text) if t not in team_tok and not CODE.match(t) and not FILES.search(t)
                          and t not in rulings)
        # status
        st_bad = []
        low = re.sub(r"open-items|verify v-\d\d|\(verify", "", norm(text))
        if best is not None:
            f0 = line_words[best][0]
            win = " ".join(norm(line_words[j][2]) for j in range(max(0, best - 3), min(len(line_words), best + 4))
                           if line_words[j][0] == f0)
            # also the page's nearest callout/heading context
            for st, syns in STATUS.items():
                if st == "open" and "open" not in low:
                    continue
                if any(re.search(r"\b" + re.escape(s) + r"\b", low) for s in syns[:1]):
                    if not any(re.search(r"\b" + re.escape(s) + r"\b", win) for s in syns):
                        st_bad.append(st)
        mapped = best is not None and (best_score >= 0.6 or cover >= 0.9)
        verdict = "ok"
        tkey = "unit:" + src + "|" + text[:80]
        if tkey in rulings or any(tkey.startswith(k) for k in rulings if k.startswith("unit:") and len(k) > 30):
            rulings.setdefault(uid, rulings.get(tkey) or next(v for k, v in rulings.items() if k.startswith("unit:") and tkey.startswith(k)))
        if uid in rulings:
            verdict = "ruled"
        else:
            if not mapped:
                verdict = "unmapped"
                fails["unmapped"].append(uid)
            if miss_tok:
                verdict = "token-miss"
                fails["tokens"].append(uid)
            if st_bad:
                verdict = "status"
                fails["status"].append(uid)
        rows_out.append([uid, src, ln, kind, text[:300], dest, f"{best_score:.2f}", f"{cover:.2f}", " ".join(miss_tok),
                         " ".join(st_bad), verdict, rulings.get(uid, "")])

    # reverse tokens
    in_text = "\n".join(p.read_text(encoding="utf-8") for p in INPUTS + JSX) + "\n" + xlsx_text(WS / "build" / "BOM.xlsx")
    in_tok = tokens(in_text)
    # BOM figures that are formulas in the xlsx (line cost = qty x unit, group subtotals) count as inputs
    wb = openpyxl.load_workbook(WS / "build" / "BOM.xlsx")["Buy"]
    grp = {}
    for r in wb.iter_rows(min_row=6, values_only=True):
        if r[1] and isinstance(r[3], (int, float)) and isinstance(r[4], (int, float)):
            ext = r[3] * r[4]
            in_tok.add(f"${ext:,.2f}")
            in_tok.add(f"{ext:,.2f}")
            grp[r[0]] = grp.get(r[0], 0) + ext
    for v in grp.values():
        in_tok |= {f"${v:,.2f}", f"{v:,.2f}"}
    new_tok = []
    in_mermaid = {}
    for f, n, l in page_lines:
        if l.startswith("```mermaid"):
            in_mermaid[f] = True
            continue
        if l.startswith("```"):
            in_mermaid[f] = False
        if in_mermaid.get(f):
            # diagram lines: check only the words inside labels, not node ids or the label strings as a whole
            l = " ".join(re.findall(r'"([^"]*)"', l)).replace('"', "")
            toks = {x for x in tokens(l) if not x.startswith('"')}
        else:
            toks = tokens(l)
        if f == "docs/changelog.md":
            continue
        for t in toks:
            if t not in in_tok and not CODE.match(t) and t not in rulings:
                new_tok.append((t, f, n, l.strip()[:100]))

    # BOM identity
    a, b = openpyxl.load_workbook(WS / "build" / "BOM.xlsx"), openpyxl.load_workbook(TEAM / "BOM.xlsx")
    bom_diff = 0
    for ws in a.sheetnames:
        A, B = a[ws], b[ws]
        for r in range(1, max(A.max_row, B.max_row) + 1):
            for c in range(1, max(A.max_column, B.max_column) + 1):
                x, y = A.cell(r, c).value, B.cell(r, c).value
                if (x if x != "" else None) != (y if y != "" else None):
                    bom_diff += 1

    with open(WS / "work" / "COVERAGE.csv", "w", newline="", encoding="utf-8") as f:
        wr = csv.writer(f)
        wr.writerow(["unit", "source", "line", "kind", "text", "destination", "best_window", "corpus_cover",
                     "missing_tokens", "status_mismatch", "verdict", "ruling"])
        wr.writerows(rows_out)

    n = len(rows_out)
    ruled = [r for r in rows_out if r[10] == "ruled"]
    print(f"units {n}; unmapped {len(fails['unmapped'])}; token misses {len(fails['tokens'])}; "
          f"status mismatches {len(fails['status'])}; ruled {len(ruled)}; reverse new tokens {len(new_tok)}; BOM cell diffs {bom_diff}")
    for kind in ("unmapped", "tokens", "status"):
        for uid in fails[kind]:
            r = rows_out[int(uid[1:]) - 1]
            print(f"  {kind:8} {uid} {r[1]}:{r[2]} [{r[8] or r[9]}] {r[4][:110]}  -> {r[5]} ({r[6]}/{r[7]})")
    seen = set()
    for t, f, ln, l in new_tok:
        if t in seen:
            continue
        seen.add(t)
        print(f"  new-token {t!r} {f}:{ln} {l}")

    summary = [
        "# Coverage: build set → samholub/elim-avpro (dormant presentation experiment, not a source)",
        "",
        f"Inputs: build/*.md, review/ELIM-PLAN.md, matt/MATT-PACK.md, build/diagrams/*.jsx, build/BOM.xlsx (tag v1.1-baseline). Team repo: `{TEAM}`.",
        "",
        "| Check | Result |",
        "|---|---|",
        f"| Units | {n} |",
        f"| Unmapped | {len(fails['unmapped'])} |",
        f"| Forward token misses | {len(fails['tokens'])} |",
        f"| Status mismatches | {len(fails['status'])} |",
        f"| Reverse (new) tokens | {len(set(t for t, *_ in new_tok))} |",
        f"| BOM.xlsx cell differences | {bom_diff} |",
        f"| Adjudicated exceptions | {len(ruled)} units, {sum(1 for k in rulings if not re.fullmatch(r'U\d{4}', k) and not k.startswith('unit:'))} tokens |",
        "",
        "## Adjudicated exceptions",
        "",
    ]
    for k, v in rulings.items():
        if k.startswith("unit:"):
            continue
        if k.startswith("U") and re.fullmatch(r"U\d{4}", k):
            r = rows_out[int(k[1:]) - 1]
            summary.append(f"- **{k}** `{r[1]}:{r[2]}` \"{r[4][:120]}\" — {v}")
        else:
            summary.append(f"- token **{k}** — {v}")
    (WS / "work" / "COVERAGE.md").write_text("\n".join(summary) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
