/* ==========================================================================
   DESIGN: Dark Techno-Academic — Contact section with glassmorphism cards
   and references
   ========================================================================== */
import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, MapPin, User } from "lucide-react";

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

const references = [
  {
    name: "Prof. Dr. Bindu V R",
    role: "Honorary Director & Professor",
    dept: "School of Artificial Intelligence and Robotics",
    institution: "Mahatma Gandhi University, Kottayam",
    email: "bindu.vr@mgu.ac.in",
  },
  {
    name: "Dr. Deepa V",
    role: "Assistant Professor",
    dept: "School of Artificial Intelligence and Robotics",
    institution: "Mahatma Gandhi University, Kottayam",
    email: "deepasuru@gmail.com",
  },
  {
    name: "Dr. Nuttanart Muansuwan",
    role: "Assistant Professor",
    dept: "Department of Computer Engineering",
    institution: "King Mongkut's University of Technology Thonburi, Bangkok",
    email: "nuttanart.mua@kmutt.ac.th",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useIntersection(sectionRef);

  return (
    <section id="contact" className="py-24" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <div className="section-label mb-2">07 // Contact</div>
          <h2
            className="font-display font-bold text-3xl md:text-4xl"
            style={{ fontFamily: "'Syne', sans-serif", color: "oklch(0.95 0.01 240)" }}
          >
            Get in Touch
          </h2>
          <div
            className="mt-2 h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, oklch(0.62 0.2 250), oklch(0.68 0.18 290))" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div
            className="transition-all duration-700 delay-100"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
          >
            <p
              className="text-base leading-relaxed mb-6"
              style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.68 0.03 260)", lineHeight: "1.8" }}
            >
              I am open to research collaborations, academic positions, and industry opportunities in AI/ML. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "santhanuusa@gmail.com",
                  href: "mailto:santhanuusa@gmail.com",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "linkedin.com/in/santhanu-ajithkumar",
                  href: "https://www.linkedin.com/in/santhanu-ajithkumar",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "github.com/Santhanu7Z",
                  href: "https://github.com/Santhanu7Z",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Aluva, Kerala, India",
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 glass-card rounded-xl px-4 py-3 glow-hover"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, oklch(0.62 0.2 250 / 25%), oklch(0.68 0.18 290 / 20%))" }}
                  >
                    <Icon size={16} style={{ color: "oklch(0.72 0.15 250)" }} />
                  </div>
                  <div>
                    <div
                      className="text-xs mb-0.5"
                      style={{ fontFamily: "'Fira Code', monospace", color: "oklch(0.50 0.03 260)" }}
                    >
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm font-medium transition-colors"
                        style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.80 0.08 250)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.90 0.15 250)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.80 0.08 250)")}
                      >
                        {value}
                      </a>
                    ) : (
                      <span
                        className="text-sm font-medium"
                        style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.75 0.03 260)" }}
                      >
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="mailto:santhanuusa@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: "linear-gradient(135deg, oklch(0.62 0.2 250), oklch(0.68 0.18 290))",
                color: "white",
                boxShadow: "0 0 24px oklch(0.62 0.2 250 / 35%)",
              }}
            >
              <Mail size={16} />
              Send an Email
            </a>
          </div>

          {/* References */}
          <div
            className="transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
          >
            <div className="section-label mb-4">Academic References</div>
            <div className="space-y-4">
              {references.map((ref) => (
                <div
                  key={ref.name}
                  className="glass-card rounded-2xl p-4 glow-hover"
                  style={{ border: "1px solid oklch(1 0 0 / 8%)" }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, oklch(0.62 0.2 250 / 20%), oklch(0.68 0.18 290 / 15%))" }}
                    >
                      <User size={15} style={{ color: "oklch(0.68 0.18 290)" }} />
                    </div>
                    <div>
                      <div
                        className="font-bold text-sm mb-0.5"
                        style={{ fontFamily: "'Syne', sans-serif", color: "oklch(0.90 0.02 240)" }}
                      >
                        {ref.name}
                      </div>
                      <div
                        className="text-xs mb-0.5"
                        style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.68 0.05 260)" }}
                      >
                        {ref.role}
                      </div>
                      <div
                        className="text-xs mb-1"
                        style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.55 0.03 260)" }}
                      >
                        {ref.dept}
                      </div>
                      <div
                        className="text-xs mb-1"
                        style={{ fontFamily: "'Fira Code', monospace", color: "oklch(0.50 0.03 260)" }}
                      >
                        {ref.institution}
                      </div>
                      <a
                        href={`mailto:${ref.email}`}
                        className="text-xs transition-colors"
                        style={{ fontFamily: "'Fira Code', monospace", color: "oklch(0.62 0.15 250)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.80 0.18 250)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.62 0.15 250)")}
                      >
                        {ref.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
