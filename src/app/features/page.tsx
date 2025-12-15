import { Metadata } from 'next';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import {
  FeaturesHero,
  FeaturesList,
  BenefitsSection,
  IntegrationsGrid,
  FeaturesCTA,
} from '@/components/features';

export const metadata: Metadata = {
  title: 'Features - Etags',
  description:
    'Complete blockchain-based product authentication platform with AI fraud detection, NFT collectibles, geospatial tracking, and real-time analytics.',
  keywords: [
    'blockchain authentication',
    'AI fraud detection',
    'NFT collectibles',
    'product verification',
    'anti-counterfeiting',
  ],
  openGraph: {
    title: 'Features - Etags',
    description:
      'All-in-one platform with blockchain, AI, and analytics to protect your brand from counterfeiting.',
  },
};

export default function FeaturesPage() {
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
          <FeaturesHero />
          <FeaturesList />
          <BenefitsSection />
          <IntegrationsGrid />
          <FeaturesCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
