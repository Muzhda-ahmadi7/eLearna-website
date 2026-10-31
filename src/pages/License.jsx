import { imageLinks, imagePreviews } from '../data/license';
import JourneyCta from '../components/JourneyCta';
import './License.css';

export default function License() {
  return (
    <>
      {/* checkout-hero-section */}
      <section className="checkout-hero-section">
        <div className="container">
          <div className="get-in-touch-block">
            <h1 className="no-margin-top margin-bottom-twenty text-white">License</h1>
            <p className="license-descripition margin-bottom-thirty text-light-white">
              All graphical assets in this template are licensed for personal and commercial use.
              If you&#x27;d like to use a specific asset, please check the license below.
            </p>
          </div>
        </div>
      </section>

      {/* licensing-section */}
      <section className="licensing-section">
        <div className="container">
          <div className="licensing-text-main-wrapper">
            <div>
              <div className="licensing-boxes">
                <h2 className="margin-bottom-fifteen">Imagery</h2>
                <p className="margin-bottom-twenty">
                  All graphical assets in this template are licensed for personal and commercial
                  use. If you&#x27;d like to use a specific asset, please check the license below.
                </p>
                <div className="images-links-wrapper margin-bottom-thirty">
                  {imageLinks.map((link, index) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="images-link"
                    >
                      {link.label}
                      {index < imageLinks.length - 1 ? ',' : ''}
                    </a>
                  ))}
                </div>
                <div className="images-preview margin-bottom-twenty">
                  {imagePreviews.map((preview) => (
                    <a
                      key={preview.href}
                      href={preview.href}
                      target="_blank"
                      rel="noreferrer"
                      className="images-wrapper"
                    >
                      <img src={preview.image} alt="Imagery preview" loading="lazy" />
                    </a>
                  ))}
                </div>
                <p className="paragraph">
                  Photography source form <span className="text-dark">Freepik - </span>
                  <a
                    href="https://www.freepikcompany.com/legal"
                    target="_blank"
                    rel="noreferrer"
                    className="text-dark"
                  >
                    Freepik License
                  </a>
                </p>
              </div>
            </div>

            <div className="licensing-border"></div>

            <div className="licensing-section-gap">
              <h2 className="margin-bottom-twenty-five">Typography</h2>
              <p className="margin-bottom-twenty">
                The font family used in <span className="text-dark">Elearna</span> is Space
                Grotesk and Outfit, an open-source font from{' '}
                <a href="https://fonts.google.com" target="_blank" rel="noreferrer" className="text-dark">
                  Google Fonts.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* cta-one (yellow) */}
      <JourneyCta variant="yellow" />
    </>
  );
}
