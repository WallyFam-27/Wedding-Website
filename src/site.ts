export const site = {
  partnerOne: 'Brenden',
  partnerTwo: 'Rachel',
  weddingDateIso: '2027-01-15',
  weddingTime: '10 AM',
  tagline: 'with joyful hearts, we invite you to celebrate with us',
  venue: {
    // name: 'Church Building',
    name: 'The Church of Jesus Christ of Latter-day Saints',
    city: 'Pleasant Grove, Utah',
  },
  schedule: [
    { time: '10 AM', title: 'Sealing' },
    { time: 'TBD', title: 'Reception' },
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
