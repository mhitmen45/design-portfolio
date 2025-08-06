import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import crmImage from "@/assets/project-crm.jpg";
import hrmsImage from "@/assets/project-hrms.jpg";
import linkedinImage from "@/assets/project-linkedin.jpg";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import wellnessImage from "@/assets/project-wellness.jpg";
import coffeeImage from "@/assets/project-coffee.jpg";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: "crm",
      title: "CRM – Blink CRM",
      shortDescription: "Real estate CRM platform for brokers and agents to manage leads efficiently.",
      description: "Designed a real estate CRM platform used by brokers and agents to manage leads, properties, and deals efficiently.",
      scope: "UI redesign of web + mobile apps",
      features: [
        "Clean dashboard for lead management",
        "Filterable property list with status badges",
        "Smart lead progress tracking and notes",
        "Integrated deal stage pipelines"
      ],
      highlights: [
        "Consistent design system",
        "Shadcn-style card layout",
        "Background color: #F4F4F0",
        "Clean icons, soft shadows, ample padding"
      ],
      image: crmImage,
      tags: ["Web Design", "Mobile Design", "CRM", "Real Estate"],
      figmaLink: "https://www.figma.com/designhttps://www.figma.com/design/drBhgCruJZ5tv7DUOnzE4M/Untitled?node-id=0-1&p=f&t=vkjO32VApNOfKT84-0/crm-blink-project"
    },
    {
      id: "hrms",
      title: "HRMS – Human Resource App",
      shortDescription: "HR management system streamlining attendance, payroll, and reimbursements.",
      description: "Developed the interface for an HR management system streamlining attendance, payroll, and reimbursements.",
      scope: "Web + mobile UI",
      features: [
        "Punch-in dashboard with time tracking",
        "Leave applications and approval flow",
        "Payroll and reimbursement module"
      ],
      highlights: [
        "Home page with punch-in flow as primary CTA",
        "Multi-tab navigation with responsive design",
        "Light UI with vibrant action buttons"
      ],
      image: hrmsImage,
      tags: ["Web Design", "Mobile Design", "HR Tech", "Enterprise"],
      figmaLink: "https://www.figma.com/design/He3PF1xFEizZrcOJuNWAQk/HRMS?t=vkjO32VApNOfKT84-0"
    },
    {
      id: "linkedin",
      title: "LinkedIn Redesign",
      shortDescription: "Concept redesign making LinkedIn cleaner and more user-centric.",
      description: "Reimagined the LinkedIn UI to make it cleaner, more user-centric, and less cluttered.",
      scope: "Concept redesign of LinkedIn's home feed, profile, and messaging",
      features: [
        "Reduced visual noise by using space, clear CTAs",
        "Sidebar menus with collapsible components",
        "Sleek, card-based post layouts"
      ],
      highlights: [
        "Concept Project",
        "User-centric approach",
        "Clean visual hierarchy",
        "Improved information architecture"
      ],
      image: linkedinImage,
      tags: ["Concept Design", "Social Media", "UI Redesign", "UX Research"],
      figmaLink: "https://www.figma.com/design/8TbduGehuRycan8BoVGlX8/linkedin-design?t=vkjO32VApNOfKT84-0"
    },
    {
      id: "ecommerce",
      title: "E-Commerce – Dope Lifestyle",
      shortDescription: "Streetwear e-commerce platform with bold visuals and user ease.",
      description: "Designed a streetwear e-commerce platform with a focus on bold visuals and user ease.",
      scope: "Web design for shopping flow",
      features: [
        "Bold product visuals",
        "Category filters, product preview, hover carts",
        "Clean checkout flow"
      ],
      highlights: [
        "Black-and-white dominant theme with accent highlights",
        "User-focused mobile-friendly layout",
        "Bold visual design approach"
      ],
      image: ecommerceImage,
      tags: ["E-commerce", "Web Design", "Fashion", "Visual Design"],
      figmaLink: "https://www.figma.com/design/X9lCxS0W9hhKREl0c5VE88/dope-lifestyle?t=vkjO32VApNOfKT84-0"
    },
    {
      id: "wellness",
      title: "Wellness Questionnaire",
      shortDescription: "Health assessment form and email template for health-tech platform.",
      description: "Designed a wellness assessment form and accompanying email template for a health-tech platform.",
      scope: "Mobile-first form UI + responsive email",
      features: [
        "Clean, single-question-per-screen format",
        "Friendly illustrations and progress bar",
        "Email with clean grid layout, CTA, and responsive design"
      ],
      highlights: [
        "Mobile-first approach",
        "User-friendly questionnaire flow",
        "Integrated email design",
        "Health-tech focused"
      ],
      image: wellnessImage,
      tags: ["Mobile Design", "Health Tech", "Forms", "Email Design"],
      figmaLink: "https://www.figma.com/design/CYfJCCNvMta4Wm9PEihD5I/wellness-app?t=vkjO32VApNOfKT84-0"
    },
    {
      id: "coffee",
      title: "Coffee Shop Mobile UI",
      shortDescription: "Playful and minimal mobile UI for coffee shop ordering app.",
      description: "Created a playful and minimal mobile UI for a fictional coffee shop ordering app.",
      scope: "Mobile-only",
      features: [
        "Home screen with top picks and search",
        "Product details with quantity selector",
        "Checkout with visual confirmation"
      ],
      highlights: [
        "Rounded cards, latte-tone background colors",
        "Cute illustrations, soft shadows, typography-led",
        "Playful and approachable design"
      ],
      image: coffeeImage,
      tags: ["Mobile Design", "Food & Beverage", "Playful Design", "UI Design"],
      figmaLink: "https://www.figma.com/design/GvYgeDE6mjkxtlMcWgvYaC/coffee-shop-assignment?node-id=510-6020&p=f&t=vkjO32VApNOfKT84-0"
    }
  ];

  if (selectedProject) {
    const project = projects.find(p => p.id === selectedProject);
    if (project) {
      return (
        <ProjectDetail
          project={project}
          onBack={() => setSelectedProject(null)}
        />
      );
    }
  }

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my design work across various industries and platforms, 
            each project crafted with attention to user needs and business goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.shortDescription}
              image={project.image}
              tags={project.tags}
              figmaLink={project.figmaLink}
              onClick={() => setSelectedProject(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;