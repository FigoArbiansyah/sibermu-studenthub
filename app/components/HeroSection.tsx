import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  BookOpen,
  GraduationCap,
  Globe,
  Radio,
  ChevronDown,
  CheckCircle2
} from "lucide-react";

export function HeroSection() {
  const [selectedIntent, setSelectedIntent] = useState("");

  const quickIntents = [
    { label: "Ajukan Beasiswa Siber", targetId: "layanan" },
    { label: "Konseling 'Sahabat Siber'", targetId: "layanan" },
    { label: "Gabung UKM & Komunitas", targetId: "komunitas" },
    { label: "Jadwal Kajian Virtual AIK", targetId: "aik" },
    { label: "Lihat Prestasi Mahasiswa", targetId: "prestasi" },
    { label: "Buat Surat Pengantar QR", targetId: "layanan" },
  ];

  const handleIntentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedIntent(val);
    if (val) {
      const el = document.getElementById(val);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleQuickPillClick = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="beranda"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-cyber-grid"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-teal-500/15 via-emerald-500/10 to-amber-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Editorial Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Core Narrative & Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Editorial Category Tracker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-teal-500/30 text-teal-800 dark:text-teal-300 text-xs font-semibold shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span>Biro Kemahasiswaan & AIK</span>
              <span className="text-slate-400">•</span>
              <span className="font-medium text-slate-600 dark:text-slate-300">
                Universitas Siber Muhammadiyah
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Ekosistem Mahasiswa Siber:{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-emerald-600 to-amber-500 dark:from-teal-400 dark:via-emerald-300 dark:to-amber-400">
                Berdaya, Berprestasi,
              </span>{" "}
              & Beradab Mulia
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              Pusat layanan kemahasiswaan digital terpadu dan pembinaan nilai Islam Berkemajuan. Menghubungkan potensi ribuan mahasiswa di seluruh penjuru Indonesia tanpa sekat geografis.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 shadow-lg shadow-teal-600/25 transition-all interactive-lift hover:shadow-teal-500/35 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Portal Layanan Mahasiswa</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              <a
                href="#aik"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-xs transition-all interactive-lift hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <BookOpen className="w-4 h-4 text-amber-500" />
                <span>Ruang Al-Islam &amp; Syiar</span>
              </a>
            </div>

            {/* "Saya Ingin..." Quick Intent Navigator */}
            <div className="pt-2">
              <div className="p-4 sm:p-4.5 rounded-2xl glass-card border border-slate-200/90 dark:border-slate-800 shadow-lg max-w-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 mb-2.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                  <span>Navigasi Kebutuhan Mahasiswa Cepat:</span>
                </div>

                <div className="relative">
                  <label htmlFor="intent-quick-selector" className="sr-only">
                    Pilih kebutuhan navigasi cepat mahasiswa
                  </label>
                  <select
                    id="intent-quick-selector"
                    value={selectedIntent}
                    onChange={handleIntentChange}
                    aria-label="Pilih kebutuhan navigasi cepat mahasiswa"
                    className="w-full appearance-none px-3.5 py-2.5 pr-10 text-xs font-medium rounded-xl bg-slate-100/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 border border-slate-300/80 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
                  >
                    <option value="">Pilih kebutuhan Anda (contoh: Beasiswa, Konseling, dsb)...</option>
                    {quickIntents.map((item) => (
                      <option key={item.label} value={item.targetId}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" aria-hidden="true" />
                </div>

                <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mr-1">Pilihan populer:</span>
                  {quickIntents.slice(0, 3).map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleQuickPillClick(item.targetId)}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-teal-500/10 hover:bg-teal-500/20 text-teal-700 dark:text-teal-300 transition-colors focus-visible:ring-2 focus-visible:ring-teal-500"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Editorial Photo Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Photo Frame with subtle glow */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-900 group">
                <img
                  src="/images/hero-students.jpg"
                  alt="Mahasiswa Universitas Siber Muhammadiyah berkolaborasi aktif dengan teknologi digital"
                  width="800"
                  height="533"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  className="w-full h-[260px] sm:h-[400px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Bottom Photo Caption with Integrated SiberMu Academic Identity */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-3.5 rounded-2xl glass-card backdrop-blur-md border border-white/25 dark:border-white/10 text-left flex items-center gap-3 shadow-lg">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white p-1 border border-slate-200/80 dark:border-teal-500/30 flex items-center justify-center shrink-0 shadow-xs">
                    <img
                      src="/images/sibermu-emblem.png"
                      alt="Lambang Resmi Universitas Siber Muhammadiyah"
                      width="36"
                      height="36"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider truncate">
                        Generasi Siber Berkemajuan
                      </span>
                      <span className="hidden sm:inline-block text-[9px] font-semibold px-1.5 py-0.2 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                        SiberMu
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 line-clamp-1">
                      Belajar fleksibel dari mana saja, berprestasi di kancah nasional & global.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Trophy & Prestasi (Balanced single top-left floating accent) */}
              <div className="absolute -top-3 left-2 sm:-top-5 sm:-left-5 p-2.5 sm:p-3.5 rounded-2xl glass-card border border-amber-500/30 shadow-xl flex items-center gap-2.5 sm:gap-3 animate-in fade-in slide-in-from-left duration-500 interactive-lift hover:scale-105 cursor-default">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-500 flex items-center justify-center font-bold text-lg">
                  🏆
                </div>
                <div className="text-left">
                  <span className="text-xs font-black text-slate-900 dark:text-white block">
                    120+ Prestasi
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium block">
                    Nasional & Global 2025/2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Realistic Institutional Metrics Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 text-left">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider block mb-1">
              01 / SISTEM PERKULIAHAN
            </span>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              100% PJJ Siber
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              LMS terpadu & tele-presence modern
            </p>
          </div>

          <div className="p-3 text-left">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-wider block mb-1">
              02 / KOMUNITAS BAKAT
            </span>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              15+ Ormawa & UKM
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Koding, E-Sport, IMM, HW & Debat
            </p>
          </div>

          <div className="p-3 text-left">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider block mb-1">
              03 / LAYANAN MAHASISWA
            </span>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              1x24 Jam SLA
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Beasiswa, e-surat & konseling psikolog
            </p>
          </div>

          <div className="p-3 text-left">
            <span className="text-xs font-bold text-blue-500 uppercase tracking-wider block mb-1">
              04 / SYIAR KEAGAMAAN
            </span>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              Dwi-Pekanan
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Kajian virtual & podcast inspiratif
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
