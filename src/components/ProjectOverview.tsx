'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProjectOverview() {
  const { t } = useLanguage()

  const pillars = [
    {
      title: t({ JP: '生命力をまとうパウダー', EN: 'Powder Charged with Life' }),
      description: t({
        JP: 'Mother Vegetables由来のマイクロ粒子が、素肌に自然な透明感を与えます。',
        EN: 'Mother Vegetable micro particles deliver natural clarity to bare skin.'
      })
    },
    {
      title: t({ JP: '医薬部外品原料規格', EN: 'Quasi-Drug Grade Standard' }),
      description: t({
        JP: '環境に配慮し、マザーベジコンフィデンスの製造時には農薬や化学肥料を一切使用していません。土壌汚染をしない工場で製造しています。',
        EN: 'Environmentally conscious production with zero pesticides or chemical fertilizers. Manufactured in facilities that prevent soil contamination.'
      })
    },
    {
      title: t({ JP: '使うほどCO₂削減', EN: 'Reduce CO₂ With Every Use' }),
      description: t({
        JP: 'マザーベジタブルはCO₂を吸収して育つため、使えば使うほど地球環境に貢献。美しさと地球への優しさを両立します。',
        EN: 'Mother Vegetables grow by absorbing CO₂, so the more you use, the more you contribute to the environment. Beauty and Earth-friendliness in harmony.'
      })
    }
  ]

  return (
    <section id="concept" className="bg-black border-t border-white/10 py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-20">
          <div className="space-y-6 text-center">
            <p className="text-xs tracking-[0.4em] text-amber-300">CONCEPT</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              {t({ JP: 'Mother Vegetables Confidenceとは', EN: 'What Is Mother Vegetables Confidence?' })}
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t({
                JP: '35億年前の地球最初の生命「マザーベジタブル」に凝縮された地球の生命力がスキンパウダーになりました。"素肌が好きになる瞬間"を届けます。マザーベジタブルの生命力を閉じ込めた粒子が、透明感と持続力を同時に叶えます。',
                EN: 'The life force of Earth, condensed in "Mother Vegetables" — Earth\'s first life from 3.5 billion years ago — has become a skin powder. Particles infused with Mother Vegetable vitality deliver clarity and longevity in a single sweep.'
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title as string}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 md:p-8 text-left backdrop-blur"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{pillar.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Image
              src="/mazavege.png"
              alt="Mother Vegetables"
              width={400}
              height={200}
              className="w-auto h-auto max-w-[400px] rounded-[32px] border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
