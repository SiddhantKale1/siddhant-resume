import { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar, Award, BookOpen, MapPin } from "lucide-react";

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
    <section id="education" ref={sectionRef} className="py-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium">
              Academic Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Education &amp; <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Academics</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Formal technical education in Computer Science and Information Technology.
          </p>
        </div>

        {/* Education Card */}
        <div
          className={`relative bg-card/90 backdrop-blur-md border border-border rounded-2xl p-6 sm:p-10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary via-cyan-400 to-blue-600" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Bachelor of Engineering in Information Technology
                </h3>
                <p className="text-lg text-primary font-medium mt-1">
                  Vidyavardhini's College of Engineering and Technology (VCET)
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    University of Mumbai, India
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    2023 – 2027 (Expected Graduation)
                  </span>
                </div>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="flex flex-col items-start md:items-end justify-center bg-secondary/50 border border-border rounded-xl p-4 min-w-[140px]">
              <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Latest Sem</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-3xl font-extrabold text-primary">7.17</span>
                <span className="text-xs text-muted-foreground font-semibold">/ 10 CGPA</span>
              </div>
              <span className="text-[11px] text-emerald-400 font-medium mt-1 flex items-center gap-1">
                <Award className="w-3 h-3" /> First Class Distinction
              </span>
            </div>
          </div>

          {/* Key Coursework and Focus Areas */}
          <div className="pt-6 grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-primary" /> Core Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures & Algorithms",
                  "Database Management Systems (DBMS)",
                  "Operating Systems",
                  "Computer Networks",
                  "Object-Oriented Programming (OOP)",
                  "Software Engineering",
                  "Artificial Intelligence",
                ].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 rounded-lg bg-secondary/70 border border-border text-xs text-foreground/90 font-medium"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-primary" /> Academic Focus
              </h4>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Specializing in distributed backend systems, cybersecurity architectures, and applied computer vision. Actively participating in technical hackathons, departmental coding initiatives, and hands-on laboratory research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
