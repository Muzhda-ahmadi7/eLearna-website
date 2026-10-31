// Navigation structure for the recreated site.

import { courses } from './courses'

export const homeLinks = [{ label: 'Home One', href: '/' }]

export const pageLinks = [
  { label: 'About', href: '/about' },
  { label: 'Course', href: '/course-three' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Pricing', href: '/pricing-three' },
  { label: 'Career', href: '/career' },
  { label: 'Events', href: '/events' },
  { label: 'Team', href: '/team' },
]

export const blogLinks = [{ label: 'Blog', href: '/blog-three' }]

export const contactLinks = [{ label: 'Contact', href: '/contact-three' }]

const groupByCategory = (list) => {
  const groups = {}
  list.forEach((c) => {
    if (!groups[c.category]) groups[c.category] = []
    groups[c.category].push(c)
  })
  return Object.entries(groups).map(([name, items]) => ({
    name,
    items: items.map((c) => ({
      label: c.title,
      href: `/course/${c.slug}`,
    })),
  }))
}

export const freeCourses = groupByCategory(courses.filter((c) => c.price === null))
export const paidCourses = groupByCategory(courses.filter((c) => c.price !== null))

export const megaPromo = {
  icon: '/assets/img/coins-icons.svg',
  title: 'Increase your potential earnings',
  text: 'Lorem ipsum dolor sit amet scelerisque integer adipiscing velit sem sed.',
  arrow: '/assets/img/button-arrow-black.png',
  href: '/career',
}
