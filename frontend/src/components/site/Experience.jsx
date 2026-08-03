import { motion } from "framer-motion";
import { Users, UtensilsCrossed, Music, Sparkles } from "lucide-react";
import { useLang } from "../../context/LanguageContext";
import { CONTACT, IMAGES } from "../../data/content";

const FEATURES = [
  {
    icon: Users,
    title: { en: "Private Tables", ar: "طاولات خاصة" },
    desc: { en: "Exclusive seating arrangements for your group", ar: "ترتيبات جلوس حصرية لمجموعتك" },
  },
  {
    icon: UtensilsCrossed,
    title: { en: "Custom Menu", ar: "قائمة مخصصة" },
    desc: { en: "Tailored dining experience for your occasion", ar: "تجربة طعام مصممة لمناسبتك" },
  },
  {
    icon: Music,
    title: { en: "Live Entertainment", ar: "ترفيه حي" },
    desc: { en: "Piano, DJ and live performances for your event", ar: "بيانو، دي جي وعروض حية لحفلتك" },
  },
  {
    icon: Sparkles,
    title: { en: "Full Service", ar: "خدمة متكاملة" },
    desc: { en: "Dedicated staff for your special celebration", ar: "طاقم مخصص لاحتفالك المميز" },
  },
];

export default function GroupDining() {
  const { lang } = useLang();

  const waMessage = encodeURIComponent(
    lang === "ar"
      ? "السلام عليكم، أريد الاستفسار عن حجز جماعي في لا.با"
      : "Hello LÀ·BA, I would like to inquire about a group dining reservation."
  );

  return (
    <section id="group-dining" className="relative bg-laba-primary py-24 md:py-32 overflow-hidden" data-testid="group-dining-section">
      <div className="absolute inset-0">
        <img src={IMAGES.stage} alt="LÀ·BA Stage" className="w-full h-full object-cover" style={{ filter: "brightness(0.2)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-laba-primary/60 via-transparent to-laba-primary/60" />
      </div>
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-laba-accent mb-4">
            {lang === "ar" ? "المناسبات الخاصة" : "Private Events"}
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            {lang === "ar" ? "احتفل مع لا·با" : "Host Your Event at LÀ·BA"}
          </h2>
          <p className="font-body text-sm md:text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
            {lang === "ar"
              ? "سواء كانت احتفالية عيد ميلاد، عشاء شركة، أو تجمع عائلي — لا.با يوفر تجربة لا تُنسى لمجموعتك."
              : "Whether it's a birthday celebration, corporate dinner, or family gathering — LÀ·BA creates an unforgettable experience for your group."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FEATURES.map((f, i) => {
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
            data-testid="group-dining-cta"
            className="laba-hoverable inline-flex items-center gap-3 rounded-full bg-laba-accent px-10 py-4 font-body text-xs uppercase tracking-[0.3em] text-laba-secondary transition-all duration-300 hover:bg-white"
          >
            {lang === "ar" ? "تواصل معنا عبر واتساب" : "Enquire via WhatsApp"}
          </a>
          <p className="mt-4 font-body text-xs text-white/40">
            {lang === "ar" ? "أو اتصل بنا: 058 226 6333" : "Or call us: 058 226 6333"}
          </p>
        </div>
      </div>
    </section>
  );
}
