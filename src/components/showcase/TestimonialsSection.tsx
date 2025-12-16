'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/constants';
import type { TestimonialItem } from '@/types/common';

export function TestimonialsSection() {
  const testimonials: TestimonialItem[] =
    TESTIMONIALS as unknown as TestimonialItem[];
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-12">
        Apa Kata Mereka
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            className="bg-white border-2 border-[#2B4C7E]/20 rounded-2xl p-8 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Quote
              className="text-[#2B4C7E]/20 absolute top-4 right-4"
              size={48}
            />

            <p className="text-[#606060] leading-relaxed mb-6 relative z-10">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            <div className="border-t border-[#A8A8A8]/20 pt-4">
              <p className="font-bold text-[#0C2340]">{testimonial.author}</p>
              <p className="text-sm text-[#606060]">{testimonial.company}</p>
              <p className="text-xs text-[#2B4C7E] font-semibold mt-1">
                {testimonial.industry}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
