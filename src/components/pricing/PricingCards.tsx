'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '@/constants';
import type { PricingPlan } from '@/types/common';

export function PricingCards() {
  const plans: PricingPlan[] = PRICING_PLANS as unknown as PricingPlan[];
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      {plans.map((plan, index) => {
        const Icon = plan.icon;
        return (
          <motion.div
            key={plan.name}
            className={`bg-gradient-to-br ${plan.color} border-2 ${plan.borderColor} rounded-3xl p-8 relative ${
              plan.highlighted ? 'shadow-2xl scale-105' : 'shadow-xl'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2B4C7E] text-white px-6 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            )}

            <div className="text-[#2B4C7E] mb-4">
              <Icon size={48} />
            </div>

            <h3 className="text-2xl font-bold text-[#0C2340] mb-2">
              {plan.name}
            </h3>

            <div className="mb-4">
              <span className="text-4xl font-bold text-[#0C2340]">
                {plan.price}
              </span>
              <span className="text-[#606060] ml-2">/ {plan.period}</span>
            </div>

            <p className="text-[#606060] mb-6">{plan.description}</p>

            <Link
              href={plan.href}
              className={`block text-center py-3 rounded-lg font-semibold mb-6 transition-colors ${
                plan.highlighted
                  ? 'bg-[#2B4C7E] text-white hover:bg-[#1E3A5F]'
                  : 'bg-white text-[#2B4C7E] border-2 border-[#2B4C7E] hover:bg-[#2B4C7E]/5'
              }`}
            >
              {plan.cta}
            </Link>

            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check
                    className="text-[#2B4C7E] flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <span className="text-[#0C2340]">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}
