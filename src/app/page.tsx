'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HeroContent from '@/components/HeroContent'
import ProjectOverview from '@/components/ProjectOverview'
import IndustryApproach from '@/components/IndustryApproach'
import BeforeAfterGallery from '@/components/BeforeAfterGallery'
import ProductLineup from '@/components/ProductLineup'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen text-white relative">
      <Header />
      <Hero />
      <HeroContent />
      <ProjectOverview />
      <IndustryApproach />
      <BeforeAfterGallery />
      <ProductLineup />
      <FAQ />
      <Footer />
    </main>
  )
}
