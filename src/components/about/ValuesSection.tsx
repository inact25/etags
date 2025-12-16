'use client';

import { motion } from 'framer-motion';
import { Shield, Target, Users, Zap } from 'lucide-react';
import { ABOUT_VALUES } from '@/constants';

const MotionDiv = motion.div;

// Map icons to the data
const values = ABOUT_VALUES.map((value, index) => ({
  ...value,
  icon: [Shield, Target, Users, Zap][index],
}));

export function ValuesSection() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-12">
        Nilai-Nilai Kami
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <MotionDiv
            key={value.title}
            className="bg-white border border-[#A8A8A8]/30 rounded-xl p-6 hover:border-[#2B4C7E]/50 transition-all hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <value.icon className="w-10 h-10 text-[#2B4C7E] mb-4" />
            <h3 className="text-xl font-bold text-[#0C2340] mb-2">
              {value.title}
            </h3>
            <p className="text-[#606060] text-sm leading-relaxed">
              {value.description}
            </p>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
