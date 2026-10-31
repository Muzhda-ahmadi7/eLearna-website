import asset from '../utils/asset'
import { Link, useParams } from 'react-router-dom';
import { posts, getPost, postBody } from '../data/posts';
import JourneyCta from '../components/JourneyCta';
import NotFound from './NotFound';
import './BlogDetails.css';

export default function BlogDetails() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) return <NotFound />;

  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* blog-details-hero */}
      <section className="blog-details-hero">
        <div className="blog-details-hero-overlay"></div>
        <div className="blog-details-hero-container">
          <div className="blog-details-hero-main">
            <div className="blog-details-hero-text-top">
              <div className="small-heading">{post.category}</div>
              <div className="blog-card-author">
                <div className="small-dot color-white"></div>
                <div className="small-heading">{post.author}</div>
              </div>
            </div>
            <h1 className="heading-one-top-gap text-white margin-bottom-twenty">{post.title}</h1>
            <div className="text-white">{post.date}</div>
          </div>
        </div>
      </section>

      {/* blog-details-main */}
      <section className="blog-details-main">
        <div className="container">
          <div className="blog-details-main-block">
            <div className="blog-details-container">
              <div className="blog-richtext">
                <p>{postBody.intro}</p>
                <p>{postBody.paragraph}</p>
                <blockquote>{postBody.quote}</blockquote>
                <h4>Integration of technology</h4>
                <p>{postBody.paragraph}</p>
                <h4>Collaboration and exchange between educational systems</h4>
                <p>{postBody.intro}</p>
                <ul>
                  {postBody.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="blog-author">
            <div className="blog-author-main">
              <img src={asset("/assets/img/blog-author-image.jpg")} alt={post.author} loading="lazy" />
              <div className="blog-author-information">
                <div className="small-heading">Author</div>
                <h3 className="heading-three heading-three-gap text-white">{post.author}</h3>
                <p className="text-light-white">
                  {postBody.paragraph}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* blog-details-more */}
      <section className="blog-details-more">
        <div className="container">
          <div className="home-two-blog-main">
            <div className="small-heading text-dark">More journals</div>
            <h2 className="heading-two heading-two-gap-updown text-align-center">Related blogs</h2>
            <p className="home-two-blog-description">{postBody.intro}</p>
            <div className="home-two-blog-wrapper">
              {related.map((p) => (
                <Link to={`/blog-posts/${p.slug}`} className="home-two-blog-cards" key={p.slug}>
                  <div className="overflow-hidden">
                    <img src={p.image} alt={p.title} className="blog-cards-image" loading="lazy" />
                  </div>
                  <div className="home-two-blog-cards-details">
                    <div className="small-shot-heading">{p.category}</div>
                    <div className="heading-five">{p.title}</div>
                    <div>{p.date}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* cta-three */}
      <JourneyCta variant="photo" />
    </>
  );
}
