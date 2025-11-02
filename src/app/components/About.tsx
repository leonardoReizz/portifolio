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
  // {
  //   id: -1,
  //   year: "10/2025 - Presente",
  //   title: "Sysko - Co-Founder",
  //   location: "São Paulo, SP ( Remoto )",
  //   description:
  //     "O Sysko é uma plataforma de deploy automatizado que permite que desenvolvedores publiquem seus aplicativos diretamente a partir do GitHub, de forma simples e rápida",
  //   type: "experience",
  // },
  {
    id: 0,
    year: "03/2025 - Presente ( Contrato )",
    title: "Fulltrader - Desenvolvedor Fullstack",
    location: "São Paulo, SP ( Remoto )",
    description:
      "Focado no desenvolvimento de novos negócios dentro da empresa, trabalhando na criação de soluções do zero — desde a ideia até a validação do MVP. Tenho atuado muito próximo das áreas de produto e tecnologia. Uso principalmente React, Node.js, WebSocket e PostgreSQL no dia a dia para dar vida a essas ideias.",
    type: "experience",
  },
  {
    id: 1,
    year: "06/2022 - Presente ( CLT )",
    title: "Jack Experts - Desenvolvedor Fullstack Pleno",
    location: "Brasília, DF ( Remoto )",
    description:
      "Atuação no desenvolvimento e manutenção de aplicações web modernas e escaláveis, utilizando Vite, React e NestJS. Responsável pela criação de APIs e microsserviços de alta performance em Node.js e NestJS, além do desenvolvimento de soluções em GoLang voltadas para gerenciamento e automação de recursos em clusters Kubernetes, com suporte a mais de 500 nodes ativos. Experiência em integrações de pagamento com Stripe, definição de arquiteturas distribuídas e mentoria técnica de estagiários, promovendo boas práticas de programação e qualidade de código.",
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
                <h4 className="text-2xl font-bold text-primary">4+</h4>
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
                <h4 className="text-2xl font-bold text-primary">10+</h4>
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
                  // ref={(el: HTMLDivElement | null) =>
                  //   (itemRefs.current[index] = el)
                  // }
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
