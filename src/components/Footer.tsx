'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black/95 border-t border-white/10">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center gap-6">
        <Image src="/logo-uCgt3dQl.png" alt="Mother Vegetables Confidence" width={130} height={130} />
        <div className="space-y-2 text-sm text-gray-300">
          <p className="text-xs text-emerald-300 mb-3">
            {t({ JP: 'オーガニック認証・ハラール認証・ビーガン認証取得済み', EN: 'Organic, Halal & Vegan Certified' })}
          </p>
          <p className="text-lg text-white font-semibold">Mother Vegetables Confidence MV-Si002</p>
          <p>dotpb株式会社</p>
          <p>〒103-0026 東京都中央区日本橋兜町5-1 兜町第1平和ビル3階</p>
          <p>
            <a href="mailto:info@dotpb.jp" className="hover:text-emerald-300 transition-colors">
              info@dotpb.jp
            </a>
          </p>
          <p>
            <Link href="#lineup" className="hover:text-emerald-300 transition-colors">
              {t({ JP: '購入・お問い合わせ', EN: 'Purchase & Enquiries' })}
            </Link>
          </p>
          <p>
            <a href="https://www.dotpb.jp/legal" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">
              {t({ JP: '特定商取引法に基づく表記', EN: 'Legal Notice' })}
            </a>
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="text-xs text-gray-400">{t({ JP: '安心のお約束', EN: 'Our Promise' })}:</span>
            <span className="text-xs text-emerald-300">30日返金保証</span>
            <span className="text-xs text-emerald-300">送料無料</span>
            <span className="text-xs text-emerald-300">医薬部外品</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <p className="text-center text-gray-500 text-xs">
          © 2025 dotpb Co.,Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
