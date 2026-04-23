from pathlib import Path
import re
text = Path('index.html').read_text(encoding='utf-8')
match = re.search(r'<script[^>]*>([\s\S]*?)</script>', text, re.IGNORECASE)
if not match:
    raise SystemExit('NO_SCRIPT')
script = match.group(1)
stack = []
for i, ch in enumerate(script, 1):
    if ch == '{':
        stack.append(i)
    elif ch == '}':
        if stack:
            stack.pop()
        else:
            print('extra closing brace at char', i)
print('remaining openings', len(stack), 'first at', stack[0] if stack else None)
# Print surrounding lines for any unmatched braces at positions near end
lines = script.splitlines()
for idx, line in enumerate(lines, 1):
    if '{' in line or '}' in line:
        print(idx, line)
