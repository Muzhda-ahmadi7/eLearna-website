import { useState } from 'react'
import './FaqBlock.css'

// `.contact-two-faq` / `.faq-section` shared accordion:
// icon + eyebrow + heading on the left, expandable questions below.
export default function FaqBlock({ icon, eyebrow, title, items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="faq-inner-container w-container">
      <div className="faq-top-wrapper reveal">
        {icon && <img src={icon} alt="" className="faq-top-icon" />}
        <div className="faq-top-text">
          <div className="small-heading text-dark">{eyebrow}</div>
          <h2 className="heading-two heading-two-gap-top">{title}</h2>
        </div>
      </div>

      <div className="faq-list">
        {items.map((item, index) => {
          const isOpen = open === index
          return (
            <div className={`faq${isOpen ? ' is-open' : ''}`} key={item.q}>
              <button
                type="button"
                className="faq-toggle"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                <div className="heading-six">{item.q}</div>
                <div className="faq-two-icon">
                  <div className="plus-bar plus-one" />
                  <div className="plus-bar plus-two" />
                </div>
              </button>
              <div className="faq-answer">
                <div className="toggle-answer-clip">
                  <div className="toggle-answer-wrap">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
