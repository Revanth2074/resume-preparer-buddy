import { Mail, MapPin, Github, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <div className="flex flex-col items-center text-center animate-fade-in">
      <Avatar className="w-32 h-32 mb-4">
        <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80" />
        <AvatarFallback>BB</AvatarFallback>
      </Avatar>
      
      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
        Budiga Bhargavi
      </h1>
      <p className="text-xl text-slate-600 mb-4">B.Tech (Under graduate)</p>
      <p className="text-slate-600 max-w-2xl mb-6">
        A passionate student with a creative mindset, dedicated to designing smart solutions 
        that bridge the physical and digital worlds.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
        <a href="mailto:budigabhargavi2280@gmail.com" 
           className="contact-link flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
          <Mail size={16} />
          budigabhargavi2280@gmail.com
        </a>
        <a href="tel:9966082377" 
           className="contact-link flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
          <Phone size={16} />
          9966082377
        </a>
        <div className="contact-link flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
          <MapPin size={16} />
          Khammam, India
        </div>
        <a href="https://github.com/Bhargavi2280" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="contact-link flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
          <Github size={16} />
          github.com/Bhargavi2280
        </a>
      </div>
    </div>
  );
};

export default Header;