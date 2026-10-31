import { useState } from 'react'
import { Link } from 'react-router-dom'
import { plans } from '../data/plans'
import FaqBlock from '../components/FaqBlock'
import JourneyCta from '../components/JourneyCta'
import './PricingThree.css'

const CHECK = '/assets/img/pricing-check.svg'

const pricingThreeFaq = [
  { q: 'How do I enroll in an online course?', a: 'Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis vitae adipiscing sit sed ultricies.' },
  { q: 'Are there any prerequisites for enrolling in online courses?', a: 'Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis vitae adipiscing sit sed ultricies.' },
  { q: 'What are the technical requirements for online learning?', a: 'Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis vitae adipiscing sit sed ultricies.' },
  { q: 'What if I encounter technical difficulties?', a: 'Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis vitae adipiscing sit sed ultricies.' },
  { q: 'Are there live classes, or can I learn at my own pace?', a: 'Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis vitae adipiscing sit sed ultricies.' },
]

export default function PricingThree() {
  const [yearly, setYearly] = useState(false)

  return (
    <>
      {/* pricing-three-hero */}
      <section className="pricing-three-hero">
        <div className="container">
          <div className="pricing-three-top">
            <div className="small-heading reveal">Pricing</div>
            <h1 className="heading-one heading-one-top-gap text-white pricing-three-hero-heading reveal">
              Flexible pricing plan for everyone
            </h1>
          </div>

          <div className="pricing-one-toggle-box pricing-three-toggle reveal">
            <div className="small-heading">Monthly</div>
            <div
              className="toggle-box"
              role="switch"
              aria-checked={yearly}
              tabIndex={0}
              onClick={() => setYearly((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setYearly((v) => !v)
              }}
            >
              <div className={`toggle-ball${yearly ? ' toggle-ball-right' : ''}`} />
            </div>
            <div className="small-heading">Yearly</div>
          </div>

          <div className="pricing-one-cards-wrapper">
            {plans.map((plan, index) => {
              const dark = plan.name === 'Premium'
              return (
                <div
                  className={`pricing-one-card reveal${dark ? ' pricing-dark-card yellow-border' : ''}`}
                  key={plan.name}
                >
                  <div className={`heading-five margin-bottom-twenty-five${dark ? ' text-white' : ''}`}>
                    {plan.name}
                  </div>
                  <p className={`margin-bottom-thirty${dark ? ' text-light-white' : ''}`}>
                    {plan.description}
                  </p>
                  <div className={`amount-wrapper${yearly ? ' show-yearly' : ''}`}>
                    <div className="monthly-amount">
                      <div className={`heading-three${dark ? ' text-white' : ''}`}>
                        ${plan.monthly}
                        <span className={`small-body-font${dark ? ' text-light-white' : ''}`}>
                          {' '}
                          /month
                        </span>
                      </div>
                    </div>
                    <div className="yearly-amount">
                      <div className={`heading-three${dark ? ' text-white' : ''}`}>
                        ${plan.yearly}
                        <span className={`small-body-font${dark ? ' text-light-white' : ''}`}>
                          {' '}
                          /month
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-one-check-points">
                    {plan.features.map((feature) => (
                      <div className="pricing-one-points" key={feature}>
                        <img src={CHECK} alt="" />
                        <div className={dark ? 'text-light-white' : undefined}>{feature}</div>
                      </div>
                    ))}
                  </div>
                  <div className="pricing-box-one-button">
                    <Link
                      to="/contact-three"
                      className={`button ${dark ? 'button-yellow' : 'button-border-off'}`}
                    >
                      <div>Subscribe this plan</div>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* contact-two-faq */}
      <section className="contact-two-faq">
        <FaqBlock
          icon="/assets/img/faq-icons.svg"
          eyebrow="Contact Us"
          title="Frequently asked questions"
          items={pricingThreeFaq}
        />
      </section>

      {/* cta-three */}
      <JourneyCta variant="photo" />
    </>
  )
}
