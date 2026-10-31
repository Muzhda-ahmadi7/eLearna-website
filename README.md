# Elearna Three — React recreation of the "Three" variant pages

A hand-built React recreation of the third design variant of every applicable page from the
[Elearna Webflow template](https://elearna.webflow.io). All imagery, fonts and video are stored
locally under `public/assets/` — nothing is hotlinked from the original CDN.

## Stack

- React 19 (JSX, no TypeScript)
- Vite 7
- React Router DOM 7
- Hand-written CSS3 (no CSS framework, no CSS-in-JS). Class names and values mirror the
  original Webflow stylesheet so the markup stays recognizable.

## Run it

```bash
npm install
npm run dev     # http://localhost:5174
npm run build   # production build to dist/
```

## Pages

| Route | Reference page | Notes |
| --- | --- | --- |
| `/`, `/home-three` | Home Three | Hero with Personal/Coach toggle, categories, trending + popular courses, counters + inquiry form, clients marquee, offer, testimonials, dark CTA, why us |
| `/course-three` | Course Three | Hero, 6 category cards, paginated course grid (tabs 1–2) |
| `/pricing-three` | Pricing Three | Monthly/yearly toggle, 3 plans (Premium highlighted), FAQ, CTA |
| `/blog-three` | Blog Three | Hero + 3 masonry columns of posts |
| `/contact-three` | Contact Three | Full-height background, contact info, expanding inquiry form. No footer (mirrors the reference) |
| `/course/:slug` | Course details (free template) | Hero, short-info bar, tabs: Overview / Curriculum / Instructor / FAQ / Query, related courses |
| `/blog-posts/:slug` | Blog details | Hero, rich article, author card, related blogs |
| `/team` | Team | 8 instructor cards |
| `/team-members/:slug` | Instructor details | Hero + skill marquee, about + skills, courses, awards |
| `/events` | Events | 6 event cards with the "See event details" marquee strip |
| `/career` | Career | Connectivity points, job listings |
| `/faq` | FAQ | 5 category tabs with accordions |
| `/about` | **About Two** (see note below) | Story, philosophy categories, discover cards, clients, vision, instructor CTA, blog |
| `/information/license` | License | Imagery credits (Freepik), typography notes |
| `/not-found-demo` | 404 | Demo route for the 404 page |
| `*` | 404 | Catch-all renders the 404 page |

### About has no third variant

The reference template only ships About One and About Two. **`/about` is therefore a
recreation of About Two**, adapted into the "Three" navigation. This is intentional and is the
only page that is not a "Three" variant.

## Adapted links (and why)

- **Nav contains only recreated pages.** The reference mega-menu links to all 30+ template
  pages (Home One/Two, Course One/Two, Pricing One/Two, etc.); those variants are out of scope,
  so the navbar/dropdowns only link to routes listed above.
- **Course details** use the free-course template. Paid course details on the reference are
  membership-gated (Webflow Memberstack), so `/course/:slug` renders the free template for
  every course.
- **Career "Apply Now"** links to `/contact-three`. The reference job detail pages are out of
  scope.
- **Event cards are not links** — event detail pages are out of scope; the yellow
  "See event details" strip is decorative, as in the reference markup.
- **License page imagery links** point to the original Freepik pages (external), matching the
  reference license page.
- **Footer strategy** mirrors the reference:
  - default `footer-two`;
  - `footer-one` on `/events` and `/information/license`;
  - no footer on `/contact-three`, `/not-found-demo` and unknown catch-all paths.
  (Implemented in `src/layouts/MainLayout.jsx` via `KNOWN_ROUTES` / `FOOTER_ONE` / `FOOTERLESS`.)

## Project structure

```
elearna-three/
├── public/assets/
│   ├── img/        ~250 images (webp/svg/png/avif/jpg), descriptive names
│   ├── fonts/      Space Grotesk + Outfit woff2
│   └── video/      home-one-video.mp4 + poster
└── src/
    ├── assets/fonts.css      @font-face declarations (generated)
    ├── components/           Navbar, Footer (1|2), JourneyCta (photo|dark|yellow),
    │                         FaqBlock, CourseCardTwo, ClientsMarquee, WhyUs,
    │                         Testimonials, ScrollToTop, home/* (TrendingCourses,
    │                         OfferSection, CounterSection)
    ├── data/                 site, nav, courses, posts, team, events, faqs,
    │                         plans, testimonials, license
    ├── hooks/useReveal.js    IntersectionObserver scroll reveals (.reveal/.is-visible)
    ├── layouts/MainLayout.jsx  Navbar + Outlet + per-page footer logic
    ├── pages/                one .jsx + .css pair per page
    ├── index.css             design tokens, reset, h1–h6 typography, .container (1320px)
    │                         and .w-container (940px), buttons, utilities, marquee keyframes
    └── App.jsx               all routes
```

## Implementation notes

- **CSS mirrors Webflow.** Original class names (`.course-short-information-box`,
  `.home-two-discover-cards-wrap`, …) and token values (`--color--heading-color: #0f252a`,
  `--color--brand: #ffb606`, …) are kept, so side-by-side comparison with the reference
  stylesheet is straightforward.
- **Scroll reveals** use a single IntersectionObserver (`useReveal`) toggling
  `.reveal.is-visible`; Webflow's per-element `*anim` interactions are approximated this way.
- **Forms are non-submitting** (no backend). They manage local state only.
- **Reference quirks kept** where they affect layout: negative-margin CTA panels
  (`.cta-one { margin-bottom: -100px }`), the course short-info bar overlapping the hero
  (`margin-top: -70px`), blog article/author blocks overlapping the light-blue band
  (`margin-top: -100px`), and Webflow heading element typography (h1 60px …).
- **Video lightbox** figures inside rich text are omitted (they depend on the Webflow
  interaction runtime).
- The team-member marquee, clients marquee and counter animations are pure CSS/JS — no
  external animation libraries.

## Licensing

Images, fonts and video were downloaded from the original template's CDN for this recreation.
Photography is licensed via Freepik (see `/information/license`, which reproduces the original
credit list). Fonts (Space Grotesk, Outfit) are open-source Google Fonts. If you use this
project beyond a personal showcase, verify the template's license allows your use case.
