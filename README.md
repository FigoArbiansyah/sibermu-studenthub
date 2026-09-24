# DOKUMENTASI KARYA
## LOMBA PEMBUATAN LANDING PAGE SIBERMU 2026

---

<!-- HALAMAN 1: IDENTITAS & RINGKASAN EKSEKUTIF -->
# HALAMAN 1: IDENTITAS KARYA & RINGKASAN EKSEKUTIF

### 1. Identitas Karya & Peserta
* **Judul Karya:** SiberMu StudentHub: Ekosistem Layanan Kemahasiswaan Digital Terpadu & Penguatan Nilai AIK Berbasis Kampus Siber
* **Kategori Lomba:** Landing Page Terpadu (Kemahasiswaan & Al-Islam Kemuhammadiyahan)
* **Institusi/Penyelenggara:** Biro Kemahasiswaan & AIK Universitas Siber Muhammadiyah
* **Tautan Situs Tayang (Live URL):** [https://sibermu-studenthub.vercel.app/](https://sibermu-studenthub.vercel.app/)
* **Tautan Repositori Publik (GitHub):** [https://github.com/FigoArbiansyah/sibermu-studenthub](https://github.com/FigoArbiansyah/sibermu-studenthub)

---

### 2. Ringkasan Eksekutif (Executive Summary)
Universitas Siber Muhammadiyah (SiberMu) sebagai perguruan tinggi berbasis *full-online learning* memerlukan portal informasi publik yang tidak hanya menyajikan informasi statis, melainkan sebuah ekosistem digital interaktif yang mampu menghubungkan ribuan mahasiswa di seluruh penjuru nusantara tanpa batas geografis.

**SiberMu StudentHub** dirancang sebagai solusi *one-stop digital landing page* yang memadukan dua pilar esensial universitas dalam satu kesatuan harmonis:
1. **Pilar Kemahasiswaan:** Akselerasi birokrasi dan layanan kemahasiswaan digital, wadah kolaborasi organisasi & UKM virtual, serta etalase apresiasi prestasi mahasiswa skala nasional dan global.
2. **Pilar Al-Islam & Kemuhammadiyahan (AIK):** Internalisasi nilai-nilai Islam Berkemajuan, edukasi 4 pilar Al-Ma'un di era siber, agenda kajian virtual interaktif, hingga ruang syiar multimedia digital.

Dibangun dengan standar web modern masa kini (*React 19*, *React Router Fullstack Framework*, *Tailwind CSS v4*, *Web Audio API*), karya ini mengedepankan estetika visual bertaraf profesional (*cyber-editorial glassmorphism*), kecepatan akses tinggi (*high performance*), aksesibilitas inklusif, dan interaktivitas nyata bagi civitas akademika.

---

<div style="page-break-after: always;"></div>

<!-- HALAMAN 2: ARSITEKTUR TEKNOLOGI & KONSEP DESAIN -->
# HALAMAN 2: ARSITEKTUR TEKNOLOGI & KONSEP DESAIN

### 1. Tumpukan Teknologi (Tech Stack)
Aplikasi dibangun dengan arsitektur modern berstandar industri:

| Lapisan (Layer) | Teknologi / Perkakas | Rationale & Keunggulan |
|:---|:---|:---|
| **Core Framework** | React 19 + React Router v7/v8 (Framework Mode) | Arsitektur fullstack berbasis komponen modern, mendukung SSR/Prerendering, routing cepat, dan manajemen state reaktif. |
| **Bahasa Pemrograman** | TypeScript | Menjamin keamanan tipe data (*type safety*), skalabilitas kode, dan meminimalisir *runtime error*. |
| **Styling & Theme** | Tailwind CSS v4 + Vanilla CSS Tokens | Desain responsif berbasis token modern, mendukung *Fluid Typography*, *Glassmorphism*, dan *Adaptive Dark/Light Mode*. |
| **Ikonografi & Aset** | Lucide React + WebP/SVG Assets | Ikon vektor berbasis SVG yang ringan, konsisten, dan tajam di seluruh resolusi layar. |
| **Multimedia & Audio** | Web Audio API Native Synthesizer | Menghasilkan pemutar audio kajian mandiri dengan visualisator spektrum suara tanpa bergantung pada pihak ketiga. |
| **Build & Deployment** | Vite + Vercel Edge Platform | *Build time* instan, *zero-configuration deployment*, kompresi aset otomatis, dan uptime 99.9%. |

---

### 2. Konsep Desain & Pendekatan Pengguna (UX Strategy)
* **Dual-Pathway Visual Hierarchy:** Menggabungkan ranah teknologi siber (warna *Cyan/Emerald*) yang mencerminkan kemahasiswaan modern dengan nuansa emas pencerahan (*Warm Amber/Gold*) yang mencerminkan kemuliaan nilai Al-Islam & Kemuhammadiyahan.
* **Command Palette Keyboard Shortcut (`Ctrl + K` / `Cmd + K`):** Fitur pencarian cepat terinspirasi dari aplikasi produktivitas kelas dunia untuk mencari beasiswa, UKM, jadwal kajian, dan kontak seketika.
* **Adaptive Theme Engine:** Dukungan penuh beralih antara Mode Gelap (*Cyber Night*) dan Mode Terang (*Clean Editorial*) dengan persistensi lokal (*localStorage*).
* **Micro-Interactions & Feedback:** Dilengkapi sistem notifikasi *Toast Engine* mandiri, indikator scroll progres, hover lift efek, dan dialog modal interaktif.

---

<div style="page-break-after: always;"></div>

<!-- HALAMAN 3: MODUL KEMAHASISWAAN -->
# HALAMAN 3: FITUR UNGGULAN BIDANG KEMAHASISWAAN

Bidang Kemahasiswaan dirancang untuk mendigitalkan seluruh interaksi mahasiswa dalam satu portal responsif:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PORTAL KEMAHASISWAAN                            │
├───────────────────┬──────────────────────┬─────────────────────────────┤
│ 1. Layanan Siber  │ 2. Ormawa & Komunitas│ 3. Prestasi Mahasiswa       │
│ • Beasiswa Siber  │ • BEM, DPM, IMM      │ • Hall of Fame Galeri       │
│ • Sahabat Siber   │ • UKM Coding Club    │ • Filter Multi-Kategori     │
│ • E-Surat Ber-QR  │ • UKM Cyber E-Sport  │ • Form Lapor Prestasi       │
│ • Career Center   │ • HW & Debat Club    │ • Perayaan Medali Juara     │
└───────────────────┴──────────────────────┴─────────────────────────────┘
```

### 1. Pusat Layanan Terpadu (Service Center)
* **Layanan Utama:** Informasi Beasiswa SiberMu (Prestasi, KIP-K, Kader Persyarikatan), Layanan Konseling Psikologis daring *"Sahabat Siber"*, Layanan Pembuatan Surat Pengantar Mahasiswa terverifikasi kode QR, serta Pusat Karir & Magang.
* **Simulator Kelayakan Beasiswa Interaktif:** Fitur kalkulator cerdas di mana mahasiswa dapat memasukkan IPK, semester, dan status keaktifan untuk mengetahui rekomendasi jenis beasiswa yang layak diajukan secara instan.
* **Pengecekan Status Tiket Layanan:** Mahasiswa dapat melacak progres pengajuan surat atau permohonan layanan secara transparan menggunakan nomor tiket layanan.

### 2. Wadah Organisasi Mahasiswa & UKM Virtual
* **Showcase Komunitas:** Menampilkan profil BEM, DPM, IMM (Ikatan Mahasiswa Muhammadiyah), Kepanduan Hizbul Wathan, UKM Siber Coding, UKM E-Sport, hingga Tim Debat.
* **Direktori Kontak & Pendaftaran:** Setiap ormawa dilengkapi kontak person, tautan Discord/Grup Komunitas, jumlah anggota aktif, dan tombol pendaftaran anggota baru.

### 3. Galeri Prestasi Mahasiswa (Achievement Wall)
* **Hall of Fame:** Menampilkan deretan pencapaian membanggakan mahasiswa SiberMu di tingkat wilayah, nasional, hingga internasional.
* **Sistem Filter & Form Pelaporan Prestasi:** Mahasiswa dan juri dapat memfilter prestasi berdasarkan kategori (Teknologi, Akademik, Seni-Olahraga, AIK), serta terdapat formulir mandiri untuk melaporkan raihan medali baru.

---

<div style="page-break-after: always;"></div>

<!-- HALAMAN 4: MODUL AL-ISLAM & KEMUHAMMADIYAHAN (AIK) -->
# HALAMAN 4: FITUR UNGGULAN BIDANG AIK

Bidang AIK dirancang modern tanpa meninggalkan marwah pencerahan dan nilai utama Kemuhammadiyahan:

```
┌────────────────────────────────────────────────────────────────────────┐
│               AL-ISLAM & KEMUHAMMADIYAHAN (AIK) HUB                    │
├───────────────────┬──────────────────────┬─────────────────────────────┤
│ 1. 4 Pilar AIK    │ 2. Agenda Kajian     │ 3. Syiar Digital            │
│ • Teologi Al-Ma'un│ • Jadwal Dwi-Pekanan │ • Web Audio Player Podcast  │
│ • Islam Berkemaju.│ • 1-Click iCalendar  │ • Mutiara Hikmah Generator  │
│ • Tajdid di Siber │ • Link Zoom Terpadu  │ • Visualisator Harmoni Suara│
└───────────────────┴──────────────────────┴─────────────────────────────┘
```

### 1. Internalisasi 4 Pilar Nilai Kemuhammadiyahan
* Mengedukasi mahasiswa mengenai fondasi gerakan Muhammadiyah dalam format kartu interaktif:
  1. **Teologi Al-Ma'un:** Praksis kepedulian sosial, filantropi, dan empati bagi sesama.
  2. **Islam Berkemajuan:** Konsep Islam ramah peradaban, mengedepankan akal budi, sains, dan kemaslahatan.
  3. **Matan Keyakinan & Cita-Cita Hidup (MKCH):** Komitmen tauhid murni dan akhlak mulia.
  4. **Tajdid & Etika Siber:** Penerapan fikih informasi dan adab bermedia digital di era kecerdasan buatan.

### 2. Agenda Kajian Virtual & Sinkronisasi Kalender
* **Kalender Kajian Dwi-Pekanan:** Daftar jadwal kajian rutin menghadirkan narasumber ahli dengan topik kontemporer (Etika AI dalam Islam, Kepemimpinan Muda, dll).
* **Fitur 1-Click Add to Calendar (.ics):** Mahasiswa dapat mengunduh dan menyinkronkan jadwal kajian langsung ke Google Calendar, Apple Calendar, atau Outlook hanya dengan satu klik.

### 3. Ruang Syiar Digital & Generator Hikmah
* **Pemutar Podcast Audio Nyata (Web Audio API):** Menggunakan sintesis Web Audio API modern yang menghasilkan harmoni audio kajian nyata tanpa latensi dan tanpa risiko broken link.
* **Generator Mutiara Hikmah K.H. Ahmad Dahlan:** Widget interaktif yang memungkinkan mahasiswa mengambil pesan inspiratif, merenungkan maknanya, serta menyalin/membagikan kutipan hikmah ke media sosial.

---

<div style="page-break-after: always;"></div>

<!-- HALAMAN 5: PERFORMA, AKSESIBILITAS & KESIMPULAN -->
# HALAMAN 5: PERFORMA, AKSESIBILITAS & KESIMPULAN

### 1. Optimalisasi Teknis, SEO, dan Aksesibilitas (a11y)
Landing page ini dirancang dengan memperhatikan standar kualitas web tertinggi:

* **Struktur Semantik & Heading Baku:** Menggunakan hierarki tag HTML5 yang valid (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, satu `<h1>` utama) untuk menjamin keramahan terhadap *screen reader* dan mesin pencari (SEO).
* **Meta Tags & OpenGraph Lengkap:** Terintegrasi konfigurasi OpenGraph, Twitter Card, dan deskripsi dinamis untuk *preview* yang menarik saat tautan dibagikan di WhatsApp, Telegram, dan media sosial.
* **Kinerja Tinggi & Pemuatan Aset:** Pemuatan gambar menggunakan teknik *high fetch priority*, kompresi modern, serta *layout shift prevention* untuk meraih skor *Core Web Vitals* optimal.
* **Aksesibilitas Kontras & Keyboard Friendly:** Seluruh elemen interaktif memiliki `aria-label`, *focus visible rings*, kontras rasio warna yang memenuhi standar WCAG 2.1 Level AA, serta dukungan navigasi penuh dengan keyboard.

---

### 2. Matriks Pemenuhan Kriteria Lomba

| Kriteria Penilaian Lomba | Implementasi pada SiberMu StudentHub | Status |
|:---|:---|:---:|
| **Penyajian 1 Halaman Terpadu** | Mengintegrasikan Kemahasiswaan & AIK secara harmonis dan kohesif dalam satu single landing page. | ✅ **100% Terpenuhi** |
| **Informasi Kemahasiswaan Lengkap** | Mencakup layanan beasiswa, konseling, e-surat, organisasi mahasiswa (BEM/DPM/IMM/HW), UKM, dan *Hall of Fame* prestasi. | ✅ **100% Terpenuhi** |
| **Informasi AIK Mendalam** | Memuat 4 pilar nilai, jadwal kajian sinkronisasi kalender, web podcast player, dan hikmah K.H. Ahmad Dahlan. | ✅ **100% Terpenuhi** |
| **Inovasi & Interaktivitas** | Simulator beasiswa, pengecekan tiket, pemutar podcast audio, pencarian instan `Ctrl+K`, dan mode tema gelap/terang. | ✅ **100% Terpenuhi** |
| **Kredit & Atribusi Aset Media** | Halaman dedicated `/kredit` dan rincian lisensi gambar AI, font OFL, ikon ISC, serta audio synthesizer. | ✅ **100% Terpenuhi** |
| **Kesiapan Akses & Deployment** | Tersedia di live URL Vercel dan repositori GitHub yang dapat diakses publik tanpa hambatan izin. | ✅ **100% Terpenuhi** |

---

### 3. Kredit & Atribusi Aset Media (Asset Attribution & Transparency)
Untuk memenuhi ketentuan orisinalitas dan etika digital, seluruh sumber daya media dicantumkan secara transparan pada halaman dedicated [`/kredit`](https://sibermu-studenthub.vercel.app/kredit):

1. **Gambar & Ilustrasi AI-Generated:** Dibuat menggunakan Generative AI (Google Imagen & Midjourney Architecture) dengan *prompt engineering* kustom bertema *cyber campus* dan pendidikan Islam Berkemajuan. Aset logo resmi berlisensi milik institusi Universitas Siber Muhammadiyah.
2. **Tipografi & Huruf:** Font *Plus Jakarta Sans* (karya Tokotype) dan *Inter* (karya Rasmus Andersson) di bawah lisensi *SIL Open Font License (OFL)* melalui Google Fonts.
3. **Ikonografi:** *Lucide Icons* di bawah lisensi *open-source* ISC License.
4. **Audio & Multimedia:** Sintesis audio digital mandiri berbasis standar *W3C Web Audio API* dan mutiara hikmah dari khazanah pemikiran K.H. Ahmad Dahlan.

---

### 4. Kesimpulan Penutup
**SiberMu StudentHub** bukan sekadar landing page statis, melainkan representasi wajah digital masa depan dari **Biro Kemahasiswaan & AIK Universitas Siber Muhammadiyah**. Melalui perpaduan desain modern kelas dunia, teknologi performa tinggi, kemudahan layanan digital, serta penguatan karakter Islami, karya ini siap menjadi media sentral yang memberdayakan mahasiswa SiberMu menjadi generasi yang **Berdaya, Berprestasi, dan Beradab Mulia**.

---
*Dokumen ini disusun sebagai lampiran resmi Lomba Pembuatan Landing Page SiberMu 2026.*

