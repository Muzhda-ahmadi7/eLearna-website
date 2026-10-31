import asset from '../utils/asset'
import { Link } from 'react-router-dom'
import './CourseCardTwo.css'

const RATING = asset('/assets/img/rating.svg')
const TICK = asset('/assets/img/tick.svg')

// `.course-cards-two` - popular course card with hover pop-up (home three).
export default function CourseCardTwo({ course }) {
  const {
    slug,
    title,
    category,
    rating,
    reviews,
    lessons,
    enrolled,
    price,
    image,
    description,
    features,
  } = course

  return (
    <div className="course-cards-two reveal">
      <div className="course-card-top">
        <div className="course-overlay" />
        <img src={image} alt={title} className="course-card-two-image" />
        <div className="course-image-wrap" />
        <div className="course-card-top-description">
          <div className="small-shot-heading small-heading-body-color margin-bottom-ten">
            {category}
          </div>
          <div className="heading-five margin-bottom-twenty">{title}</div>
          <div className="course-two-card-rating">
            <img src={RATING} alt="Rating" className="rating-stars" />
            <div className="small-shot-heading small-heading-body-color">
              {rating} ({reviews})
            </div>
          </div>
        </div>
        <div className="course-price-wrapper course-two-price">
          <div>{price === null ? 'Free' : `$${price}`}</div>
        </div>
      </div>

      <div className="course-card-pop-up">
        <div className="heading-five course-name">{title}</div>
        <div className="course-card-popup-tags">
          <div className="grey-dot" />
          <div className="small-shot-heading small-heading-body-color">{lessons}</div>
          <div className="grey-dot" />
          <div className="small-shot-heading small-heading-body-color">{enrolled}</div>
        </div>
        <p className="course-card-two-description">{description}</p>
        <div className="course-checkes">
          {features.map((f) => (
            <div className="course-card-checklist" key={f}>
              <img src={TICK} alt="" />
              <div>{f}</div>
            </div>
          ))}
        </div>
        <div className="course-cards-two-button">
          <Link
            to={`/course/${slug}`}
            className={`button button-yellow course-two-button ${price === null ? 'free-button' : ''}`}
          >
            Course Details
          </Link>
          {price !== null && (
            <Link to={`/course/${slug}`} className="button button-border-off course-button-two">
              Enroll
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
