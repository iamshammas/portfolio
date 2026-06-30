"use client";

import { useEffect, useRef } from "react";
import { MapPin, Zap } from "lucide-react";

const nowItems = [
  {
    emoji: "🎯",
    heading: "Actively job hunting",
    body: "Looking for Django Developer, Python Backend Developer, and Junior Software Engineer roles. Left my Academic Advisor role at Bridgeon Skillversity in June 2026 to study full-time and focus on this transition.",
  },
  {
    emoji: "📚",
    heading: "Going deep on Django REST Framework",
    body: "Working through APIView, GenericAPIView, Mixins, Generic Views, and ViewSets. Currently learning Nested Serializers and getting more practice with ViewSets specifically.",
  },
  {
    emoji: "🗄️",
    heading: "Practicing PostgreSQL & SQL",
    body: "Joins, subqueries, aggregations, GROUP BY, HAVING, operators, and wildcards — through hands-on exercises and SQL problems on LeetCode. Also studying database normalization and concurrency control.",
  },
  {
    emoji: "🛠️",
    heading: "Maintaining & improving SoleDrop",
    body: "My Django e-commerce project is deployed and production-style — custom auth, product/variant/inventory management, cart and checkout, and Telegram order notifications. Still adding incremental improvements while keeping it deployment-ready.",
  },
  {
    emoji: "📝",
    heading: "Writing GitHub markdown notes",
    body: "Documenting everything I learn — DRF concepts, SQL patterns, deployment lessons — as markdown notes on GitHub. Built for interview prep and long-term revision, not just to look active.",
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
            Updated June 2026
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