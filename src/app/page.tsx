'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HeroContent from '@/components/HeroContent'
import ProjectOverview from '@/components/ProjectOverview'
import IndustryApproach from '@/components/IndustryApproach'
import Ingredients from '@/components/Ingredients'
import EffectsExplainer from '@/components/EffectsExplainer'
import BeforeAfterGallery from '@/components/BeforeAfterGallery'
import ProductLineup from '@/components/ProductLineup'
import GuaranteeCTA from '@/components/GuaranteeCTA'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen />}
      <main className="min-h-screen text-white relative">
        <Header />
        <Hero />
        <HeroContent />
        <ProjectOverview />
        <IndustryApproach />
        <Ingredients />
        <EffectsExplainer />
        <BeforeAfterGallery />
        <ProductLineup />
        <GuaranteeCTA />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
