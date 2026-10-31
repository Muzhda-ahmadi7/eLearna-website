import asset from '../utils/asset'
import { Link } from 'react-router-dom';
import { clientLogos } from '../data/site';
import { posts } from '../data/posts';
import './About.css';

const IMG = asset('/assets/img');

const philosophyCards = [
  { name: 'Web design', image: `${IMG}/category-cards-image.webp`, href: '/course-three' },
  { name: 'Web development', image: `${IMG}/category-cards-image-2.webp`, href: '/course-three' },
  { name: 'Management', image: `${IMG}/category-cards-image-3.webp`, href: '/course-three' },
  { name: 'Finance', image: `${IMG}/category-cards-image-4.webp`, href: '/course-three' },
];

const discoverCards = [
  {
    number: '01',
    title: 'Flexibility and convenience',
    text: 'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.',
    image: `${IMG}/potential-image-2.webp`,
  },
  {
    number: '02',
    title: 'Course accessibility',
    text: 'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.',
    image: `${IMG}/potential-image.webp`,
    borderOff: true,
  },
  {
    number: '03',
    title: 'Cost-effectiveness',
    text: 'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.',
    image: `${IMG}/potential-image-3.webp`,
  },
  {
    number: '04',
    title: 'Personalized learning',
    text: 'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.',
    image: `${IMG}/contact-us-one.webp`,
    borderOff: true,
  },
];

