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

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillsData: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend",
    icon: <Code2Icon className="h-5 w-5" />,
    skills: [
      "HTML5/CSS3",
      "JavaScript/TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Backend",
    icon: <ServerIcon className="h-5 w-5" />,
    skills: ["Node.js", "Express", "NestJS", "Python", "GoLang", "REST APIs"],
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 3,
    title: "Banco de Dados",
    icon: <DatabaseIcon className="h-5 w-5" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "PrismaORM", "TypeORM"],
    color: "from-emerald-500 to-green-500",
  },
  {
    id: 4,
    title: "UI/UX",
    icon: <PaintBucketIcon className="h-5 w-5" />,
    skills: [
      "Figma",
      "Design Responsivo",
      "ShadCN",
      "Bootstrap",
      "CSS Grid/Flexbox",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 5,
    title: "DevOps",
    icon: <SettingsIcon className="h-5 w-5" />,
    skills: [
      "Docker",
      "CI/CD",
      "AWS",
      "OCI",
      "Vercel",
      "GitHub Actions",
      "Kubernetes",
    ],
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 6,
    title: "Ferramentas",
    icon: <TerminalIcon className="h-5 w-5" />,
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
    color: "from-sky-500 to-blue-500",
  },
  {
    id: 7,
    title: "Idiomas",
    icon: <GlobeIcon className="h-5 w-5" />,
    skills: ["Portugues (Nativo)", "Ingles (Intermediario)"],
    color: "from-teal-500 to-emerald-500",
  },
  {
    id: 8,
    title: "Controle de Versao",
    icon: <GitBranchIcon className="h-5 w-5" />,
    skills: ["Git Flow", "GitHub", "GitLab", "Pull Requests", "Code Review"],
    color: "from-indigo-500 to-violet-500",
  },
];

// Flatten all skills for marquee
const allSkills = skillsData.flatMap((cat) =>
  cat.skills.map((s) => ({ skill: s, color: cat.color, icon: cat.icon })),
);

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof allSkills;
  reverse?: boolean;
}) {
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={cn(
          "flex shrink-0 gap-3 py-2",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-primary/30 hover:bg-white/[0.06] transition-all duration-300 whitespace-nowrap group"
          >
            <span className="text-muted-foreground/50 group-hover:text-primary transition-colors">
              {item.icon}
            </span>
            <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
              {item.skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
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

  const firstHalf = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const secondHalf = allSkills.slice(Math.ceil(allSkills.length / 2));

  return (
    <section ref={sectionRef} id="skills" className="section-padding relative">
      <div className="container">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
            Skills
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Minha <span className="text-gradient">Especializacao</span>
          </h2>
          <p className="text-muted-foreground max-w-lg text-base">
            Conjunto completo de habilidades tecnicas para solucoes robustas e
            elegantes.
          </p>
        </div>
      </div>

      {/* Marquee skills */}
      <div
        className={cn(
          "space-y-3 mb-20 transition-all duration-1000",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        )}
      >
        <MarqueeRow items={firstHalf} />
        <MarqueeRow items={secondHalf} reverse />
      </div>

      {/* Category cards */}
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {skillsData.map((category, index) => (
            <div
              key={category.id}
              className={cn(
                "spotlight-card group p-5 stagger-item",
                visible && "stagger-item-visible",
              )}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className={cn(
                  "w-9 h-9 rounded-lg flex items-center justify-center mb-3 bg-gradient-to-br text-white/90 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300",
                  category.color,
                )}
              >
                {category.icon}
              </div>

              <h3 className="text-sm font-bold mb-2.5 text-foreground/90 group-hover:text-foreground transition-colors">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] text-muted-foreground/70 bg-white/[0.03] px-2 py-0.5 rounded-md"
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
