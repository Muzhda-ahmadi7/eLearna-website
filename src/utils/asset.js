// Public files live under `public/assets`, but the deployed site is served from
// `/eLearna-website/` on GitHub Pages, so root-absolute URLs must be rebased.
const BASE = import.meta.env.BASE_URL

export default function asset(path) {
  return `${BASE}${String(path).replace(/^\/+/, '')}`
}
