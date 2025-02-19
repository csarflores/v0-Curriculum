import { VT323 } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const vt323 = VT323({ subsets: ["latin"], weight: "400" })

export const metadata = {
  title: "César Flores - Desarrollador de Software",
  description: "Curriculum Vitae de César Flores - Desarrollador de Software, Desarrollador Web Creativo",
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/curriculum.ico" />
      </head>
      <body className={vt323.className}>{children}</body>
    </html>
  )
}