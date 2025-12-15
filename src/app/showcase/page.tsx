'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import {
  ShoppingBag,
  Watch,
  Pill,
  Shirt,
  Package,
  TrendingUp,
  Users,
  Globe,
} from 'lucide-react';
import Image from 'next/image';

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

export default function ShowcasePage() {
  const showcases = [
    {
      icon: ShoppingBag,
      industry: 'Fashion & Retail',
      brand: 'Premium Fashion Brand',
      description:
        'Brand fashion premium menggunakan Etags untuk memverifikasi keaslian produk limited edition dan melindungi dari pemalsuan.',
      stats: {
        tags: '50,000+',
        scans: '250,000+',
        fraudDetected: '125',
      },
      color: 'text-[#2B4C7E]',
      bg: 'bg-[#2B4C7E]/10',
    },
    {
      icon: Watch,
      industry: 'Luxury Goods',
      brand: 'Watch Collection',
      description:
        'Koleksi jam tangan mewah menggunakan NFT collectible untuk memberikan sertifikat keaslian digital kepada pembeli.',
      stats: {
        tags: '12,000+',
        scans: '85,000+',
        nftMinted: '8,500+',
      },
      color: 'text-[#1E3A5F]',
      bg: 'bg-[#1E3A5F]/10',
    },
    {
      icon: Pill,
      industry: 'Pharmaceutical',
      brand: 'Health Products',
      description:
        'Produsen obat-obatan menggunakan blockchain stamping untuk track & trace produk farmasi dan memastikan keamanan konsumen.',
      stats: {
        tags: '500,000+',
        scans: '2.5M+',
        recalled: '0',
      },
      color: 'text-[#2B4C7E]',
      bg: 'bg-[#2B4C7E]/10',
    },
    {
      icon: Shirt,
      industry: 'Apparel',
      brand: 'Sportswear Brand',
      description:
        'Brand sportswear menggunakan geospatial tracking untuk monitoring distribusi produk dan mencegah pasar gelap.',
      stats: {
        tags: '150,000+',
        scans: '680,000+',
        locations: '45 countries',
      },
      color: 'text-[#1E3A5F]',
      bg: 'bg-[#1E3A5F]/10',
    },
    {
      icon: Package,
      industry: 'Electronics',
      brand: 'Tech Gadgets',
      description:
        'Produsen gadget menggunakan AI fraud detection untuk mengidentifikasi aktivitas mencurigakan dan distributor tidak resmi.',
      stats: {
        tags: '300,000+',
        scans: '1.8M+',
        alertsSent: '450+',
      },
      color: 'text-[#2B4C7E]',
      bg: 'bg-[#2B4C7E]/10',
    },
  ];

  const testimonials = [
    {
      quote:
        'Etags membantu kami mengurangi produk palsu hingga 95% dalam 6 bulan pertama. Sistem AI fraud detection sangat akurat.',
      author: 'Marketing Director',
      company: 'Premium Fashion Brand',
      industry: 'Fashion',
    },
    {
      quote:
        'NFT collectible feature meningkatkan customer engagement kami. Pembeli sangat senang mendapatkan sertifikat digital yang unik.',
      author: 'CEO',
      company: 'Luxury Watch Collection',
      industry: 'Luxury Goods',
    },
    {
      quote:
        'Dashboard analytics memberikan insights yang sangat berharga tentang pola distribusi produk kami. Real-time tracking luar biasa.',
      author: 'Supply Chain Manager',
      company: 'Health Products',
      industry: 'Pharmaceutical',
    },
  ];

  const achievements = [
    {
      icon: Package,
      value: '1M+',
      label: 'Tag Terverifikasi',
    },
    {
      icon: Users,
      value: '100+',
      label: 'Brand Partner',
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Negara',
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Accuracy Rate',
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
              <span className="text-[#2B4C7E]">Success Stories</span> dari Brand
              Terkemuka
            </MotionH1>
            <MotionP
              className="text-lg text-[#606060] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Lihat bagaimana brand dari berbagai industri menggunakan Etags
              untuk melindungi produk mereka dan meningkatkan kepercayaan
              konsumen.
            </MotionP>
          </div>

          {/* Achievements */}
          <div className="grid md:grid-cols-4 gap-6 mb-20 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <MotionDiv
                key={achievement.label}
                className="bg-white border border-[#A8A8A8]/30 rounded-xl p-6 text-center hover:border-[#2B4C7E]/50 transition-all hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <achievement.icon className="w-10 h-10 text-[#2B4C7E] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#0C2340] mb-1">
                  {achievement.value}
                </div>
                <div className="text-sm text-[#606060] font-medium">
                  {achievement.label}
                </div>
              </MotionDiv>
            ))}
          </div>

          {/* Showcases */}
          <div className="space-y-8 mb-20">
            {showcases.map((showcase, index) => (
              <MotionDiv
                key={showcase.brand}
                className="bg-white border-2 border-[#A8A8A8]/30 rounded-2xl p-8 lg:p-10 hover:border-[#2B4C7E]/50 transition-all hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div
                      className={`inline-flex items-center gap-2 ${showcase.bg} rounded-full px-4 py-1.5 mb-4`}
                    >
                      <showcase.icon className={`w-4 h-4 ${showcase.color}`} />
                      <span className="text-sm font-semibold text-[#0C2340]">
                        {showcase.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0C2340] mb-3">
                      {showcase.brand}
                    </h3>
                    <p className="text-[#606060] leading-relaxed mb-6">
                      {showcase.description}
                    </p>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-[#2B4C7E]">
                          {showcase.stats.tags}
                        </div>
                        <div className="text-sm text-[#606060]">
                          Tags Created
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-[#2B4C7E]">
                          {showcase.stats.scans}
                        </div>
                        <div className="text-sm text-[#606060]">
                          Total Scans
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-[#2B4C7E]">
                          {showcase.stats.fraudDetected ||
                            showcase.stats.nftMinted ||
                            showcase.stats.recalled ||
                            showcase.stats.locations ||
                            showcase.stats.alertsSent}
                        </div>
                        <div className="text-sm text-[#606060]">
                          {showcase.stats.fraudDetected
                            ? 'Fraud Detected'
                            : showcase.stats.nftMinted
                              ? 'NFT Minted'
                              : showcase.stats.recalled === '0'
                                ? 'Recalls'
                                : showcase.stats.locations
                                  ? 'Coverage'
                                  : 'Alerts Sent'}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div
                      className={`absolute inset-0 ${showcase.bg} rounded-xl blur-xl`}
                    />
                    <div className="relative bg-white rounded-xl border border-[#A8A8A8]/20 p-6 h-[200px] flex items-center justify-center">
                      <div className="text-[#A8A8A8] text-center">
                        <Package className="w-20 h-20 mx-auto mb-2 opacity-30" />
                        <p className="text-sm">Product Showcase</p>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-12">
              Apa Kata Mereka
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <MotionDiv
                  key={index}
                  className="bg-linear-to-br from-[#2B4C7E]/5 to-white border border-[#A8A8A8]/30 rounded-xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl text-[#2B4C7E] mb-4">&ldquo;</div>
                  <p className="text-[#606060] leading-relaxed mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <div>
                    <div className="font-bold text-[#0C2340]">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-[#606060]">
                      {testimonial.company}
                    </div>
                    <div className="text-xs text-[#A8A8A8] mt-1">
                      {testimonial.industry}
                    </div>
                  </div>
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
              Siap Menjadi Bagian dari Success Story?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan brand terkemuka yang telah mempercayai Etags
              untuk melindungi produk mereka dan memberikan pengalaman terbaik
              bagi konsumen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="inline-block px-8 py-3 bg-white text-[#2B4C7E] font-semibold rounded-full hover:bg-[#A8A8A8]/10 hover:text-white transition-all border-2 border-white"
              >
                Mulai Sekarang
              </a>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-transparent text-white font-semibold rounded-full hover:bg-white/10 transition-all border-2 border-white"
              >
                Jadwalkan Demo
              </a>
            </div>
          </MotionDiv>
        </div>
      </main>

      <Footer />
    </div>
  );
}
