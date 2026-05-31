"use client";

import { useEffect, useRef } from "react";
import { GitBranch, Star, GitFork, ExternalLink } from "lucide-react";

const repos = [
  {
    name: "soledrop",
    desc: "Full-stack e-commerce platform built with Django. User auth, product catalog, cart management, order flow.",
    stars: 0,
    forks: 0,
    lang: "Python",
    langColor: "#3572A5",
    url: "https://github.com/shammas/soledrop",
  },
];

export default function GitHub() {
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
      id="github"
      ref={ref}
      style={{
        padding: "6rem 1.5rem",
        background: "var(--muted)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="section-fade" style={{ marginBottom: "2.5rem" }}>
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
            06 / GitHub
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "0.5rem",
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
              Building in public
            </h2>
            <a
              href="https://github.com/shammas"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1.25rem",
                borderRadius: "8px",
                background: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
              }}
            >
              <GitBranch size={16} />
              View Profile
            </a>
          </div>
          <p
            style={{
              color: "var(--muted-foreground)",
              marginTop: "0.75rem",
              maxWidth: "560px",
              lineHeight: 1.6,
              fontSize: "0.95rem",
            }}
          >
            My GitHub is where learning happens visibly. Real code, real problems, real progress.
          </p>
        </div>

        {/* Statement card */}
        <div
          className="section-fade"
          style={{
            background: "linear-gradient(135deg, color-mix(in srgb, var(--accent) 8%, var(--card)), color-mix(in srgb, var(--security) 6%, var(--card)))",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "2rem",
            marginBottom: "1.5rem",
            transitionDelay: "0.1s",
            display: "flex",
            gap: "1.5rem",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "12px",
              background: "var(--muted)",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <GitBranch size={24} style={{ color: "var(--foreground)" }} />
          </div>
          <div>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "var(--foreground)",
                maxWidth: "600px",
              }}
            >
              I commit code because I&apos;m building things, not to maintain a green graph.
              Every repository reflects something I was genuinely curious about or trying
              to understand at a deeper level.
            </p>
            <a
              href="https://github.com/shammas"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                marginTop: "1rem",
                color: "var(--accent)",
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              github.com/shammas <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Repo cards */}
        <div
          className="section-fade repos-grid"
          style={{ transitionDelay: "0.2s", display: "grid", gap: "1rem" }}
        >
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="card-hover"
              style={{
                display: "block",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1.5rem",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <GitBranch size={16} style={{ color: "var(--muted-foreground)" }} />
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "var(--accent)",
                    }}
                  >
                    {repo.name}
                  </span>
                </div>
                <ExternalLink size={14} style={{ color: "var(--muted-foreground)" }} />
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.6, marginBottom: "1rem" }}>
                {repo.desc}
              </p>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: repo.langColor,
                      display: "inline-block",
                    }}
                  />
                  <span style={{ fontSize: "0.78rem", color: "var(--muted-foreground)", fontFamily: "var(--font-jetbrains), monospace" }}>
                    {repo.lang}
                  </span>
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "var(--muted-foreground)", fontSize: "0.78rem" }}>
                  <Star size={12} /> {repo.stars}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "var(--muted-foreground)", fontSize: "0.78rem" }}>
                  <GitFork size={12} /> {repo.forks}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
