'use client'

import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

export default function GiftSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-black py-32 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12 gap-8 max-w-6xl mx-auto">
          <div className="md:w-1/2 order-1 md:order-2">
            <Image
              src="/gift_confidence.png"
              alt="Gift of Confidence"
              width={500}
              height={500}
              className="w-full h-auto max-w-[350px] md:max-w-[450px] rounded-2xl mx-auto md:mx-0"
            />
          </div>
          <div className="md:w-1/2 order-2 md:order-1 space-y-8">
            <h2 className="text-2xl font-black md:text-3xl lg:text-4xl whitespace-pre-line text-white text-center md:text-left" style={{ lineHeight: '1.8' }}>
              {t({
                JP: '大切な人へ、\n自信をプレゼント。',
                EN: 'To your loved ones,\na gift of confidence.'
              })}
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-loose whitespace-pre-line text-center md:text-left">
              {t({
                JP: 'Confidenceなら、\nパートナーや家族、友人へ、\n「自信」をプレゼントできます。\nConfidenceを贈ったその日から、\n毎日の自信を育てていきます。',
                EN: 'With Confidence,\nyou can give the gift of "confidence"\nto your partner, family, or friends.\nFrom the day you give Confidence,\nit will cultivate daily confidence.'
              })}
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="#lineup" className="inline-block bg-amber-400 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-500 transition duration-300">
            {t({ JP: 'プレゼントする', EN: 'Gift Now' })}
          </a>
        </div>
      </div>
    </section>
  )
}
