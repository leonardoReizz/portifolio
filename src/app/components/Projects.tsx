"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    id: 111,
    title: "Sysko",
    description: "Plataforma de deploy automatizado de aplicações",
    image: "./sysko.png",
    tags: [
      "React",
      "Vite",
      "Next.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Tailwind CSS",
      "Kubernetes",
      "Docker",
      "GitLab",
      "CI/CD",
    ],
    demoUrl: "https://sysko.io",
  },
  {
    id: 11,
    title: "TouchABA",
    description: "Sistema para clinica que atuam com ABA",
    image: "",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    demoUrl: "https://touchaba.com/",
  },
  {
    id: 1,
    title: "Associação Aconchego",
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
      "Aplicação web para gerenciamento de reservas com calendário interativo, notificações e relatórios personalizados.",
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
    description:
      "Sistema de gerenciamento e observabilidade para ambientes Kubernetes",
    tags: [
      "React.JS",
      "Next.JS",
      "Express",
      "TailwindCSS",
      "Docker",
      "MongoDB",
      "Mysql",
      "RabbitMQ",
      "Redis",
      "Stripe",
    ],
    demoUrl: "https://gita.cloud",
  },
  {
    id: 4,
    title: "Eslint-config",
    description: "Configuracao pronta para eslint-react,node e next",
    image: "https://cdn.buttercms.com/NFhF3dWBTf5wPnfTsdjR",
    tags: ["Vue.js", "Firebase", "Express", "TailwindCSS"],
    repoUrl: "https://cdn.buttercms.com/NFhF3dWBTf5wPnfTsdjR",
  },
];

export default function Projects() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"));
            setVisibleItems((prev) => [...prev, id]);
          }
        });
      },
      { threshold: 0.2 },
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Projetos
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Trabalhos <span className="text-primary">Recentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Uma seleção dos meus trabalhos mais recentes, demonstrando minha
            experiência com diferentes tecnologias e soluções.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              // ref={(el) => (projectRefs.current[index] = el)}
              data-id={project.id}
              className={cn(
                "bg-card rounded-2xl overflow-hidden hover-card-animation shadow-subtle border border-border/50",
                visibleItems.includes(project.id)
                  ? "stagger-item-visible"
                  : "stagger-item",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-apple hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.demoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLinkIcon size={16} />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GithubIcon size={16} />
                        Código
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
