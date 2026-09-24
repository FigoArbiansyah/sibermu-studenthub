export interface AikPillar {
  id: string;
  number: string;
  title: string;
  arabicPhrase: string;
  meaning: string;
  description: string;
  bulletPoints: string[];
  color: string;
}

export interface UpcomingStudySession {
  id: string;
  title: string;
  speaker: string;
  speakerTitle: string;
  date: string;
  time: string;
  isoDate: string; // For countdown calculation
  category: "tarjih" | "etika-siber" | "karakter" | "ijtihad";
  platform: string;
  linkMeeting: string;
  registeredCount: number;
}

export interface SyiarAudioEpisode {
  id: string;
  title: string;
  speaker: string;
  duration: string;
  category: string;
  description: string;
  audioPreviewUrl?: string;
  releaseDate: string;
}

export const aikPillarsData: AikPillar[] = [
  {
    id: "tauhid",
    number: "01",
    title: "Tauhid Murni & Pembebasan",
    arabicPhrase: "التوحيد الخالص",
    meaning: "Pondasi Ketuhanan yang Membebaskan Manusia dari Penghambaan Materi & Belenggu Kezaliman",
    description: "Menjadikan keimanan kepada Allah SWT sebagai poros setiap aktivitas akademik, riset, dan rekayasa teknologi informasi yang berkeadilan.",
    bulletPoints: [
      "Bebas dari takhayul, bid'ah, dan khurafat (TBC) di ruang nyata maupun digital",
      "Integritas moral dan kejujuran ilmiah (anti-plagiasi bertenaga iman)",
      "Teknologi sebagai sarana ibadah dan maslahat kemanusiaan universal"
    ],
    color: "from-blue-600 to-teal-500"
  },
  {
    id: "ibadah",
    number: "02",
    title: "Ibadah Tertib & Ikhlas",
    arabicPhrase: "اتباع السنة النبوية",
    meaning: "Ibadah yang Sahih Berlandaskan Tuntunan Rasulullah SAW Sesuai Putusan Tarjih",
    description: "Membiasakan mahasiswa remote untuk senantiasa menjaga shalat berjamaah, tilawatil Qur'an, dan etos disiplin waktu dalam pembelajaran siber.",
    bulletPoints: [
      "Panduan Ibadah Harian Praktis via Aplikasi SiberMu",
      "Koreksi pemahaman fiqih kontemporer berbasis manhaj Tarjih Muhammadiyah",
      "Menumbuhkan kebiasaan dzikir, do'a, dan muhasabah diri di era serba cepat"
    ],
    color: "from-teal-600 to-emerald-500"
  },
  {
    id: "akhlak",
    number: "03",
    title: "Akhlak Mulia & Netiket Islami",
    arabicPhrase: "مكارم الأخلاق في الفضاء السيبراني",
    meaning: "Kesantunan Bertutur Kata, Menjaga Kehormatan, dan Tabayyun di Ranah Maya",
    description: "Membentuk pribadi mahasiswa siber yang beradab: memerangi hoaks, ujaran kebencian, cyberbullying, dan menjaga jejak digital yang mulia.",
    bulletPoints: [
      "Implementasi Fiqih Informasi & Netiket Islami PP Muhammadiyah",
      "Budaya Tabayyun (verifikasi fakta objektif) sebelum membagikan informasi",
      "Menghormati hak kekayaan intelektual dan privasi data sesama"
    ],
    color: "from-amber-600 to-orange-500"
  },
  {
    id: "muamalah-tajdid",
    number: "04",
    title: "Mu'amalah & Islam Berkemajuan",
    arabicPhrase: "الإسلام التقدمي والتجديد",
    meaning: "Etos Amal Usaha, Inovasi Tanpa Henti, dan Solusi Nyata untuk Umat Manusia",
    description: "Mengamalkan teologi Al-Ma'un di era digital: memanfaatkan ilmu coding, data, dan AI untuk menolong dhuafa-mustadh'afin dan memajukan bangsa.",
    bulletPoints: [
      "Etos tajdid (pembaruan) dan responsif terhadap revolusi industri 5.0",
      "Semangat kedermawanan digital (Digital Philanthropy melalui Lazismu)",
      "Membangun ekosistem siber yang inklusif, toleran, dan mencerahkan semesta"
    ],
    color: "from-indigo-600 to-purple-500"
  }
];

