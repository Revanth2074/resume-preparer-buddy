import { Mail, MapPin, Github } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold text-slate-800">Budiga Bhargavi</h1>
        <p className="text-lg text-slate-600 mt-1">B.Tech (Under graduate)</p>
        <p className="text-sm text-slate-600 mt-2 max-w-md">
          A student with a passion for designing smart solutions that bridge the physical and digital worlds.
        </p>
      </div>
      <div className="flex flex-col gap-2 text-sm text-slate-600">
        <a href="mailto:budigabhargavi2280@gmail.com" className="flex items-center gap-2 hover:text-primary">
          <Mail size={16} />
          budigabhargavi2280@gmail.com
        </a>
        <a href="tel:9966082377" className="flex items-center gap-2 hover:text-primary">
          <span className="w-4 h-4">📱</span>
          9966082377
        </a>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          Khammam, India
        </div>
        <a href="https://github.com/Bhargavi2280" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
          <Github size={16} />
          github.com/Bhargavi2280
        </a>
      </div>
    </div>
  );
};

export default Header;