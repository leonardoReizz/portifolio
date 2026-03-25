"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const roles = [
  "Fullstack Developer",
  "Backend Engineer",
  "Frontend Engineer",
  "DevOps Enthusiast",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const orbitRef = useRef<HTMLDivElement>(null);

  // Typing effect
  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(role.substring(0, displayText.length + 1));
          if (displayText.length === role.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(role.substring(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Orbit ring decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          ref={orbitRef}
          className="w-[350px] h-[350px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full border border-white/[0.03] animate-spin-slow"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_hsl(217_91%_60%)]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_hsl(180_90%_55%)]" />
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-300 rounded-full" />
        </div>
        <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] rounded-full border border-white/[0.02]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Status badge */}
          <div
            className="mb-10 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-muted-foreground">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Disponivel para projetos
            </span>
          </div>

          {/* Main heading */}
          <h1 className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <span className="block text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05]">
              Leonardo Reis
            </span>
          </h1>

          {/* Typing text */}
          <div
            className="mt-4 sm:mt-6 mb-8 sm:mb-10 h-8 sm:h-10 flex items-center justify-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <span className="text-base sm:text-xl md:text-2xl font-mono text-gradient">
              {displayText}
            </span>
            <span className="ml-0.5 w-[2px] h-6 bg-primary animate-pulse" />
          </div>

          {/* Description */}
          <p
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            Criando aplicacoes web modernas e funcionais, combinando design
            excepcional com codigo de alta qualidade.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-6 sm:px-0 animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            <Button
              size="default"
              className="glow-button rounded-full px-6 sm:px-8 h-10 sm:h-11 font-medium text-xs sm:text-sm"
              asChild
            >
              <a href="#projects">Ver Projetos</a>
            </Button>
            <Button
              size="default"
              variant="outline"
              className="rounded-full px-6 sm:px-8 h-10 sm:h-11 font-medium text-xs sm:text-sm border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500"
              asChild
            >
              <a href="#contact">Entrar em Contato</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a
          href="#projects"
          className="flex flex-col items-center gap-3 text-muted-foreground/50 hover:text-primary transition-all duration-500 group"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-white/[0.1] flex justify-center pt-1.5 group-hover:border-primary/30 transition-colors">
            <div className="w-0.5 h-2 bg-muted-foreground/40 rounded-full animate-bounce group-hover:bg-primary transition-colors" />
          </div>
        </a>
      </div>
    </section>
  );
}
