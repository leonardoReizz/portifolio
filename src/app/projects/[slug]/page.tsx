"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  ArrowLeftIcon,
  ExternalLinkIcon,
  GithubIcon,
  LayersIcon,
  ServerIcon,
  DatabaseIcon,
  MonitorIcon,
  CpuIcon,
  ZapIcon,
} from "lucide-react";
import { projects } from "@/app/data/projects";

const layerIcons: Record<string, React.ReactNode> = {
  Frontend: <MonitorIcon size={18} />,
  "Frontend (UI)": <MonitorIcon size={18} />,
  "Frontend (Sites das Imobiliarias)": <MonitorIcon size={18} />,
  "Frontend (Dashboard)": <MonitorIcon size={18} />,
  "Painel Administrativo": <LayersIcon size={18} />,
  "API Backend": <ServerIcon size={18} />,
  Backend: <ServerIcon size={18} />,
  "Core (Rust / Tauri)": <CpuIcon size={18} />,
  Criptografia: <ZapIcon size={18} />,
  "Integracao IA": <ZapIcon size={18} />,
  "Banco de Dados": <DatabaseIcon size={18} />,
  Persistencia: <DatabaseIcon size={18} />,
  "Backend & Banco": <DatabaseIcon size={18} />,
  "Pagamentos & Banco": <DatabaseIcon size={18} />,
  "Banco de Dados & Infra": <DatabaseIcon size={18} />,
  "Workers & Filas": <CpuIcon size={18} />,
  Infraestrutura: <ServerIcon size={18} />,
  "Mensageria & Infra": <CpuIcon size={18} />,
  "Microsservico de Pagamentos": <ZapIcon size={18} />,
  "Microsservico de Orquestracao": <ServerIcon size={18} />,
  "Microsservico de Metricas": <CpuIcon size={18} />,
  "Agente Kubernetes (GoLang)": <CpuIcon size={18} />,
};

function getLayerIcon(name: string) {
  return layerIcons[name] || <LayersIcon size={18} />;
}

export default function ProjectArchitecture() {
  const params = useParams();
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const project = projects.find((p) => p.slug === params.slug);

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

  useEffect(() => {
    const fallback = setTimeout(() => setVisible(true), 300);

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

  if (!project || !project.architecture) {
    return (
      <div className="noise bg-background text-foreground min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Projeto nao encontrado</h1>
          <button
            onClick={() => router.push("/")}
            className="text-primary hover:underline flex items-center gap-2 mx-auto"
          >
            <ArrowLeftIcon size={16} />
            Voltar ao portfolio
          </button>
        </div>
      </div>
    );
  }

  const { architecture } = project;

  return (
    <div className="noise bg-background text-foreground min-h-screen">
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
      </div>

      <div
        ref={sectionRef}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20"
      >
        {/* Back button */}
        <button
          onClick={() => router.push("/#projects")}
          className={cn(
            "flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 stagger-item",
            visible && "stagger-item-visible",
          )}
        >
          <ArrowLeftIcon size={16} />
          Voltar ao portfolio
        </button>

        {/* Project header */}
        <div
          className={cn(
            "mb-12 stagger-item",
            visible && "stagger-item-visible",
          )}
          style={{ transitionDelay: "50ms" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary">
              Arquitetura
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mb-6">
            {project.description}
          </p>

          {/* Tags & links */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 rounded-full text-muted-foreground/70 bg-white/[0.04] border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2 ml-auto">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-white/[0.1] transition-all"
                >
                  <ExternalLinkIcon size={15} />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-white/[0.1] transition-all"
                >
                  <GithubIcon size={15} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Architecture Overview */}
        <div
          className={cn(
            "spotlight-card p-6 sm:p-8 mb-8 stagger-item",
            visible && "stagger-item-visible",
          )}
          style={{ transitionDelay: "100ms" }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            <span className="text-gradient">Overview</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            {architecture.overview}
          </p>
        </div>

        {/* Architecture Layers */}
        <div className="mb-8">
          <h2
            className={cn(
              "text-xl sm:text-2xl font-bold mb-6 stagger-item",
              visible && "stagger-item-visible",
            )}
            style={{ transitionDelay: "150ms" }}
          >
            Camadas da <span className="text-gradient">Arquitetura</span>
          </h2>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden sm:block" />

            <div className="space-y-4">
              {architecture.layers.map((layer, index) => (
                <div
                  key={layer.name}
                  className={cn(
                    "relative sm:pl-16 stagger-item",
                    visible && "stagger-item-visible",
                  )}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {/* Dot on line */}
                  <div className="absolute left-[18px] top-7 w-3 h-3 rounded-full border-2 border-primary bg-background z-10 shadow-[0_0_10px_hsl(217_91%_60%/0.4)] hidden sm:block" />

                  <div className="spotlight-card p-5 sm:p-6 group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        {getLayerIcon(layer.name)}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold group-hover:text-gradient transition-all duration-300">
                        {layer.name}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4">
                      {layer.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {layer.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full text-primary/80 bg-primary/[0.08] border border-primary/[0.12]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div
          className={cn("stagger-item", visible && "stagger-item-visible")}
          style={{
            transitionDelay: `${
              200 + architecture.layers.length * 100 + 100
            }ms`,
          }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6">
            <span className="text-gradient">Destaques</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {architecture.highlights.map((highlight, index) => (
              <div
                key={index}
                className="spotlight-card p-4 flex items-start gap-3 group"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <ZapIcon size={12} className="text-primary" />
                </div>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
