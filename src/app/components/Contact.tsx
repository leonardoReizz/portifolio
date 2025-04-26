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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Contact() {
  const [formVisible, setFormVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

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

    // Simulate form submission
    toast.success("Mensagem enviada!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setFormVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <MailIcon className="h-5 w-5" />,
      title: "Email",
      value: "amarantee.reis@gmail.com",
      link: "mailto:amarantee.reis@gmail.com",
    },
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      title: "Telefone",
      value: "+55 (31) 99899-5644",
      link: "tel:+5531998995644",
    },
    {
      icon: <MapPinIcon className="h-5 w-5" />,
      title: "Localização",
      value: "Minas Gerais, Brasil",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedinIcon />,
      url: "https://www.linkedin.com/in/leonardoreiss/",
      label: "LinkedIn",
    },
    {
      icon: <GithubIcon />,
      url: "https://github.com/leonardoReizz",
      label: "GitHub",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Contato
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Vamos <span className="text-primary">Conversar</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Estou aberto a oportunidades de trabalho e colaborações. Entre em
            contato comigo pelos canais abaixo ou preencha o formulário.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {item.title}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-card hover:bg-secondary p-3 rounded-full text-foreground/80 hover:text-primary transition-colors border border-border/50"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={formRef}
            className={cn(
              "bg-card p-8 rounded-2xl border border-border/50 shadow-subtle transition-all duration-700 ease-apple",
              formVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10",
            )}
          >
            <h3 className="text-xl font-bold mb-6">Envie uma mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
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
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Assunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Como posso ajudar?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Sua mensagem..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="resize-none bg-background/50"
                />
              </div>

              <Button type="submit" className="w-full gap-2">
                Enviar Mensagem
                <SendIcon size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
