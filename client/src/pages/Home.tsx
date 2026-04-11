/* ==========================================================================
   DESIGN: Dark Techno-Academic — Main portfolio page assembling all sections
   ========================================================================== */
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.10 0.03 260)" }}
    >
      <ScrollProgress />
      <Navbar />
      <Hero />

      {/* Alternating section backgrounds for visual rhythm */}
      <div style={{ background: "oklch(0.10 0.03 260)" }}>
        <About />
      </div>
      <div style={{ background: "oklch(0.12 0.035 260)" }}>
        <Research />
      </div>
      <div style={{ background: "oklch(0.10 0.03 260)" }}>
        <Projects />
      </div>
      <div style={{ background: "oklch(0.12 0.035 260)" }}>
        <Publications />
      </div>
      <div style={{ background: "oklch(0.10 0.03 260)" }}>
        <Education />
      </div>
      <div style={{ background: "oklch(0.12 0.035 260)" }}>
        <Skills />
      </div>
      <div style={{ background: "oklch(0.10 0.03 260)" }}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
