'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

interface Scenario {
  id: string
  image: string
  title: { JP: string; EN: string }
  subtitle: { JP: string; EN: string }
  description: { JP: string; EN: string }
}

const scenarios: Scenario[] = [
  {
    id: 'makeup',
    image: '/usage-makeup.png',
    title: {
      JP: 'メイクの仕上げに',
      EN: 'Finish Your Makeup'
    },
    subtitle: {
      JP: '朝の5秒でプロ級のサラサラ感',
      EN: 'A five-second polish for busy mornings'
    },
    description: {
      JP: 'ベースメイクの上からワンタッチ。皮脂とテカリを吸着し、ファンデーションを均一に固定します。マスクをしても崩れにくい軽やかな仕上がりです。',
      EN: 'Sweep it over your base makeup to lock foundation in place, absorb shine, and keep a lightweight finish that resists masks and humidity.'
    }
  },
  {
    id: 'night',
    image: '/usage-night.png',
    title: {
      JP: '就寝前のすっぴんケアに',
      EN: 'Nighttime Bare-Skin Care'
    },
    subtitle: {
      JP: '毛穴と凹凸をなめらかにカバー',
      EN: 'Smooth pores and texture before bed'
    },
    description: {
      JP: '肌になじむ極小シリカが、毛穴や小ジワをふんわりカバー。保湿しながらトーンアップするので、すっぴんに自信を持ちたい夜にも使えます。',
      EN: 'Feather-light silica settles into pores and fine lines, softly blurring them while maintaining moisture so you can feel confident even make-up free.'
    }
  },
  {
    id: 'refresh',
    image: '/usage-smell.png',
    title: {
      JP: 'エチケット＆リフレッシュ',
      EN: 'Freshen Up Anytime'
    },
    subtitle: {
      JP: '外出先でも手軽に皮脂リセット',
      EN: 'Reset shine and odour on the go'
    },
    description: {
      JP: '持ち運びやすいコンパクトで、日中のテカリや気になるニオイ対策にも。抗菌性のあるマザーベジタブル由来成分が清潔なコンディションをキープします。',
      EN: 'The travel-friendly compact tackles mid-day shine or odour build-up, while Mother Vegetable ingredients support a fresh, clean feel.'
    }
  }
]

export default function UsageScenarios() {
  const { t } = useLanguage()

  return (
    <section id="usage" className="py-24 md:py-32 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-emerald-300 mb-4">USAGE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t({ JP: '24時間活躍する3つのシーン', EN: 'Three Moments for 24-Hour Confidence' })}
          </h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-300">
            {t({
              JP: 'MV-Si002はメイクの仕上げだけでなく、素肌ケアやエチケットにも。ライフスタイルに合わせて使い分けられる実用性を、MV-Si001のガイドから取り入れました。',
              EN: 'Inspired by the MV-Si001 guide, MV-Si002 adapts to makeup finishing, bare-skin care, and everyday etiquette so you can stay composed all day.'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scenarios.map((scenario) => (
            <article
              key={scenario.id}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 flex flex-col gap-6 transition-transform duration-300 hover:-translate-y-2 hover:border-emerald-400/40"
            >
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 rounded-full bg-emerald-400/15 blur-2xl" />
                <Image src={scenario.image} alt={t(scenario.title)} fill className="object-contain" />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  {t(scenario.title)}
                </h3>
                <p className="text-sm text-emerald-200">
                  {t(scenario.subtitle)}
                </p>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {t(scenario.description)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
