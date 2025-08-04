import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Figma } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  figmaLink: string;
  onClick: () => void;
}

const ProjectCard = ({ title, description, image, tags, figmaLink, onClick }: ProjectCardProps) => {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-surface/50 backdrop-blur-sm"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-surface/90 backdrop-blur-sm rounded-full p-2">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs bg-primary text-primary-foreground border-primary hover:bg-primary/90 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="pt-2 border-t border-border/50">
          <a 
            href={figmaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Figma className="h-4 w-4" />
            View in Figma
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;