"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { AboutMe } from "../components/AboutMe";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { ParticleBackground } from "../components/ParticleBackground";
import { SpaceCursor } from "../components/SpaceCursor";
import { StarryBackground } from "../components/StarryBackground";

export default function Home() {
  return (
    <ParallaxProvider>
      {/* SpaceCursor fuera del main para que no quede fijo */}
      <SpaceCursor />
      <main className="bg-indigo-900 text-white relative">
        <StarryBackground />
        <ParticleBackground />
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </ParallaxProvider>
  );
}
