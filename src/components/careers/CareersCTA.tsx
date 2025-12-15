'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export function CareersCTA() {
  return (
    <motion.div
      className="text-center bg-gradient-to-br from-[#2B4C7E]/10 to-[#1E3A5F]/5 border-2 border-[#2B4C7E]/30 rounded-3xl p-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-[#0C2340] mb-4">
        Tidak Menemukan Posisi yang Cocok?
      </h2>
      <p className="text-lg text-[#606060] mb-8 max-w-2xl mx-auto">
        Kirim resume dan portfolio Anda ke kami. Kami selalu mencari talenta
        yang passionate untuk bergabung dengan tim.
      </p>
      <a
        href="mailto:careers@etags.id?subject=General Application"
        className="inline-flex items-center gap-2 bg-[#2B4C7E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1E3A5F] transition-colors"
      >
        <Mail size={20} />
        Kirim CV Anda
      </a>
    </motion.div>
  );
}
