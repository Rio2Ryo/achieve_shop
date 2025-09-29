'use client'

import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

export default function ProjectOverview() {
  const { t } = useLanguage()

  const pillars = [
    {
      title: t({ JP: 'ひと塗りで清潔感をチャージ', EN: 'One Sweep, Instant Cleanliness' }),
      description: t({
        JP: 'マザーベジタブル由来の多面体パウダーが皮脂やテカリを抑え、ギトギト感を残さずマットすぎない自然な質感に仕上げます。',
        EN: 'Mother Vegetable\'s faceted powder suppresses oil and shine, cutting greasiness while keeping a natural finish.'
      })
    },
    {
      title: t({ JP: '24時間つづくConfidence', EN: 'Confidence for 24 Hours' }),
      description: t({
        JP: '商談前の数秒タッチアップで、夜の会食や帰宅までトーンアップした印象が継続。24時間、自信のオーラが途切れません。',
        EN: 'A few seconds before a meeting keeps your tone-up impression intact through dinners and the ride home—confidence that does not fade for 24 hours.'
      })
    },
    {
      title: t({ JP: '肌と地球をいたわる100%天然', EN: '100% Natural for Skin and Planet' }),
      description: t({
        JP: '無添加・無農薬で育てたマザーベジが原料。川や海に流れても栄養となり、育成段階では天然芝の700倍CO₂を吸収します。',
        EN: 'Made from pesticide-free Mother Vegetable. Even when rinsed away it feeds nature, and during cultivation it absorbs 700 times more CO₂ than natural grass.'
      })
    }
  ]

  const scenes = [
    t({ JP: '商談やプレゼン前にサッとひと塗り', EN: 'Swipe once before negotiations or presentations.' }),
    t({ JP: 'デートや特別な時間に自然なトーンアップ', EN: 'Tone up naturally before dates or special moments.' }),
    t({ JP: '汗が気になる夏の日や移動後のリセット', EN: 'Reset after a humid commute or a hot summer day.' }),
    t({ JP: '耳の後ろや首筋までケアして香りもすっきり', EN: 'Freshen behind the ears and along the neck for a cleaner scent.' }),
    t({ JP: '帰宅後のクールダウンやギフトにも最適', EN: 'Perfect for winding down at home or gifting confidence.' })
  ]

  return (
    <section id="concept" className="bg-black border-t border-white/10 py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl space-y-20">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-white">MOTHER VEGETABLE CONFIDENCE</h2>
          </div>

          <div className="space-y-4 text-center">
            <p className="text-sm md:text-base text-gray-300 leading-loose max-w-3xl mx-auto whitespace-pre-line">
              {t({
                JP: '35億年前の地球最初の生命「マザーベジタブル」に\n凝縮された地球の生命力がスキンパウダーになりました。\n\n"素肌が好きになる瞬間"を届けます。\n\nマザーベジタブルの生命力を閉じ込めた粒子が、\n清潔感と透明感、そして持続力を与えます。',
                EN: 'The life force of the Earth, condensed into \'Mother Vegetable,\'\nthe first life on Earth 3.5 billion years ago,\nhas become a skin powder.\n\nWe deliver \'the moment you fall in love with your bare skin.\'\n\nThe particles, which encapsulate the life force of Mother Vegetable,\nprovide a sense of cleanliness, transparency, and sustainability.'
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: t({ JP: '圧倒的な生命力を凝縮', EN: 'Condensed Overwhelming Life Force' }),
                description: t({
                  JP: '100%天然由来のMother Vegetableのマイクロ粒子により、凝縮された地球の生命体を肌に直接与えることができます。',
                  EN: 'The micro-particles of 100% naturally derived Mother Vegetable allow you to directly apply the condensed life force of the Earth to your skin.'
                })
              },
              {
                title: t({ JP: '医薬部外品原料規格', EN: 'Quasi-Drug Raw Material Standard' }),
                description: t({
                  JP: 'Mother Vegetableは製造の過程で農薬や化学物質を一切使用しておりません。医薬部外品原料規格もクリアしており安心・安全にお使いいただくことができます。',
                  EN: 'Mother Vegetable is produced without the use of any pesticides or chemical substances. It has also cleared the quasi-drug raw material standards, so you can use it with peace of mind.'
                })
              },
              {
                title: t({ JP: '使うほどCO₂削減', EN: 'Reduces CO₂ with Use' }),
                description: t({
                  JP: 'マザーベジタブルはCO₂を吸収して育つため、使えば使うほど地球環境に貢献。自分の自信を育むだけでなく、地球自身も育むことができます。美しさと地球への優しさを両立します。',
                  EN: 'Because Mother Vegetable grows by absorbing CO₂, the more you use it, the more you contribute to the global environment. You can not only cultivate your own confidence but also the Earth itself. It combines beauty with kindness to the Earth.'
                })
              }
            ].map((pillar) => (
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
              alt="Mother Vegetable"
              width={400}
              height={200}
              className="w-auto h-auto max-w-[250px] lg:max-w-[400px] rounded-[32px] border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
