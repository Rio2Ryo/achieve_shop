'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function GuaranteeCTA() {
  const { t } = useLanguage()


  const handleClick = () => {
    window.location.href = 'mailto:info@dotpb.jp?subject=Mother%20Vegetables%20Confidence%20購入相談'
  }

  return (
    <section className="py-28 md:py-36 bg-black">
      <div className="container mx-auto px-4 text-center space-y-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300">GUARANTEE</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            {t({ JP: '30日間試してハマらなければ全額返金', EN: 'Try It for 30 Days—Love It or It’s On Us' })}
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed">
            {t({
              JP: '肌に合わなかったら30日以内に全額返金。まずは体験というワクワクを優先してください。気に入ったら、そのまま日常の相棒に。',
              EN: 'If it is not a match, return it within 30 days for a full refund. Start with the excitement of trying—keep it only if it becomes your daily sidekick.'
            })}
          </p>
        </div>


        <div>
          <button
            onClick={handleClick}
            className="px-10 py-3 rounded-full bg-amber-400 text-black font-semibold shadow-lg shadow-amber-500/25 hover:bg-amber-300 transition-colors"
          >
            {t({ JP: '相談してみる', EN: 'Talk to Us' })}
          </button>
        </div>
      </div>
    </section>
  )
}
