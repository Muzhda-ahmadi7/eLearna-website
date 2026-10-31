// Shared site-wide content taken from the reference website.

export const contactInfo = {
  topbarText: 'Are you interested in online coaching?',
  topbarLinkText: 'Contact us.',
  email: 'support@example.com',
  phone: '(888) 123 4567',
  phoneHref: 'tel:8881234567',
  supportEmail: 'info@example.com',
}

export const clientLogos = [
  '/assets/img/clients-logo.svg',
  '/assets/img/clients-logo-4.svg',
  '/assets/img/clients-logo-6.svg',
  '/assets/img/clients-logo-2.svg',
  '/assets/img/clients-logo-3.svg',
  '/assets/img/clients-logo-5.svg',
]

export const courseCategories = [
  { name: 'Finance', slug: 'finance', count: 10 },
  { name: 'Management', slug: 'management', count: 6 },
  { name: 'Design', slug: 'design', count: 8 },
  { name: 'Web development', slug: 'development', count: 5 },
]

// Home Three "Top Categories" cards (image cards)
export const homeThreeCategories = [
  { name: 'Web design and creative', image: '/assets/img/category-image.webp', slug: 'design' },
  { name: 'Finance and accounting', image: '/assets/img/category-image-2.webp', slug: 'finance' },
  { name: 'Technology and software', image: '/assets/img/category-image-3.webp', slug: 'development' },
  { name: 'Digital marketing', image: '/assets/img/digital-marketing.webp', slug: 'management' },
]

// Home Three "Unlocking Potential" numbered cards
export const potentialCards = [
  {
    number: '01',
    title: 'Flexibility and convenience',
    text: 'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.',
    href: '/contact-three',
  },
  {
    number: '02',
    title: 'Course accessibility',
    text: 'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.',
    href: '/contact-three',
  },
  {
    number: '03',
    title: 'Cost-effectiveness',
    text: 'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.',
    href: '/contact-three',
  },
  {
    number: '04',
    title: 'Personalized learning',
    text: 'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.',
    href: '/contact-three',
  },
]

// Home One "Top categories" cards (6 icon cards).
export const homeOneCategories = [
  { name: 'Creative web design', count: 8, icon: '/assets/img/category-icons.svg', slug: 'design' },
  { name: 'Finance accounting', count: 10, icon: '/assets/img/category-icons-2.svg', slug: 'finance' },
  { name: 'IT and software', count: 5, icon: '/assets/img/category-icons.svg', slug: 'development' },
  { name: 'Digital marketing', count: 4, icon: '/assets/img/category-icons-4.svg', slug: 'management' },
  { name: 'Web development', count: 8, icon: '/assets/img/category-icons-5.svg', slug: 'development' },
  { name: 'Content writing', count: 3, icon: '/assets/img/category-icons-6.svg', slug: 'design' },
]

// Home One testimonial band counters.
export const homeOneCounters = [
  { value: 70, suffix: 'M', label: 'Successful students' },
  { value: 25, suffix: 'K', label: 'Global job placements' },
]

// Course One / Course Three hero category cards
export const courseHeroCategories = [
  { name: 'Creative web design', count: 8, icon: '/assets/img/category-icons.svg', slug: 'design' },
  { name: 'Finance accounting', count: 4, icon: '/assets/img/category-icons-2.svg', slug: 'finance' },
  { name: 'IT and software', count: 5, icon: '/assets/img/category-icons-3.svg', slug: 'development' },
  { name: 'Digital marketing', count: 4, icon: '/assets/img/category-icons-4.svg', slug: 'management' },
  { name: 'Web development', count: 8, icon: '/assets/img/category-icons-5.svg', slug: 'development' },
  { name: 'Content writing', count: 3, icon: '/assets/img/category-icons-6.svg', slug: 'design' },
]

// Home Three hero detail boxes
export const heroDetails = [
  {
    icon: '/assets/img/circle-icon-one.svg',
    title: '150+ online courses',
    text: 'Lorem ipsum dolor sit amet',
  },
  {
    icon: '/assets/img/circle-icon-two.svg',
    title: 'Personalized learning',
    text: 'Lorem ipsum dolor sit amet',
  },
  {
    icon: '/assets/img/circle-icon-three.svg',
    title: 'Lifetime update',
    text: 'Lorem ipsum dolor sit amet',
  },
]

// "what we Offer" checklist section (shared across variants)
export const offerSection = {
  eyebrow: 'what we Offer',
  title: 'Personalized learning for your ambitions',
  text: 'Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.',
  items: [
    'Skill-based instruction',
    'Analytics and insights',
    'Global certification',
    'Customizable courses',
  ],
  ctaTitle: 'Still have questions?',
  ctaText: 'Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.',
}

// Home Three counter band
export const counters = [
  { value: 1.5, suffix: 'K', decimals: 1, label: 'Finish seasons' },
  { value: 7.6, suffix: 'K', decimals: 1, label: 'Enrolled' },
  { value: 100, suffix: '%', decimals: 0, label: 'Job placement' },
]

// "Why we are" feature section (shared)
export const whyUs = {
  eyebrow: 'Why we are',
  title: 'Elevate your professional journey',
  text: 'Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.',
  features: [
    {
      icon: '/assets/img/books-icons.svg',
      title: 'Learn anything',
      text: 'Lorem ipsum dolor sit amet conse non quis id viverra id proin.',
    },
    {
      icon: '/assets/img/money-bag-icon.svg',
      title: 'Save money',
      text: 'Lorem ipsum dolor sit amet conse non quis id viverra id proin.',
    },
    {
      icon: '/assets/img/course-icon.svg',
      title: 'Flexible courses',
      text: 'Lorem ipsum dolor sit amet conse non quis id viverra id proin.',
    },
    {
      icon: '/assets/img/verified-icon.svg',
      title: 'Unlimited certificate',
      text: 'Lorem ipsum dolor sit amet conse non quis id viverra id proin.',
    },
  ],
}

// "Are you ready to start your journey?" CTA
export const journeyCta = {
  title: 'Are you ready to start your journey?',
  primary: { label: 'Browse courses', href: '/course-three' },
  secondary: { label: 'Became a teacher', href: '/career' },
}

export const footerContent = {
  description:
    'Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.',
  popularCourses: courseCategories,
  company: [
    { label: 'About', href: '/about' },
    { label: 'Courses', href: '/course-three' },
    { label: 'Blog', href: '/blog-three' },
    { label: 'Contact', href: '/contact-three' },
    { label: 'License', href: '/information/license' },
    { label: 'Pricing', href: '/pricing-three' },
    { label: '404', href: '/not-found-demo' },
  ],
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'Career', href: '/career' },
    { label: 'Instructor', href: '/team' },
  ],
  cms: [
    { label: 'Course details', href: '/course/building-single-page-applications-with-angular' },
    { label: 'Instructor details', href: '/team-members/lee-schmitt' },
    { label: 'Blog details', href: '/blog-posts/the-evolution-of-teaching-tools-in-the-21st-century' },
  ],
  credit: { design: 'Radiant Templates', powered: 'Webflow' },
}
