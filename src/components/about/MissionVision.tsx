'use client';

import { motion } from 'framer-motion';

const MotionDiv = motion.div;

export function MissionVision() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-20">
      <MotionDiv
        className="bg-white border-2 border-[#2B4C7E]/20 rounded-2xl p-8 shadow-xl"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-[#0C2340] mb-4">Misi Kami</h2>
        <p className="text-[#606060] leading-relaxed">
          Memberikan solusi autentikasi produk yang aman, transparan, dan mudah
          digunakan untuk melindungi konsumen dari produk palsu dan meningkatkan
          kepercayaan terhadap brand.
        </p>
      </MotionDiv>

      <MotionDiv
        className="bg-white border-2 border-[#2B4C7E]/20 rounded-2xl p-8 shadow-xl"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-[#0C2340] mb-4">Visi Kami</h2>
        <p className="text-[#606060] leading-relaxed">
          Menjadi standar global untuk verifikasi keaslian produk dengan
          teknologi blockchain, menciptakan ekosistem di mana setiap produk
          dapat diverifikasi dengan mudah dan aman.
        </p>
      </MotionDiv>
    </div>
  );
}
