import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Calendar,
  Clock,
  Video,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  CheckCircle2,
  Users,
  Bell,
  ExternalLink,
  Flame,
  Radio,
  CalendarPlus,
  Download
} from "lucide-react";
import { aikPillarsData, upcomingStudySessions, type AikPillar, type UpcomingStudySession } from "../data/aikData";

interface AikHubSectionProps {
  onShowToast?: (title: string, message: string, type?: "success" | "info" | "warning") => void;
}

export function AikHubSection({ onShowToast }: AikHubSectionProps) {
  const [activePillar, setActivePillar] = useState<string>("tauhid");
  const [reminderSetId, setReminderSetId] = useState<string | null>(null);

  // Live countdown state for the upcoming session
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 21,
    minutes: 45,
    seconds: 10,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSetReminder = (session: UpcomingStudySession) => {
    setReminderSetId(session.id);
    onShowToast?.(
      "Pengingat Aktif",
      `Pengingat untuk "${session.title}" berhasil diatur. Anda akan menerima notifikasi H-1 jam.`,
      "success"
    );
    setTimeout(() => setReminderSetId(null), 3000);
  };

  const handleAddToGoogleCalendar = (session: UpcomingStudySession) => {
    const title = encodeURIComponent(session.title);
    const details = encodeURIComponent(
      `Kajian AIK Universitas Siber Muhammadiyah\nNarasumber: ${session.speaker} (${session.speakerTitle})\nPlatform: ${session.platform}\n\nDiselenggarakan oleh Biro Kemahasiswaan & AIK SiberMu.`
    );
    const location = encodeURIComponent(session.platform);
    // Simple calendar URL format
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    window.open(googleCalUrl, "_blank");
    onShowToast?.(
      "Kalender Terbuka",
      `Menambahkan "${session.title}" ke Google Calendar Anda.`,
      "info"
    );
  };

  const handleDownloadIcs = (session: UpcomingStudySession) => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//SiberMu//Biro Kemahasiswaan & AIK//ID
BEGIN:VEVENT
SUMMARY:${session.title}
DESCRIPTION:Narasumber: ${session.speaker} (${session.speakerTitle})\\nPlatform: ${session.platform}
LOCATION:${session.platform}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `Kajian-SiberMu-${session.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onShowToast?.(
      "File Kalender Diunduh",
      `File iCalendar (${session.id}.ics) berhasil disimpan ke perangkat Anda.`,
      "success"
    );
  };

  const currentPillarData = aikPillarsData.find((p) => p.id === activePillar) || aikPillarsData[0];

  return (
    <section id="aik" className="py-20 relative bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-teal text-xs font-semibold mb-3">
              <BookOpen className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Pilar Spiritual & Intelektual Persyarikatan</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Al-Islam & Kemuhammadiyahan (AIK)
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Memadukan penguasaan ilmu pengetahuan dan teknologi siber dengan keluhuran tauhid, netiket beradab, serta etos Islam Berkemajuan.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20">
              <span className="w-4 h-4 rounded-full bg-white p-0.5 flex items-center justify-center shrink-0 shadow-2xs">
                <img
                  src="/images/sibermu-emblem.png"
                  alt="SiberMu"
                  width="16"
                  height="16"
                  className="w-full h-full object-contain"
                />
              </span>
              Manhaj Tarjih & Tajdid
            </span>
          </div>
        </div>

        {/* 4 Pillars Interactive Tabs & Visual Editorial Box */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {aikPillarsData.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border ${
                  activePillar === pillar.id
                    ? "bg-white dark:bg-[#0B132B] border-teal-500 shadow-lg shadow-teal-500/10 scale-[1.02]"
                    : "glass-card border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <span className="text-xs font-mono font-bold text-amber-500 block mb-1">
                  Pilar {pillar.number}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block leading-tight">
                  {pillar.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Pillar Showcase Panel with Real Seminar Photo */}
          <div className="rounded-3xl glass-card border border-teal-500/20 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-500/10 text-teal-700 dark:text-teal-300 text-xs font-semibold">
                  <span>Pilar Ke-{currentPillarData.number}</span>
                  <span>•</span>
                  <span className="font-arabic text-sm">{currentPillarData.arabicPhrase}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-snug">
                  {currentPillarData.meaning}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {currentPillarData.description}
                </p>
              </div>

              <div className="pt-2">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-2.5">
                  Implementasi Karakter Mahasiswa Siber:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentPillarData.bulletPoints.map((pt, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Photo Column: Real Academic Islamic Seminar */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-slate-900">
              <img
                src="/images/aik-seminar.jpg"
                alt="Seminar Akademik Islam Kontemporer dan Kajian Tarjih di Universitas Siber Muhammadiyah"
                width="800"
                height="533"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl glass-card backdrop-blur-md border border-white/20 text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                  Kuliah Umum & Halaqah Tarjih Siber
                </span>
                <p className="text-xs font-semibold text-white mt-0.5 line-clamp-1">
                  "Menjawab Tantangan Etika AI & Fiqih Informasi di Era Digital"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Agenda Kajian & Live Streaming Section */}
        <div id="aik-agenda" className="pt-2">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-semibold mb-2">
                <Radio className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                <span>Kajian & Halaqah Virtual Terjadwal</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Jadwal Kajian Daring & Diskusi Ilmiah
              </h3>
            </div>

            {/* Countdown Badge */}
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-teal-500/30 self-start md:self-auto">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Kajian Terdekat Dimulai:
              </span>
              <div className="flex items-center gap-1 font-mono text-xs font-bold text-teal-600 dark:text-teal-400">
                <span className="p-1 rounded bg-white dark:bg-slate-800 shadow-xs">{timeLeft.days}h</span>:
                <span className="p-1 rounded bg-white dark:bg-slate-800 shadow-xs">{timeLeft.hours}j</span>:
                <span className="p-1 rounded bg-white dark:bg-slate-800 shadow-xs">{timeLeft.minutes}m</span>:
                <span className="p-1 rounded bg-white dark:bg-slate-800 shadow-xs">{timeLeft.seconds}d</span>
              </div>
            </div>
          </div>

          {/* Kajian Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingStudySessions.map((session) => (
              <div
                key={session.id}
                className="rounded-2xl glass-card p-6 flex flex-col justify-between hover:border-teal-500/50 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                      {session.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                      <Users className="w-3.5 h-3.5 text-teal-500" />
                      <span>{session.registeredCount} Pendaftar</span>
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white line-clamp-2">
                    {session.title}
                  </h4>

                  <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                      {session.speaker}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                      {session.speakerTitle}
                    </span>
                  </div>

                  <div className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-teal-500" />
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-3.5 h-3.5 text-blue-500" />
                      <span className="truncate">{session.platform}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <button
                      onClick={() => handleSetReminder(session)}
                      className="flex items-center gap-1.5 font-semibold text-slate-600 dark:text-slate-400 hover:text-teal-500"
                    >
                      <Bell className="w-3.5 h-3.5" />
                      <span>{reminderSetId === session.id ? "Tersimpan! ✓" : "Ingatkan"}</span>
                    </button>

                    <a
                      href={session.linkMeeting}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg font-bold bg-teal-600 hover:bg-teal-500 text-white shadow-sm"
                    >
                      <span>Masuk Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* 1-Click Calendar Add Action */}
                  <div className="flex items-center gap-2 pt-1 text-[11px]">
                    <button
                      onClick={() => handleAddToGoogleCalendar(session)}
                      className="flex-1 py-1 px-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-teal-500/10 hover:text-teal-600 flex items-center justify-center gap-1 font-medium transition-colors"
                    >
                      <CalendarPlus className="w-3 h-3" />
                      <span>Google Calendar</span>
                    </button>
                    <button
                      onClick={() => handleDownloadIcs(session)}
                      className="py-1 px-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 flex items-center gap-1 font-medium"
                      title="Unduh file .ics kalender"
                    >
                      <Download className="w-3 h-3" />
                      <span>.ics</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
