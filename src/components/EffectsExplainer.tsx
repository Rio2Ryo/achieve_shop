'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

interface Scenario {
  id: string
  headline: { JP: string; EN: string }
  beforeTitle: { JP: string; EN: string }
  afterTitle: { JP: string; EN: string }
  beforeImage: string
  beforeDetail: string
  afterImage: string
  afterDetail: string
  beforeDescription: { JP: string; EN: string }
  beforeRisk: { JP: string; EN: string }
  afterDescription: { JP: string; EN: string }
  afterBenefit: { JP: string; EN: string }
  footer: { JP: string; EN: string }
}

const scenarios: Scenario[] = [
  {
    id: 'daytime-shine',
    headline: {
      JP: '「顔のテカリを消す」効果はマザベジパウダーならでは',
      EN: 'Mother Veggie Powder Keeps Shine Out of Sight'
    },
    beforeTitle: {
      JP: '皮脂の油分がある状態',
      EN: 'Skin Before Application'
    },
    afterTitle: {
      JP: 'マザベジパウダー塗布後',
      EN: 'After Mother Veggie Powder'
    },
    beforeImage: '/doc1.jpg',
    beforeDetail: '/doc1-a.jpg',
    afterImage: '/doc2.jpg',
    afterDetail: '/doc2-b.jpg',
    beforeDescription: {
      JP: '肌表面の油分が同じ方向に光を跳ね返し、テカリとして目立ちます。',
      EN: 'Oil on the surface reflects light in the same direction, so shine becomes visible.'
    },
    beforeRisk: {
      JP: '既存のケミカルパウダーは形状が均一なため、塗るとさらに光がまとまりテカリやすくなることも。',
      EN: 'Conventional straight-cut powders share identical shapes, bundling reflected light and amplifying shine.'
    },
    afterDescription: {
      JP: 'Mother Vegetables由来の粒子はそれぞれ個性があり、当たった光を細かく散乱。テカリが艶のある透明感に変わります。',
      EN: 'Mother Vegetable particles are all slightly different, scattering light and leaving only a refined glow.'
    },
    afterBenefit: {
      JP: '潤いを抱えたまま余分な皮脂を吸着し、抗酸化ケアで肌も清潔に。デートや商談前の5秒タッチアップに最適です。',
      EN: 'They absorb excess oil while holding moisture and provide antioxidant care—perfect for a five-second refresh before any meeting.'
    },
    footer: {
      JP: 'さっと10秒滑らせるだけで清潔感ある印象に。日中のマストアイテム。',
      EN: 'Glide for ten seconds to look composed—your daytime essential.'
    }
  },
  {
    id: 'night-tone',
    headline: {
      JP: '就寝前の「すっぴん」もトーンアップでナチュラルに',
      EN: 'Tone Up Bare Skin Before Bed'
    },
    beforeTitle: {
      JP: 'シワや毛穴がある状態',
      EN: 'Fine Lines & Pores Visible'
    },
    afterTitle: {
      JP: 'マザベジパウダー塗布後',
      EN: 'After Mother Veggie Powder'
    },
    beforeImage: '/doc3.jpg',
    beforeDetail: '/doc4.jpg',
    afterImage: '/doc2.jpg',
    afterDetail: '/doc2-b.jpg',
    beforeDescription: {
      JP: '就寝前のすっぴんはシワや毛穴が目立ち、肌の凹凸が陰になりがちです。',
      EN: 'Bare skin before sleep often shows fine lines and pores as shadows.'
    },
    beforeRisk: {
      JP: 'ファンデーションを重ねると乾燥して割れることもあるため、寝る前は使いづらい。',
      EN: 'Layering foundation can crack as it dries, making it unsuitable before sleep.'
    },
    afterDescription: {
      JP: 'マザベジパウダーは凹凸に寄り添いながら光をやわらかく散らし、素肌をほんのり明るく見せます。',
      EN: 'Mother Veggie Powder settles into texture, diffuses light softly, and lifts bare-skin brightness.'
    },
    afterBenefit: {
      JP: '寝ている間も気になる部分をカバーしつつ清潔な肌をキープ。マスクや長時間ケアが必要な現場でも使えます。',
      EN: 'It covers concern areas while keeping skin fresh through the night—ideal for long shifts or mask wear.'
    },
    footer: {
      JP: '就寝前だけでなく、メイクができない医療・介護現場でも活躍。24時間いつでも頼れる存在です。',
      EN: 'Trusted for bedtime and makeup-free settings like medical or caregiving work—reliable around the clock.'
    }
  }
]

export default function EffectsExplainer() {
  const { t } = useLanguage()

  return (
    <section id="effects" className="bg-black border-t border-white/10 py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl space-y-16">
          {scenarios.map((scenario) => (
            <article
              key={scenario.id}
              className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-12 text-gray-900"
            >
              <h3 className="text-center text-xl md:text-2xl font-semibold text-amber-300 mb-8">
                {t(scenario.headline)}
              </h3>

              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-900 text-center md:text-left">
                    {t(scenario.beforeTitle)}
                  </h4>
                  <div className="space-y-4">
                    <Image src={scenario.beforeImage} alt={scenario.beforeTitle.JP} width={600} height={400} className="w-full rounded-2xl" />
                    <Image src={scenario.beforeDetail} alt={scenario.beforeTitle.JP} width={600} height={400} className="w-full rounded-2xl" />
                  </div>
                  <div className="space-y-3 text-sm text-gray-800">
                    <p>{t(scenario.beforeDescription)}</p>
                    <p className="font-semibold">{t(scenario.beforeRisk)}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-900 text-center md:text-left">
                    {t(scenario.afterTitle)}
                  </h4>
                  <div className="space-y-4">
                    <Image src={scenario.afterImage} alt={scenario.afterTitle.JP} width={600} height={400} className="w-full rounded-2xl" />
                    <Image src={scenario.afterDetail} alt={scenario.afterTitle.JP} width={600} height={400} className="w-full rounded-2xl" />
                  </div>
                  <div className="space-y-3 text-sm text-gray-800">
                    <p>{t(scenario.afterDescription)}</p>
                    <p className="font-semibold">{t(scenario.afterBenefit)}</p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-center text-base font-semibold text-gray-900">
                {t(scenario.footer)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
