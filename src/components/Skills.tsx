import { useEffect, useRef, useState } from "react";
import { Code2, Database, Wrench, Terminal } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "C", "C++", "Java"],
  },
  {
    icon: Terminal,
    title: "Web Development",
    skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Flask"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Firebase", "Linux", "REST APIs"],
  },
];

export const Skills = () => {
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
    <section id="skills" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Technical <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-secondary border border-border text-sm hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Plus: <span className="text-primary">Machine Learning basics</span> and{" "}
            <span className="text-primary">OpenCV</span>
          </p>
        </div>
      </div>
    </section>
  );
};
