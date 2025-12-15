'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  validateContactForm,
  sanitizeContactForm,
  type ContactFormData,
  type ValidationError,
} from '@/lib/validations/contact';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset field errors
    setFieldErrors({});
    setIsSubmitting(true);

    try {
      // Client-side validation
      const sanitizedData = sanitizeContactForm(formData);
      const validation = validateContactForm(sanitizedData);

      if (!validation.isValid) {
        // Convert validation errors to field-keyed object
        const errors: Record<string, string> = {};
        validation.errors.forEach((err: ValidationError) => {
          errors[err.field] = err.message;
        });
        setFieldErrors(errors);

        toast.error('Validasi Gagal', {
          description: 'Mohon periksa kembali form Anda',
        });

        setIsSubmitting(false);
        return;
      }

      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle specific error codes
        if (result.code === 'RATE_LIMIT_EXCEEDED') {
          toast.error('Terlalu Banyak Permintaan', {
            description:
              result.error || 'Silakan coba lagi dalam beberapa menit',
          });
        } else if (result.code === 'VALIDATION_ERROR' && result.errors) {
          // Server-side validation errors
          const errors: Record<string, string> = {};
          result.errors.forEach((err: ValidationError) => {
            errors[err.field] = err.message;
          });
          setFieldErrors(errors);

          toast.error('Validasi Gagal', {
            description: result.error || 'Data form tidak valid',
          });
        } else {
          toast.error('Gagal Mengirim Pesan', {
            description: result.error || 'Terjadi kesalahan server',
          });
        }

        setIsSubmitting(false);
        return;
      }

      // Success
      toast.success('Pesan Terkirim!', {
        description:
          result.message ||
          'Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      // Network or unexpected errors
      if (error instanceof TypeError && error.message.includes('fetch')) {
        toast.error('Koneksi Bermasalah', {
          description:
            'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.',
        });
      } else {
        toast.error('Terjadi Kesalahan', {
          description:
            'Silakan coba lagi atau hubungi kami via email di hello@etags.id',
        });
      }

      // Log error in development only
      if (process.env.NODE_ENV === 'development') {
        console.error(
          'Contact form error:',
          error instanceof Error ? error.message : 'Unknown error'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear field error when user starts typing
  const handleFieldChange = (field: keyof ContactFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (fieldErrors[field]) {
      setFieldErrors({ ...fieldErrors, [field]: '' });
    }
  };

  return (
    <motion.div
      className="bg-white border-2 border-[#2B4C7E]/20 rounded-3xl p-8 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-[#0C2340] mb-6">
        Kirim Pesan Kepada Kami
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-[#0C2340] mb-2"
          >
            Nama Lengkap *
          </label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => handleFieldChange('name', e.target.value)}
            className={`${
              fieldErrors.name
                ? 'border-red-500 focus:ring-red-500'
                : 'border-[#2B4C7E]/30 focus:ring-[#2B4C7E]'
            }`}
            disabled={isSubmitting}
            required
          />
          {fieldErrors.name && (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-[#0C2340] mb-2"
          >
            Email *
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
            className={`${
              fieldErrors.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-[#2B4C7E]/30 focus:ring-[#2B4C7E]'
            }`}
            disabled={isSubmitting}
            required
          />
          {fieldErrors.email && (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
          )}
        </div>

        {/* Company Field */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-[#0C2340] mb-2"
          >
            Perusahaan
          </label>
          <Input
            id="company"
            type="text"
            placeholder="Company Inc."
            value={formData.company}
            onChange={(e) => handleFieldChange('company', e.target.value)}
            className="border-[#2B4C7E]/30 focus:ring-[#2B4C7E]"
            disabled={isSubmitting}
          />
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-[#0C2340] mb-2"
          >
            Subjek *
          </label>
          <Input
            id="subject"
            type="text"
            placeholder="Ingin diskusi tentang..."
            value={formData.subject}
            onChange={(e) => handleFieldChange('subject', e.target.value)}
            className={`${
              fieldErrors.subject
                ? 'border-red-500 focus:ring-red-500'
                : 'border-[#2B4C7E]/30 focus:ring-[#2B4C7E]'
            }`}
            disabled={isSubmitting}
            required
          />
          {fieldErrors.subject && (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.subject}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-[#0C2340] mb-2"
          >
            Pesan *
          </label>
          <Textarea
            id="message"
            placeholder="Ceritakan kebutuhan Anda..."
            rows={6}
            value={formData.message}
            onChange={(e) => handleFieldChange('message', e.target.value)}
            className={`${
              fieldErrors.message
                ? 'border-red-500 focus:ring-red-500'
                : 'border-[#2B4C7E]/30 focus:ring-[#2B4C7E]'
            } resize-none`}
            disabled={isSubmitting}
            required
          />
          {fieldErrors.message && (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-[#2B4C7E] hover:bg-[#1E3A5F] text-white py-6 text-lg font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin mr-2">⏳</span>
              Mengirim...
            </>
          ) : (
            <>
              <Send className="mr-2" size={20} />
              Kirim Pesan
            </>
          )}
        </Button>

        <p className="text-sm text-[#606060] text-center">
          * Wajib diisi. Kami akan merespons dalam 24 jam pada hari kerja.
        </p>
      </form>
    </motion.div>
  );
}
