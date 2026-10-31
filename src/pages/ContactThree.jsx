import asset from '../utils/asset'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { contactInfo } from '../data/site'
import './ContactThree.css'

export default function ContactThree() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <section className={`contact-three${open ? ' form-open' : ''}`}>
      <div className="contact-three-main">
        <div className="contact-three-content">
          <div className="contact-big-text reveal">Contact</div>
          <p className="contact-big-description reveal">
            Lorem ipsum dolor sit amet consectetur. Est cras viverra pharetra tellus pulvinar amet
            aliquam. Vestibulum hac tincidunt.
          </p>
          <div className="contact-three-information-box">
            <a href={`mailto:${contactInfo.supportEmail}`} className="contact-three-information reveal">
              {contactInfo.supportEmail}
            </a>
            <div className="contact-three-border reveal" />
            <a href={contactInfo.phoneHref} className="contact-three-information reveal">
              {contactInfo.phone}
            </a>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`icon-box${open ? ' is-open' : ''}`}
        aria-label="Toggle contact form"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <img src={asset("/assets/img/icons.svg")} alt="" />
      </button>

      <div className="contact-three-form">
        <div
          className={`contact-three-form-pop-up${open ? ' is-open' : ''}`}
          role="dialog"
          aria-label="Contact form"
          aria-hidden={!open}
          inert={!open}
        >
          <div className="no-margin">
            {sent ? (
              <div className="contact-three-form-done">Thank you! Your submission has been received!</div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  setSent(true)
                }}
              >
                <div className="contact-three-form-top">
                  <div className="heading-four text-dark">Contact information</div>
                  <button
                    type="button"
                    className="contact-form-close"
                    aria-label="Close contact form"
                    onClick={() => setOpen(false)}
                  >
                    ✕
                  </button>
                </div>
                <div className="contact-three-form-inside">
                  <input className="text-field-two" type="text" placeholder="Your name" required />
                  <input className="text-field-two" type="email" placeholder="Email" required />
                  <input className="text-field-two" type="tel" placeholder="Phone" required />
                  <input
                    className="text-field-two margin-bottom-thirty"
                    type="text"
                    placeholder="Enquiry type"
                    required
                  />
                  <input className="button button-yellow button-full-width" type="submit" value="Send message" />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* contact-three-footer (compact) */}
      <section className="contact-three-footer">
        <div className="contact-three-container top-border w-container">
          <div className="contact-three-footer-main">
            <div className="contact-footer-links-wrapper">
              <a
                className="footer-small-link"
                href="https://elearna.webflow.io/information/style-guide"
                target="_blank"
                rel="noreferrer"
              >
                Style guide
              </a>
              <a
                className="footer-small-link"
                href="https://elearna.webflow.io/401"
                target="_blank"
                rel="noreferrer"
              >
                Password protected
              </a>
              <Link className="footer-small-link" to="/not-found-demo">
                404
              </Link>
              <Link className="footer-small-link" to="/information/license">
                License
              </Link>
            </div>
            <div className="contact-footer-links-wrapper">
              <div className="small-heading small-heading-mobile">
                Design by{' '}
                <a
                  className="footer-small-link"
                  href="https://www.radianttemplates.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Radiant Templates
                </a>
              </div>
              <div className="small-heading small-heading-mobile">
                Powered by{' '}
                <a
                  className="footer-small-link"
                  href="https://webflow.com/?r=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  webflow
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
