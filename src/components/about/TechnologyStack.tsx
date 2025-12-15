'use client';

import { motion } from 'framer-motion';
import { ABOUT_TECH_STACK } from '@/constants';
import type { TechStackItem } from '@/types/common';

const MotionDiv = motion.div;

export function TechnologyStack() {
  const techStack: TechStackItem[] =
    ABOUT_TECH_STACK as unknown as TechStackItem[];
  return (
    <MotionDiv
      className="bg-linear-to-br from-[#2B4C7E]/5 to-white border-2 border-[#2B4C7E]/20 rounded-2xl p-8 lg:p-12 mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-6">
        Teknologi Kami
      </h2>
      <p className="text-[#606060] text-center max-w-3xl mx-auto mb-8">
        Etags dibangun dengan teknologi terdepan untuk memberikan keamanan,
        kecepatan, dan skalabilitas yang optimal.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techStack.map((tech) => (
          <div key={tech.title} className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold text-[#0C2340] mb-2">{tech.title}</h3>
            <p className="text-sm text-[#606060]">{tech.description}</p>
          </div>
        ))}
      </div>
    </MotionDiv>
  );
}
