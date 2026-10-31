import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Observes every `.reveal` element on the page and adds `is-visible`
// when it scrolls into view (mirrors the reference site's scroll animations).
export default function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const revealAll = () =>
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'))

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      revealAll()
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    const observe = (el) => {
      if (!el.classList.contains('is-visible')) observer.observe(el)
    }

    document.querySelectorAll('.reveal').forEach(observe)

    // Content mounted after the initial scan (tab switches, sliders, lazy
    // sections) still needs to be observed, so watch for new nodes.
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return
          if (node.classList.contains('reveal')) observe(node)
          node.querySelectorAll('.reveal').forEach(observe)
        })
      })
    })
    mutations.observe(document.body, { childList: true, subtree: true })

    // Re-scan shortly after mount so content rendered by effects is covered.
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach(observe)
    }, 120)

    // Safety net: anything already on screen becomes visible even if an
    // observer callback is missed (never leave content permanently hidden).
    const safety = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      })
    }, 1800)

    return () => {
      clearTimeout(t)
      clearTimeout(safety)
      mutations.disconnect()
      observer.disconnect()
    }
  }, [pathname])
}
