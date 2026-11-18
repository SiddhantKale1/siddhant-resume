import { useEffect, useRef, useState } from "react";
import { Code2, Database, Cloud, Wrench, Zap, GitBranch } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    color: "from-blue-500 to-cyan-500",
    skills: ["Python", "JavaScript", "C", "C++", "Java", "HTML5", "CSS3"],
  },
  {
    icon: Zap,
    title: "Web & Frameworks",
    color: "from-purple-500 to-pink-500",
    skills: ["React.js", "Flask", "FastAPI", "Node.js", "Express.js"],
  },
  {
    icon: Database,
    title: "Databases",
    color: "from-green-500 to-emerald-500",
    skills: ["MongoDB", "MySQL", "SQLite"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "from-orange-500 to-red-500",
    skills: ["AWS", "Google Cloud", "Docker", "Git", "GitHub"],
  },
  {
    icon: Wrench,
    title: "Tools & APIs",
    color: "from-indigo-500 to-violet-500",
    skills: ["OpenCV", "REST APIs", "Firebase", "Postman", "Linux"],
  },
  {
    icon: GitBranch,
    title: "CS Fundamentals",
    color: "from-pink-500 to-rose-500",
    skills: ["Data Structures", "DBMS", "OOP", "Operating Systems", "Computer Networks"],
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
    <section id="skills" ref={sectionRef} className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Technical <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive skillset built through hands-on experience with modern technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                    {category.skills.length}
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Programming Languages", value: "7+" },
            { label: "Frameworks & Tools", value: "15+" },
            { label: "Databases", value: "3+" },
            { label: "Cloud Platforms", value: "2+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
