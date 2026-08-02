import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { MapPin, Clock, Phone, MessageCircle, QrCode, Instagram } from "lucide-react";
import { useLang } from "../../context/LanguageContext";
import { T, CONTACT } from "../../data/content";

export default function Contact() {
  const { t, lang } = useLang();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
    special_requests: "",
  });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.first_name || !form.phone) {
      toast.error(lang === "ar" ? "يرجى ملء الحقول المطلوبة" : "Please fill required fields");
      return;
    }
    const lines = [
      "*New Reservation — LÀ·BA*",
      `Name: ${form.first_name} ${form.last_name}`,
      `Phone: ${form.phone}`,
      `Guests: ${form.guests}`,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
      `Notes: ${form.special_requests}`,
    ];
    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank");
    toast.success(lang === "ar" ? "سيتم تحويلك إلى واتساب" : "Redirecting to WhatsApp");
    setForm({ first_name: "", last_name: "", phone: "", guests: "2", date: "", time: "", special_requests: "" });
  };

  return (
    <section
      id="reserve"
      className="relative bg-laba-secondary py-24 md:py-32"
      data-testid="contact-section"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">

          {/* Info */}
          <div>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-laba-accent mb-4">
              {t(T.contact.eyebrow)}
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-white mb-8" data-testid="contact-heading">
              {t(T.contact.heading)}
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-laba-accent/40 text-laba-accent">
                  <MapPin size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <div className="font-body text-[10px] uppercase tracking-[0.25em] text-laba-accent/80 mb-1">
                    {lang === "ar" ? "الموقع" : "Location"}
                  </div>
                  <div className="font-body text-sm text-white/85">
                    {t(T.contact.address)}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-laba-accent/40 text-laba-accent">
                  <Clock size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <div className="font-body text-[10px] uppercase tracking-[0.25em] text-laba-accent/80 mb-1">
                    {lang === "ar" ? "أوقات العمل" : "Hours"}
                  </div>
                  <div className="font-body text-sm text-white/85">
                    {t(T.contact.hours)}
                  </div>
                </div>
              </div>

              <a href={`tel:${CONTACT.phoneTel}`} className="flex items-start gap-4 group">
                <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-laba-accent/40 text-laba-accent group-hover:bg-laba-accent group-hover:text-laba-secondary transition-colors">
                  <Phone size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <div className="font-body text-[10px] uppercase tracking-[0.25em] text-laba-accent/80 mb-1">
                    {lang === "ar" ? "الهاتف" : "Phone"}
                  </div>
                  <div className="font-body text-sm text-white/85 group-hover:text-laba-accent transition-colors">
                    {CONTACT.phone}
                  </div>
                </div>
              </a>

              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-laba-accent/40 text-laba-accent group-hover:bg-laba-accent group-hover:text-laba-secondary transition-colors">
                  <MessageCircle size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <div className="font-body text-[10px] uppercase tracking-[0.25em] text-laba-accent/80 mb-1">
                    {lang === "ar" ? "واتساب" : "WhatsApp"}
                  </div>
                  <div className="font-body text-sm text-white/85 group-hover:text-laba-accent transition-colors">
                    +966 58 226 6333
                  </div>
                </div>
              </a>

              <a href={CONTACT.menuLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-laba-accent/40 text-laba-accent group-hover:bg-laba-accent group-hover:text-laba-secondary transition-colors">
                  <QrCode size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <div className="font-body text-[10px] uppercase tracking-[0.25em] text-laba-accent/80 mb-1">
                    {lang === "ar" ? "القائمة الرقمية" : "Digital Menu"}
                  </div>
                  <div className="font-body text-sm text-white/85 group-hover:text-laba-accent transition-colors">
                    laba.yallaqrcodes.com
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-laba-accent/40 px-4 py-2 text-xs font-body tracking-widest text-laba-accent hover:bg-laba-accent hover:text-laba-secondary transition-colors"
              >
                <Instagram size={15} /> {CONTACT.instagramHandle}
              </a>
            </div>
              <a
                href={CONTACT.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-laba-accent/40 px-4 py-2 text-xs font-body tracking-widest text-laba-accent hover:bg-laba-accent hover:text-laba-secondary transition-colors"
              >
                <MapPin size={15} /> Google Maps
              </a>
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="border border-laba-accent/25 bg-laba-primary/15 p-7 md:p-10"
            data-testid="reservation-form"
          >
            <h3 className="font-display text-2xl text-white mb-6">
              {lang === "ar" ? "احجز طاولتك" : "Reserve Your Table"}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="font-body text-[10px] uppercase tracking-[0.25em] text-laba-accent/80 block mb-1">
                  {lang === "ar" ? "الاسم الأول *" : "First Name *"}
                </label>
                <input
                  type="text"
                  value={form.first_name}
                  onChange={update("first_name")}
                  className="w-full bg-transparent border-b border-laba-accent/45 text-white py-2 text-sm outline-none focus:border-laba-accent transition-colors"
                  placeholder={lang === "ar" ? "اسمك" : "Your name"}
                />
              </div>
              <div>
                <label className="font-body text-[10px] uppercase tracking-[0.25em] text-laba-accent/80 block mb-1">
                  {lang === "ar" ? "اسم العائلة" : "Last Name"}
                </label>
                <input
                  type="text"
                  value={form.last_name}
                  onChange={update("last_name")}
                  className="w-full bg-transparent border-b border-laba-accent/45 text-white py-2 text-sm outline-none focus:border-laba-accent transition-colors"
                  placeholder={lang === "ar" ? "اسم العائلة" : "Family name"}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="font-body text-[10px] uppercase tracking-[0.25em] text-laba-accent/80 block mb-1">
                  {lang === "ar" ? "الهاتف *" : "Phone *"}
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  className="w-full bg-transparent border-b border-laba-accent/45 text-white py-2 text-sm outline-none focus:border-laba-accent transition-colors"
                  placeholder="+966 5X XXX XXXX"
                />
              </div>
              <div>
                <label className="font-body text-[10px] uppercase tracking-[0.25em] text-laba-accent/80 block mb-1">
                  {lang === "ar" ? "عدد الضيوف" : "Guests"}
                </label>
                <select
                  value={form.guests}
                  onChange={update("guests")}
                  className="w-full bg-laba-secondary border-b border-laba-accent/45 text-white py-2 text-sm outline-none focus:border-laba-accent transition-colors"
                >
                  {Array.from({ length: 20 }).map((_, i) => (
                    <option key={i} value={String(i + 1)}>{i + 1} {lang === "ar" ? "ضيف" : "Guest(s)"}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="font-body text-[10px] uppercase tracking-[0.25em] text-laba-accent/80 block mb-1">
                  {lang === "ar" ? "التاريخ" : "Date"}
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={update("date")}
                  className="w-full bg-transparent border-b border-laba-accent/45 text-white py-2 text-sm outline-none focus:border-laba-accent transition-colors"
                />
              </div>
              <div>
                <label className="font-body text-[10px] uppercase tracking-[0.25em] text-laba-accent/80 block mb-1">
                  {lang === "ar" ? "الوقت" : "Time"}
                </label>
                <select
                  value={form.time}
                  onChange={update("time")}
                  className="w-full bg-laba-secondary border-b border-laba-accent/45 text-white py-2 text-sm outline-none focus:border-laba-accent transition-colors"
                >
                  <option value="">—</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="7:00 PM">7:00 PM</option>
                  <option value="8:00 PM">8:00 PM</option>
                  <option value="9:00 PM">9:00 PM</option>
                  <option value="10:00 PM">10:00 PM</option>
                  <option value="11:00 PM">11:00 PM</option>
                  <option value="12:00 AM">12:00 AM</option>
                  <option value="1:00 AM">1:00 AM</option>
                  <option value="2:00 AM">2:00 AM</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="font-body text-[10px] uppercase tracking-[0.25em] text-laba-accent/80 block mb-1">
                {lang === "ar" ? "طلبات خاصة" : "Special Requests"}
              </label>
              <textarea
                rows={3}
                value={form.special_requests}
                onChange={update("special_requests")}
                className="w-full bg-transparent border-b border-laba-accent/45 text-white py-2 text-sm outline-none focus:border-laba-accent transition-colors resize-none"
                placeholder={lang === "ar" ? "احتفالات، تفضيلات الجلوس..." : "Celebrations, dietary requirements, seating preferences..."}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-laba-accent py-4 font-body text-xs uppercase tracking-[0.3em] text-laba-secondary transition-all duration-300 hover:bg-white"
            >
              {lang === "ar" ? "احجز عبر واتساب" : "Reserve via WhatsApp"}
            </button>
            <p className="mt-4 text-center font-body text-xs text-white/50">
              {lang === "ar" ? "أو اتصل بنا: 058 226 6333" : "Or call us: 058 226 6333"}
            </p>
          </motion.form>

        </div>
      </div>
    <a
    </section>
  );
}
