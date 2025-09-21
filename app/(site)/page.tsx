import React from 'react'

import HeroSection from '@/components/futures/home/heroSection'
import LogoLoopSection from '@/components/futures/home/logoLoopSection'
import ApplicationCta from '@/components/futures/home/application'
import BentoSection from '@/components/futures/home/bentoSection'
import BlogSection from '@/components/futures/home/blogSection'


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <LogoLoopSection />
      <ApplicationCta />
      <BentoSection />
      <BlogSection />
    </div>
  )
}

export default HomePage