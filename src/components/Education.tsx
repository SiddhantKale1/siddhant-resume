import { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.E. in Information Technology",
    institution: "Vidyavardhini's College of Engineering and Technology",
    university: "Mumbai University",
    period: "2023 – 2027 (Expected)",
    description: "Focused on full-stack development, AI/ML, and software engineering.",
  },
];

export const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="text-primary">Education</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative pl-20 pb-12 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background animate-glow" />

              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-lg text-foreground mb-1">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.university}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-primary mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{edu.period}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
