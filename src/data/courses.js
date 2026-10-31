import asset from '../utils/asset'
// Courses collected from the reference site (11 linked courses).
// Prices/ratings/lesson counts mirror the reference content.

const IMG = asset('/assets/img')

export const courses = [
  {
    slug: 'building-single-page-applications-with-angular',
    title: 'Building single page applications with angular',
    category: 'Development',
    rating: '5.00',
    reviews: '328',
    lessons: '6 Lessons',
    enrolled: '12k Enrolled',
    price: null,
    image: `${IMG}/course-small-image.webp`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.',
    features: [
      'Lorem ipsum dolor sit amet consectetur',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
    ],
  },
  {
    slug: 'database-integration-with-mongodb',
    title: 'Database integration with MongoDB',
    category: 'Development',
    rating: '4.49',
    reviews: '756',
    lessons: '10 Lessons',
    enrolled: '7k Enrolled',
    price: 59,
    image: `${IMG}/course-small-image-9.webp`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.',
    features: [
      'Lorem ipsum dolor sit amet consectetur',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
    ],
  },
  {
    slug: 'operations-management-and-process-improvement',
    title: 'Operations management and process improvement',
    category: 'Finance',
    rating: '5.00',
    reviews: '812',
    lessons: '12 Lessons',
    enrolled: '23k Enrolled',
    price: null,
    image: `${IMG}/course-small-image-8.webp`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.',
    features: [
      'Lorem ipsum dolor sit amet consectetur',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
    ],
  },
  {
    slug: 'risk-management-and-business-continuity',
    title: 'Risk management and business continuity',
    category: 'Management',
    rating: '4.88',
    reviews: '210',
    lessons: '3 Lessons',
    enrolled: '8k Enrolled',
    price: 49,
    image: `${IMG}/course-small-image-7.webp`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.',
    features: [
      'Lorem ipsum dolor sit amet consectetur',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
    ],
  },
  {
    slug: 'design-systems-and-pattern-libraries',
    title: 'Design systems and pattern libraries',
    category: 'Design',
    rating: '5.00',
    reviews: '1.2K',
    lessons: '8 Lessons',
    enrolled: '25k Enrolled',
    price: 99,
    image: `${IMG}/course-image.webp`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.',
    features: [
      'Lorem ipsum dolor sit amet consectetur',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
    ],
  },
  {
    slug: 'full-stack-development-with-the-mern-stack',
    title: 'Full-stack development with the MERN stack',
    category: 'Development',
    rating: '5.00',
    reviews: '985',
    lessons: '12 Lessons',
    enrolled: '22k Enrolled',
    price: 72,
    image: `${IMG}/course-small-image-5.webp`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.',
    features: [
      'Lorem ipsum dolor sit amet consectetur',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
    ],
  },
  {
    slug: 'advanced-photoshop-techniques-for-designers',
    title: 'Advanced photoshop techniques for designers',
    category: 'Design',
    rating: '5.00',
    reviews: '1.2K',
    lessons: '8 Lessons',
    enrolled: '25k Enrolled',
    price: null,
    image: `${IMG}/course-image-4-2.webp`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.',
    features: [
      'Lorem ipsum dolor sit amet consectetur',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
    ],
  },
  {
    slug: 'crisis-management-and-problem-solving-strategies',
    title: 'Crisis management and problem-solving strategies',
    category: 'Management',
    rating: '4.88',
    reviews: '210',
    lessons: '6 Lessons',
    enrolled: '8k Enrolled',
    price: null,
    image: `${IMG}/course-image-7.webp`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.',
    features: [
      'Lorem ipsum dolor sit amet consectetur',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
    ],
  },
  {
    slug: 'grow-your-brand-and-reach-your-audience',
    title: 'Grow your brand and reach your audience',
    category: 'Management',
    rating: '4.88',
    reviews: '210',
    lessons: '10 Lessons',
    enrolled: '8k Enrolled',
    price: 49,
    image: `${IMG}/course-small-image-2.webp`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.',
    features: [
      'Lorem ipsum dolor sit amet consectetur',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
    ],
  },
  {
    slug: 'the-complete-guide-to-personal-and-business-finance',
    title: 'The complete guide to personal and business finance',
    category: 'Finance',
    rating: '4.88',
    reviews: '210',
    lessons: '10 Lessons',
    enrolled: '8k Enrolled',
    price: 99,
    image: `${IMG}/course-small-image-3.webp`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.',
    features: [
      'Lorem ipsum dolor sit amet consectetur',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
    ],
  },
  {
    slug: 'understanding-corporate-finance-and-investments',
    title: 'Understanding corporate finance and investments',
    category: 'Finance',
    rating: '4.88',
    reviews: '210',
    lessons: '10 Lessons',
    enrolled: '8k Enrolled',
    price: null,
    image: `${IMG}/course-image-4.webp`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.',
    features: [
      'Lorem ipsum dolor sit amet consectetur',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit',
    ],
  },
]

export const courseFilters = [
  'All courses',
  'Design',
  'Development',
  'Management',
  'Finance',
]

export function getCourse(slug) {
  return courses.find((c) => c.slug === slug)
}

// Sections of a course detail page (used by the free-course template)
export const courseDetail = {
  includes: [
    { label: '61 video lessons' },
    { label: '18 hours on-demand video' },
    { label: 'Full lifetime access' },
    { label: 'Certificate of completion' },
  ],
  learnItems: [
    'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada.',
    'Vitae diam dolor lacus amet integer ut pellentesque risus.',
    'Gravida enim risus sollicitudin mauris tincidunt commodo ornare.',
    'Pellentesque id quam mauris mus vitae diam dolor.',
    'Neque libero donec hendrerit nam id congue sit pellentesque.',
  ],
  tabs: [
    {
      id: 'curriculum',
      label: 'Course curriculum',
      modules: [
        {
          title: 'Getting started with the course',
          lessons: [
            'Introduction and course overview',
            'Setting up your workspace',
            'Course resources and downloads',
          ],
        },
        {
          title: 'Core concepts and practice',
          lessons: [
            'Building your first project',
            'Working with real world examples',
            'Assignments and quizzes',
          ],
        },
        {
          title: 'Advanced techniques',
          lessons: ['Performance and best practices', 'Final project and next steps'],
        },
      ],
    },
    { id: 'description', label: 'Course description', body: null },
    { id: 'instructor', label: 'Instructor', body: null },
    { id: 'reviews', label: 'Reviews', body: null },
  ],
  instructor: {
    name: 'Lee Schmitt',
    role: 'instructor',
    image: asset('/assets/img/team-member.webp'),
    text: 'Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id congue sit pellentesque eu scelerisque urna.',
  },
}
