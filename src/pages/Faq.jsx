import { useState } from 'react'
import { faqTabs } from '../data/faqs'
import JourneyCta from '../components/JourneyCta'
import '../components/FaqBlock.css'
import './Faq.css'

export default function Faq() {
  const [tab, setTab] = useState(0)
  const [open, setOpen] = useState(0)
  const active = faqTabs[tab]

  return (
    <>
      {/* faq-hero */}
      <section className="faq-hero">
        <div className="w-container">
          <div className="faq-hero-main">
            <h1 className="no-margin text-white reveal">Frequently asked questions</h1>
            <p className="no-margin-bottom text-light-white reveal">
              Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id.
            </p>
          </div>
        </div>
      </section>

      {/* faq-section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-tab">
            <div className="faq-tab-menu" role="tablist">
              {faqTabs.map((item, index) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={tab === index}
                  key={item.id}
                  className={`tab-link${tab === index ? ' w--current' : ''}`}
                  onClick={() => {
                    setTab(index)
                    setOpen(0)
                  }}
                >
                  <div>{item.label}</div>
                </button>
              ))}
            </div>

            <div className="faq-tab-content">
              <div className="faq-box-main" key={active.id}>
                {active.items.map((item, index) => {
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
          </div>
        </div>
      </section>

      {/* cta-three */}
      <JourneyCta variant="photo" />
    </>
  )
}
