export interface StudentAchievement {
  id: string;
  title: string;
  category: "teknologi" | "keagamaan" | "desain" | "karya_ilmiah" | "olahraga";
  tier: "internasional" | "nasional" | "wilayah";
  rank: string;
  studentName: string;
  studyProgram: string;
  event: string;
  year: number;
  description: string;
  badgeColor: string;
  iconName: string;
}

export const achievementsData: StudentAchievement[] = [
  {
    id: "ach-1",
    title: "Juara 1 National Cyber Defense & Incident Response Challenge",
    category: "teknologi",
    tier: "nasional",
    rank: "Juara 1 (Gold)",
    studentName: "Fajar Rizki Pratama & Tim SiberShield",
    studyProgram: "S1 Informatika SiberMu",
    event: "BSSN National Cyber Security Summit 2025",
    year: 2025,
    description: "Mengalahkan 120+ tim dari universitas ternama seluruh Indonesia dalam skenario simulasi pertahanan infrastruktur kritis negara dan forensik digital.",
    badgeColor: "amber",
    iconName: "Trophy"
  },
  {
    id: "ach-2",
    title: "Gold Medalist UI/UX Design for Inclusive Education",
    category: "desain",
    tier: "internasional",
    rank: "1st Place Winner",
    studentName: "Aisyah Nurul Fadhilah",
    studyProgram: "S1 Sistem Informasi SiberMu",
    event: "ASEAN Youth Digital Innovation Cup 2025 (Singapore)",
    year: 2025,
    description: "Merancang desain aplikasi pembelajaran inklusif dengan fitur ramah disabilitas visual dan audio bertenaga AI lokal.",
    badgeColor: "teal",
    iconName: "Award"
  },
  {
    id: "ach-3",
    title: "Juara 1 Musabaqah Tilawatil Qur'an Mahasiswa Nasional (MTQMN) Cabang Karya Tulis Ilmiah Al-Qur'an",
    category: "keagamaan",
    tier: "nasional",
    rank: "Juara 1 (Emas)",
    studentName: "Muhammad Farhan Al-Ghifari",
    studyProgram: "S1 Hukum / AIK SiberMu",
    event: "MTQ Mahasiswa Nasional Kemendikbudristek",
    year: 2025,
    description: "Karya tulis bertajuk 'Konstruksi Etika Fiqih Siber Berbasis Nilai Islam Berkemajuan dalam Tata Kelola Artificial Intelligence'.",
    badgeColor: "emerald",
    iconName: "BookMarked"
  },
  {
    id: "ach-4",
    title: "Top 3 Finalist Global Remote Hackathon: AI for Sustainable Communities",
    category: "teknologi",
    tier: "internasional",
    rank: "3rd Place Worldwide",
    studentName: "Tim Inovasi SiberMu (3 Mahasiswa)",
    studyProgram: "S1 Informatika & Manajemen",
    event: "Global Tech for Good Virtual Hackathon 2025",
    year: 2025,
    description: "Mengembangkan platform mikro-filantropi terdesentralisasi untuk penyaluran zakat dan modal usaha mikro bagi kaum dhuafa.",
    badgeColor: "blue",
    iconName: "Medal"
  },
  {
    id: "ach-5",
    title: "Juara 2 National English Debating Open Championship",
    category: "karya_ilmiah",
    tier: "nasional",
    rank: "Juara 2 (Silver)",
    studentName: "Rania Putri & Ahmad Zaki",
    studyProgram: "S1 Komunikasi SiberMu",
    event: "National Parliamentary Debate Series 2025",
    year: 2025,
    description: "Menampilkan argumen komprehensif terkait etika kedaulatan data dan kebebasan akademik di era digital platform global.",
    badgeColor: "indigo",
    iconName: "Sparkles"
  },
  {
    id: "ach-6",
    title: "Best Mobile Game Design - Indie Student Developer Showcase",
    category: "desain",
    tier: "wilayah",
    rank: "Best Innovation",
    studentName: "Dimas Aditya & Studio Siber",
    studyProgram: "S1 Informatika SiberMu",
    event: "Java Game Festival 2025",
    year: 2025,
    description: "Game edukasi sejarah perjuangan K.H. Ahmad Dahlan dan pendirian Muhammadiyah dengan mekanik teka-teki logika interaktif.",
    badgeColor: "purple",
    iconName: "Crown"
  }
];
