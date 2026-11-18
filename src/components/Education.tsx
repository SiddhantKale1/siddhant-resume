import { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar, Award, BookOpen, MapPin } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 md:px-12 border-t border-border/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="text-xs font-mono text-primary font-semibold tracking-wider uppercase mb-2">
            // 03 &bull; Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Education &amp; Credentials
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-sm sm:text-base leading-relaxed">
            Formal technical education in Computer Science and Information Technology.
          </p>
        </div>

        {/* Education Spec Sheet */}
        <div className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-primary/40 transition-colors">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/60">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-secondary text-primary border border-border/60">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Bachelor of Engineering in Information Technology
                </h3>
                <p className="text-sm sm:text-base text-primary font-mono mt-1">
                  Vidyavardhini College of Engineering, Mumbai University
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground mt-2">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    Mumbai, India
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    Expected Graduation: 2027
                  </span>
                </div>
              </div>
            </div>

            {/* CGPA Spec Box */}
            <div className="flex flex-col items-start md:items-end justify-center bg-secondary/50 border border-border/70 rounded-lg p-3.5 min-w-[140px] font-mono">
              <span className="text-[11px] text-muted-foreground uppercase tracking-wider">Latest Sem</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-bold text-foreground">7.17</span>
                <span className="text-xs text-muted-foreground">/ 10 CGPA</span>
              </div>
              <span className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                First Class Standing
              </span>
            </div>
          </div>

          {/* Key Coursework and Focus Areas */}
          <div className="pt-6 grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-2 mb-3">
                <BookOpen className="w-3.5 h-3.5 text-primary" /> Core CS Coursework
              </h4>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {[
                  "Data Structures & Algorithms",
                  "Database Management Systems (DBMS)",
                  "Operating Systems",
                  "Computer Networks",
                  "Object-Oriented Programming (OOP)",
                  "Artificial Intelligence",
                ].map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded bg-secondary/70 border border-border/60 text-foreground/90"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-2 mb-3">
                <Award className="w-3.5 h-3.5 text-primary" /> Engineering Focus
              </h4>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Specializing in distributed backend microservices, Linux telemetry agents, and applied computer vision. Actively deploying end-to-end architectures and exploring low-latency system optimizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
