'use client'
import React from 'react'
import LogoLoop from '../../ui/logoLoop'

const imageLogos = [
  {
    src: "/partners/ostim.png",
    alt: "Ostim Teknik Üniversitesi",
    href: "https://ostimteknik.edu.tr",
  },
  {
    src: "/partners/teknopark.png",
    alt: "Ostim Teknopark",
    href: "https://ostimteknopark.com.tr",
  },
];

const LogoLoopSection = () => {
  return (
    <div>
      <div
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={imageLogos}
          speed={40}
          direction="left"
          logoHeight={64}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#121212"
          ariaLabel="Partners"
        />
      </div>
    </div>
  );
}

export default LogoLoopSection