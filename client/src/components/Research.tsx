/* ==========================================================================
   DESIGN: Dark Techno-Academic — Research section with glassmorphism card
   and research visual image
   ========================================================================== */
import { useEffect, useRef, useState } from "react";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const RESEARCH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663542406103/8FhaEZXfppsmbJDKsQAFRB/research-visual-TxVd2gqnQZEgxTjjvJfRpJ.webp";

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

export default function Research() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useIntersection(sectionRef);

  return (
    <section id="research" className="py-24" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <div className="section-label mb-2">02 // Research Experience</div>
          <h2
            className="font-display font-bold text-3xl md:text-4xl"
            style={{ fontFamily: "'Syne', sans-serif", color: "oklch(0.95 0.01 240)" }}
          >
            Research Work
          </h2>
          <div
            className="mt-2 h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, oklch(0.62 0.2 250), oklch(0.68 0.18 290))" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Research card */}
          <div
            className="glass-card rounded-2xl overflow-hidden glow-hover transition-all duration-700 delay-100"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              border: "1px solid oklch(0.62 0.2 250 / 25%)",
            }}
          >
            {/* Card header */}
            <div
              className="px-6 py-4"
              style={{
                background: "linear-gradient(135deg, oklch(0.62 0.2 250 / 15%), oklch(0.68 0.18 290 / 10%))",
                borderBottom: "1px solid oklch(1 0 0 / 8%)",
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className="inline-block px-2 py-0.5 rounded text-xs mb-2"
                    style={{
                      fontFamily: "'Fira Code', monospace",
                      background: "oklch(0.62 0.2 250 / 20%)",
                      color: "oklch(0.75 0.15 250)",
                      border: "1px solid oklch(0.62 0.2 250 / 30%)",
                    }}
                  >
                    Visiting Researcher
                  </span>
                  <h3
                    className="font-display font-bold text-lg leading-snug"
                    style={{ fontFamily: "'Syne', sans-serif", color: "oklch(0.95 0.01 240)" }}
                  >
                    Speech-Based Mild Cognitive Impairment Detection using Mamba Fusion
                  </h3>
                </div>
              </div>
            </div>

            {/* Card body */}
            <div className="px-6 py-5">
              {/* Meta */}
              <div className="flex flex-wrap gap-4 mb-5">
                <div className="flex items-center gap-1.5 text-sm" style={{ color: "oklch(0.60 0.03 260)" }}>
                  <Calendar size={14} />
                  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.75rem" }}>Jan 2026 – Present</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm" style={{ color: "oklch(0.60 0.03 260)" }}>
                  <MapPin size={14} />
                  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.75rem" }}>KMUTT, Bangkok, Thailand</span>
                </div>
              </div>

              {/* Supervisor */}
              <div
                className="text-sm mb-4 px-3 py-2 rounded-lg"
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  color: "oklch(0.68 0.03 260)",
                  background: "oklch(1 0 0 / 4%)",
                  borderLeft: "3px solid oklch(0.68 0.18 290)",
                }}
              >
                Under the guidance of{" "}
                <span style={{ color: "oklch(0.80 0.12 290)" }}>Dr. Nuttanart Muansuwan</span>
              </div>

              {/* Contributions */}
              <ul className="space-y-2 mb-4">
                {[
                  "Used Whisper for automatic speech transcription",
                  "Implemented Mamba-based State Space Model architecture",
                  "Designed regression pipeline with clinical severity mapping",
                  "Evaluated using F1, AUC, and RMSE metrics",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.72 0.03 260)" }}>
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "oklch(0.62 0.2 250)" }}
                    />
                    <span style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Datasets */}
              <div className="flex flex-wrap gap-2">
                {["DementiaBank Pitt Corpus", "TAUKADIAL", "ADReSS Challenge"].map((ds) => (
                  <span key={ds} className="skill-tag">{ds}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Research visual */}
          <div
            className="transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
          >
            <div className="rounded-2xl overflow-hidden mb-6" style={{ border: "1px solid oklch(1 0 0 / 10%)" }}>
              <img
                src={RESEARCH_IMG}
                alt="Speech signal processing and neural network visualization"
                className="w-full object-cover"
                style={{ maxHeight: "280px" }}
              />
            </div>

            {/* Key techniques */}
            <div className="glass-card rounded-2xl p-5" style={{ border: "1px solid oklch(0.68 0.18 290 / 20%)" }}>
              <div className="section-label mb-3">Key Techniques</div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Mamba SSM",
                  "Whisper ASR",
                  "eGeMAPS Features",
                  "Cross-Modal Attention",
                  "Explainability Framework",
                  "Clinical Severity Mapping",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "oklch(0.75 0.05 260)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, oklch(0.62 0.2 250), oklch(0.68 0.18 290))" }}
                    />
                    <span style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
