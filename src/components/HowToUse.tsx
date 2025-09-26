'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function HowToUse() {
  const { t } = useLanguage()

  const steps = [
    {
      time: t({ JP: '朝', EN: 'Morning' }),
      icon: '🌅',
      title: t({ JP: 'メイク前の準備', EN: 'Before Makeup' }),
      description: t({
        JP: 'スキンケア後、パール粒大を顔全体に薄く伸ばします。テカリやすい部分には重ね付けを。',
        EN: 'After skincare, apply a pearl-sized amount evenly. Add extra to oily areas.'
      }),
      tip: t({ JP: 'ファンデーションの上からも使用可能', EN: 'Can be used over foundation' })
    },
    {
      time: t({ JP: '日中', EN: 'Daytime' }),
      icon: '☀️',
      title: t({ JP: 'メイク直し', EN: 'Touch-ups' }),
      description: t({
        JP: 'ティッシュで余分な皮脂を軽く押さえた後、少量を気になる部分にポンポンと優しく重ねます。',
        EN: 'After blotting excess oil, gently pat a small amount on areas that need touch-ups.'
      }),
      tip: t({ JP: 'スライドケースなら持ち運びも便利', EN: 'Slide case is perfect for on-the-go' })
    },
    {
      time: t({ JP: '夜', EN: 'Night' }),
      icon: '🌙',
      title: t({ JP: 'ナイトケア', EN: 'Night Care' }),
      description: t({
        JP: '洗顔後のスキンケアの最後に薄く塗布。寝ている間も肌を守り、朝の肌質を整えます。',
        EN: 'Apply a thin layer after your nighttime skincare routine to protect skin overnight.'
      }),
      tip: t({ JP: 'エクトイン配合タイプがおすすめ', EN: 'Ectoine formula recommended for night' })
    }
  ]

  const usageScenes = [
    { scene: t({ JP: 'オフィス', EN: 'Office' }), benefit: t({ JP: 'エアコンの乾燥対策', EN: 'Combat AC dryness' }) },
    { scene: t({ JP: 'デート', EN: 'Date' }), benefit: t({ JP: '近距離でも自信の肌', EN: 'Confident up close' }) },
    { scene: t({ JP: 'スポーツ', EN: 'Sports' }), benefit: t({ JP: '汗をかいても崩れない', EN: 'Sweat-proof finish' }) },
    { scene: t({ JP: 'マスク生活', EN: 'With Mask' }), benefit: t({ JP: 'マスク摩擦から保護', EN: 'Protect from friction' }) }
  ]

  return (
    <section id="how-to-use" className="py-24 md:py-32 bg-gradient-to-b from-black/95 to-amber-900/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] text-amber-300 mb-4">HOW TO USE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t({ JP: '簡単3ステップの使い方', EN: 'Simple 3-Step Guide' })}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t({
              JP: 'たった5秒で完了。一日中崩れない陶器肌を実現する使い方をマスターしましょう。',
              EN: 'Master the 5-second morning routine for all-day porcelain skin perfection.'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{step.icon}</span>
                <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider">{step.time}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{step.description}</p>
              <div className="bg-amber-400/10 border border-amber-400/30 rounded-lg px-3 py-2">
                <p className="text-xs text-amber-200">💡 {step.tip}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            {t({ JP: 'こんなシーンで大活躍', EN: 'Perfect for These Occasions' })}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {usageScenes.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-white font-medium mb-1">{item.scene}</p>
                <p className="text-gray-400 text-xs">{item.benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => document.getElementById('lineup')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/30"
          >
            {t({ JP: '商品を見る', EN: 'View Products' })}
          </button>
        </div>
      </div>
    </section>
  )
}