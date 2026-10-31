import { useState } from 'react'
import { Link } from 'react-router-dom'
import { courses } from '../data/courses'
import { courseHeroCategories } from '../data/site'
import CourseCardTwo from '../components/CourseCardTwo'
import JourneyCta from '../components/JourneyCta'
import './CourseThree.css'

export default function CourseThree() {
  const [tab, setTab] = useState(0)
  const pages = [courses.slice(0, 8), courses.slice(8)]

  return (
    <>
      {/* course-one-hero */}
      <section className="course-one-hero">
        <div className="container">
          <div className="course-three-hero-main">
            <div className="small-heading reveal">START WITH</div>
            <h1 className="heading-one heading-one-top-gap text-white reveal">
              Professional online courses
            </h1>
          </div>
        </div>
      </section>

      {/* course-one-category */}
      <section className="course-one-category">
        <div className="container">
          <div className="course-one-category-main">
            {courseHeroCategories.map((category, index) => (
              <Link
                to={`/course-three?category=${category.slug}`}
                className="course-one-category-cards reveal"
                key={`${category.name}-${index}`}
              >
                <div className="category-icons-wrap">
                  <img src={category.icon} alt="" />
                </div>
                <div className="heading-six margin-bottom-five category-text">{category.name}</div>
                <div className="category-count">{category.count} Courses</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* course-one-store */}
      <section className="course-one-store">
        <div className="container">
          <div className="course-one-store-head">
            <div className="small-heading text-dark reveal">Online learning</div>
            <h2 className="heading-two heading-two-gap-top course-one-store-heading reveal">
              All online courses
            </h2>
          </div>

          <div className="courses-pagination">
            <div className="courses-tab-content">
              {pages.map((page, index) => (
                <div
                  key={index}
                  className={`courses-tab-pane${tab === index ? ' is-active' : ''}`}
                  hidden={tab !== index}
                >
                  <div className="tranding-courses-cards">
                    {page.map((course) => (
                      <CourseCardTwo course={course} key={course.slug} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="courses-pagination-menu" role="tablist">
              {pages.map((page, index) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={tab === index}
                  key={index}
                  className={`tab-nav-link${tab === index ? ' w--current' : ''}`}
                  onClick={() => setTab(index)}
                >
                  <div>{index + 1}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* cta-three */}
      <JourneyCta variant="photo" />
    </>
  )
}
