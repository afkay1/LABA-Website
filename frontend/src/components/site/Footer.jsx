import { useLang } from "../../context/LanguageContext";
import { T, CONTACT } from "../../data/content";

const NAV = [
  { id: "story", label: T.nav.story },
  { id: "menu", label: T.nav.menu },
  { id: "experience", label: T.nav.experience },
  { id: "gallery", label: T.nav.gallery },
  { id: "reserve", label: T.nav.reserve },
];

export default function Footer({ lenis }) {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el && lenis) lenis.scrollTo(el, { offset: -20 });
    else if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative border-t border-laba-accent/25 bg-laba-ink py-16"
      data-testid="footer"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="font-display text-4xl text-white mb-4">
              L<span className="text-laba-accent">À</span>
              <span className="text-laba-accent">·</span>BA
            </div>
            <p className="font-body text-sm text-white/55 max-w-xs leading-relaxed">
              {t(T.footer.desc)}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-body text-[11px] uppercase tracking-[0.3em] text-laba-accent mb-5">
              {t(T.footer.nav)}
            </h4>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => goTo(n.id)}
                    data-testid={`footer-nav-${n.id}`}
                    className="font-body text-sm text-white/70 hover:text-laba-accent transition-colors"
                  >
                    {t(n.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[11px] uppercase tracking-[0.3em] text-laba-accent mb-5">
              {t(T.footer.contact)}
            </h4>
            <ul className="space-y-3 font-body text-sm text-white/70">
              <li>{t(T.contact.address)}</li>
              <li>
                <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-laba-accent transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-laba-accent transition-colors">
                  {CONTACT.instagramHandle}
                </a>
              </li>
              <li>{t(T.contact.hours)}</li>
            </ul>
          </div>
        </div>

        <div className="gold-line my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/45">
            © {year} LÀ·BA. {t(T.footer.rights)}
          </p>
          <p className="font-body text-xs text-white/45">
            {t(T.footer.designedBy)}{" "}
            <a
              href="https://myfrix.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="myfrix-link"
              className="text-laba-accent hover:text-white transition-colors tracking-widest"
            >
              MYFRIX
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
