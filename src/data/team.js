const IMG = '/assets/img'

const bio =
  'Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id congue sit pellentesque eu scelerisque urna a porttitor.'

export const team = [
  { slug: 'leslie-upton', name: 'Leslie Upton', role: 'instructor', image: `${IMG}/team-member-2.webp`, bio },
  { slug: 'darnell-kuphal', name: 'Darnell Kuphal', role: 'instructor', image: `${IMG}/team-member-3.webp`, bio },
  { slug: 'steven-roob', name: 'Steven Roob', role: 'instructor', image: `${IMG}/team-member-4.webp`, bio },
  { slug: 'wanda-abshire', name: 'Wanda Abshire', role: 'instructor', image: `${IMG}/team-member-5.webp`, bio },
  { slug: 'lee-schmitt', name: 'Lee Schmitt', role: 'instructor', image: `${IMG}/team-member.webp`, bio },
  { slug: 'jasmine-konopelski', name: 'Jasmine Konopelski', role: 'instructor', image: `${IMG}/team-member-6.webp`, bio },
  { slug: 'tonya-flatley', name: 'Tonya Flatley', role: 'instructor', image: `${IMG}/team-member-7.webp`, bio },
  { slug: 'colin-fay', name: 'Colin Fay', role: 'instructor', image: `${IMG}/team-member-8.webp`, bio },
]

export function getMember(slug) {
  return team.find((m) => m.slug === slug)
}

export const instructorPage = {
  eyebrow: 'Instructor',
  name: 'Lee Schmitt',
  role: 'instructor',
  image: `${IMG}/team-member.webp`,
  description:
    'Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id congue sit pellentesque eu scelerisque urna a porttitor. Massa nec ipsam sint.',
  aboutTitle: 'Know our expert',
  aboutText:
    'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus. Vitae diam dolor lacus amet integer ut. Gravida enim risus sollicitudin mauris tincidunt commodo ornare.',
  stats: [
    { value: '15+', label: 'Years experience' },
    { value: '30+', label: 'Courses' },
    { value: '12k', label: 'Students' },
  ],
  socials: [
    { label: 'Facebook', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
}
