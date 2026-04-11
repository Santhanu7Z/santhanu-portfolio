/* ==========================================================================
   DESIGN: Dark Techno-Academic — Minimal footer with gradient divider
   ========================================================================== */
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{
        borderTop: "1px solid oklch(1 0 0 / 8%)",
        background: "oklch(0.08 0.03 260)",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span
            className="font-display font-bold text-sm gradient-text"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Santhanu Ajith Kumar
          </span>
          <span
            className="ml-2 text-xs"
            style={{ fontFamily: "'Fira Code', monospace", color: "oklch(0.45 0.03 260)" }}
          >
            // AI & ML Researcher
          </span>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/Santhanu7Z", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/santhanu-ajithkumar", label: "LinkedIn" },
            { icon: Mail, href: "mailto:santhanuusa@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors"
              style={{ color: "oklch(0.45 0.03 260)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.15 250)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.45 0.03 260)")}
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        <div
          className="text-xs"
          style={{ fontFamily: "'Fira Code', monospace", color: "oklch(0.40 0.03 260)" }}
        >
          © 2026 Santhanu Ajith Kumar
        </div>
      </div>
    </footer>
  );
}
