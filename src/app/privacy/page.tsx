import { Metadata } from 'next';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { LegalHero, LegalSection } from '@/components/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy - Etags',
  description:
    'Learn how Etags collects, uses, and protects your data. We are committed to transparency and data privacy.',
  keywords: ['privacy policy', 'data protection', 'GDPR', 'data privacy'],
  openGraph: {
    title: 'Privacy Policy - Etags',
    description: 'Our commitment to protecting your data and privacy.',
  },
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-white font-sans selection:bg-[#2B4C7E]/20 selection:text-[#0C2340]">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#2B4C7E]/10 blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <LegalHero
            title="Kebijakan Privasi"
            description="Etags berkomitmen untuk melindungi privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda."
            lastUpdated="15 Desember 2025"
          />

          <div className="bg-white border-2 border-[#2B4C7E]/20 rounded-3xl p-8 md:p-12">
            <LegalSection title="1. Informasi yang Kami Kumpulkan" delay={0}>
              <h3 className="font-semibold text-[#0C2340] mb-2">
                1.1 Informasi Akun
              </h3>
              <p className="mb-4">
                Ketika Anda mendaftar sebagai pengguna Etags, kami mengumpulkan
                informasi seperti nama, email, nama perusahaan, dan kata sandi
                terenkripsi. Informasi ini digunakan untuk membuat dan mengelola
                akun Anda.
              </p>

              <h3 className="font-semibold text-[#0C2340] mb-2">
                1.2 Data Produk dan Tag
              </h3>
              <p className="mb-4">
                Kami menyimpan informasi produk yang Anda upload, termasuk nama
                produk, deskripsi, gambar, dan metadata lainnya. Data QR code
                dan transaksi blockchain juga dicatat untuk verifikasi keaslian.
              </p>

              <h3 className="font-semibold text-[#0C2340] mb-2">
                1.3 Data Scan
              </h3>
              <p className="mb-4">
                Ketika konsumen scan QR code produk, kami mengumpulkan data
                seperti waktu scan, lokasi (jika diizinkan), fingerprint browser
                untuk mendeteksi fraud, dan informasi device.
              </p>

              <h3 className="font-semibold text-[#0C2340] mb-2">
                1.4 Data Web3
              </h3>
              <p>
                Untuk fitur NFT collectible dan support ticket, kami
                mengumpulkan wallet address, transaction hash, dan metadata NFT.
                Kami tidak pernah meminta private key atau seed phrase.
              </p>
            </LegalSection>

            <LegalSection
              title="2. Bagaimana Kami Menggunakan Informasi"
              delay={0.1}
            >
              <p className="mb-4">
                Informasi digunakan untuk menyediakan, memelihara, dan
                meningkatkan layanan Etags, termasuk verifikasi produk,
                dashboard analytics, dan NFT minting.
              </p>
              <p className="mb-4">
                Data scan dianalisis menggunakan AI untuk mendeteksi pola
                mencurigakan dan melindungi brand dari pemalsuan. Kami
                menggunakan Kolosal AI dengan enkripsi end-to-end.
              </p>
              <p>
                Kami menggunakan email Anda untuk mengirim notifikasi penting,
                update produk, dan newsletter (dapat unsubscribe kapan saja).
              </p>
            </LegalSection>

            <LegalSection title="3. Perlindungan Data" delay={0.2}>
              <p className="mb-4">
                Semua data sensitif dienkripsi menggunakan AES-256 encryption.
                Kata sandi di-hash dengan bcrypt dan tidak dapat dibaca dalam
                bentuk plain text.
              </p>
              <p className="mb-4">
                Kami menggunakan HTTPS untuk semua komunikasi dan implementasi
                rate limiting untuk mencegah abuse. Database kami di-backup
                secara teratur dan disimpan secara terenkripsi.
              </p>
              <p>
                Akses ke data dibatasi dengan role-based access control (RBAC)
                dan semua aktivitas dicatat untuk audit trail.
              </p>
            </LegalSection>

            <LegalSection title="4. Berbagi Data" delay={0.3}>
              <p className="mb-4">
                Kami tidak menjual data pribadi Anda kepada pihak ketiga. Data
                hanya dibagikan dalam kondisi berikut:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dengan persetujuan eksplisit Anda</li>
                <li>Untuk mematuhi hukum dan regulasi yang berlaku</li>
                <li>
                  Untuk melindungi hak dan keamanan Etags dan pengguna lainnya
                </li>
                <li>
                  Dengan service provider terpercaya (Cloudflare R2, Base
                  Sepolia blockchain) dengan perjanjian kerahasiaan
                </li>
              </ul>
            </LegalSection>

            <LegalSection title="5. Hak Anda" delay={0.4}>
              <p className="mb-4">
                Anda memiliki hak untuk mengakses, memperbarui, atau menghapus
                data pribadi Anda kapan saja melalui dashboard atau dengan
                menghubungi kami.
              </p>
              <p className="mb-4">
                Anda dapat mengekspor semua data Anda dalam format JSON dan
                meminta penghapusan akun beserta semua data terkait.
              </p>
              <p>
                Untuk pertanyaan atau request terkait privasi, hubungi:
                privacy@etags.id
              </p>
            </LegalSection>

            <LegalSection title="6. Cookies" delay={0.5}>
              <p className="mb-4">
                Kami menggunakan cookies untuk menjaga sesi login dan mengingat
                preferensi Anda. Anda dapat menonaktifkan cookies melalui
                browser settings, namun beberapa fitur mungkin tidak berfungsi
                optimal.
              </p>
            </LegalSection>

            <LegalSection title="7. Perubahan Kebijakan" delay={0.6}>
              <p>
                Kami dapat memperbarui kebijakan privasi ini sewaktu-waktu.
                Perubahan signifikan akan diberitahukan via email dan tercantum
                tanggal pembaruan di bagian atas dokumen ini.
              </p>
            </LegalSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
