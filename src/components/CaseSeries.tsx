'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const sellingPoints = [
  {
    key: 'compact',
    text: {
      JP: '薄型スライドケースで携帯しやすく、外出先でもさっとリタッチ。',
      EN: 'Slim slide case travels easily so you can retouch on the go.'
    }
  },
  {
    key: 'longwear',
    text: {
      JP: '20時間続くテカリ防止とマスク崩れ対策で一日中サラサラ。',
      EN: 'Controls shine for up to 20 hours and resists mask transfer.'
    }
  },
  {
    key: 'hygiene',
    text: {
      JP: 'マザーベジタブル由来成分がパフを清潔に保ち、肌荒れを防ぎます。',
      EN: 'Mother Vegetable ingredients keep the puff hygienic and calm the skin.'
    }
  }
]

const caseVariants = [
  {
    image: '/case1500.png',
    title: {
      JP: 'シリカ 1,500mg スライドケース',
      EN: 'Silica 1,500 mg Slide Case'
    },
    caption: {
      JP: 'ベーシックな陶器肌仕上げ。初めての方に最適。',
      EN: 'Classic porcelain finish, perfect for first-time users.'
    }
  },
  {
    image: '/case2000.png',
    title: {
      JP: 'エクトイン配合 2,000mg スライドケース',
      EN: 'Ectoine 2,000 mg Slide Case'
    },
    caption: {
      JP: '保湿成分エクトイン配合で乾燥が気になる肌にも。',
      EN: 'Enriched with ectoine for moisture support on dehydrated skin.'
    }
  }
]

export default function CaseSeries() {
  const { t } = useLanguage()

  return (
    <section id="case" className="py-24 md:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm tracking-[0.3em] text-emerald-300">PUFF CASE SERIES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {t({ JP: '持ち歩ける陶器肌。パフケースシリーズ', EN: 'Porcelain Skin To Go: The Puff Case Series' })}
            </h2>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              {t({
                JP: 'MV-Si002の中核となるパフケースは、薄型スライドケースにマザーベジシリカを閉じ込めた携帯フェイスパウダーです。ケースを開けば、いつでも新鮮なパウダーと清潔なパフで素早くリタッチできます。',
                EN: 'At the heart of MV-Si002, the slim slide puff case seals Mother Veggie silica into a portable face powder so you can refresh instantly with a clean puff wherever you are.'
              })}
            </p>
            <ul className="space-y-3 text-sm md:text-base text-gray-100">
              {sellingPoints.map((point) => (
                <li key={point.key} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
                  <span>{t(point.text)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[420px] w-full">
            <div className="absolute inset-0 rounded-[2.5rem] bg-emerald-400/15 blur-2xl" aria-hidden="true" />
            <Image
              src="/fv-powder.png"
              alt={t({ JP: 'パフケースシリーズ', EN: 'Puff Case Series' })}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseVariants.map((variant) => (
            <div
              key={variant.image}
              className="rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-sm p-6 flex items-center gap-6"
            >
              <div className="relative w-32 h-32 shrink-0 bg-black/30 rounded-2xl">
                <Image src={variant.image} alt={t(variant.title)} fill className="object-contain" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">{t(variant.title)}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{t(variant.caption)}</p>
                <p className="text-xs text-emerald-200">
                  {t({ JP: '詰め替えチューブ同梱・専用パフ付き', EN: 'Comes with refill tube and dedicated puff' })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
