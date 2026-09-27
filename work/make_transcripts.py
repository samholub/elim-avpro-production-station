import json, os, re
ROOT = r"C:\Users\sammh\Elim AVPRO production station"
os.chdir(ROOT)
C = {x["uuid"][:8]: x for x in json.load(open("_raw/export/conversations/conversations.json", encoding="utf-8"))}

# uuid8 -> (short title, scope note, message filter)
SCOPE = {
 "a5df9d8d": ("rack-setup-pivot", "Core. Workstation pivot.", None),
 "dbb71760": ("panel-layout-wiring", "Core. Session 2, design locked.", None),
 "8d448713": ("design-review-scope", "Core. Session 3 + cont.", None),
 "c401d6de": ("procurement-strategy-1", "Core. Session 4.", None),
 "7de49396": ("procurement-strategy-2", "Core. Sessions 5-7, BOM v3-v5.", None),
 "63b7028b": ("wing-finalization-power", "Core, HIGH PRIORITY. Session 8; its updates never reached the docs.", None),
 "d2874b7b": ("stage-power-distribution", "In scope: stage power (S17, S18).", None),
 "61be4ede": ("atem-live-capture-stream", "In scope: switch facts (S5), ops config (S15).", None),
 "67b50b98": ("stage-wireless-antennas", "In scope: S19.", None),
 "e311e761": ("hyperdeck-atem-setup", "In scope: ops config.", None),
 "0c5615c4": ("rig-current-state-brief", "In scope, HIGH PRIORITY: Sam's own current-state rig brief.", None),
 "4897e910": ("hyperdeck-audio-levels", "In scope, LOW PRIORITY: ops-config only.", None),
 "3a43455d": ("booth-signal-flow-APP", "In scope as source_type=app: cross-check evidence, not a design source.", None),
 "7c82049f": ("app-automation-AUG26-27-ONLY", "In scope, LIMITED: only messages dated 2026-08-26 to 2026-08-27 are transcribed.",
              lambda m: "2026-08-26" <= m["created_at"][:10] <= "2026-08-27"),
 "b3a56c0f": ("proposal-deliverables-PROCESS", "In scope for PROCESS RULINGS ONLY: log Sam's stated decisions; do not log the assistant's seed findings as facts.", None),
}
IMG = re.compile(r"\.(png|jpe?g|webp|heic|gif)$", re.I)

def fence(s):
    n = 3
    while "`" * n in s: n += 1
    return "`" * n

def trunc(s, n):
    s = s if isinstance(s, str) else json.dumps(s, ensure_ascii=False)
    return s if len(s) <= n else s[:n] + f"\n[... truncated {len(s)-n} chars]"

def result_text(p):
    c = p.get("content")
    if isinstance(c, list):
        return "\n".join((x.get("text") or json.dumps(x, ensure_ascii=False)) if isinstance(x, dict) else str(x) for x in c)
    return c if isinstance(c, str) else json.dumps(c, ensure_ascii=False)

def render_tool_use(p):
    name = p.get("name"); inp = p.get("input") or {}
    out = [f"**[tool: {name}]**"]
    if name == "create_file":
        path = inp.get("path", ""); ft = inp.get("file_text", "")
        out.append(f"create_file `{path}` — {inp.get('description','')}")
        f = fence(ft); out.append(f"{f}\n{ft}\n{f}")
    elif name == "str_replace":
        out.append(f"str_replace `{inp.get('path','')}` — {inp.get('description','')}")
        for k in ("old_str", "new_str"):
            v = inp.get(k, ""); f = fence(v); out.append(f"{k}:\n{f}\n{v}\n{f}")
    elif name in ("bash_tool", "Bash"):
        cmd = inp.get("command", ""); f = fence(cmd)
        out.append(f"{inp.get('description','')}\n{f}\n{cmd}\n{f}")
    elif name == "present_files":
        out.append("present_files: " + ", ".join(inp.get("filepaths", [])))
    elif name in ("web_search", "web_fetch"):
        out.append(f"{name}: {inp.get('query') or inp.get('url')}")
    elif name == "view":
        out.append(f"view `{inp.get('path','')}`")
    elif name == "artifacts":
        cont = inp.get("content") or ""
        out.append(f"artifact {inp.get('command','')} id={inp.get('id','')} title={inp.get('title','')}")
        if cont:
            f = fence(cont); out.append(f"{f}\n{cont}\n{f}")
    else:
        s = trunc(inp, 1500); f = fence(s); out.append(f"{f}\n{s}\n{f}")
    return "\n".join(out)

