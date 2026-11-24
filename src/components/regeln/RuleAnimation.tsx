"use client";

import { useRef, useEffect, useCallback } from "react";

export interface AnimationDemo {
  area: "serve" | "rally";
  title: string;
  path: [number, number][];
  labels: string[];
}

export default function RuleAnimation({ demo }: { demo: AnimationDemo }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  const draw = useCallback(
    (progress: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.fillStyle = "#0D0D0D";
      ctx.fillRect(0, 0, 420, 236);

      ctx.fillStyle = "#1A1A1A";
      ctx.fillRect(38, 40, 344, 140);

      ctx.strokeStyle = "#2A2A2A";
      ctx.lineWidth = 2;
      ctx.strokeRect(38, 40, 344, 140);

      ctx.strokeStyle = "#A89880";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (const x of [112, 210, 308]) {
        ctx.moveTo(x, 40);
        ctx.lineTo(x, 180);
      }
      ctx.moveTo(112, 110);
      ctx.lineTo(308, 110);
      ctx.stroke();

      ctx.lineWidth = 4;
      for (const x of [38, 382]) {
        ctx.strokeStyle = "#C4973A";
        ctx.beginPath();
        ctx.moveTo(x, 40);
        ctx.lineTo(x, 180);
        ctx.stroke();
      }

      for (const y of [40, 180]) {
        for (let x = 45; x < 382; x += 12) {
          ctx.strokeStyle = x < 88 || x > 333 ? "#C4973A" : "#2A2A2A";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(x, y - 3);
          ctx.lineTo(x + 4, y + 3);
          ctx.stroke();
        }
      }

      ctx.font = "bold 11px system-ui";
      ctx.textAlign = "center";
      ctx.fillStyle = "#C4973A";
      ctx.fillText("Glas", 57, 34);
      ctx.fillText("Glas", 363, 34);
      ctx.fillStyle = "#F5F0E8";
      ctx.fillText("Gitter", 157, 21);
      ctx.fillText("Netz", 210, 34);
      ctx.fillText("Gitter", 263, 21);
      ctx.fillStyle = "#A89880";
      ctx.fillText("Aufschlaglinie", 112, 196);
      ctx.fillText("Aufschlaglinie", 308, 196);

      if (demo.area === "serve") {
        ctx.fillStyle = "rgba(196,151,58,0.12)";
        ctx.fillRect(211, 42, 96, 67);
        ctx.font = "11px system-ui";
        ctx.fillStyle = "#F5F0E8";
        ctx.fillText("Zielfeld", 259, 101);
      }

      const index = Math.floor(progress);
      const from = demo.path[index];
      const to = demo.path[index + 1] ?? from;
      const mix = progress - index;
      const bx = from[0] + (to[0] - from[0]) * mix;
      const by = from[1] + (to[1] - from[1]) * mix;

      ctx.strokeStyle = "#E8C97A";
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(demo.path[0][0], demo.path[0][1]);
      demo.path.slice(1, index + 1).forEach((pt) => ctx.lineTo(pt[0], pt[1]));
      ctx.lineTo(bx, by);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = "#E8C97A";
      ctx.beginPath();
      ctx.arc(bx, by, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = "14px system-ui";
      ctx.textAlign = "center";
      ctx.fillStyle = "#F5F0E8";
      ctx.fillText(demo.labels[index] ?? "", 210, 220);
    },
    [demo]
  );

  useEffect(() => {
    draw(demo.path.length - 1);
    return () => cancelAnimationFrame(frameRef.current);
  }, [draw, demo.path.length]);

  const handlePlay = () => {
    cancelAnimationFrame(frameRef.current);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      draw(demo.path.length - 1);
      return;
    }

    let start: number | undefined;

    const animate = (now: number) => {
      start ??= now;
      const progress = Math.min((now - start) / 720, demo.path.length - 1);
      draw(progress);
      if (progress < demo.path.length - 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  };

  return (
    <figure className="m-0">
      <canvas
        ref={canvasRef}
        width={420}
        height={236}
        role="img"
        aria-label={`${demo.title}. Spielfeld mit Netz, Aufschlaglinien, Glas und Gitter. ${demo.labels.join(", ")}`}
        className="w-full h-auto block"
        style={{ background: "#0D0D0D" }}
      />
      <figcaption className="mt-2 text-sm font-medium" style={{ color: "var(--gold-light)" }}>
        {demo.title}
      </figcaption>
      <button
        onClick={handlePlay}
        className="mt-2 text-xs px-3 py-1.5 uppercase tracking-wider transition-colors duration-200"
        style={{
          border: "1px solid var(--gold-dark)",
          background: "var(--surface-2)",
          color: "var(--text-muted)",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--surface)";
          e.currentTarget.style.color = "var(--text)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--surface-2)";
          e.currentTarget.style.color = "var(--text-muted)";
        }}
        aria-label={`Animation abspielen: ${demo.title}`}
      >
        ▶ Animation abspielen
      </button>
    </figure>
  );
}
