'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { testimonialCases } from '@/data/testimonials'

export default function BeforeAfterGallery() {
  const { t } = useLanguage()
  const [activeId, setActiveId] = useState<number | null>(null)

  const toggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="gallery" className="py-24 md:py-32 bg-black/90">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] text-emerald-300 mb-4">BEFORE & AFTER</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t({ JP: 'タップで変化をチェック', EN: 'Tap to Explore the Difference' })}
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
            {t({
              JP: 'MV-Si001で好評だった「Before After」ギャラリーを参考に、ビフォーアフターの変化をカード形式でまとめました。気になるカードをタップして画像を表示できます。',
              EN: 'Inspired by the MV-Si001 gallery, these cards let you tap to reveal the before-and-after story behind each testimonial.'
            })}
          </p>
        </div>

        <div className="space-y-4">
          {testimonialCases.map((item) => {
            const quote = t(item.quote)
            return (
              <div
                key={item.id}
                className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-sm"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => toggle(item.id)}
                  aria-expanded={activeId === item.id}
                >
                  <div>
                    <p className="text-sm text-emerald-200 uppercase tracking-[0.3em]">
                      {t(item.ageLabel)} · {t(item.durationLabel)}
                    </p>
                    <p className="text-base md:text-lg text-white font-semibold">
                      {quote.slice(0, 36)}{quote.length > 36 ? '…' : ''}
                    </p>
                  </div>
                  <span className={`text-emerald-300 text-2xl transition-transform ${activeId === item.id ? 'rotate-90' : ''}`}>
                    ▾
                  </span>
                </button>

                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 pb-6 transition-[max-height,opacity] duration-300 ease-in-out ${
                    activeId === item.id ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-white/15 bg-black/40">
                    <Image src={item.before} alt="Before" fill className="object-contain" />
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/70 text-xs text-white">
                      {t({ JP: 'Before', EN: 'Before' })}
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-200 leading-relaxed">{t(item.beforeNote)}</p>
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-white/15 bg-black/40">
                    <Image src={item.after} alt="After" fill className="object-contain" />
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-emerald-400/80 text-xs text-black font-semibold">
                      {t({ JP: 'After', EN: 'After' })}
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-200 leading-relaxed">{t(item.afterNote)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
