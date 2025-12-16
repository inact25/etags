import { Metadata } from 'next';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import {
  AboutHero,
  MissionVision,
  ValuesSection,
  TechnologyStack,
  TeamSection,
  StatsSection,
} from '@/components/about';

export const metadata: Metadata = {
  title: 'About Us - Etags',
  description:
    'Learn about Etags, our mission to secure product authenticity with blockchain technology, and meet the team behind the platform.',
  openGraph: {
    title: 'About Us - Etags',
    description:
      'Platform verifikasi produk berbasis blockchain yang mengamankan rantai pasokan.',
  },
};

export default function AboutPage() {
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
          <AboutHero />
          <MissionVision />
          <ValuesSection />
          <TechnologyStack />
          <TeamSection />
          <StatsSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
