'use client'

import React, { useEffect, useRef, useState } from 'react'
import CoreTeamCard from './shared/coreTeamCard'

const TeamSlider = () => {
    const sliderRef = useRef<HTMLDivElement>(null)
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            if (!sliderRef.current || isHovering) return

            const el = sliderRef.current
            const isEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5

            if (isEnd) {
                el.scrollTo({ left: 0, behavior: 'smooth' })
            } else {
                el.scrollBy({ left: 250, behavior: 'smooth' })
            }
        }, 2500)

        return () => clearInterval(interval)
    }, [isHovering])

    return (
        <section
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth whitespace-nowrap px-2 sm:px-4 py-4 sm:py-6 scrollbar-hide min-h-[220px]"
        >
            {Array.from({ length: 10 }).map((_, i) => (
                <div
                    key={i}
                    className="inline-block w-48 sm:w-60 md:w-72 flex-shrink-0 mx-0"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <CoreTeamCard />
                </div>
            ))}
        </section>
    )
}

export default TeamSlider
