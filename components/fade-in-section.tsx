"use client"

import { useEffect, type ReactNode } from "react"

interface FadeInSectionProps {
  children: ReactNode
  className?: string
}

export default function FadeInSection({ children, className = "" }: FadeInSectionProps) {
  useEffect(() => {
    const isInViewport = (element: Element) => {
      const rect = element.getBoundingClientRect()
      return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
    }

    const animateOnScroll = () => {
      document.querySelectorAll(".fade-in-section").forEach((element) => {
        if (isInViewport(element)) element.classList.add("is-visible")
      })
    }

    animateOnScroll()
    window.addEventListener("scroll", animateOnScroll)
    return () => window.removeEventListener("scroll", animateOnScroll)
  }, [])

  return <div className={`fade-in-section ${className}`}>{children}</div>
}
