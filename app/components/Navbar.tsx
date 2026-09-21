import React, { useState, useEffect } from "react";
import {
  Search,
  Moon,
  Sun,
  Menu,
  X,
  ExternalLink,
  ChevronRight
} from "lucide-react";

interface NavbarProps {
  onOpenSearch: () => void;
  activeSection: string;
  darkMode: boolean;
  onToggleTheme: () => void;
}

export function Navbar({
  onOpenSearch,
  activeSection,
  darkMode,
  onToggleTheme,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          if (totalScroll > 0) {
            setScrollProgress((window.scrollY / totalScroll) * 100);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Layanan", href: "#layanan" },
    { name: "Ormawa & UKM", href: "#komunitas" },
    { name: "Prestasi", href: "#prestasi" },
    { name: "AIK", href: "#aik" },
    { name: "Syiar Digital", href: "#syiar" },
    { name: "Bantuan", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/80 dark:bg-[#070B19]/85 backdrop-blur-xl py-3 border-b border-slate-200/70 dark:border-white/[0.08] shadow-xs"
          : "bg-transparent py-5 border-b border-transparent"
        }`}
    >
      {/* Skip to Main Content Link for Screen Readers & Keyboard Navigation (WCAG 2.1 AA) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-teal-600 focus:text-white focus:rounded-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white text-xs font-bold transition-all"
      >
        Lewati ke Konten Utama
      </a>

      {/* Ultra-thin Scroll Progress Bar at the absolute top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-teal-500 via-emerald-400 to-amber-400 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Minimalist Brand Logo & Identity with Official SiberMu Emblem */}
          <a
            href="#beranda"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Beranda SiberMu StudentHub - Biro Kemahasiswaan dan AIK"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-xs ring-1 ring-slate-200/80 dark:ring-teal-400/40 p-1 group-hover:scale-105 group-hover:ring-teal-400/60 transition-all duration-300 shrink-0">
              <img
                src="/images/sibermu-emblem.png"
                alt="Logo Resmi Universitas Siber Muhammadiyah"
                width="40"
                height="40"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white leading-none">
                  Siber<span className="text-teal-600 dark:text-teal-400">Mu</span>
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-500/10 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 border border-teal-500/30">
                  StudentHub
                </span>
              </div>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 mt-0.5">
                Biro Kemahasiswaan & AIK
              </span>
            </div>
          </a>

          {/* Clean Typography Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 px-2 py-1 rounded-full border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-md">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${isActive
                      ? "bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-xs font-semibold scale-105"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/70 dark:hover:bg-slate-800/70 hover:scale-105 active:scale-95"
                    }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Minimalist Controls */}
          <div className="flex items-center gap-2">
            {/* Quick Search Capsule Button */}
            <button
              id="quick-search-trigger"
              onClick={onOpenSearch}
              aria-label="Buka pencarian cepat (Ctrl + K)"
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 transition-all hover:border-teal-500/40 hover:text-teal-600 dark:hover:text-teal-400 interactive-lift"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-xs">Cari...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[10px] font-mono bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                ⌘K
              </kbd>
            </button>

            {/* Dark/Light Theme Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={darkMode ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-110 active:scale-90"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Clean Solid Portal Button */}
            <a
              href="#layanan"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-xs transition-all interactive-lift hover:shadow-md active:scale-95"
            >
              <span>Portal Layanan</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            {/* Mobile Drawer Button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi utama"}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          role="navigation"
          aria-label="Navigasi Mobile"
          className="lg:hidden bg-white/95 dark:bg-[#070B19]/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-in fade-in slide-in-from-top-2"
        >
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <span>{item.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" aria-hidden="true" />
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#layanan"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-xs focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <span>Akses Portal Layanan</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
