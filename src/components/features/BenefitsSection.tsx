'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { FEATURES_BENEFITS } from '@/constants';

export function BenefitsSection() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-12">
        Keuntungan Menggunakan Etags
      </h2>
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
        {FEATURES_BENEFITS.map((benefit, index) => (
          <motion.div
            key={benefit}
            className="flex items-start gap-3 bg-white border border-[#2B4C7E]/20 rounded-lg p-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <CheckCircle2 className="text-[#2B4C7E] flex-shrink-0" size={24} />
            <span className="text-[#0C2340] font-medium">{benefit}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
