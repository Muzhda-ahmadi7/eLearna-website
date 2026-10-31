import { Link } from 'react-router-dom'
import { footerContent, contactInfo } from '../data/site'
import './Footer.css'

const LOGO = '/assets/img/elearna.svg'

// `footer-two` (default) is the dark variant used across the recreated pages;
// `footer-one` (events + license) swaps the background photo, adds a
// "Quick links" column and drops the "Need help?" column.
export default function Footer({ variant = 'two' }) {
  const isOne = variant === 'one'

  const columns = (
    <>
      {isOne && (
        <div className="footer-links-wrap-two">
          <div className="heading-five text-white">Quick links</div>
          <div className="links-wrap">
            {footerContent.quickLinks.map((l) => (
              <Link key={l.label} to={l.href} className="footer-link-hover">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="footer-links-wrap-two">
        <div className="heading-five text-white">Popular courses</div>
        <div className="links-wrap">
          {footerContent.popularCourses.map((c) => (
            <Link key={c.slug} to="/course-three" className="footer-link-hover">
              {c.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="footer-links-wrap-two">
        <div className="heading-five text-white">Company</div>
        <div className="links-wrap">
          {footerContent.company.map((l) => (
            <Link key={l.label} to={l.href} className="footer-link-hover">
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="footer-links-wrap-two">
        <div className="heading-five text-white">CMS</div>
        <div className="links-wrap">
          {footerContent.cms.map((l) => (
            <Link key={l.label} to={l.href} className="footer-link-hover">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )

  return (
    <section className={isOne ? 'footer-one' : 'footer-two'}>
      <div className="container">
        <div className={isOne ? 'footer-one-main' : 'footer-two-main'}>
          <div className="footer-links-wrap">
            <Link to="/" className="footer-logo-link">
              <img src={LOGO} alt="Elearna" className="elerna" />
            </Link>
            <p className="no-margin-bottom footer-description">{footerContent.description}</p>
          </div>

          {columns}

          {!isOne && (
            <div className="footer-links-wrap-three">
              <div className="heading-five text-white">Need help?</div>
              <div className="footer-links-contact">
                <div>
                  <div className="footer-contact-label">Call us</div>
                  <a
                    href={contactInfo.phoneHref}
                    className="heading-five text-white footer-hover-in"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div>
                  <div className="footer-contact-label">Need support?</div>
                  <a
                    href={`mailto:${contactInfo.supportEmail}`}
                    className="heading-five text-white footer-hover-in"
                  >
                    {contactInfo.supportEmail}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container footer-container">
        <div className="border-one" />
        <div className="footer-bottom-main">
          <div className="footer-bottom-text">
            Design by{' '}
            <a
              href="https://www.radianttemplates.com"
              target="_blank"
              rel="noreferrer"
              className="footer-bottom-link"
            >
              {footerContent.credit.design}
            </a>
          </div>
          <div className="footer-bottom-text">
            Powered by{' '}
            <a
              href="https://webflow.com/?r=0"
              target="_blank"
              rel="noreferrer"
              className="footer-bottom-link"
            >
              {footerContent.credit.powered}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
