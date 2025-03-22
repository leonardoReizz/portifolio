"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Code2Icon,
  ServerIcon,
  DatabaseIcon,
  PaintBucketIcon,
  GlobeIcon,
  TerminalIcon,
  GitBranchIcon,
  SettingsIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend",
    icon: <Code2Icon className="h-6 w-6" />,
    skills: [
      "HTML5/CSS3",
      "JavaScript/TypeScript",
      "React.js",
      "Vue.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    id: 2,
    title: "Backend",
    icon: <ServerIcon className="h-6 w-6" />,
    skills: ["Node.js", "Express", "NestJS", "Python", "GoLang", "REST APIs"],
  },
  {
    id: 3,
    title: "Banco de Dados",
    icon: <DatabaseIcon className="h-6 w-6" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "PrismaORM", "TypeORM"],
  },
  {
    id: 4,
    title: "UI/UX",
    icon: <PaintBucketIcon className="h-6 w-6" />,
    skills: [
      "Figma",
      "Design Responsivo",
      "ShadCN",
      "Bootstrap",
      "CSS Grid/Flexbox",
    ],
  },
  {
    id: 5,
    title: "DevOps",
    icon: <SettingsIcon className="h-6 w-6" />,
    skills: [
      "Docker",
      "CI/CD",
      "AWS",
      "Vercel",
      "GitHub Actions",
      "Kubernetes",
    ],
  },
  {
    id: 6,
    title: "Ferramentas",
    icon: <TerminalIcon className="h-6 w-6" />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jest",
      "Webpack",
      "Vite",
      "NPM/Yarn",
      "RabbitMQ",
      "Stripe",
    ],
  },
  {
    id: 7,
    title: "Idiomas",
    icon: <GlobeIcon className="h-6 w-6" />,
    skills: ["Português (Nativo)", "Inglês (Intermediário)"],
  },
  {
    id: 8,
    title: "Controle de Versão",
    icon: <GitBranchIcon className="h-6 w-6" />,
    skills: ["Git Flow", "GitHub", "GitLab", "Pull Requests", "Code Review"],
  },
];

export default function Skills() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0.1 },
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Habilidades
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Minha <span className="text-primary">Especialização</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conjunto completo de habilidades técnicas que utilizo para
            desenvolver soluções robustas e elegantes para web e aplicações
            móveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={category.id}
              ref={(el) => (skillRefs.current[index] = el)}
              data-id={category.id}
              className={cn(
                "bg-card rounded-xl p-6 border border-border/50 shadow-subtle hover:shadow-elevation transition-all duration-300 ease-apple",
                visibleItems.includes(category.id)
                  ? "stagger-item-visible"
                  : "stagger-item",
              )}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg text-primary">
                {category.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
