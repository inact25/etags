'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';

const MotionDiv = motion.div;

interface BlogPost {
  title: string;
  excerpt: string;
  url: string;
  feature_image: string;
  published_at: string;
}

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="bg-[#A8A8A8]/10 border border-[#A8A8A8]/30 rounded-xl p-12 text-center">
        <p className="text-[#606060] text-lg">
          Belum ada artikel yang tersedia saat ini. Kembali lagi nanti untuk
          konten terbaru!
        </p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      {posts.map((post, index) => (
        <MotionDiv
          key={post.url}
          className="group bg-white border border-[#A8A8A8]/30 rounded-xl overflow-hidden hover:border-[#2B4C7E]/50 transition-all hover:shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Featured Image */}
          <div className="relative h-48 bg-[#A8A8A8]/20 overflow-hidden">
            {post.feature_image ? (
              <Image
                src={post.feature_image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#A8A8A8] text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-[#2B4C7E]/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#2B4C7E]">E</span>
                  </div>
                  <p className="text-sm">Etags Blog</p>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-[#606060] mb-3">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.published_at)}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#0C2340] mb-3 line-clamp-2 group-hover:text-[#2B4C7E] transition-colors">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-[#606060] text-sm leading-relaxed mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Read More Link */}
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2B4C7E] font-medium text-sm hover:gap-3 transition-all"
            >
              Baca Selengkapnya
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </MotionDiv>
      ))}
    </div>
  );
}
