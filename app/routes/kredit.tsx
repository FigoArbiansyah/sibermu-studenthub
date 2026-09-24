import React, { useState, useEffect } from "react";
import type { Route } from "./+types/kredit";
import { Link } from "react-router";
import {
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Type,
  Image as ImageIcon,
  Volume2,
  Code2,
  ExternalLink,
  Bot,
  Layers,
  HeartHandshake,
  Sun,
  Moon,
  Home,
  CheckCircle2,
  FileBadge,
  Eye,
  Info
} from "lucide-react";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kredit & Atribusi Aset | Biro Kemahasiswaan & AIK SiberMu" },
    {
      name: "description",
      content:
        "Daftar lengkap sumber daya, atribusi gambar AI, logo resmi kampus, ikonografi, tipografi, dan teknologi open-source yang digunakan pada SiberMu StudentHub.",
    },
    { property: "og:title", content: "Kredit & Atribusi Aset | SiberMu StudentHub" },
    { property: "og:type", content: "website" },
  ];
}

interface ImageCreditItem {
  id: string;
  name: string;
  filePath: string;
  thumbnail: string;
  sourceType: "AI Generated" | "Aset Resmi Institusi" | "Desain Vektor Mandiri";
  toolOrModel: string;
  promptText?: string;
  license: string;
  usageLocation: string;
  aspectRatio: string;
  notes: string;
}

