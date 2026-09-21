export interface StudentService {
  id: string;
  title: string;
  category: "beasiswa" | "konseling" | "administrasi" | "karir";
  shortDesc: string;
  fullDesc: string;
  sla: string;
  badge: string;
  iconName: string;
  actionLabel: string;
  requirements: string[];
  linkUrl: string;
}

export const servicesData: StudentService[] = [
  {
    id: "beasiswa-siber",
    title: "Portal Pengajuan Beasiswa Siber",
    category: "beasiswa",
    shortDesc: "Pendaftaran & kurasi beasiswa KIP-Kuliah Siber, Beasiswa Kader Persyarikatan, dan Talenta Digital.",
    fullDesc: "Program pendanaan studi komprehensif bagi mahasiswa aktif berprestasi dan kader persyarikatan di seluruh Indonesia dengan sistem verifikasi berkas digital terotomasi.",
    sla: "3 - 5 Hari Kerja",
    badge: "Populer",
    iconName: "GraduationCap",
    actionLabel: "Ajukan Beasiswa",
    requirements: [
      "KTM Digital Aktif SiberMu",
      "Transkrip Nilai (IPK Min 3.25)",
      "Surat Rekomendasi Pimpinan Ranting/Cabang Muhammadiyah / Portofolio Digital",
      "Pakta Integritas Mahasiswa Berkemajuan"
    ],
    linkUrl: "#"
  },
  {
    id: "konseling-online",
    title: "Konseling 'Sahabat Siber'",
    category: "konseling",
    shortDesc: "Layanan konsultasi psikologis, adaptasi belajar jarak jauh, dan bimbingan karir bersama psikolog berlisensi.",
    fullDesc: "Sesi konseling individual rahasia dan aman berbasis video call tele-health terenkripsi untuk menjaga kesehatan mental dan produktivitas mahasiswa remote.",
    sla: "Jadwal Fleksibel (1x24 Jam Konfirmasi)",
    badge: "Privasi Terjamin",
    iconName: "HeartPulse",
    actionLabel: "Jadwalkan Konseling",
    requirements: [
      "Mengisi Form Asesmen Mandiri Singkat",
      "Pilih Jadwal Konselor yang Tersedia",
      "Tersedia via Google Meet / Sesi Chat Khusus"
    ],
    linkUrl: "#"
  },
  {
    id: "e-legalisir",
    title: "e-Legalisir & Surat Pengantar Digital",
    category: "administrasi",
    shortDesc: "Penerbitan surat aktif kuliah digital, pengantar magang, e-transkrip dengan QR code tanda tangan digital tersertifikasi.",
    fullDesc: "Sistem otomasi dokumen kemahasiswaan berbasis kriptografi QR-Code resmi Biro Kemahasiswaan SiberMu, valid untuk keperluan beasiswa, magang MSIB, dan dinas.",
    sla: "Instan (< 10 Menit Otomatis)",
    badge: "Otomatis QR",
    iconName: "FileCheck2",
    actionLabel: "Buat Surat Digital",
    requirements: [
      "Login Akun SSO Mahasiswa SiberMu",
      "Bebas Tunggakan Administrasi Akademik",
      "Pilih Jenis Surat yang Dibutuhkan"
    ],
    linkUrl: "#"
  },
  {
    id: "remote-career",
    title: "SiberMu Career & Remote Internship Hub",
    category: "karir",
    shortDesc: "Penyaluran magang remote di mitra industri teknologi, BUMM, startup nasional, dan amal usaha Muhammadiyah.",
    fullDesc: "Fasilitas bimbingan resume ATS-friendly, simulasi wawancara kerja online, dan kurasi lowongan magang jarak jauh berbayar bagi mahasiswa lintas pulau.",
    sla: "Update Mingguan",
    badge: "50+ Mitra Industri",
    iconName: "Briefcase",
    actionLabel: "Eksplor Lowongan Magang",
    requirements: [
      "Minimal Semester 4",
      "Portofolio Digital / Akun GitHub / LinkedIn aktif",
      "Mengikuti Pembekalan Etika Kerja Siber"
    ],
    linkUrl: "#"
  },
  {
    id: "dana-kegiatan",
    title: "Pengajuan Dana Hibah Kegiatan Ormawa & UKM",
    category: "administrasi",
    shortDesc: "Fasilitas pendanaan proposal kegiatan kompetisi, webinar nasional, dan program pengabdian masyarakat virtual.",
    fullDesc: "Pendanaan stimulan hingga Rp 15.000.000 untuk kegiatan mahasiswa yang berorientasi pada inovasi teknologi dan syiar Islam Berkemajuan.",
    sla: "7 Hari Kerja",
    badge: "Hibah Kompetitif",
    iconName: "Coins",
    actionLabel: "Unggah Proposal",
    requirements: [
      "Proposal Sesuai Format Panduan Biro Kemahasiswaan 2026",
      "Disetujui Ketua Ormawa / Dosen Pendamping",
      "Melampirkan Rincian Anggaran Biaya (RAB)"
    ],
    linkUrl: "#"
  },
  {
    id: "helpdesk-wa",
    title: "SiberCare WhatsApp & AI Student Bot",
    category: "konseling",
    shortDesc: "Pusat bantuan respon cepat terintegrasi untuk pertanyaan akademik, kemahasiswaan, dan sertifikasi AIK.",
    fullDesc: "Asisten cerdas 24/7 yang siap menjawab pertanyaan seputar SOP biro kemahasiswaan, disertai opsi eskalasi langsung ke petugas piket Biro Kemahasiswaan.",
    sla: "Respon Instan 24/7",
    badge: "Aktif 24/7",
    iconName: "MessageCircleCode",
    actionLabel: "Chat SiberCare",
    requirements: [
      "Nomor WhatsApp Aktif",
      "Menyiapkan NIM untuk verifikasi identitas"
    ],
    linkUrl: "https://wa.me/6281234567890"
  }
];
