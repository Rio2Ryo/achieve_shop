'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'concept', label: 'Concept' },
    { id: 'features', label: 'Features' },
    { id: 'effects', label: 'Effects' },
    { id: 'gallery', label: 'Before/After' },
    { id: 'lineup', label: 'Products' },
    { id: 'faq', label: 'FAQ' }
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handlePurchase = () => {
    scrollToSection('lineup')
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-black/85 backdrop-blur-md border-b border-amber-500/20"
      style={{ zIndex: 1100 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/mothervegetables_logo_white.png" alt="Mother Vegetable" width={100} height={40} />
          </div>

          <nav className="hidden md:flex flex-wrap items-center justify-center gap-3 lg:gap-5 text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 transition-colors duration-300 ${
                  activeSection === item.id ? 'text-amber-400' : 'text-gray-300 hover:text-amber-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => setLanguage(language === 'EN' ? 'JP' : 'EN')}
              className="px-3 md:px-4 py-2 text-xs md:text-sm text-gray-200 border border-gray-600 rounded-md hover:border-amber-400 hover:text-amber-300 transition-colors"
            >
              {language === 'EN' ? 'EN' : 'JP'}
            </button>
            
            <button
              onClick={handlePurchase}
              className="px-4 md:px-6 py-2 text-xs md:text-sm bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-full transition-colors"
            >
              {t({ JP: 'Buy', EN: 'Buy' })}
            </button>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden px-3 py-2 border border-gray-600 rounded-md text-gray-200 hover:border-amber-400 hover:text-amber-300 transition-colors"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              <span className="block h-0.5 w-5 bg-current mb-1" />
              <span className="block h-0.5 w-5 bg-current mb-1" />
              <span className="block h-0.5 w-5 bg-current" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-white/10 bg-black/80 text-sm text-gray-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full px-5 py-3 text-left border-b border-white/5 last:border-none transition-colors ${
                  activeSection === item.id ? 'text-amber-300' : 'hover:text-amber-200'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <button
              onClick={handlePurchase}
              className="w-full px-5 py-3 text-left text-amber-100 hover:text-amber-200"
            >
              {t({ JP: 'Buy', EN: 'Buy' })}
            </button>
          </div>
        )}
      </div>
    </header>
  )
}