ЗАГРУЖАТЬ В ПУБЛИЧНЫЙ GITHUB МОЖНО ТОЛЬКО ЭТУ ПАПКУ

Оставить:
- index.html
- env.js
- tele-secure.js
- eco-upgrade.css
- eco-upgrade.js
- eco-final-patch.css
- eco-final-patch.js

НЕ загружать в публичный GitHub:
- tests.json
- premium_users.json
- banned_users.json
- device_locks.json
- activate.py
- worker.js
- cloudflare-backend-private

После деплоя Worker проверь env.js:
BACKEND_URL должен быть ссылкой на твой Cloudflare Worker.
