'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { Shield, Target, Users, Zap } from 'lucide-react';
import Image from 'next/image';

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Keamanan',
      description:
        'Teknologi blockchain yang tidak dapat dipalsukan untuk melindungi keaslian produk.',
    },
    {
      icon: Target,
      title: 'Inovasi',
      description:
        'Terus mengembangkan solusi terdepan untuk tantangan autentikasi produk.',
    },
    {
      icon: Users,
      title: 'Kolaborasi',
      description:
        'Bekerja sama dengan brand dan mitra untuk menciptakan ekosistem yang aman.',
    },
    {
      icon: Zap,
      title: 'Efisiensi',
      description:
        'Proses verifikasi cepat dan mudah untuk pengalaman pengguna yang optimal.',
    },
  ];

  const team = [
    {
      name: 'igun997',
      role: 'Lead Developer',
      github: 'https://github.com/igun997',
    },
    {
      name: 'inact25',
      role: 'Blockchain Engineer',
      github: 'https://github.com/inact25',
    },
    {
      name: 'juanaf31',
      role: 'Full Stack Developer',
      github: 'https://github.com/juanaf31',
    },
    {
      name: 'ramaramx',
      role: 'AI/ML Engineer',
      github: 'https://github.com/ramaramx',
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
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <MotionH1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0C2340] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Tentang <span className="text-[#2B4C7E]">Etags</span>
            </MotionH1>
            <MotionP
              className="text-lg text-[#606060] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Platform verifikasi produk berbasis blockchain yang mengamankan
              rantai pasokan dan memberikan kepercayaan penuh kepada konsumen.
            </MotionP>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <MotionDiv
              className="bg-white border-2 border-[#2B4C7E]/20 rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-[#0C2340] mb-4">
                Misi Kami
              </h2>
              <p className="text-[#606060] leading-relaxed">
                Memberikan solusi autentikasi produk yang aman, transparan, dan
                mudah digunakan untuk melindungi konsumen dari produk palsu dan
                meningkatkan kepercayaan terhadap brand.
              </p>
            </MotionDiv>

            <MotionDiv
              className="bg-white border-2 border-[#2B4C7E]/20 rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-[#0C2340] mb-4">
                Visi Kami
              </h2>
              <p className="text-[#606060] leading-relaxed">
                Menjadi standar global untuk verifikasi keaslian produk dengan
                teknologi blockchain, menciptakan ekosistem di mana setiap
                produk dapat diverifikasi dengan mudah dan aman.
              </p>
            </MotionDiv>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-12">
              Nilai-Nilai Kami
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <MotionDiv
                  key={value.title}
                  className="bg-white border border-[#A8A8A8]/30 rounded-xl p-6 hover:border-[#2B4C7E]/50 transition-all hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <value.icon className="w-10 h-10 text-[#2B4C7E] mb-4" />
                  <h3 className="text-xl font-bold text-[#0C2340] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#606060] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <MotionDiv
            className="bg-linear-to-br from-[#2B4C7E]/5 to-white border-2 border-[#2B4C7E]/20 rounded-2xl p-8 lg:p-12 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-6">
              Teknologi Kami
            </h2>
            <p className="text-[#606060] text-center max-w-3xl mx-auto mb-8">
              Etags dibangun dengan teknologi terdepan untuk memberikan
              keamanan, kecepatan, dan skalabilitas yang optimal.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-[#0C2340] mb-2">Blockchain</h3>
                <p className="text-sm text-[#606060]">
                  Base Sepolia (Layer 2 Ethereum)
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-[#0C2340] mb-2">
                  Smart Contracts
                </h3>
                <p className="text-sm text-[#606060]">
                  ERC721 NFT & ETagRegistry
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-[#0C2340] mb-2">AI/ML</h3>
                <p className="text-sm text-[#606060]">Kolosal AI & Gemini AI</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-[#0C2340] mb-2">Framework</h3>
                <p className="text-sm text-[#606060]">Next.js 16 & React 19</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-[#0C2340] mb-2">Database</h3>
                <p className="text-sm text-[#606060]">MySQL & Prisma ORM</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-[#0C2340] mb-2">Storage</h3>
                <p className="text-sm text-[#606060]">Cloudflare R2</p>
              </div>
            </div>
          </MotionDiv>

          {/* Team */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-[#0C2340] mb-6">Tim Kami</h2>
            <p className="text-[#606060] mb-12 max-w-2xl mx-auto">
              Tim Pemuja Deadline Anti Refund - Developer berpengalaman yang
              berdedikasi membangun solusi blockchain terbaik untuk IMPHEN 2025.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <MotionDiv
                  key={member.name}
                  className="bg-white border border-[#A8A8A8]/30 rounded-xl p-6 hover:border-[#2B4C7E]/50 transition-all hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-20 h-20 rounded-full bg-[#2B4C7E]/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-[#2B4C7E]" />
                  </div>
                  <h3 className="font-bold text-[#0C2340] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#606060] mb-3">{member.role}</p>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#2B4C7E] hover:underline"
                  >
                    GitHub Profile
                  </a>
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: '99.9%', label: 'Uptime Sistem' },
              { value: '<1dtk', label: 'Waktu Verifikasi' },
              { value: 'Gas-Free', label: 'NFT Minting' },
            ].map((stat, index) => (
              <MotionDiv
                key={stat.label}
                className="text-center p-6 bg-white border border-[#2B4C7E]/20 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-[#2B4C7E] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#606060] font-medium">{stat.label}</div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
