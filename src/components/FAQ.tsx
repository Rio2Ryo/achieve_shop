'use client'

import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const faqs = [
  {
    question: {
      JP: '女性でも使用できますか？',
      EN: 'Can women use it too?'
    },
    answer: {
      JP: 'はい。性別を問わずお使いいただけます。パートナーや家族とシェアしている方も多く、ギフトにも選ばれています。',
      EN: 'Yes, it is suitable for any gender. Many people share it with partners or family, and it is popular as a gift.'
    }
  },
  {
    question: {
      JP: '汗をかいた状態でも使えますか？',
      EN: 'Can I apply it on sweaty skin?'
    },
    answer: {
      JP: '汗をかいたまま塗ると白く浮き上がる場合があります。タオルなどで汗を拭き取ってから軽く滑らせてください。',
      EN: 'If applied over sweat it may turn white. Gently blot sweat first and then glide the puff.'
    }
  },
  {
    question: {
      JP: '敏感肌やアトピーでも使えますか？',
      EN: 'Is it safe for sensitive or atopic skin?'
    },
    answer: {
      JP: 'マザーベジタブル100%の無添加処方で、医薬部外品原料規格を満たしています。炎症中の肌に使用する際は、こすらず押さえるようにご使用ください。',
      EN: 'It is a 100% Mother Vegetable formula with no additives and meets quasi-drug ingredient standards. When skin is inflamed, dab rather than rub.'
    }
  },
  {
    question: {
      JP: 'パフのお手入れは？',
      EN: 'How do I care for the puff?'
    },
    answer: {
      JP: 'Confidenceの抗菌力でパフ自体も清潔に保たれます。気になる場合は中性洗剤で優しく洗い、陰干ししてください。',
      EN: 'The antibacterial properties of Confidence keep the puff clean. If needed, wash gently with mild detergent and air dry in the shade.'
    }
  },
  {
    question: {
      JP: 'どこに使えば良いですか？',
      EN: 'Where should I apply it?'
    },
    answer: {
      JP: '顔全体はもちろん、鼻の付け根や耳の後ろ、首筋など男性特有のニオイが気になる部分にもお使いください。',
      EN: 'Use it over the face and also on the bridge of the nose, behind the ears, and along the neck to address areas where odor tends to linger.'
    }
  },
  {
    question: {
      JP: 'どのタイミングで使うのがおすすめ？',
      EN: 'When is the best time to apply it?'
    },
    answer: {
      JP: '商談やプレゼンの直前、デートの前、帰宅後のリフレッシュタイムなど5秒のタッチアップで印象が変わります。',
      EN: 'Use it five seconds before pitches, dates, or your post-commute refresh to reset your impression.'
    }
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const { t } = useLanguage()

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 md:py-32 bg-black/90">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-amber-300 mb-4">
            {t({ JP: 'FAQ', EN: 'FAQ' })}
          </h2>
          <p className="text-sm md:text-base text-gray-300">
            {t({
              JP: 'Confidenceを使い始める前によくいただくご質問をまとめました。',
              EN: 'Answers to the questions most men ask before starting with Confidence.'
            })}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index
            return (
              <div
                key={faq.question.JP}
                className="rounded-2xl border border-white/10 bg-white/[0.05] overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-left"
                >
                  <span className="text-white text-sm md:text-base font-medium">{t(faq.question)}</span>
                  <svg
                    className={`w-5 h-5 text-amber-300 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-5 sm:px-6 transition-[max-height] duration-300 ease-in-out ${
                    isActive ? 'max-h-40 pb-4' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                    {t(faq.answer)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
