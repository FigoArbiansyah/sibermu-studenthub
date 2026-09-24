import React, { useState, useEffect } from "react";
import {
  Trophy,
  Award,
  BookMarked,
  Medal,
  Sparkles,
  Crown,
  Search,
  CheckCircle2,
  Calendar,
  X,
  ExternalLink,
  PlusCircle,
  Quote,
  Globe2,
  Building2
} from "lucide-react";
import { achievementsData, type StudentAchievement } from "../data/achievementsData";
import { SpotlightCard } from "./SpotlightCard";

export function AchievementWall() {
  const [tierFilter, setTierFilter] = useState<string>("all");
  const [searchInput, setSearchInput] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedAchievement, setSelectedAchievement] = useState<StudentAchievement | null>(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Debounce search query input (300ms)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchInput.trim());
    }, 300);

    return () => clearTimeout(handler);
  }, [searchInput]);

  const filteredAchievements = achievementsData.filter((item) => {
    const matchTier = tierFilter === "all" ? true : item.tier === tierFilter;
    const matchQuery =
      debouncedQuery === "" ||
      item.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      item.studentName.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      item.event.toLowerCase().includes(debouncedQuery.toLowerCase());
    return matchTier && matchQuery;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Trophy":
        return <Trophy className="w-5 h-5 text-amber-500" />;
      case "Award":
        return <Award className="w-5 h-5 text-teal-500" />;
      case "BookMarked":
        return <BookMarked className="w-5 h-5 text-emerald-500" />;
      case "Medal":
        return <Medal className="w-5 h-5 text-blue-500" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-indigo-500" />;
      case "Crown":
        return <Crown className="w-5 h-5 text-purple-500" />;
      default:
        return <Trophy className="w-5 h-5 text-amber-500" />;
    }
  };

  const handleSubmitAchievement = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowSubmitModal(false);
    }, 2000);
  };

  return (
    <section id="prestasi" className="py-20 relative bg-slate-50 dark:bg-[#070B19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-semibold mb-3">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>Dinding Kehormatan & Prestasi Mahasiswa</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Hall of Champions SiberMu
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Bukti nyata keunggulan akademik dan talenta digital mahasiswa pendidikan jarak jauh di panggung kompetisi bergengsi.
            </p>
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-500 text-white shadow-md shadow-teal-600/20 transition-transform active:scale-95 shrink-0 self-start md:self-auto"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Klaim / Laporkan Prestasimu</span>
          </button>
        </div>

        {/* Featured Editorial Photo Showcase (The National Champion Moment) with Animated Border Beam */}
        <div className="mb-12 rounded-3xl overflow-hidden relative p-[2px] shadow-2xl border-beam-container bg-slate-200/90 dark:bg-white/[0.08]">
          <div className="border-beam-glow" />
          <div className="relative z-10 w-full h-full rounded-[22px] overflow-hidden bg-white/95 dark:bg-[#090E1D]/95 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
              <img
                src="/images/champions.webp"
                alt="Momen penganugerahan piala juara nasional mahasiswa SiberMu"
                width="800"
                height="533"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 py-1.5 px-2.5 sm:py-2 sm:px-3.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-bold text-white flex items-center gap-2 shadow-lg max-w-[calc(100%-1.5rem)] sm:max-w-none">
                <span className="p-1 rounded-md bg-amber-500 text-slate-950 shrink-0 text-xs leading-none">🏆</span>
                <span className="truncate">
                  Podium Juara 1 Nasional <span className="hidden xs:inline">— Penganugerahan Resmi</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-5 sm:p-7 lg:p-8 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                    Sorotan Prestasi Utama 2025
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">• Tingkat Nasional</span>
                </div>

                <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-snug">
                  Juara 1 National Cyber Defense & Incident Response Challenge
                </h3>
                <p className="mt-1 text-xs sm:text-sm font-bold text-teal-700 dark:text-teal-400">
                  Ajang Resmi BSSN National Cyber Security Summit 2025
                </p>

                <blockquote className="mt-4 p-3.5 sm:p-4 rounded-xl bg-slate-100/90 dark:bg-slate-900/70 border-l-4 border-amber-500 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "Kuliah siber memberikan fleksibilitas luar biasa untuk berlatih simulasi forensik digital dan keamanan jaringan kapan pun, membuktikan mahasiswa online mampu unggul di panggung nasional."
                </blockquote>

                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-teal-500 to-amber-500 flex items-center justify-center font-bold text-xs text-white shrink-0 shadow-xs">
                    FR
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block truncate">
                      Fajar Rizki Pratama & Tim SiberShield
                    </span>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400 block truncate">
                      Program Studi S1 Informatika SiberMu
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Terverifikasi SKPI & Rektor</span>
                </span>
                <button
                  onClick={() =>
                    setSelectedAchievement(
                      achievementsData.find((a) => a.id === "ach-1") || achievementsData[0]
                    )
                  }
                  className="px-4 py-2.5 sm:py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 active:scale-98 text-slate-950 transition-all shadow-sm text-center"
                >
                  Lihat Lembar Penghargaan
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 mb-8">
          {/* Segmented Control Filter Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-2xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-xs font-semibold overflow-x-auto scrollbar-none max-w-full">
            {[
              { key: "all", label: "Semua Tingkat", icon: Sparkles },
              { key: "internasional", label: "Internasional", icon: Globe2 },
              { key: "nasional", label: "Nasional", icon: Award },
              { key: "wilayah", label: "Wilayah", icon: Building2 },
            ].map((t) => {
              const Icon = t.icon;
              const count =
                t.key === "all"
                  ? achievementsData.length
                  : achievementsData.filter((a) => a.tier === t.key).length;
              const isActive = tierFilter === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setTierFilter(t.key)}
                  className={`px-3.5 py-2 rounded-xl transition-all duration-200 whitespace-nowrap flex items-center gap-2 shrink-0 select-none active:scale-95 ${isActive
                    ? "bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-xs font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50"
                    }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 shrink-0 ${isActive
                      ? "text-teal-600 dark:text-teal-400"
                      : "text-slate-400 dark:text-slate-500"
                      }`}
                    aria-hidden="true"
                  />
                  <span>{t.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold leading-none ${isActive
                      ? "bg-teal-500/15 text-teal-700 dark:text-teal-300"
                      : "bg-slate-200/80 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                      }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input with Clear Button */}
          <div className="relative w-full md:w-80">
            <Search
              className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Cari prestasi, nama juara, ajang..."
              aria-label="Cari prestasi mahasiswa atau ajang lomba"
              className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all shadow-xs"
            />
            {searchInput && (
              <button
                onClick={() => {
                  setSearchInput("");
                  setDebouncedQuery("");
                }}
                aria-label="Hapus pencarian"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Achievement Cards Grid or Empty State */}
        {filteredAchievements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAchievements.map((item) => (
              <SpotlightCard
                key={item.id}
                className="p-6 flex flex-col justify-between hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedAchievement(item)}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(item.iconName)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20">
                        {item.rank}
                      </span>
                      <span className="text-[10px] text-slate-600 dark:text-slate-400 font-medium flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.year}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-teal-700 dark:text-teal-400 font-medium">
                    {item.event}
                  </p>

                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 block text-xs">
                      {item.studentName}
                    </span>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400">
                      {item.studyProgram}
                    </span>
                  </div>
                  <span className="text-teal-700 dark:text-teal-400 font-bold group-hover:translate-x-1 transition-transform">
                    Detail →
                  </span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        ) : (
          <div className="py-14 px-6 text-center rounded-3xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 flex flex-col items-center justify-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-xs">
              <Search className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Prestasi Tidak Ditemukan
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                {debouncedQuery || searchInput
                  ? `Tidak ada prestasi yang cocok dengan kata kunci "${debouncedQuery || searchInput}". Coba gunakan kata kunci lain atau reset filter.`
                  : "Belum ada data prestasi untuk kategori tingkatan yang dipilih."}
              </p>
            </div>
            <button
              onClick={() => {
                setSearchInput("");
                setDebouncedQuery("");
                setTierFilter("all");
              }}
              className="mt-2 px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-500 text-white transition-all shadow-xs active:scale-95"
            >
              Reset Pencarian & Filter
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedAchievement && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedAchievement(null)}
        >
          <div
            className="w-full max-w-lg bg-white dark:bg-[#0B132B] rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                  {getIcon(selectedAchievement.iconName)}
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950">
                    {selectedAchievement.rank}
                  </span>
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white mt-1">
                    {selectedAchievement.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedAchievement(null)}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-400 block">Mahasiswa / Tim:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      {selectedAchievement.studentName}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Program Studi:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {selectedAchievement.studyProgram}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Ajang Kompetisi:</span>
                    <span className="font-semibold text-teal-600 dark:text-teal-400">
                      {selectedAchievement.event}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Tingkat & Tahun:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 capitalize">
                      {selectedAchievement.tier} ({selectedAchievement.year})
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-700 dark:text-slate-200 text-xs mb-1">
                  Ringkasan & Dampak Kejuaraan:
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedAchievement.description}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedAchievement(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Claim / Submit Achievement Modal */}
      {showSubmitModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in"
          onClick={() => setShowSubmitModal(false)}
        >
          <div
            className="w-full max-w-md bg-white dark:bg-[#0B132B] rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  Formulir Pendataan Prestasi
                </h3>
              </div>
              <button
                onClick={() => setShowSubmitModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="p-6 text-center text-teal-600">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-2 text-emerald-500" />
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  Laporan Berhasil Diajukan!
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Tim Biro Kemahasiswaan akan memverifikasi sertifikat Anda untuk pencatatan SKPI dan apresiasi universitas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitAchievement} className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Nama Lengkap & NIM:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Farhan Pratama (2024010099)"
                    className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Nama Kejuaraan / Kompetisi:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Pagelaran Mahasiswa Nasional TIK 2026"
                    className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Peringkat / Capaian:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Juara 1 / Medali Emas"
                      className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Tingkat:
                    </label>
                    <select className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500">
                      <option>Nasional</option>
                      <option>Internasional</option>
                      <option>Wilayah / Provinsi</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Link Bukti / Sertifikat (Google Drive / Cloud):
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://drive.google.com/..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-2.5 rounded-xl font-bold text-white bg-teal-600 hover:bg-teal-500 shadow-md transition-all"
                >
                  Kirim Pengajuan Prestasi
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
