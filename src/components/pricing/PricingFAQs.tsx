'use client';

import { motion } from 'framer-motion';
import { PRICING_FAQS } from '@/constants';
import type { FAQItem } from '@/types/common';

export function PricingFAQs() {
  const faqs: FAQItem[] = PRICING_FAQS as unknown as FAQItem[];
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.question}
            className="bg-white border-2 border-[#2B4C7E]/20 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-lg font-bold text-[#0C2340] mb-3">
              {faq.question}
            </h3>
            <p className="text-[#606060] leading-relaxed">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
