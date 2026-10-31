import { whyUs } from '../data/site'
import './WhyUs.css'

// `.home-three-journey` = white feature cards on a light blue band (Home Three).
// `.home-one-journey` = transparent centered feature row inside the continuous
// light gradient used by Home One's trending + journey sections.
export default function WhyUs({ variant = 'three' }) {
  const isOne = variant === 'one'

  return (
    <section className={isOne ? 'home-one-journey' : 'home-three-journey'}>
      <div className="container">
        <div className="home-one-journey-main-wrap">
          <div className="small-heading text-dark reveal">{whyUs.eyebrow}</div>
          <div className="heading-three heading-three-gap reveal">{whyUs.title}</div>
          <p className="no-margin-bottom journey-description reveal">{whyUs.text}</p>
          <div className="journey-options-wrap">
            {whyUs.features.map((f) => (
              <div className="journey-cards reveal" key={f.title}>
                <img src={f.icon} alt="" />
                <div className="heading-five">{f.title}</div>
                <p className="no-margin-bottom">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
