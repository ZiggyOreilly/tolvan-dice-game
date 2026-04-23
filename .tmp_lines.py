from pathlib import Path
text = Path('index.html').read_text(encoding='utf-8')
idx=0
for i,line in enumerate(text.splitlines(),1):
    if 836 <= i <= 850:
        print(i, line)
