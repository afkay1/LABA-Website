import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import axios from "axios";
import { MapPin, Clock, Phone, MessageCircle, QrCode, Instagram, CalendarIcon, X, Check } from "lucide-react";
import { format, parseISO } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { useLang } from "../../context/LanguageContext";
import { T, CONTACT } from "../../data/content";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const TIME_SLOTS = (() => {
  const slots = [];
  const push = (h, m) => {
    const hh = String(h).padStart(2, "0");
    const mm = String(m).padStart(2, "0");
    const period = h >= 12 && h < 24 ? "PM" : "AM";
    const h12 = ((h % 12) === 0 ? 12 : h % 12);
    slots.push({ value: `${hh}:${mm}`, label: `${h12}:${mm} ${period}` });
  };
  for (let h = 12; h < 24; h++) { push(h, 0); push(h, 30); }
  for (let h = 0; h <= 3; h++) { push(h, 0); if (h < 3) push(h, 30); }
  return slots;
})();

const EMPTY = {
  first_name: "",
  last_name: "",
  phone: "",
  guests: "2",
  date: "",
  time: "",
  special_requests: "",
};

export default function Contact() {
  const { t, lang } = useLang();
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(null);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const setField = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const buildWhatsApp = (data) => {
    const lines = [
      "*New Reservation — LÀ·BA*",
      `Name: ${data.first_name} ${data.last_name}`,
      `Phone: ${data.phone}`,
      `Guests: ${data.guests}`,
      `Date: ${data.date}`,
      `Time: ${data.time}`,
    ];
    if (data.special_requests) lines.push(`Notes: ${data.special_requests}`);
    return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.first_name || !form.last_name || !form.phone || !form.date || !form.time) {
      toast.error(lang === "ar" ? "يرجى ملء جميع الحقول المطلوبة" : "Please fill all required fields");
      return;
    }
    setLoading(true);
    const submitted = { ...form };
    const waUrl = buildWhatsApp(submitted);
    try {
      await axios.post(`${API}/reservations`, {
        ...submitted,
        guests: parseInt(submitted.guests, 10) || 1,
      });
      toast.success(t(T.contact.success));
      setConfirm({ ...submitted, waUrl });
      setForm(EMPTY);
    } catch (err) {
      toast.error(t(T.contact.error));
    } finally {
      setLoading(false);
    }
  };

  const infoItems = [
    { icon: MapPin, label: T.contact.info, value: t(T.contact.address) },
    { icon: Clock, label: T.contact.hoursLabel, value: t(T.contact.hours) },
    { icon: Phone, label: T.contact.phoneLabel, value: CONTACT.phone, href: `tel:${CONTACT.phoneTel}` },
    { icon: MessageCircle, label: T.contact.whatsappLabel, value: "+966 58 226 6333", href: `https://wa.me/${CONTACT.whatsapp}` },
    { icon: QrCode, label: T.contact.menuLabel, value: "laba.yallaqrcodes.com", href: CONTACT.menuLink },
  ];

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
            <h2
              className="font-display text-4xl md:text-6xl text-white mb-4"
              data-testid="contact-heading"
            >
              {t(T.contact.heading)}
            </h2>
            <div className="inline-flex items-center gap-2 mb-9 rounded-full border border-laba-accent/40 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-laba-accent" />
              <span className="font-body text-[11px] uppercase tracking-[0.25em] text-laba-accent" data-testid="price-note">
                {t(T.contact.priceNote)}
              </span>
            </div>

            <div className="space-y-6">
              {infoItems.map((it, i) => {
                const Icon = it.icon;
                const content = (
                  <div className="flex items-start gap-4 group">
                    <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-laba-accent/40 text-laba-accent group-hover:bg-laba-accent group-hover:text-laba-secondary transition-colors">
                      <Icon size={18} strokeWidth={1.5} />
                    </span>
                    <div>
                      <div className="font-body text-[10px] uppercase tracking-[0.25em] text-laba-accent/80">
                        {t(it.label)}
                      </div>
                      <div className="font-body text-sm md:text-base text-white/85 mt-1 group-hover:text-laba-accent transition-colors">
                        {it.value}
                      </div>
                    </div>
                  </div>
                );
                return it.href ? (
                  <a
                    key={i}
                    href={it.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`contact-info-${i}`}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i} data-testid={`contact-info-${i}`}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Socials */}
            <div className="mt-10 flex items-center gap-4">
              
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-instagram"
                className="flex items-center gap-2 rounded-full border border-laba-accent/40 px-4 py-2 text-xs font-body tracking-widest text-laba-accent hover:bg-laba-accent hover:text-laba-secondary transition-colors"
              >
                <Instagram size={15} /> {CONTACT.instagramHandle}
              </a>
              
                href={CONTACT.maps}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-maps"
                className="flex items-center gap-2 rounded-full border border-laba-accent/40 px-4 py-2 text-xs font-body tracking-widest text-laba-accent hover:bg-laba-accent hover:text-laba-secondary transition-colors"
              >
                <MapPin size={15} /> Google Maps
              </a>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label={t(T.contact.firstName)} required>
                <input
                  type="text"
                  value={form.first_name}
                  onChange={update("first_name")}
                  data-testid="input-first-name"
                  className="laba-input"
                />
              </Field>
              <Field label={t(T.contact.lastName)} required>
                <input
                  type="text"
                  value={form.last_name}
                  onChange={update("last_name")}
                  data-testid="input-last-name"
                  className="laba-input"
                />
              </Field>
              <Field label={t(T.contact.phone)} required>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  data-testid="input-phone"
                  className="laba-input"
                />
              </Field>
              <Field label={t(T.contact.guests)} required>
                <Select value={form.guests} onValueChange={(v) => setField("guests", v)}>
                  <SelectTrigger data-testid="input-guests" className="laba-trigger">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-laba-secondary border-laba-accent/40 text-white">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <SelectItem key={i} value={String(i + 1)} className="focus:bg-laba-primary focus:text-white">
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field label={t(T.contact.date)} required>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      data-testid="input-date"
                      className="laba-trigger flex w-full items-center justify-between text-start"
                    >
                      <span className={form.date ? "text-white" : "text-white/40"}>
                        {form.date ? format(parseISO(form.date), "dd MMM yyyy") : "—"}
                      </span>
                      <CalendarIcon size={15} className="text-laba-accent" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-laba-secondary border-laba-accent/40" align="start">
                    <Calendar
                      mode="single"
                      selected={form.date ? parseISO(form.date) : undefined}
                      onSelect={(d) => d && setField("date", format(d, "yyyy-MM-dd"))}
                      disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </Field>
              <Field label={t(T.contact.time)} required>
                <Select value={form.time} onValueChange={(v) => setField("time", v)}>
                  <SelectTrigger data-testid="input-time" className="laba-trigger">
                    <SelectValue placeholder="—" />
                  </SelectTrigger>
                  <SelectContent className="bg-laba-secondary border-laba-accent/40 text-white max-h-64">
                    {TIME_SLOTS.map((s) => (
                      <SelectItem key={s.value} value={s.value} className="focus:bg-laba-primary focus:text-white">
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </div>

            <div className="mt-6">
              <Field label={t(T.contact.requests)}>
                <textarea
                  rows={3}
                  value={form.special_requests}
                  onChange={update("special_requests")}
                  data-testid="input-requests"
                  className="laba-input resize-none"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={loading}
              data-testid="submit-reservation"
              className="laba-hoverable mt-8 w-full rounded-full bg-laba-accent py-4 font-body text-xs uppercase tracking-[0.3em] text-laba-secondary transition-all duration-300 hover:bg-white disabled:opacity-60"
            >
              {loading ? "…" : t(T.contact.submit)}
            </button>
            <p className="mt-4 text-center font-body text-xs text-white/50">
              {t(T.contact.note)}
            </p>
          </motion.form>
        </div>
      </div>

      <style>{`
        .laba-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(201,168,76,0.45);
          color: #fff;
          padding: 10px 2px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.3s ease;
        }
        .laba-input:focus { border-color: #C9A84C; }
        .laba-input::placeholder { color: rgba(255,255,255,0.4); }
        .laba-trigger {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(201,168,76,0.45);
          border-radius: 0;
          color: #fff;
          padding: 10px 2px;
          height: auto;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          box-shadow: none;
        }
        .laba-trigger:focus { outline: none; border-color: #C9A84C; box-shadow: none; }
      `}</style>

      <AnimatePresence>
        {confirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[160] flex items-center justify-center bg-laba-ink/90 backdrop-blur-sm p-4"
            data-testid="reservation-confirm"
            onClick={() => setConfirm(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md border border-laba-accent/40 bg-laba-secondary p-8 md:p-10 text-center shadow-[0_0_60px_-15px_rgba(201,168,76,0.5)]"
            >
              <button
                onClick={() => setConfirm(null)}
                data-testid="confirm-close"
                className="absolute top-4 end-4 text-white/60 hover:text-laba-accent transition-colors"
                aria-label="Close"
              >
                <X size={22} />
              </button>
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-laba-accent text-laba-accent">
                <Check size={30} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-white">
                {t(T.contact.confirmTitle)}
              </h3>
              <div className="gold-line my-6" />
              <div className="space-y-2 text-start font-body text-sm text-white/80">
                <div className="flex justify-between gap-4">
                  <span className="text-laba-accent/80">{t(T.contact.labelName)}</span>
                  <span>{confirm.first_name} {confirm.last_name}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-laba-accent/80">{t(T.contact.labelGuests)}</span>
                  <span>{confirm.guests}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-laba-accent/80">{t(T.contact.labelWhen)}</span>
                  <span>{confirm.date} · {confirm.time}</span>
                </div>
              </div>
              <p className="mt-6 font-body text-sm text-white/60 leading-relaxed">
                {t(T.contact.confirmBody)}
              </p>
              <div className="mt-7 flex flex-col gap-3">
                
                  href={confirm.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="confirm-whatsapp"
                  className="laba-hoverable rounded-full bg-[#25D366] py-3.5 font-body text-xs uppercase tracking-[0.25em] text-white transition-transform hover:scale-[1.02]"
                >
                  {t(T.contact.confirmWhatsapp)}
                </a>
                <button
                  onClick={() => setConfirm(null)}
                  data-testid="confirm-done"
                  className="laba-hoverable rounded-full border border-laba-accent/50 py-3.5 font-body text-xs uppercase tracking-[0.25em] text-laba-accent transition-colors hover:bg-laba-accent hover:text-laba-secondary"
                >
                  {t(T.contact.confirmClose)}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="font-body text-[10px] uppercase tracking-[0.25em] text-laba-accent/80">
        {label}
        {required && <span className="text-laba-accent"> *</span>}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
