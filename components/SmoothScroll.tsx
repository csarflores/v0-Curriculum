"use client"

import { type ReactNode, useEffect, useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, { damping: 50, stiffness: 400 })
  const y = useTransform(smoothProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        ref.current.style.transform = `translate3d(0, ${-window.scrollY}px, 0)`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
      <motion.div ref={ref} style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  )
}

