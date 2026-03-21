"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon, GithubIcon, ArrowUpRightIcon } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 114,
    title: "Proposely",
    description:
      "Plataforma SaaS para criação e gestão de propostas comerciais com IA, templates profissionais e múltiplos estilos de visualização.",
    image: "./proposely.png",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "OpenAI",
    ],
    demoUrl: "https://proposelylp.cap.leonardo-reis.com",
    featured: true,
  },
  {
    id: 113,
    title: "Aegis Vault",
    description: "Gerenciador de senhas multiplataforma para desktop",
    image: "./aegis.png",
    tags: [
      "React",
      "Rust",
      "Tauri",
      "Criptografia",
      "MongoDB",
      "Tailwind CSS",
      "CI/CD",
    ],
    demoUrl: "https://aegisvault.leonardo-reis.com",
    repoUrl: "https://github.com/leonardoReizz/aegis-vault",
    featured: true,
  },
  {
    id: 112,
    title: "SentraAPI",
    description: "Plataforma de monitoramento para apis",
    image: "./sentra.png",
    tags: ["React", "Next.js", "NestJS", "BullMQ", "MySQL", "Redis", "Docker"],
    demoUrl: "https://sentraapi.com",
    featured: true,
  },
  {
    id: 11,
    title: "TouchABA",
    description: "Sistema para clinica que atuam com ABA",
    image: "./touch.png",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    demoUrl: "https://touchaba.com/",
  },
  {
    id: 1,
    title: "Associacao Aconchego",
    description: "Landing page para associacao aconchego",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSgxTKerUly0tmfUuL45Am3dYN_zeB5cIfQ&s",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://associacaoaconchego.com/",
  },
  {
    id: 2,
    title: "Nativesec",
    description:
      "Aplicacao web para gerenciamento com calendario interativo e relatorios.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKb8RY8jQOqwCfxtFmcZtvc_G4m8iHITs2Uw&s",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
    demoUrl: "https://nativesec.io",
    repoUrl: "https://github.com/Nativesec/nativesec-desktop",
  },
  {
    id: 3,
    title: "Gita",
    image: "https://gita.cloud/img/dalle.webp",
    description: "Gerenciamento e observabilidade para Kubernetes",
    tags: [
      "React.JS",
      "Next.JS",
      "Express",
      "Docker",
      "MongoDB",
      "RabbitMQ",
      "Stripe",
    ],
    demoUrl: "https://gita.cloud",
  },
  {
    id: 4,
    title: "Eslint-config",
    description: "Configuracao pronta para eslint-react, node e next",
    image: "https://cdn.buttercms.com/NFhF3dWBTf5wPnfTsdjR",
    tags: ["Vue.js", "Firebase", "Express", "TailwindCSS"],
    repoUrl: "https://cdn.buttercms.com/NFhF3dWBTf5wPnfTsdjR",
  },
];

function ProjectCard({
  project,
  index,
  visible,
}: {
  project: Project;
  index: number;
  visible: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateY = x * 6;
    const rotateX = -y * 6;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "spotlight-card group cursor-default tilt-card stagger-item",
        visible && "stagger-item-visible",
      )}
      style={{
        transitionDelay: `${index * 100}ms`,
        transition:
          "transform 0.2s ease-out, opacity 0.7s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* Image */}
      <div className="overflow-hidden relative aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(225_15%_6%)] via-transparent to-transparent" />

        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-primary/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors duration-300"
            >
              <ExternalLinkIcon size={16} />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors duration-300"
            >
              <GithubIcon size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3
            className={cn(
              "font-bold group-hover:text-gradient transition-all duration-300",
              project.featured ? "text-xl" : "text-lg",
            )}
          >
            {project.title}
          </h3>
          <ArrowUpRightIcon
            size={16}
            className="text-muted-foreground/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 shrink-0 mt-1"
          />
        </div>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-full text-muted-foreground/70 bg-white/[0.04] border border-white/[0.04]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
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
      id="projects"
      className="section-padding relative items-center flex justify-center"
    >
      <div className="container">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 animate-fade-in">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Trabalhos <span className="text-gradient">Recentes</span>
          </h2>
          <p className="text-muted-foreground max-w-lg text-base">
            Uma selecao dos meus trabalhos mais recentes, demonstrando
            experiencia com diferentes tecnologias.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
