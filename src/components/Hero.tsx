'use client'

import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-black text-white flex items-start justify-center pt-32">
      <div className="absolute inset-0">
        <Image
          src="/hero-earth-regeneration-Dnk2z_VF.png"
          alt="Mother Vegetable Confidence"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-amber-900/30" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-2">
        <Image
          src="/confidence_logo_touka.png"
          alt="Mother Vegetable Confidence Logo"
          width={350}
          height={140}
          priority
          className="w-auto h-auto max-w-[220px] lg:max-w-[350px]"
        />
        <div className="text-center space-y-5">
          <p className="text-lg md:text-xl font-light tracking-widest uppercase text-amber-200/80">
            {t({ JP: 'for Men', EN: 'for Men' })}
          </p>
          <p className="text-base md:text-lg font-light leading-relaxed text-gray-200 whitespace-pre-line">
            {t({
              JP: '地球が生み出した生命力が、\n24時間あなたに自信を与えます',
              EN: 'Earth\'s life force gives you\n24 hours of confidence'
            })}
          </p>
        </div>
      </div>
    </section>
  )
}