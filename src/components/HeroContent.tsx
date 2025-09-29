'use client'

import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

const secrets = [
  {
    title: {
      JP: '5秒で変化',
      EN: 'Shift in 5 Seconds'
    },
    description: {
      JP: 'パフでひと滑りするだけで、余分な皮脂とテカリを抑えて自然な清潔感をオン。',
      EN: 'One glide of the puff tamps down excess sebum and shine for instant cleanliness.'
    }
  },
  {
    title: {
      JP: '24時間続く',
      EN: 'Lasts 24 Hours'
    },
    description: {
      JP: '朝の商談から夜のデートまで、トーンアップした肌印象が続きます。',
      EN: 'From morning meetings to late-night plans, the brighter impression stays with you.'
    }
  },
  {
    title: {
      JP: '35億年の力',
      EN: '3.5 Billion Years of Strength'
    },
    description: {
      JP: '地球最初の生命体「マザーベジタブル」がもつ生命力をそのまま閉じ込めた100%天然成分。',
      EN: 'Mother Vegetable, Earth\'s earliest life form, concentrated into a 100% natural powder.'
    }
  }
]

export default function HeroContent() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">
      <div className="relative z-10 flex h-full flex-col">
        <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col gap-12 px-6 py-16 md:px-12 items-center justify-center text-center">
          <div className="max-w-4xl space-y-12">
            <div className="space-y-6 text-center">
              <h1 className="text-2xl font-black leading-loose md:text-3xl lg:text-4xl whitespace-pre-line" style={{ lineHeight: '1.8' }}>
                {t({ JP: '清潔感。\nそれだけで全てが変わる。', EN: 'Cleanliness alone changes everything.' })}
              </h1>
              <p className="mx-auto max-w-xl text-sm text-gray-300 leading-loose md:text-base whitespace-pre-line">
                {t({
                  JP: '「なぜうまくいかないのか？」\n「自分に何が足りないのか？」\n\n答えはただ一つ。\nそれは、清潔感。\n\nマザベジを肌に塗るだけで、\n自然な清潔感が手に入ります。\n\nその清潔感が、あなたに\n自信（＝ confidence）をみなぎらせます。',
                  EN: '"Why isn\'t it working out?"\n"What am I missing?"\n\nThe answer is one thing:\nCleanliness.\n\nJust apply Mother Vege to your skin,\nand natural cleanliness is yours.\n\nThat cleanliness fills you\nwith confidence.'
                })}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="relative aspect-square">
                <Image
                  src="/men_before.png"
                  alt="Before"
                  fill
                  sizes="(max-width: 768px) 50vw, 400px"
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/men_after.png"
                  alt="After"
                  fill
                  sizes="(max-width: 768px) 50vw, 400px"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <p className="text-base md:text-lg font-semibold text-center mt-6 text-white">
              {t({
                JP: '同じ人でも清潔感だけで第一印象は違う',
                EN: 'The same person, different first impression with just cleanliness'
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
