import { Metadata } from 'next';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { LegalHero, LegalSection } from '@/components/legal';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Etags',
  description:
    'Terms and conditions for using Etags platform. Please read carefully before using our services.',
  keywords: ['terms', 'conditions', 'terms of service', 'user agreement'],
  openGraph: {
    title: 'Terms & Conditions - Etags',
    description: 'Terms and conditions for using Etags platform.',
  },
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-white font-sans selection:bg-[#2B4C7E]/20 selection:text-[#0C2340]">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#2B4C7E]/10 blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <LegalHero
            title="Syarat dan Ketentuan"
            description="Dengan menggunakan layanan Etags, Anda menyetujui syarat dan ketentuan berikut. Harap baca dengan seksama."
            lastUpdated="15 Desember 2025"
          />

          <div className="bg-white border-2 border-[#2B4C7E]/20 rounded-3xl p-8 md:p-12">
            <LegalSection title="1. Penerimaan Syarat" delay={0}>
              <p>
                Dengan mengakses dan menggunakan platform Etags, Anda menyetujui
                untuk terikat dengan syarat dan ketentuan ini. Jika Anda tidak
                setuju, harap tidak menggunakan layanan kami.
              </p>
            </LegalSection>

            <LegalSection title="2. Penggunaan Layanan" delay={0.1}>
              <h3 className="font-semibold text-[#0C2340] mb-2">
                2.1 Akun Pengguna
              </h3>
              <p className="mb-4">
                Anda bertanggung jawab untuk menjaga kerahasiaan akun dan kata
                sandi Anda. Anda setuju untuk tidak membagikan akses akun kepada
                pihak lain dan segera memberitahu kami jika terjadi akses tidak
                sah.
              </p>

              <h3 className="font-semibold text-[#0C2340] mb-2">
                2.2 Penggunaan yang Dilarang
              </h3>
              <p className="mb-4">
                Anda setuju untuk tidak menggunakan platform untuk:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Aktivitas ilegal atau melanggar hukum</li>
                <li>
                  Mengunggah konten yang melanggar hak cipta atau hak kekayaan
                  intelektual
                </li>
                <li>
                  Melakukan spamming, phishing, atau aktivitas berbahaya lainnya
                </li>
                <li>
                  Mencoba mengakses sistem atau data pengguna lain secara tidak
                  sah
                </li>
                <li>Menggunakan bot atau automated tools tanpa izin</li>
              </ul>

              <h3 className="font-semibold text-[#0C2340] mb-2">
                2.3 Konten Pengguna
              </h3>
              <p>
                Anda mempertahankan semua hak atas konten yang Anda upload
                (gambar produk, deskripsi, dll). Dengan mengunggah konten, Anda
                memberikan Etags lisensi non-eksklusif untuk menggunakan konten
                tersebut dalam rangka menyediakan layanan.
              </p>
            </LegalSection>

            <LegalSection title="3. Blockchain dan NFT" delay={0.2}>
              <p className="mb-4">
                Etags menggunakan blockchain Base Sepolia untuk verifikasi
                produk dan NFT minting. Transaksi blockchain bersifat permanen
                dan tidak dapat diubah setelah dikonfirmasi.
              </p>
              <p className="mb-4">
                NFT yang di-mint melalui Etags adalah milik Anda sepenuhnya.
                Anda bertanggung jawab untuk menjaga keamanan wallet Anda.
              </p>
              <p>
                Etags tidak bertanggung jawab atas kehilangan akses ke wallet
                atau NFT akibat kelalaian Anda dalam menjaga private key atau
                seed phrase.
              </p>
            </LegalSection>

            <LegalSection title="4. Pembayaran dan Refund" delay={0.3}>
              <p className="mb-4">
                Paket gratis (Starter) tersedia dengan limit 1.000 tag per
                bulan. Paket berbayar (Professional, Enterprise) dikenakan biaya
                sesuai pricing yang tercantum.
              </p>
              <p className="mb-4">
                Pembayaran diproses secara bulanan atau tahunan tergantung paket
                yang dipilih. Refund dapat diajukan dalam 14 hari pertama untuk
                paket berbayar.
              </p>
              <p>
                Kami berhak mengubah pricing dengan pemberitahuan 30 hari
                sebelumnya. Perubahan tidak berlaku untuk langganan yang sudah
                berjalan.
              </p>
            </LegalSection>

            <LegalSection title="5. Pembatasan Layanan" delay={0.4}>
              <p className="mb-4">
                Kami berusaha menjaga uptime 99.9%, namun tidak menjamin layanan
                akan selalu tersedia tanpa gangguan. Maintenance terjadwal akan
                diberitahukan sebelumnya.
              </p>
              <p>
                Kami berhak membatasi atau menangguhkan akses ke layanan jika
                terjadi pelanggaran syarat dan ketentuan atau aktivitas
                mencurigakan.
              </p>
            </LegalSection>

            <LegalSection title="6. Hak Kekayaan Intelektual" delay={0.5}>
              <p>
                Semua teknologi, software, dan brand assets Etags dilindungi
                oleh hak cipta dan hak kekayaan intelektual. Anda tidak
                diperkenankan untuk menyalin, memodifikasi, atau
                mendistribusikan tanpa izin tertulis dari kami.
              </p>
            </LegalSection>

            <LegalSection title="7. Pembatasan Tanggung Jawab" delay={0.6}>
              <p className="mb-4">
                Etags tidak bertanggung jawab atas kerugian langsung atau tidak
                langsung yang timbul dari penggunaan layanan, termasuk namun
                tidak terbatas pada:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Kehilangan data atau kerusakan sistem</li>
                <li>Kerugian bisnis atau kehilangan profit</li>
                <li>Kerusakan reputasi</li>
                <li>Kegagalan transaksi blockchain di luar kendali kami</li>
              </ul>
              <p>
                Tanggung jawab maksimal kami terbatas pada jumlah yang Anda
                bayarkan dalam 12 bulan terakhir.
              </p>
            </LegalSection>

            <LegalSection title="8. Penghentian Layanan" delay={0.7}>
              <p className="mb-4">
                Anda dapat menghentikan layanan kapan saja melalui dashboard.
                Data Anda akan dihapus dalam 30 hari setelah penghentian.
              </p>
              <p>
                Kami berhak menghentikan layanan Anda tanpa pemberitahuan jika
                terjadi pelanggaran berat terhadap syarat dan ketentuan.
              </p>
            </LegalSection>

            <LegalSection title="9. Hukum yang Berlaku" delay={0.8}>
              <p>
                Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia.
                Setiap sengketa akan diselesaikan melalui pengadilan di Jakarta,
                Indonesia.
              </p>
            </LegalSection>

            <LegalSection title="10. Kontak" delay={0.9}>
              <p>
                Untuk pertanyaan terkait syarat dan ketentuan, hubungi:
                legal@etags.id
              </p>
            </LegalSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
