const IMG = '/assets/img'

const text =
  'Lorem ipsum dolor sit amet consectetur. Congue sit pellentesque eu scelerisque urna a porttitor. Massa nec ipsam sint.'

export const events = [
  {
    slug: 'leadership-strategies-for-higher-education-institutions',
    title: 'Leadership strategies for higher education institutions',
    day: '4',
    month: 'Oct',
    tag: 'New York, USA',
    time: '9:00 am - 7:00 pm',
    year: '2024',
    image: `${IMG}/event-image.webp`,
    text,
  },
  {
    slug: 'professional-development-for-online-educators-and-trainers',
    title: 'Professional development for online educators and trainers',
    day: '18',
    month: 'Oct',
    tag: 'Kansas City, USA',
    time: '10:00 am - 3:00 pm',
    year: '2024',
    image: `${IMG}/event-image-3.webp`,
    text,
  },
  {
    slug: 'navigating-the-future-of-online-education-platforms',
    title: 'Navigating the future of online education platforms',
    day: '20',
    month: 'Oct',
    tag: 'Detroit, USA',
    time: '10:00 am - 5:00 pm',
    year: '2024',
    image: `${IMG}/event-image-4.webp`,
    text,
  },
  {
    slug: 'best-practices-for-virtual-classroom-management',
    title: 'Best practices for virtual classroom management',
    day: '25',
    month: 'Oct',
    tag: 'Chicago, USA',
    time: '9:00 am - 7:00 pm',
    year: '2024',
    image: `${IMG}/event-image-2.webp`,
    text,
  },
  {
    slug: 'the-impact-of-emotional-intelligence-on-student-success',
    title: 'The impact of emotional intelligence on student success',
    day: '6',
    month: 'Nov',
    tag: 'Austin, USA',
    time: '10:00 am - 5:00 pm',
    year: '2024',
    image: `${IMG}/event-image-7.webp`,
    text,
  },
  {
    slug: 'innovative-teaching-strategies-for-modern-classrooms',
    title: 'Innovative teaching strategies for modern classrooms',
    day: '22',
    month: 'Nov',
    tag: 'Phoenix, USA',
    time: '9:00 am - 3:00 pm',
    year: '2024',
    image: `${IMG}/event-image-5.webp`,
    text,
  },
]

export function getEvent(slug) {
  return events.find((e) => e.slug === slug)
}
