"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-50 relative text-neon-blue hover:text-neon-pink transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, x: 0 },
            closed: { opacity: 0, x: "-100%" },
          }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
        >
          <ul className="space-y-8 text-center">
            {["Inicio", "Sobre Mí", "Herramientas", "Experiencia", "Proyectos", "Contacto"].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-3xl text-neon-blue hover:text-neon-pink transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </header>
  )
}

