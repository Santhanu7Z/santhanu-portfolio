/* ==========================================================================
   DESIGN: Dark Techno-Academic — Sticky top nav with gradient underline links
   ========================================================================== */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.10 0.03 260 / 90%)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(1 0 0 / 8%)" : "none",
      }}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Logo / Name */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-display font-bold text-lg tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          <span className="gradient-text">SAK</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`nav-link ${activeSection === item.href.replace("#", "") ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="mailto:santhanuusa@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
          style={{
            fontFamily: "'Syne', sans-serif",
            background: "linear-gradient(135deg, oklch(0.62 0.2 250), oklch(0.68 0.18 290))",
            color: "white",
            boxShadow: "0 0 20px oklch(0.62 0.2 250 / 30%)",
          }}
        >
          Get in Touch
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "oklch(0.12 0.04 260 / 97%)",
            borderColor: "oklch(1 0 0 / 10%)",
            backdropFilter: "blur(16px)",
          }}
        >
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left py-3 px-2 text-sm font-medium border-b transition-colors"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  borderColor: "oklch(1 0 0 / 6%)",
                  color: activeSection === item.href.replace("#", "")
                    ? "oklch(0.72 0.2 250)"
                    : "oklch(0.75 0.03 260)",
                }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="mailto:santhanuusa@gmail.com"
              className="mt-3 text-center py-3 rounded-full text-sm font-semibold"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: "linear-gradient(135deg, oklch(0.62 0.2 250), oklch(0.68 0.18 290))",
                color: "white",
              }}
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
