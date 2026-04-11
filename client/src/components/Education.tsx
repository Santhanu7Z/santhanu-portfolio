/* ==========================================================================
   DESIGN: Dark Techno-Academic — Education timeline with gradient line
   ========================================================================== */
import { useEffect, useRef, useState } from "react";
import { GraduationCap, ExternalLink } from "lucide-react";

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

const education = [
  {
    degree: "M.Sc. Artificial Intelligence and Robotics",
    institution: "Mahatma Gandhi University",
    location: "Kottayam, India",
    period: "2024 – Present",
    url: "https://www.mgu.ac.in/",
    current: true,
    details: "School of Artificial Intelligence and Robotics. Research focus on clinical speech analysis and explainable AI.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Rajagiri College of Management and Applied Sciences",
    location: "Kakkanad, India",
    period: "2020 – 2023",
    url: "https://www.rajagiricollege.edu.in/",
    current: false,
    details: "Comprehensive study of computer science fundamentals, software development, and applied mathematics.",
  },
  {
    degree: "Plus Two (Higher Secondary)",
    institution: "Board of Higher Secondary Examination, Government of Kerala",
    location: "Edathala, India",
    period: "2018 – 2020",
    url: null,
    current: false,
    details: "Physics, Chemistry, Computer Science, Mathematics, English, Malayalam.",
  },
  {
    degree: "SSLC (Secondary School Leaving Certificate)",
    institution: "General Education Department, Government of Kerala",
    location: "Kerala, India",
    period: "2018",
    url: null,
    current: false,
    details: null,
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useIntersection(sectionRef);

  return (
    <section id="education" className="py-24" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <div className="section-label mb-2">05 // Education</div>
          <h2
            className="font-display font-bold text-3xl md:text-4xl"
            style={{ fontFamily: "'Syne', sans-serif", color: "oklch(0.95 0.01 240)" }}
          >
            Academic Background
          </h2>
          <div
            className="mt-2 h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, oklch(0.62 0.2 250), oklch(0.68 0.18 290))" }}
          />
        </div>

        {/* Timeline */}
        <div className="relative max-w-2xl">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5"
            style={{ background: "linear-gradient(to bottom, oklch(0.62 0.2 250), oklch(0.68 0.18 290 / 20%))" }}
          />

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={edu.degree}
                className="relative pl-14 transition-all duration-700"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-24px)",
                  transitionDelay: `${idx * 0.12}s`,
                }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3 top-5 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{
                    background: edu.current
                      ? "linear-gradient(135deg, oklch(0.62 0.2 250), oklch(0.68 0.18 290))"
                      : "oklch(0.25 0.05 260)",
                    border: `2px solid ${edu.current ? "oklch(0.62 0.2 250)" : "oklch(0.35 0.05 260)"}`,
                    boxShadow: edu.current ? "0 0 12px oklch(0.62 0.2 250 / 50%)" : "none",
                  }}
                >
                  {edu.current && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  )}
                </div>

                {/* Card */}
                <div
                  className="glass-card rounded-2xl p-5 glow-hover"
                  style={{
                    border: edu.current
                      ? "1px solid oklch(0.62 0.2 250 / 30%)"
                      : "1px solid oklch(1 0 0 / 8%)",
                  }}
                >
                  {/* Period */}
                  <div
                    className="text-xs mb-2"
                    style={{ fontFamily: "'Fira Code', monospace", color: "oklch(0.55 0.05 260)" }}
                  >
                    {edu.period}
                    {edu.current && (
                      <span
                        className="ml-2 px-2 py-0.5 rounded-full text-xs"
                        style={{
                          background: "oklch(0.62 0.2 250 / 20%)",
                          color: "oklch(0.72 0.15 250)",
                          border: "1px solid oklch(0.62 0.2 250 / 30%)",
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>

                  {/* Degree */}
                  <h3
                    className="font-display font-bold text-base mb-1"
                    style={{ fontFamily: "'Syne', sans-serif", color: "oklch(0.95 0.01 240)" }}
                  >
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <div className="flex items-center gap-1.5 mb-1">
                    <GraduationCap size={13} style={{ color: "oklch(0.62 0.2 250)" }} />
                    {edu.url ? (
                      <a
                        href={edu.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium flex items-center gap-1 transition-colors"
                        style={{ color: "oklch(0.72 0.12 250)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.85 0.15 250)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.72 0.12 250)")}
                      >
                        {edu.institution}
                        <ExternalLink size={11} />
                      </a>
                    ) : (
                      <span
                        className="text-sm font-medium"
                        style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.72 0.12 250)" }}
                      >
                        {edu.institution}
                      </span>
                    )}
                  </div>

                  {/* Location */}
                  <div
                    className="text-xs mb-2"
                    style={{ fontFamily: "'Fira Code', monospace", color: "oklch(0.50 0.03 260)" }}
                  >
                    {edu.location}
                  </div>

                  {/* Details */}
                  {edu.details && (
                    <p
                      className="text-sm"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.62 0.03 260)" }}
                    >
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
