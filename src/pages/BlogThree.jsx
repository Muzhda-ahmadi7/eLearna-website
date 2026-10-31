import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import JourneyCta from '../components/JourneyCta'
import './BlogThree.css'

const columns = [posts.slice(0, 3), posts.slice(3, 6), posts.slice(6, 9)]

function PostCard({ post }) {
  return (
    <Link to={`/blog-posts/${post.slug}`} className="blog-three-cards-one reveal">
      <div className="overflow-hidden">
        <img src={post.image} alt={post.title} className="blog-three-cards-images" />
      </div>
      <div className="blog-two-cards-text">
        <div className="blog-two-cards-top">
          <div className="small-shot-heading small-heading-body-color">{post.date}</div>
          <div className="blog-card-author">
            <div className="small-dot" />
            <div className="small-shot-heading">{post.author}</div>
          </div>
        </div>
        <div className="heading-four margin-bottom-twenty-five">{post.title}</div>
        <div>{post.excerpt}</div>
      </div>
    </Link>
  )
}

export default function BlogThree() {
  return (
    <>
      {/* blog-hero */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-wrap">
            <div className="small-heading reveal">News and journals</div>
            <h1 className="heading-one heading-one-top-gap text-white reveal">
              Planning to transition to a new career?
            </h1>
          </div>
        </div>
      </section>

      {/* blog-three-cards */}
      <section className="blog-three-cards">
        <div className="blog-three-cards-container container">
          <div className="blog-three-cards-main">
            {columns.map((column, index) => (
              <div className="blog-three-cards-columns" key={index}>
                {column.map((post) => (
                  <PostCard post={post} key={post.slug} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* cta-three */}
      <JourneyCta variant="photo" />
    </>
  )
}
