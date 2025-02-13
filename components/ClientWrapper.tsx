"use client"

import { ParallaxProvider } from "react-scroll-parallax"
import type { ReactNode } from "react"

interface ClientWrapperProps {
  children: ReactNode
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  return <ParallaxProvider>{children}</ParallaxProvider>
}

