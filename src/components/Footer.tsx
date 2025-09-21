'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black/95 border-t border-white/10">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center gap-5">
        <Image src="/mothervegetables_logo_white.png" alt="Mother Vegetables Confidence" width={150} height={60} />
        <div className="space-y-2 text-sm text-gray-300">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
            {t({ JP: 'オーガニック・ハラール・ビーガン認証', EN: 'Organic · Halal · Vegan Certified' })}
          </p>
          <p className="text-lg text-white font-semibold">Mother Vegetables Confidence MV-Si002</p>
          <p>dotpb株式会社 / 〒103-0026 東京都中央区日本橋兜町5-1 3F</p>
          <p>
            <a href="mailto:info@dotpb.jp" className="hover:text-amber-300 transition-colors text-sm">
              info@dotpb.jp
            </a>
          </p>
          <div className="flex items-center justify-center gap-3 text-xs text-amber-300">
            <span>30日返金保証</span>
            <span>送料無料</span>
            <span>医薬部外品</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
          <Link href="#lineup" className="hover:text-amber-300 transition-colors">
            {t({ JP: '購入・お問い合わせ', EN: 'Purchase & Enquiries' })}
          </Link>
          <a href="https://www.dotpb.jp/legal" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
            {t({ JP: '特定商取引法', EN: 'Legal Notice' })}
          </a>
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
