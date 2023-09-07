// UseState
// Docs: https://nuxt.com/docs/getting-started/state-management#shared-state

// export const useMenu = () => useState<boolean>('menu', () => false)
// export const useLenisScroll = () => useState<boolean>('lenisScroll', () => false)
// export const useLenisVelocity = () => useState<boolean>('lenisVelocity', () => false)

export const usePrinciples = () => useState<any>('principles', () => [
  { id: 1,
    title: 'Mentalism',
    slug: 'mentalism',
    subTitle: 'All is mind.',
    desc: 'All is mind; the universe is mental. Thoughts lead to the manifestation of all things and events in creation. Thoughts create our state of existence and the quality of our experience here on Earth. Therefore, be responsible for everything you create, by being responsible for everything you think.',
    // color: 'text-yellow dark:text-red',
    // background: 'bg-red dark:bg-yellow'
  },
  { id: 2,
    title: 'Correspondence',
    slug: 'correspondence',
    subTitle: 'As above, so below.',
    desc: 'That which is above is like to that which is below, that which is below is like to that which is above. The macrocosm (the totality) and the microcosm (the individual units of consciousness which comprise the whole) are reflections of one another. The universe is self-similar across all scales.',
    // color: 'text-red dark:text-yellow',
    // background: 'bg-yellow dark:bg-red'
  },
  { id: 3,
    title: 'Vibration',
    slug: 'vibration',
    subTitle: 'Nothing is stationary.',
    desc: 'Nothing rests, everything moves. At the most fundamental level, the universe and everything that comprises it, is pure vibratory energy manifesting itself in different ways. The universe has no solidity as such; the universe is holographic. Matter is merely energy in a state of vibration.',
    // color: 'text-orange dark:text-indigo',
    // background: 'bg-indigo dark:bg-orange'
  },
  { id: 4,
    title: 'Polarity',
    slug: 'polarity',
    subTitle: 'Everything has its polar opposite.',
    desc: 'Everything is dual, everything has poles. Everything has its opposite. Opposites are identical in nature, but different in degree (e.g. hot and cold are seemingly opposites, while all that cold truly is, is the absence of heat energy). At some level of reality, all things that seems contradictory may be reconciled.',
    // color: 'text-indigo dark:text-orange',
    // background: 'bg-orange dark:bg-indigo'
  },
  { id: 5,
    title: 'Rhythm',
    slug: 'rhythm',
    subTitle: 'All is ebb and flow.',
    desc: 'Everything flows; out and in, in and out. Everything has its tides. All things rise and fall. The pendulum swing manifests in everything. The measure of the swing to the right, is the measure of the swing to the left. Rhythm compensates.',
    // color: 'text-cyan dark:text-purple',
    // background: 'bg-purple dark:bg-cyan'
  },
  { id: 6,
    title: 'Causality',
    slug: 'causality',
    subTitle: 'Cause and effect.',
    desc: 'Every cause has its effect, and every effect has its cause. Everything happens according to law. Chance is but a name for law not recognised. There are many planes of causation, but nothing escapes law. There is no free will to ignore law without consequence; that is the limit of free will. This is why natural law is also sometimes referred to as consequentialism.',
    // color: 'text-purple dark:text-cyan',
    // background: 'bg-cyan dark:bg-purple'
  },
  { id: 7,
    title: 'Gender',
    slug: 'gender',
    subTitle: 'Everything has its male and female properties.',
    desc: 'Gender is in everything, everything has its masculine and feminine properties; gender manifests on all planes. While every person has a biological sex, psychologically both qualities exist simultaneously within everyone, and everything.',
    // color: 'text-green dark:text-pink',
    // background: 'bg-pink dark:bg-green'
  },
  { id: 8,
    title: 'Care',
    slug: 'care',
    subTitle: 'The lost principle',
    desc: 'Care (not compassion) is whatever you give attention to, and help to grow. The lost principle is the dynamic of care; that which you actually care enough about to do, to spend your time on, to pay attention to, and to manifest into reality. What we care about on a day-to-day basis acts as the driving force of our thoughts and actions.',
    // color: 'text-pink dark:text-green',
    // background: 'bg-green dark:bg-pink'
  },
])
