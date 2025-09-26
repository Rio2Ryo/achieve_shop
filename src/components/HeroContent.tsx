'use client'

import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

export default function HeroContent() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">
      <div className="relative z-10 flex h-full flex-col">
        <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col gap-12 px-6 py-16 md:px-12 items-center justify-center text-center">
          <div className="max-w-4xl space-y-10">
            <div className="space-y-5 text-center">
              <h1 className="text-2xl font-black leading-tight md:text-3xl lg:text-4xl">
                {t({ JP: 'たった5秒で、24時間清潔感のある肌へ', EN: 'Five Seconds for 24-Hour Fresh Skin' })}
              </h1>
              <p className="mx-auto max-w-xl text-sm text-gray-300 leading-relaxed md:text-base">
                {t({
                  JP: '素肌への自信が、あなたの美しさを解放する。35億年の生命力から誕生したマザーベジタブルが、清潔感のある美しい肌を一日中キープします。',
                  EN: 'Confidence in bare skin unlocks your beauty. Mother Vegetable, born from 3.5 billion years of life force, keep a porcelain finish all day long.'
                })}
              </p>
            </div>

            <div className="relative w-full">
              <Image
                src="/ms-banner.webp"
                alt="Mother Vegetable"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}