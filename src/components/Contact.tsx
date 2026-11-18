import { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, ArrowUpRight, Download, Send, ArrowUp } from "lucide-react";
import { toast } from "sonner";
import { SquircleGrid } from "./SquircleGrid";

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
    <footer id="contact" className="relative text-white pt-16 sm:pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-14 relative z-10">
        {/* Header - Reference typography */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-[11px] font-mono tracking-[0.25em] text-zinc-400 uppercase font-medium mb-3">
            CONTACT &amp; COLLABORATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
            Let&apos;s build scalable <span className="font-bold">systems together.</span>
          </h2>
          <p className="text-zinc-400 mt-4 text-xs sm:text-base leading-relaxed">
            Actively interviewing for full-time Software Engineer, Backend Developer, and Distributed Systems roles starting 2027.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
          {/* Left Column: Direct Contact Details & Resume Download */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl sm:rounded-[22px] bg-[#0E0F14]/90 border border-white/[0.07] p-5 sm:p-8 space-y-6 shadow-2xl backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Whether you are a tech recruiter, engineering leader, or looking to collaborate on open-source systems, my inbox is always open.
              </p>

              <div className="space-y-3 pt-2">
                {/* Email */}
                <a
                  href="mailto:siddhantkalework@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/40 hover:bg-red-500/5 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-red-500/10 text-red-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 font-mono">Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-red-400 transition-colors">
                      siddhantkalework@gmail.com
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918108901398"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/40 hover:bg-red-500/5 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-red-500/10 text-red-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 font-mono">Phone</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-red-400 transition-colors">
                      +91 8108901398
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="p-2.5 rounded-lg bg-red-500/10 text-red-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 font-mono">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      Mumbai, Maharashtra, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Resume Button */}
              <div className="pt-2">
                <a
                  href="/Siddhant_Kale_Resume.pdf"
                  download="Siddhant_Kale_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-lg shadow-white/10"
                >
                  <Download className="w-4 h-4 text-black" />
                  <span>Download Updated Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl sm:rounded-[22px] bg-[#0E0F14]/90 border border-white/[0.07] p-7 sm:p-9 space-y-6 shadow-2xl backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Engineering Role / Project Discussion"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your team or project..."
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-all shadow-lg shadow-red-950/40"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Siddhant Kale. Designed with luxury dark precision.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/SiddhantKale1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/siddhant-kale-301807318/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
