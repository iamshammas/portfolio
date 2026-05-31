"use client";

import { useEffect, useRef } from "react";
import { Shield, Code2, BookOpen } from "lucide-react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      ref.current.querySelectorAll(".section-fade").forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "6rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      {/* Label */}
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
          01 / About
        </span>
        <h2
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.03em",
            marginTop: "0.5rem",
            lineHeight: 1.1,
          }}
        >
          The story so far
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
        }}
        className="about-grid"
      >
        {/* Story */}
        <div className="section-fade" style={{ transitionDelay: "0.1s" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              color: "var(--muted-foreground)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              maxWidth: "680px",
            }}
          >
            <p>
              I graduated with a B.Tech in Information Technology from Anna
              University in 2025, but my real education has always happened
              outside the classroom. I&apos;m the kind of person who pulls apart
              documentation to understand how things actually work — not just
              how to use them.
            </p>
            <p>
              My path into backend engineering wasn&apos;t a straight line. It started
              with a genuine curiosity about how web applications are built,
              which led me to Python, then Django, then a question that changed
              how I think about software:{" "}
              <em style={{ color: "var(--foreground)" }}>
                &ldquo;What happens when this breaks — or gets broken on purpose?&rdquo;
              </em>
            </p>
            <p>
              That question led me to pursue penetration testing certifications
              at RedTeam Hacker Academy. I&apos;m not a full-time security
              professional — but I build software with a security-conscious
              mindset. I think about authentication flows, input validation, and
              privilege escalation the way most junior developers don&apos;t yet.
            </p>
            <p>
              Currently, I work as an Academic Advisor at Bridgeon Skillversity,
              mentoring students through technical learning programs. In parallel,
              I&apos;m actively building projects, solving problems on LeetCode,
              and preparing for my transition into a full-time software
              engineering role.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div
          className="section-fade"
          style={{
            transitionDelay: "0.2s",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
          }}
        >
          {[
            {
              icon: <Code2 size={20} style={{ color: "var(--accent)" }} />,
              title: "Backend First",
              body: "I gravitate toward server-side logic, database design, and API architecture. Building things that work correctly under the hood matters more to me than pixel-perfect UIs.",
              accent: "var(--accent-muted)",
              border: "var(--accent)",
            },
            {
              icon: <Shield size={20} style={{ color: "var(--security)" }} />,
              title: "Security-Minded",
              body: "Holding CPT and BBH certifications from RedTeam Hacker Academy, I approach software development with an understanding of how systems get exploited.",
              accent: "var(--security-muted)",
              border: "var(--security)",
            },
            {
              icon: <BookOpen size={20} style={{ color: "var(--success)" }} />,
              title: "Self-Driven",
              body: "Everything I know about Django, DRF, PostgreSQL, and web security came from deliberate, self-directed learning. I don't stop when something is hard.",
              accent: "color-mix(in srgb, var(--success) 15%, transparent)",
              border: "var(--success)",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="card-hover"
              style={{
                padding: "1.5rem",
                borderRadius: "12px",
                background: "var(--card)",
                border: `1px solid var(--border)`,
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: card.accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                {card.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--muted-foreground)",
                  lineHeight: 1.6,
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; align-items: start; }
        }
      `}</style>
    </section>
  );
}