export const upcomingStudySessions: UpcomingStudySession[] = [
  {
    id: "sesi-1",
    title: "Kajian Akbar: Etika AI & Fiqih Siber Menurut Islam Berkemajuan",
    speaker: "Prof. Dr. H. Abdul Mu'ti, M.Ed.",
    speakerTitle: "Pakar Pendidikan & Pimpinan Pusat Muhammadiyah",
    date: "Ahad, 08 November 2026",
    time: "09.00 - 11.30 WIB",
    isoDate: "2026-11-08T09:00:00+07:00",
    category: "etika-siber",
    platform: "Zoom Webinar & YouTube Live SiberMu",
    linkMeeting: "#",
    registeredCount: 412
  },
  {
    id: "sesi-2",
    title: "Halaqah Tarjih: Bedah Fatwa Transaksi Kripto & Halal-Tech Modern",
    speaker: "Dr. H. Hamim Ilyas, M.Ag.",
    speakerTitle: "Dewan Pakar Majelis Tarjih dan Tajdid",
    date: "Rabu, 18 November 2026",
    time: "19.30 - 21.00 WIB",
    isoDate: "2026-11-18T19:30:00+07:00",
    category: "tarjih",
    platform: "Google Meet & LMS Kemahasiswaan",
    linkMeeting: "#",
    registeredCount: 285
  },
  {
    id: "sesi-3",
    title: "Kultum Fajar Mahasiswa: Menghidupkan Spirit Al-Ma'un di Layar Laptop Kita",
    speaker: "Ustadz Hilman Latief, M.A., Ph.D.",
    speakerTitle: "Kajian Filantropi & Kepemimpinan Umat",
    date: "Ahad, 29 November 2026",
    time: "05.30 - 06.45 WIB",
    isoDate: "2026-11-29T05:30:00+07:00",
    category: "karakter",
    platform: "Clubhouse / Twitter Space & Zoom Audio",
    linkMeeting: "#",
    registeredCount: 198
  }
];

export const syiarAudioEpisodes: SyiarAudioEpisode[] = [
  {
    id: "ep-1",
    title: "Episode 14: Menjaga Khusyuk & Integritas Mahasiswa di Era Notifikasi Tanpa Jeda",
    speaker: "Ustadz Dr. Fajar Arifianto, M.Si",
    duration: "18:42",
    category: "Spiritualitas Siber",
    description: "Bagaimana cara merawat ketenangan batin, menghindari 'digital dopamine burnout', dan menjaga hubungan dengan Allah SWT saat seharian berada di depan layar.",
    releaseDate: "15 September 2026"
  },
  {
    id: "ep-2",
    title: "Episode 13: KH. Ahmad Dahlan dan Kacamata Revolusi: Dari Sekolah Desa ke Kampus Siber",
    speaker: "Dr. Mu'arif, M.Hum",
    duration: "24:10",
    category: "Sejarah & Nilai",
    description: "Melacak DNA inovatif pendiri Muhammadiyah yang tidak pernah gentar mengadopsi teknologi dan metode modern demi kemajuan peradaban kaum muslimin.",
    releaseDate: "01 September 2026"
  },
  {
    id: "ep-3",
    title: "Episode 12: Fiqih Netizen Berkemajuan: Menghadapi Post-Truth & Deepfake",
    speaker: "Tim Majelis Tarjih & Media SiberMu",
    duration: "21:05",
    category: "Etika Digital",
    description: "Pedoman praktis dan landasan dalil Al-Qur'an dalam menyikapi banjir informasi palsu, manipulasi AI generatif, serta etika berdebat di forum online.",
    releaseDate: "20 Agustus 2026"
  }
];
