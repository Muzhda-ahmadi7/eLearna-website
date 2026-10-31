import { Link, useParams } from 'react-router-dom';
import { getMember } from '../data/team';
import { courses } from '../data/courses';
import JourneyCta from '../components/JourneyCta';
import NotFound from './NotFound';
import './InstructorDetails.css';

const socials = [
  { name: 'Behance', icon: '/assets/img/behance.png', href: 'https://www.behance.net' },
  { name: 'Twitter', icon: '/assets/img/twitter.svg', href: 'https://x.com' },
  { name: 'LinkedIn', icon: '/assets/img/linkedin.svg', href: 'https://in.linkedin.com' },
  { name: 'Facebook', icon: '/assets/img/facebook.png', href: 'https://www.facebook.com' },
];

const skills = [
  {
    title: 'Teaching strategy',
    text: 'Lorem ipsum dolor sit amet consectetur. Quis vitae eget tincidunt enim in ipsum.',
    value: '84',
    suffix: '%',
  },
  {
    title: 'Success ratio',
    text: 'Lorem ipsum dolor sit amet consectetur. Quis vitae eget tincidunt enim in ipsum.',
    value: '95',
    suffix: '%',
  },
];

const awards = [
  { year: '2012', name: 'Awwwards', icon: '/assets/img/awwwards.svg' },
  { year: '2016', name: 'Dribbble', icon: '/assets/img/dribbble.svg' },
  { year: '2019', name: 'hubSpot', icon: '/assets/img/hubspot.svg' },
];

const marqueeItems = ['UI/UX Design', 'Branding', 'Web developent'];

function CoursePortraitCard({ course }) {
  return (
    <div className="course-wrap-main">
      <img src={course.image} alt={course.title} className="course-three-image" loading="lazy" />
      <div className="course-card-three-overlay"></div>
      <div className="course-card-three-content">
        <div className="small-shot-heading text-light-white">{course.category}</div>
        <div className="heading-four text-white course-name-three-gap">{course.title}</div>
        <div className="course-three-rating">
          <img src="/assets/img/rating.svg" alt="rating star" />
          <div className="small-shot-heading small-heading-body-color">
            {course.rating} ({course.reviews})
          </div>
        </div>
        <div className="course-three-buttons">
          <Link to={`/course/${course.slug}`} className="button button-yellow course-button full-grow">
            <div>Course details</div>
          </Link>
        </div>
        <div className="course-three-cards-border-one"></div>
        <div className="course-three-cards-border-two"></div>
        <div className="course-price-wrapper course-three-price">
          <div>{course.price === null ? 'Free' : `$${course.price}`}</div>
        </div>
      </div>
    </div>
  );
}

export default function InstructorDetails() {
  const { slug } = useParams();
  const member = getMember(slug);

  if (!member) return <NotFound />;

  const memberCourses = courses.slice(0, 3);

  return (
    <>
      {/* team-member-details-hero */}
      <section className="team-member-details-hero">
        <div className="container">
          <div className="team-details-hero-main">
            <div className="team-details-hero-image">
              <div className="team-member-circle"></div>
              <img src={member.image} alt={member.name} className="team-details-image" />
              <div className="team-members-social">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    className="team-social-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={s.icon} alt={s.name} />
                  </a>
                ))}
                <div className="team-member-social-line"></div>
              </div>
            </div>
            <div className="team-details-hero-text">
              <h1 className="no-margin-top text-white margin-bottom-twenty">
                Professional training with {member.name}
              </h1>
              <p className="text-light-white margin-bottom-thirty">{member.bio}</p>
              <div className="heading-four text-white margin-bottom-twenty">Specialist in</div>
              <ul className="text-light-white team-specialties">
                <li>Branding Design</li>
                <li>Web Development</li>
                <li>Logo design</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="team-details-marquee">
          {[0, 1, 2, 3].map((train) => (
            <div className="team-details-marquee-train" key={train} aria-hidden={train > 0}>
              {marqueeItems.map((item) => (
                <div className="team-details-marquee-group" key={item}>
                  <div className="team-details-marquee-text">{item}</div>
                  <img src="/assets/img/subtract-2.svg" alt="" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* team-member-about */}
      <section className="team-member-about">
        <div className="container">
          <div className="team-member-about-main">
            <div className="small-heading text-dark">About Instructor</div>
            <div className="team-member-about-text">
              <div className="yellow-bar"></div>
              <div className="team-member-about-content">
                <h3 className="heading-three margin-bottom-thirty">
                  Lorem ipsum dolor sit amet consectetur. Cras suscipit habitant nisi aliquam
                  tincidunt eget volutpat urna netus tellus.
                </h3>
                <p className="team-member-about-description">
                  Lorem ipsum dolor sit amet consectetur. Scelerisque cursus eget aliquet vel elit.
                  Suspendisse odio augue ultrices fermentum duis sagittis, tortor mattis eget nunc
                  sit. Imperdiet habitant purus pulvinar diam.
                </p>
                <div className="team-member-about-skills">
                  {skills.map((skill) => (
                    <div className="about-skills-options" key={skill.title}>
                      <div className="skills-description">
                        <h4 className="heading-four">{skill.title}</h4>
                        <p className="no-margin-bottom">{skill.text}</p>
                      </div>
                      <div className="skills-big-text">
                        {skill.value}
                        <span className="skills-text-small">{skill.suffix}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* team-member-courses */}
      <section className="team-member-courses">
        <div className="container">
          <div className="small-heading text-dark">Online learning</div>
          <h2 className="heading-two heading-two-gap-top member-courses-heading">
            Instructor of course
          </h2>
          <div className="course-wrap-card">
            {memberCourses.map((course) => (
              <CoursePortraitCard course={course} key={course.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* team-details-awards */}
      <section className="team-details-awards">
        <div className="container">
          <div className="team-details-awards-top">
            <div className="team-details-awards-left">
              <div className="small-heading text-dark">awards</div>
              <h2 className="heading-two heading-two-gap-top">Our achieved awards</h2>
            </div>
            <div className="team-details-awards-right">
              <p className="no-margin-bottom">
                Lorem ipsum dolor sit amet consectetur. Scelerisque cursus eget aliquet vel elit.
                Suspendisse odio augue ultrices.
              </p>
            </div>
          </div>
          <div className="team-details-awards-bottom">
            {awards.map((award) => (
              <div className="awards-cards" key={award.name}>
                <div className="awards-year">{award.year}</div>
                <div className="awards-content">
                  <img src={award.icon} alt={award.name} />
                  <h4 className="heading-four">{award.name}</h4>
                  <p className="no-margin-bottom">
                    Lorem ipsum dolor sit amet consectetur. Nunc at faucibus risus sodales in
                    mattis.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* cta-three */}
      <JourneyCta variant="photo" />
    </>
  );
}
