import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "../../context/LanguageContext";
import { T, IMAGES } from "../../data/content";

export default function About() {
  const { t } = useLang();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section className="relative bg-laba-secondary" data-testid="about-section">
      {/* Full-width parallax banner */}
      <div ref={ref} className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <motion.img
          src={IMAGES.stage}
          alt="LÀ·BA stage"
          style={{ y, scale: 1.2 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-laba-secondary/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-laba-secondary via-transparent to-laba-secondary/40" />
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display italic text-5xl md:text-8xl text-white text-center marquee-bulb"
          >
            {t(T.about.overlay)}
          </motion.h2>
        </div>
      </div>

      {/* Two column */}
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-6xl text-white leading-tight"
              data-testid="about-heading"
            >
              {t(T.about.heading)}
            </motion.h3>
            <div className="gold-line my-8 max-w-xs" />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-body text-sm md:text-base text-white/70 leading-relaxed max-w-lg"
            >
              {t(T.about.body)}
            </motion.p>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <img
                src={IMAGES.arch}
                alt="LÀ·BA arch entrance"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
              <div className="absolute -top-5 -left-5 h-full w-full border border-laba-accent/40 -z-10" />
              {/* circular badge */}
              <div className="absolute -bottom-8 right-6 md:right-10 flex h-28 w-28 md:h-32 md:w-32 flex-col items-center justify-center rounded-full bg-laba-accent text-laba-secondary shadow-xl">
                <span className="font-display text-3xl md:text-4xl leading-none">4.3</span>
                <span className="font-body text-[9px] uppercase tracking-[0.2em] mt-1">
                  {t(T.about.badge)}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
