#!/bin/bash
# Create composure-app repo — payload via file to avoid quoting issues.
CRED_TOKEN=$(grep 'composture:' ~/.git-credentials | sed -E 's|https://([^:]+):([^@]+)@.*|\2|')

PAYLOAD='{"name":"composure-app","description":"Composure Pty Ltd - AI, Software and Automation company website","private":false,"auto_init":false}'
PAYLOAD_FILE="$LOCALAPPDATA/Temp/repo-payload.json"
RESP_FILE="$LOCALAPPDATA/Temp/repo-resp.json"
echo "$PAYLOAD" > "$PAYLOAD_FILE"

curl -s -X POST \
  -H "Authorization: token $CRED_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  -H "Content-Type: application/json" \
  --data "@$PAYLOAD_FILE" \
  https://api.github.com/user/repos > "$RESP_FILE"

py -c "
import json
d = json.load(open(r'$RESP_FILE'))
if 'full_name' in d:
    print('CREATED:', d['full_name'])
    print('URL:', d['html_url'])
else:
    print('FAILED:', d.get('message'))
    import sys; sys.exit(1)
"
