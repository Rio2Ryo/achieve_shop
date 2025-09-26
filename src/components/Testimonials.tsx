'use client'

import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'
import { testimonialCases } from '../data/testimonials'

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-amber-300 mb-4">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t({ JP: 'お客様の喜びの声', EN: 'Voices from Our Customers' })}
          </h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-300">
            {t({
              JP: '実際にMother Vegetables Confidenceをご使用いただいたお客様から届いた、ビフォーアフターと体験談をご紹介します。',
              EN: 'Discover before-and-after results and stories from people using Mother Vegetables Confidence every day.'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialCases.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-white/[0.06] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm flex flex-col h-full"
            >
              <div className="relative grid grid-cols-2">
                <div className="relative h-40 sm:h-48 border-r border-white/10">
                  <Image src={testimonial.before} alt="Before" fill className="object-cover" />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/70 text-xs text-white">
                    {t({ JP: 'Before', EN: 'Before' })}
                  </div>
                </div>
                <div className="relative h-40 sm:h-48">
                  <Image src={testimonial.after} alt="After" fill className="object-cover" />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-amber-400/80 text-xs text-black font-semibold">
                    {t({ JP: 'After', EN: 'After' })}
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-center justify-between text-xs text-amber-200 uppercase tracking-[0.25em]">
                  <span>{t(testimonial.ageLabel)}</span>
                  <span>{t(testimonial.durationLabel)}</span>
                </div>
                <p className="text-sm text-gray-100 leading-relaxed flex-1">{t(testimonial.quote)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
