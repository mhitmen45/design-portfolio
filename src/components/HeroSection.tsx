import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              Miten Nakum
            </h1>
            <p className="text-xl text-accent font-medium">
              Design to Innovate
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            I'm a passionate UI/UX designer crafting user-first experiences that balance 
            aesthetics, function, and innovation. My work spans enterprise tools, mobile-first 
            experiences, and platform redesigns—each rooted in user empathy and creative 
            problem-solving.
          </p>
          
          <Button 
            onClick={scrollToProjects}
            size="lg" 
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={heroImage}
              alt="Design Innovation"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          
          {/* Floating design elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary/30 rounded-full blur-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;