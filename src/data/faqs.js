// FAQ page content: 5 tab categories with 5 questions each (from the reference).

const answer =
  'Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. Cras mattis aliquam arcu mauris sagittis fames eu diam vulputate.'

export const faqTabs = [
  {
    id: 'enrollment',
    label: 'Enrollment and registration',
    items: [
      { q: 'How do I enroll in an online course?', a: answer },
      { q: 'What are the benefits of online learning?', a: answer },
      { q: 'Are there any prerequisites for enrolling in online courses?', a: answer },
      { q: 'What should I do if I forget my password?', a: answer },
      { q: 'Can I enroll in multiple courses at once?', a: answer },
    ],
  },
  {
    id: 'technical',
    label: 'Technical requirements',
    items: [
      { q: 'What kind of internet connection do I need?', a: answer },
      { q: 'Can I use the learning website offline?', a: answer },
      { q: 'How do I enable or disable cookies in my browser?', a: answer },
      { q: 'Does the learning website support multiple languages?', a: answer },
      { q: 'Can I use a VPN to access the learning website?', a: answer },
    ],
  },
  {
    id: 'assessments',
    label: 'Assessments and grading',
    items: [
      { q: 'How is my performance assessed in the courses?', a: answer },
      { q: 'When will I receive my grades?', a: answer },
      { q: 'Can I see my grades for each assessment?', a: answer },
      { q: 'How do I know what I need to improve on?', a: answer },
      { q: 'What happens if I miss an assessment or deadline?', a: answer },
    ],
  },
  {
    id: 'communication',
    label: 'Communication and support',
    items: [
      { q: 'How can I contact support if I have a problem?', a: answer },
      { q: 'How do I report technical issues with the website?', a: answer },
      { q: 'Can I access support through live chat?', a: answer },
      { q: 'How do I access the knowledge base or help center?', a: answer },
      { q: "How can I escalate a support issue if it's not resolved?", a: answer },
    ],
  },
  {
    id: 'certificates',
    label: 'Certificates and degrees',
    items: [
      { q: 'Are the certificates and degrees accredited?', a: answer },
      { q: 'Can I earn a certificate or degree entirely online?', a: answer },
      { q: 'How can I verify the authenticity of my certificate or degree?', a: answer },
      { q: 'Can I request a physical copy of my certificate or degree?', a: answer },
      { q: 'What should I do if I lose my certificate or degree?', a: answer },
    ],
  },
]
