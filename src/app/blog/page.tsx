import { Metadata } from 'next';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { BlogPagination } from '@/components/blog/BlogPagination';
import axios from 'axios';

export const metadata: Metadata = {
  title: 'Blog - Etags',
  description:
    'Insights, berita terbaru, dan artikel mendalam tentang blockchain, product authentication, dan teknologi Web3.',
};

interface GhostPagination {
  page: number;
  limit: number;
  pages: number;
  total: number;
  next: number | null;
  prev: number | null;
}

interface GhostResponse {
  posts: Array<{
    title: string;
    excerpt: string;
    url: string;
    feature_image: string;
    published_at: string;
  }>;
  meta: {
    pagination: GhostPagination;
  };
}

const POSTS_PER_PAGE = 12;

const getPostData = async (page: number = 1): Promise<GhostResponse> => {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  const url = process.env.NEXT_PUBLIC_GHOST_URL;
  if (!token) {
    throw new Error('NEXT_PUBLIC_TOKEN is not set');
  }
  const result = await axios.get<GhostResponse>(
    `https://${url}/ghost/api/content/posts/?key=${token}&limit=${POSTS_PER_PAGE}&page=${page}&fields=title,excerpt,url,feature_image,published_at&include=tags,authors`
  );
  return result.data;
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  let posts: Array<{
    title: string;
    excerpt: string;
    url: string;
    feature_image: string;
    published_at: string;
  }> = [];
  let pagination: GhostPagination | null = null;
  let error = null;

  try {
    const data = await getPostData(currentPage);
    posts = data.posts || [];
    pagination = data.meta?.pagination || null;
  } catch (e) {
    console.error('Failed to fetch blog posts:', e);
    error = 'Gagal memuat artikel blog. Silakan coba lagi nanti.';
  }

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
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0C2340] mb-6">
              Blog <span className="text-[#2B4C7E]">Etags</span>
            </h1>
            <p className="text-lg text-[#606060] leading-relaxed">
              Insights, berita terbaru, dan artikel mendalam tentang blockchain,
              product authentication, dan teknologi Web3.
            </p>
          </div>

          {/* Blog Grid */}
          {error ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center max-w-2xl mx-auto">
              <p className="text-red-600">{error}</p>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
