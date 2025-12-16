'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { CONTACT_INFO, CONTACT_HOURS, RESPONSE_TIME } from '@/constants';
import type { ContactInfo as ContactInfoType } from '@/types/common';

export function ContactInfo() {
  const contactInfo: ContactInfoType[] =
    CONTACT_INFO as unknown as ContactInfoType[];
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Contact Information */}
      <div className="bg-white border-2 border-[#2B4C7E]/20 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-[#0C2340] mb-6">
          Informasi Kontak
        </h3>
        <div className="space-y-4">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <div key={info.title} className="flex items-start gap-3">
                <div className="text-[#2B4C7E] mt-1">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0C2340]">
                    {info.title}
                  </p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-sm text-[#606060] hover:text-[#2B4C7E] transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-[#606060]">{info.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Operating Hours */}
      <div className="bg-white border-2 border-[#2B4C7E]/20 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="text-[#2B4C7E]" size={20} />
          <h3 className="text-xl font-bold text-[#0C2340]">Jam Operasional</h3>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-[#606060]">
              {CONTACT_HOURS.weekday.days}
            </span>
            <span className="text-sm font-semibold text-[#0C2340]">
              {CONTACT_HOURS.weekday.hours}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-[#606060]">
              {CONTACT_HOURS.saturday.days}
            </span>
            <span className="text-sm font-semibold text-[#0C2340]">
              {CONTACT_HOURS.saturday.hours}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-[#606060]">
              {CONTACT_HOURS.sunday.days}
            </span>
            <span className="text-sm font-semibold text-[#0C2340]">
              {CONTACT_HOURS.sunday.hours}
            </span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[#A8A8A8]/20">
          <p className="text-xs text-[#606060] leading-relaxed">
            {RESPONSE_TIME}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
