const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50 bg-muted/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2024 Miten Nakum. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;