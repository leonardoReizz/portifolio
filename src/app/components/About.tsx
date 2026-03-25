"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { GraduationCapIcon, BriefcaseIcon } from "lucide-react";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  location: string;
  description: string;
  type: "education" | "experience";
}

const timelineData: TimelineItem[] = [
  {
    id: 0,
    year: "03/2025 - Presente",
    title: "Fulltrader - Desenvolvedor Fullstack",
    location: "Sao Paulo, SP ( Remoto )",
    description:
      "Focado no desenvolvimento de novos negocios dentro da empresa, trabalhando na criacao de solucoes do zero. Uso React, Node.js, WebSocket e PostgreSQL.",
    type: "experience",
  },
  {
    id: 1,
    year: "06/2022 - Presente",
    title: "Jack Experts - Fullstack Pleno",
    location: "Brasilia, DF ( Remoto )",
    description:
      "Desenvolvimento de aplicacoes web com Vite, React e NestJS. APIs e microsservicos de alta performance. Solucoes em GoLang para automacao de clusters Kubernetes com 500+ nodes. Integracoes Stripe e mentoria tecnica.",
    type: "experience",
  },
  {
    id: 3,
    year: "2020 - 2025",
    title: "Bacharelado em Sistemas de Informacao",
    location: "Faculdade Descomplica Sul Americana",
    description:
      "Formacao em desenvolvimento de software, algoritmos, estruturas de dados e engenharia de software.",
    type: "education",
  },
  {
    id: 4,
    year: "2025 - 2026",
    title: "Pos Graduacao em Engenharia de Software",
    location: "Faculdade Descomplica Sul Americana",
    description: "",
    type: "education",
  },
];

const stats = [
  { value: "4+", label: "Anos de\nexperiencia" },
  { value: "10+", label: "Projetos\nconcluidos" },
  { value: "5+", label: "Clientes\nsatisfeitos" },
  { value: "10+", label: "Tecnologias\ndominadas" },
];

function AnimatedCounter({
  value,
  visible,
}: {
  value: string;
  visible: boolean;
}) {
  const num = parseInt(value);
  const suffix = value.replace(String(num), "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      start = Math.floor(eased * num);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [visible, num]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fallback = setTimeout(() => setVisible(true), 800);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          clearTimeout(fallback);
        }
      },
      { threshold: 0.02 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding relative flex items-center justify-center"
    >
      <div className="container max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
            Sobre
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 px-4 sm:px-0">
            Transformando ideias em{" "}
            <span className="text-gradient">realidade</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed p-2">
            Desenvolvedor fullstack apaixonado por criar solucoes elegantes.
            Mais de 3 anos construindo aplicacoes web e moveis que combinam
            excelencia tecnica com design excepcional. Codigo limpo, escalavel e
            focado na experiencia do usuario.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols12 md:grid-cols-4 gap-2 sm:gap-3 mb-16 sm:mb-24 px-2 sm:px-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "spotlight-card p-6 text-center group stagger-item",
                visible && "stagger-item-visible",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-gradient mb-2">
                <AnimatedCounter value={stat.value} visible={visible} />
              </div>
              <p className="text-xs text-muted-foreground whitespace-pre-line leading-relaxed uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto px-4 sm:px-0">
          <h3 className="text-center text-xl sm:text-2xl font-bold mb-8 sm:mb-12">
            Formacao & <span className="text-gradient">Experiencia</span>
          </h3>

          <div className="relative pl-8 sm:pl-12 max-md:pl-0">
            {/* Vertical line - solid base connecting all dots */}
            <div
              className="absolute top-0 bottom-0 w-[2px] z-0 max-md:hidden"
              style={{
                left: "7px",
                background: "hsl(225 15% 18%)",
              }}
            />
            {/* Beam of light traveling down */}
            <div
              className="absolute top-0 bottom-0 w-[2px] z-[1] overflow-hidden"
              style={{ left: "7px" }}
            >
              <div
                className="absolute left-0 w-full max-md:hidden"
                style={{
                  height: "80px",
                  background:
                    "linear-gradient(to bottom, transparent, hsl(217 91% 60% / 0.9), transparent)",
                  animation: "beam-travel 4s ease-in-out infinite",
                }}
              />
            </div>

            {timelineData.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  "relative pb-8 sm:pb-12 last:pb-0 stagger-item flex items-center justify-center",
                  visible && "stagger-item-visible",
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Dot - centered on the 2px line at left:7px. Dot=16px, so left = 7-8 = -1px from container */}
                <div
                  className={cn(
                    "absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 z-10 max-md:hidden",
                    item.type === "experience"
                      ? "border-primary bg-primary shadow-[0_0_12px_hsl(217_91%_60%/0.5)]"
                      : "border-primary/40 bg-background",
                  )}
                  style={{ left: "calc(-1 * (3rem - 1px))" }}
                />

                {/* Card */}
                <div className="spotlight-card p-4 sm:p-5 group w-full">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className={cn(
                        "w-7 h-7 rounded-lg flex items-center justify-center",
                        item.type === "experience"
                          ? "bg-primary/10 text-primary"
                          : "bg-violet-500/10 text-violet-400",
                      )}
                    >
                      {item.type === "education" ? (
                        <GraduationCapIcon size={14} />
                      ) : (
                        <BriefcaseIcon size={14} />
                      )}
                    </div>
                    <span className="text-[11px] font-mono font-medium text-primary/80">
                      {item.year}
                    </span>
                  </div>

                  <h4 className="text-base font-bold mb-1 group-hover:text-gradient transition-all duration-300">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground/60 mb-2">
                    {item.location}
                  </p>
                  {item.description && (
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
