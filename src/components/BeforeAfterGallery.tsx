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
          <p className="text-xs tracking-[0.35em] text-amber-300">BEFORE & AFTER</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            {t({ JP: '圧倒的な変化体験', EN: 'See the Change at a Glance' })}
          </h2>
          <p className="mx-auto max-w-3xl text-sm md:text-base text-gray-300 leading-relaxed">
            {t({
              JP: 'たった１ヶ月足らずで多くの方に変化を感じてもらっています。',
              EN: 'Slide to reveal the journey from before to after. Notes below each card keep the story clear and fun.'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonialCases.map((item) => (
            <article
              key={item.id}
              className="flex flex-col gap-5 rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur"
            >
              <div className="space-y-1 text-left">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
                  {t(item.ageLabel)} · {t(item.durationLabel)}
                </p>
                <p className="text-sm text-white leading-snug line-clamp-3">
                  {t(item.quote)}
                </p>
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
                <div className="rounded-2xl border border-white/10 bg-amber-400/10 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-amber-200">{t({ JP: 'After', EN: 'After' })}</p>
                  <p>{t(item.afterNote)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
