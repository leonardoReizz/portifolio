"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  ExternalLinkIcon,
  GithubIcon,
  ArrowUpRightIcon,
  LayersIcon,
} from "lucide-react";
import Link from "next/link";
import { projects, type Project } from "@/app/data/projects";

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
          {project.architecture && (
            <Link
              href={`/projects/${project.slug}`}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors duration-300"
            >
              <LayersIcon size={16} />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-2.5 sm:p-5">
        <div className="flex items-start justify-between mb-1 sm:mb-2">
          <h3 className="text-xs sm:text-lg font-bold group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>
          <ArrowUpRightIcon
            size={14}
            className="text-muted-foreground/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 shrink-0 mt-0.5 hidden sm:block"
          />
        </div>
        <p className="text-[10px] sm:text-sm text-muted-foreground mb-2 sm:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-none">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 sm:gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-full text-muted-foreground/70 bg-white/[0.04] border border-white/[0.04]"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.architecture && (
          <Link
            href={`/projects/${project.slug}`}
            className="mt-3 sm:mt-4 flex items-center gap-1.5 text-[10px] sm:text-xs text-primary/70 hover:text-primary transition-colors duration-300"
          >
            <LayersIcon size={12} />
            Ver arquitetura
          </Link>
        )}
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
        <div className="flex flex-col items-center text-center mb-10 sm:mb-20 px-4 sm:px-0">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 animate-fade-in">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            Trabalhos <span className="text-gradient">Recentes</span>
          </h2>
          <p className="text-muted-foreground max-w-lg text-sm sm:text-base">
            Uma selecao dos meus trabalhos mais recentes, demonstrando
            experiencia com diferentes tecnologias.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-4 px-2 sm:px-0">
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
