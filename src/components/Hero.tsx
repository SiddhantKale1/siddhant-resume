import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, MapPin, FileDown, ArrowRight } from "lucide-react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden px-6 sm:px-12 md:px-16 pt-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Clean, Bold & Spacious content */}
        <div className="relative z-10 animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/80 border border-border text-muted-foreground text-xs font-mono font-medium">
              Software Engineer &bull; Backend &bull; Cloud &bull; AI
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-foreground leading-[1.05] mb-6">
            Siddhant Kale
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground font-light mb-8 max-w-xl leading-relaxed">
            Software Engineer specializing in scalable Python backends, distributed systems, and computer vision.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-10 text-sm font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Mumbai, India</span>
            </div>
            <a
              href="mailto:siddhantkalework@gmail.com"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>siddhantkalework@gmail.com</span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 flex-wrap items-center">
            {/* Download Resume Button */}
            <a
              href="/Siddhant_Kale_Resume.pdf"
              download="Siddhant_Kale_Resume.pdf"
              className="inline-flex items-center px-5 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base shadow-sm transition"
            >
              <FileDown className="w-4 h-4 mr-2" />
              Download Resume
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/siddhant-kale-301807318/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 rounded-lg border border-border hover:bg-secondary text-foreground font-medium text-base transition"
            >
              <Linkedin className="w-4 h-4 mr-2 text-primary" />
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SiddhantKale1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 rounded-lg border border-border hover:bg-secondary text-foreground font-medium text-base transition"
            >
              <Github className="w-4 h-4 mr-2 text-primary" />
              GitHub
            </a>

            {/* View Projects */}
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary font-medium text-base"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-2 text-primary" />
            </Button>
          </div>
        </div>

        {/* Right side - Open visual space with subtle aesthetic ambient glow */}
        <div className="hidden md:flex items-center justify-center relative pointer-events-none">
          <div className="relative w-full h-[500px] flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-40 transition-transform duration-300 ease-out"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
            >
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
            </div>

            {/* Subtle floating accent ring */}
            <div className="relative w-72 h-72 rounded-full border border-primary/20 flex items-center justify-center">
              <div className="w-56 h-56 rounded-full border border-border/40 flex items-center justify-center">
                <span className="font-mono text-xs text-muted-foreground/60 tracking-widest uppercase">
                  Systems &bull; Cloud &bull; Vision
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
