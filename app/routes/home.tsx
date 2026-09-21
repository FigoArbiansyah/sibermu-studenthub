import React, { useState, useEffect } from "react";
import type { Route } from "./+types/home";
import { Navbar } from "../components/Navbar";
import { QuickSearchModal } from "../components/QuickSearchModal";
import { HeroSection } from "../components/HeroSection";
import { EcosystemMarquee } from "../components/EcosystemMarquee";
import { ServiceCenter } from "../components/ServiceCenter";
import { CommunitySection } from "../components/CommunitySection";
import { AchievementWall } from "../components/AchievementWall";
import { AikHubSection } from "../components/AikHubSection";
import { SyiarAudioPlayer } from "../components/SyiarAudioPlayer";
import { DailyHikmahWidget } from "../components/DailyHikmahWidget";
import { FaqContactSection } from "../components/FaqContactSection";
import { Footer } from "../components/Footer";
import { ToastContainer, type ToastMessage } from "../components/Toast";
import { Radio } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biro Kemahasiswaan & AIK | Universitas Siber Muhammadiyah" },
    {
      name: "description",
      content:
        "Portal resmi Biro Kemahasiswaan dan AIK SiberMu: layanan beasiswa, konseling online, Ormawa & UKM virtual, dan pembinaan Islam Berkemajuan.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://kemahasiswaan.sibermu.ac.id/" },
    { property: "og:title", content: "Biro Kemahasiswaan & AIK | Universitas Siber Muhammadiyah" },
    {
      property: "og:description",
      content:
        "Portal resmi Biro Kemahasiswaan dan AIK SiberMu: layanan beasiswa, konseling online, Ormawa & UKM virtual, dan pembinaan Islam Berkemajuan.",
    },
    { property: "og:image", content: "https://kemahasiswaan.sibermu.ac.id/images/hero-students.jpg" },
    { property: "og:locale", content: "id_ID" },
    { property: "og:site_name", content: "Universitas Siber Muhammadiyah" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Biro Kemahasiswaan & AIK | Universitas Siber Muhammadiyah" },
    {
      name: "twitter:description",
      content: "Portal kemahasiswaan digital dan penguatan nilai Islam Berkemajuan SiberMu.",
    },
    { name: "twitter:image", content: "https://kemahasiswaan.sibermu.ac.id/images/hero-students.jpg" },
  ];
}

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("beranda");
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (title: string, message: string, type: "success" | "info" | "warning" = "success") => {
    const newToast: ToastMessage = {
      id: `toast-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      type,
      title,
      message,
    };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync theme with html root class
  useEffect(() => {
    const isDarkStored = localStorage.getItem("sibermu_theme");
    if (isDarkStored === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("sibermu_theme", "light");
      setDarkMode(false);
      showToast("Mode Terang Aktif", "Tampilan beralih ke mode terang", "info");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("sibermu_theme", "dark");
      setDarkMode(true);
      showToast("Mode Gelap Aktif", "Tampilan beralih ke mode malam siber", "info");
    }
  };

  // Keyboard shortcut listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Intersection observer to track active section for navbar with rAF throttling
  useEffect(() => {
    const sections = ["beranda", "layanan", "komunitas", "prestasi", "aik", "syiar", "faq"];
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 200;
          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#070B19] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Navigation Header with Top Scroll Progress */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        activeSection={activeSection}
        darkMode={darkMode}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section (Dual Pathway & Quick Intents) */}
        <HeroSection />

        {/* Framer-Style Infinite Marquee: Jejaring Ekosistem & Mitra */}
        <EcosystemMarquee />

        {/* 2. Layanan Mahasiswa (Kemahasiswaan: Beasiswa, Konseling, Surat, Karir, Simulator & Ticket Tracker) */}
        <ServiceCenter onShowToast={showToast} />

        {/* 3. Komunitas Mahasiswa (Kemahasiswaan: Ormawa & UKM with Spotlight Photo) */}
        <CommunitySection />

        {/* 4. Prestasi Mahasiswa (Kemahasiswaan: Hall of Fame & Champion Celebration) */}
        <AchievementWall />

        {/* 5. Al-Islam & Kemuhammadiyahan (AIK: 4 Pilar, Foto Seminar & 1-Click Calendar) */}
        <AikHubSection onShowToast={showToast} />

        {/* 6. Syiar Digital & Hikmah (AIK: Web Audio Player Podcast & Mutiara Hikmah Generator) */}
        <section id="syiar" className="py-20 relative bg-slate-50 dark:bg-[#080D1C]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-semibold mb-3">
                <Radio className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                <span>Syiar Multimedia & Risalah Hikmah</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Ruang Syiar Digital & Refleksi Berkemajuan
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Mendengarkan serial podcast keagamaan kontemporer dengan audio nyata dan memperdalam pesan inspiratif K.H. Ahmad Dahlan.
              </p>
            </div>

            <div className="space-y-10">
              {/* Syiar Web Audio Player with real sound harmonics */}
              <SyiarAudioPlayer onShowToast={showToast} />

              {/* Daily Hikmah Interactive Widget */}
              <DailyHikmahWidget />
            </div>
          </div>
        </section>

        {/* 7. Pertanyaan & Konsultasi Langsung */}
        <FaqContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Ctrl + K Command Palette Modal */}
      <QuickSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Global Interactive Toast Feedback */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
