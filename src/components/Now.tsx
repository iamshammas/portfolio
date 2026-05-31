"use client";

import { useEffect, useRef } from "react";
import { MapPin, Zap } from "lucide-react";

const nowItems = [
  {
    emoji: "💼",
    heading: "Working at Bridgeon Skillversity",
    body: "As an Academic Advisor in an EdTech environment that trains developers. It keeps me close to the industry and forces me to communicate technical ideas clearly.",
  },
  {
    emoji: "🔨",
    heading: "Building a DRF REST API",
    body: "A standalone backend project using Django REST Framework, JWT auth, and PostgreSQL. No templates — just a clean API designed to be consumed by a separate client. Documenting the build on GitHub.",
  },
  {
    emoji: "🛡️",
    heading: "Revisiting web application security",
    body: "Going back through OWASP Top 10 from a developer's perspective. The CPT cert gave me attacker thinking — now I want to apply that to how I write code.",
  },
  {
    emoji: "🧩",
    heading: "Solving problems on LeetCode",
    body: "Daily practice with data structures and algorithms. Not grinding for interviews — building the kind of fluency that makes hard problems feel approachable. (@iamshammas)",
  },
  {
    emoji: "📖",
    heading: "Reading about system design",
    body: "Learning how real systems are architected — databases, caching, load balancing. Not because I need to design them tomorrow, but because understanding the bigger picture makes me a better developer.",
  },
];

export default function Now() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".section-fade").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="now"
      ref={ref}
      style={{ padding: "6rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      <div className="section-fade" style={{ marginBottom: "3rem" }}>
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "0.8rem",
            color: "var(--accent)",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          07 / Now
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "1rem",
            marginTop: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            What I&apos;m doing now
          </h2>
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "0.78rem",
              color: "var(--muted-foreground)",
              marginBottom: "0.5rem",
            }}
          >
            Updated May 2026
          </span>
        </div>
        <p style={{ color: "var(--muted-foreground)", marginTop: "0.75rem", maxWidth: "500px", lineHeight: 1.6 }}>
          A real snapshot of what&apos;s actually happening, not just a highlights reel.
        </p>
      </div>

      <div style={{ display: "grid", gap: "1rem" }} className="now-grid">
        {nowItems.map((item, i) => (
          <div
            key={i}
            className="section-fade card-hover"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "1.5rem",
              display: "flex",
              gap: "1.25rem",
              alignItems: "flex-start",
              transitionDelay: `${i * 0.05}s`,
            }}
          >
            <span style={{ fontSize: "1.5rem", lineHeight: 1, flexShrink: 0 }}>{item.emoji}</span>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  marginBottom: "0.4rem",
                }}
              >
                {item.heading}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .now-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
