import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "../../context/LanguageContext";
import { T, GALLERY } from "../../data/content";

export default function Gallery() {
  const { t } = useLang();
  const [idx, setIdx] = useState(null);
  const open = idx !== null;

  const close = useCallback(() => setIdx(null), []);
  const next = useCallback(
    (e) => {
      e?.stopPropagation();
      setIdx((i) => (i + 1) % GALLERY.length);
    },
    []
  );
  const prev = useCallback(
    (e) => {
      e?.stopPropagation();
      setIdx((i) => (i - 1 + GALLERY.length) % GALLERY.length);
    },
    []
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  return (
    <section
      id="gallery"
      className="relative bg-laba-primary py-24 md:py-32"
      data-testid="gallery-section"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-14 text-center">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-laba-accent mb-4">
            {t(T.gallery.eyebrow)}
          </p>
          <h2
            className="font-display text-4xl md:text-6xl text-white"
            data-testid="gallery-heading"
          >
            {t(T.gallery.heading)}
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {GALLERY.map((g, i) => (
            <motion.button
              key={i}
              onClick={() => setIdx(i)}
              data-testid={`gallery-item-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative mb-4 block w-full overflow-hidden break-inside-avoid"
            >
              <img
                src={g.src}
                alt={t(g.label)}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-laba-primary/0 transition-colors duration-500 group-hover:bg-laba-primary/40" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-start opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-display text-2xl text-white">{t(g.label)}</span>
              </div>
              <div className="absolute inset-4 border border-laba-accent/0 transition-all duration-500 group-hover:border-laba-accent/60" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-laba-ink/95 backdrop-blur-sm p-4"
            data-testid="lightbox"
          >
            <button
              onClick={close}
              data-testid="lightbox-close"
              className="absolute top-6 right-6 text-white/80 hover:text-laba-accent transition-colors"
            >
              <X size={30} />
            </button>
            <button
              onClick={prev}
              data-testid="lightbox-prev"
              className="absolute left-4 md:left-10 text-white/80 hover:text-laba-accent transition-colors"
            >
              <ChevronLeft size={40} />
            </button>
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw]"
            >
              <img
                src={GALLERY[idx].src}
                alt={t(GALLERY[idx].label)}
                className="max-h-[85vh] max-w-[90vw] object-contain border border-laba-accent/30"
              />
              <p className="mt-4 text-center font-display italic text-2xl text-laba-accent">
                {t(GALLERY[idx].label)}
              </p>
            </motion.div>
            <button
              onClick={next}
              data-testid="lightbox-next"
              className="absolute right-4 md:right-10 text-white/80 hover:text-laba-accent transition-colors"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
