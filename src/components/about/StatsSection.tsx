'use client';

import { motion } from 'framer-motion';
import { ABOUT_STATS } from '@/constants';
import type { StatItem } from '@/types/common';

const MotionDiv = motion.div;

export function StatsSection() {
  const stats: StatItem[] = ABOUT_STATS as unknown as StatItem[];
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <MotionDiv
          key={stat.label}
          className="text-center p-6 bg-white border border-[#2B4C7E]/20 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="text-4xl font-bold text-[#2B4C7E] mb-2">
            {stat.value}
          </div>
          <div className="text-[#606060] font-medium">{stat.label}</div>
        </MotionDiv>
      ))}
    </div>
  );
}
