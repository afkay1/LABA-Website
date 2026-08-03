import { motion } from "framer-motion";
import { Music, Wind, Wine, Landmark, Star, Clock, Users, UtensilsCrossed, Sparkles } from "lucide-react";
import { useLang } from "../../context/LanguageContext";
import { T, EXPERIENCES, IMAGES, CONTACT } from "../../data/content";

const ICONS = { Music, Wind, Wine, Landmark, Star, Clock };

const STATS = [
  { value: "800+", label: { en: "Happy Guests", ar: "ضيف سعيد" } },
  { value: "4.3★", label: { en: "Google Rating", ar: "تقييم جوجل" } },
  { value: "12PM", label: { en: "Opens Daily", ar: "يفتح يومياً" } },
  { value: "3AM", label: { en: "Last Orders", ar: "آخر طلب" } },
];

const GROUP_FEATURES = [
  {
    icon: Users,
    title: { en: "Private Tables", ar: "طاولات خاصة" },
    desc: { en: "Exclusive seating for your group", ar: "جلوس حصري لمجموعتك" },
  },
  {
    icon: UtensilsCrossed,
    title: { en: "Custom Menu", ar: "قائمة مخصصة" },
    desc: { en: "Tailored dining for your occasion", ar: "طعام مصمم لمناسبتك" },
  },
  {
    icon: Music,
    title: { en: "Live Entertainment", ar: "ترفيه حي" },
    desc: { en: "Piano and DJ for your event", ar: "بيانو ودي جي لحفلتك" },
  },
  {
    icon: Sparkles,
    title: { en: "Full Service", ar: "خدمة متكاملة" },
    desc: { en: "Dedicated staff for your celebration", ar: "طاقم مخصص لاحتفالك" },
  },
];

export default function Experience() {
  const { t, lang } = useLang();

  const waMessage = encodeURIComponent(
    lang === "ar"
      ? "السلام عليكم، أريد الاستفسار عن حجز جماعي في لا.با"
      : "Hello LÀ·BA, I would like to inquire about a group dining reservation."
  );

  return (
    <section id="experience" className="relative bg-laba-secondary py-24 md:py-32" data-testid="experience-section">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-laba-accent mb-4">
            {t(T.experience.eyebrow)}
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white" data-testid="experience-heading">
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

      {/* Visual Stats Strip */}
      <div className="relative mt-24 overflow-hidden">
        <img
          src={IMAGES.interior}
          alt="LÀ·BA Interior"
          className="w-full h-64 md:h-80 object-cover"
          style={{ filter: "brightness(0.3)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-laba-secondary/80 via-transparent to-laba-secondary/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {STATS.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="font-display text-4xl md:text-5xl text-laba-accent mb-2">
                    {s.value}
                  </div>
                  <div className="font-body text-xs uppercase tracking-[0.25em] text-white/60">
                    {lang === "ar" ? s.label.ar : s.label.en}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Group Dining */}
      <div className="relative mt-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.stage}
            alt="LÀ·BA Stage"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.2)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-laba-secondary/60 via-transparent to-laba-secondary/60" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 py-24">
          <div className="text-center mb-16">
            <p className="font-body text-xs uppercase tracking-[0.4em] text-laba-accent mb-4">
              {lang === "ar" ? "المناسبات الخاصة" : "Private Events"}
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-white mb-6">
              {lang === "ar" ? "احتفل مع لا·با" : "Host Your Event at LÀ·BA"}
            </h2>
            <p className="font-body text-sm text-white/60 max-w-2xl mx-auto leading-relaxed">
              {lang === "ar"
                ? "سواء كانت احتفالية عيد ميلاد، عشاء شركة، أو تجمع عائلي — لا.با يوفر تجربة لا تُنسى."
                : "Whether it's a birthday celebration, corporate dinner, or family gathering — LÀ·BA creates an unforgettable experience for your group."}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {GROUP_FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-center p-6 border border-laba-accent/20 bg-laba-secondary/40 backdrop-blur-sm"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-laba-accent/40 text-laba-accent mb-4">
                    <Icon size={24} strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-xl text-white mb-2">
                    {lang === "ar" ? f.title.ar : f.title.en}
                  </h3>
                  <p className="font-body text-xs text-white/55 leading-relaxed">
                    {lang === "ar" ? f.desc.ar : f.desc.en}
                  </p>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="laba-hoverable inline-flex items-center gap-3 rounded-full bg-laba-accent px-10 py-4 font-body text-xs uppercase tracking-[0.3em] text-laba-secondary transition-all duration-300 hover:bg-white"
            >
              {lang === "ar" ? "تواصل معنا عبر واتساب" : "Enquire via WhatsApp"}
            </a>
            <p className="mt-4 font-body text-xs text-white/40">
              {lang === "ar" ? "أو اتصل بنا: 058 226 6333" : "Or call us: 058 226 6333"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
