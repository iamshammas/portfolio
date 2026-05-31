"use client";

import { useEffect, useState } from "react";
import { GitBranch, Link2, Mail, Download, ArrowDown, Shield } from "lucide-react";

const roles = ["Python Developer", "Django Developer", "Backend Engineer", "Security-Conscious Builder"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 40 : 80;

    if (!deleting && charIdx < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    }
    if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, speed / 2);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
  }, [charIdx, deleting, roleIdx]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "6rem 1.5rem 4rem",
      }}
    >
      {/* Ambient background */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "50vw",
          height: "50vw",
          maxWidth: "600px",
          maxHeight: "600px",
          background:
            "radial-gradient(ellipse, color-mix(in srgb, var(--accent) 8%, transparent) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "40vw",
          height: "40vw",
          maxWidth: "400px",
          maxHeight: "400px",
          background:
            "radial-gradient(ellipse, color-mix(in srgb, var(--security) 6%, transparent) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.375rem 0.875rem",
            borderRadius: "100px",
            border: "1px solid var(--border)",
            background: "var(--muted)",
            marginBottom: "2rem",
            animation: "slideUp 0.6s ease forwards",
            opacity: 0,
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--success)",
              display: "inline-block",
              animation: "pulse-glow 2s ease infinite",
            }}
          />
          <span
            style={{
              fontSize: "0.8rem",
              color: "var(--muted-foreground)",
              fontFamily: "var(--font-jetbrains), monospace",
              fontWeight: 500,
            }}
          >
            Open to software engineering roles
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            margin: "0 0 0.5rem",
            animation: "slideUp 0.6s ease 0.1s forwards",
            opacity: 0,
          }}
        >
          Muhammed
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--security))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Shammas
          </span>
        </h1>

        {/* Animated role */}
        <div
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            color: "var(--accent)",
            marginBottom: "1.5rem",
            height: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "2px",
            animation: "slideUp 0.6s ease 0.2s forwards",
            opacity: 0,
          }}
        >
          <span style={{ color: "var(--muted-foreground)" }}>$ </span>
          {displayed}
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1.2em",
              backgroundColor: "var(--accent)",
              animation: "blink 1s step-end infinite",
            }}
          />
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "var(--muted-foreground)",
            maxWidth: "560px",
            lineHeight: 1.7,
            marginBottom: "0.75rem",
            animation: "slideUp 0.6s ease 0.3s forwards",
            opacity: 0,
          }}
        >
          Building backends with Python and Django. Thinking like an attacker to
          build systems that are harder to break.
        </p>

        {/* Security badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "0.3rem 0.75rem",
            borderRadius: "6px",
            background: "var(--security-muted)",
            border: "1px solid color-mix(in srgb, var(--security) 30%, transparent)",
            marginBottom: "2.5rem",
            animation: "slideUp 0.6s ease 0.35s forwards",
            opacity: 0,
          }}
        >
          <Shield size={13} style={{ color: "var(--security)" }} />
          <span
            style={{
              fontSize: "0.78rem",
              color: "var(--security)",
              fontFamily: "var(--font-jetbrains), monospace",
              fontWeight: 500,
            }}
          >
            CPT · Bug Bounty Hunter · Security-Conscious Dev
          </span>
        </div>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.875rem",
            marginBottom: "3rem",
            animation: "slideUp 0.6s ease 0.4s forwards",
            opacity: 0,
          }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "all 0.2s ease",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            View My Work
          </a>

          <a
            href="/resume.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              background: "transparent",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "all 0.2s ease",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <Download size={16} />
            Resume
          </a>

          {/* Social icons */}
          {[
            { href: "https://github.com/iamshammas", icon: <GitBranch size={18} />, label: "GitHub" },
            { href: "https://linkedin.com/in/iamshammas", icon: <Link2 size={18} />, label: "LinkedIn" },
            { href: "mailto:muhdshammas612@gmail.com", icon: <Mail size={18} />, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={s.label}
              style={{
                width: "44px",
                height: "44px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                color: "var(--muted-foreground)",
                textDecoration: "none",
                transition: "all 0.2s ease",
                background: "var(--muted)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--muted-foreground)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Scroll cue */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--muted-foreground)",
            fontSize: "0.8rem",
            animation: "slideUp 0.6s ease 0.5s forwards",
            opacity: 0,
          }}
        >
          <ArrowDown size={14} style={{ animation: "float 2s ease-in-out infinite" }} />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
