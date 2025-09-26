'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black/95 border-t border-white/10">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center gap-5">
        <Image src="/mothervegetables_logo_white.png" alt="Mother Vegetable Confidence" width={150} height={60} />
        <div className="space-y-2 text-sm text-gray-300">
          <p>{t({
            JP: 'dotpb株式会社 / 〒103-0022 東京都中央区日本橋室町1-2-6-7F',
            EN: 'dotpb Co.,Ltd. / 1-2-6-7F Nihonbashi Muromachi, Chuo-ku, Tokyo 103-0022'
          })}</p>
          <p>
            <a href="mailto:info@dotpb.jp" className="hover:text-amber-300 transition-colors text-sm">
              info@dotpb.jp
            </a>
          </p>

        </div>

      </div>
      <div className="border-t border-white/10 py-4">
        <p className="text-center text-gray-500 text-xs">
          {t({
            JP: '© 2025 dotpb株式会社 All Rights Reserved.',
            EN: '© 2025 dotpb Co.,Ltd. All Rights Reserved.'
          })}
        </p>
      </div>
    </footer>
  )
}
