import { Metadata } from 'next';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import {
  ShowcaseHero,
  AchievementStats,
  ShowcaseGrid,
  TestimonialsSection,
  ShowcaseCTA,
} from '@/components/showcase';

export const metadata: Metadata = {
  title: 'Success Stories - Etags',
  description:
    'See how leading brands use Etags to protect their products from counterfeiting across various industries including fashion, luxury goods, pharmaceutical, and electronics.',
  keywords: [
    'success stories',
    'case studies',
    'testimonials',
    'brand protection',
    'anti-counterfeiting',
  ],
  openGraph: {
    title: 'Success Stories - Etags',
    description:
      '100+ brands trust Etags to protect their products from counterfeiting.',
  },
};

export default function ShowcasePage() {
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
          <ShowcaseHero />
          <AchievementStats />
          <ShowcaseGrid />
          <TestimonialsSection />
          <ShowcaseCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
