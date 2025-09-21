'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

interface CatalogItem {
  slug: string
  group: 'silica' | 'ectoine' | 'puff'
  image: string
  tag: { JP: string; EN: string }
  nameLines: { JP: string[]; EN: string[] }
  description: { JP: string; EN: string }
  price: string
  originalPrice?: string
  discount?: string
  url: string
  popular?: boolean
  stock?: { JP: string; EN: string }
}

const catalog: CatalogItem[] = [
  {
    slug: 'double-mvsi',
    group: 'silica',
    image: '/mix1500.png',
    tag: { JP: 'ミックスパック', EN: 'Mix Pack' },
    nameLines: {
      JP: ['マザベジコンフィデンスパウダー', '1,500mg'],
      EN: ['Mazavegi Confidence Powder', '1,500 mg']
    },
    description: {
      JP: '定番のシリカのみ版を2本セットで。初めての方にもおすすめのスターターサイズ。',
      EN: 'Two-pack starter featuring the silica-only formula – ideal for first-time users.'
    },
    price: '¥3,300',
    url: 'https://www.dotpb.jp/product-page/double-mvsi'
  },
  {
    slug: 'case-mvsi',
    group: 'silica',
    image: '/case1500.png',
    tag: { JP: 'スライドケース', EN: 'Slide Case' },
    nameLines: {
      JP: ['マザベジコンフィデンスパウダー', '1,500mg'],
      EN: ['Mazavegi Confidence Powder', '1,500 mg']
    },
    description: {
      JP: '持ち歩きやすい薬用スライドケース入り。いつでもどこでもサッとリタッチ。',
      EN: 'Portable slide case keeps the silica powder within reach for effortless touch-ups.'
    },
    price: '¥3,300',
    url: 'https://www.dotpb.jp/product-page/case-mvsi'
  },
  {
    slug: 'big-refill-mvsi',
    group: 'silica',
    image: '/30p22500.png',
    tag: { JP: '30本セット', EN: '30 Pack' },
    nameLines: {
      JP: ['マザベジコンフィデンスパウダー', '22,500mg'],
      EN: ['Mazavegi Confidence Powder', '22,500 mg']
    },
    description: {
      JP: 'まとめ買いで毎日のケアをよりお得に。詰め替え用チューブが30本入り。',
      EN: 'Bulk refill tubes (30 count) to keep your silica ritual going for months.'
    },
    price: '¥19,800',
    url: 'https://www.dotpb.jp/product-page/big-refill-mvsi'
  },
  {
    slug: 'double-e-mvsi',
    group: 'ectoine',
    image: '/mix2000.png',
    tag: { JP: 'ミックスパック', EN: 'Mix Pack' },
    nameLines: {
      JP: ['マザベジコンフィデンスパウダー', '2,000mg（エクトイン配合）'],
      EN: ['Mazavegi Confidence Powder', '2,000 mg (with Ectoine)']
    },
    description: {
      JP: '天然アミノ酸エクトイン配合で保湿力をプラス。日中の乾燥が気になる方に。',
      EN: 'Includes natural ectoine for added hydration—perfect for countering daytime dryness.'
    },
    price: '¥3,300',
    url: 'https://www.dotpb.jp/product-page/double-e-mvsi'
  },
  {
    slug: 'case-e-mvsi',
    group: 'ectoine',
    image: '/case2000.png',
    tag: { JP: 'スライドケース', EN: 'Slide Case' },
    nameLines: {
      JP: ['マザベジコンフィデンスパウダー', '2,000mg（エクトイン配合）'],
      EN: ['Mazavegi Confidence Powder', '2,000 mg (with Ectoine)']
    },
    description: {
      JP: 'しっとり感をキープしたい時の携帯用。マスク摩擦や空調による乾燥対策に。',
      EN: 'Take the moisture-guarding ectoine formula anywhere to defy mask friction and dry air.'
    },
    price: '¥3,300',
    url: 'https://www.dotpb.jp/product-page/case-e-mvsi'
  },
  {
    slug: 'refill-e-mvsi',
    group: 'ectoine',
    image: '/10p10000.png',
    tag: { JP: '10本セット', EN: '10 Pack' },
    nameLines: {
      JP: ['マザベジコンフィデンスパウダー', '10,000mg（エクトイン配合）'],
      EN: ['Mazavegi Confidence Powder', '10,000 mg (with Ectoine)']
    },
    description: {
      JP: '週末や旅行にも使いやすい詰め替え10本分。家族とシェアするのにも便利です。',
      EN: 'Ten refill tubes to share or split between home, office, and travel bags.'
    },
    price: '¥12,000',
    url: 'https://www.dotpb.jp/product-page/refill-e-mvsi'
  },
  {
    slug: 'big-refill-e-mvsi',
    group: 'ectoine',
    image: '/30p30000.png',
    tag: { JP: '30本セット', EN: '30 Pack' },
    nameLines: {
      JP: ['マザベジコンフィデンスパウダー', '30,000mg（エクトイン配合）'],
      EN: ['Mazavegi Confidence Powder', '30,000 mg (with Ectoine)']
    },
    description: {
      JP: 'エクトイン配合をたっぷり使いたい方向けの大容量。サロンやチーム利用にも。',
      EN: 'Large-format pack for heavy ectoine users – great for studios or small teams.'
    },
    price: '¥30,000',
    url: 'https://www.dotpb.jp/product-page/big-refill-e-mvsi'
  },
  {
    slug: 'puff-case-premium',
    group: 'puff',
    image: '/puff-case-premium.png',
    tag: { JP: '人気No.1', EN: 'Best Seller' },
    nameLines: {
      JP: ['プレミアムパフケース', 'シリカパウダー2,000mg付き'],
      EN: ['Premium Puff Case', 'with 2,000mg Silica Powder']
    },
    description: {
      JP: '高級パフ付きコンパクトケース。ミラー付きで外出先でも完璧なメイク直しを実現。',
      EN: 'Luxury compact case with premium puff and mirror for perfect touch-ups anywhere.'
    },
    price: '¥5,500',
    originalPrice: '¥6,800',
    discount: '20% OFF',
    popular: true,
    stock: { JP: '残りわずか', EN: 'Limited Stock' },
    url: 'https://www.dotpb.jp/product-page/puff-case-premium'
  },
  {
    slug: 'puff-case-standard',
    group: 'puff',
    image: '/puff-case-standard.png',
    tag: { JP: 'スタンダード', EN: 'Standard' },
    nameLines: {
      JP: ['パフケースセット', 'シリカパウダー1,500mg付き'],
      EN: ['Puff Case Set', 'with 1,500mg Silica Powder']
    },
    description: {
      JP: '携帯に便利なコンパクトサイズ。パフ付きで手を汚さず使える優れもの。',
      EN: 'Convenient compact size with puff for clean, easy application on the go.'
    },
    price: '¥4,200',
    url: 'https://www.dotpb.jp/product-page/puff-case-standard'
  },
  {
    slug: 'puff-case-ectoine',
    group: 'puff',
    image: '/puff-case-ectoine.png',
    tag: { JP: 'エクトイン', EN: 'With Ectoine' },
    nameLines: {
      JP: ['パフケースセット', 'エクトイン配合2,000mg付き'],
      EN: ['Puff Case Set', 'with 2,000mg Ectoine Formula']
    },
    description: {
      JP: '保湿力の高いエクトイン配合パウダーとパフケースのセット。乾燥肌の方におすすめ。',
      EN: 'Moisturizing ectoine formula with puff case set, perfect for dry skin types.'
    },
    price: '¥4,800',
    url: 'https://www.dotpb.jp/product-page/puff-case-ectoine'
  },
  {
    slug: 'puff-refill',
    group: 'puff',
    image: '/puff-refill.png',
    tag: { JP: '詰め替え', EN: 'Refill' },
    nameLines: {
      JP: ['パフケース用詰め替え', 'シリカパウダー5本セット'],
      EN: ['Puff Case Refills', '5 Silica Powder Tubes']
    },
    description: {
      JP: 'パフケース用の詰め替えパウダー5本セット。約2ヶ月分の大容量。',
      EN: 'Refill pack with 5 powder tubes for puff cases, approximately 2 months supply.'
    },
    price: '¥2,800',
    url: 'https://www.dotpb.jp/product-page/puff-refill'
  }
]

