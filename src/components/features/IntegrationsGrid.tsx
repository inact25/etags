'use client';

import { motion } from 'framer-motion';
import { FEATURES_INTEGRATIONS } from '@/constants';

export function IntegrationsGrid() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-12">
        Integrasi & Teknologi
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {FEATURES_INTEGRATIONS.map((integration, index) => (
          <motion.div
            key={integration.name}
            className="bg-white border-2 border-[#2B4C7E]/20 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-lg font-bold text-[#0C2340] mb-2">
              {integration.name}
            </h3>
            <p className="text-sm text-[#606060]">{integration.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
