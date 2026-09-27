"""Merge step-5/7 batch files (work/ledger-parts/chat/*.csv, work/ledger-parts/app/APP.csv)
into work/ledger.csv. Validates schema, verifies evidence verbatim against the source,
renumbers temp ids to L-ids, remaps supersedes_id. Idempotent: rows already merged
(tracked in ledger-parts/ID-MAP.csv) are not added twice."""
import csv, glob, os, re, sys, collections
ROOT = r"C:\Users\sammh\Elim AVPRO production station"
os.chdir(ROOT)
HDR = "id,topic,subject,value,status,owner,source_type,source_ref,date,evidence,supersedes_id,notes".split(",")
TOP = set("cases rack-layout panel-avpro panel-wing umbilical cameras video audio-dante network power cooling cabling monitors bom-pricing team-roles process ops-config roadmap other".split())
ST = set("decided proposed rejected superseded open info".split())
DRY = "--dry" in sys.argv

tx = {os.path.basename(p).split("_")[-1][:8]: open(p, encoding="utf-8").read() for p in glob.glob("source/transcripts/*.md")}
def app_text(ref):
    m = re.match(r"elim-production/([^ §]+)", ref)
    p = os.path.join(r"C:\Users\sammh\elim-production", m.group(1)) if m else None
    return open(p, encoding="utf-8", errors="replace").read() if p and os.path.exists(p) else None

ledger = list(csv.DictReader(open("work/ledger.csv", encoding="utf-8")))
idmap_rows = list(csv.DictReader(open("work/ledger-parts/ID-MAP.csv", encoding="utf-8")))
idmap = {r["temp_id"]: r["id"] for r in idmap_rows}
n = len(ledger)
parts = sorted(glob.glob("work/ledger-parts/chat/*.csv")) + ["work/ledger-parts/app/APP.csv"]
new = []; errs = []; stats = collections.Counter(); ev_miss = collections.Counter()
for p in parts:
    if not os.path.exists(p): continue
    rows = list(csv.reader(open(p, encoding="utf-8", newline="")))
    if rows[0] != HDR: errs.append(f"{p}: bad header {rows[0][:3]}"); continue
    for i, r in enumerate(rows[1:], 2):
        if len(r) != 12: errs.append(f"{p}:{i} {len(r)} fields"); continue
        d = dict(zip(HDR, r))
        if d["id"] in idmap: continue  # already merged
        if d["topic"] not in TOP: errs.append(f"{p}:{i} topic {d['topic']}")
        if d["status"] not in ST: errs.append(f"{p}:{i} status {d['status']}")
        src = tx.get(d["source_ref"][:8]) if d["source_type"] in ("chat", "app") and re.match(r"[0-9a-f]{8} #", d["source_ref"]) else app_text(d["source_ref"])
        if src is not None and d["evidence"] and d["evidence"] not in src:
            ev_miss[os.path.basename(p)] += 1; d["notes"] = (d["notes"] + "; " if d["notes"] else "") + "EVIDENCE-NOT-VERBATIM"
        n += 1; idmap[d["id"]] = f"L{n:04d}"; d["_tmp"] = d["id"]; d["id"] = idmap[d["_tmp"]]
        new.append(d); stats[os.path.basename(p)] += 1
for d in new:
    s = d["supersedes_id"].strip()
    if s:
        out = []
        for x in [y for y in re.split(r"[;, ]+", s) if y]:
            if x in idmap: out.append(idmap[x])
            else: errs.append(f"{d['_tmp']} supersedes unknown {x}"); out.append(x)
        d["supersedes_id"] = ";".join(out)
print("new rows by part:", dict(stats)); print("total new", len(new), "-> ledger", len(ledger) + len(new))
print("errors:", len(errs)); print("\n".join(errs[:40]))
print("evidence not verbatim:", dict(ev_miss))
print("status:", collections.Counter(d["status"] for d in new))
if not DRY and not errs:
    with open("work/ledger.csv", "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, quoting=csv.QUOTE_ALL, lineterminator="\n"); w.writerow(HDR)
        for d in ledger + new: w.writerow([d[h] for h in HDR])
    with open("work/ledger-parts/ID-MAP.csv", "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, quoting=csv.QUOTE_ALL, lineterminator="\n"); w.writerow(["temp_id", "id"])
        for k, v in idmap.items(): w.writerow([k, v])
    print("WRITTEN")
