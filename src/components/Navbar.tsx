import { useState, useEffect } from "react";
import { Menu, X, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          <span className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-mono text-sm font-bold group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            SK
          </span>
          <span className="hidden sm:inline">
            Siddhant <span className="text-primary">Kale</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-secondary/40 border border-border/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-card/60 rounded-full transition-all duration-200"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/SiddhantKale1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-card rounded-lg border border-transparent hover:border-border transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/siddhant-kale-301807318/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-card rounded-lg border border-transparent hover:border-border transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="/Siddhant_Kale_Resume.pdf"
            download="Siddhant_Kale_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            <FileDown className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="/Siddhant_Kale_Resume.pdf"
            download="Siddhant_Kale_Resume.pdf"
            className="p-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium"
          >
            <FileDown className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-muted-foreground hover:text-foreground focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-card/95 backdrop-blur-lg border-b border-border px-6 py-6 animate-fade-in">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-left py-2 text-base font-medium text-foreground hover:text-primary transition-colors border-b border-border/40"
              >
                {link.name}
              </button>
            ))}
            <div className="flex gap-4 pt-4 mt-2">
              <a
                href="/Siddhant_Kale_Resume.pdf"
                download="Siddhant_Kale_Resume.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
              >
                <FileDown className="w-4 h-4" />
                Download CV
              </a>
              <a
                href="mailto:siddhantkalework@gmail.com"
                className="p-2.5 rounded-lg border border-border bg-secondary text-foreground hover:text-primary"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
