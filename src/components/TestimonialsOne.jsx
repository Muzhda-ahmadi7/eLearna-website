import asset from '../utils/asset'
import { useEffect, useRef, useState } from 'react'
import { testimonials } from '../data/testimonials'
import { homeOneCounters } from '../data/site'
import './TestimonialsOne.css'

const ARROW = asset('/assets/img/slider-arrow.svg')
const AUTHOR_IMAGES = [
  asset('/assets/img/testimonial-author-1.avif'),
  asset('/assets/img/testimonial-author-2.avif'),
]

function StatCounter({ value, suffix, label }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      setCount(value)
      return undefined
    }

    let frame = 0
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min(1, (now - start) / 1400)
          setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <>
      <div className="counter-box">
        <div className="heading-two text-white counter-number" ref={ref} aria-hidden="true">
          {count}
          {suffix}
        </div>
      </div>
      <div className="vertical-border" aria-hidden="true" />
      <p className="testimonial-counter-description" aria-hidden="true">
        {label}
      </p>
    </>
  )
}

// `.home-one-testimonial` - dark split layout with animated counters and a
// crossfading quote slider.
export default function TestimonialsOne() {
  const items = testimonials.slice(0, 2)
  const total = items.length
  const [index, setIndex] = useState(0)
  const item = items[index]

  const prev = () => setIndex((index - 1 + total) % total)
  const next = () => setIndex((index + 1) % total)

  return (
    <section className="home-one-testimonial">
      <div className="container">
        <div className="home-one-testimonial-top">
          <div className="testimonial-left">
            <div className="small-heading reveal">Our testimonials</div>
            <h2 className="heading-two heading-two-gap-top text-white reveal">
              Trusted by our successful students
            </h2>
          </div>

          <div className="testimonial-right reveal">
            {homeOneCounters.map((counter) => (
              <div
                className="testimonial-right-boxes"
                key={counter.label}
                role="group"
                aria-label={`${counter.value}${counter.suffix} ${counter.label}`}
              >
                <StatCounter
                  value={counter.value}
                  suffix={counter.suffix}
                  label={counter.label}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="home-one-testimonial-main">
          <div className="testimonial-image-wrap reveal">
            {AUTHOR_IMAGES.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={i === index ? `Portrait of ${item.name}` : ''}
                aria-hidden={i === index ? undefined : 'true'}
                className={`testimonial-image${i === index ? ' is-active' : ''}`}
                loading="lazy"
              />
            ))}
          </div>

          <div className="testimoanial-wrap reveal">
            <div className="slider">
              <div className="testimonial-slide" key={index}>
                <p className="testimonial-text">“{item.quote}”</p>
                <div className="testimonial-author-name">{item.name}</div>
                <div className="body-small-text testimonial-role">{item.role}</div>
              </div>

              <div className="slider-arrows">
                <button
                  type="button"
                  className="slider-arrow"
                  onClick={prev}
                  aria-label="Previous testimonial"
                >
                  <img src={ARROW} alt="" className="icon-rotate" />
                </button>
                <button
                  type="button"
                  className="slider-arrow right-arrow-button"
                  onClick={next}
                  aria-label="Next testimonial"
                >
                  <img src={ARROW} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
