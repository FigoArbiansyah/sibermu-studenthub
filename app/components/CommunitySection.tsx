import React, { useState } from "react";
import {
  Users,
  Terminal,
  Code2,
  Video,
  BookOpen,
  Gamepad2,
  Globe2,
  Compass,
  Scale,
  ShieldCheck,
  Flag,
  Sparkles,
  ArrowRight,
  X,
  ExternalLink,
  Check,
  Flame,
  Laptop
} from "lucide-react";
import { communityData, type StudentCommunity } from "../data/communityData";

export function CommunitySection() {
  const [selectedType, setSelectedType] = useState<"all" | "ormawa" | "ukm">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeCommunity, setActiveCommunity] = useState<StudentCommunity | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = [
    { key: "all", label: "Semua Kategori" },
    { key: "tech", label: "Cyber & AI Tech" },
    { key: "islamic", label: "Kader & Keislaman" },
    { key: "creative", label: "Media & Studio" },
    { key: "sports", label: "Esports & Games" },
    { key: "leadership", label: "Kepemimpinan" },
  ];

  const filteredCommunities = communityData.filter((c) => {
    const matchType = selectedType === "all" ? true : c.type === selectedType;
    const matchCat = selectedCategory === "all" ? true : c.category === selectedCategory;
    return matchType && matchCat;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-5 h-5" />;
      case "Scale":
        return <Scale className="w-5 h-5" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5" />;
      case "Flag":
        return <Flag className="w-5 h-5" />;
      case "Terminal":
        return <Terminal className="w-5 h-5" />;
      case "Code2":
        return <Code2 className="w-5 h-5" />;
      case "Video":
        return <Video className="w-5 h-5" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5" />;
      case "Gamepad2":
        return <Gamepad2 className="w-5 h-5" />;
      case "Globe2":
        return <Globe2 className="w-5 h-5" />;
      default:
        return <Users className="w-5 h-5" />;
    }
  };

  const handleCopyInvite = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="komunitas" className="py-20 relative bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-semibold mb-3">
              <Users className="w-3.5 h-3.5 text-amber-500" />
              <span>Ekosistem Bakat & Organisasi</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Ormawa & Unit Kegiatan Mahasiswa (UKM)
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Ruang bertumbuh untuk kepemimpinan, riset teknologi siber, seni multimedia, dan dakwah Islam Berkemajuan yang inklusif.
            </p>
          </div>

          {/* Type Switcher */}
          <div className="inline-flex p-1 rounded-2xl bg-slate-200/70 dark:bg-slate-900/80 border border-slate-300/50 dark:border-slate-800 self-start md:self-auto text-xs font-bold">
            <button
              onClick={() => setSelectedType("all")}
              className={`px-3.5 py-2 rounded-xl transition-all ${
                selectedType === "all"
                  ? "bg-teal-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-300 hover:text-teal-600"
              }`}
            >
              Semua ({communityData.length})
            </button>
            <button
              onClick={() => setSelectedType("ormawa")}
              className={`px-3.5 py-2 rounded-xl transition-all ${
                selectedType === "ormawa"
                  ? "bg-teal-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-300 hover:text-teal-600"
              }`}
            >
              Ormawa (4)
            </button>
            <button
              onClick={() => setSelectedType("ukm")}
              className={`px-3.5 py-2 rounded-xl transition-all ${
                selectedType === "ukm"
                  ? "bg-teal-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-300 hover:text-teal-600"
              }`}
            >
              UKM Virtual (6)
            </button>
          </div>
        </div>

        {/* Featured Spotlight Editorial Card with Real Image */}
        <div className="mb-12 rounded-3xl overflow-hidden glass-card border border-teal-500/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-auto overflow-hidden">
            <img
              src="/images/community-lab.jpg"
              alt="Aktivitas kolaborasi mahasiswa di laboratorium siber"
              width="800"
              height="533"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-4 left-4 p-2.5 rounded-xl glass-card backdrop-blur-md text-xs font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Live War Room & Hackathon Coding Session</span>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  Komunitas Paling Aktif 2026
                </span>
                <span className="text-xs text-slate-400">• 230+ Anggota</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                SiberMu AI & Fullstack Developers Club
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Wadah kolaborasi koding mahasiswa lintas jurusan untuk membangun aplikasi open-source, riset kecerdasan buatan etis, dan persiapan kompetisi hackathon nasional & dunia.
              </p>

              <div className="mt-4 space-y-2 text-xs text-slate-700 dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Mentorship mingguan bersama engineer industri</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Akses server cloud & GPU komputasi gratis</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400">
                Kanal Discord Resmi
              </span>
              <button
                onClick={() =>
                  setActiveCommunity(
                    communityData.find((c) => c.id === "ukm-ai-dev") || communityData[0]
                  )
                }
                className="px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-500 text-white shadow-sm flex items-center gap-1.5"
              >
                <span>Lihat Profil & Gabung</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Badges */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 rounded-full font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat.key
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 shadow-xs"
                  : "bg-white/80 dark:bg-slate-900/70 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Community Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommunities.map((comm) => (
            <div
              key={comm.id}
              className="rounded-2xl glass-card overflow-hidden flex flex-col justify-between hover:border-teal-500/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`h-24 bg-gradient-to-r ${comm.bannerGradient} p-4 flex items-start justify-between relative`}>
                <div className="w-10 h-10 rounded-xl bg-white/95 dark:bg-[#0B132B]/95 backdrop-blur-md shadow-md text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(comm.iconName)}
                </div>
                <div className="flex items-center gap-2">
                  {comm.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-slate-950 shadow-xs">
                      {comm.badge}
                    </span>
                  )}
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 backdrop-blur-xs">
                    {comm.type === "ormawa" ? "Ormawa" : "UKM"}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {comm.name}
                  </h3>
                  <p className="mt-1 text-xs text-amber-600 dark:text-amber-400 font-semibold italic">
                    "{comm.tagline}"
                  </p>
                  <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {comm.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium">
                      <Users className="w-3.5 h-3.5 text-teal-500" />
                      <span>{comm.memberCount} Anggota Aktif</span>
                    </div>

                    <button
                      onClick={() => setActiveCommunity(comm)}
                      className="inline-flex items-center gap-1 font-bold text-xs text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
                    >
                      <span>Detail & Gabung</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Detail & Join Modal */}
      {activeCommunity && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActiveCommunity(null)}
        >
          <div
            className="w-full max-w-lg bg-white dark:bg-[#0B132B] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`p-6 bg-gradient-to-r ${activeCommunity.bannerGradient} relative`}>
              <button
                onClick={() => setActiveCommunity(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-900/40 text-white hover:bg-slate-900/60 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 text-teal-600 dark:text-teal-400 flex items-center justify-center shadow-lg mb-3">
                {getIcon(activeCommunity.iconName)}
              </div>
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                {activeCommunity.name}
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-200 font-medium mt-1">
                {activeCommunity.tagline}
              </p>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Profil & Visi Komunitas
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeCommunity.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Agenda & Program Unggulan
                </h4>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-200">
                  {activeCommunity.featuredActivities.map((act, i) => (
                    <li key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-teal-500/10 dark:bg-teal-900/20 border border-teal-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                    Kanal Komunitas Resmi:
                  </span>
                  <span className="text-xs font-bold text-teal-700 dark:text-teal-300">
                    {activeCommunity.contactPlatform}
                  </span>
                </div>
                <button
                  onClick={handleCopyInvite}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-500 text-white flex items-center gap-1.5 transition-all shadow-sm"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Link Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Gabung Komunitas</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
