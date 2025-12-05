import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Face Recognition Attendance System",
    description:
      "Built using Flask, OpenCV, and face_recognition library. Integrated with MongoDB for student data storage and attendance tracking. Designed a clean, responsive HTML UI for easy interaction.",
    tech: ["Flask", "OpenCV", "MongoDB", "Python"],
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "SplitEase – Bill Splitter App",
    description:
      "Inspired by Splitwise, aimed at simplifying expense sharing for hostel students. Developed with React + Node.js + MongoDB. Features include real-time balance updates and group expense summaries.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    gradient: "from-purple-500 to-pink-500",
  },

  {
    title: "Portfolio Website",
    description:
      "Fully responsive red & black themed personal site with animations and separate pages for Skills, Education, and Contact.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    gradient: "from-red-600 to-orange-500",
  },
];

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary border border-border text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:bg-primary/10"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:bg-primary/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
