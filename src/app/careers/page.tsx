'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import {
  Briefcase,
  Code,
  Palette,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Heart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

export default function CareersPage() {
  const positions = [
    {
      title: 'Senior Blockchain Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      description:
        'Develop and maintain smart contracts on Base Sepolia, optimize gas usage, and implement new blockchain features.',
      requirements: [
        '5+ years experience with Solidity',
        'Deep understanding of EVM and L2 solutions',
        'Experience with ethers.js and Hardhat',
        'Knowledge of security best practices',
      ],
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      description:
        'Build and maintain Next.js application, implement new features, and optimize performance.',
      requirements: [
        '3+ years experience with React and Next.js',
        'Strong TypeScript skills',
        'Experience with Prisma ORM and MySQL',
        'Understanding of Web3 integration',
      ],
    },
    {
      title: 'AI/ML Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      description:
        'Develop and improve AI fraud detection models, implement NFT art generation, and optimize AI performance.',
      requirements: [
        'Experience with machine learning frameworks',
        'Knowledge of fraud detection patterns',
        'Familiarity with LLMs and image generation',
        'Python and/or TypeScript proficiency',
      ],
    },
    {
      title: 'Product Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'Remote',
      description:
        'Design intuitive user interfaces, create design systems, and improve user experience across all touchpoints.',
      requirements: [
        'Strong portfolio of web applications',
        'Experience with Figma and design systems',
        'Understanding of blockchain UX patterns',
        'Ability to conduct user research',
      ],
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      description:
        'Manage infrastructure, implement CI/CD pipelines, monitor system performance, and ensure 99.9% uptime.',
      requirements: [
        'Experience with Docker and Kubernetes',
        'Knowledge of AWS or similar cloud platforms',
        'Familiarity with monitoring tools',
        'Understanding of security best practices',
      ],
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      type: 'Full-time',
      location: 'Jakarta/Remote',
      description:
        'Help brands succeed with Etags, provide technical support, conduct onboarding, and gather feedback.',
      requirements: [
        'Excellent communication skills',
        'Technical background preferred',
        'Experience with B2B SaaS',
        'Fluent in English and Bahasa Indonesia',
      ],
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Competitive Salary',
      description:
        'Gaji kompetitif dengan equity options untuk early team members',
    },
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Asuransi kesehatan comprehensive untuk kamu dan keluarga',
    },
    {
      icon: Users,
      title: 'Remote First',
      description: 'Kerja dari mana saja dengan flexible working hours',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Learning budget dan mentorship untuk pengembangan karir',
    },
    {
      icon: Code,
      title: 'Latest Tech',
      description: 'Bekerja dengan teknologi terdepan: blockchain, AI, Web3',
    },
    {
      icon: Shield,
      title: 'Work-Life Balance',
      description: 'Unlimited PTO dan flexible schedule',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description:
        'Kami berkomitmen untuk transparansi dan kejujuran dalam setiap aspek.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Kami terus berinovasi dan mengeksplorasi solusi baru.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'Kami percaya pada kekuatan teamwork dan komunikasi terbuka.',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description:
        'Kami berusaha untuk memberikan hasil terbaik dalam setiap pekerjaan.',
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
              Bergabung dengan <span className="text-[#2B4C7E]">Tim Etags</span>
            </MotionH1>
            <MotionP
              className="text-lg text-[#606060] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Bangun masa depan verifikasi produk bersama tim yang passionate
              tentang blockchain, AI, dan Web3. Mari ciptakan dampak nyata untuk
              brand dan konsumen.
            </MotionP>
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
                  className="bg-white border border-[#A8A8A8]/30 rounded-xl p-6 text-center hover:border-[#2B4C7E]/50 transition-all hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <value.icon className="w-10 h-10 text-[#2B4C7E] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-[#0C2340] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#606060] leading-relaxed">
                    {value.description}
                  </p>
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <MotionDiv
            className="bg-linear-to-br from-[#2B4C7E]/5 to-white border-2 border-[#2B4C7E]/20 rounded-2xl p-8 lg:p-12 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-12">
              Benefits & Perks
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="bg-white rounded-xl p-6 shadow-md border border-[#A8A8A8]/20"
                >
                  <benefit.icon className="w-8 h-8 text-[#2B4C7E] mb-4" />
                  <h3 className="font-bold text-[#0C2340] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#606060] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </MotionDiv>

          {/* Open Positions */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-12">
              Posisi yang Tersedia
            </h2>
            <div className="space-y-6 max-w-5xl mx-auto">
              {positions.map((position, index) => (
                <MotionDiv
                  key={position.title}
                  className="bg-white border-2 border-[#A8A8A8]/30 rounded-xl p-6 lg:p-8 hover:border-[#2B4C7E]/50 transition-all hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-5 h-5 text-[#2B4C7E]" />
                        <h3 className="text-xl font-bold text-[#0C2340]">
                          {position.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-sm px-3 py-1 bg-[#2B4C7E]/10 text-[#0C2340] rounded-full">
                          {position.department}
                        </span>
                        <span className="text-sm px-3 py-1 bg-[#A8A8A8]/20 text-[#0C2340] rounded-full">
                          {position.type}
                        </span>
                        <span className="text-sm px-3 py-1 bg-[#A8A8A8]/20 text-[#0C2340] rounded-full">
                          {position.location}
                        </span>
                      </div>
                      <p className="text-[#606060] mb-4 leading-relaxed">
                        {position.description}
                      </p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-[#0C2340] mb-2 text-sm">
                          Requirements:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-[#606060]">
                          {position.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="bg-[#2B4C7E] hover:bg-[#1E3A5F] text-white shrink-0"
                    >
                      <a href="/contact">Apply Now</a>
                    </Button>
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
              Tidak Menemukan Posisi yang Cocok?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Kami selalu mencari talenta hebat untuk bergabung dengan tim.
              Kirimkan CV dan portfolio kamu, kami akan menghubungi jika ada
              posisi yang sesuai.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#2B4C7E] hover:bg-[#A8A8A8]/10 hover:text-white border-2 border-white"
            >
              <a href="/contact">Kirim CV Kamu</a>
            </Button>
          </MotionDiv>
        </div>
      </main>

      <Footer />
    </div>
  );
}
