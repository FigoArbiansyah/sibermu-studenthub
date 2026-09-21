import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Send,
  CheckCircle2,
  MessageCircle,
  Mail,
  ShieldCheck,
  PhoneCall
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: "kemahasiswaan" | "aik";
}

export function FaqContactSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("beasiswa");
  const [message, setMessage] = useState("");

  const faqs: FaqItem[] = [
    {
      category: "kemahasiswaan",
      question: "Bagaimana cara mahasiswa jarak jauh (online) bergabung dengan UKM dan Ormawa di SiberMu?",
      answer:
        "Seluruh proses pendaftaran Ormawa dan UKM dilakukan 100% digital melalui Portal Kemahasiswaan. Setelah mendaftar, Anda akan diundang ke server Discord/Telegram resmi UKM untuk mengikuti orientasi virtual, proyek daring, dan coaching berkala.",
    },
    {
      category: "kemahasiswaan",
      question: "Apakah beasiswa KIP-Kuliah dan Beasiswa Kader terbuka untuk mahasiswa pembelajaran siber?",
      answer:
        "Ya, sangat terbuka! Universitas Siber Muhammadiyah memfasilitasi beasiswa KIP-Kuliah Siber serta Beasiswa Kader Persyarikatan bagi kader dari seluruh pelosok Indonesia. Pendaftaran dibuka setiap semester ganjil melalui portal Biro Kemahasiswaan.",
    },
    {
      category: "kemahasiswaan",
      question: "Bagaimana legalitas surat keterangan aktif kuliah dan e-transkrip digital yang diterbitkan?",
      answer:
        "Dokumen yang diterbitkan dilengkapi dengan Tanda Tangan Elektronik (TTE) dan QR Code verifikasi resmi terenkripsi yang diakui oleh Kemendikbudristek, lembaga beasiswa, dan instansi magang nasional.",
    },
    {
      category: "aik",
      question: "Apakah sertifikat kegiatan Kajian AIK dan Baitul Arqam menjadi syarat kelulusan (SKPI)?",
      answer:
        "Benar. Setiap mahasiswa SiberMu diwajibkan mengikuti serangkaian pembinaan Al-Islam & Kemuhammadiyahan (Baitul Arqam Mahasiswa Virtual & Kajian Pekanan) sebagai salah satu capaian kelulusan dan dicantumkan dalam Surat Keterangan Pendamping Ijazah (SKPI).",
    },
    {
      category: "aik",
      question: "Kapan jadwal rutin kajian keagamaan dan apakah rekaman kajian dapat diakses kembali?",
      answer:
        "Kajian Akbar diadakan setiap dua pekan sekali via Zoom & YouTube Live, serta Kultum Fajar setiap akhir pekan. Rekaman video dan podcast audio selalu diarsipkan di Portal AIK dan Spotify resmi Biro AIK SiberMu.",
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 4000);
  };

  return (
    <section id="faq" className="py-20 relative bg-slate-50 dark:bg-[#070B19]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-teal text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pusat Bantuan & Tanya Jawab</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Temukan jawaban cepat seputar mekanisme kemahasiswaan siber dan kegiatan Al-Islam Kemuhammadiyahan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* FAQ Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl glass-card overflow-hidden border transition-all duration-300 ${
                    isOpen
                      ? "border-teal-500/50 shadow-md shadow-teal-500/5"
                      : "border-slate-200/80 dark:border-slate-800 hover:border-teal-500/40 hover:-translate-y-0.5 hover:shadow-xs"
                  }`}
                >
                  <button
                    id={`faq-question-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:outline-none group"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:text-teal-500 group-hover:bg-teal-500/10 transition-colors shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" aria-hidden="true" /> : <ChevronDown className="w-4 h-4" aria-hidden="true" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 animate-in fade-in"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-5 rounded-3xl glass-card p-6 sm:p-8 border border-teal-500/25 shadow-xl">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-teal-500" aria-hidden="true" />
              <span>Ada Pertanyaan Spesifik?</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-5">
              Kirimkan pertanyaan Anda langsung ke tim piket Biro Kemahasiswaan & AIK SiberMu.
            </p>

            {formSubmitted ? (
              <div className="p-6 text-center rounded-2xl bg-teal-500/10 border border-teal-500/30">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2" aria-hidden="true" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Pesan Berhasil Terkirim!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Staf Biro akan membalas ke email Anda dalam waktu 1x24 jam kerja.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label htmlFor="contact-name" className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Nama Lengkap / NIM:
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Ahmad Dahlan Muda"
                    className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Alamat Email Aktif:
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@student.sibermu.ac.id"
                    className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-category" className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Topik Pertanyaan:
                  </label>
                  <select
                    id="contact-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
                  >
                    <option value="beasiswa">Beasiswa & Pembiayaan Kuliah</option>
                    <option value="ormawa">Pendaftaran UKM & Ormawa</option>
                    <option value="aik">Sertifikasi & Nilai AIK</option>
                    <option value="konseling">Konseling Sahabat Siber</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Pesan / Pertanyaan:
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan pertanyaan Anda secara jelas..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl font-bold text-white bg-teal-600 hover:bg-teal-500 shadow-md shadow-teal-600/20 flex items-center justify-center gap-1.5 transition-all focus-visible:ring-2 focus-visible:ring-teal-500 interactive-lift hover:shadow-lg hover:shadow-teal-500/25"
                >
                  <Send className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Kirim Pesan ke Biro</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
