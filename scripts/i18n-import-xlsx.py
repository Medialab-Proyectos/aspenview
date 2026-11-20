"""Applies the client's corrections from docs/Traduccion-ES-AspenView.xlsx to lib/i18n/es.json.

In the "Traducción" sheet, every row with text in "Español corregido" replaces the Spanish copy for
that English source text. Usage (from the repo root):  python scripts/i18n-import-xlsx.py [file.xlsx]
"""
import json, os, re, sys
import openpyxl

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DICT = os.path.join(ROOT, "lib", "i18n", "es.json")
src = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, "docs", "Traduccion-ES-AspenView.xlsx")


def norm(s: str) -> str:  # same key normalisation as lib/i18n/index.ts
    s = re.sub("[\u2019\u2018\u00b4]", "'", s)
    s = re.sub("[\u201c\u201d]", '"', s)
    return re.sub(r"\s+", " ", s).strip()


es = json.load(open(DICT, encoding="utf-8"))
ws = openpyxl.load_workbook(src, data_only=True)["Traducción"]
changed = 0
for row in ws.iter_rows(min_row=2, values_only=True):
    en, corrected = row[2], row[4]
    if en and corrected and str(corrected).strip():
        key = norm(str(en))
        if es.get(key) != str(corrected).strip():
            es[key] = str(corrected).strip()
            changed += 1
with open(DICT, "w", encoding="utf-8", newline="\n") as fh:  # LF, same output as the merge script
    json.dump(dict(sorted(es.items())), fh, ensure_ascii=False, indent=1)
    fh.write("\n")
print(f"{changed} translations updated in {DICT}")
