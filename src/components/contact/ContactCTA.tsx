'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export function ContactCTA() {
  return (
    <motion.div
      className="text-center bg-gradient-to-br from-[#2B4C7E]/10 to-[#1E3A5F]/5 border-2 border-[#2B4C7E]/30 rounded-3xl p-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-[#0C2340] mb-4">
        Ingin Tahu Lebih Banyak?
      </h2>
      <p className="text-lg text-[#606060] mb-8 max-w-2xl mx-auto">
        Jelajahi dokumentasi lengkap kami atau lihat FAQ untuk pertanyaan yang
        sering diajukan.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/faqs"
          className="inline-flex items-center gap-2 bg-[#2B4C7E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1E3A5F] transition-colors"
        >
          Lihat FAQ
          <ArrowRight size={20} />
        </Link>
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 bg-white text-[#2B4C7E] border-2 border-[#2B4C7E] px-8 py-4 rounded-lg font-semibold hover:bg-[#2B4C7E]/5 transition-colors"
        >
          <BookOpen size={20} />
          Dokumentasi API
        </Link>
      </div>
    </motion.div>
  );
}
