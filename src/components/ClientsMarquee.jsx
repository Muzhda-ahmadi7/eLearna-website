import { clientLogos } from '../data/site'
import './ClientsMarquee.css'

// `.clients-three` = dark band (Home Three), `.clients` = light band (Home One).
export default function ClientsMarquee({ variant = 'dark' }) {
  const light = variant === 'light'
  const train = (key) => (
    <div className="clients-train" key={key} aria-hidden={key !== 0}>
      {clientLogos.map((src, i) => (
        <img key={i} src={src} alt="" className="clients-logo" />
      ))}
    </div>
  )

  return (
    <section className={light ? 'clients' : 'clients-three'}>
      <div className="container">
        <div className={light ? 'clients-main' : undefined}>
          <p
            className={`clients-caption reveal${light ? ' text-dark clients-top' : ''}`}
            aria-label="Learn from 350+ leading universities and companies with us"
          >
            Learn from 350+ leading universities and companies with us
          </p>
          <div className="marquee-main reveal" aria-hidden="true">
            <div className="marquee-track">
              {train(0)}
              {train(1)}
              {train(2)}
            </div>
            {light && <div className="clients-overlay-one" />}
          </div>
        </div>
      </div>
    </section>
  )
}
