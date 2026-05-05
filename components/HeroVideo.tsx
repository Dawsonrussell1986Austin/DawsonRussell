"use client";

import { useRef, useState } from "react";

type Props = {
  videoUrl?: string;
  videoEmbed?: string;
  videoPoster?: string;
  aspectRatio?: string; // "9 / 16", "16 / 9", "1 / 1", etc.
  placeholderLabel?: string;
};

const ACCENT = "#00D26A";

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
    borderRadius: "1.25rem",
    overflow: "hidden",
    background: "#0A0A0A",
    boxShadow:
      "0 30px 60px -20px rgba(10,10,10,0.35), 0 0 0 1px rgba(10,10,10,0.06)",
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
      <PlayableVideo
        wrapperStyle={wrapperStyle}
        videoUrl={videoUrl}
        videoPoster={videoPoster}
        placeholderLabel={placeholderLabel}
      />
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
      <PlayCircle />
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

function PlayableVideo({
  wrapperStyle,
  videoUrl,
  videoPoster,
  placeholderLabel,
}: {
  wrapperStyle: React.CSSProperties;
  videoUrl: string;
  videoPoster?: string;
  placeholderLabel: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const onPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().then(() => setStarted(true)).catch(() => {
      // play() can reject (e.g. autoplay policy); user can still hit the
      // native control we reveal next.
      setStarted(true);
    });
  };

  return (
    <div style={wrapperStyle}>
      <video
        ref={videoRef}
        src={videoUrl}
        poster={videoPoster || undefined}
        controls={started}
        playsInline
        preload="metadata"
        onPlay={() => setStarted(true)}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          background: "#0A0A0A",
        }}
      />
      {!started ? (
        <button
          type="button"
          onClick={onPlay}
          aria-label="Play video"
          style={{
            position: "absolute",
            inset: 0,
            border: 0,
            padding: 0,
            margin: 0,
            cursor: "pointer",
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.45) 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.9rem",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            transition: "background 0.25s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "linear-gradient(180deg, rgba(10,10,10,0.05) 0%, rgba(10,10,10,0.35) 100%)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.45) 100%)";
          }}
        >
          <PlayCircle hover />
          <span
            style={{
              fontSize: "0.95rem",
              fontWeight: 500,
              letterSpacing: "0.01em",
              color: "rgba(255,255,255,0.95)",
              textShadow: "0 1px 2px rgba(0,0,0,0.4)",
            }}
          >
            {placeholderLabel}
          </span>
          <span
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: ACCENT,
              fontWeight: 600,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            ● 55 sec
          </span>
        </button>
      ) : null}
    </div>
  );
}

function PlayCircle({ hover = false }: { hover?: boolean }) {
  // Outer ring + inner filled circle + play triangle.
  return (
    <span
      aria-hidden
      style={{
        position: "relative",
        width: 86,
        height: 86,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255,255,255,0.06)",
        border: "1.5px solid rgba(255,255,255,0.4)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        boxShadow: hover
          ? `0 0 0 6px ${ACCENT}33, 0 14px 40px rgba(0,0,0,0.4)`
          : "0 10px 30px rgba(0,0,0,0.3)",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
      }}
    >
      <span
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "#fff",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A0A0A" aria-hidden>
          <path d="M8 5.5v13a1 1 0 0 0 1.55.83l10-6.5a1 1 0 0 0 0-1.66l-10-6.5A1 1 0 0 0 8 5.5z" />
        </svg>
      </span>
    </span>
  );
}