const purchaseNotice = {
  JP: '※価格はすべて税込表示。全国一律で宅配便発送（5,500円以上で送料無料）、お支払いはクレジットカード・銀行振込に対応しています。',
  EN: 'Prices shown include tax. Nationwide shipping is flat-rate (free over ¥5,500) with credit-card and bank-transfer payments available.'
}

const paymentNote = {
  JP: 'ご注文完了後、2営業日以内に発送。発送完了メールに追跡番号を記載します。',
  EN: 'Orders ship within two business days; tracking details are provided in the dispatch email.'
}

const groups: {
  id: CatalogItem['group']
  heading: { JP: string; EN: string }
  note: { JP: string; EN: string }
  accent: string
}[] = [
  {
    id: 'puff',
    heading: { JP: 'パフケースシリーズ', EN: 'Puff Case Series' },
    note: {
      JP: '高級パフ付きコンパクトケース。外出先でも手を汚さず簡単メイク直し。',
      EN: 'Luxury compact cases with premium puff for clean, easy touch-ups anywhere.'
    },
    accent: 'from-purple-400/20 via-pink-500/10 to-purple-400/20'
  },
  {
    id: 'silica',
    heading: { JP: 'シリカのみ版', EN: 'Silica-Only Collection' },
    note: {
      JP: 'オーガニックシリカ純度97.1%以上。皮脂吸着とトーンアップに特化したベーシックライン。',
      EN: 'Featuring 97.1% pure organic silica for shine control and tone refinement.'
    },
    accent: 'from-emerald-400/20 via-emerald-500/10 to-emerald-400/20'
  },
  {
    id: 'ectoine',
    heading: { JP: 'エクトイン配合版', EN: 'Ectoine-Infused Collection' },
    note: {
      JP: '天然アミノ酸エクトインをプラスし、潤いと炎症ケアを兼ね備えたハイグレードライン。',
      EN: 'Boosted with natural ectoine for moisture retention and soothing care.'
    },
    accent: 'from-cyan-400/20 via-cyan-500/10 to-cyan-400/20'
  }
]

