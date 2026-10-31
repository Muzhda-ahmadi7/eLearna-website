import asset from '../utils/asset'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { courses, courseFilters, getCourse } from '../data/courses'
import { homeOneCategories, offerSection } from '../data/site'
import CourseCardOne from '../components/CourseCardOne'
import CourseCardTwo from '../components/CourseCardTwo'
import ClientsMarquee from '../components/ClientsMarquee'
import TestimonialsOne from '../components/TestimonialsOne'
import WhyUs from '../components/WhyUs'
import JourneyCta from '../components/JourneyCta'
import './HomeOne.css'

const VIDEO_CONTROLS = asset('/assets/img/video-controls.svg')

// "All courses" order on the reference Home One page.
const HOME_ONE_ORDER = [
  'crisis-management-and-problem-solving-strategies',
  'advanced-photoshop-techniques-for-designers',
  'operations-management-and-process-improvement',
  'database-integration-with-mongodb',
  'risk-management-and-business-continuity',
  'full-stack-development-with-the-mern-stack',
]

const TRENDING_ORDER = [
  'building-single-page-applications-with-angular',
  'database-integration-with-mongodb',
  'risk-management-and-business-continuity',
  'full-stack-development-with-the-mern-stack',
]

const allCourses = HOME_ONE_ORDER.map(getCourse).filter(Boolean)
const trendingCourses = TRENDING_ORDER.map(getCourse).filter(Boolean)

