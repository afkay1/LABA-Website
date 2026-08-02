import { useEffect, useRef } from "react";

// Per-category canvas animations. Each `type` configures a lightweight particle system.
export default function MenuCanvas({ type }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr;
    let particles = [];

    const GOLD = "#C9A84C";
    const rand = (a, b) => a + Math.random() * (b - a);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = () => {
      particles = [];
      const configs = {
        coffee: () => ({ n: 26, kind: "coffee" }),
        sliders: () => ({ n: 40, kind: "sliders" }),
        desserts: () => ({ n: 26, kind: "desserts" }),
        drinks: () => ({ n: 34, kind: "drinks" }),
        seafood: () => ({ n: 40, kind: "seafood" }),
        pizza: () => ({ n: 16, kind: "pizza" }),
        restaurant: () => ({ n: 40, kind: "restaurant" }),
        breakfast: () => ({ n: 30, kind: "breakfast" }),
      };
      const cfg = (configs[type] || configs.restaurant)();
      for (let i = 0; i < cfg.n; i++) {
        particles.push(makeParticle(cfg.kind, i, cfg.n));
      }
    };

    const makeParticle = (kind, i, n) => {
      switch (kind) {
        case "coffee":
          // rising steam + beans
          return {
            kind: i % 4 === 0 ? "bean" : "steam",
            x: rand(0, w),
            y: rand(h * 0.4, h),
            vy: rand(0.3, 0.9),
            r: i % 4 === 0 ? rand(3, 6) : rand(10, 26),
            a: rand(0.15, 0.5),
            wob: rand(0, Math.PI * 2),
          };
        case "sliders":
          // sesame seeds raining
          return {
            kind: "seed",
            x: rand(0, w),
            y: rand(-h, 0),
            vy: rand(1.2, 3),
            r: rand(1.5, 3),
            rot: rand(0, Math.PI),
            a: rand(0.3, 0.8),
          };
        case "desserts":
          // sugar sparkles + caramel drips
          return {
            kind: i % 5 === 0 ? "drip" : "spark",
            x: rand(0, w),
            y: i % 5 === 0 ? rand(-20, 0) : rand(0, h),
            vy: i % 5 === 0 ? rand(0.4, 1) : 0,
            len: rand(20, 70),
            r: rand(1, 2.5),
            a: rand(0.2, 0.9),
            tw: rand(0, Math.PI * 2),
          };
        case "drinks":
          // bubbles rising + ice glints
          return {
            kind: "bubble",
            x: rand(0, w),
            y: rand(0, h),
            vy: rand(0.5, 1.6),
            r: rand(2, 7),
            a: rand(0.2, 0.6),
            wob: rand(0, Math.PI * 2),
          };
        case "seafood":
        case "restaurant":
          // orbiting / floating gold particles
          return {
            kind: "orbit",
            cx: w / 2,
            cy: h / 2,
            radius: rand(30, Math.min(w, h) * 0.5),
            angle: rand(0, Math.PI * 2),
            speed: rand(0.002, 0.01) * (kind === "seafood" ? 1 : 0.6),
            r: rand(1, 3),
            a: rand(0.2, 0.7),
          };
        case "pizza":
          // stretching cheese strands
          return {
            kind: "strand",
            x: rand(w * 0.15, w * 0.85),
            y: rand(0, h * 0.3),
            len: 0,
            maxLen: rand(h * 0.3, h * 0.7),
            grow: rand(0.4, 1.2),
            sway: rand(0, Math.PI * 2),
            a: rand(0.15, 0.4),
          };
        case "breakfast":
        default:
          // warm light rays + steam
          return {
            kind: i % 3 === 0 ? "ray" : "steam",
            x: rand(0, w),
            y: rand(h * 0.4, h),
            vy: rand(0.2, 0.7),
            r: rand(10, 24),
            a: rand(0.1, 0.35),
            wob: rand(0, Math.PI * 2),
          };
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        ctx.save();
        switch (p.kind) {
          case "steam":
          case "ray": {
            p.y -= p.vy;
            p.wob += 0.02;
            const x = p.x + Math.sin(p.wob) * 12;
            const g = ctx.createRadialGradient(x, p.y, 0, x, p.y, p.r);
            g.addColorStop(0, `rgba(201,168,76,${p.a})`);
            g.addColorStop(1, "rgba(201,168,76,0)");
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            if (p.y < -p.r) { p.y = h + p.r; p.x = rand(0, w); }
            break;
          }
          case "bean": {
            p.y -= p.vy;
            p.wob += 0.03;
            ctx.translate(p.x + Math.sin(p.wob) * 8, p.y);
            ctx.rotate(p.wob);
            ctx.fillStyle = `rgba(90,30,20,${p.a + 0.3})`;
            ctx.beginPath();
            ctx.ellipse(0, 0, p.r, p.r * 1.5, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = `rgba(201,168,76,${p.a})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(0, -p.r * 1.3);
            ctx.lineTo(0, p.r * 1.3);
            ctx.stroke();
            if (p.y < -20) { p.y = h + 20; }
            break;
          }
          case "seed": {
            p.y += p.vy;
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.fillStyle = `rgba(232,210,150,${p.a})`;
            ctx.beginPath();
            ctx.ellipse(0, 0, p.r, p.r * 2, 0, 0, Math.PI * 2);
            ctx.fill();
            if (p.y > h + 10) { p.y = -10; p.x = rand(0, w); }
            break;
          }
          case "drip": {
            p.y += p.vy;
            const grad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + p.len);
            grad.addColorStop(0, `rgba(201,168,76,${p.a})`);
            grad.addColorStop(1, "rgba(160,110,40,0)");
            ctx.strokeStyle = grad;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x, p.y + p.len);
            ctx.stroke();
            ctx.fillStyle = `rgba(201,168,76,${p.a})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y + p.len, 2.5, 0, Math.PI * 2);
            ctx.fill();
            if (p.y > h) { p.y = -p.len; p.x = rand(0, w); }
            break;
          }
          case "spark": {
            p.tw += 0.08;
            const s = (Math.sin(p.tw) + 1) / 2;
            ctx.fillStyle = `rgba(255,240,200,${p.a * s})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * s + 0.5, 0, Math.PI * 2);
            ctx.fill();
            break;
          }
          case "bubble": {
            p.y -= p.vy;
            p.wob += 0.05;
            const x = p.x + Math.sin(p.wob) * 6;
            ctx.strokeStyle = `rgba(255,255,255,${p.a})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(x, p.y, p.r, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fillStyle = `rgba(201,168,76,${p.a * 0.3})`;
            ctx.fill();
            if (p.y < -p.r) { p.y = h + p.r; p.x = rand(0, w); }
            break;
          }
          case "orbit": {
            p.angle += p.speed;
            const x = p.cx + Math.cos(p.angle) * p.radius;
            const y = p.cy + Math.sin(p.angle) * p.radius * 0.6;
            ctx.fillStyle = `rgba(201,168,76,${p.a})`;
            ctx.shadowColor = GOLD;
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(x, y, p.r, 0, Math.PI * 2);
            ctx.fill();
            break;
          }
          case "strand": {
            if (p.len < p.maxLen) p.len += p.grow;
            p.sway += 0.03;
            ctx.strokeStyle = `rgba(232,210,150,${p.a})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.quadraticCurveTo(
              p.x + Math.sin(p.sway) * 14,
              p.y + p.len / 2,
              p.x + Math.sin(p.sway) * 6,
              p.y + p.len
            );
            ctx.stroke();
            if (p.len >= p.maxLen) {
              p.len = 0;
              p.x = rand(w * 0.15, w * 0.85);
              p.maxLen = rand(h * 0.3, h * 0.7);
            }
            break;
          }
          default:
            break;
        }
        ctx.restore();
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    spawn();
    draw();
    const onResize = () => { resize(); spawn(); };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [type]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full z-10"
      data-testid={`menu-canvas-${type}`}
      aria-hidden
    />
  );
}
