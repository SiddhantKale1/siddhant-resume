import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

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
    <section className="min-h-screen flex items-center relative overflow-hidden px-8 md:px-16">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="relative z-10 animate-fade-in">
          <div className="mb-8">
            <span className="inline-block px-5 py-2.5 rounded-full bg-border/20 text-muted-foreground text-sm font-medium">
              Portfolio • Interactive • Modern
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-6 text-foreground leading-tight">
            Siddhant Kale
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            IT Engineering Student | Aspiring Full-Stack Developer
          </p>

          <div className="flex items-center gap-6 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Mumbai, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>siddhant.233184102@vcet.edu.in</span>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="flex gap-4 mb-12 flex-wrap">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/siddhant-kale-301807318/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-md bg-foreground text-background hover:bg-foreground/90 font-medium text-lg transition"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SiddhantKale1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-md border border-border/50 hover:bg-border/10 font-medium text-lg transition"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>

            {/* View Projects */}
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 font-medium"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
          </div>
        </div>

        {/* Right side - 3D Visual placeholder */}
        <div className="hidden md:flex items-center justify-center relative">
          <div className="relative w-full h-[500px] flex items-center justify-center">
            {/* Animated background glow */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-40" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow rounded-full blur-3xl opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
