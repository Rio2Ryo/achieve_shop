'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function GuaranteeCTA() {
  const { t } = useLanguage()

  const benefits = [
    { number: '01', title: t({ JP: '送料無料', EN: 'Free Shipping' }) },
    { number: '02', title: t({ JP: '安心の医薬部外品', EN: 'Quasi-Drug Assurance' }) },
    { number: '03', title: t({ JP: '専門スタッフサポート', EN: 'Expert Support' }) }
  ]

  const handleClick = () => {
    window.location.href = 'mailto:info@dotpb.jp?subject=Mother%20Vegetables%20Confidence%20購入相談'
  }

  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4 text-center space-y-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-300">GUARANTEE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t({ JP: '30日間返金保証付き', EN: '30-Day Money-Back Guarantee' })}
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-300">
            {t({
              JP: '万が一お肌に合わない場合は、商品到着後30日以内であれば全額返金いたします。安心してMother Vegetables Confidenceをお試しください。',
              EN: 'If it does not suit your skin, we will refund you in full within 30 days of delivery. Try Mother Vegetables Confidence with total peace of mind.'
            })}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="w-full sm:w-64 px-6 py-6 rounded-2xl border border-white/10 bg-white/[0.06] text-white"
            >
              <span className="block text-emerald-200 text-sm tracking-[0.3em] mb-2">{benefit.number}</span>
              <p className="text-base font-semibold">{benefit.title}</p>
            </div>
          ))}
        </div>

        <div>
          <button
            onClick={handleClick}
            className="px-10 py-3 rounded-full bg-emerald-400 text-black font-semibold shadow-lg shadow-emerald-500/25 hover:bg-emerald-300 transition-colors"
          >
            {t({ JP: '安心して今すぐ試してみる', EN: 'Try It Today with Confidence' })}
          </button>
        </div>
      </div>
    </section>
  )
}
