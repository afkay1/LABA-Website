import { useEffect, useState } from "react";
import "@/App.css";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/context/LanguageContext";
import Cursor from "@/components/site/Cursor";
import Loader from "@/components/site/Loader";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import MarqueeStrip from "@/components/site/MarqueeStrip";
import Story from "@/components/site/Story";
import Menu from "@/components/site/Menu";
import Experience from "@/components/site/Experience";
import Reviews from "@/components/site/Reviews";
import GroupDining from "@/components/site/GroupDining";
import About from "@/components/site/About";
import Gallery from "@/components/site/Gallery";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsAppButton";

function App() {
  const [lenis, setLenis] = useState(null);
  const [loaderDone, setLoaderDone] = useState(false);

  useEffect(() => {
    const l = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    setLenis(l);
    if (typeof window !== "undefined") window.__lenis = l;
    let raf;
    const loop = (time) => {
      l.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      l.destroy();
    };
  }, []);

  useEffect(() => {
    const finish = () => setLoaderDone(true);
    if (document.readyState === "complete") {
      finish();
      return;
    }
    window.addEventListener("load", finish, { once: true });
    return () => window.removeEventListener("load", finish);
  }, []);

  return (
    <LanguageProvider>
      <div className="App laba-noise bg-laba-secondary min-h-screen">
        <Cursor />
        {!loaderDone && <Loader />}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1A0000",
              border: "1px solid rgba(201,168,76,0.4)",
              color: "#fff",
              fontFamily: "'Montserrat', sans-serif",
            },
          }}
        />
        <Navbar lenis={lenis} />
        <main>
          <Hero lenis={lenis} />
          <MarqueeStrip />
          <Story />
          <div className="section-divider" />
          <Menu />
          <div className="section-divider" />
          <Experience />
          <Reviews />
          <GroupDining />
          <About />
          <div className="section-divider" />
          <Gallery />
          <div className="section-divider" />
          <Contact />
        </main>

        {/* Full width Google Maps strip */}
        <div className="relative w-full" style={{ height: "350px" }}>
          <iframe
            title="LÀ·BA Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.674320037221!2d46.67529931499965!3d24.687144984134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890a6e8ce5%3A0x6a6b7e6e7e6e7e6e!2sPrince%20Abdulaziz%20St%2C%20As%20Sulimaniyah%2C%20Riyadh!5e0!3m2!1sen!2ssa!4v1234567890"
            width="100%"
            height="350"
            style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg)", opacity: 0.85 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-laba-secondary/80 backdrop-blur-sm border border-laba-accent/30 px-6 py-4 text-center">
              <div className="font-display text-xl text-white mb-1">LÀ·BA — Art of Dining</div>
              <div className="font-body text-xs text-laba-accent tracking-widest uppercase">
                Prince Abdulaziz St, As Sulimaniyah, Riyadh
              </div>
            </div>
          </div>
        </div>

        {/* Hours Bar */}
        <div className="bg-laba-primary border-t border-b border-laba-accent/25 py-6">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-body text-xs uppercase tracking-[0.3em] text-white/70">
                  Open Today
                </span>
              </div>
              <div className="font-display text-2xl md:text-3xl text-white text-center">
                Daily <span className="text-laba-accent">12:00 PM</span> — <span className="text-laba-accent">3:00 AM</span>
              </div>
              
                href="https://wa.me/966582266333"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs uppercase tracking-[0.25em] text-laba-accent border border-laba-accent/40 rounded-full px-5 py-2 hover:bg-laba-accent hover:text-laba-secondary transition-colors"
              >
                Reserve Now
              </a>
            </div>
          </div>
        </div>

        <Footer lenis={lenis} />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
