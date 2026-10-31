import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCourse, courses } from '../data/courses';
import { team } from '../data/team';
import JourneyCta from '../components/JourneyCta';
import NotFound from './NotFound';
import './CourseDetails.css';

const lessonTitles = [
  'Introduction to Python',
  'Setting Up the Environment',
  'Variables and Data Types',
  'Control Flow and Loops',
  'Functions and Modules',
  'File Handling in Python',
  'Working With Libraries',
  'Building Your First Project',
  'Testing and Debugging',
];

const tabs = ['Overview', 'Curriculum', 'Instructor', 'FAQ', 'Query'];

function CourseCard({ course }) {
  return (
    <div className="course-wrap-main">
      <div className="course-wrap-main-image">
        <img src={course.image} alt={course.title} loading="lazy" />
        <div className="course-overlay"></div>
        <span className="course-border-line course-border-top-left"></span>
        <span className="course-border-line course-border-top-right"></span>
        <span className="course-border-line course-border-bottom-left"></span>
        <span className="course-border-line course-border-bottom-right"></span>
        <div className="course-price-wrapper course-three-price">
          {course.price === null ? 'Free' : `$${course.price}`}
        </div>
      </div>
      <div className="course-wrap-main-content">
        <div className="course-three-rating">
          <img src="/assets/img/rating.svg" alt="rating star" />
          <div className="course-rating-text">{course.rating}</div>
        </div>
        <h4>{course.title}</h4>
        <Link className="yellow-button" to={`/course/${course.slug}`}>
          Course details
        </Link>
      </div>
    </div>
  );
}

