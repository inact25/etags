'use client';

import { motion } from 'framer-motion';

interface LegalHeroProps {
  title: string;
  description: string;
  lastUpdated?: string;
}

export function LegalHero({ title, description, lastUpdated }: LegalHeroProps) {
  return (
    <div className="max-w-4xl mx-auto text-center mb-16">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-[#0C2340] mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-lg text-[#606060] leading-relaxed mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {description}
      </motion.p>
      {lastUpdated && (
        <motion.p
          className="text-sm text-[#606060]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Terakhir diperbarui: {lastUpdated}
        </motion.p>
      )}
    </div>
  );
}
