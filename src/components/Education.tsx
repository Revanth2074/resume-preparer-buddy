import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="mb-8">
      <h2 className="section-title flex items-center gap-2">
        <GraduationCap className="w-5 h-5" />
        EDUCATION
      </h2>
      <div className="space-y-4">
        <div className="hover-scale">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-slate-800">B.Tech</h3>
              <p className="text-slate-600">KL University, Guntur A.P</p>
              <ul className="text-sm text-slate-600 mt-1 list-disc list-inside">
                <li>Data structures</li>
                <li>Database Management Systems</li>
                <li>Internet of things</li>
              </ul>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-600">07/2023 - 03/2027</p>
              <p className="text-sm font-medium text-primary">GPA: 9.08</p>
            </div>
          </div>
        </div>
        
        <div className="hover-scale">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-slate-800">Intermediate</h3>
              <p className="text-slate-600">Sri Chaitanya Junior College, Khammam</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-600">06/2020 - 04/2022</p>
              <p className="text-sm font-medium text-primary">95.9%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;