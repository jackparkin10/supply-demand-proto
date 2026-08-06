export type TocItem = {
  id: string
  label: string
  short?: string
}

export type OutlineItem = {
  id: string
  num: string
  title: string
  blurb: string
  stub: string
}

export const chapter = {
  part: 'Part Two',
  partTitle: 'How Markets Work',
  number: '3',
  title: 'Demand and Supply',
  lede: 'How competitive markets set prices—and what happens when they move.',
  heroAlt: 'Fresh avocados and guacamole on a wooden board',
  objectivesLead: 'After studying this chapter, you will be able to:',
  objectives: [
    {
      text: 'Describe a competitive market and think about a price as an opportunity cost',
      sectionId: 'section-markets',
    },
    {
      text: 'Explain the influences on demand',
      sectionId: 'section-demand',
    },
    {
      text: 'Explain the influences on supply',
      sectionId: 'section-supply',
    },
    {
      text: 'Explain how demand and supply determine prices and quantities bought and sold',
      sectionId: 'section-equilibrium',
    },
    {
      text: 'Use the demand and supply model to make predictions about changes in prices and quantities',
      sectionId: 'section-predictions',
    },
  ],
  intro: {
    kicker: 'Chapter opener',
    paragraphs: [
      'You know that avocados are a big deal. Guacamole is a must-have at parties and restaurants, and avocado toast has become a breakfast staple. When avocado prices rise, people notice—and markets quietly reallocate resources to answer what, how, and for whom.',
      'In this chapter you will build the demand-and-supply model that economists use to explain price and quantity changes. You will see how tastes, incomes, and the cost of production shift curves—and how those shifts play out in markets like avocados.',
    ],
    note: 'At the end of the chapter, an Economics in the News feature looks at avocado prices in 2022.',
    emphasize: ['what', 'how', 'for whom'] as const,
  },
  sections: [
    {
      id: 'section-markets',
      num: '3.1',
      title: 'Markets and Prices',
      blurb: 'Competitive markets and price as opportunity cost',
      stub: 'Section prose placeholder — competitive markets and reading a price as an opportunity cost.',
    },
    {
      id: 'section-demand',
      num: '3.2',
      title: 'Demand',
      blurb: 'The law of demand and what shifts the demand curve',
      stub: 'Section prose placeholder — demand schedules, demand curves, and demand shifters.',
    },
    {
      id: 'section-supply',
      num: '3.3',
      title: 'Supply',
      blurb: 'The law of supply and what shifts the supply curve',
      stub: 'Section prose placeholder — supply schedules, supply curves, and supply shifters.',
    },
    {
      id: 'section-equilibrium',
      num: '3.4',
      title: 'Market Equilibrium',
      blurb: 'How demand and supply set price and quantity',
      stub: 'Section prose placeholder — shortage, surplus, and the equilibrium price and quantity.',
    },
    {
      id: 'section-predictions',
      num: '3.5',
      title: 'Predicting Changes',
      blurb: 'Using the model when curves shift',
      stub: 'Section prose placeholder — comparative statics and Economics in the News.',
    },
  ] satisfies OutlineItem[],
} as const

/** TOC entries for the left chapter menu */
export const tocItems: TocItem[] = [
  { id: 'top', label: 'Chapter opener', short: 'Opener' },
  { id: 'objectives', label: 'Learning objectives', short: 'Objectives' },
  { id: 'intro', label: 'Chapter introduction', short: 'Intro' },
  ...chapter.sections.map((s) => ({
    id: s.id,
    label: `${s.num} ${s.title}`,
    short: s.num,
  })),
]
