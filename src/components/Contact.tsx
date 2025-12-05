import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">
          Let's <span className="text-primary">Connect</span>
        </h2>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Currently seeking internship opportunities in full-stack or AI/ML domains. 
          Feel free to reach out for collaborations or just a friendly chat!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:siddhantkale@email.com"
            className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
          >
            <Mail className="w-8 h-8 text-primary mb-4 mx-auto group-hover:animate-bounce" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">siddhantkale@email.com</p>
          </a>

          <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <MapPin className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">Mumbai, India</p>
          </div>
        </div>

        <div className="flex gap-6 justify-center mb-12">
          <a
            href="https://github.com/siddhantkale"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/siddhantkale"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90"
          onClick={() => window.open("mailto:siddhantkale@email.com")}
        >
          <Mail className="w-4 h-4 mr-2" />
          Send Message
        </Button>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © 2025 Siddhant Kale — All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};
