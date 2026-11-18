import { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Send, FileDown, ArrowUp, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

export const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) {
      toast.error("Please provide at least your email and a message.");
      return;
    }

    const mailtoUrl = `mailto:siddhantkalework@gmail.com?subject=${encodeURIComponent(
      formState.subject || `Message from ${formState.name || "Portfolio Visitor"}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;

    window.open(mailtoUrl, "_blank");
    toast.success("Opening your mail client to send message to Siddhant!");
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 md:px-12 border-t border-border/40 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="text-xs font-mono text-primary font-semibold tracking-wider uppercase mb-2">
            // 05 &bull; Direct Communication
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-sm sm:text-base leading-relaxed">
            Actively interviewing for full-time Software Engineer and Backend Developer roles starting 2027.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-foreground font-mono">
                Direct Channels
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether you are a recruiter discussing an open role, an engineering team member, or collaborating on open source, my inbox is always open.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <a
                  href="mailto:siddhantkalework@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-secondary/40 border border-border/60 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-mono">Email</div>
                    <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      siddhantkalework@gmail.com
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918108901398"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-secondary/40 border border-border/60 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-mono">Phone</div>
                    <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      +91 8108901398
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-secondary/40 border border-border/60">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-mono">Location</div>
                    <div className="text-sm font-medium text-foreground">
                      Mumbai, Maharashtra, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles & Resume Download */}
              <div className="pt-4 border-t border-border space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Connect Online
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/SiddhantKale1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-secondary/60 border border-border hover:border-primary/50 hover:bg-primary/10 text-foreground transition-all"
                  >
                    <Github className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/siddhant-kale-301807318/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-secondary/60 border border-border hover:border-primary/50 hover:bg-primary/10 text-foreground transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium">LinkedIn</span>
                  </a>
                </div>

                <a
                  href="/Siddhant_Kale_Resume.pdf"
                  download="Siddhant_Kale_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-card/90 backdrop-blur-md border border-border rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Send a Message
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Fill in the details below to directly email me.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Smith"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none text-foreground text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none text-foreground text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Software Engineering Opportunity / Project Discussion"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none text-foreground text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Siddhant, I came across your portfolio and would like to connect regarding..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none text-foreground text-sm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div className="flex flex-wrap items-center gap-3">
            <p>
              &copy; {new Date().getFullYear()} Siddhant Kale &bull; React &bull; TypeScript &bull; Tailwind CSS
            </p>
            <a
              href="https://top-agent-skills.com/skill/frontend-design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center opacity-85 hover:opacity-100 transition-opacity"
            >
              <img
                src="https://top-agent-skills.com/badge/frontend-design.svg"
                alt="frontend-design — ranked #1 in Frontend &amp; UI on Top Agent Skills"
                className="h-5"
              />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-primary hover:underline transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