def render_result(p, last_tool):
    t = result_text(p)
    if last_tool in ("web_search", "web_fetch", "project_knowledge_search", "conversation_search", "view"):
        return f"*[tool_result for {last_tool}: {len(t)} chars omitted]*"
    s = trunc(t, 2500); f = fence(s)
    return f"*[tool_result for {last_tool}]*\n{f}\n{s}\n{f}"

os.makedirs("source/transcripts", exist_ok=True)
summary = []
for u8, (short, note, filt) in SCOPE.items():
    x = C[u8]; msgs = x["chat_messages"]
    idx = [i for i, m in enumerate(msgs) if (filt is None or filt(m))]
    date = msgs[idx[0]]["created_at"][:10]
    fn = f"source/transcripts/{date}_{short}_{u8}.md"
    L = [f"# {x['name']}", "",
         f"- **UUID:** {x['uuid']}", f"- **Created → updated:** {x['created_at'][:16]} → {x['updated_at'][:16]} (UTC)",
         f"- **Messages:** {len(msgs)} total, {len(idx)} transcribed", f"- **Scope:** {note}",
         "- **Source:** claude.ai export `conversations.json`, rendered from `content[]`. Thinking blocks omitted. Search/view tool results omitted; other tool results truncated at 2,500 chars. Image pixels are not in the export: images appear as markers only.",
         ""]
    for i in idx:
        m = msgs[i]
        L.append(f"---\n\n### #{i} · {m['sender']} · {m['created_at'][:19].replace('T',' ')} UTC\n")
        for a in m.get("attachments") or []:
            ec = a.get("extracted_content") or ""
            L.append(f"**[attachment: {a.get('file_name')} ({a.get('file_type')}, {a.get('file_size')} bytes)]**")
            if ec:
                f = fence(ec); L.append(f"{f}\n{ec}\n{f}")
        for fl in m.get("files") or []:
            kind = "IMAGE" if IMG.search(fl.get("file_name") or "") else "file"
            L.append(f"**[{kind}: {fl.get('file_name')} · file_uuid {fl.get('file_uuid')}]**")
        content = m.get("content") or []
        last_tool = None; wrote = False
        for p in content:
            t = p.get("type")
            if t == "text" and (p.get("text") or "").strip():
                L.append(p["text"].strip()); wrote = True
            elif t == "tool_use":
                last_tool = p.get("name"); L.append(render_tool_use(p)); wrote = True
            elif t == "tool_result":
                L.append(render_result(p, last_tool)); wrote = True
            elif t == "image":
                L.append(f"**[IMAGE block · file_uuid {p.get('file_uuid')}]**")
            elif t == "document":
                L.append(f"**[document block]** {trunc(p.get('source') or p, 300)}")
            elif t == "voice_note":
                L.append(f"**[voice note]** {trunc(p.get('text') or p, 2000)}")
        if not wrote and (m.get("text") or "").strip():
            L.append(m["text"].strip())
        L.append("")
    body = "\n".join(L)
    SECRETS = r"AIza[0-9A-Za-z_\-]{30,}|gh[po]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|sk-(?:ant-)?[A-Za-z0-9_\-]{20,}|AKIA[0-9A-Z]{16}|xox[baprs]-[A-Za-z0-9\-]{10,}"
    body = re.sub(SECRETS, "[REDACTED-SECRET]", body)
    open(fn, "w", encoding="utf-8", newline="\n").write(body)
    words = len(body.split())
    textwords = sum(len((msgs[i].get("text") or "").split()) for i in idx)
    imgs = sum(1 for i in idx for fl in (msgs[i].get("files") or []) if IMG.search(fl.get("file_name") or ""))
    summary.append((fn, len(idx), textwords, words, imgs))
tw = 0; aw = 0
for s in summary:
    print(f"{s[0][19:]:<70} msgs {s[1]:>4}  msg-text words {s[2]:>7}  transcript words {s[3]:>8}  images {s[4]}")
    tw += s[2]; aw += s[3]
print("TOTAL conversations", len(summary), "msg-text words", tw, "transcript words", aw)
