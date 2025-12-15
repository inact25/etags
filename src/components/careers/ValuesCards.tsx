'use client';

import { motion } from 'framer-motion';
import { CAREER_VALUES } from '@/constants';

export function ValuesCards() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-12">
        Nilai-Nilai Kami
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        {CAREER_VALUES.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={value.title}
              className="bg-white border-2 border-[#2B4C7E]/20 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-[#2B4C7E] mb-4 flex justify-center">
                <Icon size={40} />
              </div>
              <h3 className="text-lg font-bold text-[#0C2340] mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-[#606060] leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
