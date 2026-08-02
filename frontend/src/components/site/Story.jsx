import { motion } from "framer-motion";
import { useLang } from "../../context/LanguageContext";
import { T, IMAGES } from "../../data/content";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Story() {
  const { t } = useLang();
  return (
    <section
      id="story"
      className="relative mx-auto max-w-[1440px] px-5 md:px-10 py-24 md:py-36"
      data-testid="story-section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          className="lg:col-span-5 relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={reveal}
        >
          <div className="relative">
            <img
              src={IMAGES.interior}
              alt="LÀ·BA dining room"
              className="w-full h-[420px] md:h-[560px] object-cover"
            />
            <div className="absolute -bottom-5 -right-5 h-full w-full border border-laba-accent/40 -z-10" />
          </div>
        </motion.div>

        {/* Text */}
        <div className="lg:col-span-7">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
            className="font-body text-xs uppercase tracking-[0.4em] text-laba-accent mb-5"
          >
            {t(T.hero.tagline)}
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            variants={reveal}
            className="font-display text-4xl md:text-6xl leading-tight text-white max-w-xl"
            data-testid="story-heading"
          >
            {t(T.story.heading)}
          </motion.h2>

          <div className="gold-line my-8 max-w-xs" />

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            variants={reveal}
            className="font-body text-sm md:text-base leading-relaxed text-white/70 max-w-xl"
          >
            {t(T.story.body1)}
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={3}
            variants={reveal}
            className="font-body text-sm md:text-base leading-relaxed text-white/70 max-w-xl mt-4"
          >
            {t(T.story.body2)}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={4}
            variants={reveal}
            className="mt-12 grid grid-cols-3 gap-4 max-w-xl"
            data-testid="story-stats"
          >
            {T.story.stats.map((s, i) => (
              <div key={i} className="border-t border-laba-accent/30 pt-4">
                <div className="font-display text-4xl md:text-5xl text-laba-accent">
                  {s.value}
                </div>
                <div className="font-body text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/60 mt-1">
                  {t(s.label)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
