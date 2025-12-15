'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { ABOUT_TEAM } from '@/constants';
import type { TeamMember } from '@/types/common';

const MotionDiv = motion.div;

export function TeamSection() {
  const team: TeamMember[] = ABOUT_TEAM as unknown as TeamMember[];
  return (
    <div className="text-center mb-20">
      <h2 className="text-3xl font-bold text-[#0C2340] mb-6">Tim Kami</h2>
      <p className="text-[#606060] mb-12 max-w-2xl mx-auto">
        Tim Pemuja Deadline Anti Refund - Developer berpengalaman yang
        berdedikasi membangun solusi blockchain terbaik untuk IMPHEN 2025.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {team.map((member, index) => (
          <MotionDiv
            key={member.name}
            className="bg-white border border-[#A8A8A8]/30 rounded-xl p-6 hover:border-[#2B4C7E]/50 transition-all hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-20 h-20 rounded-full bg-[#2B4C7E]/10 mx-auto mb-4 flex items-center justify-center">
              <Users className="w-10 h-10 text-[#2B4C7E]" />
            </div>
            <h3 className="font-bold text-[#0C2340] mb-1">{member.name}</h3>
            <p className="text-sm text-[#606060] mb-3">{member.role}</p>
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#2B4C7E] hover:underline"
            >
              GitHub Profile
            </a>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
