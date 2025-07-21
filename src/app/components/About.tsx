"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { AwardIcon, GraduationCapIcon, BriefcaseIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
    year: "2025 - Presente ( Contrato )",
    title: "Desenvolvedor Fullstack",
    location: "São Paulo, SP ( Remoto )",
    description:
      "Desenvolvimento de aplicações fullstack web utilizando ReactJS, Next.js, Node.js, Elixir, PostgreSQL e Docker",
    type: "experience",
  },
  {
    id: 1,
    year: "2022 - Presente ( CLT )",
    title: "Desenvolvedor Fullstack Pleno",
    location: "Brasília, DF ( Remoto )",
    description:
      "Desenvolvimento de aplicações web e desktop fulltstack utilizando ReactJS, Node.js e Docker. Implementação de CI/CD e práticas ágeis.",
    type: "experience",
  },
  {
    id: 3,
    year: "2020 - 2025",
    title: "Bacharelado em Sistemas de Informação",
    location: "Faculdade Descomplica Sul Americana",
    description:
      "Formação em desenvolvimento de software, algoritmos, estruturas de dados e engenharia de software.",
    type: "education",
  },
];

export default function About() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4">
              Sobre Mim
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Transformando ideias em{" "}
              <span className="text-primary">realidade digital</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Sou um desenvolvedor fullstack apaixonado por criar soluções
              elegantes para problemas complexos. Comecei minha jornada na
              programação há mais de 3 anos e desde então venho construindo
              aplicações web e móveis que combinam excelência técnica com design
              excepcional.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Minha abordagem se baseia na criação de código limpo, bem
              documentado e escalável, com foco na experiência do usuário e nas
              necessidades do negócio. Estou sempre aprendendo novas tecnologias
              e metodologias para entregar soluções cada vez melhores.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-2xl font-bold text-primary">3+</h4>
                <p className="text-muted-foreground">Anos de experiência</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary">10+</h4>
                <p className="text-muted-foreground">Projetos concluídos</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary">5+</h4>
                <p className="text-muted-foreground">Clientes satisfeitos</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary">15+</h4>
                <p className="text-muted-foreground">Tecnologias dominadas</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <AwardIcon className="text-primary" />
              Formação e Experiência
            </h3>

            <div className="space-y-6">
              {timelineData.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-id={item.id}
                  className={cn(
                    "relative pl-8 border-l-2 border-border pb-6 last:pb-0",
                    item.type === "education"
                      ? "border-primary/40"
                      : "border-primary",
                    visibleItems.includes(item.id)
                      ? "stagger-item-visible"
                      : "stagger-item",
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-primary" />

                  <div className="flex items-center gap-2 mb-2">
                    {item.type === "education" ? (
                      <GraduationCapIcon size={18} className="text-primary" />
                    ) : (
                      <BriefcaseIcon size={18} className="text-primary" />
                    )}
                    <span className="text-sm font-medium text-primary">
                      {item.year}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="text-muted-foreground mb-2">{item.location}</p>
                  <p className="text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
