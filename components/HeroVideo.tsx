type Props = {
  videoUrl?: string;
  videoEmbed?: string;
  videoPoster?: string;
  aspectRatio?: string; // "9 / 16", "16 / 9", "1 / 1", etc.
  placeholderLabel?: string;
};

export function HeroVideo({
  videoUrl,
  videoEmbed,
  videoPoster,
  aspectRatio = "9 / 16",
  placeholderLabel = "Watch the 60-second intro",
}: Props) {
  const wrapperStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    aspectRatio,
    maxHeight: aspectRatio === "9 / 16" ? "640px" : undefined,
    borderRadius: "1.25rem",
    overflow: "hidden",
    background: "#0A0A0A",
    boxShadow:
      "0 30px 60px -20px rgba(26,26,26,0.35), 0 0 0 1px rgba(26,26,26,0.06)",
  };

  if (videoEmbed) {
    return (
      <div style={wrapperStyle}>
        <iframe
          src={videoEmbed}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          title="Watch Dawson"
        />
      </div>
    );
  }

  if (videoUrl) {
    return (
      <div style={wrapperStyle}>
        <video
          src={videoUrl}
          poster={videoPoster || undefined}
          controls
          playsInline
          preload="metadata"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        ...wrapperStyle,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        color: "rgba(255,255,255,0.6)",
        fontFamily: "Inter, sans-serif",
        background: "linear-gradient(135deg, #0A0A0A 0%, #2A2A2A 100%)",
      }}
    >
      <div
        style={{
          width: 78,
          height: 78,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.14)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <div style={{ fontSize: "0.95rem", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>
        {placeholderLabel}
      </div>
      <div
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        Video coming soon
      </div>
    </div>
  );
}
