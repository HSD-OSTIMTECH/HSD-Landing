import React from 'react'

import HeroSection from '@/components/futures/home/heroSection'
import LogoLoopSection from '@/components/futures/home/logoLoopSection'
import ApplicationCta from '@/components/futures/home/application'
import BentoSection from '@/components/futures/home/bentoSection'


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <LogoLoopSection />
      <ApplicationCta />
      <BentoSection />
    </div>
  )
}

export default HomePage