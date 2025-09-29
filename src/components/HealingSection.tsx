'use client'

import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

export default function HealingSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-black py-32 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12 gap-8 max-w-6xl mx-auto">
          <div className="md:w-1/2 order-2 md:order-1">
            <Image
              src="/earth.png"
              alt="Earth with plants"
              width={500}
              height={500}
              className="w-full h-auto max-w-[350px] md:max-w-[450px] rounded-2xl mx-auto md:mx-0"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2 space-y-8">
            <h2 className="text-2xl font-black md:text-3xl lg:text-4xl whitespace-pre-line text-white text-center md:text-left" style={{ lineHeight: '1.8' }}>
              {t({
                JP: 'その選択で、\nあなたも地球も癒される。',
                EN: 'With that choice,\nboth you and the Earth are healed.'
              })}
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-loose whitespace-pre-line text-center md:text-left">
              {t({
                JP: 'マザベジから生まれたConfidenceは\n完全無添加、無農薬の天然成分のため、\n川や海に流れれば、\n栄養となり、自然を満たします。\nまた、マザベジは育てる工程で\nCO2を天然芝の700倍吸収。\nConfidenceを選択するということ、\nそれはあなたと地球を癒すことの\n始まりです。',
                EN: 'Confidence, born from Mother Vegetable, is\n100% natural, additive-free, and pesticide-free.\nWhen it flows into rivers and oceans,\nit becomes nutrients, enriching nature.\nFurthermore, Mother Vegetable absorbs\n700 times more CO2 than natural grass during cultivation.\nChoosing Confidence\nis the beginning of healing both you and the Earth.'
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
