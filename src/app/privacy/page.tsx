'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react';

const MotionDiv = motion.div;
const MotionH1 = motion.h1;

export default function PrivacyPage() {
  const sections = [
    {
      icon: FileText,
      title: '1. Informasi yang Kami Kumpulkan',
      content: [
        {
          subtitle: '1.1 Informasi Akun',
          text: 'Ketika Anda mendaftar sebagai pengguna Etags, kami mengumpulkan informasi seperti nama, email, nama perusahaan, dan kata sandi terenkripsi. Informasi ini digunakan untuk membuat dan mengelola akun Anda.',
        },
        {
          subtitle: '1.2 Data Produk dan Tag',
          text: 'Kami menyimpan informasi produk yang Anda upload, termasuk nama produk, deskripsi, gambar, dan metadata lainnya. Data QR code dan transaksi blockchain juga dicatat untuk verifikasi keaslian.',
        },
        {
          subtitle: '1.3 Data Scan',
          text: 'Ketika konsumen scan QR code produk, kami mengumpulkan data seperti waktu scan, lokasi (jika diizinkan), fingerprint browser untuk mendeteksi fraud, dan informasi device.',
        },
        {
          subtitle: '1.4 Data Web3',
          text: 'Untuk fitur NFT collectible dan support ticket, kami mengumpulkan wallet address, transaction hash, dan metadata NFT. Kami tidak pernah meminta private key atau seed phrase.',
        },
      ],
    },
    {
      icon: Database,
      title: '2. Bagaimana Kami Menggunakan Informasi',
      content: [
        {
          subtitle: '2.1 Penyediaan Layanan',
          text: 'Informasi digunakan untuk menyediakan, memelihara, dan meningkatkan layanan Etags, termasuk verifikasi produk, dashboard analytics, dan NFT minting.',
        },
        {
          subtitle: '2.2 AI Fraud Detection',
          text: 'Data scan dianalisis menggunakan AI untuk mendeteksi pola mencurigakan dan melindungi brand dari pemalsuan. Kami menggunakan Kolosal AI dengan enkripsi end-to-end.',
        },
        {
          subtitle: '2.3 Komunikasi',
          text: 'Kami menggunakan email Anda untuk mengirim notifikasi penting, update produk, dan newsletter (dapat unsubscribe kapan saja).',
        },
        {
          subtitle: '2.4 Compliance & Legal',
          text: 'Informasi dapat digunakan untuk memenuhi kewajiban hukum, menyelesaikan sengketa, dan menegakkan kebijakan kami.',
        },
      ],
    },
    {
      icon: Lock,
      title: '3. Keamanan Data',
      content: [
        {
          subtitle: '3.1 Enkripsi',
          text: 'Semua data sensitif dienkripsi at-rest dan in-transit menggunakan industry-standard encryption (AES-256 dan TLS 1.3).',
        },
        {
          subtitle: '3.2 Blockchain',
          text: 'Data yang dicatat di blockchain (tag verification, NFT ownership) bersifat public dan immutable. Kami tidak menyimpan informasi pribadi di blockchain.',
        },
        {
          subtitle: '3.3 Access Control',
          text: 'Kami menerapkan role-based access control untuk memastikan hanya personel yang berwenang yang dapat mengakses data tertentu.',
        },
        {
          subtitle: '3.4 Regular Audits',
          text: 'Kami melakukan security audit dan penetration testing secara berkala untuk memastikan keamanan sistem.',
        },
      ],
    },
    {
      icon: Eye,
      title: '4. Berbagi Data dengan Pihak Ketiga',
      content: [
        {
          subtitle: '4.1 Service Providers',
          text: 'Kami bekerja sama dengan pihak ketiga untuk menyediakan layanan seperti: Cloudflare R2 (storage), MySQL hosting (database), Kolosal AI (fraud detection), Gemini AI (NFT art), Base Sepolia (blockchain).',
        },
        {
          subtitle: '4.2 Brand Partners',
          text: 'Jika Anda adalah brand user, data produk dan analytics Anda hanya dapat diakses oleh akun brand Anda dan admin sistem.',
        },
        {
          subtitle: '4.3 Legal Requirements',
          text: 'Kami dapat mengungkapkan informasi jika diwajibkan oleh hukum atau dalam menanggapi permintaan yang sah dari otoritas publik.',
        },
      ],
    },
    {
      icon: UserCheck,
      title: '5. Hak Anda',
      content: [
        {
          subtitle: '5.1 Akses & Update',
          text: 'Anda dapat mengakses dan memperbarui informasi akun Anda kapan saja melalui dashboard profile settings.',
        },
        {
          subtitle: '5.2 Data Deletion',
          text: 'Anda dapat meminta penghapusan akun dan data Anda dengan menghubungi support@etags.id. Beberapa data mungkin tetap disimpan untuk compliance.',
        },
        {
          subtitle: '5.3 Data Portability',
          text: 'Anda dapat mengekspor data produk dan analytics Anda dalam format CSV melalui dashboard.',
        },
        {
          subtitle: '5.4 Opt-out',
          text: 'Anda dapat opt-out dari marketing emails dengan klik unsubscribe di email yang kami kirim.',
        },
      ],
    },
    {
      icon: Shield,
      title: '6. Cookies & Tracking',
      content: [
        {
          subtitle: '6.1 Essential Cookies',
          text: 'Kami menggunakan cookies untuk authentication session dan mengingat preferensi Anda. Cookies ini penting untuk fungsi website.',
        },
        {
          subtitle: '6.2 Analytics',
          text: 'Kami menggunakan analytics untuk memahami bagaimana pengguna berinteraksi dengan platform dan meningkatkan user experience.',
        },
        {
          subtitle: '6.3 Fingerprinting',
          text: 'Untuk fraud detection, kami menggunakan browser fingerprinting (FingerprintJS) untuk mengidentifikasi device yang scan produk.',
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
              Kebijakan <span className="text-[#2B4C7E]">Privasi</span>
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
              Etags berkomitmen untuk melindungi privasi Anda. Kebijakan ini
              menjelaskan bagaimana kami mengumpulkan, menggunakan, dan
              melindungi informasi pribadi Anda.
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
              Perubahan Kebijakan
            </h2>
            <p className="text-[#606060] leading-relaxed mb-4">
              Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu.
              Perubahan signifikan akan dikomunikasikan melalui email atau
              notifikasi di dashboard. Penggunaan layanan yang berkelanjutan
              setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
            </p>
            <h2 className="text-2xl font-bold text-[#0C2340] mb-4 mt-6">
              Hubungi Kami
            </h2>
            <p className="text-[#606060] leading-relaxed">
              Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau
              ingin menggunakan hak privasi Anda, silakan hubungi kami di:{' '}
              <a
                href="mailto:privacy@etags.id"
                className="text-[#2B4C7E] font-medium hover:underline"
              >
                privacy@etags.id
              </a>
            </p>
          </MotionDiv>
        </div>
      </main>

      <Footer />
    </div>
  );
}
