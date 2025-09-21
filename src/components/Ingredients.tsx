'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Ingredients() {
  const { t } = useLanguage()

  const composition = [
    {
      label: t({ JP: '配合量', EN: 'Dosage' }),
      value: t({
        JP: 'マザーベジシリカ 1,500mg / 2,000mg / 10,000mg バリエーション',
        EN: 'Mother Veggie Silica in 1,500 mg, 2,000 mg, and 10,000 mg variants'
      })
    },
    {
      label: t({ JP: '原料産地', EN: 'Origin' }),
      value: t({
        JP: '鹿児島県・大隅半島の地下水とクリーンルーム環境で培養。',
        EN: 'Cultivated in clean rooms using underground water from the Ōsumi Peninsula, Kagoshima.'
      })
    },
    {
      label: t({ JP: '純度', EN: 'Purity' }),
      value: t({
        JP: 'オーガニックシリカ純度97.1%以上（第三者機関による分析済み）',
        EN: '≥97.1% organic silica purity (independently analysed).'
      })
    }
  ]

  const processSteps = [
    t({
      JP: 'STEP1: グリーンハウスでマザーベジタブルを24時間培養し、CO₂吸収量・温湿度・光量をリアルタイム記録。',
      EN: 'Step 1: Cultivate Mother Vegetables around the clock in greenhouses while logging CO₂ uptake, temperature, and light in real time.'
    }),
    t({
      JP: 'STEP2: 低温乾燥とマイクロ粉砕で粒径を均一化。不要な不純物を多段フィルターで除去。',
      EN: 'Step 2: Low-temperature drying and micro-milling unify particle size, followed by multi-stage filtration to remove impurities.'
    }),
    t({
      JP: 'STEP3: 医薬部外品GMP準拠クリーンルームで充填し、ロットごとに成分証明書を発行。',
      EN: 'Step 3: Fill in GMP-compliant clean rooms and issue a certificate of analysis for every lot.'
    })
  ]

  const benefits = [
    {
      title: t({ JP: '化粧崩れ防止効果', EN: 'Prevents makeup breakdown' }),
      description: t({
        JP: '汗やテカリをしっかり吸着し、崩れ知らずの肌へ。',
        EN: 'Absorbs sweat and shine to keep makeup intact.'
      })
    },
    {
      title: t({ JP: '透明感のある陶器肌', EN: 'Creates luminous porcelain skin' }),
      description: t({
        JP: '微粒子パウダーが凹凸を埋め、光を拡散して透明感アップ。',
        EN: 'Micro particles fill unevenness and diffuse light for clarity.'
      })
    },
    {
      title: t({ JP: 'トーンアップ効果', EN: 'Brightens complexion' }),
      description: t({
        JP: '自然な明るさで血色を引き上げ、くすみのない肌へ導きます。',
        EN: 'Lifts the complexion naturally and diminishes dullness.'
      })
    },
    {
      title: t({ JP: 'スキンケア効果', EN: 'Skincare benefits while you wear it' }),
      description: t({
        JP: '肌を守りながら潤いをキープ。敏感肌でも毎日使える穏やかな処方。',
        EN: 'Protects while keeping hydration; gentle enough for daily sensitive-skin use.'
      })
    }
  ]

  return (
    <section id="ingredients" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-emerald-300 mb-4">INGREDIENTS &amp; EFFECTS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t({ JP: '主成分と期待できる効果', EN: 'Hero Ingredient &amp; Benefits' })}
          </h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-300">
            {t({
              JP: 'Mother Vegetables Confidenceの核となるのは「マザーベジタブル」。独自の吸着力とトーンコントロールにより、素肌を守りながら一日中美しさをキープします。',
              EN: 'At the heart of Mother Vegetables Confidence lies “Mother Vegetables”. Its unique absorption and tone-control properties protect skin while preserving beauty all day long.'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md p-8 space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="relative w-full md:w-48 h-48 md:h-52 overflow-hidden rounded-2xl">
                  <Image
                    src="/doc1-a.jpg"
                    alt="Mother Vegetables ingredient"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">MAIN INGREDIENT</p>
                  <h3 className="text-2xl font-semibold text-white">
                    {t({ JP: 'マザーベジタブル', EN: 'Mother Vegetables' })}
                  </h3>
                  <p className="text-sm md:text-base text-gray-100 leading-relaxed">
                    {t({
                      JP: '35億年前に誕生した地球最初の生命体を再現し、独自の吸着機能で皮脂と汗をキャッチ。空気中の水分を取り込みながら肌を守り、清潔でなめらかな状態をキープします。',
                      EN: 'A recreation of Earth’s first life born 3.5 billion years ago, it catches sebum and sweat with unique absorption while drawing in ambient moisture to keep skin protected, clean, and smooth.'
                    })}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {composition.map((item) => (
                  <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="text-xs text-emerald-200 tracking-[0.2em] mb-2">{item.label}</p>
                    <p className="text-sm text-gray-100 leading-snug">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-black/25 border border-white/10 rounded-2xl p-5 space-y-2">
                {processSteps.map((step) => (
                  <p key={step} className="text-xs md:text-sm text-gray-100 leading-relaxed">
                    {step}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title as string} className="p-6 rounded-2xl bg-white/[0.06] border border-white/10">
                  <p className="text-base text-white font-semibold mb-2">{benefit.title}</p>
                  <p className="text-sm text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button
                onClick={() => document.getElementById('how-to-use')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 rounded-full bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/30"
              >
                {t({ JP: '使い方を見る', EN: 'See How to Use' })}
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/15">
              <Image src="/doc2.jpg" alt="Powder texture close up" width={640} height={800} className="w-full h-full object-cover" />
            </div>
            <div className="relative rounded-3xl overflow-hidden border border-white/15">
              <Image src="/doc3.jpg" alt="Application image" width={640} height={800} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
