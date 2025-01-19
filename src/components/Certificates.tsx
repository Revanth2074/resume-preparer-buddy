import { Award } from "lucide-react";

const Certificates = () => {
  return (
    <section className="mb-8">
      <h2 className="section-title flex items-center gap-2">
        <Award className="w-5 h-5" />
        CERTIFICATES
      </h2>
      <ul className="space-y-2 text-slate-700">
        <li className="hover-scale">• Sales Force AI associate</li>
        <li className="hover-scale">• Intro AI & ML from Coursera</li>
      </ul>
    </section>
  );
};

export default Certificates;