'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: 'Gratis',
      period: 'Selamanya',
      description: 'Untuk brand yang baru memulai dan ingin mencoba platform',
      features: [
        'Hingga 1.000 tag per bulan',
        'QR code generation',
        'Web-based scanner',
        'Dashboard analytics dasar',
        'Email support',
        'Base Sepolia blockchain',
      ],
      cta: 'Mulai Gratis',
      href: '/register',
      highlighted: false,
      color: 'from-[#A8A8A8]/10 to-white',
      borderColor: 'border-[#A8A8A8]/30',
    },
    {
      name: 'Professional',
      icon: Sparkles,
      price: 'Custom',
      period: 'Per bulan',
      description: 'Untuk brand yang serius melindungi produk mereka',
      features: [
        'Tag unlimited',
        'Semua fitur Starter',
        'AI fraud detection',
        'NFT collectible minting',
        'Geospatial tracking',
        'Advanced analytics & insights',
        'API access',
        'Priority support 24/7',
        'Custom branding',
      ],
      cta: 'Hubungi Sales',
      href: '/contact',
      highlighted: true,
      color: 'from-[#2B4C7E]/10 to-[#1E3A5F]/5',
      borderColor: 'border-[#2B4C7E]',
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 'Custom',
      period: 'Per tahun',
      description: 'Untuk perusahaan besar dengan kebutuhan khusus',
      features: [
        'Semua fitur Professional',
        'Multi-brand management',
        'White-label solution',
        'Dedicated blockchain node',
        'Custom AI model training',
        'SLA 99.99% uptime',
        'Dedicated account manager',
        'On-premise deployment option',
        'Custom integrations',
      ],
      cta: 'Hubungi Sales',
      href: '/contact',
      highlighted: false,
      color: 'from-[#0C2340]/10 to-white',
      borderColor: 'border-[#0C2340]/30',
    },
  ];

  const faqs = [
    {
      question: 'Apakah ada biaya tersembunyi?',
      answer:
        'Tidak ada biaya tersembunyi. Harga yang tercantum sudah termasuk semua fitur yang disebutkan. Untuk paket custom, kami akan memberikan penawaran yang jelas dan transparan.',
    },
    {
      question: 'Apakah saya bisa upgrade atau downgrade kapan saja?',
      answer:
        'Ya, Anda bisa upgrade atau downgrade paket kapan saja. Perubahan akan efektif pada periode billing berikutnya.',
    },
    {
      question: 'Bagaimana dengan biaya gas blockchain?',
      answer:
        'Untuk NFT minting, kami menggunakan sistem gas-free di mana admin wallet yang membayar gas fee. Untuk operasi blockchain lainnya, biaya gas sudah termasuk dalam paket Anda.',
    },
    {
      question: 'Apakah ada trial period?',
      answer:
        'Paket Starter gratis selamanya dengan limit 1.000 tag per bulan. Untuk paket Professional dan Enterprise, kami menawarkan demo dan konsultasi gratis.',
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
          <div className="max-w-4xl mx-auto text-center mb-16">
            <MotionH1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0C2340] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Harga yang <span className="text-[#2B4C7E]">Transparan</span>
            </MotionH1>
            <MotionP
              className="text-lg text-[#606060] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Mulai
              gratis, upgrade kapan saja tanpa komitmen jangka panjang.
            </MotionP>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <MotionDiv
                key={plan.name}
                className={`bg-linear-to-br ${plan.color} border-2 ${plan.borderColor} rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'shadow-2xl shadow-[#2B4C7E]/20 scale-105 relative'
                    : 'shadow-lg'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2B4C7E] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Paling Populer
                  </div>
                )}

                <div className="mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl ${
                      plan.highlighted ? 'bg-[#2B4C7E]/20' : 'bg-[#A8A8A8]/20'
                    } flex items-center justify-center mb-4`}
                  >
                    <plan.icon
                      className={`w-6 h-6 ${
                        plan.highlighted ? 'text-[#2B4C7E]' : 'text-[#0C2340]'
                      }`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0C2340] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[#606060] mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-[#0C2340]">
                      {plan.price}
                    </span>
                    {plan.price !== 'Gratis' && (
                      <span className="text-[#606060] text-sm ml-2">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  {plan.price === 'Gratis' && (
                    <span className="text-sm text-[#606060]">
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#2B4C7E] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0C2340]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    plan.highlighted
                      ? 'bg-[#2B4C7E] hover:bg-[#1E3A5F] text-white'
                      : 'bg-white hover:bg-[#A8A8A8]/10 text-[#0C2340] border-2 border-[#0C2340]/20'
                  }`}
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </MotionDiv>
            ))}
          </div>

          {/* Features Comparison */}
          <MotionDiv
            className="bg-white border-2 border-[#A8A8A8]/30 rounded-2xl p-8 lg:p-12 mb-20 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-8">
              Semua Paket Termasuk
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'QR code generation & scanning',
                'Blockchain verification',
                'Dashboard analytics',
                'Mobile responsive',
                'Secure data encryption',
                'Regular updates',
                'Cloud hosting',
                'Data backup',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2B4C7E]/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#2B4C7E]" />
                  </div>
                  <span className="text-[#0C2340] font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </MotionDiv>

          {/* FAQs */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-12">
              Pertanyaan Umum
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <MotionDiv
                  key={index}
                  className="bg-white border border-[#A8A8A8]/30 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-bold text-[#0C2340] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[#606060] leading-relaxed">{faq.answer}</p>
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
            <h2 className="text-3xl font-bold mb-4">Masih Punya Pertanyaan?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Tim kami siap membantu Anda memilih paket yang tepat dan menjawab
              semua pertanyaan tentang Etags.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#2B4C7E] hover:bg-[#A8A8A8]/10 hover:text-white border-2 border-white"
            >
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </MotionDiv>
        </div>
      </main>

      <Footer />
    </div>
  );
}
