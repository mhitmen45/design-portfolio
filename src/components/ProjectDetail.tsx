import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Target, Lightbulb, Figma } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  scope: string;
  features: string[];
  highlights: string[];
  image: string;
  tags: string[];
  figmaLink: string;
}

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail = ({ project, onBack }: ProjectDetailProps) => {
  return (
    <section className="py-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 hover:bg-accent/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
          
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary text-primary-foreground">
                  {tag}
                </Badge>
              ))}
            </div>
            
            {/* Figma Link */}
            <div className="p-4 bg-surface/30 rounded-lg border border-border/20">
              <a 
                href={project.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-accent hover:text-accent/80 transition-colors font-medium"
              >
                <Figma className="h-5 w-5" />
                View Design in Figma
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {/* Project Image */}
          <Card className="overflow-hidden border-0 shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover"
            />
          </Card>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Scope & Features */}
            <Card className="p-8 border-0 shadow-lg bg-surface/50 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-semibold">Project Scope</h3>
                </div>
                <p className="text-muted-foreground text-lg">{project.scope}</p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Key Features</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Design Highlights */}
            <Card className="p-8 border-0 shadow-lg bg-surface/50 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Lightbulb className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-semibold">Design Highlights</h3>
                </div>
                
                <ul className="space-y-3">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          {/* Back Button */}
          <div className="text-center pt-8">
            <Button
              onClick={onBack}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl"
            >
              View More Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;