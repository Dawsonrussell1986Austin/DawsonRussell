import { TRAINING } from "@/lib/constants";

export function HeroVideo() {
  const wrapperStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    aspectRatio: "9 / 16",
    maxHeight: "640px",
    borderRadius: "1.25rem",
    overflow: "hidden",
    background: "#1A1A1A",
    boxShadow:
      "0 30px 60px -20px rgba(26,26,26,0.35), 0 0 0 1px rgba(26,26,26,0.06)",
  };

  if (TRAINING.videoEmbed) {
    return (
      <div style={wrapperStyle}>
        <iframe
          src={TRAINING.videoEmbed}
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

  if (TRAINING.videoUrl) {
    return (
      <div style={wrapperStyle}>
        <video
          src={TRAINING.videoUrl}
          poster={TRAINING.videoPoster || undefined}
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

  // Placeholder — visible until a video is set in lib/constants.ts
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
        background:
          "linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)",
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
        Watch the 60-second intro
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
