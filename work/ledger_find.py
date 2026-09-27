"""Search work/ledger.csv. Usage: python ledger_find.py "<regex>" [--src chat|doc|image|app] [--max N]
Matches subject+value+evidence (case-insensitive). Prints id, status, source, date, subject, value."""
import csv, re, sys, os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
args = sys.argv[1:]
src = args[args.index("--src") + 1] if "--src" in args else None
mx = int(args[args.index("--max") + 1]) if "--max" in args else 25
pat = re.compile(args[0], re.I)
n = 0
for d in csv.DictReader(open("ledger.csv", encoding="utf-8")):
    if src and d["source_type"] != src: continue
    if pat.search(d["subject"] + " " + d["value"] + " " + d["evidence"]):
        print(f'{d["id"]} [{d["status"]}] {d["source_type"]}:{d["source_ref"][:48]} {d["date"]} | {d["subject"][:55]} = {d["value"][:110]}')
        n += 1
        if n >= mx: break
