'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/hero-earth-regeneration-Dnk2z_VF.png"
          alt="Mother Vegetables Confidence"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-amber-900/30" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-8">
        <Image
          src="/confidence_logo_touka.png"
          alt="Mother Vegetables Confidence Logo"
          width={350}
          height={140}
          priority
          className="w-auto h-auto max-w-[350px]"
        />
        <div className="text-center space-y-4">
          <p className="text-lg md:text-xl font-light tracking-wider">For Skin</p>
          <p className="text-lg md:text-xl font-light leading-relaxed whitespace-pre-line">
            {t({
              JP: '地球が生み出した生命力が、\n24時間あなたに自信を与えます',
              EN: 'The life force created by Earth\ngives you confidence for 24 hours'
            })}
          </p>
        </div>
      </div>
    </section>
  )
}