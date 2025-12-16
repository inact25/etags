'use client';

import { motion } from 'framer-motion';
import { FEATURES_LIST } from '@/constants';

export function FeaturesList() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-12">
        Semua yang Anda Butuhkan
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES_LIST.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              className={`${feature.bg} border-2 border-[#2B4C7E]/20 rounded-2xl p-6 hover:shadow-xl transition-shadow`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className={`${feature.color} mb-4`}>
                <Icon size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#0C2340] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#606060] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
