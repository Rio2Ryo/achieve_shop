'use client'

import { HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineSun } from 'react-icons/hi'
import { useLanguage } from '@/contexts/LanguageContext'

const iconClasses = 'text-emerald-300 text-3xl md:text-4xl'

export default function IndustryApproach() {
  const { t } = useLanguage()

  const features = [
    {
      title: t({ JP: '朝の5秒で完成', EN: 'Ready in 5 Seconds' }),
      subtitle: t({
        JP: '忙しい朝でもプロの仕上がり',
        EN: 'Professional results even on busy mornings'
      }),
      description: t({
        JP: 'ひと塗りで均一に広がり、毛穴や凹凸をぼかして陶器肌に。テクニック不要で、美しい仕上がりが瞬時に完成します。',
        EN: 'Glides on evenly in one sweep, blurring pores and texture for a porcelain finish without requiring special technique.'
      }),
      icon: <HiOutlineLightningBolt className={iconClasses} />
    },
    {
      title: t({ JP: '24時間崩れない', EN: 'Stays Beautiful for 24 Hours' }),
      subtitle: t({
        JP: '汗や皮脂に負けない密着力',
        EN: 'Adhesion that resists sweat and sebum'
      }),
      description: t({
        JP: '独自の密着技術で長時間キープ。マスクや湿度の高い環境でも崩れにくく、朝の仕上がりを夜まで保ちます。',
        EN: 'Our exclusive binding technology holds makeup in place through masks and humidity, keeping your morning finish until night.'
      }),
      icon: <HiOutlineSun className={iconClasses} />
    },
    {
      title: t({ JP: '肌に優しい', EN: 'Skin-Friendly Care' }),
      subtitle: t({
        JP: '医薬部外品原料規格をクリア',
        EN: 'Formulated to quasi-drug standards'
      }),
      description: t({
        JP: '天然由来のマザーベジタブル成分が肌を守り、敏感肌でも安心。スキンケアとメイクを同時に叶えます。',
        EN: 'Naturally-derived Mother Vegetable ingredients defend skin, making it safe even for sensitive types while delivering skincare benefits.'
      }),
      icon: <HiOutlineShieldCheck className={iconClasses} />
    }
  ]

  return (
    <section id="features" className="py-24 md:py-32 bg-gradient-to-b from-gray-950 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-emerald-300 mb-4">FEATURES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t({ JP: '選ばれ続ける3つの理由', EN: 'Three Reasons to Love It' })}
          </h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-300">
            {t({
              JP: 'Mother Vegetables Confidenceが実現するのは、美しい仕上がりと肌へのやさしさ、そして一日中続く自信です。',
              EN: 'Mother Vegetables Confidence delivers beautiful results, gentle care, and confidence that lasts all day.'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title as string}
              className="group p-8 rounded-2xl bg-white/[0.08] border border-white/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-400/15 border border-emerald-400/40">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">{feature.title}</h3>
              <p className="text-sm text-emerald-200 text-center mb-4">{feature.subtitle}</p>
              <p className="text-sm text-gray-200 leading-relaxed text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
