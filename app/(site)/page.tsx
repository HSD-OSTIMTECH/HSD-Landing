import React from 'react'

import HeroSection from '@/components/futures/home/heroSection'
import LogoLoopSection from '@/components/futures/home/logoLoopSection'
import ApplicationCta from '@/components/futures/home/application'


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <LogoLoopSection />
      <ApplicationCta />
    </div>
  )
}

export default HomePage