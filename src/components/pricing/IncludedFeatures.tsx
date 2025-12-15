'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { PRICING_INCLUDED_FEATURES } from '@/constants';

export function IncludedFeatures() {
  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gradient-to-br from-[#2B4C7E]/5 to-white border-2 border-[#2B4C7E]/20 rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl font-bold text-[#0C2340] text-center mb-8">
          Semua Paket Sudah Termasuk
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {PRICING_INCLUDED_FEATURES.map((feature, index) => (
            <motion.div
              key={feature}
              className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <CheckCircle2
                className="text-[#2B4C7E] flex-shrink-0"
                size={20}
              />
              <span className="text-sm text-[#0C2340] font-medium">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
