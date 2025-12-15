'use client';

import { motion } from 'framer-motion';

export function ContactHero() {
  return (
    <div className="max-w-4xl mx-auto text-center mb-20">
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0C2340] mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mari <span className="text-[#2B4C7E]">Berbicara</span>
      </motion.h1>
      <motion.p
        className="text-lg text-[#606060] leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Punya pertanyaan, ingin demo, atau tertarik bermitra? Tim kami siap
        membantu Anda.
      </motion.p>
    </div>
  );
}
