import { Link } from 'react-router-dom'
import './CourseCardOne.css'

const RATING = '/assets/img/rating.svg'
const BOOKS = '/assets/img/books-icon-dark.svg'
const PEOPLE = '/assets/img/person-icon-dark.svg'

// `.courser-card-one` - top-course card with info row that swaps to actions on
// hover/focus (Home One).
export default function CourseCardOne({ course }) {
  const { slug, title, category, rating, reviews, lessons, enrolled, price, image } = course
  const isFree = price === null
  const detailsHref = `/course/${slug}`

  return (
    <article className="courser-card-one reveal">
      <Link to={detailsHref} className="course-card-image-wrapper" tabIndex={-1} aria-hidden="true">
        <img src={image} alt="" className="course-card-image" loading="lazy" />
      </Link>

      <div className="course-content">
        <div className="small-shot-heading margin-bottom-twenty">{category}</div>
        <h3 className="heading-four course-heading">
          <Link to={detailsHref}>{title}</Link>
        </h3>
        <div className="course-rating">
          <img src={RATING} alt="" className="course-rating-stars" />
          <div className="small-shot-heading small-heading-body-color">
            {rating} ({reviews})
          </div>
        </div>

        <div className="cards-wrap">
          <div className="course-cards-button-wrapper course-cards-information">
            <div className="cards-button-left">
              <div className="course-information">
                <img src={BOOKS} alt="" />
                <div className="menu-font text-dark">{lessons}</div>
              </div>
            </div>
            <div className="cards-button-right">
              <div className="course-information align-right">
                <img src={PEOPLE} alt="" className="course-people-icon" />
                <div className="menu-font text-dark">{enrolled}</div>
              </div>
            </div>
          </div>

          <div
            className={`course-cards-button-wrapper course-cards-button${isFree ? ' free-card' : ''}`}
          >
            <div
              className={`cards-button-left cousers-button-wrapper-border${isFree ? ' border-off' : ''}`}
            >
              <div className="buttons-hover-show">
                <Link to={detailsHref} className="button button-yellow course-button">
                  Course Details
                </Link>
              </div>
            </div>
            {!isFree && (
              <div className="cards-button-right">
                <div className="buttons-hover-show">
                  <Link to={detailsHref} className="button button-border-off course-button">
                    Enroll
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="course-price-wrapper">
          <div>{isFree ? 'Free' : `$${price}`}</div>
        </div>
      </div>
    </article>
  )
}
