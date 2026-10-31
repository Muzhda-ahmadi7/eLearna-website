import { events } from '../data/events'
import JourneyCta from '../components/JourneyCta'
import './Events.css'

function EventCard({ event }) {
  return (
    <div className="events-card-two reveal">
      <img src={event.image} alt={event.title} className="event-image" />
      <div className="events-date-wrapper">
        <div className="heading-three">{event.day}</div>
        <div className="event-date-more">
          <div className="small-shot-heading small-heading-body-color">{event.month}</div>
          <div className="small-shot-heading small-heading-body-color">{event.year}</div>
        </div>
      </div>
      <div className="marquee-text-box">
        <div className="event-marquee events-marquee-two">
          <div className="marquee-track">
            <div className="marquee-train">
              {[0, 1, 2].map((i) => (
                <span key={i} className="event-marquee-item">
                  <span className="heading-six">See event details</span>
                  <span className="small-dot" />
                </span>
              ))}
            </div>
            <div className="marquee-train" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <span key={i} className="event-marquee-item">
                  <span className="heading-six">See event details</span>
                  <span className="small-dot" />
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="events-text">
          <div className="events-cards-tag">
            <div className="small-shot-heading small-heading-body-color">{event.tag}</div>
            <div className="small-dot color-grey" />
            <div className="small-shot-heading small-heading-body-color">{event.time}</div>
          </div>
          <div className="heading-five">{event.title}</div>
        </div>
      </div>
    </div>
  )
}

export default function Events() {
  return (
    <>
      {/* events-hero */}
      <section className="events-hero">
        <div className="container">
          <div className="career-hero-text">
            <div className="small-heading reveal">enjoy with</div>
            <h1 className="no-margin-bottom heading-one-top-gap text-white reveal">
              Great upcoming events for our institute
            </h1>
          </div>
        </div>
      </section>

      {/* events-main */}
      <section className="events-main">
        <div className="container">
          <div className="events-main-box">
            <div className="small-heading text-dark reveal">Our event</div>
            <h2 className="heading-two heading-two-gap-updown reveal">Professional online events</h2>
            <p className="events-main-description reveal">
              Lorem ipsum dolor sit amet consectetur. Congue sit pellentesque eu scelerisque urna a
              porttitor. Massa nec ipsam sint.
            </p>

            <div className="collection-list-wrapper">
              <div className="events-wrapper">
                {events.map((event) => (
                  <EventCard event={event} key={event.slug} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cta-one (yellow) */}
      <JourneyCta variant="yellow" />
    </>
  )
}
