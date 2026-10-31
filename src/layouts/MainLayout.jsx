import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import useReveal from '../hooks/useReveal'

// Routes that exist in the recreation (used to detect 404 catch-all routes).
const KNOWN_ROUTES = [
  /^\/$/,
  /^\/home-one$/,
  /^\/course-three$/,
  /^\/pricing-three$/,
  /^\/blog-three$/,
  /^\/contact-three$/,
  /^\/course\/[^/]+$/,
  /^\/blog-posts\/[^/]+$/,
  /^\/team$/,
  /^\/team-members\/[^/]+$/,
  /^\/events$/,
  /^\/career$/,
  /^\/faq$/,
  /^\/about$/,
  /^\/information\/license$/,
  /^\/not-found-demo$/,
]

// Pages that render no footer at all (mirrors the reference markup).
const FOOTERLESS = new Set(['/contact-three', '/not-found-demo'])

// Pages using the `footer-one` variant instead of `footer-two`.
const FOOTER_ONE = new Set(['/', '/home-one', '/events', '/information/license'])

export default function MainLayout() {
  const { pathname } = useLocation()
  useReveal()

  const isKnown = KNOWN_ROUTES.some((re) => re.test(pathname))
  let footer = null
  if (isKnown && !FOOTERLESS.has(pathname)) {
    footer = <Footer variant={FOOTER_ONE.has(pathname) ? 'one' : 'two'} />
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className={`page-main${pathname === '/contact-three' ? ' page-main-static' : ''}`} key={pathname}>
        <Outlet />
      </main>
      {footer}
    </>
  )
}
