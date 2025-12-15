'use client';

import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '@/constants';

export function AchievementStats() {
  return (
    <div className="grid md:grid-cols-4 gap-6 mb-20">
      {ACHIEVEMENTS.map((achievement, index) => {
        const Icon = achievement.icon;
        return (
          <motion.div
            key={achievement.label}
            className="bg-gradient-to-br from-[#2B4C7E]/10 to-white border-2 border-[#2B4C7E]/20 rounded-2xl p-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-[#2B4C7E] mb-4 flex justify-center">
              <Icon size={40} />
            </div>
            <div className="text-4xl font-bold text-[#0C2340] mb-2">
              {achievement.value}
            </div>
            <div className="text-sm text-[#606060] font-medium">
              {achievement.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
