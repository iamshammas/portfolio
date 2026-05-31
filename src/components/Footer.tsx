export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <span
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          MS<span style={{ color: "var(--accent)" }}>.</span>
        </span>
        <p style={{ fontSize: "0.8rem", color: "var(--muted-foreground)", fontFamily: "var(--font-jetbrains), monospace" }}>
          Built with Next.js · Muhammed Shammas Noorudheen
        </p>
      </div>
    </footer>
  );
}
