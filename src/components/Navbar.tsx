import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Solutions", href: "#capabilities" },
    { name: "Stack", href: "#stack" },
    { name: "Milestones", href: "#milestones" },
    { name: "Philosophy", href: "#philosophy" },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-5 px-3.5 sm:px-10 lg:px-14 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-[#090A0E]/80 border border-white/10 backdrop-blur-lg flex items-center justify-between pointer-events-auto shadow-lg shadow-black/40">
        {/* Brand Monogram */}
        <a
          href="#"
          className="group flex items-center gap-2.5"
        >
          <span className="w-6 h-6 rounded-md bg-white text-black flex items-center justify-center font-bold text-xs tracking-tighter">
            SK
          </span>
          <span className="text-sm font-medium tracking-tight text-white group-hover:text-zinc-200 transition-colors">
            Siddhant Kale
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-xs font-normal text-zinc-300 hover:text-white transition-colors duration-150"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Action Button: Let's Talk */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollTo("#contact")}
            className="px-5 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all duration-200 shadow-md shadow-white/5 active:scale-95"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => scrollTo("#contact")}
            className="px-3.5 py-1.5 rounded-xl bg-white text-black font-semibold text-xs"
          >
            Let's Talk
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-[#0C0D12]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-6 transition-all duration-200 pointer-events-auto">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-left text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
