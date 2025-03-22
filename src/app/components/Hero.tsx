"use client";

import { ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <span className="px-3 py-1 bg-accent text-primary rounded-full text-sm font-medium inline-block mb-6">
              Desenvolvedor Fullstack
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
            Criando experiências digitais{" "}
            <span className="text-primary">extraordinárias</span>
          </h1>

          <p
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Desenvolvedor fullstack especializado em criar aplicações web
            modernas e funcionais, combinando design excepcional com código de
            alta qualidade.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button
              size="lg"
              className="rounded-full px-8 font-medium"
              onClick={() => router.push("#projects")}
            >
              Ver Projetos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 font-medium"
              onClick={() => router.push("#contact")}
            >
              Entrar em Contato
            </Button>
          </div>
        </div>

        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#projects"
            className="flex flex-col items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="mb-2">Rolar para baixo</span>
            <ArrowDownIcon size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
