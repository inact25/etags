'use client';

import { motion, useReducedMotion } from 'framer-motion';

const MotionH1 = motion.h1;
const MotionP = motion.p;

export function AboutHero() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="max-w-4xl mx-auto text-center mb-20">
      <MotionH1
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0C2340] mb-6"
        initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.5 }}
      >
        Tentang <span className="text-[#2B4C7E]">Etags</span>
      </MotionH1>
      <MotionP
        className="text-lg text-[#606060] leading-relaxed"
        initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }
        }
      >
        Platform verifikasi produk berbasis blockchain yang mengamankan rantai
        pasokan dan memberikan kepercayaan penuh kepada konsumen.
      </MotionP>
    </div>
  );
}
