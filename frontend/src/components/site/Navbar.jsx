import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "../../context/LanguageContext";
import { T } from "../../data/content";

const LINKS = [
  { id: "story", label: T.nav.story },
  { id: "menu", label: T.nav.menu },
  { id: "experience", label: T.nav.experience },
  { id: "gallery", label: T.nav.gallery },
  { id: "reserve", label: T.nav.reserve },
];

export default function Navbar({ lenis }) {
  const { t, lang, toggle } = useLang();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el && lenis) lenis.scrollTo(el, { offset: -20 });
    else if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-[90] transition-all duration-500 ${
        solid
          ? "bg-laba-secondary/90 backdrop-blur-md border-b border-laba-accent/25 py-3"
          : "bg-transparent py-5"
      }`}
      data-testid="navbar"
    >
      <nav className="mx-auto max-w-[1440px] px-5 md:px-10 flex items-center justify-between">
        {/* Left links (desktop) */}
        <div className="hidden lg:flex items-center gap-8 flex-1">
          {LINKS.slice(0, 3).map((l) => (
            <button
              key={l.id}
              onClick={() => goTo(l.id)}
              data-testid={`nav-${l.id}`}
              className="font-body text-xs uppercase tracking-[0.25em] text-white/80 hover:text-laba-accent transition-colors"
            >
              {t(l.label)}
            </button>
          ))}
        </div>

        {/* Logo */}
        <button
          onClick={() => (lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" }))}
          data-testid="nav-logo"
          className="font-display text-3xl md:text-4xl tracking-tight text-white leading-none"
        >
          L<span className="text-laba-accent">À</span>
          <span className="text-laba-accent">·</span>BA
        </button>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
          {LINKS.slice(3).map((l) => (
            <button
              key={l.id}
              onClick={() => goTo(l.id)}
              data-testid={`nav-${l.id}`}
              className="font-body text-xs uppercase tracking-[0.25em] text-white/80 hover:text-laba-accent transition-colors"
            >
              {t(l.label)}
            </button>
          ))}
          <button
            onClick={toggle}
            data-testid="lang-toggle"
            className="flex items-center gap-2 border border-laba-accent/50 rounded-full px-4 py-1.5 text-xs font-body tracking-widest text-laba-accent hover:bg-laba-accent hover:text-laba-secondary transition-colors"
          >
            <Globe size={13} />
            {lang === "en" ? "العربية" : "EN"}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggle}
            data-testid="lang-toggle-mobile"
            className="flex items-center gap-1.5 border border-laba-accent/50 rounded-full px-3 py-1.5 text-[11px] font-body tracking-widest text-laba-accent"
          >
            <Globe size={12} />
            {lang === "en" ? "ع" : "EN"}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            data-testid="mobile-menu-toggle"
            className="text-white p-1"
            aria-label="Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden overflow-hidden bg-laba-secondary/95 backdrop-blur-md border-t border-laba-accent/20"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => goTo(l.id)}
                  data-testid={`mobile-nav-${l.id}`}
                  className="text-start font-display text-2xl text-white/90 hover:text-laba-accent transition-colors"
                >
                  {t(l.label)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
