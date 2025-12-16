/**
 * Contact Page Constants
 */

import { Mail, MapPin, Phone, MessageSquare, Clock } from 'lucide-react';

export const CONTACT_INFO = [
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
] as const;

export const CONTACT_REASONS = [
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
    description: 'Tertarik untuk bermitra atau integrasi dengan platform kami?',
    email: 'partnership@etags.id',
  },
] as const;

export const CONTACT_HOURS = {
  weekday: { days: 'Senin - Jumat', hours: '09:00 - 18:00 WIB' },
  saturday: { days: 'Sabtu', hours: '09:00 - 14:00 WIB' },
  sunday: { days: 'Minggu', hours: 'Tutup' },
} as const;

export const RESPONSE_TIME =
  'Kami berusaha membalas setiap pesan dalam waktu 24 jam pada hari kerja. Untuk masalah urgent, hubungi kami via phone.' as const;
