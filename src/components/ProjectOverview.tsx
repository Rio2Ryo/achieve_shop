'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProjectOverview() {
  const { t } = useLanguage()

  const highlights = [
    {
      title: t({ JP: '35億年前の生命力', EN: '3.5 Billion Years of Vitality' }),
      description: t({
        JP: '地球最初の生命体「マザーベジタブル」から抽出した有用成分を贅沢に配合。',
        EN: 'Luxuriously formulated with active ingredients extracted from the original life form “Mother Vegetables”.'
      })
    },
    {
      title: t({ JP: '医薬部外品原料規格', EN: 'Quasi-Drug Standard' }),
      description: t({
        JP: '肌へのやさしさにこだわり、毎日使える安心処方。敏感肌にも対応。',
        EN: 'Safe enough for daily use with a formula gentle on even sensitive skin.'
      })
    },
    {
      title: t({ JP: '一日中サラサラ', EN: 'All-Day Smooth Finish' }),
      description: t({
        JP: '汗や皮脂をブロックし、夕方まで陶器肌をキープ。',
        EN: 'Locks away sweat and sebum to maintain a porcelain finish until night.'
      })
    }
  ]

  const certifications = [
    {
      title: t({ JP: '厚生労働省届出の医薬部外品原料', EN: "Quasi-drug ingredients registered with Japan's MHLW" }),
      description: t({
        JP: '製造番号とロット管理を徹底し、すべてのバッチで成分証明を取得。',
        EN: 'Each batch ships with full lot traceability and ingredient certificates.'
      })
    },
    {
      title: t({ JP: 'GMP取得クリーンルーム生産', EN: 'GMP-certified clean-room manufacturing' }),
      description: t({
        JP: '温度・光量・水質を24時間モニタリング。CO₂吸収データもリアルタイムで記録。',
        EN: 'Environment, light, and water quality are monitored 24/7 alongside CO₂ absorption metrics.'
      })
    },
    {
      title: t({ JP: '医療・美容機関との連携', EN: 'Partnership with medical & aesthetic clinics' }),
      description: t({
        JP: '皮膚科医・エステサロンでの導入プログラムを展開し、定期的な安全性レビューを実施。',
        EN: 'Collaborations with dermatologists and salons provide ongoing safety reviews and usage programs.'
      })
    }
  ]

  return (
    <section id="concept" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.4em] text-emerald-300 mb-4">CONCEPT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t({ JP: 'Mother Vegetables Confidenceとは', EN: 'What Is Mother Vegetables Confidence?' })}
          </h2>
          <p className="max-w-4xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed">
            {t({
              JP: 'Mother Vegetables Confidenceは、35億年前の地球最初の生命体を再現した「マザーベジタブル」を主成分にしたラグジュアリーフェイスパウダーです。密着力と透明感を両立させ、一日中崩れない陶器肌を叶えます。',
              EN: 'Mother Vegetables Confidence is a luxury face powder powered by “Mother Vegetables”, a recreation of Earth’s first life form from 3.5 billion years ago. It delivers both adhesion and clarity for an all-day porcelain finish that will not break down.'
            })}
          </p>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-10 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-6">
                {t({
                  JP: '私たちは「マザーベジタブル」が持つ吸着・保護・トーンアップの性質に着目し、わずか5秒で肌にフィットする独自のパウダーを開発しました。どんな環境でも崩れにくく、時間が経ってもサラサラで上質な仕上がりが続きます。',
                  EN: 'By focusing on the absorbent, protective, and tone-enhancing qualities of Mother Vegetables, we created a unique powder that melds to skin in just five seconds. It resists breakdown in any environment and keeps a smooth, refined finish over time.'
                })}
              </p>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                {t({
                  JP: 'スキンケアの最後にさっとのせるだけで、毛穴や凹凸を目立たせず、素肌そのものが美しくなったような透明感を実現。忙しい朝でも、夜まで続く自信を与えます。',
                  EN: 'Applied as the final step in your routine, it blurs pores and uneven texture for the appearance of naturally refined skin. Even on busy mornings, it grants confidence that lasts through the night.'
                })}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div key={item.title} className="p-5 rounded-xl border border-white/10 bg-white/5">
                  <h3 className="text-lg font-semibold text-emerald-200 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-400/20 blur-3xl" aria-hidden="true" />
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl">
              <Image
                src="/doc1.jpg"
                alt="Mother Vegetables Confidence packaging"
                width={640}
                height={960}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 xl:grid-cols-[1.1fr,0.9fr] gap-10 lg:gap-16 items-stretch">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06]">
            <Image
              src="/ms-banner.jpg"
              alt="Mother Silica cultivation"
              width={1200}
              height={720}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/10" />
            <div className="relative p-8 md:p-12 text-white space-y-4">
              <p className="text-sm tracking-[0.4em] text-emerald-200">MOTHER SILICA</p>
              <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                {t({
                  JP: '地球最初の生命力を凝縮した「マザーベジシリカ」',
                  EN: 'Mother Silica concentrates the vitality of Earth’s first lifeforms'
                })}
              </h3>
              <p className="text-sm md:text-base text-gray-100 leading-relaxed max-w-2xl">
                {t({
                  JP: 'MV-Si001で公開されたマザーベジシリカの培養シーンをそのままに、私たちのプロダクトにも厳しい純度管理とクリーンルーム栽培を反映しました。環境再生と美容の両立というプロジェクトの核となるフィロソフィーを体感できます。',
                  EN: 'Mirroring the cultivation scenes introduced in MV-Si001, our production follows the same strict purity controls and clean-room growing, embodying the project philosophy of pairing environmental regeneration with beauty.'
                })}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 space-y-6 backdrop-blur-sm">
            <h4 className="text-xl font-semibold text-white">
              {t({ JP: '信頼性を支えるトピックス', EN: 'Reliability Highlights' })}
            </h4>
            <div className="space-y-4 text-sm text-gray-200">
              {certifications.map((item) => (
                <div key={item.title} className="border border-white/10 rounded-2xl p-4 bg-white/[0.03]">
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <ul className="space-y-4 text-sm text-gray-200">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">
                    {t({ JP: '第三者機関による連続モニタリング', EN: 'Third-party monitoring' })}
                  </p>
                  <p className="text-sm text-gray-300">
                    {t({
                      JP: '生産環境と製品バッチを外部機関が定期監査。MV-Si001で示された管理体制を踏襲しています。',
                      EN: 'An external laboratory audits the grow rooms and batches, continuing the management framework made public for MV-Si001.'
                    })}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">
                    {t({ JP: '純度97.1%のオーガニックシリカ', EN: '97.1% organic silica purity' })}
                  </p>
                  <p className="text-sm text-gray-300">
                    {t({
                      JP: 'MV-Si001で示されたシリカ分析結果を共有し、同等の品質指標をシリカ版でも保証。',
                      EN: 'We share the silica analysis reported with MV-Si001 and guarantee the same purity benchmarks.'
                    })}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">
                    {t({ JP: 'エクトイン配合で潤いをキープ', EN: 'Ectoine-enhanced moisture' })}
                  </p>
                  <p className="text-sm text-gray-300">
                    {t({
                      JP: '天然アミノ酸エクトインを加えたラインは、敏感肌でも使える穏やかな保湿力が特長です。',
                      EN: 'The ectoine line adds natural amino acids for gentle hydration suited to sensitive skin.'
                    })}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">
                    {t({ JP: '地球環境へのリターン', EN: 'Return to the planet' })}
                  </p>
                  <p className="text-sm text-gray-300">
                    {t({
                      JP: '生産過程で吸収したCO₂データと併せ、Mother Vegetablesプロジェクト全体の循環を可視化しています。',
                      EN: 'We visualise the CO₂ absorbed during production to highlight the circular benefits of the Mother Vegetables project.'
                    })}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
