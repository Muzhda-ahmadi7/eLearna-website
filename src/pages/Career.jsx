import { Link } from 'react-router-dom'
import JourneyCta from '../components/JourneyCta'
import './Career.css'

const CHECK = '/assets/img/black-check.svg'

const points = [
  {
    title: 'Full network visibility worldwide',
    text: 'Amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Supported the use of fiber optic cable',
    text: 'Amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

const jobs = [
  { title: 'Software development instructor', posts: '50 Posts available', salary: '$23K - $35K' },
  { title: 'Machine learning educator', posts: '35 Posts available', salary: '$20K - $35K' },
  { title: 'Blockchain Technology Instructor', posts: '47 Posts available', salary: '$26K - $40K' },
  { title: 'Digital Design and UX Instructor', posts: '50 Posts available', salary: '$23K - $35K' },
]

const topics = [
  { label: 'Job Description :', value: 'Lorem ipsum dolor sit amet consectetur.' },
  { label: 'Job Type :', value: 'Full-time, Permanent' },
  { label: 'Experience :', value: '2 years' },
]

export default function Career() {
  return (
    <>
      {/* career-hero */}
      <section className="career-hero">
        <div className="container">
          <div className="career-hero-text">
            <div className="small-heading reveal">We are hiring</div>
            <h1 className="no-margin-bottom text-white margin-top-fifteen reveal">
              Begin your journey as an instructor
            </h1>
          </div>
        </div>
      </section>

      {/* career-connetivity */}
      <section className="career-connetivity">
        <div className="container">
          <div className="connetivity-main">
            <div className="connetivity-left">
              <div className="career-left-image reveal">
                <img
                  src="/assets/img/career-page-image.webp"
                  alt="Instructor at work"
                  className="border-radius-four tab-image"
                />
              </div>
              <div className="career-right-image reveal">
                <img
                  src="/assets/img/career-page-image-2.webp"
                  alt="Teaching online"
                  className="border-radius-four tab-image"
                />
              </div>
            </div>
            <div className="connectivity-right">
              <div className="small-heading text-dark reveal">Why we are</div>
              <h2 className="heading-two heading-two-gap-top margin-bottom-thirty-five mobile-margin-fifteen reveal">
                We help connectivity across the world
              </h2>
              <p className="margin-bottom-twenty reveal">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusm tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
              <div>
                {points.map((point, index) => (
                  <div
                    className={`connectivity-points${index === 0 ? ' margin-bottom-twenty-five' : ''} reveal`}
                    key={point.title}
                  >
                    <img src={CHECK} alt="" className="checkpoint-icon" />
                    <div className="connectivity-point-text">
                      <div className="heading-five margin-bottom-fifteen">{point.title}</div>
                      <p className="no-margin-bottom">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* career-cards */}
      <section className="career-cards">
        <div className="container">
          <div className="career-cards-main">
            <div className="small-heading text-dark reveal">job opening</div>
            <h2 className="heading-two heading-two-gap-top text-align-center reveal">
              Be a part of our faculty
            </h2>

            <div className="career-list">
              <div className="career-cards-wrapper">
                {jobs.map((job) => (
                  <div className="career-cards-options reveal" key={job.title}>
                    <div className="heading-four">{job.title}</div>
                    <div className="career-card-information">
                      <div className="small-shot-heading small-heading-body-color">{job.posts}</div>
                      <div className="small-shot-heading small-heading-body-color">
                        4367 Lula Shores, Derekton 48438
                      </div>
                    </div>
                    <div className="career-buttons-wrap">
                      <div className="button button-yellow">
                        <div>{job.salary}</div>
                      </div>
                      <Link to="/contact-three" className="button button-border-off">
                        <div>Apply Now</div>
                      </Link>
                    </div>
                    <div className="career-topics-list">
                      {topics.map((topic) => (
                        <div className="career-topics" key={topic.label}>
                          <div className="dot" />
                          <div>{topic.label}</div>
                          <div>{topic.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
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
