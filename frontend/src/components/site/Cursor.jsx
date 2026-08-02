import { useEffect, useRef, useState } from "react";

// Custom gold cursor: small dot + trailing ring that expands on interactive hover.
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    const dot = dotRef.current;
    const ring = ringRef.current;
    let ringX = 0,
      ringY = 0,
      mouseX = 0,
      mouseY = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
      }
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ring) {
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
      }
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e) => {
      const interactive = e.target.closest(
        'a, button, input, textarea, select, [role="button"], .laba-hoverable'
      );
      if (ring) ring.classList.toggle("hovered", !!interactive);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="laba-cursor-dot" aria-hidden />
      <div ref={ringRef} className="laba-cursor-ring" aria-hidden />
    </>
  );
}
