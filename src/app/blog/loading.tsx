import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';

export default function BlogLoading() {
  return (
    <div className="relative min-h-screen bg-white font-sans">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#2B4C7E]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#A8A8A8]/20 blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero Section Skeleton */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="h-12 bg-[#A8A8A8]/20 rounded-lg w-64 mx-auto mb-6 animate-pulse" />
            <div className="h-6 bg-[#A8A8A8]/20 rounded-lg w-96 mx-auto animate-pulse" />
          </div>

          {/* Blog Grid Skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white border border-[#A8A8A8]/30 rounded-xl overflow-hidden"
              >
                {/* Image Skeleton */}
                <div className="h-48 bg-[#A8A8A8]/20 animate-pulse" />

                {/* Content Skeleton */}
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-[#A8A8A8]/20 rounded w-32 animate-pulse" />
                  <div className="h-6 bg-[#A8A8A8]/20 rounded w-full animate-pulse" />
                  <div className="h-4 bg-[#A8A8A8]/20 rounded w-full animate-pulse" />
                  <div className="h-4 bg-[#A8A8A8]/20 rounded w-3/4 animate-pulse" />
                  <div className="h-4 bg-[#A8A8A8]/20 rounded w-24 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
