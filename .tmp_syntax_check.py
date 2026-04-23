from pathlib import Path
import re
text = Path('index.html').read_text(encoding='utf-8')
match = re.search(r'<script[^>]*>([\s\S]*?)</script>', text, re.IGNORECASE)
if not match:
    print('NO_SCRIPT')
    raise SystemExit(1)
script = match.group(1)
for char in ['(', ')', '{', '}', '[', ']']:
    print(char, script.count(char))
for q in ['"', "'", '`']:
    print(q, script.count(q))
for idx, line in enumerate(script.splitlines(), 1):
    for q in ['"', "'", '`']:
        if line.count(q) % 2 == 1:
            print('odd', idx, q, line)
            break
