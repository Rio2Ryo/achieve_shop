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
      JP: 'はい。敏感肌でも安心です。',
      EN: 'Yes—its formula is gentle on sensitive skin.'
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
      JP: '異常が出たら使用をやめ医師に相談してください。',
      EN: 'Stop using if issues appear—consult a doctor.'
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
          <h2 className="text-4xl md:text-5xl font-semibold text-amber-300 mb-4">
            {t({ JP: 'FAQ', EN: 'FAQ' })}
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
