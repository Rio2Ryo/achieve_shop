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
      JP: 'はい、医薬部外品原料規格をクリアした安全な処方です。敏感肌の方でも安心してお使いいただけます。',
      EN: 'Yes. The quasi-drug compliant formula is gentle and safe even for sensitive skin.'
    }
  },
  {
    question: {
      JP: 'いつ使えばいいですか？',
      EN: 'When should I apply it?'
    },
    answer: {
      JP: 'スキンケアの後、メイクの仕上げまでどのタイミングでもお使いいただけます。下地の上からでも、ファンデーションの後でも、お好みの順番でご使用ください。',
      EN: 'Use it anytime after skincare, from prepping to finishing makeup. Layer over primer or after foundation—whatever suits your routine.'
    }
  },
  {
    question: {
      JP: 'どのくらい持ちますか？',
      EN: 'How long does one compact last?'
    },
    answer: {
      JP: '1日1回の使用で、500mgは約30日、2,000mgは約60日、5,000mgは約150日ご使用いただけます。',
      EN: 'With once-daily use: 500 mg lasts about 30 days, 2,000 mg about 60 days, and 5,000 mg about 150 days.'
    }
  },
  {
    question: {
      JP: '保管方法は？',
      EN: 'How should I store the powder?'
    },
    answer: {
      JP: '直射日光と高温多湿を避け、使用後はしっかりとフタを閉めてください。開封後は6か月以内のご使用をおすすめします。',
      EN: 'Keep the compact away from direct sunlight and humidity, closing the lid firmly after use. We recommend finishing it within six months of opening.'
    }
  },
  {
    question: {
      JP: '使用上の注意はありますか？',
      EN: 'Are there any precautions?'
    },
    answer: {
      JP: '傷やはれもの、湿しん等の異常がある部位には使用しないでください。肌に異常が現れた場合は使用を中止し、皮膚科専門医等へご相談ください。',
      EN: 'Do not use on areas with cuts, swelling, or eczema. If irritation appears, stop using the powder and consult a dermatologist.'
    }
  },
  {
    question: {
      JP: '支払い方法と配送について教えてください。',
      EN: 'What payment and delivery options are available?'
    },
    answer: {
      JP: '公式ストアではクレジットカード・銀行振込に対応しています。通常は2営業日以内に発送し、追跡番号をメールでお知らせします。',
      EN: 'The official store accepts credit cards and bank transfers. Orders ship within two business days and you will receive tracking information by email.'
    }
  },
  {
    question: {
      JP: '他の化粧品と併用できますか？',
      EN: 'Can I use it with other cosmetics?'
    },
    answer: {
      JP: 'はい、他のスキンケア製品やメイクアップ製品と併用できます。ファンデーションの上からも下地としてもお使いいただけます。',
      EN: 'Yes, it works well with other skincare and makeup products. Use it over foundation or as a primer under makeup.'
    }
  },
  {
    question: {
      JP: '男性も使えますか？',
      EN: 'Can men use this product?'
    },
    answer: {
      JP: 'もちろんです。性別を問わずお使いいただけます。特にテカリや毛穴が気になる男性にも好評です。',
      EN: 'Absolutely. It’s suitable for all genders. Many men appreciate its shine control and pore-minimizing effects.'
    }
  },
  {
    question: {
      JP: '使用期限はありますか？',
      EN: 'Is there an expiration date?'
    },
    answer: {
      JP: '未開封で3年、開封後は6ヶ月以内のご使用をおすすめします。高温多湿を避けて保管してください。',
      EN: 'Unopened products last 3 years. Once opened, we recommend using within 6 months. Store away from heat and humidity.'
    }
  },
  {
    question: {
      JP: '返品・返金はできますか？',
      EN: 'What is your return policy?'
    },
    answer: {
      JP: '商品到着後30日以内であれば、使用済みでも返品・返金を承っております。詳細は公式サイトの返品ポリシーをご確認ください。',
      EN: 'We offer a 30-day money-back guarantee, even for used products. Please check our return policy on the official website for details.'
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
          <p className="text-sm tracking-[0.3em] text-emerald-300 mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t({ JP: 'よくあるご質問', EN: 'Frequently Asked Questions' })}
          </h2>
          <p className="text-sm md:text-base text-gray-300">
            {t({
              JP: 'Mother Vegetables Confidenceに関するお問い合わせの多いご質問をまとめました。',
              EN: 'Answers to the most common questions about Mother Vegetables Confidence.'
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
                    className={`w-5 h-5 text-emerald-300 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-5 sm:px-6 transition-[max-height] duration-300 ease-in-out ${
                    isActive ? 'max-h-60 pb-4' : 'max-h-0'
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
