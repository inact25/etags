/**
 * Showcase Page Constants
 */

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

export const SHOWCASE_ITEMS = [
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
] as const;

export const TESTIMONIALS = [
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
] as const;

export const ACHIEVEMENTS = [
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
] as const;
