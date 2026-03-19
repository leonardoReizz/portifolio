"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  SendIcon,
  GithubIcon,
  LinkedinIcon,
  ArrowUpRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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

  const contactLinks = [
    {
      icon: <MailIcon className="h-5 w-5" />,
      label: "Email",
      value: "amarantee.reis@gmail.com",
      href: "mailto:amarantee.reis@gmail.com",
    },
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      label: "Telefone",
      value: "+55 (47) 992558338",
      href: "tel:+553147992558338",
    },
    {
      icon: <MapPinIcon className="h-5 w-5" />,
      label: "Localizacao",
      value: "Minas Gerais, Brasil",
      href: null,
    },
    {
      icon: <LinkedinIcon className="h-5 w-5" />,
      label: "LinkedIn",
      value: "leonardoreiss",
      href: "https://www.linkedin.com/in/leonardoreiss/",
    },
    {
      icon: <GithubIcon className="h-5 w-5" />,
      label: "GitHub",
      value: "leonardoReizz",
      href: "https://github.com/leonardoReizz",
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="section-padding relative">
      <div className="container">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
            Contato
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>
          <p className="text-muted-foreground max-w-lg text-base">
            Estou aberto a oportunidades de trabalho e colaboracoes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-6">
          {/* Contact links - left side */}
          <div className="lg:col-span-2 space-y-3">
            {contactLinks.map((item, index) => {
              const content = (
                <div
                  className={cn(
                    "spotlight-card p-4 flex items-center gap-4 group stagger-item",
                    visible && "stagger-item-visible",
                  )}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors truncate">
                      {item.value}
                    </p>
                  </div>
                  {item.href && (
                    <ArrowUpRightIcon
                      size={14}
                      className="text-muted-foreground/20 group-hover:text-primary transition-all duration-300 shrink-0"
                    />
                  )}
                </div>
              );

              if (item.href) {
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                );
              }
              return <div key={index}>{content}</div>;
            })}
          </div>

          {/* Form - right side */}
          <div
            className={cn(
              "lg:col-span-3 spotlight-card p-6 md:p-8 transition-all duration-700",
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10",
            )}
            style={{ transitionDelay: "0.3s" }}
          >
            <h3 className="text-lg font-bold mb-6">Envie uma mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-widest mb-1.5 block"
                  >
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/[0.02] border-white/[0.06] focus:border-primary/40 rounded-xl h-11 text-sm placeholder:text-muted-foreground/30 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-widest mb-1.5 block"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/[0.02] border-white/[0.06] focus:border-primary/40 rounded-xl h-11 text-sm placeholder:text-muted-foreground/30 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-widest mb-1.5 block"
                >
                  Assunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Como posso ajudar?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white/[0.02] border-white/[0.06] focus:border-primary/40 rounded-xl h-11 text-sm placeholder:text-muted-foreground/30 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-widest mb-1.5 block"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Sua mensagem..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="resize-none bg-white/[0.02] border-white/[0.06] focus:border-primary/40 rounded-xl text-sm placeholder:text-muted-foreground/30 transition-colors"
                />
              </div>

              <Button
                type="submit"
                className="w-full glow-button rounded-xl h-11 font-medium text-sm gap-2"
              >
                Enviar Mensagem
                <SendIcon size={14} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
