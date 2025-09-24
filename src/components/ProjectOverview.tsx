'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProjectOverview() {
  const { t } = useLanguage()

  const pillars = [
    {
      title: t({ JP: '圧倒的な生命力を凝縮', EN: 'Powder Charged with Life' }),
      description: t({
                        JP: '100%天然由来のMother Vegetablesのマイクロ粒子により、凝縮された地球の生命体を肌に直接与えることができます。',
        EN: 'Mother Vegetable micro particles deliver natural clarity to bare skin.'
      })
    },
    {
      title: t({ JP: '医薬部外品原料規格', EN: 'Quasi-Drug Grade Standard' }),
      description: t({
        JP: 'Mother Vegetablesは製造の過程で農薬や化学物質を一切使用しておりません。医薬部外品原料規格もクリアしており安心・安全にお使いいただくことができます。',
        EN: 'Environmentally conscious production with zero pesticides or chemical fertilizers. Manufactured in facilities that prevent soil contamination.'
      })
    },
    {
      title: t({ JP: '使うほどCO₂削減', EN: 'Reduce CO₂ With Every Use' }),
      description: t({
        JP: 'マザーベジタブルはCO₂を吸収して育つため、使えば使うほど地球環境に貢献。自分の自信を育むだけでなく、地球自身も育むことができます。美しさと地球への優しさを両立します。',
        EN: 'Mother Vegetables grow by absorbing CO₂, so the more you use, the more you contribute to the environment. Beauty and Earth-friendliness in harmony.'
      })
    }
  ]

  return (
    <section id="concept" className="bg-black border-t border-white/10 py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-20">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-amber-300">MOTHER VEGETABLES CONFIDENCE</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t({
                JP: '35億年前の地球最初の生命「マザーベジタブル」に凝縮された地球の生命力がスキンパウダーになりました。"素肌が好きになる瞬間"を届けます。マザーベジタブルの生命力を閉じ込めた粒子が、清潔感と透明感、そして持続力を与えます。',
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
