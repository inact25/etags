'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { CONTACT_REASONS } from '@/constants';
import type { ContactReason } from '@/types/common';

export function ContactReasons() {
  const prefersReducedMotion = useReducedMotion();
  const reasons: ContactReason[] =
    CONTACT_REASONS as unknown as ContactReason[];
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-12">
        Bagaimana Kami Bisa Membantu?
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={reason.title}
              className="bg-white border-2 border-[#2B4C7E]/20 rounded-2xl p-6 hover:shadow-xl transition-shadow"
              initial={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.5, delay: index * 0.1 }
              }
            >
              <div className="text-[#2B4C7E] mb-4">
                <Icon size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#0C2340] mb-3">
                {reason.title}
              </h3>
              <p className="text-[#606060] mb-4 leading-relaxed">
                {reason.description}
              </p>
              <a
                href={`mailto:${reason.email}`}
                className="text-[#2B4C7E] font-semibold hover:underline"
              >
                {reason.email}
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
