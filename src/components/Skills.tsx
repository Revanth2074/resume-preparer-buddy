import { Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    "C language",
    "python",
    "java",
    "html",
    "web development",
    "css"
  ];

  return (
    <section className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <h2 className="section-title flex items-center gap-2">
        <Code2 className="w-5 h-5" />
        SKILLS
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge 
            key={skill} 
            variant="secondary" 
            className="skill-badge cursor-pointer"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default Skills;