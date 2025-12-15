'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import {
  Shield,
  Lock,
  Eye,
  Server,
  AlertTriangle,
  CheckCircle,
  Code,
  FileCheck,
} from 'lucide-react';

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

export default function SecurityPage() {
  const sections = [
    {
      icon: Lock,
      title: 'Enkripsi & Keamanan Data',
      content: [
        {
          subtitle: 'Enkripsi At-Rest',
          text: 'Semua data sensitif di database dienkripsi menggunakan AES-256 encryption. Password di-hash menggunakan bcrypt dengan salt rounds yang tinggi.',
        },
        {
          subtitle: 'Enkripsi In-Transit',
          text: 'Semua komunikasi antara client dan server dilindungi dengan TLS 1.3, memastikan data Anda tidak dapat disadap selama transmisi.',
        },
        {
          subtitle: 'Key Management',
          text: 'Encryption keys disimpan secara aman menggunakan environment variables dan tidak pernah di-commit ke source code. Private keys untuk blockchain disimpan di secure vault.',
        },
        {
          subtitle: 'Data Isolation',
          text: 'Data setiap brand terisolasi dan hanya dapat diakses oleh user yang berwenang. Kami menerapkan row-level security di database.',
        },
      ],
    },
    {
      icon: Shield,
      title: 'Blockchain Security',
      content: [
        {
          subtitle: 'Smart Contract Auditing',
          text: 'Smart contracts ETagRegistry dan ETagCollectible telah melalui code review dan testing ekstensif untuk memastikan tidak ada vulnerabilities.',
        },
        {
          subtitle: 'Immutable Records',
          text: 'Data yang dicatat di blockchain (tag verification, NFT ownership) bersifat immutable dan tidak dapat diubah atau dihapus, memberikan audit trail yang permanen.',
        },
        {
          subtitle: 'Base Sepolia Network',
          text: 'Kami menggunakan Base Sepolia, layer 2 Ethereum dari Coinbase, yang menawarkan keamanan Ethereum dengan biaya gas yang lebih rendah dan throughput yang lebih tinggi.',
        },
        {
          subtitle: 'Multi-sig Protection',
          text: 'Untuk operasi blockchain kritis (contract upgrades, fund transfers), kami menggunakan multi-signature wallets yang memerlukan approval dari multiple parties.',
        },
      ],
    },
    {
      icon: Eye,
      title: 'Access Control & Authentication',
      content: [
        {
          subtitle: 'Multi-Factor Authentication',
          text: 'Kami mendukung 2FA untuk akun admin dan brand, memberikan layer keamanan tambahan di luar username dan password.',
        },
        {
          subtitle: 'Role-Based Access Control',
          text: 'Sistem permission granular memastikan setiap user hanya dapat mengakses data dan fitur sesuai dengan role mereka (admin atau brand).',
        },
        {
          subtitle: 'Session Management',
          text: 'Session tokens memiliki expiration time dan securely stored. Inactive sessions otomatis logout setelah periode tertentu.',
        },
        {
          subtitle: 'CSRF Protection',
          text: 'Semua form dan API endpoints dilindungi dengan CSRF tokens untuk mencegah cross-site request forgery attacks.',
        },
      ],
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      content: [
        {
          subtitle: 'Cloud Security',
          text: 'Platform di-host di cloud provider dengan SOC 2 Type II compliance. Infrastructure dilindungi dengan firewall, DDoS protection, dan intrusion detection.',
        },
        {
          subtitle: 'Regular Backups',
          text: 'Database di-backup secara otomatis setiap hari dengan retention period 30 hari. Backups dienkripsi dan disimpan di multiple geographic locations.',
        },
        {
          subtitle: 'Monitoring & Logging',
          text: 'Kami menggunakan comprehensive monitoring untuk mendeteksi anomali dan potential security threats. Logs disimpan securely untuk audit purposes.',
        },
        {
          subtitle: 'Rate Limiting',
          text: 'API endpoints dilindungi dengan rate limiting untuk mencegah abuse dan DDoS attacks. Kami menggunakan IP-based dan token-based rate limiting.',
        },
      ],
    },
    {
      icon: Code,
      title: 'Application Security',
      content: [
        {
          subtitle: 'Input Validation',
          text: 'Semua user input divalidasi dan disanitize untuk mencegah injection attacks (SQL injection, XSS, command injection).',
        },
        {
          subtitle: 'Dependency Management',
          text: 'Kami secara rutin update dependencies dan scan untuk known vulnerabilities menggunakan automated tools (Dependabot, Snyk).',
        },
        {
          subtitle: 'Secure Development',
          text: 'Development team mengikuti OWASP Top 10 best practices. Code reviews mandatory untuk semua changes sebelum di-merge ke production.',
        },
        {
          subtitle: 'API Security',
          text: 'API dilindungi dengan authentication, authorization, rate limiting, dan input validation. Kami menggunakan API keys dan JWT tokens.',
        },
      ],
    },
    {
      icon: FileCheck,
      title: 'Compliance & Auditing',
      content: [
        {
          subtitle: 'Security Audits',
          text: 'Kami melakukan internal security audits secara berkala dan external penetration testing tahunan untuk mengidentifikasi dan memperbaiki vulnerabilities.',
        },
        {
          subtitle: 'Vulnerability Disclosure',
          text: 'Kami memiliki responsible disclosure policy. Security researchers dapat melaporkan vulnerabilities ke security@etags.id.',
        },
        {
          subtitle: 'Incident Response',
          text: 'Kami memiliki incident response plan untuk menangani security breaches dengan cepat. Affected users akan diberitahu dalam waktu 72 jam jika terjadi data breach.',
        },
        {
          subtitle: 'Data Retention',
          text: 'Kami hanya menyimpan data selama diperlukan untuk menyediakan layanan. User dapat request data deletion sesuai dengan privacy policy.',
        },
      ],
    },
    {
      icon: AlertTriangle,
      title: 'AI & Fraud Detection Security',
      content: [
        {
          subtitle: 'AI Model Security',
          text: 'AI models untuk fraud detection di-train dengan data yang di-anonymize. Models disimpan securely dan hanya accessible oleh authorized systems.',
        },
        {
          subtitle: 'Kolosal AI Integration',
          text: 'Komunikasi dengan Kolosal AI API menggunakan encrypted channels. Data yang dikirim ke AI sudah di-anonymize untuk melindungi privacy.',
        },
        {
          subtitle: 'Fingerprinting Privacy',
          text: 'Browser fingerprinting untuk fraud detection menggunakan FingerprintJS Pro yang compliant dengan GDPR dan privacy regulations.',
        },
        {
          subtitle: 'False Positive Handling',
          text: 'Fraud detection system di-tune untuk minimize false positives. Users dapat dispute fraud flags melalui support system.',
        },
      ],
    },
  ];

  const certifications = [
    { name: 'TLS 1.3', description: 'Secure communication' },
    { name: 'AES-256', description: 'Data encryption' },
    { name: 'OWASP Top 10', description: 'Security best practices' },
    { name: 'Base Sepolia', description: 'Blockchain security' },
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
              Keamanan <span className="text-[#2B4C7E]">Platform</span>
            </MotionH1>
            <MotionP
              className="text-lg text-[#606060] leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Keamanan adalah prioritas utama kami. Etags dibangun dengan
              multiple layers of security untuk melindungi data Anda dan
              memastikan integritas platform.
            </MotionP>
          </div>

          {/* Security Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Shield, value: '99.9%', label: 'Uptime SLA' },
              { icon: Lock, value: 'AES-256', label: 'Encryption' },
              { icon: CheckCircle, value: '24/7', label: 'Monitoring' },
              { icon: FileCheck, value: 'Annual', label: 'Audits' },
            ].map((stat, index) => (
              <MotionDiv
                key={stat.label}
                className="bg-white border border-[#A8A8A8]/30 rounded-xl p-6 text-center hover:border-[#2B4C7E]/50 transition-all hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <stat.icon className="w-10 h-10 text-[#2B4C7E] mx-auto mb-3" />
                <div className="text-2xl font-bold text-[#0C2340] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[#606060] font-medium">
                  {stat.label}
                </div>
              </MotionDiv>
            ))}
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
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
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

          {/* Certifications */}
          <MotionDiv
            className="bg-linear-to-br from-[#2B4C7E]/5 to-white border-2 border-[#2B4C7E]/20 rounded-2xl p-8 lg:p-12 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-[#0C2340] text-center mb-8">
              Standards & Compliance
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="bg-white rounded-xl p-6 shadow-md border border-[#A8A8A8]/20 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#2B4C7E]/10 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-[#2B4C7E]" />
                  </div>
                  <h3 className="font-bold text-[#0C2340] mb-1">{cert.name}</h3>
                  <p className="text-sm text-[#606060]">{cert.description}</p>
                </div>
              ))}
            </div>
          </MotionDiv>

          {/* Responsible Disclosure */}
          <MotionDiv
            className="bg-white border-2 border-[#A8A8A8]/30 rounded-xl p-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-[#2B4C7E]" />
              <div>
                <h2 className="text-2xl font-bold text-[#0C2340] mb-3">
                  Responsible Disclosure Policy
                </h2>
                <p className="text-[#606060] leading-relaxed mb-4">
                  Kami menghargai security researchers yang membantu kami
                  menjaga platform tetap aman. Jika Anda menemukan
                  vulnerability, mohon laporkan secara responsible:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#606060] mb-6">
                  <li>
                    Email details ke security@etags.id dengan subject
                    &ldquo;Security Vulnerability&ldquo;
                  </li>
                  <li>
                    Berikan waktu 90 hari untuk kami memperbaiki sebelum public
                    disclosure
                  </li>
                  <li>
                    Jangan exploit vulnerability atau akses data user tanpa
                    permission
                  </li>
                  <li>Jangan melakukan DoS/DDoS atau destructive testing</li>
                </ul>
                <p className="text-[#606060] leading-relaxed">
                  Kami akan merespons dalam 48 jam dan bekerja sama dengan Anda
                  untuk memahami dan memperbaiki masalah. Security researchers
                  yang menemukan critical vulnerabilities akan mendapatkan
                  acknowledgment di hall of fame kami.
                </p>
              </div>
            </div>
          </MotionDiv>

          {/* Contact */}
          <MotionDiv
            className="bg-linear-to-r from-[#2B4C7E] to-[#1E3A5F] rounded-2xl p-12 text-center text-white shadow-2xl mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Pertanyaan Keamanan?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Jika Anda memiliki pertanyaan tentang keamanan platform atau ingin
              melaporkan security concern, tim security kami siap membantu.
            </p>
            <a
              href="mailto:security@etags.id"
              className="inline-block px-8 py-3 bg-white text-[#2B4C7E] font-semibold rounded-full hover:bg-[#A8A8A8]/10 hover:text-white transition-all border-2 border-white"
            >
              Contact Security Team
            </a>
          </MotionDiv>
        </div>
      </main>

      <Footer />
    </div>
  );
}
