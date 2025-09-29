'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="bg-black border-t border-white/10 py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <a
            href="https://mv-si002.dotpb.jp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-amber-300 bg-transparent px-8 py-4 text-base font-semibold text-amber-300 transition-all duration-300 hover:bg-amber-300 hover:text-black"
          >
            {t({ JP: 'マザベジー族に参加', EN: 'Join the Mother Vege Tribe' })}
          </a>
        </div>
      </div>
    </section>
  )
}