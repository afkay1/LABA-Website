import { useLang } from "../../context/LanguageContext";
import { T } from "../../data/content";

export default function MarqueeStrip() {
  const { t, lang } = useLang();
  const items = T.marquee.map((m) => t(m));
  const sep = "✦";
  const sequence = [...items, ...items, ...items];

  const animClass = lang === "ar" ? "animate-marquee-rtl" : "animate-marquee";

  return (
    <div
      className="relative w-full overflow-hidden border-y border-laba-accent/25 bg-laba-primary py-4"
      data-testid="marquee-strip"
    >
      <div className={`marquee-track ${animClass}`}>
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center">
            {sequence.map((it, i) => (
              <span key={`${dup}-${i}`} className="flex items-center">
                <span className="mx-6 font-display text-xl md:text-2xl italic text-white">
                  {it}
                </span>
                <span className="text-laba-accent text-sm">{sep}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
