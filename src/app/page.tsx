'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'
import IntroSection from '../components/IntroSection'
import ProjectOverview from '../components/ProjectOverview'
import HeroContent from '../components/HeroContent'
import IndustryApproach from '../components/IndustryApproach'
import MottoSection from '../components/MottoSection'
import ProductLineup from '../components/ProductLineup'
import HealingSection from '../components/HealingSection'
import GiftSection from '../components/GiftSection'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen text-white relative">
      <Header />
      <Hero />
      <IntroSection />
      <HeroContent />
      <ProjectOverview />
      <IndustryApproach />
      <MottoSection />
      <ProductLineup />
      <HealingSection />
      <GiftSection />
      <FAQ />
      <Footer />
    </main>
  )
}