function tabId(label) {
  return `course-tab-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
}

export default function HomeOne() {
  const [tab, setTab] = useState(courseFilters[0])
  const tabsRef = useRef(null)

  const visibleCourses =
    tab === courseFilters[0] ? allCourses : courses.filter((course) => course.category === tab)

  const handleTabKeyDown = (event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'Home' && event.key !== 'End') {
      return
    }
    event.preventDefault()
    const current = courseFilters.indexOf(tab)
    let next = current
    if (event.key === 'ArrowRight') next = (current + 1) % courseFilters.length
    if (event.key === 'ArrowLeft') next = (current - 1 + courseFilters.length) % courseFilters.length
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = courseFilters.length - 1
    setTab(courseFilters[next])
    tabsRef.current?.querySelectorAll('[role="tab"]')[next]?.focus()
  }

  return (
    <>
      {/* home-one-hero */}
      <section className="home-one-hero">
        <div className="container">
          <div className="home-one-hero-main">
            <div className="home-one-hero-image-wrap">
              <img
                src={asset("/assets/img/banner-girl.webp")}
                alt="Student smiling with a notebook"
                width="677.5"
                height="746"
                className="hero-image-main reveal"
              />
              <img
                src={asset("/assets/img/achievements.webp")}
                alt="125+ achievement awards"
                width="275"
                height="93"
                className="achievement-image reveal"
                style={{ transitionDelay: '260ms' }}
              />
              <img
                src={asset("/assets/img/trusted-by.avif")}
                alt="Trusted by 15000+ enrolled students"
                width="268"
                height="179"
                className="trusted-by-image reveal"
                style={{ transitionDelay: '340ms' }}
              />
              <img src={asset("/assets/img/half-moon.svg")} alt="" className="half-moon reveal" aria-hidden="true" />
              <img
                src={asset("/assets/img/yellow-dot.svg")}
                alt=""
                width="17"
                height="17"
                className="yellow-dot-small reveal"
                aria-hidden="true"
              />
              <img
                src={asset("/assets/img/yellow-dot.svg")}
                alt=""
                width="11"
                height="11"
                className="yellow-dot-left reveal"
                aria-hidden="true"
              />
              <img
                src={asset("/assets/img/blue-circle.svg")}
                alt=""
                className="blue-circle reveal"
                aria-hidden="true"
              />
            </div>

            <div className="home-one-hero-text">
              <div className="small-heading reveal" style={{ transitionDelay: '80ms' }}>
                Online learning
              </div>
              <h1 className="text-white heading-one-gap reveal" style={{ transitionDelay: '160ms' }}>
                More then <span className="brand-color">25000+</span> education courses online
              </h1>
              <p
                className="text-light-white hero-description reveal"
                style={{ transitionDelay: '240ms' }}
              >
                Lorem ipsum dolor sit amet consectetur. Gravida enim risus sollicitudin mauris
                tincidunt commodo ornare.
              </p>
              <Link
                to="/contact-three"
                className="button reveal"
                style={{ transitionDelay: '320ms' }}
              >
                <div>Get Started</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* clients */}
      <ClientsMarquee variant="light" />

      {/* top-category */}
      <section className="top-category">
        <div className="container">
          <div className="top-category-main">
            <div className="small-heading text-dark reveal">Top Categories</div>
            <h2 className="heading-three heading-three-gap category-heading reveal">
              Discover leading categories to elevate your journey
            </h2>
            <div className="category-cards-wrap">
              {homeOneCategories.map((category) => (
                <Link
                  to={`/course-three?category=${category.slug}`}
                  className="category-cards reveal"
                  key={category.name}
                >
                  <div className="category-icons-wrap">
                    <img src={category.icon} alt="" />
                  </div>
                  <div className="heading-six margin-bottom-five category-text">{category.name}</div>
                  <div>{category.count} Courses</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* quick-start */}
      <section className="quick-start">
        <div className="container">
          <div className="quick-start-main">
            <div className="quick-start-card-one reveal">
              <div className="quick-start-text-wrap-one">
                <div className="heading-four">Quick access to the popular courses</div>
                <Link to="/course-three" className="button button-yellow">
                  <div>View Courses</div>
                </Link>
              </div>
              <img
                src={asset("/assets/img/woman-using-laptop.webp")}
                alt="Woman studying online with a laptop"
                width="421"
                height="288"
                className="tab-image-full-width quick-start-image"
                loading="lazy"
              />
            </div>

            <div className="quick-start-card-two reveal">
              <div className="quick-start-card-two-left">
                <div className="heading-four">Develop your skills online!</div>
                <Link to="/career" className="button button-border-off">
                  <div>Apply Now</div>
                </Link>
              </div>
              <div className="quick-start-card-video">
                <video
                  className="quick-start-video"
                  poster={asset("/assets/img/home-one-video-poster.jpg")}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Preview of an online lesson"
                >
                  <source src={asset("/assets/video/home-one-video.mp4")} type="video/mp4" />
                </video>
                <img src={VIDEO_CONTROLS} alt="" className="video-controls" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* home-one-courses */}
      <section className="home-one-courses">
        <div className="container">
          <div className="home-one-courses-top">
            <div className="home-one-courses-heading">
              <div className="small-heading text-dark reveal">Online learning</div>
              <h2 className="no-margin-bottom heading-two-gap reveal">Top online courses</h2>
            </div>
            <div
              className="tabs-menu reveal"
              role="tablist"
              aria-label="Filter courses by category"
              ref={tabsRef}
              onKeyDown={handleTabKeyDown}
            >
              {courseFilters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  id={tabId(filter)}
                  role="tab"
                  aria-selected={tab === filter}
                  aria-controls="top-courses-panel"
                  tabIndex={tab === filter ? 0 : -1}
                  className={`tab-option${tab === filter ? ' is-active' : ''}`}
                  onClick={() => setTab(filter)}
                >
                  <div>{filter}</div>
                </button>
              ))}
            </div>
          </div>

          <div
            className="courses-cards-wrapper"
            id="top-courses-panel"
            role="tabpanel"
            aria-labelledby={tabId(tab)}
            key={tab}
          >
            {visibleCourses.map((course) => (
              <CourseCardOne course={course} key={course.slug} />
            ))}
          </div>

          <div className="more-courses-container reveal">
            <div>
              We assist you in finding the ideal tutor at no cost.{' '}
              <Link to="/course-three" className="button-font">
                Browse all available courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* home-one-offer */}
      <section className="home-one-offer">
        <div className="container">
          <div className="home-one-offer-main">
            <div className="home-one-offer-image-wrap">
              <div className="home-one-offer-images-left">
                <div className="free-courses-image reveal">
                  <img
                    src={asset("/assets/img/free-course.avif")}
                    alt="50+ free courses listed online"
                    width="272"
                    height="94"
                    loading="lazy"
                  />
                </div>
                <div className="home-one-offer-image-shadow reveal">
                  <img
                    src={asset("/assets/img/man-holding-graph.webp")}
                    alt="Student reviewing analytics"
                    width="362"
                    height="454"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="home-one-offer-image-right reveal">
                <img
                  src={asset("/assets/img/woman-holding-tab.webp")}
                  alt="Student learning on a tablet"
                  width="332"
                  height="434"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="home-one-offer-right">
              <div className="small-heading text-dark reveal">{offerSection.eyebrow}</div>
              <h2 className="heading-two-gap-updown reveal">{offerSection.title}</h2>
              <p className="margin-bottom-twenty reveal">{offerSection.text}</p>
              <ul className="home-one-offer-list reveal">
                {offerSection.items.map((item) => (
                  <li className="heading-six" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="home-one-offer-box reveal">
                <div className="home-one-offer-text">
                  <div className="heading-five">{offerSection.ctaTitle}</div>
                  <p className="no-margin-bottom">{offerSection.ctaText}</p>
                </div>
                <div className="no-shrink">
                  <Link to="/contact-three" className="button button-border-off">
                    <div>Get Started</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* home-one-testimonial */}
      <TestimonialsOne />

      <div className="home-one-linear-background">
        {/* home-one-trending-courses */}
        <section className="home-one-trending-courses">
          <div className="container">
            <div className="trending-courses-top">
              <div className="small-heading text-dark reveal">Trending courses</div>
              <h2 className="heading-three heading-three-gap reveal">Explore our top programs</h2>
            </div>
            <div className="tranding-courses-cards">
              {trendingCourses.map((course) => (
                <CourseCardTwo course={course} key={course.slug} />
              ))}
            </div>
          </div>
        </section>

        {/* home-one-journey */}
        <WhyUs variant="one" />
      </div>

      {/* cta-one */}
      <JourneyCta variant="yellow" />
    </>
  )
}
