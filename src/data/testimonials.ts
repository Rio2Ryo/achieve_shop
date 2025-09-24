export interface TestimonialCase {
  id: number
  before: string
  after: string
  ageLabel: { JP: string; EN: string }
  durationLabel: { JP: string; EN: string }
  quote: { JP: string; EN: string }
  beforeNote: { JP: string; EN: string }
  afterNote: { JP: string; EN: string }
}

export const testimonialCases: TestimonialCase[] = [
  {
    id: 1,
    before: '/before1.jpg',
    after: '/after1.jpg',
    ageLabel: { JP: '50代女性', EN: 'Female · 50s' },
    durationLabel: { JP: '3週間使用', EN: '3 weeks of use' },
    quote: {
      JP: '年齢とともに頬のシミやクマが目立っていたのですが、使い始めてから肌がふんわり明るくなり、自信が戻りました。',
      EN: 'Age spots and dark circles used to stand out, but after three weeks my skin looks brighter and confidence returned.'
    },
    beforeNote: {
      JP: 'シミとクマが目立ち、午後にはメイクがよれる状態。',
      EN: 'Visible spots and under-eye darkness with makeup breakdown by afternoon.'
    },
    afterNote: {
      JP: 'シミがふんわりとぼけ、ワントーン明るい印象に。ファンデの密着感も向上。',
      EN: 'Spots appear softened, complexion brightens, and foundation adheres more evenly.'
    }
  },
  {
    id: 2,
    before: '/before3.jpg',
    after: '/after3.jpg',
    ageLabel: { JP: '80代女性', EN: 'Female · 80s' },
    durationLabel: { JP: '1ヶ月使用', EN: '1 month of use' },
    quote: {
      JP: '濃かったシミが徐々に薄くなり、肌全体が均一な印象に。年齢を重ねても手をかければ肌は応えてくれると実感しました。',
      EN: 'Dark spots gradually faded and my complexion evened out. With the right care, skin responds beautifully at any age.'
    },
    beforeNote: {
      JP: '腕や頬に複数の濃いシミがあり、くすみがち。',
      EN: 'Multiple dark spots on the arms and cheeks give a dull impression.'
    },
    afterNote: {
      JP: 'シミが薄くなり、明度が均一に。ハリ感が戻り素肌に自信。',
      EN: 'Spots look lighter, tone appears more even, and the skin regains a firmer look.'
    }
  },
  {
    id: 3,
    before: '/before4.jpg',
    after: '/after4.jpg',
    ageLabel: { JP: '40代女性', EN: 'Female · 40s' },
    durationLabel: { JP: '3日間使用', EN: '3 days of use' },
    quote: {
      JP: '濃かったシミが徐々に薄くなり、肌全体が均一な印象に。年齢を重ねても手をかければ肌は応えてくれると実感しました。',
      EN: 'Dark spots gradually faded and my complexion evened out. With the right care, skin responds beautifully at any age.'
    },
    beforeNote: {
      JP: '腕や頬に複数の濃いシミがあり、くすみがち。',
      EN: 'Multiple dark spots on the arms and cheeks give a dull impression.'
    },
    afterNote: {
      JP: 'シミが薄くなり、明度が均一に。ハリ感が戻り素肌に自信。',
      EN: 'Spots look lighter, tone appears more even, and the skin regains a firmer look.'
    }
  },{
    id: 4,
    before: '/before5.jpg',
    after: '/after5.jpg',
    ageLabel: { JP: '10歳男性', EN: 'Male · 10 years old' },
    durationLabel: { JP: '10日間使用', EN: '10 days of use' },
    quote: {
      JP: '濃かったシミが徐々に薄くなり、肌全体が均一な印象に。年齢を重ねても手をかければ肌は応えてくれると実感しました。',
      EN: 'Dark spots gradually faded and my complexion evened out. With the right care, skin responds beautifully at any age.'
    },
    beforeNote: {
      JP: '腕や頬に複数の濃いシミがあり、くすみがち。',
      EN: 'Multiple dark spots on the arms and cheeks give a dull impression.'
    },
    afterNote: {
      JP: 'シミが薄くなり、明度が均一に。ハリ感が戻り素肌に自信。',
      EN: 'Spots look lighter, tone appears more even, and the skin regains a firmer look.'
    }
  },
  {
    id: 5,
    before: '/before6.jpg',
    after: '/after6.jpg',
    ageLabel: { JP: '5歳男性', EN: 'Male · 5 years old' },
    durationLabel: { JP: '2日間使用', EN: '2 days of use' },
    quote: {
      JP: '濃かったシミが徐々に薄くなり、肌全体が均一な印象に。年齢を重ねても手をかければ肌は応えてくれると実感しました。',
      EN: 'Dark spots gradually faded and my complexion evened out. With the right care, skin responds beautifully at any age.'
    },
    beforeNote: {
      JP: '腕や頬に複数の濃いシミがあり、くすみがち。',
      EN: 'Multiple dark spots on the arms and cheeks give a dull impression.'
    },
    afterNote: {
      JP: 'シミが薄くなり、明度が均一に。ハリ感が戻り素肌に自信。',
      EN: 'Spots look lighter, tone appears more even, and the skin regains a firmer look.'
    }
  },{
    id: 6,
    before: '/before7.jpg',
    after: '/after7.jpg',
    ageLabel: { JP: '50代女性', EN: 'Female · 50s' },
    durationLabel: { JP: '1日間使用', EN: '1 day of use' },
    quote: {
      JP: '濃かったシミが徐々に薄くなり、肌全体が均一な印象に。年齢を重ねても手をかければ肌は応えてくれると実感しました。',
      EN: 'Dark spots gradually faded and my complexion evened out. With the right care, skin responds beautifully at any age.'
    },
    beforeNote: {
      JP: '腕や頬に複数の濃いシミがあり、くすみがち。',
      EN: 'Multiple dark spots on the arms and cheeks give a dull impression.'
    },
    afterNote: {
      JP: 'シミが薄くなり、明度が均一に。ハリ感が戻り素肌に自信。',
      EN: 'Spots look lighter, tone appears more even, and the skin regains a firmer look.'
    }
  }
]
