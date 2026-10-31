import asset from '../utils/asset'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  homeLinks,
  pageLinks,
  blogLinks,
  contactLinks,
  freeCourses,
  paidCourses,
  megaPromo,
} from '../data/nav'
import { contactInfo } from '../data/site'
import './Navbar.css'

const LOGO = asset('/assets/img/elearna.svg')
const CART_ICON = asset('/assets/img/cart.svg')
const HOME_ONE_PATHS = new Set(['/', '/home-one'])
const TRANSPARENT_NAV_PATHS = new Set(['/', '/home-one', '/contact-three'])

function DesktopDropdown({ label, links, children, mega = false }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const closeTimer = useRef(0)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return undefined
    const onPointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  const openNow = () => {
    clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const closeSoon = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpen(false), 140)
  }

  return (
    <div
      ref={rootRef}
      className={`nav-dd${mega ? ' nav-dd-mega' : ''}${open ? ' is-open' : ''}`}
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <button
        type="button"
        className="nav-link nav-dd-toggle"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
      >
        <span>{label}</span>
        <span className="nav-caret" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3.5 5.25 7 8.75l3.5-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div className="nav-dd-panel">
        {children ?? (
          <div className="nav-dd-list">
            {links.map((link) => (
              <NavLink key={link.href + link.label} to={link.href} className="nav-dd-link">
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function CourseMega({ onNavigate }) {
  const [tab, setTab] = useState('free')
  const groups = tab === 'free' ? freeCourses : paidCourses

  return (
    <div className="mega-panel">
      <div className="mega-tabs">
        <button
          type="button"
          className={`mega-tab${tab === 'free' ? ' is-active' : ''}`}
          aria-pressed={tab === 'free'}
          onMouseEnter={() => setTab('free')}
          onClick={() => setTab('free')}
        >
          <span className="mega-tab-title">Free courses</span>
          <span className="mega-tab-text">Free learning resources for skill development.</span>
        </button>
        <button
          type="button"
          className={`mega-tab${tab === 'paid' ? ' is-active' : ''}`}
          aria-pressed={tab === 'paid'}
          onMouseEnter={() => setTab('paid')}
          onClick={() => setTab('paid')}
        >
          <span className="mega-tab-title">Paid courses</span>
          <span className="mega-tab-text">
            Courses are available upon purchase. (Requires login)
          </span>
        </button>
      </div>
      <div className="mega-content">
        <div className="mega-links" key={tab}>
          {groups.map((group) => (
            <div className="mega-col" key={group.name}>
              <div className="small-shot-heading">{group.name}</div>
              {group.items.map((item) => (
                <Link key={item.href} to={item.href} className="mega-link" onClick={onNavigate}>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <Link to={megaPromo.href} className="mega-promo" onClick={onNavigate}>
          <img src={megaPromo.icon} alt="" className="mega-promo-icon" />
          <span className="mega-promo-text">
            <span className="heading-six">{megaPromo.title}</span>
            <span className="mega-promo-description">{megaPromo.text}</span>
          </span>
          <img src={megaPromo.arrow} alt="" className="mega-promo-arrow" />
        </Link>
      </div>
    </div>
  )
}

function MobileAccordion({ id, label, links, openId, setOpenId, onNavigate }) {
  const isOpen = openId === id
  return (
    <div className={`mobile-acc${isOpen ? ' is-open' : ''}`}>
      <button
        type="button"
        className="mobile-acc-toggle"
        aria-expanded={isOpen}
        aria-controls={`mobile-acc-${id}`}
        onClick={() => setOpenId(isOpen ? null : id)}
      >
        <span>{label}</span>
        <span className="mobile-acc-icon" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="mobile-acc-panel" id={`mobile-acc-${id}`}>
          {links.map((link) => (
            <NavLink
              key={link.href + link.label}
              to={link.href}
              className="mobile-acc-link"
              onClick={onNavigate}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

function CartPanel({ open, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    closeRef.current?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  return (
    <>
      <div
        className={`cart-backdrop${open ? ' is-open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`cart-panel${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="cart-header">
          <h4 className="heading-five">Your Cart</h4>
          <button
            ref={closeRef}
            type="button"
            className="cart-close"
            onClick={onClose}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>
        <div className="cart-body">
          <p className="cart-empty">No items found.</p>
        </div>
        <div className="cart-footer">
          <div className="cart-subtotal">
            <span>Subtotal</span>
            <span>$0</span>
          </div>
          <Link to="/course-three" className="button button-yellow button-full" onClick={onClose}>
            Continue to Checkout
          </Link>
        </div>
      </aside>
    </>
  )
}

export default function Navbar() {
  const { pathname } = useLocation()
  const isHomeOne = HOME_ONE_PATHS.has(pathname)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const [cartOpen, setCartOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const mobileCloseRef = useRef(null)

  useEffect(() => {
    setMobileOpen(false)
    setMobileSection(null)
    setCartOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return undefined
    mobileCloseRef.current?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const onResize = () => {
      if (window.innerWidth > 991) setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen && !cartOpen) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [mobileOpen, cartOpen])

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileSection(null)
  }

  const solid = !TRANSPARENT_NAV_PATHS.has(pathname) || scrolled

  const mobileCourses = [
    ...freeCourses.flatMap((group) => group.items),
    ...paidCourses.flatMap((group) => group.items),
  ]

  return (
    <header
      className={`navbar-main${solid ? ' is-solid' : ''}${mobileOpen ? ' menu-open' : ''}`}
    >
      {!isHomeOne && (
        <div className="navbar-top">
          <div className="container navbar-top-inner">
            <div className="top-nav-text">
              {contactInfo.topbarText}{' '}
              <Link to="/contact-three" className="top-nav-link">
                {contactInfo.topbarLinkText}
              </Link>
            </div>
            <div className="top-nav-right">
              <a href={`mailto:${contactInfo.email}`} className="top-nav-text">
                {contactInfo.email}
              </a>
              <div className="top-nav-text">
                Call:{' '}
                <a href={contactInfo.phoneHref} className="top-nav-text">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="navbar-container">
        <div className="navbar-wrapper">
          <Link to="/" className="nav-brand" aria-label="Elearna home">
            <img src={LOGO} alt="Elearna" className="elerna" />
          </Link>

          <nav className="navbar-menu" aria-label="Main navigation">
            <DesktopDropdown label="Home" links={homeLinks} />
            <DesktopDropdown label="Courses" mega>
              <CourseMega />
            </DesktopDropdown>
            <DesktopDropdown label="Pages" links={pageLinks} />
            <DesktopDropdown label="Blog" links={blogLinks} />
            <DesktopDropdown label="Contact" links={contactLinks} />
          </nav>

          <div className="navbar-actions">
            <button
              type="button"
              className="cart-button"
              onClick={() => setCartOpen(true)}
              aria-label="Open cart"
            >
              <img src={CART_ICON} alt="" className="cart-icon" />
              <span className="cart-quantity">0</span>
            </button>
            <div className="nav-account">
              <Link to="/contact-three" className="nav-account-link">
                Login
              </Link>
              <span className="nav-account-border" aria-hidden="true" />
              <Link to="/contact-three" className="nav-account-link">
                Register
              </Link>
            </div>
            <button
              ref={menuButtonRef}
              type="button"
              className="menu-button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((value) => !value)}
            >
              <span className="menu-bars" aria-hidden="true">
                <span className="bar" />
                <span className="bar" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu${mobileOpen ? ' is-open' : ''}`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <div className="mobile-menu-head">
          <Link to="/" className="nav-brand" onClick={closeMobile}>
            <img src={LOGO} alt="Elearna" className="elerna" />
          </Link>
          <button
            ref={mobileCloseRef}
            type="button"
            className="mobile-menu-close"
            onClick={closeMobile}
            aria-label="Close menu"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <nav className="mobile-menu-body" aria-label="Mobile navigation">
          <MobileAccordion
            id="home"
            label="Home"
            links={homeLinks}
            openId={mobileSection}
            setOpenId={setMobileSection}
            onNavigate={closeMobile}
          />
          <MobileAccordion
            id="courses"
            label="Courses"
            links={mobileCourses}
            openId={mobileSection}
            setOpenId={setMobileSection}
            onNavigate={closeMobile}
          />
          <MobileAccordion
            id="pages"
            label="Pages"
            links={pageLinks}
            openId={mobileSection}
            setOpenId={setMobileSection}
            onNavigate={closeMobile}
          />
          <MobileAccordion
            id="blog"
            label="Blog"
            links={blogLinks}
            openId={mobileSection}
            setOpenId={setMobileSection}
            onNavigate={closeMobile}
          />
          <MobileAccordion
            id="contact"
            label="Contact"
            links={contactLinks}
            openId={mobileSection}
            setOpenId={setMobileSection}
            onNavigate={closeMobile}
          />
        </nav>

        <div className="mobile-menu-foot">
          <Link to="/contact-three" className="button button-yellow" onClick={closeMobile}>
            Login
          </Link>
          <Link to="/contact-three" className="button button-border-off" onClick={closeMobile}>
            Register
          </Link>
        </div>
      </div>

      <CartPanel open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  )
}
