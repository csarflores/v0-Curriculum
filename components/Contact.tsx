"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";
import { ContactBackground } from "./BackgroundEffects";
import Image from "next/image"; // Importación correcta
import data from "../data.json";

export function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="contacto"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <Parallax speed={-10}>
        <ContactBackground />
      </Parallax>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <Parallax speed={-5}>
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-8 text-purple-300"
            animate={{
              textShadow: [
                "0 0 5px rgba(128,0,128,0.5)",
                "0 0 10px rgba(128,0,128,0.3)",
                "0 0 15px rgba(128,0,128,0.2)",
                "0 0 20px rgba(128,0,128,0.1)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            ¡Trabajemos juntos!
          </motion.h2>
        </Parallax>

        <Parallax speed={5}>
          <p className="text-xl md:text-2xl mb-8 pixel-font"></p>
        </Parallax>

        <Parallax speed={10}>
          <motion.a
            href={`mailto:${data.contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neon-pink-600 text-pink-300 underline font-bold py-3 px-8 rounded-full text-xl md:text-2xl hover:bg-neon-blue hover:text-white transition-colors duration-300 pixel-font"
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px #ff00ff" }}
            whileTap={{ scale: 0.95 }}
          >
            Email
          </motion.a>
          <motion.a
            href={`${data.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neon-pink-600 text-pink-300 underline font-bold py-3 px-8 rounded-full text-xl md:text-2xl hover:bg-neon-blue hover:text-white transition-colors duration-300 pixel-font"
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px #ff00ff" }}
            whileTap={{ scale: 0.95 }}
          >
            Whatsapp
          </motion.a>
        </Parallax>

        <Parallax speed={15}>
          <div className="mt-12 flex justify-center space-x-6 pixel-font">
            {data.contact.socialLinks.map((link) => (
              <motion.a
                key={link.platform}
                href={link.url}
                className="text-neon-blue hover:text-neon-pink transition-colors duration-300 pixel-font"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.platform}
              </motion.a>
            ))}
          </div>
        </Parallax>
      </motion.div>

      {/* 🚀 Cohete animado corregido */}
      <motion.div
        ref={ref} // Asegura que la animación se active correctamente
        className="absolute left-0 bottom-0 "
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 50} : { opacity: 0 }}
        transition={{
          duration: 2,
          ease: "easeIn",
        }}
      >
        <Image
          className="object-contain"
          src="/cohete.png"
          alt="Cohete despegando"
          width={500}
          height={500}
          priority
          unoptimized
        />
      </motion.div>
    </section>
  );
}
