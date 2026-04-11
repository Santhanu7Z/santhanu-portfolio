/* ==========================================================================
   DESIGN: Dark Techno-Academic — Skills with categorized tags,
   certifications, and competitive exams
   ========================================================================== */
import { useEffect, useRef, useState } from "react";
import { Award, Trophy, ExternalLink } from "lucide-react";

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

const skillCategories = [
  {
    label: "Languages & Frameworks",
    color: "oklch(0.62 0.2 250)",
    skills: ["Python", "PyTorch", "TensorFlow", "Transformers"],
  },
  {
    label: "AI / ML Specialties",
    color: "oklch(0.68 0.18 290)",
    skills: ["Mamba SSM", "Whisper ASR", "Deep Learning", "NLP", "Signal Processing"],
  },
  {
    label: "Tools & Infrastructure",
    color: "oklch(0.62 0.2 250)",
    skills: ["Git", "Docker", "Linux", "SQL"],
  },
];

const certifications = [
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "Mar 2025",
    url: null,
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM / Coursera",
    date: null,
    url: null,
  },
  {
    title: "Introduction to Deep Learning & Neural Networks with Keras",
    issuer: "IBM / Coursera",
    date: null,
    url: null,
  },
  {
    title: "AI Engineer (Robotics) — Intermediate",
    issuer: "LinkedIn",
    date: null,
    url: null,
  },
  {
    title: "Introduction to Data Engineering",
    issuer: "IBM / Coursera",
    date: null,
    url: "https://coursera.org/share/9553e3853b3ec8dbee41f3a0b5405d02",
  },
  {
    title: "Deep Learning with Keras and TensorFlow",
    issuer: "IBM / Coursera",
    date: null,
    url: "https://coursera.org/share/42687df015b3b31c279a9d4441a643b5",
  },
];

const events = [
  {
    title: "Two-Day National Workshop on Deep Learning for Computer Vision Applications",
    organizer: "School of AI & Robotics, Mahatma Gandhi University",
    date: "Apr 10–11, 2025",
    type: "Workshop",
  },
  {
    title: "Seminar on AI: Future Prospects and Impacts on Society",
    organizer: "School of AI & Robotics, Mahatma Gandhi University",
    date: "Aug 14, 2024",
    type: "Seminar",
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useIntersection(sectionRef);

  return (
    <section id="skills" className="py-24" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <div className="section-label mb-2">06 // Skills & Credentials</div>
          <h2
            className="font-display font-bold text-3xl md:text-4xl"
            style={{ fontFamily: "'Syne', sans-serif", color: "oklch(0.95 0.01 240)" }}
          >
            Technical Expertise
          </h2>
          <div
            className="mt-2 h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, oklch(0.62 0.2 250), oklch(0.68 0.18 290))" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills */}
          <div
            className="lg:col-span-1 transition-all duration-700 delay-100"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
          >
            <div className="glass-card rounded-2xl p-6" style={{ border: "1px solid oklch(0.62 0.2 250 / 20%)" }}>
              <div className="section-label mb-4">Technical Skills</div>
              <div className="space-y-5">
                {skillCategories.map((cat) => (
                  <div key={cat.label}>
                    <div
                      className="text-xs font-semibold mb-2"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.60 0.03 260)" }}
                    >
                      {cat.label}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="skill-tag"
                          style={{
                            background: `${cat.color}22`,
                            borderColor: `${cat.color}55`,
                            color: "oklch(0.80 0.12 250)",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* UGC-NET highlight */}
              <div
                className="mt-6 rounded-xl p-4"
                style={{
                  background: "linear-gradient(135deg, oklch(0.62 0.2 250 / 15%), oklch(0.68 0.18 290 / 10%))",
                  border: "1px solid oklch(0.62 0.2 250 / 25%)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Trophy size={15} style={{ color: "oklch(0.75 0.18 60)" }} />
                  <span
                    className="text-xs font-bold"
                    style={{ fontFamily: "'Syne', sans-serif", color: "oklch(0.85 0.01 240)" }}
                  >
                    UGC-NET June 2025
                  </span>
                </div>
                <div
                  className="font-display font-extrabold text-2xl gradient-text"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  95.61
                  <span className="text-sm font-normal ml-1" style={{ color: "oklch(0.60 0.03 260)" }}>percentile</span>
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.60 0.03 260)" }}
                >
                  Qualified for Assistant Professor & Ph.D. Admission
                </div>
              </div>
            </div>
          </div>

          {/* Certifications + Events */}
          <div
            className="lg:col-span-2 space-y-6 transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
          >
            {/* Certifications */}
            <div className="glass-card rounded-2xl p-6" style={{ border: "1px solid oklch(0.68 0.18 290 / 20%)" }}>
              <div className="section-label mb-4">Certifications</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex items-start gap-3 p-3 rounded-xl transition-all duration-200"
                    style={{ background: "oklch(1 0 0 / 4%)", border: "1px solid oklch(1 0 0 / 6%)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "oklch(0.68 0.18 290 / 10%)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.68 0.18 290 / 25%)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "oklch(1 0 0 / 4%)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(1 0 0 / 6%)";
                    }}
                  >
                    <Award size={15} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.68 0.18 290)" }} />
                    <div className="min-w-0">
                      <div
                        className="text-sm font-semibold leading-snug mb-0.5"
                        style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.85 0.02 240)" }}
                      >
                        {cert.title}
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs"
                          style={{ fontFamily: "'Fira Code', monospace", color: "oklch(0.55 0.05 260)" }}
                        >
                          {cert.issuer}
                        </span>
                        {cert.url && (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "oklch(0.62 0.2 250)" }}
                          >
                            <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conferences & Seminars */}
            <div className="glass-card rounded-2xl p-6" style={{ border: "1px solid oklch(0.62 0.2 250 / 15%)" }}>
              <div className="section-label mb-4">Conferences & Seminars</div>
              <div className="space-y-3">
                {events.map((ev) => (
                  <div
                    key={ev.title}
                    className="flex items-start gap-3 p-3 rounded-xl"
                    style={{ background: "oklch(1 0 0 / 4%)", border: "1px solid oklch(1 0 0 / 6%)" }}
                  >
                    <span
                      className="px-2 py-0.5 rounded text-xs flex-shrink-0 mt-0.5"
                      style={{
                        fontFamily: "'Fira Code', monospace",
                        background: "oklch(0.62 0.2 250 / 15%)",
                        color: "oklch(0.72 0.15 250)",
                        border: "1px solid oklch(0.62 0.2 250 / 25%)",
                      }}
                    >
                      {ev.type}
                    </span>
                    <div>
                      <div
                        className="text-sm font-semibold leading-snug mb-0.5"
                        style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.85 0.02 240)" }}
                      >
                        {ev.title}
                      </div>
                      <div
                        className="text-xs"
                        style={{ fontFamily: "'Fira Code', monospace", color: "oklch(0.55 0.05 260)" }}
                      >
                        {ev.organizer} · {ev.date}
                      </div>
                    </div>
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
