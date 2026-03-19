"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projetos", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Sobre", href: "#about" },
  { name: "Contato", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div
        className={cn(
          "transition-all duration-700 ease-out",
          isScrolled
            ? "mt-4 px-2 py-2 bg-white/[0.04] backdrop-blur-2xl border border-white/[0.06] rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "mt-6 px-4 py-3",
        )}
      >
        <div className="flex items-center gap-8">
          <a href="#home" className="text-lg font-bold tracking-tight px-2">
            L<span className="text-gradient">R</span>
          </a>

          {/* Desktop pill nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={cn(
                        "relative px-4 py-1.5 text-[13px] font-medium rounded-full transition-all duration-300",
                        isActive
                          ? "text-primary-foreground bg-primary"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile trigger */}
          <button
            className="md:hidden text-foreground/70 hover:text-foreground transition-colors p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <XIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-background/98 backdrop-blur-2xl"
          onClick={() => setMobileMenuOpen(false)}
        />
        <nav className="relative flex flex-col items-center justify-center h-full gap-6">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-3xl font-bold text-foreground/60 hover:text-gradient transition-all duration-300 animate-fade-up",
              )}
              style={{ animationDelay: `${index * 0.08}s` }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
