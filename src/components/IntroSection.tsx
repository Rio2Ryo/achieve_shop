'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function IntroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex items-start justify-center pt-24 md:pt-32 pb-32 md:pb-40">
      <div className="relative z-10 flex h-full flex-col">
        <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col gap-8 px-6 md:px-12 items-center justify-center text-center">
          <div className="max-w-4xl space-y-8 md:space-y-12">
            <h2 className="text-2xl font-black leading-loose md:text-3xl lg:text-4xl whitespace-pre-line" style={{ lineHeight: '1.8' }}>
              {t({
                JP: '化粧じゃない。\n「男」をつくるマザーベジタブル。',
                EN: 'Not makeup.\nThe Mother Vegetable powder that shapes the man.'
              })}
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed text-gray-200 whitespace-pre-line">
              {t({
                JP: 'これはメイクではなく、清潔感を整える、\n男性のためのマザーベジタブルパウダー。\n\n35億年前に地球が生み出した最初の生命力、\n「マザーベジタブル」（通称：マザベジ）が、\n24時間あなたに自信を与えます。',
                EN: 'This is not makeup—it\'s Mother Vegetable Powder,\nmade for men to perfect their cleanliness.\n\nEarth\'s first life force from 3.5 billion years ago,\n"Mother Vegetable" (known as Mother Vege),\ngives you confidence for 24 hours.'
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}