const IMAGE_CREDITS: ImageCreditItem[] = [
  {
    id: "hero-students",
    name: "Visual Hero & Banner Mahasiswa Cyber Campus",
    filePath: "/images/hero-students.webp",
    thumbnail: "/images/hero-students.webp",
    sourceType: "AI Generated",
    toolOrModel: "Google Imagen 3 / Advanced Generative Diffusion Model",
    promptText: "Cinematic hyper-realistic photography of diverse Indonesian university cyber students collaborating in a modern high-tech virtual computer lab at SiberMu campus. Futuristic university setting with deep teal, dark navy, and bright cyan ambient neon glow, sleek laptops, transparent data displays. Background wall cleanly displays modern illuminated sign 'SIBERMU'. High quality 8k, photorealistic.",
    license: "Royalty-Free / Custom Generated for SiberMu StudentHub",
    usageLocation: "Hero Section (Latar belakang visual utama halaman depan)",
    aspectRatio: "16:9 Landscape (High Resolution)",
    notes: "Menampilkan representasi mahasiswa dan mahasiswi Indonesia yang sedang berkolaborasi di lingkungan laboratorium siber berteknologi mutakhir dengan nuansa Islami modern.",
  },
  {
    id: "community-lab",
    name: "Spotlight Kolaborasi Ormawa & UKM Virtual",
    filePath: "/images/community-lab.webp",
    thumbnail: "/images/community-lab.webp",
    sourceType: "AI Generated",
    toolOrModel: "Generative AI Image Architecture (Diffusion Model)",
    promptText: "Photorealistic image of diverse Indonesian university students actively collaborating in an open-space cyber innovation club at SiberMu campus. Students working on laptops, UI/UX designs, and robotics with warm ambient lighting and teal neon accents. On the wall behind, a modern illuminated logo reads 'SIBERMU INNOVATION / CYBER INNOVATION CLUB'.",
    license: "Royalty-Free / Custom Generated for SiberMu StudentHub",
    usageLocation: "Direktori Komunitas (Spotlight Card Organisasi & UKM)",
    aspectRatio: "16:10 Horizontal",
    notes: "Menggambarkan suasana dinamis ruang kerja bersama (co-working space) mahasiswa siber yang mengembangkan proyek riset dan teknologi kemahasiswaan.",
  },
  {
    id: "champions",
    name: "Hall of Champions & Apresiasi Prestasi Mahasiswa",
    filePath: "/images/champions.webp",
    thumbnail: "/images/champions.webp",
    sourceType: "AI Generated",
    toolOrModel: "Generative AI Image Architecture (Diffusion Model)",
    promptText: "Cinematic photography of Indonesian university students standing on an awards celebration stage, holding championship trophies, golden medals, and certificates of technological innovation. Behind them, a grand stage LED screen cleanly reads 'SIBERMU CHAMPIONS'. Gold and cyan bokeh lighting.",
    license: "Royalty-Free / Custom Generated for SiberMu StudentHub",
    usageLocation: "Dinding Prestasi (Banner Apresiasi Hall of Fame)",
    aspectRatio: "16:10 Horizontal",
    notes: "Representasi kebanggaan atas raihan juara dan medali mahasiswa SiberMu dalam kompetisi akademik, inovasi siber, dan bidang minat-bakat.",
  },
  {
    id: "aik-seminar",
    name: "Penguatan Nilai AIK & Seminar Virtual Kampus",
    filePath: "/images/aik-seminar.webp",
    thumbnail: "/images/aik-seminar.webp",
    sourceType: "AI Generated",
    toolOrModel: "Generative AI Image Architecture (Diffusion Model)",
    promptText: "Photorealistic wide shot of a modern Indonesian Islamic university auditorium at SiberMu campus during an academic seminar. On the main stage backdrop, a sleek illuminated LED screen reads 'SIBERMU - KAJIAN ISLAM BERKEMAJUAN'. Keynote speaker presenting on digital ethics.",
    license: "Royalty-Free / Custom Generated for SiberMu StudentHub",
    usageLocation: "Pusat AIK (Kartu Dokumentasi Kegiatan & Seminar)",
    aspectRatio: "16:10 Horizontal",
    notes: "Visualisasi forum dialog keilmuan dan kajian Islam Berkemajuan yang memadukan integrasi sains-teknologi dengan adab dan akhlakul karimah.",
  },
  {
    id: "podcast-studio",
    name: "Studio Syiar Digital & Podcast Risalah Hikmah",
    filePath: "/images/podcast-studio.webp",
    thumbnail: "/images/podcast-studio.webp",
    sourceType: "AI Generated",
    toolOrModel: "Generative AI Image Architecture (Diffusion Model)",
    promptText: "Photorealistic interior of a cutting-edge podcast broadcasting studio at SiberMu university. Modern studio desk with broadcast condenser microphones, sound mixers, monitor screens, with illuminated neon LED sign reading 'SIBERMU PODCAST'.",
    license: "Royalty-Free / Custom Generated for SiberMu StudentHub",
    usageLocation: "Ruang Syiar (Thumbnail Pemutar Audio Podcast Web)",
    aspectRatio: "16:10 Horizontal",
    notes: "Menggambarkan studio siaran multimedia modern tempat produksi serial kajian digital dan siaran dakwah berkemajuan bagi generasi muda.",
  },
  {
    id: "sibermu-emblem",
    name: "Logo Emblem Resmi Universitas Siber Muhammadiyah",
    filePath: "/images/sibermu-emblem.webp",
    thumbnail: "/images/sibermu-emblem.webp",
    sourceType: "Aset Resmi Institusi",
    toolOrModel: "Desain Grafis Resmi Universitas Siber Muhammadiyah",
    promptText: "Bukan hasil AI — Aset grafis resmi persyarikatan & universitas",
    license: "Hak Cipta Institusi Milik Universitas Siber Muhammadiyah",
    usageLocation: "Favicon, Apple Touch Icon, Logo Header Bar, & Lambang Footer",
    aspectRatio: "1:1 Square (WebP Transparan)",
    notes: "Lambang matahari khas persyarikatan Muhammadiyah yang dikombinasikan dengan ornamen siber digital sebagai identitas utama kampus.",
  },
  {
    id: "sibermu-logo",
    name: "Logo Lengkap Resmi Universitas Siber Muhammadiyah (Versi Warna Standar)",
    filePath: "/images/sibermu-logo.webp",
    thumbnail: "/images/sibermu-logo.webp",
    sourceType: "Aset Resmi Institusi",
    toolOrModel: "Identitas Brand Resmi Biro Humas & Kemahasiswaan SiberMu",
    promptText: "Bukan hasil AI — Identitas visual resmi universitas",
    license: "Hak Cipta Institusi Milik Universitas Siber Muhammadiyah",
    usageLocation: "Header Dokumentasi Proposal Lomba, OpenGraph Banner, & File PDF",
    aspectRatio: "Horisontal (WebP Transparan)",
    notes: "Menampilkan kombinasi emblem logo resmi dengan tipografi resmi Universitas Siber Muhammadiyah dalam palet warna biru-oranye institusional.",
  },
  {
    id: "sibermu-logo-white",
    name: "Logo Lengkap Resmi Universitas Siber Muhammadiyah (Versi Monokrom Putih)",
    filePath: "/images/sibermu-logo-white.webp",
    thumbnail: "/images/sibermu-logo-white.webp",
    sourceType: "Aset Resmi Institusi",
    toolOrModel: "Identitas Brand Resmi Biro Humas & Kemahasiswaan SiberMu",
    promptText: "Bukan hasil AI — Variasi resmi untuk latar belakang gelap",
    license: "Hak Cipta Institusi Milik Universitas Siber Muhammadiyah",
    usageLocation: "Elemen navigasi mode malam dan header berkontras tinggi",
    aspectRatio: "Horisontal (WebP Transparan)",
    notes: "Varian logo resmi berwarna putih murni untuk menjamin keterbacaan maksimal pada latar belakang gelap (Dark Mode).",
  },
  {
    id: "pwa-icons",
    name: "Paket Ikon Web Progresif (PWA App Icons)",
    filePath: "/icons/icon-192.svg & /icons/icon-512.svg",
    thumbnail: "/icons/icon-512.svg",
    sourceType: "Desain Vektor Mandiri",
    toolOrModel: "Vektor SVG Mandiri SiberMu StudentHub",
    promptText: "Bukan hasil AI — Dibuat menggunakan sintesis kode SVG geometris",
    license: "MIT License / Open Web Standard",
    usageLocation: "Web App Manifest (PWA), Shortcut Beranda Ponsel & Desktop",
    aspectRatio: "1:1 Square (SVG Vektor)",
    notes: "Ikon berstandar maskable yang mendukung instalasi web aplikasi mandiri tanpa koneksi internet yang stabil.",
  },
];

