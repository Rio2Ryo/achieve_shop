'use client'

import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

export default function MottoSection() {
  const { t } = useLanguage()

  const scenes = [
    {
      text: t({ JP: '商談やプレゼン前に', EN: 'Before negotiations or presentations' }),
      number: '01'
    },
    {
      text: t({ JP: 'デートの前に', EN: 'Before a date' }),
      number: '02'
    },
    {
      text: t({ JP: '汗ばむ夏の日に', EN: 'On a hot summer day' }),
      number: '03'
    },
    {
      text: t({ JP: '家に帰ってからのリフレッシュに', EN: 'For refreshing after coming home' }),
      number: '04'
    },
    {
      text: t({ JP: 'アトピーやアレルギー肌にも', EN: 'Even for atopic or allergic skin' }),
      number: '05'
    }
  ]

  return (
    <section className="bg-black py-32 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-black md:text-3xl lg:text-4xl whitespace-pre-line text-white text-center mb-16" style={{ lineHeight: '1.8' }}>
            {t({
              JP: '商談でも プライベートでも\nモテる男に。',
              EN: 'Be the man who charms\nin business and in private.'
            })}
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
            {/* Left side - Image */}
            <div className="lg:w-2/5">
              <div className="sticky top-32">
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/confidence_date.png"
                    alt="Confidence lifestyle"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="lg:w-3/5 space-y-10">
              <div>
                <h3 className="text-amber-400 text-xs font-bold tracking-[0.2em] mb-6 uppercase">
                  {t({ JP: 'Scene', EN: 'Scene' })}
                </h3>

                <div className="space-y-4">
                  {scenes.map((scene, index) => (
                    <div key={index} className="group flex items-center gap-5 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                      <span className="text-2xl font-black text-white/10 group-hover:text-amber-400/30 transition-colors min-w-[3rem]">
                        {scene.number}
                      </span>
                      <p className="text-base md:text-lg text-gray-300 group-hover:text-gray-100 transition-colors">
                        {scene.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Center message */}
          <div className="text-center py-16 border-t border-white/10">
            <p className="text-2xl md:text-3xl text-white font-black leading-relaxed whitespace-pre-line mb-6">
              {t({
                JP: '第一印象が変われば、\n結果も変わる。',
                EN: 'When your first impression changes,\nthe results change too.'
              })}
            </p>
            <p className="text-lg md:text-xl text-amber-200/80 leading-relaxed whitespace-pre-line">
              {t({
                JP: '大切な時、大切な人の前で、\nConfidenceがあなたを輝かせます。',
                EN: 'In important moments, before important people,\nConfidence makes you shine.'
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
