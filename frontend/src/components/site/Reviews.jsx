import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "../../context/LanguageContext";

const REVIEWS = [
  {
    name: "Mohammed A.",
    date: { en: "January 2025", ar: "يناير 2025" },
    stars: 5,
    text: {
      en: "Absolutely stunning experience. The ambiance is like nothing else in Riyadh — the burgundy arch, the piano, the velvet curtains. Food was exceptional. The Wagyu tomahawk is a must.",
      ar: "تجربة رائعة للغاية. الأجواء لا مثيل لها في الرياض — القوس البرغندي، البيانو، الستائر المخملية. الطعام استثنائي. توماهوك الواغيو لا بد منه.",
    },
  },
  {
    name: "Sarah K.",
    date: { en: "February 2025", ar: "فبراير 2025" },
    stars: 5,
    text: {
      en: "LÀ·BA is not just a restaurant — it is a full experience. The live entertainment, the mocktails, and the seafood paella were all perfect. We will definitely be back.",
      ar: "لا.با ليس مجرد مطعم — بل تجربة متكاملة. الترفيه الحي والموكتيلات وبايلا المأكولات البحرية كانت مثالية. سنعود بالتأكيد.",
    },
  },
  {
    name: "Khalid R.",
    date: { en: "March 2025", ar: "مارس 2025" },
    stars: 5,
    text: {
      en: "Best restaurant in Riyadh without question. The atmosphere is cinematic, the service is flawless and the food quality is world class. The tiramisu is outstanding.",
      ar: "أفضل مطعم في الرياض بلا شك. الأجواء سينمائية، الخدمة لا تشوبها شائبة وجودة الطعام عالمية المستوى. التيراميسو رائع.",
    },
  },
  {
    name: "Nora M.",
    date: { en: "April 2025", ar: "أبريل 2025" },
    stars: 5,
    text: {
      en: "Visited for a birthday dinner and it exceeded all expectations. The staff were incredibly attentive, the food presentation is like art, and the shisha lounge is the perfect way to end the night.",
      ar: "زرناه لعشاء عيد ميلاد وتجاوز كل التوقعات. الموظفون كانوا منتبهين للغاية، تقديم الطعام كالفن، وصالة الشيشة طريقة مثالية لإنهاء الليلة.",
    },
  },
  {
    name: "Abdullah F.",
    date: { en: "May 2025", ar: "مايو 2025" },
    stars: 4,
    text: {
      en: "Amazing place with incredible vibes. The LaBa Signature coffee is something special. Interior design is breathtaking — every corner is photogenic. Highly recommend.",
      ar: "مكان رائع بأجواء لا تصدق. قهوة لابا سيجنتشر مميزة جداً. التصميم الداخلي خلاب — كل زاوية جذابة للتصوير. أنصح به بشدة.",
    },
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "fill-laba-accent text-laba-accent" : "text-white/20"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? REVIEWS.length - 1 : a - 1));
  const next = () => setActive((a) => (a === REVIEWS.length - 1 ? 0 : a + 1));

  const review = REVIEWS[active];

  return (
    <section
      id="reviews"
      className="relative bg-laba-secondary py-24 md:py-32"
      data-testid="reviews-section"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-laba-accent mb-4">
            {lang === "ar" ? "ما يقوله ضيوفنا" : "What Our Guests Say"}
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white">
            {lang === "ar" ? "تقييمات حقيقية" : "Real Reviews"}
          </h2>
          {/* Google rating summary */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-laba-accent text-laba-accent" />
              ))}
            </div>
            <span className="font-display text-2xl text-laba-accent">4.3</span>
            <span className="font-body text-sm text-white/55">
              {lang === "ar" ? "800+ تقييم على جوجل" : "800+ Reviews on Google"}
            </span>
          </div>
        </div>

        {/* Review card */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-laba-primary/60 border border-laba-accent/25 rounded-sm p-8 md:p-12 text-center"
            >
              {/* Quote mark */}
              <div className="font-display text-6xl text-laba-accent/30 leading-none mb-4">"</div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                <Stars count={review.stars} />
              </div>

              {/* Review text */}
              <p className="font-display italic text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                {lang === "ar" ? review.text.ar : review.text.en}
              </p>

              {/* Reviewer */}
              <div className="gold-line max-w-[80px] mx-auto mb-6" />
              <p className="font-body text-sm text-laba-accent tracking-widest uppercase">
                {review.name}
              </p>
              <p className="font-body text-xs text-white/40 mt-1">
                {lang === "ar" ? review.date.ar : review.date.en}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-laba-accent/40 flex items-center justify-center text-laba-accent hover:bg-laba-accent hover:text-laba-secondary transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === active ? "bg-laba-accent w-4" : "bg-white/25"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-laba-accent/40 flex items-center justify-center text-laba-accent hover:bg-laba-accent hover:text-laba-secondary transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Google link */}
          <div className="text-center mt-8">
            <a
              href="https://maps.google.com/?q=LA.BA+Restaurant+Riyadh"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs uppercase tracking-[0.25em] text-white/40 hover:text-laba-accent transition-colors"
            >
              {lang === "ar" ? "اقرأ المزيد من التقييمات على جوجل ←" : "Read More Reviews on Google →"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
