import { Link } from 'react-router-dom'
import './JourneyCta.css'

// `.cta-three` = dark photo background, `.cta-one` = panel pulled up over the
// previous section. Inside `.cta-one`:
//   dark   - home three (dark panel, yellow primary button)
//   yellow - events + license (yellow panel, dark bordered buttons)
export default function JourneyCta({
  variant = 'photo',
  title = 'Are you ready to start your journey?',
  primary = { label: 'Browse courses', href: '/course-three' },
  secondary,
}) {
  if (variant === 'dark' || variant === 'yellow') {
    const dark = variant === 'dark'
    const secondaryLink = secondary ?? { label: 'Became a teacher', href: '/career' }
    return (
      <section className="cta-one">
        <div className="container">
          <div className={`cta-main${dark ? ' cta-two-main' : ''}`}>
            <div className={`heading-three cta-heading${dark ? ' text-white' : ''}`}>{title}</div>
            <div className="cta-button-wrapper">
              {dark ? (
                <Link to={primary.href} className="button button-yellow">
                  <div>{primary.label}</div>
                </Link>
              ) : (
                <Link to={primary.href} className="button button-border-off">
                  <div>{primary.label}</div>
                </Link>
              )}
              <Link
                to={secondaryLink.href}
                className={`button ${dark ? 'white-border-button' : 'black-border-button'}`}
              >
                <div>{secondaryLink.label}</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const secondaryLink = secondary ?? { label: 'Became an instructor', href: '/career' }

  return (
    <section className="cta-three">
      <div className="cta-three-container">
        <div className="cta-three-main">
          <div className="heading-three cta-heading text-white">{title}</div>
          <div className="cta-button-wrapper">
            <Link to={primary.href} className="button white-border-button">
              <div>{primary.label}</div>
            </Link>
            <Link to={secondaryLink.href} className="button button-yellow">
              <div>{secondaryLink.label}</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
