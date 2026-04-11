/* ==========================================================================
   DESIGN: Dark Techno-Academic — Full-screen hero with constellation bg,
   animated waveform bars, gradient name, and social links
   ========================================================================== */
import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663542406103/8FhaEZXfppsmbJDKsQAFRB/hero-bg-J5McE6MWj2EF2UXJTxMatt.webp";

export default function Hero() {
  const waveRef = useRef<HTMLDivElement>(null);

  // Stagger waveform bar animations
  useEffect(() => {
    if (!waveRef.current) return;
    const bars = waveRef.current.querySelectorAll<HTMLDivElement>(".wave-bar");
    bars.forEach((bar, i) => {
      bar.style.animationDelay = `${i * 0.08}s`;
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.10 0.03 260 / 60%) 0%, oklch(0.10 0.03 260 / 80%) 60%, oklch(0.10 0.03 260) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="section-label mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}>
            // AI &amp; ML Researcher
          </div>

          {/* Name */}
          <h1
            className="font-display font-extrabold leading-none mb-4 animate-fade-in-up"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              animationDelay: "0.2s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <span className="gradient-text">Santhanu</span>
            <br />
            <span style={{ color: "oklch(0.92 0.01 240)" }}>Ajith Kumar</span>
          </h1>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl mb-6 leading-relaxed animate-fade-in-up"
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              color: "oklch(0.72 0.03 260)",
              maxWidth: "560px",
              animationDelay: "0.35s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            M.Sc. student in Artificial Intelligence & Robotics with research focus on{" "}
            <span style={{ color: "oklch(0.80 0.15 250)" }}>clinical speech analysis</span>,{" "}
            <span style={{ color: "oklch(0.80 0.15 290)" }}>multimodal learning</span>, and{" "}
            <span style={{ color: "oklch(0.80 0.15 250)" }}>explainable AI</span>.
          </p>

          {/* Waveform animation */}
          <div
            ref={waveRef}
            className="flex items-end gap-0.5 mb-8 animate-fade-in-up"
            style={{ height: "36px", animationDelay: "0.45s", opacity: 0, animationFillMode: "forwards" }}
          >
            {Array.from({ length: 28 }).map((_, i) => {
              const heights = [14, 22, 30, 18, 36, 24, 16, 28, 36, 20, 14, 32, 26, 18, 36, 22, 14, 28, 36, 18, 24, 32, 16, 28, 20, 36, 14, 22];
              return (
                <div
                  key={i}
                  className="wave-bar rounded-full"
                  style={{
                    width: "3px",
                    height: `${heights[i % heights.length]}px`,
                    background: i % 3 === 0
                      ? "oklch(0.68 0.18 290)"
                      : "oklch(0.62 0.2 250)",
                    animation: "waveform 1.2s ease-in-out infinite alternate",
                    opacity: 0.7,
                  }}
                />
              );
            })}
            <span
              className="ml-3 text-xs"
              style={{ fontFamily: "'Fira Code', monospace", color: "oklch(0.55 0.05 260)" }}
            >
              speech_signal.wav
            </span>
          </div>

          {/* Action buttons */}
          <div
            className="flex flex-wrap gap-3 mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.55s", opacity: 0, animationFillMode: "forwards" }}
          >
            <a
              href="#research"
              onClick={(e) => { e.preventDefault(); document.getElementById("research")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: "linear-gradient(135deg, oklch(0.62 0.2 250), oklch(0.68 0.18 290))",
                color: "white",
                boxShadow: "0 0 24px oklch(0.62 0.2 250 / 35%)",
              }}
            >
              View Research
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 glass-card"
              style={{
                fontFamily: "'Syne', sans-serif",
                color: "oklch(0.85 0.05 250)",
              }}
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div
            className="flex items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.65s", opacity: 0, animationFillMode: "forwards" }}
          >
            <a
              href="https://github.com/Santhanu7Z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: "oklch(0.60 0.03 260)", fontFamily: "'Fira Code', monospace" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.85 0.1 250)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.60 0.03 260)")}
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/santhanu-ajithkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: "oklch(0.60 0.03 260)", fontFamily: "'Fira Code', monospace" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.85 0.1 250)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.60 0.03 260)")}
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:santhanuusa@gmail.com"
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: "oklch(0.60 0.03 260)", fontFamily: "'Fira Code', monospace" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.85 0.1 250)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.60 0.03 260)")}
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <ChevronDown size={20} style={{ color: "oklch(0.50 0.05 260)" }} />
      </div>
    </section>
  );
}
