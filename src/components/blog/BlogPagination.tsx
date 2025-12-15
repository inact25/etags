'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export function BlogPagination({
  currentPage,
  totalPages,
  hasNext,
  hasPrev,
}: BlogPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const navigateToPage = (page: number) => {
    // Build the URL with search params
    const url = page === 1 ? '/blog' : `/blog?page=${page}`;

    // Navigate to the new page
    router.push(url);

    // Force a refresh to ensure server component re-renders
    router.refresh();

    // Scroll to top smoothly after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 7; // Maximum number of page buttons to show

    if (totalPages <= maxVisible) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage <= 3) {
        // Near the start
        for (let i = 2; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // In the middle
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
      {/* Previous Button */}
      <Button
        variant="outline"
        onClick={() => navigateToPage(currentPage - 1)}
        disabled={!hasPrev}
        className="border-[#A8A8A8]/30 hover:border-[#2B4C7E]/50 hover:bg-[#2B4C7E]/5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Sebelumnya
      </Button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-2 text-[#606060]"
              >
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <button
              key={pageNum}
              onClick={() => navigateToPage(pageNum)}
              className={`
                min-w-[40px] h-[40px] rounded-lg font-medium transition-all
                ${
                  isActive
                    ? 'bg-[#2B4C7E] text-white shadow-lg'
                    : 'bg-white border border-[#A8A8A8]/30 text-[#0C2340] hover:border-[#2B4C7E]/50 hover:bg-[#2B4C7E]/5'
                }
              `}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <Button
        variant="outline"
        onClick={() => navigateToPage(currentPage + 1)}
        disabled={!hasNext}
        className="border-[#A8A8A8]/30 hover:border-[#2B4C7E]/50 hover:bg-[#2B4C7E]/5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Selanjutnya
        <ChevronRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
