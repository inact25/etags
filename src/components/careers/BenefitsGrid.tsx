'use client';

import { motion } from 'framer-motion';
import { CAREER_BENEFITS } from '@/constants';
import type { BenefitItem } from '@/types/common';

export function BenefitsGrid() {
  const benefits: BenefitItem[] = CAREER_BENEFITS as unknown as BenefitItem[];
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-12">
        Benefit & Perks
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={benefit.title}
              className="bg-gradient-to-br from-[#2B4C7E]/5 to-white border-2 border-[#2B4C7E]/20 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-[#2B4C7E] mb-4">
                <Icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-[#0C2340] mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-[#606060] leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
