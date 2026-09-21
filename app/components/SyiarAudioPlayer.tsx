import React, { useState, useEffect, useRef } from "react";
import {
  Radio,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Share2,
  Headphones,
  Sparkles,
  Check,
  Mic2
} from "lucide-react";
import { syiarAudioEpisodes, type SyiarAudioEpisode } from "../data/aikData";

interface SyiarAudioPlayerProps {
  onShowToast?: (title: string, message: string, type?: "success" | "info" | "warning") => void;
}

export function SyiarAudioPlayer({ onShowToast }: SyiarAudioPlayerProps) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeSec, setCurrentTimeSec] = useState(45);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [copiedShare, setCopiedShare] = useState(false);
  const [volume, setVolume] = useState<number>(80);
  const [isMuted, setIsMuted] = useState(false);

  const currentTrack: SyiarAudioEpisode = syiarAudioEpisodes[currentTrackIndex];

  // Web Audio API engine reference for real audible tones
  const audioCtxRef = useRef<AudioContext | null>(null);
  const toneIntervalRef = useRef<any>(null);

  // Initialize or resume audio context
  const startAudioEngine = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      // Play soft serene harmonic chord progression
      const notes = [293.66, 329.63, 349.23, 440.0, 523.25]; // D-minor serene scale
      let noteIndex = 0;

      if (toneIntervalRef.current) clearInterval(toneIntervalRef.current);

      toneIntervalRef.current = setInterval(() => {
        if (!audioCtxRef.current || isMuted) return;
        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();

        const currentVol = isMuted ? 0 : (volume / 100) * 0.08;
        gain.gain.setValueAtTime(currentVol, audioCtxRef.current.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1.8);

        osc.type = "sine";
        osc.frequency.setValueAtTime(notes[noteIndex % notes.length], audioCtxRef.current.currentTime);
        noteIndex++;

        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);

        osc.start();
        osc.stop(audioCtxRef.current.currentTime + 2.0);
      }, 2200 / playbackSpeed);
    } catch (e) {
      console.error("Web Audio API error", e);
    }
  };

  const stopAudioEngine = () => {
    if (toneIntervalRef.current) {
      clearInterval(toneIntervalRef.current);
      toneIntervalRef.current = null;
    }
  };

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTimeSec((prev) => (prev >= 600 ? 0 : prev + 1));
      }, 1000 / playbackSpeed);
      startAudioEngine();
    } else {
      stopAudioEngine();
    }

    return () => {
      clearInterval(interval);
      stopAudioEngine();
    };
  }, [isPlaying, playbackSpeed, isMuted, volume]);

  const togglePlay = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    if (nextState) {
      onShowToast?.(
        "Audio Mengudara",
        `Sedang memutar: "${currentTrack.title}" (${currentTrack.speaker})`,
        "info"
      );
    }
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % syiarAudioEpisodes.length);
    setCurrentTimeSec(0);
    setIsPlaying(true);
    onShowToast?.(
      "Ganti Episode",
      `Beralih ke episode ${((currentTrackIndex + 1) % syiarAudioEpisodes.length) + 1}`,
      "info"
    );
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + syiarAudioEpisodes.length) % syiarAudioEpisodes.length);
    setCurrentTimeSec(0);
    setIsPlaying(true);
  };

  const cycleSpeed = () => {
    let newSpeed = 1;
    if (playbackSpeed === 1) newSpeed = 1.25;
    else if (playbackSpeed === 1.25) newSpeed = 1.5;
    setPlaybackSpeed(newSpeed);
    onShowToast?.("Kecepatan Diubah", `Kecepatan audio diatur ke ${newSpeed}x`);
  };

  const handleShare = () => {
    setCopiedShare(true);
    navigator.clipboard?.writeText(
      `Dengarkan "${currentTrack.title}" bersama ${currentTrack.speaker} di Portal Syiar Digital Universitas Siber Muhammadiyah`
    );
    onShowToast?.("Tautan Episode Tersalin", "Tautan podcast telah disalin ke clipboard", "success");
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="rounded-3xl glass-card border border-teal-500/30 overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left: Real Studio Photo Preview */}
        <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto overflow-hidden bg-slate-900 group">
          <img
            src="/images/podcast-studio.jpg"
            alt="Studio podcast syiar digital mahasiswa Universitas Siber Muhammadiyah"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />

          {/* On-Air Live Indicator */}
          <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-600/90 text-white text-xs font-bold shadow-md">
            <span className={`w-2 h-2 rounded-full bg-white ${isPlaying ? "animate-ping" : ""}`} />
            <span>{isPlaying ? "ON AIR • MEMUTAR AUDIO" : "STUDIO PODCAST SIBER"}</span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl glass-card backdrop-blur-md text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
              Suara Kemahasiswaan & AIK
            </span>
            <p className="text-xs text-white font-medium line-clamp-1 mt-0.5">
              Dipandu oleh aktivis dan kader mahasiswa SiberMu
            </p>
          </div>
        </div>

        {/* Right: Audio Player Controls & Playlist */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          {/* Header Info */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/15 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                {currentTrack.category}
              </span>
              <span className="text-[11px] text-slate-400">
                Dirilis: {currentTrack.releaseDate}
              </span>
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
              {currentTrack.title}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Narasumber: <span className="font-semibold text-teal-600 dark:text-teal-400">{currentTrack.speaker}</span>
            </p>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
              {currentTrack.description}
            </p>

            {/* Equalizer Sound Waves Animation */}
            <div className="mt-4 flex items-center gap-1.5 h-6 p-2 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <Headphones className="w-4 h-4 text-teal-500 shrink-0 mr-1" />
              {[35, 70, 50, 95, 60, 100, 45, 80, 65, 30, 85, 50, 75, 40, 90, 60, 40].map((h, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full bg-teal-500 transition-all duration-300 ${
                    isPlaying ? "animate-pulse" : "opacity-40"
                  }`}
                  style={{
                    height: isPlaying ? `${Math.max(20, (h * Math.random()).toFixed(0))}%` : "30%",
                  }}
                />
              ))}
              <span className="text-[10px] font-mono text-slate-400 ml-auto">
                {isPlaying ? "Audio Aktif (Harmonik Suara)" : "Audio Dijeda"}
              </span>
            </div>
          </div>

          {/* Player Scrubber & Transport Buttons */}
          <div className="space-y-3">
            {/* Scrubber */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span>{formatTime(currentTimeSec)}</span>
              <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative cursor-pointer">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all"
                  style={{ width: `${Math.min(100, (currentTimeSec / 600) * 100)}%` }}
                />
              </div>
              <span>{currentTrack.duration}</span>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              {/* Episode selector buttons */}
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-slate-400 mr-1">Episode:</span>
                {syiarAudioEpisodes.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentTrackIndex(idx);
                      setCurrentTimeSec(0);
                      setIsPlaying(true);
                    }}
                    className={`w-6 h-6 rounded-lg text-xs font-bold transition-all ${
                      currentTrackIndex === idx
                        ? "bg-teal-600 text-white shadow-xs"
                        : "bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              {/* Volume & Audio Controls */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-slate-500 hover:text-teal-500"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-500" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      setVolume(Number(e.target.value));
                      setIsMuted(false);
                    }}
                    className="w-16 h-1 accent-teal-500 cursor-pointer"
                  />
                </div>

                <button
                  onClick={cycleSpeed}
                  className="px-2 py-1 rounded-md text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                  title="Kecepatan pemutaran"
                >
                  {playbackSpeed}x
                </button>

                <button
                  onClick={handlePrev}
                  className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-teal-500"
                  aria-label="Episode sebelumnya"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  onClick={togglePlay}
                  className="w-11 h-11 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white flex items-center justify-center shadow-lg shadow-teal-600/30 transition-transform active:scale-95"
                  aria-label={isPlaying ? "Jeda podcast" : "Putar podcast"}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>

                <button
                  onClick={handleNext}
                  className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-teal-500"
                  aria-label="Episode berikutnya"
                >
                  <SkipForward className="w-4 h-4" />
                </button>

                <button
                  onClick={handleShare}
                  className="p-1.5 text-slate-500 hover:text-teal-500"
                  aria-label="Bagikan episode"
                >
                  {copiedShare ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
