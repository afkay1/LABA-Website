import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "../../context/LanguageContext";
import { T, MENU, MENU_IMAGES, CONTACT, currency } from "../../data/content";
import MenuCanvas from "./MenuCanvas";

export default function Menu() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(0);
  const cat = MENU[active];

  return (
    <section
      id="menu"
      className="relative bg-laba-primary py-24 md:py-32"
      data-testid="menu-section"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-laba-accent mb-4">
            {t(T.menu.eyebrow)}
          </p>
          <h2
            className="font-display text-4xl md:text-6xl lg:text-7xl text-white"
            data-testid="menu-heading"
          >
            {t(T.menu.heading)}
          </h2>
        </div>

        {/* Tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14"
          data-testid="menu-tabs"
        >
          {MENU.map((c, i) => (
            <button
              key={c.key}
              onClick={() => setActive(i)}
              data-testid={`menu-tab-${c.key}`}
              className={`font-body text-[11px] md:text-xs uppercase tracking-[0.15em] px-4 md:px-5 py-2.5 rounded-full border transition-all duration-300 ${
                i === active
                  ? "bg-laba-accent text-laba-secondary border-laba-accent"
                  : "border-laba-accent/30 text-white/70 hover:border-laba-accent hover:text-laba-accent"
              }`}
            >
              {t(c.name)}
            </button>
          ))}
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left: image + canvas */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-laba-accent/20 bg-laba-secondary">
              <AnimatePresence mode="wait">
                <motion.img
                  key={cat.key}
                  src={MENU_IMAGES[cat.key]}
                  alt={t(cat.name)}
                  initial={{ opacity: 0, scale: 1.12 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-laba-secondary/35" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 60%, rgba(139,0,0,0.1), rgba(26,0,0,0.65))",
                }}
              />
              <MenuCanvas type={cat.canvas} />
              <div className="absolute bottom-0 inset-x-0 z-20 p-6 md:p-8">
                <div className="font-body text-[10px] uppercase tracking-[0.35em] text-laba-accent mb-1">
                  {String(active + 1).padStart(2, "0")} / {String(MENU.length).padStart(2, "0")}
                </div>
                <div className="font-display text-3xl md:text-4xl text-white">
                  {t(cat.name)}
                </div>
              </div>
            </div>
          </div>

          {/* Right: details */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
                data-testid="menu-detail"
              >
                <h3 className="font-display italic text-3xl md:text-5xl text-laba-accent">
                  {t(cat.title)}
                </h3>
                <p className="font-body text-sm md:text-base text-white/70 max-w-xl mt-4 leading-relaxed">
                  {t(cat.desc)}
                </p>
                <div className="gold-line my-8" />

                <ul className="space-y-5">
                  {cat.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      className="group flex items-baseline gap-4"
                    >
                      <span className="font-body text-sm md:text-base text-white/90 group-hover:text-laba-accent transition-colors">
                        {t(item)}
                      </span>
                      <span className="flex-1 border-b border-dotted border-laba-accent/30 translate-y-[-4px]" />
                      <span className="font-display text-lg md:text-xl text-laba-accent whitespace-nowrap">
                        {currency(lang, item.price)}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <a
                  href={CONTACT.menuLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="view-full-menu"
                  className="group inline-flex items-center gap-2 mt-10 font-body text-xs uppercase tracking-[0.25em] text-laba-accent"
                >
                  {t(T.menu.viewFull)}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
