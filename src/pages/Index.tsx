import Header from "@/components/Header";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Languages from "@/components/Languages";
import Interests from "@/components/Interests";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <Header />
          <Education />
          <Skills />
          <Projects />
          <Certificates />
          <Languages />
          <Interests />
        </div>
      </div>
    </div>
  );
};

export default Index;