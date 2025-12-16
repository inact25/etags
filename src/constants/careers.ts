/**
 * Careers Page Constants
 */

import { Code, Heart, Shield, TrendingUp, Users, Zap } from 'lucide-react';

export const JOB_POSITIONS = [
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
] as const;

export const CAREER_BENEFITS = [
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
] as const;

export const CAREER_VALUES = [
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
    description: 'Kami percaya pada kekuatan teamwork dan komunikasi terbuka.',
  },
  {
    icon: TrendingUp,
    title: 'Excellence',
    description:
      'Kami berusaha untuk memberikan hasil terbaik dalam setiap pekerjaan.',
  },
] as const;
