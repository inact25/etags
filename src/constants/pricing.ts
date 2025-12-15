/**
 * Pricing Page Constants
 */

import { Zap, Sparkles, Crown } from 'lucide-react';

export const PRICING_PLANS = [
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
] as const;

export const PRICING_FAQS = [
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
] as const;

export const PRICING_INCLUDED_FEATURES = [
  'QR code generation & scanning',
  'Blockchain verification',
  'Dashboard analytics',
  'Mobile responsive',
  'Secure data encryption',
  'Regular updates',
  'Cloud hosting',
  'Data backup',
] as const;
