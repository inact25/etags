'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function PricingCTA() {
  return (
    <motion.div
      className="text-center bg-gradient-to-br from-[#2B4C7E]/10 to-[#1E3A5F]/5 border-2 border-[#2B4C7E]/30 rounded-3xl p-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-[#0C2340] mb-4">
        Masih Ada Pertanyaan?
      </h2>
      <p className="text-lg text-[#606060] mb-8 max-w-2xl mx-auto">
        Tim sales kami siap membantu Anda memilih paket yang tepat dan
        memberikan demo gratis.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#2B4C7E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1E3A5F] transition-colors"
        >
          Hubungi Sales
          <ArrowRight size={20} />
        </Link>
        <Link
          href="/features"
          className="inline-flex items-center gap-2 bg-white text-[#2B4C7E] border-2 border-[#2B4C7E] px-8 py-4 rounded-lg font-semibold hover:bg-[#2B4C7E]/5 transition-colors"
        >
          Lihat Semua Fitur
        </Link>
      </div>
    </motion.div>
  );
}
