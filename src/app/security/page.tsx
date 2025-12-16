import { Metadata } from 'next';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { LegalHero, LegalSection } from '@/components/legal';

export const metadata: Metadata = {
  title: 'Security Practices - Etags',
  description:
    'Learn about our security measures and best practices to protect your data and products.',
  keywords: [
    'security',
    'data protection',
    'cybersecurity',
    'blockchain security',
  ],
  openGraph: {
    title: 'Security Practices - Etags',
    description: 'Our commitment to security and data protection.',
  },
};

export default function SecurityPage() {
  return (
    <div className="relative min-h-screen bg-white font-sans selection:bg-[#2B4C7E]/20 selection:text-[#0C2340]">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#2B4C7E]/10 blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <LegalHero
            title="Praktik Keamanan"
            description="Etags mengimplementasikan praktik keamanan terbaik untuk melindungi data Anda dan memastikan integritas platform."
            lastUpdated="15 Desember 2025"
          />

          <div className="bg-white border-2 border-[#2B4C7E]/20 rounded-3xl p-8 md:p-12">
            <LegalSection title="1. Enkripsi Data" delay={0}>
              <h3 className="font-semibold text-[#0C2340] mb-2">
                1.1 Data in Transit
              </h3>
              <p className="mb-4">
                Semua komunikasi antara browser Anda dan server kami menggunakan
                TLS 1.3 encryption. Ini memastikan bahwa data tidak dapat dibaca
                oleh pihak ketiga selama transmisi.
              </p>

              <h3 className="font-semibold text-[#0C2340] mb-2">
                1.2 Data at Rest
              </h3>
              <p className="mb-4">
                Data sensitif di database dienkripsi menggunakan AES-256
                encryption. Kata sandi di-hash menggunakan bcrypt dengan salt
                unik per pengguna.
              </p>

              <h3 className="font-semibold text-[#0C2340] mb-2">
                1.3 API Keys dan Secrets
              </h3>
              <p>
                API keys dan environment variables disimpan secara terenkripsi
                dan tidak pernah di-hardcode dalam source code. Kami menggunakan
                secure secret management system.
              </p>
            </LegalSection>

            <LegalSection title="2. Autentikasi dan Autorisasi" delay={0.1}>
              <h3 className="font-semibold text-[#0C2340] mb-2">
                2.1 NextAuth v5
              </h3>
              <p className="mb-4">
                Platform menggunakan NextAuth v5 dengan credentials provider.
                Session di-manage dengan secure HTTP-only cookies yang tidak
                dapat diakses via JavaScript.
              </p>

              <h3 className="font-semibold text-[#0C2340] mb-2">
                2.2 Role-Based Access Control (RBAC)
              </h3>
              <p className="mb-4">
                User roles (admin, brand) dengan permission yang jelas. Brand
                users hanya dapat mengakses data brand mereka sendiri dengan
                brand_id isolation.
              </p>

              <h3 className="font-semibold text-[#0C2340] mb-2">
                2.3 Web3 Authentication
              </h3>
              <p>
                Untuk NFT features, user connect wallet via MetaMask. Kami tidak
                pernah meminta atau menyimpan private keys. Semua transaksi
                di-sign oleh user di browser mereka.
              </p>
            </LegalSection>

            <LegalSection title="3. Perlindungan dari Serangan" delay={0.2}>
              <h3 className="font-semibold text-[#0C2340] mb-2">
                3.1 Rate Limiting
              </h3>
              <p className="mb-4">
                API endpoints dilindungi dengan rate limiting (misalnya, contact
                form: 3 requests per 15 menit). Ini mencegah abuse dan DoS
                attacks.
              </p>

              <h3 className="font-semibold text-[#0C2340] mb-2">
                3.2 Input Validation
              </h3>
              <p className="mb-4">
                Semua user input divalidasi di client-side dan server-side. Kami
                sanitize input untuk mencegah XSS, SQL injection, dan command
                injection attacks.
              </p>

              <h3 className="font-semibold text-[#0C2340] mb-2">
                3.3 CSRF Protection
              </h3>
              <p className="mb-4">
                Form submissions dilindungi dengan CSRF tokens untuk mencegah
                cross-site request forgery attacks.
              </p>

              <h3 className="font-semibold text-[#0C2340] mb-2">
                3.4 Content Security Policy (CSP)
              </h3>
              <p>
                Kami implementasi CSP headers untuk mencegah XSS attacks dan
                clickjacking.
              </p>
            </LegalSection>

            <LegalSection title="4. Blockchain Security" delay={0.3}>
              <h3 className="font-semibold text-[#0C2340] mb-2">
                4.1 Smart Contract Audits
              </h3>
              <p className="mb-4">
                Smart contracts (ETagRegistry, ETagCollectible) telah diaudit
                dan tested secara komprehensif. Source code tersedia untuk
                review.
              </p>

              <h3 className="font-semibold text-[#0C2340] mb-2">
                4.2 Admin Wallet Security
              </h3>
              <p className="mb-4">
                Admin wallet untuk NFT minting menggunakan hardware wallet dan
                multi-signature setup untuk transaksi besar.
              </p>

              <h3 className="font-semibold text-[#0C2340] mb-2">
                4.3 Immutable Records
              </h3>
              <p>
                Tag stamping di blockchain bersifat immutable. Setelah tag
                dicreate, data tidak dapat diubah, memastikan integritas
                verifikasi.
              </p>
            </LegalSection>

            <LegalSection title="5. Monitoring dan Audit" delay={0.4}>
              <h3 className="font-semibold text-[#0C2340] mb-2">5.1 Logging</h3>
              <p className="mb-4">
                Semua aktivitas penting dicatat (login, API calls, blockchain
                transactions) tanpa menyimpan informasi sensitif seperti kata
                sandi atau private keys.
              </p>

              <h3 className="font-semibold text-[#0C2340] mb-2">
                5.2 Anomaly Detection
              </h3>
              <p className="mb-4">
                AI fraud detection menganalisis pola scan untuk mendeteksi
                aktivitas mencurigakan. Alert otomatis dikirim untuk aktivitas
                anomaly.
              </p>

              <h3 className="font-semibold text-[#0C2340] mb-2">
                5.3 Regular Security Audits
              </h3>
              <p>
                Kami melakukan security audits berkala dan penetration testing
                untuk mengidentifikasi dan memperbaiki vulnerability.
              </p>
            </LegalSection>

            <LegalSection title="6. Data Backup" delay={0.5}>
              <p className="mb-4">
                Database di-backup setiap hari dan disimpan secara terenkripsi
                di multiple locations. Backup dapat di-restore dalam waktu 1 jam
                untuk disaster recovery.
              </p>
              <p>
                Blockchain data bersifat permanen dan tersedia di Base Sepolia
                network.
              </p>
            </LegalSection>

            <LegalSection title="7. Incident Response" delay={0.6}>
              <p className="mb-4">
                Dalam kasus security incident, kami memiliki prosedur response
                yang jelas:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Identifikasi dan isolasi masalah dalam 1 jam</li>
                <li>Notifikasi ke affected users dalam 24 jam</li>
                <li>Root cause analysis dan remediation</li>
                <li>Post-incident review dan improvement</li>
              </ul>
            </LegalSection>

            <LegalSection title="8. Compliance" delay={0.7}>
              <p className="mb-4">Etags compliant dengan:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>GDPR untuk data protection</li>
                <li>OWASP Top 10 security best practices</li>
                <li>Blockchain security standards</li>
                <li>Indonesia data protection regulations</li>
              </ul>
            </LegalSection>

            <LegalSection
              title="9. Security Best Practices untuk User"
              delay={0.8}
            >
              <p className="mb-4">Kami merekomendasikan user untuk:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Menggunakan kata sandi yang kuat dan unik</li>
                <li>Tidak membagikan credential kepada pihak lain</li>
                <li>Logout setelah selesai menggunakan platform</li>
                <li>
                  Verifikasi email notifications untuk aktivitas mencurigakan
                </li>
                <li>Menjaga keamanan wallet address dan private keys</li>
              </ul>
            </LegalSection>

            <LegalSection title="10. Report Security Issues" delay={0.9}>
              <p>
                Jika Anda menemukan security vulnerability, harap laporkan ke:
                security@etags.id. Kami berkomitmen untuk menangani laporan
                dengan serius dan akan memberikan credit untuk responsible
                disclosure.
              </p>
            </LegalSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
