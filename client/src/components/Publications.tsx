/* ==========================================================================
   DESIGN: Dark Techno-Academic — Publications with glassmorphism card
   and academic metadata
   ========================================================================== */
import { useEffect, useRef, useState } from "react";
import { BookOpen, Users, Calendar, ExternalLink, Clock } from "lucide-react";

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

export default function Publications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useIntersection(sectionRef);

  return (
    <section id="publications" className="py-24" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <div className="section-label mb-2">04 // Publications</div>
          <h2
            className="font-display font-bold text-3xl md:text-4xl"
            style={{ fontFamily: "'Syne', sans-serif", color: "oklch(0.95 0.01 240)" }}
          >
            Academic Output
          </h2>
          <div
            className="mt-2 h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, oklch(0.62 0.2 250), oklch(0.68 0.18 290))" }}
          />
        </div>

        {/* Publication card */}
        <div
          className="glass-card rounded-2xl overflow-hidden glow-hover transition-all duration-700 delay-100"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            border: "1px solid oklch(0.62 0.2 250 / 25%)",
            maxWidth: "860px",
          }}
        >
          {/* Top accent */}
          <div
            className="h-1 w-full"
            style={{ background: "linear-gradient(90deg, oklch(0.62 0.2 250), oklch(0.68 0.18 290))" }}
          />

          <div className="p-6 md:p-8">
            {/* Status badge */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  fontFamily: "'Fira Code', monospace",
                  background: "oklch(0.72 0.18 60 / 15%)",
                  color: "oklch(0.80 0.15 60)",
                  border: "1px solid oklch(0.72 0.18 60 / 30%)",
                }}
              >
                <Clock size={11} />
                Under Review
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  fontFamily: "'Fira Code', monospace",
                  background: "oklch(0.62 0.2 250 / 15%)",
                  color: "oklch(0.75 0.15 250)",
                  border: "1px solid oklch(0.62 0.2 250 / 30%)",
                }}
              >
                Conference Paper
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-display font-bold text-xl md:text-2xl leading-snug mb-4"
              style={{ fontFamily: "'Syne', sans-serif", color: "oklch(0.95 0.01 240)" }}
            >
              Fusion Mamba for Explainable Speech-Based Detection of Mild Cognitive Impairment
            </h3>

            {/* Authors */}
            <div className="flex items-start gap-2 mb-4">
              <Users size={15} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.05 260)" }} />
              <p
                className="text-sm"
                style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.68 0.03 260)" }}
              >
                <span style={{ color: "oklch(0.85 0.1 250)", fontWeight: 600 }}>Santhanu Ajith Kumar</span>
                {", "}Nuttanart Muansuwan, Princy Raj
              </p>
            </div>

            {/* Venue */}
            <div className="flex items-start gap-2 mb-5">
              <BookOpen size={15} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.05 260)" }} />
              <p
                className="text-sm"
                style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.68 0.03 260)" }}
              >
                2026 23rd International Joint Conference on Computer Science and Software Engineering{" "}
                <span style={{ color: "oklch(0.75 0.12 250)", fontWeight: 600 }}>(JCSSE 2026)</span>
              </p>
            </div>

            {/* Abstract */}
            <div
              className="rounded-xl p-4 mb-5"
              style={{
                background: "oklch(1 0 0 / 4%)",
                borderLeft: "3px solid oklch(0.62 0.2 250 / 50%)",
              }}
            >
              <div className="section-label mb-2" style={{ fontSize: "0.65rem" }}>Abstract</div>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.68 0.03 260)", lineHeight: "1.7" }}
              >
                This paper presents a rigorous empirical study of multimodal speech-based MCI detection using Selective State-Space Models. It combines Mamba-encoded linguistic features with clinically validated eGeMAPS acoustic biomarkers via cross-modal attention fusion. The study introduces a multi-level explainability framework to identify whether a prediction is driven by semantic content or vocal biomarkers.
              </p>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2">
              {["Mamba SSM", "MCI Detection", "Speech Analysis", "Explainable AI", "eGeMAPS", "Multimodal Learning"].map((kw) => (
                <span key={kw} className="skill-tag">{kw}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
