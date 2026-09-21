export interface HikmahQuote {
  id: string;
  author: string;
  source: string;
  text: string;
  reflection: string;
  tag: "Pendidikan" | "Etos Kerja" | "Inovasi" | "Ketauhidan" | "Kemanusiaan";
}

export const quotesData: HikmahQuote[] = [
  {
    id: "q-1",
    author: "K.H. Ahmad Dahlan",
    source: "Pesan Pendiri Muhammadiyah (1912)",
    text: "Jadilah guru, jadilah insinyur, jadilah sarjana apa saja, tetapi kembalilah kepada Muhammadiyah dan majukan umat serta bangsamu.",
    reflection: "Apapun bidang keahlian digital yang ditekuni—koding, kecerdasan buatan, maupun tata kelola informasi—muaranya adalah kebermanfaatan bagi sesama.",
    tag: "Pendidikan"
  },
  {
    id: "q-2",
    author: "K.H. Ahmad Dahlan",
    source: "Falsafah Ajaran K.H. Ahmad Dahlan",
    text: "Mengingat keadaan zaman yang selalu berubah, maka cara menyiarkan Islam pun harus disesuaikan dengan keperluan zaman itu.",
    reflection: "Universitas Siber adalah manifestasi nyata dari pesan ini: menyebarkan ilmu dan nilai Islam melalui infrastruktur komputasi modern.",
    tag: "Inovasi"
  },
  {
    id: "q-3",
    author: "Al-Qur'anul Karim",
    source: "Surah Al-Mujadilah [58]: 11",
    text: "يَرْفَعِ اللّٰهُ الَّذِيْنَ اٰمَنُوْا مِنْكُمْۙ وَالَّذِيْنَ اُوْتُوا الْعِلْمَ دَرَجٰتٍۗ",
    reflection: "Allah akan meninggikan orang-orang yang beriman di antaramu dan orang-orang yang diberi ilmu pengetahuan beberapa derajat.",
    tag: "Ketauhidan"
  },
  {
    id: "q-4",
    author: "K.H. Ahmad Dahlan",
    source: "Nasihat Kehidupan",
    text: "Kasihanilah orang yang bodoh dengan memberinya pelajaran, dan kasihanilah orang yang miskin dengan memberinya pertolongan nyata.",
    reflection: "Teologi Al-Ma'un yang menjadi nafas persyarikatan: pengetahuan dan teknologi harus berpihak kepada yang membutuhkan (mustadh'afin).",
    tag: "Kemanusiaan"
  },
  {
    id: "q-5",
    author: "Hadits Riwayat Thabrani",
    source: "Al-Mu'jam Al-Awsath",
    text: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ",
    reflection: "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya. Landasan etika berkarya di jagat digital.",
    tag: "Etos Kerja"
  }
];
