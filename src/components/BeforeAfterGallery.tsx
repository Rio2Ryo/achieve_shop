'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { testimonialCases } from '@/data/testimonials'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

export default function BeforeAfterGallery() {
  const { t } = useLanguage()

  return (
    <section id="gallery" className="bg-black/95 border-t border-white/10 py-32">
      <div className="container mx-auto px-4 max-w-5xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-amber-300">
            {t({ JP: 'BEFORE & AFTER', EN: 'BEFORE & AFTER' })}
          </h2>
          <p className="mx-auto max-w-3xl text-sm md:text-base text-gray-300 leading-relaxed">
            {t({
              JP: '1ヶ月足らずで驚くべき効果を実感。',
              EN: 'Experience amazing results in less than a month.'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonialCases.map((item) => {
            const quote = t(item.quote)
            const shortQuote = quote.length > 60 ? `${quote.slice(0, 60)}…` : quote

            return (
              <article
                key={item.id}
                className="flex flex-col gap-5 rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur"
              >
                <div className="space-y-1 text-left">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
                    {t(item.ageLabel)} · {t(item.durationLabel)}
                  </p>
                  <p className="text-sm text-white leading-snug">{shortQuote}</p>
                </div>

                <BeforeAfterSlider
                  before={item.before}
                  after={item.after}
                  beforeAlt={t({ JP: 'Before', EN: 'Before' })}
                  afterAlt={t({ JP: 'After', EN: 'After' })}
                />

                <div className="grid gap-2 text-xs text-gray-300 leading-relaxed">
                  <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-amber-200">{t({ JP: 'Before', EN: 'Before' })}</p>
                    <p>{t(item.beforeNote)}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-emerald-400/10 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-amber-200">{t({ JP: 'After', EN: 'After' })}</p>
                    <p>{t(item.afterNote)}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonialCases.map((item) => {
            const quote = t(item.quote)
            const shortQuote = quote.length > 60 ? `${quote.slice(0, 60)}…` : quote

            return (
              <article
                key={item.id}
                className="flex flex-col gap-5 rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur"
              >
                <div className="space-y-1 text-left">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
                    {t(item.ageLabel)} · {t(item.durationLabel)}
                  </p>
                  <p className="text-sm text-white leading-snug">{shortQuote}</p>
                </div>

                <BeforeAfterSlider
                  before={item.before}
                  after={item.after}
                  beforeAlt={t({ JP: 'Before', EN: 'Before' })}
                  afterAlt={t({ JP: 'After', EN: 'After' })}
                />

                <div className="grid gap-2 text-xs text-gray-300 leading-relaxed">
                  <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-amber-200">{t({ JP: 'Before', EN: 'Before' })}</p>
                    <p>{t(item.beforeNote)}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-emerald-400/10 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-amber-200">{t({ JP: 'After', EN: 'After' })}</p>
                    <p>{t(item.afterNote)}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
