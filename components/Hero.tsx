"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import data from "../data.json"

export function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-repeat bg-[url('/pixel-pattern.png')] opacity-10"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <motion.h1
          className="text-7xl md:text-9xl font-bold mb-4 text-yellow-300"
          animate={{
            textShadow: [
              "0 0 5px rgba(255,255,0,0.5)",
              "0 0 10px rgba(255,255,0,0.3)",
              "0 0 15px rgba(255,255,0,0.2)",
              "0 0 20px rgba(255,255,0,0.1)",
            ],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          {data.hero.name}
        </motion.h1>
        <motion.h2
          className="text-4xl md:text-6xl mb-8 text-green-400 font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            textShadow: ["0 0 5px rgba(0,255,0,0.5)", "0 0 10px rgba(0,255,0,0.3)", "0 0 15px rgba(0,255,0,0.2)"],
          }}
          transition={{ delay: 0.5, duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          {data.hero.title}
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mx-auto text-yellow-300 pixel-font mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {data.hero.description}
        </motion.p>
        <motion.a
          href={data.hero.ctaLink}
          className="inline-block bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-pink-700 transition-colors duration-300 pixel-font"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {data.hero.ctaText}
        </motion.a>
      </motion.div>
    </section>
  )
}

