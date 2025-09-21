'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const sellingPoints = [
  {
    key: 'compact',
    jp: '薄型スライドでバッグの隙間にもフィット。いつでも“撮られてもいい肌”にリセット。',
    en: 'Slim slide tucks into any bag so you can reset to camera-ready skin anytime.'
  },
  {
    key: 'fresh',
    jp: '新鮮なパウダーと清潔なパフがワンモーションで準備OK。',
    en: 'Fresh powder and a clean puff appear in a single slide.'
  },
  {
    key: 'shine',
    jp: 'ミラーいらずでテカリが消える、5秒の魔法。',
    en: 'Shine disappears in five seconds—no mirror required.'
  }
]

const variants = [
  {
    image: '/case1500.png',
    title: { JP: 'クラシック 1,500mg', EN: 'Classic 1,500 mg' },
    note: {
      JP: '軽やかなさらさら感と透明感のバランスがちょうどいい。初めてならここから。',
      EN: 'The go-to for a balanced veil of smoothness and clarity—perfect for first-timers.'
    }
  },
  {
    image: '/case2000.png',
    title: { JP: 'エクトイン 2,000mg', EN: 'Ectoine 2,000 mg' },
    note: {
      JP: 'うるおいを抱えるエクトイン配合。乾燥しがちな日も自信をキープ。',
      EN: 'Ectoine keeps moisture cushioned so even dry days stay confident.'
    }
  }
]

export default function CaseSeries() {
  const { t } = useLanguage()

  return (
    <section id="case" className="bg-black border-t border-white/10 py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl space-y-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.9fr,1.1fr] md:items-center">
            <div className="space-y-6">
              <p className="text-xs tracking-[0.35em] text-amber-300">PUFF CASE</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                {t({ JP: 'ポーチに入る陶器肌デバイス', EN: 'The Pocket Porcelain Device' })}
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {t({
                  JP: 'スライドする動作そのものがワクワクするようなギミック。蓋を開けた瞬間、ふわっと立ち上がるパウダーの香りと艶に心が踊ります。',
                  EN: 'The slide motion itself sparks excitement. As the lid opens, the powder’s soft sheen rises to meet you.'
                })}
              </p>
              <ul className="space-y-2 text-sm text-gray-200">
                {sellingPoints.map((point) => (
                  <li key={point.key} className="flex gap-3">
                    <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-amber-300" />
                    <span className="leading-relaxed">{t({ JP: point.jp, EN: point.en })}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {variants.map((variant) => (
                <div
                  key={variant.image}
                  className="rounded-[28px] border border-white/10 bg-white/[0.05] p-6 text-left backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative mb-4 aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                    <Image src={variant.image} alt={t(variant.title)} fill className="object-contain p-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{t(variant.title)}</h3>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">{t(variant.note)}</p>
                  <p className="mt-3 text-xs text-amber-200">
                    {t({ JP: '専用パフ・詰め替えチューブ付き', EN: 'Includes dedicated puff & refill tube' })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
