import React, { useState, useEffect } from "react";
import {
  Compass,
  Search,
  Moon,
  Sun,
  Menu,
  X,
  Sparkles,
  GraduationCap,
  BookOpen,
  Trophy,
  Users,
  ExternalLink,
  ShieldCheck,
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#beranda", icon: Compass },
    { name: "Layanan Mahasiswa", href: "#layanan", icon: GraduationCap },
    { name: "Ormawa & UKM", href: "#komunitas", icon: Users },
    { name: "Prestasi", href: "#prestasi", icon: Trophy },
    { name: "Pilar AIK", href: "#aik", icon: BookOpen },
    { name: "Syiar & Hikmah", href: "#syiar", icon: Sparkles },
    { name: "FAQ", href: "#faq", icon: ShieldCheck },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-md"
          : "bg-transparent py-4 border-b border-transparent"
      }`}
    >
      {/* Scroll Progress Bar at the absolute top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-teal-500 via-emerald-400 to-amber-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Identification */}
          <a
            href="#beranda"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Beranda Biro Kemahasiswaan dan AIK SiberMu"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 via-emerald-600 to-amber-500 p-[2px] shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0B132B] rounded-[10px] flex items-center justify-center">
                {/* Sun 12 ray emblem abstraction for Muhammadiyah */}
                <span className="text-amber-400 font-extrabold text-xl tracking-tighter">
                  ☀️
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-teal-400 border-2 border-[#0B132B] rounded-full animate-pulse-ring" />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white leading-tight">
                  BIRO KEMAHA<span className="text-teal-500 dark:text-teal-400">SISWAAN</span> & <span className="text-amber-500">AIK</span>
                </span>
              </div>
              <span className="text-[11px] font-medium tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                Univ. Siber Muhammadiyah
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-200/50 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-300/40 dark:border-slate-800/80 backdrop-blur-md">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-teal-500 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-300 hover:bg-slate-300/40 dark:hover:bg-slate-800/40"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Command Palette Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search / Command Palette Button */}
            <button
              id="quick-search-trigger"
              onClick={onOpenSearch}
              aria-label="Buka pencarian cepat (Ctrl + K)"
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-300/60 dark:border-slate-700/80 transition-colors shadow-xs"
            >
              <Search className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span className="hidden md:inline">Cari info...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 rounded border border-slate-200 dark:border-slate-700">
                Ctrl K
              </kbd>
            </button>

            {/* Dark/Light Theme Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={darkMode ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* CTA Portal Mahasiswa */}
            <a
              href="#layanan"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white shadow-md shadow-teal-500/20 transition-all hover:scale-[1.02]"
            >
              <span>Portal Layanan</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Buka menu navigasi mobile"
              className="xl:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-nav border-t border-slate-200 dark:border-slate-800 mt-3 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>{item.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
            <a
              href="#layanan"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-xl bg-teal-600 hover:bg-teal-500 text-white shadow-sm"
            >
              <span>Akses Portal Layanan Mahasiswa</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
