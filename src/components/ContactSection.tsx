import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Download, Mail, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleDownloadResume = () => {
    toast({
      title: "Resume download",
      description: "Resume download would be triggered here.",
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to create something amazing? Let's discuss your project and 
            bring your ideas to life through thoughtful design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-0 shadow-xl bg-surface/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-muted"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-muted"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="border-muted resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl text-lg font-medium"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>

          {/* Contact Info & Resume */}
          <div className="space-y-8">
            <Card className="p-8 border-0 shadow-xl bg-surface/50 backdrop-blur-sm">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Get My Resume</h3>
                <p className="text-muted-foreground">
                  Download my detailed resume to learn more about my experience, 
                  skills, and past projects.
                </p>
                <Button
                  onClick={handleDownloadResume}
                  variant="outline"
                  className="w-full border-accent/20 hover:bg-accent/10 py-3 rounded-xl"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-xl bg-surface/50 backdrop-blur-sm">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Connect With Me</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:miten.nakum@example.com"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>miten.nakum@example.com</span>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/miten-nakum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;