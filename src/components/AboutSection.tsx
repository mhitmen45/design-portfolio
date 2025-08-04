import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  const skills = [
    "Figma",
    "UI Design",
    "Wireframing & Prototyping",
    "Web & Mobile Design",
    "User Research",
    "Design Systems"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        
        <Card className="p-8 lg:p-12 shadow-xl border-0 bg-surface/50 backdrop-blur-sm">
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-start">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={profilePhoto}
                  alt="Miten Nakum"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a UI/UX designer with experience designing for HR, CRM, wellness, and 
                  e-commerce platforms. I value thoughtful design, scalable systems, and 
                  intuitive user flows.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I blend creativity with systems thinking to create clean, usable, and 
                  engaging interfaces that prioritize user experience above all else.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-colors shadow-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;