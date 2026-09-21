import React from "react";
import {
  Compass,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowUp,
  Heart,
  Globe,
  ShieldCheck
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white p-1.5 flex items-center justify-center border border-teal-500/30 shadow-md shrink-0">
                <img
                  src="/images/sibermu-emblem.png"
                  alt="Logo Resmi Universitas Siber Muhammadiyah"
                  width="44"
                  height="44"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-base text-white tracking-tight block">
                  SIBERMU STUDENTHUB
                </span>
                <span className="text-[11px] text-teal-400 font-semibold tracking-wider uppercase block">
                  Biro Kemahasiswaan & AIK
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Perguruan tinggi siber pertama milik Persyarikatan Muhammadiyah yang menyelenggarakan pendidikan tinggi jarak jauh berbasis teknologi informasi mutakhir berlandaskan nilai Islam Berkemajuan.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Terakreditasi BAN-PT</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400">
                <Globe className="w-3.5 h-3.5" />
                <span>Cyber Campus Hub</span>
              </div>
            </div>
          </div>

          {/* Navigasi Kemahasiswaan */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Kemahasiswaan
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#layanan" className="hover:text-teal-400 transition-colors">
                  Pengajuan Beasiswa Siber
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-teal-400 transition-colors">
                  Konseling Sahabat Siber
                </a>
              </li>
              <li>
                <a href="#komunitas" className="hover:text-teal-400 transition-colors">
                  Direktori Ormawa & UKM
                </a>
              </li>
              <li>
                <a href="#prestasi" className="hover:text-teal-400 transition-colors">
                  Hall of Champions
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-teal-400 transition-colors">
                  e-Legalisir & Surat QR
                </a>
              </li>
            </ul>
          </div>

          {/* Navigasi AIK */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Al-Islam & AIK
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#aik" className="hover:text-teal-400 transition-colors">
                  4 Pilar Nilai Berkemajuan
                </a>
              </li>
              <li>
                <a href="#aik-agenda" className="hover:text-teal-400 transition-colors">
                  Agenda Kajian Daring
                </a>
              </li>
              <li>
                <a href="#syiar" className="hover:text-teal-400 transition-colors">
                  Podcast Syiar SiberMu
                </a>
              </li>
              <li>
                <a href="#syiar" className="hover:text-teal-400 transition-colors">
                  Mutiara Hikmah Harian
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-400 transition-colors">
                  Sertifikasi Baitul Arqam
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak & Kampus Siber */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Kantor Virtual & Kontak
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Jl. KH. Ahmad Dahlan No. 103, Yogyakarta 55262, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:kemahasiswaan@sibermu.ac.id" className="hover:text-teal-400">
                  kemahasiswaan@sibermu.ac.id
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>+62 (274) 555-SIBER (24/7 Bot)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1 text-center sm:text-left">
            <span>© 2026 Biro Kemahasiswaan dan AIK — Universitas Siber Muhammadiyah. Dirancang untuk keunggulan siber.</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas halaman"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