export default function About() {
  return (
    <>
      {/* about-two-hero */}
      <section className="about-two-hero">
        <div className="container">
          <div className="about-two-hero-main">
            <div className="small-heading reveal">About us</div>
            <h1 className="no-margin-bottom heading-one-top-gap text-white reveal">
              You&rsquo;re sincerely determined to grow
            </h1>
          </div>
        </div>
      </section>

      {/* about-two-section - our story */}
      <section className="about-two-section">
        <div className="container">
          <div className="about-two-main">
            <div className="about-two-image-wrapper">
              <div className="about-two-image-top-box">
                <div className="reveal">
                  <img
                    src={`${IMG}/office-image-2.webp`}
                    alt="Our office"
                    className="border-radius-four about-two-image-shadow"
                    loading="lazy"
                  />
                </div>
                <div className="about-two-text reveal">
                  <div className="small-text text-vertical">Year of experiance</div>
                  <div className="text-vertical heading-big-text">25</div>
                </div>
              </div>
              <div className="about-two-women-image reveal">
                <img
                  src={`${IMG}/girl-image-2.webp`}
                  alt="Student"
                  className="border-radius-four about-two-image-shadow"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="about-two-main-text">
              <div className="small-heading text-dark reveal">Our Story</div>
              <h2 className="heading-two heading-two-gap-updown reveal">
                Limitless learning and get more possibilities
              </h2>
              <p className="margin-bottom-twenty reveal">
                Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in maecenas
                scelerisque imperdiet nec. Pellentesque id quam mauris mus. Vitae diam dolor lacus
                amet integer ut.
              </p>
              <p className="no-margin-bottom reveal">
                Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in maecenas
                scelerisque imperdiet nec. Pellentesque id quam mauris mus. Vitae diam dolor lacus
                amet integer ut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* philosophy - course categories */}
      <section className="about-philosophy">
        <div className="container">
          <div className="about-philosophy-main">
            <div className="small-heading text-dark reveal">OUR PHILOSOPHY</div>
            <h3 className="heading-three heading-three-gap-top reveal">Get instant access courses</h3>
            <div className="about-two-course-categories">
              {philosophyCards.map((card) => (
                <Link to={card.href} className="category-four-cards reveal" key={card.name}>
                  <div className="category-four-cards-background">
                    <div className="heading-five writing-mode">{card.name}</div>
                  </div>
                  <div className="category-cards-image-wrap">
                    <img src={card.image} alt={card.name} className="category-four-image" loading="lazy" />
                  </div>
                  <div className="arrow">
                    <img src={`${IMG}/slider-arrow-black.svg`} alt="" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* quote text */}
      <section className="about-two-quote-text">
        <div className="quote-text-container">
          <div className="quote-text-main">
            <div className="small-heading text-dark reveal">Why we are</div>
            <div className="heading-four reveal">
              We believe in our good education and development system and we know how to work
              together to reach greater success.
            </div>
          </div>
        </div>
      </section>

      {/* discover options */}
      <section className="tab-gutter">
        <div className="home-two-discover-options reveal">
          <div className="home-two-discover-images">
            {discoverCards.map((card) => (
              <img
                key={card.number}
                src={card.image}
                alt=""
                className="discover-image"
                loading="lazy"
              />
            ))}
          </div>
          <div className="home-two-discover-cards-wrap">
            {discoverCards.map((card, index) => (
              <div
                key={card.number}
                className={
                  `discover-cards${card.borderOff ? ' border-off' : ''}` +
                  (index === 2 ? ' card-three' : '') +
                  (index === 3 ? ' card-four' : '')
                }
              >
                <div className="discover-cards-text">
                  <div className="heading-three text-white">{card.number}</div>
                  <div className="heading-four text-white">{card.title}</div>
                  <div className="discover-cards-description">
                    <p className="text-light-white no-margin-bottom">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* clients */}
      <section className="about-clients">
        <div className="container">
          <div className="clients-main">
            <p className="text-dark margin-bottom-twenty-five clients-top reveal">
              Learn from 350+ leading universities and companies with us
            </p>
            <div className="marquee-main reveal">
              <div className="marquee-track">
                {[0, 1, 2].map((train) => (
                  <div className="clients-train" key={train} aria-hidden={train !== 0}>
                    {clientLogos.map((src, i) => (
                      <img key={i} src={src} alt="Clients Logo" className="clients-logo" />
                    ))}
                  </div>
                ))}
              </div>
              <div className="clients-overlay-one"></div>
            </div>
          </div>
        </div>
      </section>

      {/* our vision */}
      <section className="about-two-vision">
        <div className="container">
          <div className="about-two-vision-main">
            <div className="about-two-vision-left">
              <div className="vision-images-wrapper align-right">
                <img
                  src={`${IMG}/about-two-employee-image.webp`}
                  alt="Team member"
                  className="border-radius-four"
                  loading="lazy"
                />
                <div className="vision-counter-boxes reveal">
                  <div className="heading-two vision-counter-number">96</div>
                  <div className="heading-two vision-counter-percent">%</div>
                  <div className="small-heading text-dark">Job placement</div>
                </div>
              </div>
              <div className="vision-images-wrapper">
                <div className="vision-counter-boxes vision-box-dark reveal">
                  <div className="heading-two text-yellow vision-counter-number">5</div>
                  <div className="heading-two text-yellow vision-counter-percent">K</div>
                  <div className="small-heading text-yellow">Finish seasons</div>
                </div>
                <img
                  src={`${IMG}/about-two-employee-image-2.webp`}
                  alt="Team member"
                  className="border-radius-four"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="about-two-vision-right">
              <div className="small-heading text-dark reveal">Our vision</div>
              <h2 className="vision-heading reveal">
                75K+ student joined with us to achieve their goals
              </h2>
              <p className="vision-description reveal">
                Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam
                dolor lacus amet integer ut.
              </p>
              <ul className="reveal">
                <li className="margin-bottom-ten">
                  Lorem ipsum dolor sit amet consectetur id quam mauris mus.
                </li>
                <li className="margin-bottom-ten">
                  Lorem ipsum dolor sit amet consectetur id quam mauris mus.
                </li>
                <li>Lorem ipsum dolor sit amet consectetur id quam mauris mus.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* became an instructor */}
      <section className="about-two-instructor-section">
        <div className="container">
          <div className="about-two-instructor reveal">
            <div className="about-two-instrutor-main">
              <div className="about-two-instructor-text">
                <div className="heading-three text-white margin-bottom-twenty">Became an instructor</div>
                <p className="margin-bottom-thirty text-light-white">
                  Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae
                  diam dolor lacus amet integer ut gravida.
                </p>
                <Link to="/career" className="button button-yellow">
                  <div>Start teaching today</div>
                </Link>
              </div>
              <div className="about-two-instrutor-image">
                <img
                  src={`${IMG}/girl-image-white.webp`}
                  alt="Instructor"
                  className="tab-image-full-width instructor-image-mobile"
                  loading="lazy"
                />
                <img
                  src={`${IMG}/instructor-image.webp`}
                  alt="Instructor"
                  className="tab-image-full-width instructor-image-desktop"
                  loading="lazy"
                />
                <img
                  src={`${IMG}/review-popup.webp`}
                  alt="Review"
                  className="instructor-review"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* blogs */}
      <section className="about-two-blogs">
        <div className="container">
          <div className="home-two-blog-main">
            <div className="small-heading text-dark reveal">Education Blog</div>
            <h2 className="heading-two heading-two-gap-updown text-align-center reveal">
              Our news and ideas
            </h2>
            <p className="home-two-blog-description reveal">
              Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis
              scelerisque vitae consectetur vitae.
            </p>
            <div className="home-two-blog-wrapper">
              {posts.slice(0, 3).map((post) => (
                <Link to={`/blog-posts/${post.slug}`} className="home-two-blog-cards reveal" key={post.slug}>
                  <div className="overflow-hidden">
                    <img src={post.image} alt={post.title} className="blog-cards-image" loading="lazy" />
                  </div>
                  <div className="home-two-blog-cards-details">
                    <div className="small-shot-heading">{post.category}</div>
                    <div className="heading-five">{post.title}</div>
                    <div>{post.date}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
