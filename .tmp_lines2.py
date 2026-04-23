from pathlib import Path
text = Path('index.html').read_text(encoding='utf-8')
for i,line in enumerate(text.splitlines(),1):
    if 850 <= i <= 860:
        print(i, line)
