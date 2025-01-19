import { FolderGit2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Blind Stick using Arduino",
      period: "08/2023 - 09/2023",
      description: "Created an assistive device for visually impaired individuals"
    },
    {
      title: "Internet clock using 16X32 LCD Display",
      period: "06/2024 - 07/2024",
      description: "Developed a digital clock with internet connectivity"
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="section-title flex items-center gap-2">
        <FolderGit2 className="w-5 h-5" />
        PERSONAL PROJECTS
      </h2>
      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.title} className="hover-scale">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-base">{project.title}</CardTitle>
                <span className="text-sm text-slate-500">{project.period}</span>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;