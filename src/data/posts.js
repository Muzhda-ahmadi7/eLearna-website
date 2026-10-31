const IMG = '/assets/img'

const excerpt =
  'Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames eu diam vulputate.'

export const posts = [
  {
    slug: 'improve-knowledge-retention-with-visual-learning',
    title: 'Improve knowledge retention with visual learning',
    date: '4.10.2024',
    category: 'Career',
    author: 'Nina Leffler',
    image: `${IMG}/blog-portrait-thumbnail-13.webp`,
    excerpt,
  },
  {
    slug: 'master-online-learning-with-proven-strategies',
    title: 'Master online learning with proven strategies',
    date: '4.10.2024',
    category: 'Development',
    author: 'Samantha Dicki',
    image: `${IMG}/blog-small-thumbnail-11.webp`,
    excerpt,
  },
  {
    slug: 'how-to-enhance-your-learning-experience-today',
    title: 'How to enhance your learning experience today',
    date: '3.10.2024',
    category: 'Teaching',
    author: 'Edwin Waters',
    image: `${IMG}/blog-small-thumbnail-10.webp`,
    excerpt,
  },
  {
    slug: 'the-evolution-of-teaching-tools-in-the-21st-century',
    title: 'The evolution of teaching tools in the 21st century',
    date: '17.9.2024',
    category: 'Career',
    author: 'Edward Braun',
    image: `${IMG}/blog-small-thumbnail.webp`,
    excerpt,
  },
  {
    slug: 'the-role-of-parental-involvement-in-academic-achievement',
    title: 'The role of parental involvement in academic achievement',
    date: '16.9.2024',
    category: 'Development',
    author: 'Jesse Johnson',
    image: `${IMG}/blog-small-thumbnail-3.webp`,
    excerpt,
  },
  {
    slug: 'the-role-of-technology-in-modern-classrooms',
    title: 'The role of technology in modern classrooms',
    date: '14.9.2024',
    category: 'Teaching',
    author: 'Samantha Dicki',
    image: `${IMG}/blog-portrait-thumbnail-2.webp`,
    excerpt,
  },
  {
    slug: 'how-globalization-is-shaping-curriculum-development',
    title: 'How globalization is shaping curriculum development',
    date: '13.9.2024',
    category: 'Career',
    author: 'Edwin Waters',
    image: `${IMG}/blog-small-thumbnail-2.webp`,
    excerpt,
  },
  {
    slug: 'how-personalized-learning-is-changing-education',
    title: 'How personalized learning is changing education',
    date: '12.9.2024',
    category: 'Development',
    author: 'Gerald Nienow',
    image: `${IMG}/blog-portrait-thumbnail-3.webp`,
    excerpt,
  },
  {
    slug: 'empowering-teachers-with-continuous-professional-development',
    title: 'Empowering teachers with continuous professional development',
    date: '11.9.2024',
    category: 'Career',
    author: 'Nina Leffler',
    image: `${IMG}/blog-small-thumbnail-6.webp`,
    excerpt,
  },
]

export function getPost(slug) {
  return posts.find((p) => p.slug === slug)
}

// Body copy used on the blog detail page (template text from the reference)
export const postBody = {
  intro:
    'Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.',
  heading: 'Lorem ipsum dolor sit amet consectetur',
  paragraph:
    'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus. Vitae diam dolor lacus amet integer ut. Gravida enim risus sollicitudin mauris tincidunt commodo ornare.',
  quote:
    'Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae.',
  list: [
    'Skill-based instruction and analytics',
    'Global certification and customizable courses',
    'Personalized feedback from expert instructors',
  ],
  tags: ['Education', 'Online learning', 'Teaching'],
}
