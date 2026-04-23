from pathlib import Path
import re
text = Path('index.html').read_text(encoding='utf-8')
match = re.search(r'<script[^>]*>([\s\S]*?)</script>', text, re.IGNORECASE)
if not match:
    raise SystemExit('NO_SCRIPT')
script = match.group(1)
pos = 37234
print('char', pos, 'context:')
print(script[pos-40:pos+40])
# locate line and column
line = script.count('\n',0,pos)+1
col = pos - script.rfind('\n',0,pos)
print('line', line, 'col', col)
lines = script.splitlines()
for i in range(line-5, line+5):
    if 1 <= i <= len(lines):
        print(i, lines[i-1])
