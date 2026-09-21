import React, { useState } from "react";
import {
  GraduationCap,
  HeartPulse,
  FileCheck2,
  Briefcase,
  Coins,
  MessageCircleCode,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Calculator,
  X,
  Send,
  AlertCircle,
  Search,
  FileText,
  Download,
  ShieldCheck,
  Layers,
  SearchCheck
} from "lucide-react";
import { servicesData, type StudentService } from "../data/servicesData";
import { SpotlightCard } from "./SpotlightCard";

interface ServiceCenterProps {
  onShowToast?: (title: string, message: string, type?: "success" | "info" | "warning") => void;
}

export function ServiceCenter({ onShowToast }: ServiceCenterProps) {
  // Main Segmented View: "services" | "tracker" | "simulator"
  const [mainView, setMainView] = useState<"services" | "tracker" | "simulator">("services");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<StudentService | null>(null);

  // Beasiswa Eligibility Checker state
  const [simIpk, setSimIpk] = useState("3.65");
  const [simSemester, setSimSemester] = useState("3");
  const [simTrack, setSimTrack] = useState("kader");
  const [simResult, setSimResult] = useState<null | {
    score: number;
    status: string;
    recommendation: string;
    eligiblePrograms: string[];
  }>(null);

  // Student Service Ticket Tracker state
  const [trackerQuery, setTrackerQuery] = useState("");
  const [trackingResult, setTrackingResult] = useState<null | {
    ticketId: string;
    studentName: string;
    nim: string;
    serviceName: string;
    submissionDate: string;
    currentStep: number;
    statusText: string;
    qrCodeId: string;
  }>(null);

  const categories = [
    { key: "all", label: "Semua Layanan" },
    { key: "beasiswa", label: "Beasiswa" },
    { key: "konseling", label: "Konseling Online" },
    { key: "administrasi", label: "Surat & Legalisir" },
    { key: "karir", label: "Magang Remote" },
  ];

  const filteredServices = servicesData.filter((s) =>
    activeCategory === "all" ? true : s.category === activeCategory
  );

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5" />;
      case "FileCheck2":
        return <FileCheck2 className="w-5 h-5" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5" />;
      case "Coins":
        return <Coins className="w-5 h-5" />;
      case "MessageCircleCode":
        return <MessageCircleCode className="w-5 h-5" />;
      default:
        return <GraduationCap className="w-5 h-5" />;
    }
  };

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    const ipkNum = parseFloat(simIpk);
    let score = 70;

    if (ipkNum >= 3.75) score += 25;
    else if (ipkNum >= 3.5) score += 18;
    else if (ipkNum >= 3.25) score += 10;

    if (simTrack === "kader") score += 10;
    if (simTrack === "prestasi") score += 12;

    score = Math.min(score, 98);

    setSimResult({
      score,
      status: score >= 85 ? "Sangat Berpeluang Tinggi" : score >= 75 ? "Memenuhi Syarat Utama" : "Perlu Penguatan Berkas",
      recommendation:
        score >= 85
          ? "Anda sangat direkomendasikan untuk mendaftar Beasiswa Unggulan SiberMu atau Beasiswa Kader Persyarikatan Penuh."
          : "Berkas Anda memenuhi kualifikasi dasar. Disarankan melampirkan sertifikat kegiatan siber atau rekomendasi pimpinan cabang Muhammadiyah.",
      eligiblePrograms:
        score >= 85
          ? ["Beasiswa Kader Persyarikatan Penuh", "Beasiswa Talenta Digital SiberMu", "KIP-Kuliah Siber"]
          : ["Beasiswa Bantuan UKT Mahasiswa", "Program Magang Industri Berbayar SiberMu"],
    });

    onShowToast?.("Kalkulasi Selesai", `Skor kelayakan beasiswa Anda: ${score}%. Lihat rekomendasi skema.`);
  };

  const handleTrackSubmit = (queryToUse?: string) => {
    const q = (queryToUse || trackerQuery).trim();
    if (!q) return;

    if (q.includes("42")) {
      setTrackingResult({
        ticketId: "SBR-2026-7731",
        studentName: "Ahmad Zaki Fauzan",
        nim: "2024010042",
        serviceName: "Pengajuan Beasiswa Kader Persyarikatan 2026",
        submissionDate: "18 September 2026, 14:20 WIB",
        currentStep: 2,
        statusText: "Tahap 2: Verifikasi Berkas & Rekomendasi Cabang Muhammadiyah",
        qrCodeId: "VERIF-KADER-SBR-7731",
      });
      onShowToast?.("Tiket Ditemukan", "Memuat progres permohonan Beasiswa NIM 2024010042", "info");
    } else {
      setTrackingResult({
        ticketId: "SBR-2026-8812",
        studentName: "Aisyah Nurul Fadhilah",
        nim: "2024010088",
        serviceName: "Penerbitan Surat Rekomendasi Magang & e-Legalisir Transkrip",
        submissionDate: "20 September 2026, 09:15 WIB",
        currentStep: 4,
        statusText: "Tahap 4: Selesai — Dokumen Resmi Bertanda Tangan QR Siap Diunduh",
        qrCodeId: "TTE-RESMI-SIBERMU-8812",
      });
      onShowToast?.("Tiket Ditemukan", "Status permohonan telah selesai diterbitkan!", "success");
    }
  };

  const handleDownloadDocument = () => {
    onShowToast?.(
      "Dokumen Terunduh",
      "Surat Keputusan Resmi ber-QR Code berhasil diunduh ke perangkat Anda.",
      "success"
    );
  };

  return (
    <section id="layanan" className="py-24 sm:py-32 relative bg-slate-50 dark:bg-[#070B19]/80 border-t border-slate-200/60 dark:border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-mono tracking-widest text-teal-600 dark:text-teal-400 font-bold uppercase block mb-2">
            01 / SISTEM LAYANAN DIGITAL
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pusat Layanan Mahasiswa
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Akses beasiswa, surat pengantar ber-QR, konseling online, hingga pelacakan status permohonan mandiri tanpa tatap muka fisik.
          </p>
        </div>

        {/* Clean Segmented Control Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-2xl bg-slate-200/70 dark:bg-slate-900/90 border border-slate-300/60 dark:border-white/[0.08] shadow-xs">
            <button
              onClick={() => setMainView("services")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                mainView === "services"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Direktori Layanan</span>
            </button>

            <button
              onClick={() => setMainView("tracker")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                mainView === "tracker"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <SearchCheck className="w-3.5 h-3.5" />
              <span>Lacak Status Tiket</span>
            </button>

            <button
              onClick={() => setMainView("simulator")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                mainView === "simulator"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Simulasi Beasiswa</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: Services Grid */}
        {mainView === "services" && (
          <div className="animate-in fade-in duration-300">
            {/* Category Filter Pills */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 text-xs">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3.5 py-1.5 rounded-full font-medium transition-all whitespace-nowrap ${
                    activeCategory === cat.key
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-semibold shadow-xs"
                      : "bg-white/80 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/[0.08]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Service Cards Grid with Framer-style SpotlightCard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <SpotlightCard
                  key={service.id}
                  className="p-6 flex flex-col justify-between hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 transition-all duration-300 group border border-slate-200/80 dark:border-white/[0.08] interactive-lift"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {getIcon(service.iconName)}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                      <Clock className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      <span>SLA: {service.sla}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1"
                    >
                      <span>Detail Syarat</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-teal-600 hover:text-white text-slate-700 dark:text-slate-200 transition-colors"
                    >
                      {service.actionLabel}
                    </button>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: Student Ticket Tracker */}
        {mainView === "tracker" && (
          <div className="max-w-3xl mx-auto rounded-3xl glass-card border border-teal-500/30 p-6 sm:p-8 shadow-xl animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-white/[0.08]">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-500" />
                  <span>Pelacakan Status Berkas Digital</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Masukkan NIM atau No. Tiket Anda untuk memantau proses verifikasi.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-[11px] text-slate-400">Demo:</span>
                <button
                  onClick={() => {
                    setTrackerQuery("2024010088");
                    handleTrackSubmit("2024010088");
                  }}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-teal-500/10 text-teal-700 dark:text-teal-300"
                >
                  NIM 2024010088
                </button>
                <button
                  onClick={() => {
                    setTrackerQuery("2024010042");
                    handleTrackSubmit("2024010042");
                  }}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-400"
                >
                  NIM 2024010042
                </button>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
                <label htmlFor="ticket-tracker-query" className="sr-only">
                  Cari Berkas Mahasiswa Berdasarkan NIM atau Nomor Tiket
                </label>
                <input
                  id="ticket-tracker-query"
                  type="text"
                  value={trackerQuery}
                  onChange={(e) => setTrackerQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleTrackSubmit()}
                  placeholder="Masukkan NIM Mahasiswa atau No. Tiket (contoh: 2024010088)..."
                  aria-label="Masukkan NIM Mahasiswa atau No. Tiket"
                  className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <button
                onClick={() => handleTrackSubmit()}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-500 transition-all shrink-0 focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                Cari Berkas
              </button>
            </div>

            {trackingResult && (
              <div className="mt-6 p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/[0.08] animate-in fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-white/[0.06] text-xs">
                  <div>
                    <span className="font-mono text-teal-600 dark:text-teal-400 font-bold block text-xs">
                      TIKET: {trackingResult.ticketId}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">
                      {trackingResult.serviceName}
                    </h4>
                    <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                      {trackingResult.studentName} ({trackingResult.nim}) • {trackingResult.submissionDate}
                    </span>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-bold self-start sm:self-center ${
                      trackingResult.currentStep === 4
                        ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                        : "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30"
                    }`}
                  >
                    {trackingResult.currentStep === 4 ? "✓ SELESAI" : "⏳ DALAM PROSES"}
                  </span>
                </div>

                {/* Progress Steps */}
                <div className="py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {[
                    { step: 1, label: "Permohonan Masuk", desc: "Data diunggah" },
                    { step: 2, label: "Verifikasi Berkas", desc: "Pemeriksaan staf" },
                    { step: 3, label: "Validasi & TTE", desc: "Tanda tangan pimpinan" },
                    { step: 4, label: "Dokumen Terbit", desc: "Siap unduh QR" },
                  ].map((s) => {
                    const isPassed = trackingResult.currentStep >= s.step;
                    const isCurrent = trackingResult.currentStep === s.step;
                    return (
                      <div key={s.step} className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs mb-1.5 ${
                            isPassed
                              ? "bg-teal-600 text-white"
                              : "bg-slate-200 dark:bg-slate-800 text-slate-400"
                          } ${isCurrent ? "ring-4 ring-teal-500/20 scale-105" : ""}`}
                        >
                          {isPassed ? "✓" : s.step}
                        </div>
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          {s.label}
                        </span>
                        <span className="text-[10px] text-slate-500 mt-0.5">{s.desc}</span>
                      </div>
                    );
                  })}
                </div>

                {trackingResult.currentStep === 4 && (
                  <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    <span className="font-mono text-[11px] text-slate-500">
                      ID: {trackingResult.qrCodeId}
                    </span>
                    <button
                      onClick={handleDownloadDocument}
                      className="px-4 py-2 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center gap-1.5 transition-all shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Unduh Dokumen Ber-QR</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* VIEW 3: Beasiswa Simulator */}
        {mainView === "simulator" && (
          <div className="max-w-xl mx-auto rounded-3xl glass-card border border-slate-200/80 dark:border-white/[0.08] p-6 sm:p-8 shadow-xl animate-in fade-in duration-300">
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="w-5 h-5 text-amber-500" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                Simulasi Kelayakan Beasiswa
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Masukkan estimasi IPK dan jalur kualifikasi Anda untuk mengetahui skema beasiswa yang paling berpeluang.
            </p>

            <form onSubmit={handleSimulate} className="space-y-4 text-xs">
              <div>
                <label htmlFor="sim-ipk" className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Indeks Prestasi Kumulatif (IPK):
                </label>
                <input
                  id="sim-ipk"
                  type="number"
                  step="0.01"
                  min="2.00"
                  max="4.00"
                  value={simIpk}
                  onChange={(e) => setSimIpk(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="sim-semester" className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Semester:
                  </label>
                  <select
                    id="sim-semester"
                    value={simSemester}
                    onChange={(e) => setSimSemester(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="1">Semester 1 (Maba)</option>
                    <option value="3">Semester 3</option>
                    <option value="5">Semester 5</option>
                    <option value="7">Semester 7</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="sim-track" className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Jalur Unggulan:
                  </label>
                  <select
                    id="sim-track"
                    value={simTrack}
                    onChange={(e) => setSimTrack(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="kader">Kader Muhammadiyah</option>
                    <option value="prestasi">Prestasi / Portofolio IT</option>
                    <option value="dhuafa">KIP-Kuliah (Afirmasi)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-2.5 rounded-xl font-bold text-white bg-teal-600 hover:bg-teal-500 transition-all shadow-xs"
              >
                Hitung Peluang Beasiswa
              </button>
            </form>

            {simResult && (
              <div className="mt-5 p-4 rounded-xl bg-teal-500/10 border border-teal-500/30 animate-in fade-in">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-teal-700 dark:text-teal-300">
                    Skor Kelayakan:
                  </span>
                  <span className="text-base font-black text-teal-600 dark:text-teal-400">
                    {simResult.score}% ({simResult.status})
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                  {simResult.recommendation}
                </p>
                <div className="flex flex-wrap gap-1">
                  {simResult.eligiblePrograms.map((p, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-300 border border-teal-500/20"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="w-full max-w-lg bg-white dark:bg-[#0B132B] rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-white/[0.08]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                  {getIcon(selectedService.iconName)}
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {selectedService.title}
                  </h3>
                  <span className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                    SLA: {selectedService.sla}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="mt-5 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Persyaratan Berkas Digital:</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {selectedService.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onShowToast?.("Permohonan Terbuka", `Membuka formulir resmi untuk ${selectedService.title}`, "info");
                }}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white shadow-md shadow-teal-600/20"
              >
                {selectedService.actionLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
