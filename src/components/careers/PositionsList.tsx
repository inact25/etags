'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { JOB_POSITIONS } from '@/constants';
import type { JobPosition } from '@/types/common';

export function PositionsList() {
  const positions: JobPosition[] = JOB_POSITIONS as unknown as JobPosition[];
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-[#0C2340] text-center mb-12">
        Posisi Terbuka
      </h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {positions.map((position, index) => (
          <motion.div
            key={position.title}
            className="bg-white border-2 border-[#2B4C7E]/20 rounded-2xl p-8 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-[#0C2340] mb-2">
                  {position.title}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm text-[#606060]">
                  <span className="flex items-center gap-1">
                    <Briefcase size={16} />
                    {position.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {position.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {position.location}
                  </span>
                </div>
              </div>
              <a
                href={`mailto:careers@etags.id?subject=Application for ${position.title}`}
                className="bg-[#2B4C7E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1E3A5F] transition-colors"
              >
                Apply Now
              </a>
            </div>

            <p className="text-[#606060] leading-relaxed mb-4">
              {position.description}
            </p>

            <div className="border-t border-[#A8A8A8]/20 pt-4">
              <h4 className="font-semibold text-[#0C2340] mb-3">
                Requirements:
              </h4>
              <ul className="space-y-2">
                {position.requirements.map((req, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[#606060]"
                  >
                    <span className="text-[#2B4C7E] font-bold">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
