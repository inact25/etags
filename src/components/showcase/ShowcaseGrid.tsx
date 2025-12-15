'use client';

import { motion } from 'framer-motion';
import { SHOWCASE_ITEMS } from '@/constants';
import type { ShowcaseItem } from '@/types/common';

export function ShowcaseGrid() {
  const items: ShowcaseItem[] = SHOWCASE_ITEMS as unknown as ShowcaseItem[];
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-12">
        Berbagai Industri Mempercayai Kami
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.brand}
              className={`${item.bg} border-2 border-[#2B4C7E]/20 rounded-3xl p-8 hover:shadow-2xl transition-shadow`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`${item.color} mb-4`}>
                <Icon size={48} />
              </div>

              <div className="mb-2">
                <span className="text-sm font-semibold text-[#2B4C7E] uppercase tracking-wide">
                  {item.industry}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#0C2340] mb-4">
                {item.brand}
              </h3>

              <p className="text-[#606060] leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#2B4C7E]/20">
                {Object.entries(item.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-[#0C2340] mb-1">
                      {value}
                    </div>
                    <div className="text-xs text-[#606060] capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
