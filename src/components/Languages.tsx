import { Languages as LanguagesIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Languages = () => {
  const languages = [
    { name: "English", level: "Full Professional Proficiency", progress: 100 },
    { name: "Telugu", level: "Full Professional Proficiency", progress: 100 },
    { name: "Hindi", level: "Limited Working Proficiency", progress: 70 },
  ];

  return (
    <section className="mb-8">
      <h2 className="section-title flex items-center gap-2">
        <LanguagesIcon className="w-5 h-5" />
        LANGUAGES
      </h2>
      <div className="space-y-4">
        {languages.map((language) => (
          <div key={language.name} className="hover-scale">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-slate-700">{language.name}</span>
              <span className="text-sm text-slate-500">{language.level}</span>
            </div>
            <Progress value={language.progress} className="h-2" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;