interface OtherAttributionSection {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  items: {
    name: string;
    source: string;
    license: string;
    usage: string;
    details: string;
    link?: string;
  }[];
}

const OTHER_ATTRIBUTIONS: OtherAttributionSection[] = [
  {
    id: "typography",
    title: "Tipografi & Keluarga Huruf (Fonts)",
    description: "Keluarga font modern dengan tingkat keterbacaan tinggi dan performa render cepat di berbagai perangkat.",
    icon: Type,
    color: "from-sky-500/20 to-blue-500/10 border-sky-500/30 text-sky-400",
    items: [
      {
        name: "Plus Jakarta Sans",
        source: "Google Fonts (Dirancang oleh Gumpita Rahayu / Tokotype)",
        license: "SIL Open Font License (OFL) v1.1",
        usage: "Heading, Judul Seksi, dan Aksen Tipografi Utama",
        details: "Font sans-serif modern asli karya desainer Indonesia yang geometris, ramah layar digital, dan memberikan impresi futuristik namun elegan.",
        link: "https://fonts.google.com/specimen/Plus+Jakarta+Sans",
      },
      {
        name: "Inter",
        source: "Google Fonts (Dirancang oleh Rasmus Andersson)",
        license: "SIL Open Font License (OFL) v1.1",
        usage: "Body Text, Paragraf, Data Tabel, dan Label Formulir",
        details: "Font standar industri antarmuka pengguna digital dengan x-height tinggi untuk kenyamanan membaca optimal pada dokumen dan layar kecil.",
        link: "https://fonts.google.com/specimen/Inter",
      },
    ],
  },
  {
    id: "icons",
    title: "Ikonografi & Simbol UI",
    description: "Simbol visual SVG vektor yang konsisten, berbobot ringan, dan ramah aksesibilitas pembaca layar (screen reader).",
    icon: Sparkles,
    color: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400",
    items: [
      {
        name: "Lucide Icons (Lucide React)",
        source: "Komunitas Open-Source Lucide (lucide.dev)",
        license: "ISC License (Open Source Software)",
        usage: "Seluruh ikon navigasi, status layanan, tombol aksi, lencana pilar AIK, dan kontrol pemutar audio",
        details: "Paket ikon berbasis SVG murni yang dapat disesuaikan ukurannya secara dinamis tanpa kehilangan ketajaman piksel.",
        link: "https://lucide.dev",
      },
    ],
  },
  {
    id: "audio-media",
    title: "Audio & Sintesis Multimedia",
    description: "Implementasi teknologi audio peramban tanpa latensi dan representasi syiar digital interaktif.",
    icon: Volume2,
    color: "from-purple-500/20 to-violet-500/10 border-purple-500/30 text-purple-400",
    items: [
      {
        name: "Native Web Audio API Synthesizer",
        source: "W3C Web Audio API Specification (Peramban Modern)",
        license: "Native Web Standard (Open Standard)",
        usage: "Pemutar Syiar Digital, Spektrum Frekuensi Audio, & Notifikasi Suara",
        details: "Menggunakan osilator frekuensi dan node penguat native browser untuk menghasilkan harmonisasi nada tanpa membutuhkan file streaming audio eksternal yang berat.",
        link: "https://www.w3.org/TR/webaudio/",
      },
      {
        name: "Kutipan Mutiara Hikmah K.H. Ahmad Dahlan",
        source: "Arsip & Khazanah Pemikiran K.H. Ahmad Dahlan (Pimpinan Pusat Muhammadiyah)",
        license: "Public Domain / Khazanah Keislaman Persyarikatan",
        usage: "Daily Hikmah Generator & Refleksi Nilai Berkemajuan",
        details: "Koleksi untaian nasihat bijak seputar amalan ilmu, kepedulian sosial Al-Ma'un, dan integritas moral di era kemajuan zaman.",
      },
    ],
  },
  {
    id: "frameworks",
    title: "Framework & Pustaka Open-Source",
    description: "Fondasi rekayasa perangkat lunak modern yang menopang arsitektur, reaktivitas, dan performa tinggi portal.",
    icon: Code2,
    color: "from-indigo-500/20 to-cyan-500/10 border-indigo-500/30 text-indigo-400",
    items: [
      {
        name: "React 19 & React Router (Framework Mode)",
        source: "Meta Open Source & Remix Software Inc.",
        license: "MIT License",
        usage: "Arsitektur Komponen Reaktif, Router & SSR Engine",
        details: "Menyediakan rendering kilat, navigasi mulus tanpa muat ulang halaman (SPA), dan manajemen status aplikasi modern.",
        link: "https://reactrouter.com",
      },
      {
        name: "Tailwind CSS v4",
        source: "Tailwind Labs Inc.",
        license: "MIT License",
        usage: "Sistem Desain (Design Tokens), Glassmorphism, & Responsivitas Antarmuka",
        details: "Mesin utilitas CSS generasi terbaru dengan kompilasi LightningCSS super cepat dan isolasi gaya yang presisi.",
        link: "https://tailwindcss.com",
      },
      {
        name: "TypeScript 5.9",
        source: "Microsoft Corporation",
        license: "Apache License 2.0",
        usage: "Type Safety & Keandalan Kode Program",
        details: "Menjamin integritas data dan mencegah runtime error pada setiap kalkulasi simulasi dan pelacakan tiket layanan.",
        link: "https://www.typescriptlang.org",
      },
      {
        name: "Vercel Edge Network",
        source: "Vercel Inc.",
        license: "Cloud Infrastructure Service",
        usage: "Hosting Global, Edge Caching, & Distribusi DNS",
        details: "Memastikan ketersediaan layanan 99.9% dengan latensi sangat rendah bagi mahasiswa dari seluruh pelosok tanah air.",
        link: "https://vercel.com",
      },
    ],
  },
];

