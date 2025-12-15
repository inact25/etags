'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LegalSectionProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

export function LegalSection({
  title,
  children,
  delay = 0,
}: LegalSectionProps) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h2 className="text-2xl font-bold text-[#0C2340] mb-4">{title}</h2>
      <div className="prose prose-lg max-w-none text-[#606060] leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}
