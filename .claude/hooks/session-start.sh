#!/bin/bash
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo '{"async": true, "asyncTimeout": 30000}'

PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(cd "$(dirname "$0")/../.." && pwd)}"

# Kill any existing server on port 3000
pkill -f "http.server 3000" 2>/dev/null || true
sleep 1

# Start static file server
nohup python3 -m http.server 3000 --directory "$PROJECT_DIR" > /tmp/youon-server.log 2>&1 &
disown

# Wait until ready (up to 10s)
for i in $(seq 1 10); do
  if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/ 2>/dev/null | grep -q "200"; then
    echo "Server ready on port 3000"
    exit 0
  fi
  sleep 1
done

echo "Server failed to start — check /tmp/youon-server.log"
exit 1
