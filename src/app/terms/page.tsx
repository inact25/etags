'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import {
  FileText,
  UserCheck,
  AlertCircle,
  Scale,
  Ban,
  Shield,
} from 'lucide-react';

const MotionDiv = motion.div;
const MotionH1 = motion.h1;

export default function TermsPage() {
  const sections = [
    {
      icon: FileText,
      title: '1. Penerimaan Syarat',
      content: [
        {
          subtitle: '1.1 Persetujuan',
          text: 'Dengan mengakses atau menggunakan platform Etags, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju, Anda tidak boleh menggunakan layanan kami.',
        },
        {
          subtitle: '1.2 Kapasitas Hukum',
          text: 'Anda menyatakan bahwa Anda berusia minimal 18 tahun dan memiliki kapasitas hukum untuk masuk dalam perjanjian yang mengikat. Jika Anda bertindak atas nama entitas, Anda menyatakan bahwa Anda memiliki wewenang untuk mengikat entitas tersebut.',
        },
        {
          subtitle: '1.3 Perubahan Syarat',
          text: 'Kami berhak mengubah Syarat dan Ketentuan ini kapan saja. Perubahan akan efektif setelah dipublikasikan di website. Penggunaan berkelanjutan berarti Anda menerima perubahan tersebut.',
        },
      ],
    },
    {
      icon: UserCheck,
      title: '2. Akun dan Registrasi',
      content: [
        {
          subtitle: '2.1 Pembuatan Akun',
          text: 'Untuk menggunakan layanan tertentu, Anda harus membuat akun dengan memberikan informasi yang akurat dan lengkap. Anda bertanggung jawab untuk menjaga kerahasiaan kredensial akun Anda.',
        },
        {
          subtitle: '2.2 Jenis Akun',
          text: 'Etags menyediakan dua jenis akun: Admin (akses penuh ke semua fitur) dan Brand (akses terbatas ke brand mereka sendiri). Setiap brand user terkait dengan satu brand.',
        },
        {
          subtitle: '2.3 Keamanan Akun',
          text: 'Anda bertanggung jawab atas semua aktivitas yang terjadi di bawah akun Anda. Segera beritahu kami jika Anda mencurigai penggunaan tidak sah dari akun Anda.',
        },
        {
          subtitle: '2.4 Penangguhan Akun',
          text: 'Kami berhak menangguhkan atau menghentikan akun Anda jika Anda melanggar Syarat dan Ketentuan ini atau terlibat dalam aktivitas yang merugikan platform atau pengguna lain.',
        },
      ],
    },
    {
      icon: Shield,
      title: '3. Penggunaan Layanan',
      content: [
        {
          subtitle: '3.1 Lisensi Terbatas',
          text: 'Kami memberikan Anda lisensi terbatas, non-eksklusif, tidak dapat dipindahtangankan untuk mengakses dan menggunakan platform Etags sesuai dengan Syarat dan Ketentuan ini.',
        },
        {
          subtitle: '3.2 Konten Pengguna',
          text: 'Anda tetap memiliki hak atas konten yang Anda upload (gambar produk, metadata, dll). Dengan meng-upload konten, Anda memberikan kami lisensi untuk menggunakan, menyimpan, dan menampilkan konten tersebut dalam konteks penyediaan layanan.',
        },
        {
          subtitle: '3.3 Data Blockchain',
          text: 'Data yang dicatat di blockchain (tag verification, NFT) bersifat public dan immutable. Anda memahami dan menyetujui sifat permanen dari data blockchain.',
        },
        {
          subtitle: '3.4 API Access',
          text: 'Jika Anda menggunakan API kami, Anda harus mematuhi rate limits dan best practices yang kami tentukan dalam dokumentasi API.',
        },
      ],
    },
    {
      icon: Ban,
      title: '4. Larangan Penggunaan',
      content: [
        {
          subtitle: '4.1 Aktivitas Ilegal',
          text: 'Anda tidak boleh menggunakan Etags untuk tujuan ilegal atau melanggar hukum yang berlaku, termasuk namun tidak terbatas pada pemalsuan, penipuan, atau money laundering.',
        },
        {
          subtitle: '4.2 Gangguan Layanan',
          text: 'Anda tidak boleh mencoba mengganggu, merusak, atau mengakses sistem kami secara tidak sah. Ini termasuk DDoS attacks, SQL injection, atau aktivitas hacking lainnya.',
        },
        {
          subtitle: '4.3 Penyalahgunaan Data',
          text: 'Anda tidak boleh scraping, crawling, atau mengumpulkan data dari platform kami tanpa izin tertulis. Anda tidak boleh menjual atau mendistribusikan data yang Anda peroleh dari Etags.',
        },
        {
          subtitle: '4.4 Spamming',
          text: 'Anda tidak boleh mengirim spam, phishing, atau komunikasi tidak diminta lainnya kepada pengguna platform kami.',
        },
      ],
    },
    {
      icon: AlertCircle,
      title: '5. Layanan Pihak Ketiga',
      content: [
        {
          subtitle: '5.1 Integrasi',
          text: 'Etags terintegrasi dengan layanan pihak ketiga seperti Cloudflare R2, Kolosal AI, Gemini AI, dan Base Sepolia blockchain. Penggunaan layanan ini tunduk pada syarat dan ketentuan mereka masing-masing.',
        },
        {
          subtitle: '5.2 Wallet Connections',
          text: 'Untuk fitur Web3 (NFT minting, support tickets), Anda perlu menghubungkan wallet seperti MetaMask. Kami tidak bertanggung jawab atas keamanan wallet Anda atau transaksi blockchain.',
        },
        {
          subtitle: '5.3 Gas Fees',
          text: 'Untuk NFT collectible, admin wallet membayar gas fee sehingga gratis bagi pengguna. Namun, untuk transaksi blockchain lainnya yang Anda inisiasi sendiri, Anda bertanggung jawab atas gas fee.',
        },
      ],
    },
    {
      icon: Scale,
      title: '6. Harga dan Pembayaran',
      content: [
        {
          subtitle: '6.1 Paket Gratis',
          text: 'Paket Starter gratis dengan limit 1.000 tag per bulan. Kami berhak mengubah atau menghentikan paket gratis kapan saja dengan pemberitahuan 30 hari.',
        },
        {
          subtitle: '6.2 Paket Berbayar',
          text: 'Untuk paket Professional dan Enterprise, harga ditentukan berdasarkan kebutuhan dan volume. Pembayaran dapat dilakukan melalui transfer bank atau payment gateway yang kami support.',
        },
        {
          subtitle: '6.3 Refund',
          text: 'Pembayaran bersifat non-refundable kecuali diwajibkan oleh hukum. Jika Anda membatalkan subscription, akses akan berlanjut hingga akhir periode billing.',
        },
        {
          subtitle: '6.4 Perubahan Harga',
          text: 'Kami berhak mengubah harga dengan pemberitahuan 30 hari. Perubahan harga akan berlaku pada periode billing berikutnya.',
        },
      ],
    },
    {
      icon: Shield,
      title: '7. Batasan Tanggung Jawab',
      content: [
        {
          subtitle: '7.1 Layanan "As Is"',
          text: 'Platform Etags disediakan "sebagaimana adanya" tanpa jaminan apapun, baik tersurat maupun tersirat. Kami tidak menjamin layanan akan bebas dari kesalahan atau tidak terputus.',
        },
        {
          subtitle: '7.2 Batasan Ganti Rugi',
          text: 'Dalam batas maksimum yang diizinkan hukum, tanggung jawab kami terbatas pada jumlah yang Anda bayarkan kepada kami dalam 12 bulan terakhir.',
        },
        {
          subtitle: '7.3 Force Majeure',
          text: 'Kami tidak bertanggung jawab atas kegagalan atau keterlambatan kinerja yang disebabkan oleh keadaan di luar kendali wajar kami, termasuk namun tidak terbatas pada bencana alam, perang, atau kegagalan infrastruktur.',
        },
        {
          subtitle: '7.4 Blockchain',
          text: 'Kami tidak bertanggung jawab atas masalah atau kegagalan yang timbul dari blockchain network (Base Sepolia), termasuk network congestion, hard forks, atau protocol changes.',
        },
      ],
    },
    {
      icon: FileText,
      title: '8. Hak Kekayaan Intelektual',
      content: [
        {
          subtitle: '8.1 Kepemilikan',
          text: 'Semua hak kekayaan intelektual dalam platform Etags (termasuk source code, design, logo, trademark) adalah milik kami atau pemberi lisensi kami.',
        },
        {
          subtitle: '8.2 Feedback',
          text: 'Jika Anda memberikan feedback atau saran tentang platform, Anda memberikan kami hak untuk menggunakan feedback tersebut tanpa kompensasi atau kewajiban kepada Anda.',
        },
        {
          subtitle: '8.3 Smart Contracts',
          text: 'Smart contracts ETagRegistry dan ETagCollectible adalah open source di bawah lisensi MIT. Anda dapat menggunakan dan memodifikasi sesuai dengan lisensi tersebut.',
        },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans selection:bg-[#2B4C7E]/20 selection:text-[#0C2340]">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#2B4C7E]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#A8A8A8]/20 blur-[120px]" />
      </div>

      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <MotionH1
              className="text-4xl sm:text-5xl font-bold text-[#0C2340] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Syarat & <span className="text-[#2B4C7E]">Ketentuan</span>
            </MotionH1>
            <p className="text-lg text-[#606060] leading-relaxed mb-4">
              Terakhir diperbarui:{' '}
              {new Date().toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-[#606060] max-w-3xl mx-auto">
              Syarat dan Ketentuan ini mengatur penggunaan platform Etags. Mohon
              baca dengan seksama sebelum menggunakan layanan kami.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <MotionDiv
                key={section.title}
                className="bg-white border border-[#A8A8A8]/30 rounded-xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#2B4C7E]/10 flex items-center justify-center shrink-0">
                    <section.icon className="w-6 h-6 text-[#2B4C7E]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0C2340] mt-2">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6 ml-16">
                  {section.content.map((item, i) => (
                    <div key={i}>
                      <h3 className="text-lg font-semibold text-[#0C2340] mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-[#606060] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </MotionDiv>
            ))}
          </div>

          {/* Additional Info */}
          <MotionDiv
            className="bg-linear-to-br from-[#2B4C7E]/5 to-white border-2 border-[#2B4C7E]/20 rounded-xl p-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-[#0C2340] mb-4">
              Hukum yang Berlaku
            </h2>
            <p className="text-[#606060] leading-relaxed mb-6">
              Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan
              hukum Republik Indonesia. Setiap sengketa yang timbul akan
              diselesaikan melalui mediasi terlebih dahulu, dan jika gagal,
              melalui pengadilan yang berwenang di Jakarta, Indonesia.
            </p>

            <h2 className="text-2xl font-bold text-[#0C2340] mb-4">
              Pemisahan
            </h2>
            <p className="text-[#606060] leading-relaxed mb-6">
              Jika ada ketentuan dalam Syarat dan Ketentuan ini yang dianggap
              tidak sah atau tidak dapat dilaksanakan, ketentuan tersebut akan
              diubah dan ditafsirkan untuk mencapai tujuannya semaksimal
              mungkin, dan ketentuan lainnya tetap berlaku penuh.
            </p>

            <h2 className="text-2xl font-bold text-[#0C2340] mb-4">
              Hubungi Kami
            </h2>
            <p className="text-[#606060] leading-relaxed">
              Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini,
              silakan hubungi kami di:{' '}
              <a
                href="mailto:legal@etags.id"
                className="text-[#2B4C7E] font-medium hover:underline"
              >
                legal@etags.id
              </a>
            </p>
          </MotionDiv>
        </div>
      </main>

      <Footer />
    </div>
  );
}
