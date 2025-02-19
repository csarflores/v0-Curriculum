"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExperienceBackground } from "./BackgroundEffects"
import data from "../data.json"
import { Parallax } from "react-scroll-parallax"

export function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="experiencia" className="min-h-screen flex items-center justify-center relative overflow-hidden sm:p-20">
      <ExperienceBackground />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <Parallax speed={-5}>
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-12 text-green-300"
            animate={{
              textShadow: [
                "0 0 5px rgba(0,255,0,0.5)",
                "0 0 10px rgba(0,255,0,0.3)",
                "0 0 15px rgba(0,255,0,0.2)",
                "0 0 20px rgba(0,255,0,0.1)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            Experiencia
          </motion.h2>
        </Parallax>
        <div className="space-y-12">
          {data.experiences &&
            data.experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-black bg-opacity-50 p-6 rounded-2xl border border-neon-pink text-left pixel-font"
              >
                <h3 className="text-2xl font-bold mb-2 text-neon-pink pixel-font">{exp.title}</h3>
                <p className="text-neon-blue mb-1 pixel-font">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-4 pixel-font">{exp.period}</p>
                <p className="text-gray-300 pixel-font">{exp.description}</p>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  )
}

