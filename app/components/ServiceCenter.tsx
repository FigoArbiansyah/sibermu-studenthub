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
  ShieldCheck
} from "lucide-react";
import { servicesData, type StudentService } from "../data/servicesData";
import { SpotlightCard } from "./SpotlightCard";

interface ServiceCenterProps {
  onShowToast?: (title: string, message: string, type?: "success" | "info" | "warning") => void;
}

export function ServiceCenter({ onShowToast }: ServiceCenterProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<StudentService | null>(null);

  // Interactive Beasiswa Eligibility Checker state
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
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
    { key: "konseling", label: "Konseling & Bimbingan" },
    { key: "administrasi", label: "Surat & Administrasi" },
    { key: "karir", label: "Karir & Magang Remote" },
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
    <section id="layanan" className="py-20 relative bg-slate-50 dark:bg-[#080D1C]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-teal text-xs font-semibold mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>One-Stop Student Services</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Pusat Layanan Mahasiswa Terpadu
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Seluruh urusan administrasi, bantuan pembiayaan, konseling psikologis, hingga persiapan karir diakses 100% online dengan respon transparan.
            </p>
          </div>

          {/* Interactive Tool Button: Beasiswa Simulator */}
          <button
            onClick={() => setIsSimulatorOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 shadow-md shadow-amber-500/20 transition-transform active:scale-95 shrink-0 self-start md:self-auto"
          >
            <Calculator className="w-4 h-4 text-slate-950" />
            <span>Simulasi Kelayakan Beasiswa</span>
          </button>
        </div>

        {/* Interactive Feature: Student Service Ticket Tracker */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl glass-card border border-teal-500/30 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                  Lacak Status Permohonan & Dokumen Digital
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Pantau proses verifikasi beasiswa, surat pengantar, atau jadwal konseling Anda secara real-time.
              </p>
            </div>

            {/* Quick Demo Buttons for Evaluators */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-[11px] text-slate-400">Uji coba cepat:</span>
              <button
                onClick={() => {
                  setTrackerQuery("2024010088");
                  handleTrackSubmit("2024010088");
                }}
                className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-teal-500/10 hover:bg-teal-500/20 text-teal-700 dark:text-teal-300 border border-teal-500/20 transition-colors"
              >
                NIM 2024010088 (Selesai QR)
              </button>
              <button
                onClick={() => {
                  setTrackerQuery("2024010042");
                  handleTrackSubmit("2024010042");
                }}
                className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/20 transition-colors"
              >
                NIM 2024010042 (Verifikasi)
              </button>
            </div>
          </div>

          {/* Tracker Search Input */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={trackerQuery}
                onChange={(e) => setTrackerQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleTrackSubmit()}
                placeholder="Masukkan NIM Mahasiswa atau No. Tiket (contoh: 2024010088)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-xs"
              />
            </div>
            <button
              onClick={() => handleTrackSubmit()}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-500 shadow-md shadow-teal-600/20 transition-all active:scale-95 shrink-0"
            >
              Lacak Permohonan
            </button>
          </div>

          {/* Tracking Result Box */}
          {trackingResult && (
            <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-teal-500/30 animate-in fade-in slide-in-from-top-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800 text-xs">
                <div>
                  <span className="font-mono text-teal-600 dark:text-teal-400 font-bold block text-xs">
                    TIKET: {trackingResult.ticketId}
                  </span>
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white mt-0.5">
                    {trackingResult.serviceName}
                  </h4>
                  <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                    Pemohon: {trackingResult.studentName} ({trackingResult.nim}) • Diajukan: {trackingResult.submissionDate}
                  </span>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold self-start sm:self-center ${
                    trackingResult.currentStep === 4
                      ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                      : "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30"
                  }`}
                >
                  {trackingResult.currentStep === 4 ? "✓ SELESAI" : "⏳ DALAM PROSES"}
                </span>
              </div>

              {/* Step Progress Timeline */}
              <div className="py-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
                  {[
                    { step: 1, label: "Permohonan Masuk", desc: "Data & file diunggah" },
                    { step: 2, label: "Verifikasi Berkas", desc: "Pemeriksaan staf biro" },
                    { step: 3, label: "Validasi & TTE", desc: "Tanda tangan pimpinan" },
                    { step: 4, label: "Dokumen Terbit", desc: "Siap unduh ber-QR resmi" },
                  ].map((s) => {
                    const isPassed = trackingResult.currentStep >= s.step;
                    const isCurrent = trackingResult.currentStep === s.step;
                    return (
                      <div key={s.step} className="flex flex-col items-center text-center relative z-10">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs mb-2 transition-all ${
                            isPassed
                              ? "bg-teal-600 text-white shadow-md shadow-teal-600/30"
                              : "bg-slate-200 dark:bg-slate-800 text-slate-400"
                          } ${isCurrent ? "ring-4 ring-teal-500/30 scale-110" : ""}`}
                        >
                          {isPassed ? "✓" : s.step}
                        </div>
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          {s.label}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {s.desc}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action for Finished Ticket */}
              {trackingResult.currentStep === 4 && (
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[11px]">
                      Kode Verifikasi: {trackingResult.qrCodeId}
                    </span>
                  </div>
                  <button
                    onClick={handleDownloadDocument}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh e-Dokumen Ber-QR Resmi</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <SpotlightCard
              key={service.id}
              className="p-6 flex flex-col justify-between hover:border-teal-500/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {service.shortDesc}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  <Clock className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  <span>Estimasi Proses: {service.sla}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 flex items-center gap-1"
                >
                  <span>Lihat Syarat</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setSelectedService(service)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-teal-600 hover:text-white text-slate-700 dark:text-slate-200 transition-all"
                >
                  {service.actionLabel}
                </button>
              </div>
            </SpotlightCard>
          ))}
        </div>
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
            className="w-full max-w-lg bg-white dark:bg-[#0B132B] rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800"
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

      {/* Interactive Simulator Modal */}
      {isSimulatorOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in"
          onClick={() => setIsSimulatorOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white dark:bg-[#0B132B] rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-500" />
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  Kalkulator Kelayakan Beasiswa
                </h3>
              </div>
              <button
                onClick={() => setIsSimulatorOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Hitung peluang Anda mendapatkan skema beasiswa di Universitas Siber Muhammadiyah secara instan.
            </p>

            <form onSubmit={handleSimulate} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Indeks Prestasi Kumulatif (IPK):
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="2.00"
                  max="4.00"
                  value={simIpk}
                  onChange={(e) => setSimIpk(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Semester Berjalan:
                </label>
                <select
                  value={simSemester}
                  onChange={(e) => setSimSemester(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="1">Semester 1 (Mahasiswa Baru)</option>
                  <option value="3">Semester 3</option>
                  <option value="5">Semester 5</option>
                  <option value="7">Semester 7</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Jalur / Rekam Jejak Unggulan:
                </label>
                <select
                  value={simTrack}
                  onChange={(e) => setSimTrack(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="kader">Kader Aktif Persyarikatan Muhammadiyah / Aisyiyah</option>
                  <option value="prestasi">Juara Lomba / Portofolio Cyber & IT</option>
                  <option value="dhuafa">Fasilitas Bantuan KIP-Kuliah (Afirmasi)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-2.5 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-500 shadow-sm transition-all"
              >
                Kalkulasi Peluang Sekarang
              </button>
            </form>

            {/* Results Display */}
            {simResult && (
              <div className="mt-5 p-4 rounded-xl bg-teal-500/10 dark:bg-teal-900/20 border border-teal-500/30 animate-in fade-in">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-teal-700 dark:text-teal-300">
                    Skor Kelayakan:
                  </span>
                  <span className="text-lg font-black text-teal-600 dark:text-teal-400">
                    {simResult.score}%
                  </span>
                </div>
                <p className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                  Status: {simResult.status}
                </p>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {simResult.recommendation}
                </p>
                <div>
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 block mb-1">
                    Skema yang Cocok:
                  </span>
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
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
