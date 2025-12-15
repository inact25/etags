import { Metadata } from 'next';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import {
  CareersHero,
  ValuesCards,
  BenefitsGrid,
  PositionsList,
  CareersCTA,
} from '@/components/careers';

export const metadata: Metadata = {
  title: 'Careers - Etags',
  description:
    'Join our team building blockchain solutions for product authentication. Remote-first, work-life balance, and cutting-edge technology. View open positions.',
  keywords: [
    'careers',
    'jobs',
    'blockchain jobs',
    'remote work',
    'web3 careers',
    'etags careers',
  ],
  openGraph: {
    title: 'Careers - Etags',
    description:
      'Build your career with us. Remote-first, work-life balance, latest tech.',
  },
};

export default function CareersPage() {
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
          <CareersHero />
          <ValuesCards />
          <BenefitsGrid />
          <PositionsList />
          <CareersCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
