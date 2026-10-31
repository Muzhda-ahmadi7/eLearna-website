import { Link } from 'react-router-dom'
import { team } from '../data/team'
import JourneyCta from '../components/JourneyCta'
import './Team.css'

export default function Team() {
  return (
    <>
      {/* team-hero */}
      <section className="team-hero">
        <div className="w-container">
          <div className="team-hero-main">
            <h1 className="no-margin text-white reveal">Our experts</h1>
          </div>
        </div>
      </section>

      {/* team-section */}
      <section className="team-section">
        <div className="container">
          <div className="team-main">
            <div className="small-heading text-dark reveal">Contact Us</div>
            <h2 className="heading-two heading-two-gap-updown team-heading reveal">
              Know our expert team agents, they solve your questions
            </h2>
            <div className="reveal">
              Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id
            </div>
          </div>

          <div className="team-wrapper">
            {team.map((member) => (
              <Link to={`/team-members/${member.slug}`} className="team-card reveal" key={member.slug}>
                <div className="team-card-image">
                  <img src={member.image} alt={member.name} className="team-member-image" />
                </div>
                <div className="team-member-names">
                  <div className="heading-five">{member.name}</div>
                  <div className="small-shot-heading small-heading-body-color">{member.role}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* cta-three */}
      <JourneyCta variant="photo" />
    </>
  )
}
