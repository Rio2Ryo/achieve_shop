'use client'

import { HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineSun, HiOutlineSparkles, HiOutlineGlobeAlt, HiOutlineCube } from 'react-icons/hi'
import { useLanguage } from '@/contexts/LanguageContext'

export default function IndustryApproach() {
  const { t } = useLanguage()

  const mainFeatures = [
    {
      category: t({ JP: 'MORNING MAGIC', EN: 'MORNING MAGIC' }),
      title: t({ JP: 'たった5秒で理想の仕上がり', EN: 'Perfect Finish in Just 5 Seconds' }),
      description: t({
        JP: 'パフで滑らせるだけで、プロが仕上げたような均一感。忙しい朝も気分が上がります。',
        EN: 'One glide of the puff delivers a pro finish, turning even rushed mornings into a mood lift.'
      }),
      icon: <HiOutlineLightningBolt className="h-7 w-7 text-amber-300" />,
      details: [
        t({ JP: 'ワンタッチで密着する特殊粒子設計', EN: 'Special particle design for one-touch adhesion' }),
        t({ JP: '光を集めるマイクロ粒子で素肌を美しく整える', EN: 'Micro particles gather light to beautify bare skin' }),
        t({ JP: '空気のような軽さで負担なし', EN: 'Featherlight feel with zero burden' })
      ]
    },
    {
      category: t({ JP: 'ALL DAY CONFIDENCE', EN: 'ALL DAY CONFIDENCE' }),
      title: t({ JP: '24時間崩れない陶器肌', EN: '24-Hour Porcelain Skin' }),
      description: t({
        JP: '湿度やマスクでも崩れにくい密着感。午後の予定も自信のある素肌で迎えられます。',
        EN: 'Clings through humidity and masks so every afternoon plan starts with confident skin.'
      }),
      icon: <HiOutlineSun className="h-7 w-7 text-amber-300" />,
      details: [
        t({ JP: '独自のシェル構造が汗と皮脂をコントロール', EN: 'Shell structure controls sweat and sebum' }),
        t({ JP: 'マスク摩擦から肌を保護', EN: 'Protects from mask friction' }),
        t({ JP: '夜まで透明感をキープ', EN: 'Maintains clarity until night' })
      ]
    },
    {
      category: t({ JP: 'SKIN CARE', EN: 'SKIN CARE' }),
      title: t({ JP: '肌に優しい医薬部外品原料', EN: 'Gentle Quasi-Drug Ingredients' }),
      description: t({
        JP: '医薬部外品原料規格をクリアした成分とクリーンルーム製造。敏感肌でもワクワクしながら毎日使えます。',
        EN: 'Quasi-drug grade ingredients and clean-room production keep even sensitive skin excited for daily use.'
      }),
      icon: <HiOutlineShieldCheck className="h-7 w-7 text-amber-300" />,
      details: [
        t({ JP: '純度97.1%以上のロット保証', EN: '97.1%+ purity guaranteed' }),
        t({ JP: '24時間モニタリングされたクリーン環境', EN: 'Clean rooms monitored 24/7' }),
        t({ JP: 'アレルギーテスト済み', EN: 'Allergy tested' })
      ]
    },
    {
      category: t({ JP: 'EARTH FRIENDLY', EN: 'EARTH FRIENDLY' }),
      title: t({ JP: '使うほどCO₂削減に貢献', EN: 'Reduce CO₂ With Every Use' }),
      description: t({
        JP: 'マザーベジタブルはCO₂を吸収して育つため、使えば使うほど地球環境に貢献。美しさと地球への優しさを両立。',
        EN: 'Mother Vegetables grow by absorbing CO₂, so the more you use, the more you contribute to the environment.'
      }),
      icon: <HiOutlineGlobeAlt className="h-7 w-7 text-amber-300" />,
      details: [
        t({ JP: 'CO₂吸収循環栽培', EN: 'CO₂-absorbing circular cultivation' }),
        t({ JP: 'オーガニック・ハラール・ビーガン認証', EN: 'Organic, Halal, Vegan certified' }),
        t({ JP: 'サステナブルなパッケージング', EN: 'Sustainable packaging' })
      ]
    },
    {
      category: t({ JP: 'NIGHT CHILL', EN: 'NIGHT CHILL' }),
      title: t({ JP: '素肌のままでワントーンアップ', EN: 'One-Tone Lift, Bare Skin Feel' }),
      description: t({
        JP: '極小マイクロ粒子が毛穴の陰影をふんわり消し、ナイトケア前の素肌に自信が宿る。',
        EN: 'Ultra-fine particles softly blur pore shadows, bringing confidence to bare skin before night care.'
      }),
      icon: <HiOutlineSparkles className="h-7 w-7 text-amber-300" />,
      details: [
        t({ JP: 'エクトインがつくる保湿膜で、寝ている間も乾燥知らず', EN: 'Ectoine moisture film prevents overnight dryness' }),
        t({ JP: '肌に乗せたまま寝られるほど、呼吸するように軽いテクスチャー', EN: 'So light you can sleep with it on' }),
        t({ JP: 'ロットトレース付きクリーン栽培で肌への優しさを追求', EN: 'Clean cultivation with lot traceability for gentle care' })
      ]
    },
    {
      category: t({ JP: 'PARTICLE TECH', EN: 'PARTICLE TECH' }),
      title: t({ JP: '35億年の生命力を粒子に凝縮', EN: '3.5 Billion Years of Life in Every Particle' }),
      description: t({
        JP: 'Mother Vegetables由来のマイクロ粒子が光を操り、余分な皮脂を抱え込み、空気のような軽さを実現。',
        EN: 'Mother Vegetable particles manage light, cradle excess oil, and deliver featherlight coverage.'
      }),
      icon: <HiOutlineCube className="h-7 w-7 text-amber-300" />,
      details: [
        t({ JP: '平均粒子径0.5μmの超微粒子', EN: 'Ultra-fine 0.5μm average particle size' }),
        t({ JP: '光の乱反射で自然な透明感', EN: 'Natural clarity through light diffusion' }),
        t({ JP: '医療・美容機関での継続導入実績', EN: 'Proven track record in medical & beauty clinics' })
      ]
    }
  ]
  return (
    <section id="features" className="bg-black border-t border-white/10 py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-6 text-center mb-16">
            <p className="text-xs tracking-[0.35em] text-amber-300">FEATURES</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              {t({ JP: 'ずっと触れていたくなる理由', EN: 'Why You Keep Reaching for It' })}
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t({
                JP: '使った瞬間から帰宅するまで、気持ちが上向くストーリーを作りました。ワクワクを生む仕掛けが各ブロックに隠れています。',
                EN: 'From first sweep to lights-out, each block is engineered to lift your mood and keep the magic going.'
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {mainFeatures.map((feature) => (
              <article
                key={feature.title as string}
                className="group flex flex-col gap-6 rounded-[32px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs uppercase tracking-[0.3em] text-amber-200 block mb-2">
                      {feature.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-xs text-gray-400">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-amber-300" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}