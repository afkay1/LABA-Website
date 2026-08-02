import { useMemo } from "react";
import { motion } from "framer-motion";

// Floating gold & red particles rising from the bottom of the hero.
export default function Particles({ count = 26 }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 5,
        delay: Math.random() * 8,
        duration: 9 + Math.random() * 10,
        gold: Math.random() > 0.4,
        drift: (Math.random() - 0.5) * 80,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-[5]" aria-hidden>
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: `${d.left}%`,
            bottom: -20,
            width: d.size,
            height: d.size,
            background: d.gold ? "#C9A84C" : "#FF5A3C",
            boxShadow: d.gold
              ? "0 0 8px rgba(201,168,76,0.9)"
              : "0 0 8px rgba(255,90,60,0.7)",
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -600 - Math.random() * 300],
            x: [0, d.drift],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
