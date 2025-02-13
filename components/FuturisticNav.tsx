"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Contacto", href: "#contacto" },
]

export function FuturisticNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-50 p-4">
      <motion.button
        className="text-neon-blue hover:text-neon-pink transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </motion.button>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <ul className="space-y-8">
          {navItems.map((item) => (
            <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a
                href={item.href}
                className="text-3xl text-neon-blue hover:text-neon-pink transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  )
}

