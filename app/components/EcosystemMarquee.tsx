import React from "react";
import { ShieldCheck, Sparkles, Globe2, Building2, Code2, HeartHandshake } from "lucide-react";

export function EcosystemMarquee() {
  const partners: Array<{ name: string; label: string; icon?: string; image?: string }> = [
    { name: "BSSN", label: "Badan Siber & Sandi Negara", icon: "🛡️" },
    { name: "Diktilitbang", label: "Pimpinan Pusat Muhammadiyah", image: "/images/sibermu-emblem.webp" },
    { name: "Kemendikbudristek", label: "KIP-Kuliah Siber", icon: "🎓" },
    { name: "Lazismu", label: "Filantropi & Beasiswa Kader", icon: "🤲" },
    { name: "GitHub Campus", label: "Open Source Tech Partner", icon: "💻" },
    { name: "Discord", label: "Virtual War Room & Hub", icon: "💬" },
    { name: "IMM Digital", label: "Ikatan Mahasiswa Muhammadiyah", icon: "🔴" },
    { name: "Hizbul Wathan", label: "Cyber Humanitarian Brigade", icon: "🟢" },
    { name: "AWS Educate", label: "Cloud Infrastructure Hub", icon: "☁️" },
  ];

  return (
    <section className="py-8 relative overflow-hidden border-y border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
      {/* Left and Right Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 dark:from-[#070B19] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 dark:from-[#070B19] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center justify-center gap-2 text-center text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Jejaring Kolaborasi Industri, Persyarikatan & Ekosistem Siber</span>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-2">
          {/* First loop */}
          {partners.map((p, idx) => (
            <div
              key={`p1-${idx}`}
              className="flex items-center gap-3 px-4 py-2 rounded-2xl glass-card border border-slate-200/90 dark:border-slate-800/90 hover:border-teal-500/40 transition-colors shadow-xs group shrink-0"
            >
              {p.image ? (
                <span className="w-6 h-6 rounded-lg bg-white p-0.5 border border-slate-200 dark:border-teal-500/30 flex items-center justify-center shrink-0 shadow-xs">
                  <img src={p.image} alt={p.name} width="20" height="20" className="w-full h-full object-contain" />
                </span>
              ) : (
                <span className="text-base">{p.icon}</span>
              )}
              <div className="text-left">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors block">
                  {p.name}
                </span>
                <span className="text-[10px] text-slate-600 dark:text-slate-400 font-medium block">
                  {p.label}
                </span>
              </div>
            </div>
          ))}

          {/* Duplicated loop for seamless continuous scroll */}
          {partners.map((p, idx) => (
            <div
              key={`p2-${idx}`}
              className="flex items-center gap-3 px-4 py-2 rounded-2xl glass-card border border-slate-200/90 dark:border-slate-800/90 hover:border-teal-500/40 transition-colors shadow-xs group shrink-0"
            >
              {p.image ? (
                <span className="w-6 h-6 rounded-lg bg-white p-0.5 border border-slate-200 dark:border-teal-500/30 flex items-center justify-center shrink-0 shadow-xs">
                  <img src={p.image} alt={p.name} width="20" height="20" className="w-full h-full object-contain" />
                </span>
              ) : (
                <span className="text-base">{p.icon}</span>
              )}
              <div className="text-left">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors block">
                  {p.name}
                </span>
                <span className="text-[10px] text-slate-600 dark:text-slate-400 font-medium block">
                  {p.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
