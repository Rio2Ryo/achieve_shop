'use client'

import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

interface Scenario {
  id: string
  image: string
  title: { JP: string; EN: string }
  description: { JP: string; EN: string }
  caption: { JP: string; EN: string }
}

const scenarios: Scenario[] = [
  {
    id: 'morning',
    image: '/usage-makeup.png',
    title: { JP: 'Morning Lift', EN: 'Morning Lift' },
    caption: {
      JP: 'メイクの最後にひと滑り',
      EN: 'A final glide to lock your base'
    },
    description: {
      JP: '起き抜けの肌が5秒でアップデート。ベースメイクを均一に包み込み、日中の表情がポジティブに。',
      EN: 'Five seconds updates sleepy skin, wrapping your base in an even veil so every expression feels positive.'
    }
  },
  {
    id: 'night',
    image: '/usage-night.png',
    title: { JP: 'Night Calm', EN: 'Night Calm' },
    caption: {
      JP: '素肌で過ごす夜のお守り',
      EN: 'Bare-skin companion after hours'
    },
    description: {
      JP: 'お風呂上がりに滑らせるだけで、毛穴の陰影がふっと消えてうるおいベールが完成。寝る前の自分が好きになる瞬間です。',
      EN: 'Post-shower glide softens pore shadows and sets a hydration veil—fall in love with your night-time self.'
    }
  },
  {
    id: 'on-the-go',
    image: '/usage-smell.png',
    title: { JP: 'Quick Reset', EN: 'Quick Reset' },
    caption: {
      JP: '外出先での5秒タッチアップ',
      EN: 'Five-second refresh anywhere'
    },
    description: {
      JP: 'バッグからスライドケースを取り出すだけで、テカリも空気の澄んだ香りも取り戻せます。午後の予定が楽しみになる合図。',
      EN: 'Slide the case out of your bag and reclaim a fresh glow and airy scent—your cue that the afternoon is yours.'
    }
  }
]

export default function UsageScenarios() {
  const { t } = useLanguage()

  return (
    <section id="usage" className="bg-black border-t border-white/10 py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-4 text-center">
            <p className="text-xs tracking-[0.35em] text-amber-300">USAGE</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              {t({ JP: '1日のテンションを上げる3シーン', EN: 'Three Moments to Lift Your Day' })}
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t({
                JP: '朝の支度、夜のリセット、外出先のレスキュー。気分が上がる使い方をカードにまとめました。',
                EN: 'Morning prep, night reset, on-the-go rescue—each card captures a different way to spark joy.'
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {scenarios.map((scenario) => (
              <article
                key={scenario.id}
                className="flex flex-col gap-5 rounded-[28px] border border-white/10 bg-white/[0.05] p-6 text-center backdrop-blur transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative mx-auto h-24 w-24">
                  <div className="absolute inset-0 rounded-full bg-amber-400/15 blur-2xl" />
                  <Image src={scenario.image} alt={t(scenario.title)} fill className="object-contain" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">{t(scenario.title)}</h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-200">{t(scenario.caption)}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{t(scenario.description)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
