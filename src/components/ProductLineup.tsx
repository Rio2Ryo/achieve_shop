'use client'

import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

interface CatalogItem {
  slug: string
  image: string
  tag: { JP: string; EN: string }
  name: { JP: string; EN: string }
  subtitle: { JP: string; EN: string }
  bullets: { JP: string; EN: string }[]
  price: { JP: string; EN: string }
  note: { JP: string; EN: string }
  url: string
  highlight?: boolean
}

const catalog: CatalogItem[] = [
  {
    slug: 'confidence-30days',
    image: '/item_pic2.jpg',
    tag: { JP: 'STANDARD', EN: 'STANDARD' },
    name: { JP: 'Mother Vegetable Confidence 30days', EN: 'Mother Vegetable Confidence 30days' },
    subtitle: { JP: '毎日の携帯に', EN: 'Carry it daily' },
    bullets: [
      { JP: 'パフとパウダーが一体の30日セット', EN: 'Integrated puff and powder for 30 days' },
      { JP: '商談前やオンライン会議の5秒リセットに', EN: 'Five-second reset before meetings or calls' },
      { JP: '耳の後ろや首筋にも使いやすいコンパクト設計', EN: 'Compact design reaches behind ears and along the neck' }
    ],
    price: { JP: '¥4,125', EN: '$27.50' },
    note: { JP: '税込・送料無料', EN: 'Tax included · Free shipping' },
    url: 'https://mv-si002.dotpb.jp/item/mvsi/standard-mvsi',
    highlight: true
  },
  {
    slug: 'confidence-large',
    image: '/item_pic3.jpg',
    tag: { JP: 'LARGE', EN: 'LARGE' },
    name: { JP: 'Mother Vegetable Confidence Large', EN: 'Mother Vegetable Confidence Large' },
    subtitle: { JP: 'たっぷり使える大容量', EN: 'Large capacity for daily use' },
    bullets: [
      { JP: '約150日分のロングリフィルセット', EN: 'Refill set for around 150 days' },
      { JP: 'ギフトにも選べる上質パッケージ', EN: 'Premium packaging ready for gifting' },
      { JP: '毎日使ってもCO₂削減に貢献', EN: 'Daily use contributes to CO₂ reduction' }
    ],
    price: { JP: '¥8,250', EN: '$55.00' },
    note: { JP: '税込・送料無料', EN: 'Tax included · Free shipping' },
    url: 'https://mv-si002.dotpb.jp/item/mvsi/large-mvsi'
  }
]

export default function ProductLineup() {
  const { t, language } = useLanguage()

  return (
    <section id="lineup" className="bg-black border-t border-white/10 py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-amber-300">
              {t({ JP: 'PRODUCTS', EN: 'PRODUCTS' })}
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
              {t({
                JP: 'あなたのライフスタイルに合わせてセレクト。\n携帯に便利な30daysと、家やオフィスでじっくり使えるLargeをご用意。',
                EN: 'Choose what fits your lifestyle:\nThe portable 30-day set for on-the-go, or the Large set for home and office use.'
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {catalog.map((product) => (
              <article
                key={product.slug}
                className={`flex h-full flex-col gap-5 rounded-[28px] border ${
                  product.highlight ? 'border-amber-300/40' : 'border-white/10'
                } bg-white/[0.05] p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-amber-200">
                  <span>{t(product.tag)}</span>
                  <span>{product.subtitle[language]}</span>
                </div>

                <div className="relative h-52 overflow-hidden rounded-2xl border border-white/15 bg-black/30">
                  <Image
                    src={product.image}
                    alt={product.name.JP}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white leading-tight">{t(product.name)}</h3>
                  <ul className="space-y-1 text-sm text-gray-300 leading-relaxed">
                    {product.bullets.map((bullet) => (
                      <li key={bullet.JP} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-amber-300" />
                        <span>{t(bullet)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1">
                  <p className={`text-2xl font-semibold ${product.highlight ? 'text-amber-200' : 'text-white'}`}>
                    {t(product.price)}
                  </p>
                  <p className="text-xs text-gray-400">{t(product.note)}</p>
                </div>

                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    product.highlight
                      ? 'bg-amber-400 text-black hover:bg-amber-300'
                      : 'border border-amber-300 text-amber-100 hover:bg-amber-300/15'
                  }`}
                >
                  {t({ JP: 'オンラインストアで見る', EN: 'View in Store' })}
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
