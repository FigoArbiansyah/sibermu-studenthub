export interface StudentCommunity {
  id: string;
  name: string;
  type: "ormawa" | "ukm";
  category: "tech" | "islamic" | "creative" | "sports" | "leadership";
  tagline: string;
  description: string;
  memberCount: number;
  featuredActivities: string[];
  bannerGradient: string;
  iconName: string;
  contactPlatform: string;
  contactUrl: string;
  badge?: string;
}

export const communityData: StudentCommunity[] = [
  // Ormawa
  {
    id: "bem-sibermu",
    name: "BEM Universitas Siber Muhammadiyah",
    type: "ormawa",
    category: "leadership",
    tagline: "Kabinet Harmoni Berkemajuan: Pilar Aspirasi Mahasiswa Lintas Nusantara",
    description: "Lembaga eksekutif mahasiswa tertinggi di SiberMu yang mengkoordinasikan pergerakan advokasi, pengabdian masyarakat siber, dan kolaborasi inovatif antar mahasiswa di seluruh penjuru Indonesia dan luar negeri.",
    memberCount: 85,
    featuredActivities: [
      "SiberMu National Youth Summit 2026",
      "Kawal Aspirasi Mahasiswa Remote (Polling & Dengar Pendapat Online)",
      "Bina Desa Digital: Pelatihan UMKM Desa via Hybrid Mentoring"
    ],
    bannerGradient: "from-blue-600/20 via-indigo-600/20 to-teal-600/20",
    iconName: "Compass",
    contactPlatform: "Portal Aspirasi",
    contactUrl: "#",
    badge: "Induk Eksekutif"
  },
  {
    id: "dpm-sibermu",
    name: "DPM Universitas Siber Muhammadiyah",
    type: "ormawa",
    category: "leadership",
    tagline: "Dewan Perwakilan Mahasiswa: Pengawasan Transparan & Legislasi Berkeadilan",
    description: "Badan legislatif mahasiswa yang menyusun regulasi organisasi, mengawasi kinerja eksekutif, dan menjamin transparansi penyaluran dana kemahasiswaan.",
    memberCount: 32,
    featuredActivities: [
      "Sidang Pleno Terbuka via YouTube Streaming",
      "E-Voting Pemilu Raya Siber (Sistem Pemira Blockchain)",
      "Uji Publik Rancangan Undang-Undang Ormawa"
    ],
    bannerGradient: "from-slate-700/20 via-blue-800/20 to-cyan-900/20",
    iconName: "Scale",
    contactPlatform: "E-Parlemen",
    contactUrl: "#",
    badge: "Legislatif"
  },
  {
    id: "imm-sibermu",
    name: "PK IMM Digital SiberMu (Ikatan Mahasiswa Muhammadiyah)",
    type: "ormawa",
    category: "islamic",
    tagline: "Anggun dalam Moral, Unggul dalam Intelektual, Tangguh di Era Digital",
    description: "Organisasi otonom pengkaderan mahasiswa Muhammadiyah yang memadukan trilogi IMM (religiusitas, intelektualitas, humanitas) dalam konteks masyarakat informasi dan transformasi siber.",
    memberCount: 210,
    featuredActivities: [
      "Darul Arqam Dasar (DAD) Virtual Bersertifikat",
      "Sekolah Intelektual Madani & Literasi AI Etis",
      "Gerakan Sedekah Digital & Baksos Korban Bencana"
    ],
    bannerGradient: "from-red-600/20 via-rose-600/20 to-amber-600/20",
    iconName: "ShieldCheck",
    contactPlatform: "Kader Corner",
    contactUrl: "#",
    badge: "Ortom Utama"
  },
  {
    id: "hw-sibermu",
    name: "Kafilah Hizbul Wathan Cyber Brigade",
    type: "ormawa",
    category: "leadership",
    tagline: "Fastabiqul Khairat: Kepanduan Tanggap Darurat & Cyber Humanitarian",
    description: "Gerakan kepanduan Muhammadiyah dengan spesialisasi kerelawanan siber, edukasi kesiapsiagaan bencana, dan pembentukan disiplin karakter pandu modern.",
    memberCount: 95,
    featuredActivities: [
      "Pelatihan Open Source Intelligence (OSINT) untuk Relawan Bencana",
      "Jambore Hybrid Nasional Kader HW",
      "Workshop Survival & Ketahanan Mental Mahasiswa"
    ],
    bannerGradient: "from-emerald-600/20 via-teal-700/20 to-green-800/20",
    iconName: "Flag",
    contactPlatform: "Basecamp HW",
    contactUrl: "#",
    badge: "Ortom Kepanduan"
  },

  // UKM
  {
    id: "ukm-cyber-sec",
    name: "SiberMu Cyber Defense & Ethical Hacking",
    type: "ukm",
    category: "tech",
    tagline: "Benteng Ketahanan Siber & Riset Keamanan Informasi",
    description: "Unit kegiatan mahasiswa yang fokus pada vulnerability assessment, network penetration testing, CTF (Capture The Flag) competitions, dan edukasi keamanan siber bagi publik.",
    memberCount: 165,
    featuredActivities: [
      "Mingguan Internal CTF Cyber War Room",
      "Bug Bounty Mentorship bersama Praktisi Industri",
      "Audit Keamanan Website UMKM Muhammadiyah"
    ],
    bannerGradient: "from-cyan-600/20 via-teal-600/20 to-blue-700/20",
    iconName: "Terminal",
    contactPlatform: "Discord War Room",
    contactUrl: "#",
    badge: "Juara Nasional"
  },
  {
    id: "ukm-ai-dev",
    name: "SiberMu AI & Fullstack Developers Club",
    type: "ukm",
    category: "tech",
    tagline: "Membangun Solusi Digital Inklusif dengan Kecerdasan Buatan",
    description: "Komunitas koding yang menginkubasi proyek open-source, machine learning, web/mobile development, dan persiapan hackathon internasional.",
    memberCount: 230,
    featuredActivities: [
      "Weekend Hack-a-thon: Build AI for Social Good",
      "Peer-to-Peer Code Review & Algoritma LeetCode",
      "Pengembangan Aplikasi Al-Islam & Edukasi Terbuka"
    ],
    bannerGradient: "from-emerald-500/20 via-cyan-500/20 to-indigo-600/20",
    iconName: "Code2",
    contactPlatform: "GitHub Organization",
    contactUrl: "#",
    badge: "Paling Aktif"
  },
  {
    id: "ukm-creative-media",
    name: "Siber Creative & Podcast Media Studio",
    type: "ukm",
    category: "creative",
    tagline: "Visual Storytelling, Audio Syiar & Desain Antarmuka Generasi Baru",
    description: "Wadah bagi mahasiswa bertalenta dalam desain grafis, motion animation, produksi podcast audio dakwah, video editing, dan manajemen media sosial kampus.",
    memberCount: 140,
    featuredActivities: [
      "Produksi Serial 'Podcast Syiar Berkemajuan'",
      "UI/UX Design Challenge mingguan di Figma",
      "Masterclass Animasi 3D & Virtual Reality"
    ],
    bannerGradient: "from-amber-500/20 via-orange-500/20 to-pink-600/20",
    iconName: "Video",
    contactPlatform: "Spotify & YouTube Studio",
    contactUrl: "#"
  },
  {
    id: "ukm-mtq-syiar",
    name: "UKM Tilawatil Qur'an & Da'wah Siber",
    type: "ukm",
    category: "islamic",
    tagline: "Menyinari Jagat Siber dengan Kalam Ilahi yang Merdu & Bermakna",
    description: "Pusat pengembangan seni baca Al-Qur'an (tartil, tilawah, tahfidz) dan da'i digital yang siap menyampaikan dakwah sejuk di berbagai kanal media online.",
    memberCount: 120,
    featuredActivities: [
      "Halaqah Tahsin & Tahfidz Online Pekanan via Zoom",
      "Klinik Bacaan Qur'an 1-on-1 dengan Ustadz Tersertifikasi",
      "Lomba Syarhil & Musabaqah Hifdzil Quran Tingkat Nasional"
    ],
    bannerGradient: "from-teal-600/20 via-emerald-600/20 to-amber-600/20",
    iconName: "BookOpen",
    contactPlatform: "Kanal Tilawah Telegram",
    contactUrl: "#",
    badge: "Juara MTQ"
  },
  {
    id: "ukm-esports",
    name: "SiberMu Esports & Interactive Game Guild",
    type: "ukm",
    category: "sports",
    tagline: "Sportivitas Digital, Strategi Kolaboratif & Etika Gaming Islami",
    description: "Komunitas e-sports berprestasi dalam turnamen Mobile Legends, Valorant, PUBG, dan game strategi lainnya dengan penanaman nilai etika komunikasi digital yang sehat.",
    memberCount: 195,
    featuredActivities: [
      "SiberMu Esports Championship Piala Rektor",
      "Bootcamp Manajemen Emosi & Sportivitas Virtual",
      "Workshop Streamer & Komentator Gaming Beradab"
    ],
    bannerGradient: "from-purple-600/20 via-indigo-700/20 to-cyan-600/20",
    iconName: "Gamepad2",
    contactPlatform: "Discord Community",
    contactUrl: "#"
  },
  {
    id: "ukm-english-debate",
    name: "Virtual English Debating & Global Discourse",
    type: "ukm",
    category: "leadership",
    tagline: "Diplomasi Intelektual Mahasiswa Muslim di Panggung Dunia",
    description: "Klub debat bahasa Inggris dengan format Asian Parliamentary dan British Parliamentary yang rutin menjuarai kompetisi debat daring nasional dan internasional.",
    memberCount: 88,
    featuredActivities: [
      "Weekly Online Sparring Session",
      "Model United Nations (MUN) Siber Simulation",
      "IELTS & TOEFL Prep Peer Group"
    ],
    bannerGradient: "from-blue-600/20 via-teal-600/20 to-sky-600/20",
    iconName: "Globe2",
    contactPlatform: "Zoom Sparring Hub",
    contactUrl: "#"
  }
];
