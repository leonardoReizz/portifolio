"use client";

import { GithubIcon, LinkedinIcon } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.04]">
      {/* Gradient line on top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <a href="#home" className="text-lg font-bold tracking-tight">
              Leonardo<span className="text-gradient">Reis</span>
            </a>
            <span className="hidden md:block w-px h-4 bg-white/[0.08]" />
            <p className="text-xs text-muted-foreground/40">
              Criando experiencias digitais extraordinarias
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/leonardoReizz"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground/30 hover:text-primary transition-colors duration-300"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/leonardoreiss/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground/30 hover:text-primary transition-colors duration-300"
            >
              <LinkedinIcon size={16} />
            </a>
            <span className="w-px h-4 bg-white/[0.06]" />
            <span className="text-[11px] text-muted-foreground/30">
              &copy; {currentYear}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
