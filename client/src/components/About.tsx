/* ==========================================================================
   DESIGN: Dark Techno-Academic — About section with stats and research interests
   ========================================================================== */
import { useEffect, useRef, useState } from "react";
import { Brain, Mic, Network, Zap, Signal } from "lucide-react";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663542406103/8FhaEZXfppsmbJDKsQAFRB/about-bg-C9cg3pn37oLkrNbzTb6.webp";

const stats = [
  { label: "Research Papers", value: "1", suffix: "+" },
  { label: "UGC-NET Percentile", value: "95.61" },
  { label: "Projects", value: "2", suffix: "+" },
  { label: "Certifications", value: "7", suffix: "+" },
];

const interests = [
  { icon: Brain, label: "AI for Mental Health" },
  { icon: Mic, label: "Clinical Speech Analysis" },
  { icon: Network, label: "Explainable AI" },
  { icon: Zap, label: "Efficient Neural Architectures" },
  { icon: Signal, label: "Signal Processing" },
];

function useIntersection(ref: React.RefObject<Element | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useIntersection(sectionRef);

  return (
    <section id="about" className="relative py-24 overflow-hidden" ref={sectionRef}>
      {/* Subtle bg */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${ABOUT_BG})` }}
      />
      <div className="absolute inset-0" style={{ background: "oklch(0.10 0.03 260 / 85%)" }} />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <div className="section-label mb-2">01 // About Me</div>
          <h2
            className="font-display font-bold text-3xl md:text-4xl"
            style={{ fontFamily: "'Syne', sans-serif", color: "oklch(0.95 0.01 240)" }}
          >
            Who I Am
          </h2>
          <div
            className="mt-2 h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, oklch(0.62 0.2 250), oklch(0.68 0.18 290))" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div
            className="transition-all duration-700 delay-100"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
          >
            <p
              className="text-base leading-relaxed mb-4"
              style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.72 0.03 260)", lineHeight: "1.8" }}
            >
              I am an M.Sc. student in Artificial Intelligence and Machine Learning with research interests in{" "}
              <span style={{ color: "oklch(0.80 0.15 250)" }}>clinical speech analysis</span>,{" "}
              <span style={{ color: "oklch(0.80 0.15 290)" }}>multimodal learning</span>, and{" "}
              <span style={{ color: "oklch(0.80 0.15 250)" }}>explainable AI</span>. My current work focuses on speech-based analysis for early detection of cognitive impairment, where I design and evaluate deep learning models using benchmark datasets.
            </p>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.72 0.03 260)", lineHeight: "1.8" }}
            >
              Currently a Visiting Researcher at{" "}
              <span style={{ color: "oklch(0.80 0.15 250)" }}>King Mongkut's University of Technology Thonburi</span>, Bangkok, Thailand, working under Dr. Nuttanart Muansuwan on Mamba-based architectures for MCI detection from spontaneous speech.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Location", value: "Aluva, Kerala, India" },
                { label: "Nationality", value: "Indian" },
                { label: "Date of Birth", value: "07 Oct 2002" },
                { label: "Languages", value: "Malayalam, English, Hindi, Tamil" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-xl p-3"
                >
                  <div
                    className="text-xs mb-1"
                    style={{ fontFamily: "'Fira Code', monospace", color: "oklch(0.55 0.05 260)" }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.88 0.02 240)" }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats + Interests */}
          <div
            className="transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-5 glow-hover"
                  style={{ border: "1px solid oklch(0.62 0.2 250 / 20%)" }}
                >
                  <div
                    className="font-display font-extrabold text-3xl gradient-text mb-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {stat.value}{stat.suffix}
                  </div>
                  <div
                    className="text-xs"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.60 0.03 260)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Research Interests */}
            <div>
              <div className="section-label mb-3">Research Interests</div>
              <div className="flex flex-col gap-2">
                {interests.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 glass-card rounded-xl px-4 py-3 glow-hover"
                  >
                    <Icon size={16} style={{ color: "oklch(0.68 0.18 290)", flexShrink: 0 }} />
                    <span
                      className="text-sm font-medium"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.82 0.03 260)" }}
                    >
                      {label}
                    </span>
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
