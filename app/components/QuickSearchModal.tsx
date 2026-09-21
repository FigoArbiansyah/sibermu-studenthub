import React, { useState, useEffect, useMemo } from "react";
import {
  Search,
  X,
  GraduationCap,
  Users,
  Trophy,
  BookOpen,
  Sparkles,
  ArrowRight,
  Command,
  CornerDownLeft,
} from "lucide-react";
import { servicesData } from "../data/servicesData";
import { communityData } from "../data/communityData";
import { achievementsData } from "../data/achievementsData";
import { upcomingStudySessions, aikPillarsData } from "../data/aikData";
import { quotesData } from "../data/quotesData";

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickSearchModal({ isOpen, onClose }: QuickSearchModalProps) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "layanan" | "komunitas" | "prestasi" | "aik">("all");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Handled by parent or trigger
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Combined search dataset
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const results: Array<{
      id: string;
      title: string;
      subtitle: string;
      category: "layanan" | "komunitas" | "prestasi" | "aik";
      badge: string;
      targetSection: string;
    }> = [];

    // 1. Services
    if (activeFilter === "all" || activeFilter === "layanan") {
      servicesData.forEach((s) => {
        if (
          s.title.toLowerCase().includes(q) ||
          s.shortDesc.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q)
        ) {
          results.push({
            id: `service-${s.id}`,
            title: s.title,
            subtitle: s.shortDesc,
            category: "layanan",
            badge: "Layanan Mahasiswa",
            targetSection: "#layanan",
          });
        }
      });
    }

    // 2. Communities (Ormawa & UKM)
    if (activeFilter === "all" || activeFilter === "komunitas") {
      communityData.forEach((c) => {
        if (
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.tagline.toLowerCase().includes(q)
        ) {
          results.push({
            id: `community-${c.id}`,
            title: c.name,
            subtitle: c.tagline,
            category: "komunitas",
            badge: c.type === "ormawa" ? "Organisasi Mahasiswa" : "Unit Kegiatan Mahasiswa",
            targetSection: "#komunitas",
          });
        }
      });
    }

    // 3. Achievements
    if (activeFilter === "all" || activeFilter === "prestasi") {
      achievementsData.forEach((a) => {
        if (
          a.title.toLowerCase().includes(q) ||
          a.studentName.toLowerCase().includes(q) ||
          a.event.toLowerCase().includes(q)
        ) {
          results.push({
            id: `ach-${a.id}`,
            title: a.title,
            subtitle: `${a.rank} • ${a.studentName} (${a.event})`,
            category: "prestasi",
            badge: `Tingkat ${a.tier}`,
            targetSection: "#prestasi",
          });
        }
      });
    }

    // 4. AIK & Kajian
    if (activeFilter === "all" || activeFilter === "aik") {
      aikPillarsData.forEach((p) => {
        if (
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.meaning.toLowerCase().includes(q)
        ) {
          results.push({
            id: `aik-pillar-${p.id}`,
            title: `Pilar AIK: ${p.title}`,
            subtitle: p.meaning,
            category: "aik",
            badge: "Pilar AIK",
            targetSection: "#aik",
          });
        }
      });

      upcomingStudySessions.forEach((s) => {
        if (
          s.title.toLowerCase().includes(q) ||
          s.speaker.toLowerCase().includes(q)
        ) {
          results.push({
            id: `aik-study-${s.id}`,
            title: s.title,
            subtitle: `Narasumber: ${s.speaker} (${s.date})`,
            category: "aik",
            badge: "Agenda Kajian",
            targetSection: "#aik-agenda",
          });
        }
      });

      quotesData.forEach((qd) => {
        if (qd.text.toLowerCase().includes(q) || qd.reflection.toLowerCase().includes(q)) {
          results.push({
            id: `quote-${qd.id}`,
            title: `Hikmah: ${qd.author}`,
            subtitle: qd.text.length > 80 ? qd.text.substring(0, 80) + "..." : qd.text,
            category: "aik",
            badge: "Mutiara Hikmah",
            targetSection: "#syiar",
          });
        }
      });
    }

    return results;
  }, [query, activeFilter]);

  if (!isOpen) return null;

  const handleSelectResult = (targetSection: string) => {
    onClose();
    const el = document.querySelector(targetSection);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Pencarian Cepat Informasi"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-[#0B132B] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 gap-3">
          <Search className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
          <input
            id="command-palette-input"
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari beasiswa, UKM, prestasi, kajian siber, atau layanan..."
            className="w-full bg-transparent text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200"
          >
            ESC
          </button>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 overflow-x-auto text-xs">
          <span className="text-slate-400 mr-1 text-[11px]">Filter:</span>
          {(
            [
              { key: "all", label: "Semua" },
              { key: "layanan", label: "Layanan" },
              { key: "komunitas", label: "Ormawa/UKM" },
              { key: "prestasi", label: "Prestasi" },
              { key: "aik", label: "AIK & Kajian" },
            ] as const
          ).map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-2.5 py-1 rounded-full font-medium transition-all ${
                activeFilter === filter.key
                  ? "bg-teal-600 text-white shadow-xs"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/60">
          {!query.trim() ? (
            <div className="py-10 text-center px-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                <Command className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                Pusat Navigasi Cepat Biro Kemahasiswaan & AIK
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                Ketik kata kunci seperti <span className="font-semibold text-teal-600">"Beasiswa"</span>, <span className="font-semibold text-teal-600">"Cyber Security"</span>, <span className="font-semibold text-teal-600">"Kajian AI"</span>, atau <span className="font-semibold text-teal-600">"Konseling"</span>.
              </p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-10 text-center px-4">
              <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                Tidak ditemukan hasil untuk "{query}"
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Coba gunakan kata kunci umum seperti "UKM", "Surat", "Kajian", atau "Prestasi".
              </p>
            </div>
          ) : (
            searchResults.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelectResult(item.targetSection)}
                className="w-full text-left p-3 hover:bg-slate-100 dark:hover:bg-slate-800/70 rounded-xl transition-all flex items-start justify-between gap-3 group"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors shrink-0">
                    {item.category === "layanan" && <GraduationCap className="w-4 h-4" />}
                    {item.category === "komunitas" && <Users className="w-4 h-4" />}
                    {item.category === "prestasi" && <Trophy className="w-4 h-4" />}
                    {item.category === "aik" && <BookOpen className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-xs text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
                        {item.title}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-slate-400 group-hover:text-teal-500 text-xs shrink-0 self-center">
                  <span className="hidden sm:inline text-[11px]">Buka</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer Info */}
        <div className="px-4 py-2.5 bg-slate-100 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span>Navigasi:</span>
            <span className="flex items-center gap-1 bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
              <CornerDownLeft className="w-3 h-3" /> Pilih
            </span>
          </div>
          <span>Biro Kemahasiswaan & AIK • Universitas Siber Muhammadiyah</span>
        </div>
      </div>
    </div>
  );
}
