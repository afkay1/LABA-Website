import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { useLang } from "../../context/LanguageContext";
import { T, IMAGES } from "../../data/content";

// Curtain reveal timing (kept short so above-the-fold content reveals fast).
const CURTAIN_DELAY = 0.55;

export default function Hero({ lenis }) {
  const { t } = useLang();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToMenu = () => {
    const el = document.getElementById("menu");
    if (el && lenis) lenis.scrollTo(el, { offset: -20 });
  };
  const scrollToReserve = () => {
    const el = document.getElementById("reserve");
    if (el && lenis) lenis.scrollTo(el, { offset: -20 });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-laba-secondary"
      data-testid="hero-section"
    >
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
        <img
          src={IMAGES.hero}
          alt="LÀ·BA interior"
          className="h-full w-full object-cover"
        />
        {/* Lighter overlay so the restaurant photo stays clearly visible */}
        <div className="absolute inset-0 bg-black/35" />
        {/* Warm red/gold gradient at the BOTTOM only */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background:
              "linear-gradient(to top, rgba(26,0,0,0.92) 0%, rgba(139,0,0,0.28) 45%, rgba(201,168,76,0.06) 70%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: CURTAIN_DELAY + 0.5, duration: 0.8 }}
          className="mb-6 font-body text-[10px] md:text-xs uppercase tracking-[0.4em] text-laba-accent"
          data-testid="hero-eyebrow"
        >
          {t(T.hero.eyebrow)}
        </motion.p>

        {/* Masked line-by-line title */}
        <h1 className="font-display leading-[0.85] text-white" data-testid="hero-title">
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[26vw] md:text-[17vw] lg:text-[15rem]"
              style={{ textShadow: "0 6px 40px rgba(0,0,0,0.55)" }}
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: CURTAIN_DELAY, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              L<span className="text-laba-accent">À</span>
              <span className="gold-dot mx-1 md:mx-2">·</span>BA
            </motion.span>
          </span>
        </h1>

        <span className="block overflow-hidden mt-2">
          <motion.span
            className="block font-display italic text-3xl md:text-5xl tracking-wide text-white/95"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: CURTAIN_DELAY + 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            data-testid="hero-tagline"
          >
            {t(T.hero.tagline)}
          </motion.span>
        </span>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: CURTAIN_DELAY + 0.9, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={scrollToMenu}
            data-testid="hero-explore-menu"
            className="laba-hoverable rounded-full bg-laba-primary px-9 py-3.5 font-body text-xs uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-laba-accent hover:text-laba-secondary"
          >
            {t(T.hero.exploreMenu)}
          </button>
          <button
            onClick={scrollToReserve}
            data-testid="hero-reserve"
            className="laba-hoverable rounded-full border border-laba-accent px-9 py-3.5 font-body text-xs uppercase tracking-[0.25em] text-laba-accent transition-all duration-300 hover:bg-laba-accent hover:text-laba-secondary"
          >
            {t(T.hero.reserve)}
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToMenu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: CURTAIN_DELAY + 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-laba-accent"
        data-testid="scroll-indicator"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/60">
          {t(T.hero.scroll)}
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.button>

      {/* Curtain overlay panels */}
      <motion.div
        className="absolute inset-y-0 left-0 z-40 w-1/2 origin-left"
        style={{
          background:
            "linear-gradient(90deg, #4d0000 0%, #8B0000 55%, #6a0000 100%)",
          boxShadow: "inset -30px 0 60px rgba(0,0,0,0.6)",
        }}
        initial={{ x: 0 }}
        animate={{ x: "-101%" }}
        transition={{ delay: 0.4, duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <CurtainPleats side="left" />
      </motion.div>
      <motion.div
        className="absolute inset-y-0 right-0 z-40 w-1/2 origin-right"
        style={{
          background:
            "linear-gradient(270deg, #4d0000 0%, #8B0000 55%, #6a0000 100%)",
          boxShadow: "inset 30px 0 60px rgba(0,0,0,0.6)",
        }}
        initial={{ x: 0 }}
        animate={{ x: "101%" }}
        transition={{ delay: 0.4, duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <CurtainPleats side="right" />
      </motion.div>
    </section>
  );
}

function CurtainPleats({ side }) {
  const pleats = Array.from({ length: 10 });
  return (
    <div className="absolute inset-0 flex">
      {pleats.map((_, i) => (
        <div
          key={i}
          className="h-full flex-1"
          style={{
            background:
              i % 2 === 0
                ? "linear-gradient(90deg, rgba(0,0,0,0.28), rgba(255,255,255,0.05))"
                : "linear-gradient(90deg, rgba(255,255,255,0.04), rgba(0,0,0,0.28))",
          }}
        />
      ))}
    </div>
  );
}
