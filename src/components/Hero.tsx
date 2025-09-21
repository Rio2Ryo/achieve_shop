'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const featureBadges = [
    t({ JP: '朝5秒で完成', EN: 'Ready in 5 Seconds' }),
    t({ JP: '24時間キープ', EN: 'Stays Beautiful 24h' }),
    t({ JP: '医薬部外品', EN: 'Quasi-Drug Formula' })
  ]

  const certifications = [
    { name: 'ORGANIC', icon: '🌿' },
    { name: 'HALAL', icon: '☪️' },
    { name: 'VEGAN', icon: '🌱' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Image
          src="/hero-earth-regeneration-Dnk2z_VF.png"
          alt="Mother Vegetables Confidence"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 md:pt-24 lg:pt-28 pb-24">
        <div className="mb-8 flex flex-col items-center space-y-4">
          <div className="relative w-full max-w-[200px]">
            <Image
              src="/confidence_logo_touka.png"
              alt="Mother Vegetables Confidence Logo"
              width={200}
              height={80}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="text-center space-y-2">
            <p className="text-white text-lg md:text-xl font-semibold tracking-wider">For Skin</p>
            <p className="text-white text-sm md:text-base leading-relaxed max-w-md">
              {t({ JP: '地球が生み出した生命力が、', EN: 'The life force born from Earth' })}<br />
              {t({ JP: '24時間あなたに自信を与えます', EN: 'gives you 24-hour confidence' })}
            </p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => scrollTo('lineup')}
                className="px-6 md:px-8 py-3 rounded-full bg-emerald-400 text-black font-semibold text-base shadow-lg shadow-emerald-500/30 hover:bg-emerald-300 transition-colors"
              >
                {t({ JP: '購入する', EN: 'Purchase' })}
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 px-4 py-1.5 rounded-full text-xs sm:text-sm">
                <span>{t({ JP: '限定販売中', EN: 'Limited Release' })}</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-200 px-4 py-1.5 rounded-full text-xs sm:text-sm">
                <span>{t({ JP: '30日返金保証', EN: '30-Day Money Back' })}</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm">
                <span>{t({ JP: '送料無料', EN: 'Free Shipping' })}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              <span className="block text-emerald-200 text-sm sm:text-base mb-2">MOTHER VEGETABLES CONFIDENCE MV-Si002</span>
              <span className="block">
                {t({ JP: '朝の5秒で、24時間崩れない陶器肌へ。', EN: 'Five Seconds Each Morning for 24-Hour Porcelain Skin.' })}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t({
                JP: '素肌への自信が、あなたの美しさを解放する。35億年の生命力から誕生したマザーベジタブルが、陶器のような美しい肌を一日中キープします。',
                EN: 'Confidence in bare skin unlocks your beauty. Mother Vegetables, born from 3.5 billion years of life force, keep a porcelain finish all day long.'
              })}
            </p>

            <div className="flex flex-col sm:flex-row lg:justify-start items-center justify-center gap-4">
              <button
                onClick={() => scrollTo('lineup')}
                className="px-8 py-3 rounded-full bg-emerald-400 text-black font-semibold text-sm sm:text-base shadow-lg shadow-emerald-500/30 hover:bg-emerald-300 transition-colors"
              >
                {t({ JP: '購入する', EN: 'Purchase' })}
              </button>
              <button
                onClick={() => scrollTo('concept')}
                className="px-8 py-3 rounded-full border border-emerald-300 text-emerald-100 text-sm sm:text-base hover:bg-emerald-300/10 transition-colors"
              >
                {t({ JP: '詳細を見る', EN: 'See Details' })}
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                {featureBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm text-white"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex flex-col items-center gap-1"
                  >
                    <span className="text-2xl">{cert.icon}</span>
                    <span className="text-[10px] text-gray-400 font-semibold tracking-wider">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative w-[320px] h-[420px]">
              <div className="absolute inset-0 rounded-[2.5rem] bg-white/10 blur-2xl" />
              <Image
                src="/fv-powder.png"
                alt="Mother Vegetables Confidence powder"
                fill
                className="object-contain drop-shadow-[0_25px_60px_rgba(16,185,129,0.35)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
