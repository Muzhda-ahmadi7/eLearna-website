// Pricing Three plans (monthly / yearly pricing from the reference).

const sharedFeatures = [
  'Certification prep',
  'Customizable content',
  'AI-powered coding exercises',
]

export const plans = [
  {
    name: 'Basic',
    description: 'Lorem ipsum dolor sit amet consectetur erat ipsum non.',
    monthly: 199,
    yearly: 139,
    features: ['Access to 10+ top courses', ...sharedFeatures],
    highlight: false,
  },
  {
    name: 'Standard',
    description: 'Lorem ipsum dolor sit amet consectetur erat ipsum non.',
    monthly: 299,
    yearly: 279,
    features: ['Access to 30+ top courses', ...sharedFeatures],
    highlight: true,
  },
  {
    name: 'Premium',
    description: 'Lorem ipsum dolor sit amet consectetur erat ipsum non.',
    monthly: 699,
    yearly: 659,
    features: ['Access to 50+ top courses', ...sharedFeatures, 'Analytics and adoption reports'],
    highlight: false,
  },
]

export const pricingFaq = {
  title: 'Frequently asked questions',
  text: 'Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus vitae diam dolor lacus amet integer ut.',
  items: [
    {
      q: 'Can I switch between monthly and yearly plans?',
      a: 'Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames.',
    },
    {
      q: 'Do you offer a free trial?',
      a: 'Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames.',
    },
    {
      q: 'What is your refund policy?',
      a: 'Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames.',
    },
  ],
}
