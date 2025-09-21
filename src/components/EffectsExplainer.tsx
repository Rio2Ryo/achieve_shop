'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function EffectsExplainer() {
  const { t } = useLanguage()

  const sections = [
    {
      id: 'shine-control',
      title: t({ JP: '「顔のテカリを消す」効果はマザベジ形状ならでは', EN: 'Only Mother Vegetables Stop Shine This Way' }),
      before: t({
        JP: '皮脂の油分が同じ形状で並ぶことで光が一方向に跳ね返り、テカリが目立つ。',
        EN: 'Sebum molecules align in one direction, reflecting light evenly and making shine visible.'
      }),
      after: t({
        JP: '天然由来の個性ある粒子が光をランダムに拡散。余分な油分を吸着しながら潤いもキープ。',
        EN: 'Naturally varied particles diffuse light randomly, absorbing excess oil while keeping moisture.'
      }),
      description: t({
        JP: 'マザベジシリカはパウダーひと粒ひと粒の形が異なるため、光の反射が分散。皮脂を吸着しつつ水分をキャッチすることで、清潔感のある質感が長時間続きます。',
        EN: 'Each Mother Vegetable silica particle has a unique shape, scattering light and absorbing sebum while catching moisture for a clean finish that lasts.'
      }),
      cta: t({ JP: 'デートや商談前の必須アイテムに', EN: 'Essential before dates or meetings' }),
      image: '/doc2-b.jpg'
    },
    {
      id: 'night-care',
      title: t({ JP: '睡眠前の「すっぴん」もトーンアップでナチュラルに', EN: 'Tone Up Your Bare Skin Even Before Sleep' }),
      before: t({
        JP: 'シワや毛穴、色むらが目立ち、すっぴんに自信が持てない。',
        EN: 'Fine lines, pores, and uneven tone stand out, reducing bare-skin confidence.'
      }),
      after: t({
        JP: '粒子が肌にフィットして凹凸をカバー。寝る前にも使えて、割れのない自然な仕上がり。',
        EN: 'Particles settle into texture to blur irregularities. Safe to use before bed without cracking.'
      }),
      description: t({
        JP: 'マザベジシリカはひと塗りで気になる箇所に密着。スキンケアしながらトーンアップできるので、医療・介護などメイクができない現場でも活躍します。',
        EN: 'Mother Vegetable silica adheres instantly where you need it, toning up while caring for skin—perfect even in medical or caregiving settings where makeup is limited.'
      }),
      cta: t({ JP: '24時間いつでも清潔感と透明感を', EN: 'Stay fresh and radiant 24/7' }),
      image: '/doc4.jpg'
    }
  ]

  return (
    <section id="effects" className="py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 space-y-16">
        {sections.map((section, index) => {
          const textOrder = index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
          const imageOrder = index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'

          return (
            <div key={section.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className={`space-y-5 ${textOrder}`}>
                <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">USE CASE</p>
                <h3 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                  {section.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-sm text-emerald-200 font-semibold mb-2">{t({ JP: 'Before', EN: 'Before' })}</p>
                    <p className="text-sm text-gray-200 leading-relaxed">{section.before}</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-emerald-400/15 border border-emerald-400/30">
                    <p className="text-sm text-emerald-100 font-semibold mb-2">{t({ JP: 'After', EN: 'After' })}</p>
                    <p className="text-sm text-gray-200 leading-relaxed">{section.after}</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                  {section.description}
                </p>
                <div className="space-y-3">
                  <div className="inline-flex px-5 py-2 rounded-full border border-emerald-300 text-emerald-100 text-xs md:text-sm">
                    {section.cta}
                  </div>
                  {index === 0 && (
                    <div className="block">
                      <button
                        onClick={() => document.getElementById('lineup')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-6 py-2 rounded-full bg-emerald-400 text-black font-semibold text-sm hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/30"
                      >
                        {t({ JP: '商品を見る', EN: 'View Products' })}
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className={`relative ${imageOrder}`}>
                <div className="absolute -inset-4 bg-emerald-300/15 blur-3xl" aria-hidden="true" />
                <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
                  <Image src={section.image} alt={section.title as string} width={700} height={800} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
