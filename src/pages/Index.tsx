import Header from "@/components/Header";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Languages from "@/components/Languages";
import Interests from "@/components/Interests";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen portfolio-container">
      <div className="container max-w-6xl mx-auto py-8 px-4">
        <Card className="backdrop-blur-md bg-white/80 shadow-xl rounded-xl p-8 portfolio-content">
          <Header />
          
          <Tabs defaultValue="about" className="mt-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-1/2 mx-auto">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-8 space-y-8 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8">
                <Languages />
                <Interests />
              </div>
              <Certificates />
            </TabsContent>

            <TabsContent value="skills" className="mt-8 animate-fade-in">
              <Skills />
            </TabsContent>

            <TabsContent value="projects" className="mt-8 animate-fade-in">
              <Projects />
            </TabsContent>

            <TabsContent value="education" className="mt-8 animate-fade-in">
              <Education />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Index;