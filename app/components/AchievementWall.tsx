import React, { useState } from "react";
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
  Quote
} from "lucide-react";
import { achievementsData, type StudentAchievement } from "../data/achievementsData";
import { SpotlightCard } from "./SpotlightCard";

export function AchievementWall() {
  const [tierFilter, setTierFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAchievement, setSelectedAchievement] = useState<StudentAchievement | null>(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const filteredAchievements = achievementsData.filter((item) => {
    const matchTier = tierFilter === "all" ? true : item.tier === tierFilter;
    const matchQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.event.toLowerCase().includes(searchQuery.toLowerCase());
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
        <div className="mb-12 rounded-3xl overflow-hidden relative p-[2px] shadow-2xl border-beam-container">
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
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 p-3 rounded-2xl glass-card backdrop-blur-md text-xs font-bold text-white flex items-center gap-2">
                <span className="p-1 rounded-lg bg-amber-500 text-slate-950">🏆</span>
                <span>Podium Juara 1 Nasional — Penganugerahan Resmi</span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                    Sorotan Prestasi Utama 2025
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">• Tingkat Nasional</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-snug">
                  Juara 1 National Cyber Defense & Incident Response Challenge
                </h3>
                <p className="mt-1 text-xs font-bold text-teal-700 dark:text-teal-400">
                  Ajang Resmi BSSN National Cyber Security Summit 2025
                </p>

                <blockquote className="mt-4 p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/70 border-l-4 border-amber-500 text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "Kuliah siber memberikan fleksibilitas luar biasa untuk berlatih simulasi forensik digital dan keamanan jaringan kapan pun, membuktikan mahasiswa online mampu unggul di panggung nasional."
                </blockquote>

                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-teal-500 to-amber-500 flex items-center justify-center font-bold text-xs text-white">
                    FR
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">
                      Fajar Rizki Pratama & Tim SiberShield
                    </span>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400 block">
                      Program Studi S1 Informatika SiberMu
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Terverifikasi SKPI & Rektor</span>
                </span>
                <button
                  onClick={() =>
                    setSelectedAchievement(
                      achievementsData.find((a) => a.id === "ach-1") || achievementsData[0]
                    )
                  }
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 transition-all shadow-sm"
                >
                  Lihat Lembar Penghargaan
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/70 dark:bg-slate-900/80 border border-slate-300/40 dark:border-slate-800 text-xs font-semibold">
            {[
              { key: "all", label: "Semua Tingkat" },
              { key: "internasional", label: "🌍 Internasional" },
              { key: "nasional", label: "🇮🇩 Nasional" },
              { key: "wilayah", label: "🏛️ Wilayah" },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTierFilter(t.key)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  tierFilter === t.key
                    ? "bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-400 shadow-xs font-bold"
                    : "text-slate-700 dark:text-slate-400 hover:text-slate-900"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 dark:text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama atau ajang lomba..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-300/80 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Achievement Cards Grid using Framer-Style SpotlightCard */}
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
