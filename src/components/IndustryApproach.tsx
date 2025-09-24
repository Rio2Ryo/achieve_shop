'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function IndustryApproach() {
  const { t } = useLanguage()

  return (
    <section id="features" className="bg-black border-t border-white/10 py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-6 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-amber-300">
              {t({ JP: 'EFFECTIVE', EN: 'EFFECTIVE' })}
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t({
                JP: '使った瞬間から24時間、あなたの肌は1つ上のレベルに引き上がります。',
                EN: 'From the moment you apply it until you return home, you can maintain your confidence all day long.'
              })}
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <article className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-12 text-white">
              <h3 className="text-center text-xl md:text-2xl font-semibold text-white mb-8">
                {t({ JP: '顔のテカリが消える', EN: 'Mother Vegetables Confidence Keeps Shine Out of Sight' })}
              </h3>

              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-white text-center md:text-left">
                    {t({ JP: '皮脂の油分がある状態', EN: 'Skin Before Application' })}
                  </h4>
                  <div className="space-y-4">
                    <Image src="/doc1.jpg" alt="皮脂の油分がある状態" width={300} height={200} className="w-full rounded-2xl" />
                    <Image src="/doc1-a.png" alt="皮脂の油分がある状態" width={300} height={200} className="w-full rounded-2xl overflow-hidden" />
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p>{t({ JP: '肌表面の油分が同じ方向に光を跳ね返し、テカリとして目立ちます。', EN: 'Oil on the surface reflects light in the same direction, so shine becomes visible.' })}</p>
                    <p className="font-semibold">{t({ JP: '既存のケミカルパウダーは形状が均一なため、塗るとさらに光がまとまりテカリやすくなることも。', EN: 'Conventional straight-cut powders share identical shapes, bundling reflected light and amplifying shine.' })}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-white text-center md:text-left">
                    {t({ JP: 'Confidence塗布後', EN: 'After Confidence' })}
                  </h4>
                  <div className="space-y-4">
                    <Image src="/doc2.jpg" alt="Confidence塗布後" width={300} height={200} className="w-full rounded-2xl" />
                    <Image src="/doc2-b.jpg" alt="Confidence塗布後" width={300} height={200} className="w-full rounded-2xl" />
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p>{t({ JP: 'Mother Vegetables由来の粒子はそれぞれ個性があり、当たった光を細かく散乱。テカリが艶のある透明感に変わります。', EN: 'Mother Vegetable particles are all slightly different, scattering light and leaving only a refined glow.' })}</p>
                    <p className="font-semibold">{t({ JP: '潤いを抱えたまま余分な皮脂を吸着し、抗酸化ケアで肌も清潔に。デートや商談前の5秒タッチアップに最適です。', EN: 'They absorb excess oil while holding moisture and provide antioxidant care—perfect for a five-second refresh before any meeting.' })}</p>
                  </div>
                </div>
              </div>

              
            </article>
          </div>

          <div className="mx-auto max-w-5xl">
            <article className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-12 text-white">
              <h3 className="text-center text-xl md:text-2xl font-semibold text-white mb-8">
                {t({ JP: 'すっぴんもトーンアップ', EN: 'Mother Vegetables Confidence Keeps Shine Out of Sight' })}
              </h3>

              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-white text-center md:text-left">
                    {t({ JP: 'シワや毛穴がある状態', EN: 'Skin Before Application' })}
                  </h4>
                  <div className="space-y-4">
                    <Image src="/doc3.jpg" alt="シワや毛穴がある状態" width={300} height={200} className="w-full rounded-2xl" />
                    <Image src="/doc3-a.png" alt="シワや毛穴がある状態" width={300} height={200} className="w-full rounded-2xl overflow-hidden" />
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p>{t({ JP: '肌表面の油分が同じ方向に光を跳ね返し、テカリとして目立ちます。', EN: 'Oil on the surface reflects light in the same direction, so shine becomes visible.' })}</p>
                    <p className="font-semibold">{t({ JP: '既存のケミカルパウダーは形状が均一なため、塗るとさらに光がまとまりテカリやすくなることも。', EN: 'Conventional straight-cut powders share identical shapes, bundling reflected light and amplifying shine.' })}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-white text-center md:text-left">
                    {t({ JP: 'Confidence塗布後', EN: 'After Confidence' })}
                  </h4>
                  <div className="space-y-4">
                    <Image src="/doc4.jpg" alt="Confidence塗布後" width={300} height={200} className="w-full rounded-2xl" />
                    <Image src="/doc4-b.jpg" alt="Confidence塗布後" width={300} height={200} className="w-full rounded-2xl" />
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p>{t({ JP: 'Mother Vegetables由来の粒子はそれぞれ個性があり、当たった光を細かく散乱。テカリが艶のある透明感に変わります。', EN: 'Mother Vegetable particles are all slightly different, scattering light and leaving only a refined glow.' })}</p>
                    <p className="font-semibold">{t({ JP: '潤いを抱えたまま余分な皮脂を吸着し、抗酸化ケアで肌も清潔に。デートや商談前の5秒タッチアップに最適です。', EN: 'They absorb excess oil while holding moisture and provide antioxidant care—perfect for a five-second refresh before any meeting.' })}</p>
                  </div>
                </div>
              </div>

              
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}