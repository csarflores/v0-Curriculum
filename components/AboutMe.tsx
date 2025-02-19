"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Parallax } from "react-scroll-parallax"
import data from "../data.json"

export function AboutMe() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      id="sobre-mi"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-purple-900"
    >
      <div className="absolute inset-0 bg-repeat bg-[url('/pixel-pattern.png')] opacity-10"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl mx-auto px-4"
      >
        <Parallax speed={-3}>
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-8 text-blue-300"
            animate={{
              textShadow: [
                "0 0 5px rgba(0,0,255,0.5)",
                "0 0 10px rgba(0,0,255,0.3)",
                "0 0 15px rgba(0,0,255,0.2)",
                "0 0 20px rgba(0,0,255,0.1)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            Sobre Mí
          </motion.h2>
        </Parallax>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Parallax speed={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {data.aboutMe &&
                data.aboutMe.description &&
                data.aboutMe.description.map((paragraph, index) => (
                  <p key={index} className="text-lg md:text-xl mb-6 text-cyan-300 pixel-font">
                    {paragraph}
                  </p>
                ))}
            </motion.div>
          </Parallax>
          <Parallax speed={10}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="flex justify-center rounded-lg overflow-hidden w-fulgit pushl h-svh">
                <iframe
                  className="w-3/4 h-3/4 border border-cyan-300 rounded-2xl"
                  src={data.aboutMe.videoUrl}
                  title="Presentación"
                ></iframe>
              </div>
            </motion.div>
          </Parallax>
        </div>
      </motion.div>
    </section>
  )
}

