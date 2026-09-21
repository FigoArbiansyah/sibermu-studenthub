import React, { useState } from "react";
import {
  Sparkles,
  RefreshCw,
  Copy,
  Check,
  Quote,
  Heart,
  Share2
} from "lucide-react";
import { quotesData, type HikmahQuote } from "../data/quotesData";

export function DailyHikmahWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState(142);
  const [isLiked, setIsLiked] = useState(false);

  const currentQuote: HikmahQuote = quotesData[currentIndex];

  const handleNextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % quotesData.length);
  };

  const handleCopyQuote = () => {
    const textToCopy = `"${currentQuote.text}" - ${currentQuote.author} (${currentQuote.source})\n\nRefleksi: ${currentQuote.reflection}\n[Biro Kemahasiswaan & AIK Universitas Siber Muhammadiyah]`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    if (!isLiked) {
      setLikes((prev) => prev + 1);
      setIsLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setIsLiked(false);
    }
  };

  return (
    <div className="rounded-3xl glass-card border border-amber-500/30 p-6 sm:p-10 shadow-xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6 pb-6 border-b border-slate-200/80 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <Quote className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
              Mutiara Hikmah & Risalah Pencerahan
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Inspirasi K.H. Ahmad Dahlan & Ajaran Islam Berkemajuan untuk Mahasiswa
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
          Tema: {currentQuote.tag}
        </span>
      </div>

      {/* Quote Main Display */}
      <div className="relative z-10 py-4">
        <blockquote className="text-base sm:text-xl font-medium text-slate-800 dark:text-slate-100 italic leading-relaxed sm:leading-loose">
          "{currentQuote.text}"
        </blockquote>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm font-bold text-teal-600 dark:text-teal-400">
            {currentQuote.author}
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {currentQuote.source}
          </span>
        </div>

        {/* Reflection Note */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
            💡 Refleksi Mahasiswa Siber:
          </span>
          <p className="leading-relaxed">{currentQuote.reflection}</p>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="relative z-10 mt-8 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              isLiked
                ? "bg-rose-500/15 text-rose-500"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-rose-500/10 hover:text-rose-500"
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-rose-500" : ""}`} />
            <span>{likes} Menyukai</span>
          </button>

          <button
            onClick={handleCopyQuote}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Tersalin ke Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Salin Kutipan</span>
              </>
            )}
          </button>
        </div>

        <button
          onClick={handleNextQuote}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 transition-all shadow-sm active:scale-95"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Hikmah Selanjutnya ({currentIndex + 1}/{quotesData.length})</span>
        </button>
      </div>
    </div>
  );
}
