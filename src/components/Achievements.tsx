import { useEffect, useRef, useState } from "react";
import { Award, Users, Heart, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Certifications",
    items: ["Python for Everybody", "Web Development Bootcamp"],
  },
  {
    icon: Users,
    title: "Community",
    items: ["Coding Club Member", "Developer Student Club"],
  },
  {
    icon: Heart,
    title: "Interests",
    items: ["Coding Challenges", "AI & Automation", "Fitness & Gym", "UI Design"],
  },
];

const softSkills = [
  "Teamwork & Collaboration",
  "Problem Solving",
  "Communication",
  "Time Management",
  "Adaptability",
  "Creativity",
];

export const Achievements = () => {
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
    <section id="achievements" ref={sectionRef} className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Achievements & <span className="text-primary">More</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-6">
                <achievement.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{achievement.title}</h3>
              <ul className="space-y-2">
                {achievement.items.map((item) => (
                  <li key={item} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h3 className="text-3xl font-bold text-center mb-8">
            Soft <span className="text-primary">Skills</span>
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
