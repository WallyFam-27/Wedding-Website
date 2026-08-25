export const site = {
  partnerOne: 'Brenden',
  partnerTwo: 'Rachel',
  weddingDateIso: '2027-01-15',
  weddingTime: '4:00 PM',
  tagline: 'with joyful hearts, we invite you to celebrate with us',
  venue: {
    name: 'The Garden Conservatory',
    address: '123 Blossom Lane',
    city: 'Portland, Oregon',
  },
  schedule: [
    { time: '3:30 PM', title: 'Guest arrival' },
    { time: '4:00 PM', title: 'Ceremony' },
    { time: '5:00 PM', title: 'Cocktail hour' },
    { time: '6:30 PM', title: 'Dinner & toasts' },
    { time: '8:00 PM', title: 'Dancing' },
  ],
  dressCode: 'Garden formal — earth tones and florals welcome.',
  lodging: 'A hotel block will be shared in an announcement once it is confirmed.',
}

export const coupleNames = `${site.partnerOne} & ${site.partnerTwo}`

export function formatWeddingDate(iso = site.weddingDateIso) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${iso}T12:00:00`))
}