export default function KreditPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeFilter, setActiveFilter] = useState<"all" | "ai" | "official">("all");

  useEffect(() => {
    const isDarkStored = localStorage.getItem("sibermu_theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = isDarkStored ? isDarkStored === "dark" : prefersDark;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleToggleTheme = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("sibermu_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("sibermu_theme", "light");
    }
  };

  const filteredImages = IMAGE_CREDITS.filter((img) => {
    if (activeFilter === "ai") return img.sourceType === "AI Generated";
    if (activeFilter === "official") return img.sourceType === "Aset Resmi Institusi" || img.sourceType === "Desain Vektor Mandiri";
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#070B19] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Top Floating Mini Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/85 dark:bg-[#0B132B]/85 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 group-hover:border-teal-500/50">
              <ArrowLeft className="w-4 h-4 text-teal-500 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span>Kembali ke Beranda</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 hover:bg-teal-500/20 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>SiberMu StudentHub</span>
            </Link>

            <button
              onClick={handleToggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
              aria-label="Ubah tema tampilan"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title & Intro */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 dark:bg-teal-500/15 border border-teal-500/30 text-teal-600 dark:text-teal-400 text-xs font-semibold mb-4 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-teal-500" />
              <span>Transparansi Lisensi & Integritas Karya</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Kredit & Atribusi Seluruh Media
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Pernyataan resmi mengenai sumber daya setiap gambar hasil kecerdasan buatan (Generative AI), logo institusi resmi, tipografi font, ikonografi, dan pustaka terbuka (open-source) yang digunakan pada portal SiberMu StudentHub.
            </p>
          </div>

          {/* Ethics & AI Transparency Banner */}
          <div className="mb-14 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-teal-500/10 via-cyan-500/5 to-amber-500/10 border border-teal-500/30 backdrop-blur-sm relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <Bot className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  Prinsip Etika Kecerdasan Buatan (AI) & Kepatuhan Hak Cipta
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Seluruh visual ilustrasi dalam portal ini dibuat melalui Generative AI dengan arahan prompt mandiri atau berasal langsung dari aset identitas resmi institusi Universitas Siber Muhammadiyah. Tidak ada karya berhak cipta milik fotografer atau kreator pihak ketiga yang digunakan tanpa izin. Hal ini selaras dengan pilar AIK ke-4 mengenai Tajdid & Etika Bermedia Siber.
                </p>
              </div>
            </div>
          </div>

          {/* SEKSI 1: KATALOG SETIAP GAMBAR & LOGO (IMAGE DIRECTORY) */}
          <section className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/10 border border-teal-500/30 text-teal-400 shrink-0">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    1. Rincian Seluruh Berkas Gambar & Logo
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Daftar lengkap 8 aset visual dengan preview visual, path berkas, model generator, engineered prompt, dan penempatannya di web.
                  </p>
                </div>
              </div>

              {/* Filter Tabs for Images */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 self-start sm:self-auto text-xs">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                    activeFilter === "all"
                      ? "bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-xs"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Semua ({IMAGE_CREDITS.length})
                </button>
                <button
                  onClick={() => setActiveFilter("ai")}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                    activeFilter === "ai"
                      ? "bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-xs"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  AI Generated (5)
                </button>
                <button
                  onClick={() => setActiveFilter("official")}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                    activeFilter === "official"
                      ? "bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-xs"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Resmi & Vektor (4)
                </button>
              </div>
            </div>

            {/* Grid of All Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredImages.map((img) => (
                <div
                  key={img.id}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:border-teal-500/40 transition-all flex flex-col"
                >
                  {/* Image Preview Thumbnail */}
                  <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800 group">
                    <img
                      src={img.thumbnail}
                      alt={img.name}
                      className={`w-full h-full ${
                        img.filePath.endsWith(".png") || img.filePath.endsWith(".svg")
                          ? "object-contain p-6 max-h-48"
                          : "object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      }`}
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold shadow-md ${
                          img.sourceType === "AI Generated"
                            ? "bg-teal-500 text-white"
                            : img.sourceType === "Aset Resmi Institusi"
                            ? "bg-amber-500 text-slate-950"
                            : "bg-indigo-600 text-white"
                        }`}
                      >
                        {img.sourceType}
                      </span>
                    </div>

                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm text-[10px] text-slate-300 font-mono">
                      {img.filePath}
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                          {img.name}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {img.notes}
                        </p>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                        <div className="flex items-start gap-2">
                          <span className="text-slate-500 dark:text-slate-400 w-28 shrink-0 font-medium">
                            Generator / Model:
                          </span>
                          <span className="text-slate-800 dark:text-slate-200 font-semibold">
                            {img.toolOrModel}
                          </span>
                        </div>

                        <div className="flex items-start gap-2">
                          <span className="text-slate-500 dark:text-slate-400 w-28 shrink-0 font-medium">
                            Implementasi:
                          </span>
                          <span className="text-teal-600 dark:text-teal-400 font-medium">
                            {img.usageLocation}
                          </span>
                        </div>

                        <div className="flex items-start gap-2">
                          <span className="text-slate-500 dark:text-slate-400 w-28 shrink-0 font-medium">
                            Status Lisensi:
                          </span>
                          <span className="text-slate-700 dark:text-slate-300">
                            {img.license}
                          </span>
                        </div>

                        {img.promptText && img.sourceType === "AI Generated" && (
                          <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80">
                            <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1">
                              Engineered Prompt:
                            </span>
                            <p className="text-[11px] font-mono text-teal-700 dark:text-teal-300 leading-relaxed italic">
                              "{img.promptText}"
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SEKSI 2: TIPOGRAFI, IKON, AUDIO, & FRAMEWORKS */}
          <section className="space-y-10">
            <div className="pb-3 border-b border-slate-200 dark:border-slate-800">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                2. Kredit Tipografi, Ikonografi, Audio, & Pustaka Terbuka
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Lisensi resmi font Google, kumpulan ikon SVG Lucide, W3C Web Audio API, serta framework teknologi.
              </p>
            </div>

            <div className="space-y-8">
              {OTHER_ATTRIBUTIONS.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <div
                    key={category.id}
                    id={category.id}
                    className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} border shadow-inner shrink-0`}>
                        <CategoryIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 divide-y divide-slate-100 dark:divide-slate-800/80">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="py-4 first:pt-2 last:pb-0 space-y-2">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                                {item.name}
                              </span>
                              {item.link && (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-[11px] text-teal-600 dark:text-teal-400 hover:underline"
                                >
                                  <span>Tautan Resmi</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>

                            <div className="flex flex-wrap items-center gap-2">
                              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                Lisensi: {item.license}
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-4 gap-1.5 text-xs text-slate-600 dark:text-slate-300 pt-1">
                            <div className="sm:col-span-1 text-slate-500 dark:text-slate-400 font-medium">
                              Sumber & Penyedia:
                            </div>
                            <div className="sm:col-span-3 text-slate-800 dark:text-slate-200">
                              {item.source}
                            </div>

                            <div className="sm:col-span-1 text-slate-500 dark:text-slate-400 font-medium">
                              Implementasi di Halaman:
                            </div>
                            <div className="sm:col-span-3 text-teal-700 dark:text-teal-300 font-medium">
                              {item.usage}
                            </div>

                            <div className="sm:col-span-1 text-slate-500 dark:text-slate-400 font-medium">
                              Keterangan Teknis:
                            </div>
                            <div className="sm:col-span-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                              {item.details}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bottom Back Button */}
          <div className="mt-14 pt-8 text-center border-t border-slate-200 dark:border-slate-800">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-sm shadow-lg shadow-teal-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda SiberMu StudentHub</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