export default function ProductLineup() {
  const { t, language } = useLanguage()

  return (
    <section id="lineup" className="py-24 md:py-32 bg-gradient-to-b from-gray-950 via-black to-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-emerald-300 mb-4">PRODUCT LINEUP</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t({ JP: 'Mother Vegetables Confidence 商品ラインナップ', EN: 'Mother Vegetables Confidence Lineup' })}
          </h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-300">
            {t({
              JP: 'MV-Si001で公開されているカタログを元に、シリカのみ版とエクトイン配合版をフルラインナップでご紹介します。',
              EN: 'Drawing from the MV-Si001 catalogue, explore the full silica-only and ectoine-infused ranges.'
            })}
          </p>
          <div className="mt-6 bg-white/[0.05] border border-white/10 rounded-3xl px-6 py-4 text-xs md:text-sm text-gray-200 space-y-1">
            <p>{t(purchaseNotice)}</p>
            <p>{t(paymentNote)}</p>
          </div>
        </div>

        <div className="space-y-16">
          {groups.map((group) => {
            const items = catalog.filter((item) => item.group === group.id)
            return (
              <div key={group.id}>
                <div className={`rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8 mb-8 text-center bg-gradient-to-r ${group.accent}`}>
                  <h3 className="text-2xl font-semibold text-white mb-2">{t(group.heading)}</h3>
                  <p className="text-sm md:text-base text-gray-200">{t(group.note)}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {items.map((product) => {
                    const nameLines = product.nameLines[language]
                    return (
                      <article
                        key={product.slug}
                        className={`flex flex-col gap-5 rounded-3xl border ${product.popular ? 'border-emerald-400/40' : 'border-white/10'} bg-white/[0.05] backdrop-blur-sm p-6 transition-transform duration-300 hover:-translate-y-2 hover:border-emerald-300/40 relative`}
                      >
                        {product.popular && (
                          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                            🔥 {t({ JP: '人気', EN: 'HOT' })}
                          </div>
                        )}
                        {product.discount && (
                          <div className="absolute -top-3 left-6 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {product.discount}
                          </div>
                        )}
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-emerald-200">
                          <span>{t(product.tag)}</span>
                          <div className="flex items-center gap-2">
                            {product.originalPrice && (
                              <span className="line-through text-gray-500">{product.originalPrice}</span>
                            )}
                            <span className={product.discount ? 'text-red-400 font-bold' : ''}>{product.price}</span>
                          </div>
                        </div>

                        <div className="relative h-52 rounded-2xl overflow-hidden border border-white/15">
                          <Image src={product.image} alt={product.nameLines.JP.join(' ')} fill className="object-contain bg-black/30" />
                        </div>

                        <div className="space-y-2">
                          <div className="text-white text-lg font-semibold leading-tight">
                            {nameLines.map((line) => (
                              <div key={line}>{line}</div>
                            ))}
                          </div>
                          <p className="text-sm text-gray-200 leading-relaxed">{t(product.description)}</p>
                          {product.stock && (
                            <p className="text-xs text-orange-400 font-semibold">⚠️ {t(product.stock)}</p>
                          )}
                          <p className="text-xs text-gray-400">{t({ JP: '税込・送料別。配送・決済の詳細は公式ストアをご確認ください。', EN: 'Tax included; shipping is calculated at checkout. Please see the official store for payment and delivery details.' })}</p>
                        </div>

                        <a
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300 px-4 py-2 text-sm text-emerald-100 hover:bg-emerald-300/15 transition-colors"
                        >
                          {t({ JP: 'オンラインストアで見る', EN: 'View in Store' })}
                          <span aria-hidden="true">↗</span>
                        </a>
                      </article>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
