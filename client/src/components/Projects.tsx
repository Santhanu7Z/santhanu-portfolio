/* ==========================================================================
   DESIGN: Dark Techno-Academic — Projects with glassmorphism cards,
   tech tags, and GitHub links
   ========================================================================== */
import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, Trophy, Calendar } from "lucide-react";

function useIntersection(ref: React.RefObject<Element | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

const projects = [
  {
    title: "Fusion Mamba for Explainable Speech-Based Detection of MCI",
    period: "Jan 2026 – Present",
    description:
      "An end-to-end AI pipeline to identify cognitive decline markers in spontaneous speech, achieving high-fidelity diagnostic performance using State-Space Model (Mamba) backbones. Analyzes cross-modal dependencies between patient transcriptions and vocal features, providing interpretable diagnostic weights via gating mechanisms.",
    highlights: [
      "Validated on DementiaBank Pitt Corpus, TAUKADIAL, and ADReSS Challenge benchmarks",
      "Cross-modal attention fusion of Mamba-encoded linguistic features with eGeMAPS acoustic biomarkers",
      "Multi-level explainability framework distinguishing semantic vs. vocal biomarker contributions",
    ],
    tags: ["PyTorch", "Mamba SSM", "Whisper", "eGeMAPS", "Explainable AI", "Python"],
    github: "https://github.com/Santhanu7Z/mci_detection",
    badge: null,
    color: "oklch(0.62 0.2 250)",
  },
  {
    title: "Thanal — Virtual NIR Estimation from RGB Crop Images",
    period: "Jun 2025 – Present",
    description:
      "Thanal focuses on virtual Near-Infrared (VNIR) estimation from RGB images of crop leaves. The primary aim is to predict plant diseases or stress early, utilizing VNIR information without the need for actual NIR equipment. Developed a VNIR Estimation model based on U-Net with Attention mechanisms, trained on RGB-NIR paired images for capsicum.",
    highlights: [
      "National finalist in eYIC competition hosted by Ministry of Education and IIT Bombay",
      "U-Net with Attention mechanisms for VNIR estimation",
      "Trained on capsicum-specific RGB-NIR paired dataset",
    ],
    tags: ["PyTorch", "U-Net", "Attention Mechanisms", "Computer Vision", "Python"],
    github: "https://github.com/SReigovind/Thanal",
    badge: "National Finalist — eYIC (MoE & IIT Bombay)",
    color: "oklch(0.68 0.18 290)",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useIntersection(sectionRef);

  return (
    <section id="projects" className="py-24" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <div className="section-label mb-2">03 // Projects</div>
          <h2
            className="font-display font-bold text-3xl md:text-4xl"
            style={{ fontFamily: "'Syne', sans-serif", color: "oklch(0.95 0.01 240)" }}
          >
            Featured Work
          </h2>
          <div
            className="mt-2 h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, oklch(0.62 0.2 250), oklch(0.68 0.18 290))" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden glow-hover flex flex-col transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${idx * 0.15}s`,
                border: `1px solid ${project.color}33`,
              }}
            >
              {/* Card top accent */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${project.color}, oklch(0.68 0.18 290))` }}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Badge */}
                {project.badge && (
                  <div
                    className="flex items-center gap-2 mb-3 px-3 py-1.5 rounded-lg w-fit"
                    style={{
                      background: "oklch(0.68 0.18 290 / 15%)",
                      border: "1px solid oklch(0.68 0.18 290 / 30%)",
                    }}
                  >
                    <Trophy size={13} style={{ color: "oklch(0.75 0.18 290)" }} />
                    <span
                      className="text-xs font-semibold"
                      style={{ fontFamily: "'Fira Code', monospace", color: "oklch(0.75 0.18 290)" }}
                    >
                      {project.badge}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3
                  className="font-display font-bold text-lg leading-snug mb-2"
                  style={{ fontFamily: "'Syne', sans-serif", color: "oklch(0.95 0.01 240)" }}
                >
                  {project.title}
                </h3>

                {/* Period */}
                <div className="flex items-center gap-1.5 mb-3" style={{ color: "oklch(0.55 0.05 260)" }}>
                  <Calendar size={13} />
                  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.72rem" }}>{project.period}</span>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.68 0.03 260)", lineHeight: "1.7" }}
                >
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.72 0.03 260)" }}>
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: project.color }}
                      />
                      <span style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      background: "oklch(1 0 0 / 8%)",
                      color: "oklch(0.80 0.05 260)",
                      border: "1px solid oklch(1 0 0 / 12%)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "oklch(0.62 0.2 250 / 20%)";
                      e.currentTarget.style.borderColor = "oklch(0.62 0.2 250 / 40%)";
                      e.currentTarget.style.color = "oklch(0.85 0.1 250)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "oklch(1 0 0 / 8%)";
                      e.currentTarget.style.borderColor = "oklch(1 0 0 / 12%)";
                      e.currentTarget.style.color = "oklch(0.80 0.05 260)";
                    }}
                  >
                    <Github size={15} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
