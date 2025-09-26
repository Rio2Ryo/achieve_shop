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
  price: string
  note: { JP: string; EN: string }
  url: string
  highlight?: boolean
}

const catalog: CatalogItem[] = [
  {
    slug: 'standard-2000',
    image: '/item_pic2.jpg',
    tag: { JP: '', EN: '' },
    name: { JP: 'パフケース スタンダードタイプ', EN: 'Standard Size' },
    subtitle: { JP: '', EN: '' },
    bullets: [
      { JP: 'Mother Vegetable 2,000mg配合', EN: 'Mother Vegetable 2,000 mg blend' },
      { JP: '約60日分のデイリーケア', EN: '~60 days of daily care' }
    ],
    price: '¥3,600',
    note: { JP: '税込', EN: 'Tax included' },
    url: 'https://mv-si002.dotpb.jp/item/mvsi/standard-mvsi',
    highlight: true
  },
  {
    slug: 'large-5000',
    image: '/item_pic3.jpg',
    tag: { JP: '', EN: '' },
    name: { JP: 'パフケース ラージタイプ', EN: 'Value Large Pack' },
    subtitle: { JP: '', EN: '' },
    bullets: [
      { JP: 'Mother Vegetable 5,000mg配合', EN: 'Mother Vegetable 5,000 mg blend' },
      { JP: '約150日分のロングリミット', EN: '~150 days of long use' }
    ],
    price: '¥7,400',
    note: { JP: '税込', EN: 'Tax included' },
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
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t({
                JP: '使いやすいパフケースタイプと1回分の使用量がわかるバレットタイプをお選びください。',
                EN: 'Choose between the daily-friendly standard set and the generous large pack—both available on the official store.'
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
                    {product.price}
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
