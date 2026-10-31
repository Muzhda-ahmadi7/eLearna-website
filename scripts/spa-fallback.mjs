import { copyFileSync } from 'node:fs'

// GitHub Pages has no SPA rewrites: deep links such as /eLearna-website/course/foo
// are served from 404.html, which must boot the same app.
copyFileSync('dist/index.html', 'dist/404.html')
console.log('copied dist/index.html -> dist/404.html')
