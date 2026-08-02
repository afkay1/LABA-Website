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
    // Event-driven dismissal so it works even when the clock is throttled
    // (headless/hidden tabs). Real users still see the loader during initial
    // paint + the Hero curtain reveal that follows.
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
        <Footer lenis={lenis} />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
