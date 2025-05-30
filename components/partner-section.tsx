"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/contexts/language-context"

export default function PartnersSection() {
  const { t } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)

  const partners = [
    {
      name: "VisionPlanner",
      logo: "/images/partner/visionplanner.png",
      alt: "VisionPlanner - Financial Planning Software",
    },
    {
      name: "Exact Online",
      logo: "/images/partner/exactonline.png",
      alt: "Exact Online - Business Software",
    },
    {
      name: "Twinfield",
      logo: "/images/partner/twinfield.png",
      alt: "Twinfield - Accounting Software",
    },
    {
      name: "SnelStart",
      logo: "/images/partner/snelstart.png",
      alt: "SnelStart - Accounting Software",
    },
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("partnersTitle")}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("partnersSubtitle")}</p>
        </div>

        {/* Infinite scroll container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-12 overflow-hidden"
            style={{
              width: "100%",
              scrollBehavior: "smooth",
            }}
          >
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-white dark:bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.alt}
                  width={160}
                  height={80}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-white dark:bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.alt}
                  width={160}
                  height={80}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-800 pointer-events-none"></div>
        </div>

        {/* Static grid for mobile */}
        <div className="md:hidden grid grid-cols-2 gap-6 mt-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-full h-24 flex items-center justify-center bg-white dark:bg-white rounded-lg shadow-md"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.alt}
                width={120}
                height={60}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
