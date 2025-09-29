'use client'

import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

export default function IndustryApproach() {
  const { t, language } = useLanguage()

  return (
    <section id="features" className="bg-black border-t border-white/10 py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-2xl font-black leading-loose md:text-3xl lg:text-4xl whitespace-pre-line text-white text-center mb-8" style={{ lineHeight: '1.8' }}>
              {t({ JP: '男がパフを使うこと、\nそれは清潔感の証。', EN: 'A man with a puff signals real cleanliness.' })}
            </h2>
            <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-6">
              <div className="md:w-1/2 flex flex-col justify-center md:items-end">
                <p className="text-base md:text-lg text-gray-300 leading-loose whitespace-pre-line text-center md:text-left">
                  {t({
                    JP: 'パフは女性だけのものではありません。\n\nConfidenceを肌に塗るだけで、\n余分な皮脂やテカリを抑え、\n顔のギトギトとさようなら。\n\nお肌に栄養を与えながら\n男性特有のニオイが気になる\n鼻の付け根や耳の後ろにも\nご使用ください。',
                    EN: 'Puffs are not just for women.\n\nJust by applying Confidence to your skin,\nit suppresses excess sebum and shine,\nsaying goodbye to a greasy face.\n\nWhile nourishing your skin,\nplease also use it on the base of the nose\nand behind the ears,\nwhere men\'s specific odors are a concern.'
                  })}
                </p>

              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/men_paff.png"
                  alt="Man holding puff"
                  width={800}
                  height={800}
                  className="w-full h-auto max-w-[400px] md:max-w-[500px] rounded-2xl"
                />
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mt-8 text-center">
              {t({
                JP: '※\nConfidenceの原料は医薬部外品原料規格を満たしており、その抗菌効果によって、パフ自体も清潔さを保ちます。',
                EN: '*\nConfidence\'s ingredients meet quasi-drug raw material standards, and their antibacterial effects keep the puff itself clean.'
              })}
            </p>

          </div>

          <div className="mx-auto max-w-5xl">
            <article className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-12 text-white">
              <h2 className="text-2xl font-black md:text-3xl lg:text-4xl whitespace-pre-line text-white text-center mb-8" style={{ lineHeight: '1.8' }}>
                {t({ JP: '５秒で自信がみなぎる。\n３つの秘訣', EN: 'Confidence in 5 seconds.\nThe 3 secrets' })}
              </h2>

              <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-16">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2 text-center md:text-left">
                    {t({ JP: '5秒で変化', EN: 'Change in 5 seconds' })}
                  </h4>
                  <p className="text-sm text-gray-300 text-center md:text-left">
                    {t({ JP: 'パフでひと滑りするだけで、余分な皮脂とテカリを抑えて自然な清潔感をオン。', EN: 'Just one slide with the puff controls excess sebum and shine, turning on a natural clean look.' })}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2 text-center md:text-left">
                    {t({ JP: '24時間続く', EN: 'Lasts 24 hours' })}
                  </h4>
                  <p className="text-sm text-gray-300 text-center md:text-left">
                    {t({ JP: '朝の商談から夜のデートまで、トーンアップした肌印象が続きます。', EN: 'From morning business meetings to evening dates, your toned-up skin impression will last.' })}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2 text-center md:text-left">
                    {t({ JP: '35億年の力', EN: 'The power of 3.5 billion years' })}
                  </h4>
                  <p className="text-sm text-gray-300 text-center md:text-left">
                    {t({ JP: '地球最初の生命体「マザーベジタブル」がもつ生命力をそのまま閉じ込めた100%天然成分。', EN: '100% natural ingredients that encapsulate the life force of "Mother Vegetable," the first life form on Earth.' })}
                  </p>
                </div>
              </div>
              <p className="mx-auto max-w-3xl text-xs md:text-sm text-gray-400 leading-relaxed mt-12 text-center whitespace-pre-line">
                {t({
                  JP: 'アトピーやアレルギー、ビーガンの方にも使える\nマザーベジタブル100%処方。\n医薬部外品原料規格を満たし、炎症中の肌にも寄り添います。',
                  EN: 'A 100% Mother Vegetable formula suitable for\nthose with atopic dermatitis, allergies, or vegan lifestyles.\nIt meets quasi-drug raw material standards and is gentle on inflamed skin.'
                })}
              </p>
            </article>
          </div>

          <div className="mx-auto max-w-5xl mt-8">
            <article className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-12 text-white">
              <h2 className="text-2xl font-black md:text-3xl lg:text-4xl whitespace-pre-line text-white text-center mb-8" style={{ lineHeight: '1.8' }}>
                {t({ JP: 'もう、テカらない。\nテカらせない。', EN: 'No more shine.\nWon\'t let it shine.' })}
              </h2>

              <p className="mx-auto max-w-3xl text-sm md:text-base text-gray-300 leading-loose text-center whitespace-pre-line mb-12">
                {t({
                  JP: 'マザーベジタブルはひとつひとつが\n個性ある大きさのパウダーのため、\n\n形状が揃ってしまっている\nケミカル化粧品などと比べて、\n\n光が乱反射し、テカリを防止します。',
                  EN: 'Each Mother Vegetable powder particle\nhas a unique size and shape,\n\nunlike chemical cosmetics\nwith uniform particles,\n\ncausing light to scatter diffusely\nand preventing shine.'
                })}
              </p>

              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-white text-center md:text-left">
                    {t({ JP: '塗布前の肌', EN: 'Skin before application' })}
                  </h4>
                  <div className="space-y-4">
                    <Image src={language === 'EN' ? "/doc1en.jpg" : "/doc1.jpg"} alt="皮脂の油分がある状態" width={300} height={200} className="w-full rounded-2xl" />
                  </div>
                  <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
                    <p className="whitespace-pre-line">{t({
                      JP: '肌表面の油分が同じ方向に光を跳ね返し、\nギラつきが第一印象を下げます。',
                      EN: 'Oil on the surface reflects light in one direction,\ncreating glare that drags the first impression down.'
                    })}</p>
                    <p className="font-semibold whitespace-pre-line">{t({
                      JP: '均一形状のケミカルパウダーは\n光がまとまり、\nかえってテカリが強調されることも。',
                      EN: 'Conventional uniform powders\nbundle reflected light\nand can even make the shine worse.'
                    })}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-white text-center md:text-left">
                    {t({ JP: 'Confidence塗布後', EN: 'After applying Confidence' })}
                  </h4>
                  <div className="space-y-4">
                    <Image src={language === 'EN' ? "/doc2en.jpg" : "/doc2.jpg"} alt="Confidence塗布後" width={300} height={200} className="w-full rounded-2xl" />
                  </div>
                  <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
                    <p className="whitespace-pre-line">{t({
                      JP: 'Mother Vegetableのパーティクルは\n粒ごとに個性があり、光を細かく乱反射。\nギトギトはツヤのある清潔感に変わります。',
                      EN: 'Each Mother Vegetable particle is distinct,\nscattering light finely so greasy glare\nturns into a refined sheen.'
                    })}</p>
                    <p className="font-semibold whitespace-pre-line">{t({
                      JP: '皮脂を吸着しつつ潤いはキープ。\n耳の後ろや首筋まで滑らせれば、\nニオイケアも同時に完了します。',
                      EN: 'It absorbs oil while holding moisture;\nsweep it behind the ears and along the neck\nto finish odor care too.'
                    })}</p>
                  </div>
                </div>
              </div>
            </article>
          </div>


        </div>
      </div>
    </section>
  )
}
