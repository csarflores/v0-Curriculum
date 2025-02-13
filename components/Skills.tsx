"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SkillsBackground } from "./BackgroundEffects";
import data from "../data.json";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="habilidades"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      <SkillsBackground />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <Parallax speed={-5}>
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-12 text-pink-300"
            animate={{
              textShadow: [
                "0 0 5px rgba(255,0,255,0.5)",
                "0 0 10px rgba(255,0,255,0.3)",
                "0 0 15px rgba(255,0,255,0.2)",
                "0 0 20px rgba(255,0,255,0.1)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            Habilidades
          </motion.h2>
        </Parallax>
        {/* Contenedor para las habilidades con el parallax */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* El contenedor Parallax debe envolver todo el contenido del grid para que aplique el efecto */}
          {data.skills &&
            data.skills.map((skill, index) => (
              <Parallax speed={5}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, boxShadow: "0 0 15px #ff00ff" }}
                  className="bg-black bg-opacity-50 p-6 rounded-lg border border-neon-blue flex flex-col items-center justify-center w-70 h-70"
                >
                  <div className="w-20 h-20 flex items-center justify-center">
                    <Image
                      className="object-contain"
                      src={skill.icon}
                      alt={skill.name}
                      width={70}
                      height={70}
                    />
                  </div>
                  <h3 className="text-xl font-semibold pixel-font text-center mt-2">{skill.name}</h3>
                </motion.div>
              </Parallax>
            ))}
        </div>
      </motion.div>
    </section>
  );
}