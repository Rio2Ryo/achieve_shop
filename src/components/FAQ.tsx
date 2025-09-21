'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const faqs = [
  {
    question: {
      JP: '敏感肌でも使えますか？',
      EN: 'Can I use it on sensitive skin?'
    },
    answer: {
      JP: 'はい。医薬部外品原料で敏感肌でも安心です。',
      EN: 'Yes—its quasi-drug grade formula is gentle on sensitive skin.'
    }
  },
  {
    question: {
      JP: 'いつ使えばいいですか？',
      EN: 'When should I apply it?'
    },
    answer: {
      JP: 'スキンケアの後ならいつでもOK。下地にも仕上げにも使えます。',
      EN: 'Anytime after skincare—use it as a primer or a finishing step.'
    }
  },
  {
    question: {
      JP: 'どのくらい持ちますか？',
      EN: 'How long does one compact last?'
    },
    answer: {
      JP: '1日1回の使用で1,500mgは約30日、2,000mgは約60日続きます。',
      EN: 'With once-daily use: 1,500 mg lasts around 30 days and 2,000 mg about 60 days.'
    }
  },
  {
    question: {
      JP: '保管方法は？',
      EN: 'How should I store the powder?'
    },
    answer: {
      JP: '直射日光と湿気を避け、使い終えたらフタを閉めてください。',
      EN: 'Keep it away from sun and humidity, closing the lid firmly after each use.'
    }
  },
  {
    question: {
      JP: '使用上の注意はありますか？',
      EN: 'Are there any precautions?'
    },
    answer: {
      JP: '傷や腫れがある部分には使わず、異常が出たら使用をやめ医師に相談してください。',
      EN: 'Avoid broken or irritated skin and stop using if issues appear—consult a doctor.'
    }
  },
  {
    question: {
      JP: '支払い方法と配送について教えてください。',
      EN: 'What payment and delivery options are available?'
    },
    answer: {
      JP: '公式ストアはクレジットカードと銀行振込に対応し、2営業日以内に発送します。',
      EN: 'The official store accepts cards and bank transfer, shipping within two business days.'
    }
  },
  {
    question: {
      JP: '他の化粧品と併用できますか？',
      EN: 'Can I use it with other cosmetics?'
    },
    answer: {
      JP: 'はい。ファンデの上からも、下地としても問題なく使えます。',
      EN: 'Yes—you can layer it over foundation or use it as a primer.'
    }
  },
  {
    question: {
      JP: '男性も使えますか？',
      EN: 'Can men use this product?'
    },
    answer: {
      JP: 'もちろん。テカリを抑えたい男性にも選ばれています。',
      EN: 'Absolutely—many men use it to keep shine under control.'
    }
  },
  {
    question: {
      JP: '使用期限はありますか？',
      EN: 'Is there an expiration date?'
    },
    answer: {
      JP: '未開封で約3年、開封後は6ヶ月以内のご使用がおすすめです。',
      EN: 'Unopened lasts about three years; finish within six months after opening.'
    }
  },
  {
    question: {
      JP: '返品・返金はできますか？',
      EN: 'What is your return policy?'
    },
    answer: {
      JP: '到着後30日以内なら使用済みでも返金いたします。',
      EN: 'We refund within 30 days of delivery—even if the product is used.'
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
          <p className="text-sm tracking-[0.3em] text-amber-300 mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t({ JP: 'よくあるご質問', EN: 'Frequently Asked Questions' })}
          </h2>
          <p className="text-sm md:text-base text-gray-300">
            {t({
              JP: 'よくいただく質問をコンパクトにまとめました。',
              EN: 'Quick answers to the questions we hear most.'
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
