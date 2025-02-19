"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Parallax } from "react-scroll-parallax"
import { ProjectsBackground } from "./BackgroundEffects"
import data from "../data.json"
import { useState } from "react"

export function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="proyectos" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <Parallax speed={-15}>
        <ProjectsBackground />
      </Parallax>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <Parallax speed={-5}>
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-12 text-cyan-300"
            animate={{
              textShadow: [
                "0 0 5px rgba(0,255,255,0.5)",
                "0 0 10px rgba(0,255,255,0.3)",
                "0 0 15px rgba(0,255,255,0.2)",
                "0 0 20px rgba(0,255,255,0.1)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            Proyectos Destacados
          </motion.h2>
        </Parallax>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:p-10">
          {data.projects &&
            data.projects.map((project, index) => {
              const formattedDescription = project.description.replace(/\n/g, '<br />'); // Reemplazar saltos de línea por <br />

              return (
                <Parallax key={index} speed={5}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px #00ffff" }}
                    className="bg-black bg-opacity-50 rounded-2xl border border-neon-green overflow-hidden flex flex-col h-full"
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex-1">
                      <a
                        href={project.url} target="_blank"
                      >
                        <h3 className="text-xl font-bold mb-2 text-neon-green pixel-font">{project.title}</h3>
                      </a>
                      <div className="text-justify">
                        <TextExpandable content={formattedDescription} />
                      </div>
                    </div>
                  </motion.div>
                </Parallax>
              )
            })}
        </div>
      </motion.div>
    </section>
  )
}

function TextExpandable({ content }: { content: string }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const truncatedText = content.slice(0, 150) + (content.length > 150 ? "..." : "")

  return (
    <div>
      <p className="text-gray-300 pixel-font" dangerouslySetInnerHTML={{ __html: isExpanded ? content : truncatedText }} />
      {content.length > 150 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xl underline text-cyan-300 mt-2 hover:text-cyan-500"
        >
          {isExpanded ? "Ver menos" : "Ver más"}
        </button>
      )}
    </div>
  )
}