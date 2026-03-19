"use client";

import { useEffect, useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty(
          "background",
          `radial-gradient(800px circle at ${e.clientX}px ${e.clientY}px, hsl(217 91% 60% / 0.03), transparent 40%)`,
        );
      }

      document.querySelectorAll(".spotlight-card").forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="noise bg-background text-foreground">
      {/* Cursor spotlight */}
      <div
        ref={spotlightRef}
        className="fixed inset-0 z-30 pointer-events-none transition-opacity duration-300"
      />

      {/* Ambient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-primary/[0.03] blur-[150px] animate-float" />
        <div
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-blue-400/[0.02] blur-[120px] animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full bg-cyan-400/[0.02] blur-[130px] animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <Header />

      <main className="relative z-10">
        <div className="snap-section">
          <Hero />
        </div>
        <div className="snap-section">
          <Projects />
        </div>
        <div className="snap-section">
          <Skills />
        </div>
        <div className="snap-section">
          <About />
        </div>
        <div className="snap-section">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
