'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import {
  Shield,
  QrCode,
  Smartphone,
  BarChart3,
  Lock,
  Zap,
  Brain,
  Wallet,
  MapPin,
  CheckCircle2,
  Globe,
  Sparkles,
} from 'lucide-react';

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

export default function FeaturesPage() {
  const features = [
    {
      icon: Shield,
      title: 'Blockchain Stamping',
      description:
        'Setiap tag produk dicatat secara permanen di blockchain Base Sepolia untuk memastikan keaslian yang tidak dapat dipalsukan.',
      color: 'text-[#2B4C7E]',
      bg: 'bg-[#2B4C7E]/10',
    },
    {
      icon: QrCode,
      title: 'QR Code Generation',
      description:
        'Generate QR code unik untuk setiap produk dengan desain custom yang dapat disesuaikan dengan brand Anda.',
      color: 'text-[#1E3A5F]',
      bg: 'bg-[#1E3A5F]/10',
    },
    {
      icon: Smartphone,
      title: 'Web-Based Scanner',
      description:
        'Scan produk langsung dari browser tanpa perlu download aplikasi. Cukup buka kamera dan scan QR code.',
      color: 'text-[#2B4C7E]',
      bg: 'bg-[#2B4C7E]/10',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description:
        'Dashboard komprehensif dengan statistik scan real-time, grafik aktivitas, dan insights berbasis AI.',
      color: 'text-[#1E3A5F]',
      bg: 'bg-[#1E3A5F]/10',
    },
    {
      icon: Brain,
      title: 'AI Fraud Detection',
      description:
        'Deteksi otomatis pola scan mencurigakan menggunakan Kolosal AI untuk melindungi brand dari pemalsuan.',
      color: 'text-[#2B4C7E]',
      bg: 'bg-[#2B4C7E]/10',
    },
    {
      icon: Wallet,
      title: 'NFT Collectible',
      description:
        'Pemilik pertama dapat claim NFT eksklusif dengan artwork yang di-generate oleh Gemini AI tanpa biaya gas.',
      color: 'text-[#1E3A5F]',
      bg: 'bg-[#1E3A5F]/10',
    },
    {
      icon: MapPin,
      title: 'Geospatial Tracking',
      description:
        'Pelacakan lokasi scan produk dengan visualisasi peta untuk memantau distribusi dan mendeteksi anomali.',
      color: 'text-[#2B4C7E]',
      bg: 'bg-[#2B4C7E]/10',
    },
    {
      icon: Lock,
      title: 'Tag Lifecycle Management',
      description:
        'Kelola siklus hidup tag dari Created → Distributed → Claimed → Transferred → Flagged → Revoked.',
      color: 'text-[#1E3A5F]',
      bg: 'bg-[#1E3A5F]/10',
    },
    {
      icon: Globe,
      title: 'Multi-Brand Support',
      description:
        'Manajemen multi-brand dengan isolasi data, role-based access control, dan branding kustomisasi.',
      color: 'text-[#2B4C7E]',
      bg: 'bg-[#2B4C7E]/10',
    },
    {
      icon: Zap,
      title: 'Instant Verification',
      description:
        'Verifikasi keaslian produk dalam waktu kurang dari 1 detik dengan query ke blockchain.',
      color: 'text-[#1E3A5F]',
      bg: 'bg-[#1E3A5F]/10',
    },
    {
      icon: Sparkles,
      title: 'AI Dashboard Assistant',
      description:
        'Chat dengan AI agent untuk analisis data, generate report, dan insights bisnis langsung dari dashboard.',
      color: 'text-[#2B4C7E]',
      bg: 'bg-[#2B4C7E]/10',
    },
    {
      icon: CheckCircle2,
      title: 'Web3 Support Tickets',
      description:
        'Pemilik NFT dapat submit keluhan produk dengan connect wallet, auto-routing ke brand atau admin.',
      color: 'text-[#1E3A5F]',
      bg: 'bg-[#1E3A5F]/10',
    },
  ];

  const integrations = [
    {
      name: 'Cloudflare R2',
      description: 'Storage untuk QR code dan metadata',
    },
    {
      name: 'MetaMask',
      description: 'Web3 wallet integration',
    },
    {
      name: 'Mapbox',
      description: 'Geospatial visualization',
    },
    {
      name: 'Prisma ORM',
      description: 'Database management',
    },
    {
      name: 'NextAuth',
      description: 'Authentication system',
    },
    {
      name: 'Swagger',
      description: 'API documentation',
    },
  ];

  const benefits = [
    'Verifikasi produk dalam hitungan detik',
    'Catatan blockchain yang tidak dapat diubah',
    'Deteksi fraud otomatis dengan AI',
    'Dashboard analytics real-time',
    'NFT collectible untuk customer engagement',
    'Support ticket berbasis Web3',
    'API documentation lengkap',
    'Multi-brand management',
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
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <MotionH1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0C2340] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Fitur <span className="text-[#2B4C7E]">Lengkap</span> untuk
              Perlindungan Produk
            </MotionH1>
            <MotionP
              className="text-lg text-[#606060] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Solusi end-to-end untuk verifikasi keaslian produk dengan
              teknologi blockchain, AI, dan Web3 yang terintegrasi sempurna.
            </MotionP>
          </div>

          {/* Features Grid */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <MotionDiv
                  key={feature.title}
                  className="bg-white border border-[#A8A8A8]/30 rounded-xl p-6 hover:border-[#2B4C7E]/50 transition-all hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0C2340] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#606060] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <MotionDiv
            className="bg-linear-to-br from-[#2B4C7E]/5 to-white border-2 border-[#2B4C7E]/20 rounded-2xl p-8 lg:p-12 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-8">
              Keuntungan Menggunakan Etags
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#2B4C7E] shrink-0 mt-0.5" />
                  <span className="text-[#0C2340] font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </MotionDiv>

          {/* Integrations */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-12">
              Integrasi & Teknologi
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {integrations.map((integration, index) => (
                <MotionDiv
                  key={integration.name}
                  className="bg-white border border-[#A8A8A8]/30 rounded-xl p-6 text-center hover:border-[#2B4C7E]/50 transition-all hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                >
                  <h3 className="font-bold text-[#0C2340] mb-2">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-[#606060]">
                    {integration.description}
                  </p>
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <MotionDiv
            className="bg-linear-to-r from-[#2B4C7E] to-[#1E3A5F] rounded-2xl p-12 text-center text-white shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Siap Melindungi Produk Anda?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan brand terkemuka yang mempercayai Etags untuk
              melindungi produk mereka dari pemalsuan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="inline-block px-8 py-3 bg-white text-[#2B4C7E] font-semibold rounded-full hover:bg-[#A8A8A8]/10 hover:text-white transition-all border-2 border-white"
              >
                Mulai Sekarang
              </a>
              <a
                href="/pricing"
                className="inline-block px-8 py-3 bg-transparent text-white font-semibold rounded-full hover:bg-white/10 transition-all border-2 border-white"
              >
                Lihat Harga
              </a>
            </div>
          </MotionDiv>
        </div>
      </main>

      <Footer />
    </div>
  );
}
