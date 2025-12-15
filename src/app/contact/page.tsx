'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { Mail, MapPin, Phone, Send, MessageSquare, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@etags.id',
      link: 'mailto:hello@etags.id',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+62 21 1234 5678',
      link: 'tel:+622112345678',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Jakarta, Indonesia',
      link: null,
    },
  ];

  const reasons = [
    {
      icon: MessageSquare,
      title: 'Sales & Demo',
      description:
        'Ingin mencoba Etags atau mendiskusikan kebutuhan bisnis Anda?',
      email: 'sales@etags.id',
    },
    {
      icon: Mail,
      title: 'Support',
      description:
        'Butuh bantuan teknis atau memiliki pertanyaan tentang produk?',
      email: 'support@etags.id',
    },
    {
      icon: Clock,
      title: 'Partnership',
      description:
        'Tertarik untuk bermitra atau integrasi dengan platform kami?',
      email: 'partnership@etags.id',
    },
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans selection:bg-[#2B4C7E]/20 selection:text-[#0C2340]">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#2B4C7E]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#A8A8A8]/20 blur-[120px]" />
      </div>

      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <MotionH1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0C2340] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Mari <span className="text-[#2B4C7E]">Berbicara</span>
            </MotionH1>
            <MotionP
              className="text-lg text-[#606060] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Punya pertanyaan, ingin demo, atau tertarik bermitra? Tim kami
              siap membantu Anda.
            </MotionP>
          </div>

          {/* Contact Reasons */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {reasons.map((reason, index) => (
              <MotionDiv
                key={reason.title}
                className="bg-white border border-[#A8A8A8]/30 rounded-xl p-6 hover:border-[#2B4C7E]/50 transition-all hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <reason.icon className="w-10 h-10 text-[#2B4C7E] mb-4" />
                <h3 className="text-lg font-bold text-[#0C2340] mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-[#606060] mb-3 leading-relaxed">
                  {reason.description}
                </p>
                <a
                  href={`mailto:${reason.email}`}
                  className="text-sm text-[#2B4C7E] font-medium hover:underline"
                >
                  {reason.email}
                </a>
              </MotionDiv>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Contact Form */}
            <MotionDiv
              className="lg:col-span-2 bg-white border-2 border-[#A8A8A8]/30 rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-[#0C2340] mb-6">
                Kirim Pesan
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0C2340] mb-2">
                      Nama Lengkap *
                    </label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="border-[#A8A8A8]/30 focus:border-[#2B4C7E]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0C2340] mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="border-[#A8A8A8]/30 focus:border-[#2B4C7E]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0C2340] mb-2">
                    Perusahaan
                  </label>
                  <Input
                    type="text"
                    placeholder="Nama Perusahaan"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="border-[#A8A8A8]/30 focus:border-[#2B4C7E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0C2340] mb-2">
                    Subjek *
                  </label>
                  <Input
                    type="text"
                    placeholder="Apa yang ingin Anda diskusikan?"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                    className="border-[#A8A8A8]/30 focus:border-[#2B4C7E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0C2340] mb-2">
                    Pesan *
                  </label>
                  <Textarea
                    placeholder="Ceritakan lebih detail tentang kebutuhan Anda..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    className="border-[#A8A8A8]/30 focus:border-[#2B4C7E] resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#2B4C7E] hover:bg-[#1E3A5F] text-white"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Kirim Pesan
                </Button>
              </form>
            </MotionDiv>

            {/* Contact Info */}
            <MotionDiv
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-linear-to-br from-[#2B4C7E]/5 to-white border-2 border-[#2B4C7E]/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#0C2340] mb-4">
                  Informasi Kontak
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#2B4C7E]/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-[#2B4C7E]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#0C2340] mb-1">
                          {info.title}
                        </div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-sm text-[#606060] hover:text-[#2B4C7E] transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-sm text-[#606060]">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-[#A8A8A8]/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#0C2340] mb-3">
                  Jam Operasional
                </h3>
                <div className="space-y-2 text-sm text-[#606060]">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span className="font-medium text-[#0C2340]">
                      09:00 - 18:00 WIB
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span className="font-medium text-[#0C2340]">
                      09:00 - 14:00 WIB
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu</span>
                    <span className="font-medium text-[#0C2340]">Tutup</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#A8A8A8]/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#0C2340] mb-3">
                  Response Time
                </h3>
                <p className="text-sm text-[#606060] leading-relaxed">
                  Kami berusaha membalas setiap pesan dalam waktu 24 jam pada
                  hari kerja. Untuk masalah urgent, hubungi kami via phone.
                </p>
              </div>
            </MotionDiv>
          </div>

          {/* CTA Section */}
          <MotionDiv
            className="bg-linear-to-r from-[#2B4C7E] to-[#1E3A5F] rounded-2xl p-12 text-center text-white shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Siap Memulai?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Daftar sekarang dan mulai lindungi produk Anda dengan teknologi
              blockchain terdepan. Gratis untuk 1.000 tag pertama!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#2B4C7E] hover:bg-[#A8A8A8]/10 hover:text-white border-2 border-white"
            >
              <a href="/register">Daftar Gratis</a>
            </Button>
          </MotionDiv>
        </div>
      </main>

      <Footer />
    </div>
  );
}
