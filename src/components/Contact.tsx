"use client";

import { useEffect, useRef } from "react";
import { Mail, GitBranch, Link2, ArrowRight } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".section-fade").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const links = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "muhdshammas612@gmail.com",
      href: "mailto:muhdshammas612@gmail.com",
      color: "var(--accent)",
      bg: "var(--accent-muted)",
    },
    {
      icon: <GitBranch size={20} />,
      label: "GitHub",
      value: "github.com/iamshammas",
      href: "https://github.com/iamshammas",
      color: "var(--foreground)",
      bg: "var(--muted)",
    },
    {
      icon: <Link2 size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/iamshammas",
      href: "https://linkedin.com/in/iamshammas",
      color: "#0ea5e9",
      bg: "color-mix(in srgb, #0ea5e9 12%, transparent)",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "6rem 1.5rem 8rem",
        borderTop: "1px solid var(--border)",
        background: "var(--muted)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="section-fade" style={{ marginBottom: "3rem", maxWidth: "640px" }}>
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
            08 / Contact
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
            Let&apos;s talk
          </h2>
          <p
            style={{
              color: "var(--muted-foreground)",
              marginTop: "1rem",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            If you&apos;re working on something interesting, looking for a backend
            developer who thinks about security, or just want to talk about
            Python, Django, or web security — I&apos;d like to hear from you.
          </p>
        </div>

        <div style={{ display: "grid", gap: "1rem" }} className="contact-grid">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="section-fade card-hover"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.5rem",
                borderRadius: "12px",
                background: "var(--card)",
                border: "1px solid var(--border)",
                textDecoration: "none",
                color: "inherit",
                transitionDelay: `${i * 0.07}s`,
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: link.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: link.color,
                    flexShrink: 0,
                  }}
                >
                  {link.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-syne), sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {link.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: "0.825rem",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {link.value}
                  </p>
                </div>
              </div>
              <ArrowRight size={18} style={{ color: "var(--muted-foreground)" }} />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