export default function CourseDetails() {
  const { slug } = useParams();
  const course = getCourse(slug);

  const [activeTab, setActiveTab] = useState('Overview');
  const [activeLesson, setActiveLesson] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  if (!course) return <NotFound />;

  const related = courses.filter((c) => c.slug !== course.slug).slice(0, 3);
  const faqItems = [
    {
      q: 'What is the course refund policy?',
      a: 'If you are not satisfied with the course, you can request a full refund within 30 days of purchase. No questions asked, no strings attached.',
    },
    {
      q: 'Is there any money back guarantee?',
      a: 'Yes. Every course comes with a 30 day money back guarantee, so you can learn completely risk free.',
    },
    {
      q: 'Do I get full lifetime access to the course?',
      a: 'Absolutely. Once enrolled you keep lifetime access to all video lessons, resources and future updates of this course.',
    },
    {
      q: 'Can I download the course videos?',
      a: 'Yes, all lessons are available for offline viewing on the mobile app, and the exercise files can be downloaded too.',
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="course-hero">
        <div className="course-hero-overlay"></div>
        <div className="container course-hero-content">
          <div className="course-hero-category">{course.category}</div>
          <h1>{course.title}</h1>
          <div className="course-three-rating">
            <img src="/assets/img/rating.svg" alt="rating star" />
            <div className="course-rating-text">{course.rating}</div>
          </div>
        </div>
      </section>

      <section className="course-short-information">
        <div className="container">
          <div className="course-short-information-main">
            {[
              { icon: '/assets/img/clock-icons-2.svg', label: 'Time span', value: '4 weeks' },
              { icon: '/assets/img/books-icons.svg', label: 'Lectures', value: '6 Lessons' },
              { icon: '/assets/img/skills-arrow.svg', label: 'Skill level', value: 'Intermediate' },
              { icon: '/assets/img/video-icons.svg', label: 'Video lessons', value: '5 hours' },
              { icon: '/assets/img/persons.svg', label: 'Students', value: '12k Enrolled' },
            ].map((box, i, arr) => (
              <div
                key={box.label}
                className={`course-short-information-box${i === arr.length - 1 ? ' border-off' : ''}`}
              >
                <img src={box.icon} alt="" loading="lazy" />
                <div className="course-short-information-text">
                  <div className="heading-six">{box.label}</div>
                  <p>{box.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="course-details">
        <div className="container">
          <div className="course-details-tabs">
            {tabs.map((tab) => (
              <a
                key={tab}
                href="#course-details-pane"
                className={
                  'course-details-tabs-options' + (activeTab === tab ? ' active-tab' : '')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab);
                }}
              >
                {tab}
              </a>
            ))}
          </div>

          <div id="course-details-pane" className="course-details-tab-pane">
            {activeTab === 'Overview' && (
              <div className="course-overview rich-text">
                <h3>Course overview</h3>
                <p>
                  Python is one of the best languages for beginners, and this course takes you from
                  the very first line of code all the way to building your own real world project.
                  Every lesson is short, practical and focused on a single idea, so you always know
                  exactly what you are learning.
                </p>
                <p>
                  You do not need any previous programming experience. We start with the absolute
                  basics, install everything together and slowly build up to functions, libraries,
                  file handling and automation.
                </p>
                <ul>
                  <li>Video lessons that are easy to follow step by step.</li>
                  <li>Downloadable source code for every single lecture.</li>
                  <li>Practical exercises at the end of each chapter.</li>
                  <li>Certificate of completion when you finish the course.</li>
                </ul>
                <h3>What you will learn</h3>
                <ol>
                  <li>Install Python and set up a professional code editor.</li>
                  <li>Understand variables, data types and operators.</li>
                  <li>Build programs with loops, conditions and functions.</li>
                  <li>Work with files, modules and popular libraries.</li>
                </ol>
                <blockquote>
                  Learning to code changed my career completely. This course gives you everything
                  you need to make that change yourself.
                </blockquote>
              </div>
            )}

            {activeTab === 'Curriculum' && (
              <div className="course-curriculum">
                <div className="curriculum-tabs">
                  <div className="curriculum-tabs-menu">
                    {lessonTitles.map((title, i) => (
                      <a
                        key={title}
                        href="#curriculum-lesson"
                        className={'curriculum-tabs-options' + (activeLesson === i ? ' active-tab' : '')}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveLesson(i);
                        }}
                      >
                        Lesson {i + 1}
                      </a>
                    ))}
                  </div>
                  <div id="curriculum-lesson" className="curriculum-lesson-content">
                    <h3>{lessonTitles[activeLesson]}</h3>
                    <p>
                      In this lesson we take a practical approach and work through real examples
                      together. You can follow along with the downloadable source code and repeat
                      the exercise whenever you want.
                    </p>
                    <p>
                      By the end of the lesson you will understand the concept completely and know
                      how to use it in your own future projects with confidence.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Instructor' && (
              <div className="course-instructor">
                <h3 className="heading-three">Course instructor</h3>
                <p>
                  Learn from an experienced instructor who has taught thousands of students and
                  built products used by teams around the world.
                </p>
                <div className="course-team">
                  {team.slice(0, 4).map((member) => (
                    <Link key={member.slug} to={`/team-members/${member.slug}`} className="course-team-member">
                      <img src={member.image} alt={member.name} loading="lazy" />
                      <h5>{member.name}</h5>
                      <p>{member.role}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'FAQ' && (
              <div className="faq-s">
                {faqItems.map((item, i) => (
                  <div key={item.q} className="faq-two-dropdown">
                    <div
                      className={'faq-two' + (openFaq === i ? ' is-open' : '')}
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    >
                      <div className="heading-five">{item.q}</div>
                      <div className="faq-two-icon">
                        <div className="plus-bar plus-one"></div>
                        <div className="plus-bar plus-two"></div>
                      </div>
                    </div>
                    <div className={'faq-two-list' + (openFaq === i ? ' is-open' : '')}>
                      <div className="faq-two-clip">
                        <div className="faq-two-answers">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'Query' && (
              <div className="course-query">
                <h3 className="heading-three">Have a question?</h3>
                <p>
                  Send us a message and our team will get back to you within one working day.
                </p>
                <form className="course-details-form" onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="course-form"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    className="course-form"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    className="course-form"
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <textarea
                    className="course-form course-form-textarea"
                    name="message"
                    placeholder="Your question"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <button className="yellow-button" type="submit">
                    Send query
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="course-details-more">
        <div className="container">
          <h3 className="heading-three text-align-center">Related courses</h3>
          <div className="course-wrap-main-wrapper">
            {related.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      </section>

      <JourneyCta variant="photo" />
    </>
  );
}
