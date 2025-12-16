import { Metadata } from 'next';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { BlogPagination } from '@/components/blog/BlogPagination';
import { BlogError } from '@/components/blog/BlogError';
import {
  getGhostPosts,
  getGhostErrorMessage,
  type GhostPost,
  type GhostPagination,
} from '@/lib/services/ghost';

export const metadata: Metadata = {
  title: 'Blog - Etags',
  description:
    'Insights, berita terbaru, dan artikel mendalam tentang blockchain, product authentication, dan teknologi Web3.',
  keywords: [
    'blog',
    'blockchain',
    'product authentication',
    'web3',
    'etags insights',
  ],
  openGraph: {
    title: 'Blog - Etags',
    description:
      'Insights tentang blockchain, product authentication, dan teknologi Web3.',
  },
};

// Force dynamic rendering to handle pagination correctly
export const dynamic = 'force-dynamic';
export const revalidate = 60; // Revalidate every 60 seconds

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  let posts: GhostPost[] = [];
  let pagination: GhostPagination | null = null;
  let error: string | null = null;

  try {
    const data = await getGhostPosts(currentPage);
    posts = data.posts || [];
    pagination = data.meta?.pagination || null;
  } catch (e) {
    // Log error details in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to fetch blog posts:', e);
    }

    error = getGhostErrorMessage(e);
  }

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
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0C2340] mb-6">
              Blog <span className="text-[#2B4C7E]">Etags</span>
            </h1>
            <p className="text-lg text-[#606060] leading-relaxed">
              Insights, berita terbaru, dan artikel mendalam tentang blockchain,
              product authentication, dan teknologi Web3.
            </p>
          </div>

          {/* Error State */}
          {error ? (
            <BlogError message={error} />
          ) : (
            <>
              {/* Blog Grid */}
              <BlogGrid posts={posts} />

              {/* Pagination */}
              {pagination && pagination.pages > 1 && (
                <BlogPagination
                  currentPage={pagination.page}
                  totalPages={pagination.pages}
                  hasNext={pagination.next !== null}
                  hasPrev={pagination.prev !== null}
                />
              )}

              {/* Empty State */}
              {posts.length === 0 && !error && (
                <div className="text-center py-16">
                  <p className="text-[#606060] text-lg">
                    Belum ada artikel yang dipublikasikan.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
