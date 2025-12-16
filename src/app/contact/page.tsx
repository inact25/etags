import { Metadata } from 'next';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import {
  ContactHero,
  ContactReasons,
  ContactForm,
  ContactInfo,
  ContactCTA,
} from '@/components/contact';

export const metadata: Metadata = {
  title: 'Contact Us - Etags',
  description:
    'Get in touch with Etags team. We are here to help with sales inquiries, technical support, and partnership opportunities.',
  keywords: [
    'contact',
    'support',
    'sales',
    'partnership',
    'demo',
    'etags contact',
  ],
  openGraph: {
    title: 'Contact Us - Etags',
    description:
      'Have questions or want a demo? Our team is ready to help you.',
  },
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white font-sans selection:bg-[#2B4C7E]/20 selection:text-[#0C2340]">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#2B4C7E]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#A8A8A8]/20 blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <ContactHero />
          <ContactReasons />

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <ContactInfo />
          </div>

          <ContactCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
