import { motion } from "framer-motion";
import { Music, Wind, Wine, Landmark, Star, Clock } from "lucide-react";
import { useLang } from "../../context/LanguageContext";
import { T, EXPERIENCES } from "../../data/content";

const ICONS = { Music, Wind, Wine, Landmark, Star, Clock };

export default function Experience() {
  const { t } = useLang();
  return (
    <section
      id="experience"
      className="relative bg-laba-secondary py-24 md:py-32"
      data-testid="experience-section"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-laba-accent mb-4">
            {t(T.experience.eyebrow)}
          </p>
          <h2
            className="font-display text-4xl md:text-6xl text-white"
            data-testid="experience-heading"
          >
            {t(T.experience.heading)}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EXPERIENCES.map((exp, i) => {
            const Icon = ICONS[exp.icon] || Star;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="laba-hoverable group relative overflow-hidden border border-laba-primary bg-laba-primary/25 p-8 transition-all duration-500 hover:border-laba-accent hover:bg-laba-primary/40"
                data-testid={`experience-card-${i}`}
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-laba-accent/40 text-laba-accent transition-all duration-500 group-hover:bg-laba-accent group-hover:text-laba-secondary">
                  <Icon size={24} strokeWidth={1.4} />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                  {t(exp.title)}
                </h3>
                <p className="font-body text-sm text-white/60 leading-relaxed">
                  {t(exp.desc)}
                </p>
                <div className="absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-laba-accent/0 blur-2xl transition-all duration-500 group-hover:bg-laba-accent/20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
