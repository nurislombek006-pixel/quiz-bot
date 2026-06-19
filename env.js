// env.js
// Здесь нет токена бота и нет секретов.
// BACKEND_URL должен вести на Cloudflare Worker из папки cloudflare-backend-private.

(function () {
  window.__APP_ENV = {
    BACKEND_URL: "https://shrill-waterfall-46fd.nurislombek006.workers.dev"
  };
})();
