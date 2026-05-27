with open('frontend/styles/fiord', 'r', encoding='utf-8') as f:
    content = f.read()
print(f'File size: {len(content)} bytes')
import json
try:
    json.loads(content)
    print('JSON is valid')
except json.JSONDecodeError as e:
    print(f'JSON error at position {e.pos}: {e.msg}')
    start = max(0, e.pos - 50)
    end = min(len(content), e.pos + 50)
    print(f'Context: {repr(content[start:end])}')
