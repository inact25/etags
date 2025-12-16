/**
 * Features Page Constants
 */

import {
  Shield,
  QrCode,
  Smartphone,
  BarChart3,
  Brain,
  Wallet,
  MapPin,
  Lock,
  Globe,
  Zap,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export const FEATURES_LIST = [
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
] as const;

export const FEATURES_INTEGRATIONS = [
  { name: 'Cloudflare R2', description: 'Storage untuk QR code dan metadata' },
  { name: 'MetaMask', description: 'Web3 wallet integration' },
  { name: 'Mapbox', description: 'Geospatial visualization' },
  { name: 'Prisma ORM', description: 'Database management' },
  { name: 'NextAuth', description: 'Authentication system' },
  { name: 'Swagger', description: 'API documentation' },
] as const;

export const FEATURES_BENEFITS = [
  'Verifikasi produk dalam hitungan detik',
  'Catatan blockchain yang tidak dapat diubah',
  'Deteksi fraud otomatis dengan AI',
  'Dashboard analytics real-time',
  'NFT collectible untuk customer engagement',
  'Support ticket berbasis Web3',
  'API documentation lengkap',
  'Multi-brand management',
] as const;
