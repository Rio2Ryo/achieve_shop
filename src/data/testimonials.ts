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
    before: '/men_before.png',
    after: '/men_after.png',
    ageLabel: { JP: '30代男性', EN: 'Male · 30s' },
    durationLabel: { JP: '商談前に使用', EN: 'Before a key pitch' },
    quote: {
      JP: '夕方になると必ずテカっていた額が、5秒のタッチアップだけで落ち着きました。取引先から「顔が明るいね」と言われ、自信が持てました。',
      EN: 'My forehead always shined by evening, but a five-second touch-up kept it calm. A client said I looked brighter, and I felt confident walking into the deal.'
    },
    beforeNote: {
      JP: 'プレゼン前は皮脂が目立ち、写真に写るとギラつきが強かった。',
      EN: 'Before presentations, sebum stood out and every photo captured a greasy shine.'
    },
    afterNote: {
      JP: '光が散って自然な艶に。会議後も清潔感がキープできた。',
      EN: 'Light scattered into a natural sheen and the clean look stayed even after long meetings.'
    }
  },
  {
    id: 2,
    before: '/before3.jpg',
    after: '/after3.jpg',
    ageLabel: { JP: '20代男性', EN: 'Male · 20s' },
    durationLabel: { JP: 'デート前に使用', EN: 'Before a date night' },
    quote: {
      JP: 'メイクではなく清潔感のためと言えるのが良い。鼻のまわりのテカリが消え、肌色が整って「今日は雰囲気が違う」と褒められました。',
      EN: 'I like that it\'s about cleanliness, not makeup. Shine around my nose vanished, my tone evened out, and I was told I looked different in a good way.'
    },
    beforeNote: {
      JP: '小鼻や頬の赤みが残り、汗ばむとムラが目立っていた。',
      EN: 'Redness around the nose and cheeks lingered, and sweat made the uneven tone obvious.'
    },
    afterNote: {
      JP: '厚塗り感なくワントーンアップ。夜まで崩れず、写真映えも◎。',
      EN: 'Tone lifted without looking heavy. It held through the night and looked great in photos.'
    }
  },
  {
    id: 3,
    before: '/before4.jpg',
    after: '/after4.jpg',
    ageLabel: { JP: '40代男性', EN: 'Male · 40s' },
    durationLabel: { JP: '10日間継続', EN: '10 days of daily use' },
    quote: {
      JP: '外回りで汗をかく日でも、耳の後ろまで塗るとニオイが気にならなくなる。帰社してもすっきりしたままなのでチームからの印象も良くなりました。',
      EN: 'Even on sweaty field days, gliding it behind my ears kept odors at bay. Back at the office I still felt fresh, and the team noticed the difference.'
    },
    beforeNote: {
      JP: '長時間の外出で皮脂と汗が混ざり、こめかみや首筋がベタついていた。',
      EN: 'Extended time outside mixed sweat and oil, leaving temples and neck sticky.'
    },
    afterNote: {
      JP: 'マットになりすぎずサラサラ。爽やかな印象が長続き。',
      EN: 'Finished smooth without going flat, keeping a crisp impression for hours.'
    }
  },
  {
    id: 4,
    before: '/before5.jpg',
    after: '/after5.jpg',
    ageLabel: { JP: '50代男性', EN: 'Male · 50s' },
    durationLabel: { JP: '家族と共有', EN: 'Shared with family' },
    quote: {
      JP: '娘からのプレゼント。帰宅後のリセットに使うと、疲れ顔がやわらぎます。家族からも「そのままの肌の方がいいね」と言われるようになりました。',
      EN: 'It was a gift from my daughter. Using it after I get home softens the tired look, and my family now says my natural skin looks better this way.'
    },
    beforeNote: {
      JP: '夜になると目の下がくすみ、ほうれい線も濃く見えていた。',
      EN: 'By night, under-eye dullness and smile lines stood out.'
    },
    afterNote: {
      JP: '素肌感を残しつつ陰影が和らぎ、家族との時間も明るい表情で過ごせる。',
      EN: 'Shadows eased without hiding bare skin, letting me spend evenings with a brighter expression.'
    }
  },
  {
    id: 5,
    before: '/before6.jpg',
    after: '/after6.jpg',
    ageLabel: { JP: '敏感肌男性', EN: 'Male · Sensitive skin' },
    durationLabel: { JP: '炎症中も使用', EN: 'Used during flare-ups' },
    quote: {
      JP: 'アトピー肌でもヒリつかず使えるのが助かる。赤みが気になる日に塗ると、清潔感が戻って気持ちも前向きになります。',
      EN: 'My atopic skin can handle it without stinging. On red, irritated days it restores cleanliness and lifts my mood.'
    },
    beforeNote: {
      JP: '粉ふきや赤みが混在し、近距離で見ると荒れが強調されていた。',
      EN: 'Flakiness and redness mixed together, making irritation obvious up close.'
    },
    afterNote: {
      JP: '荒れた部分も自然にぼかされ、サラリとした触り心地に。',
      EN: 'Problem areas blur naturally and the surface feels comfortably smooth.'
    }
  },
  {
    id: 6,
    before: '/before7.jpg',
    after: '/after7.jpg',
    ageLabel: { JP: 'パートナーと共有', EN: 'Shared with partner' },
    durationLabel: { JP: 'ギフトで使用開始', EN: 'Started as a gift' },
    quote: {
      JP: 'パートナーに贈ったところ、「自宅でのスキンケア時間が心地いい」と評判。男女問わず使えるので、記念日のギフトにも選びやすいです。',
      EN: 'I gifted it to my partner—the home skincare time now feels soothing. It works for any gender, so it\'s an easy anniversary gift choice.'
    },
    beforeNote: {
      JP: '乾燥と赤みが混在し、スキンケアの仕上げが決まらなかった。',
      EN: 'Dryness and redness coexisted, making it hard to finish skincare cleanly.'
    },
    afterNote: {
      JP: 'マザーベジの粉体が薄く密着し、透明感と清潔感がアップ。',
      EN: 'The Mother Vegetable powder settles thinly, boosting clarity and cleanliness.'
    }
  }
]
