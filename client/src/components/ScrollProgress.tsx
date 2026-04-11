/* ==========================================================================
   DESIGN: Dark Techno-Academic — Thin gradient scroll progress bar at top
   ========================================================================== */
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-0.5"
      style={{ background: "oklch(1 0 0 / 5%)" }}
    >
      <div
        className="h-full transition-none"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, oklch(0.62 0.2 250), oklch(0.68 0.18 290))",
          boxShadow: "0 0 8px oklch(0.62 0.2 250 / 60%)",
        }}
      />
    </div>
  );
}
