/**
 * Ghost CMS API Service
 * Handles all interactions with Ghost CMS Content API
 */

import axios from 'axios';

// Ghost CMS Types
export interface GhostPost {
  title: string;
  excerpt: string;
  url: string;
  feature_image: string;
  published_at: string;
  slug?: string;
  html?: string;
  custom_excerpt?: string;
}

export interface GhostPagination {
  page: number;
  limit: number;
  pages: number;
  total: number;
  next: number | null;
  prev: number | null;
}

export interface GhostPostsResponse {
  posts: GhostPost[];
  meta: {
    pagination: GhostPagination;
  };
}

// Ghost API Configuration
const GHOST_API_URL = 'https://blog.javapixa.com/ghost/api/content';
const GHOST_API_KEY = process.env.NEXT_PUBLIC_TOKEN;
const POSTS_PER_PAGE = 12;

/**
 * Validates Ghost API configuration
 */
function validateConfig(): void {
  if (!GHOST_API_KEY) {
    throw new Error('GHOST_API_KEY_MISSING');
  }
}

/**
 * Builds Ghost API URL with query parameters
 */
function buildApiUrl(
  endpoint: string,
  params: Record<string, string | number>
): string {
  const url = new URL(`${GHOST_API_URL}/${endpoint}/`);
  url.searchParams.set('key', GHOST_API_KEY!);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, String(value));
  });

  return url.toString();
}

/**
 * Fetches blog posts from Ghost CMS
 * @param page - Page number for pagination (default: 1)
 * @param limit - Number of posts per page (default: 9)
 * @returns Promise with posts and pagination metadata
 * @throws Error if API key is missing or request fails
 */
export async function getGhostPosts(
  page: number = 1,
  limit: number = POSTS_PER_PAGE
): Promise<GhostPostsResponse> {
  try {
    validateConfig();

    const apiUrl = buildApiUrl('posts', {
      limit,
      page,
      fields: 'title,excerpt,url,feature_image,published_at',
    });

    const response = await axios.get<GhostPostsResponse>(apiUrl, {
      timeout: 10000, // 10 second timeout
    });

    return response.data;
  } catch (error) {
    // Re-throw with more context
    if (error instanceof Error) {
      if (error.message === 'GHOST_API_KEY_MISSING') {
        throw new Error('Ghost API key is not configured');
      }

      if (axios.isAxiosError(error)) {
        if (error.code === 'ENOTFOUND' || error.code === 'ETIMEDOUT') {
          throw new Error('Unable to connect to Ghost CMS server');
        }

        if (error.response?.status === 401) {
          throw new Error('Invalid Ghost API key');
        }

        if (error.response?.status === 404) {
          throw new Error('Ghost API endpoint not found');
        }
      }
    }

    throw new Error('Failed to fetch blog posts from Ghost CMS');
  }
}

/**
 * Fetches a single post by slug
 * @param slug - Post slug
 * @returns Promise with post data
 */
export async function getGhostPostBySlug(
  slug: string
): Promise<GhostPost | null> {
  try {
    validateConfig();

    const apiUrl = buildApiUrl('posts/slug', {
      slug,
      fields: 'title,excerpt,url,feature_image,published_at,html',
    });

    const response = await axios.get<{ posts: GhostPost[] }>(apiUrl, {
      timeout: 10000,
    });

    return response.data.posts[0] || null;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`Failed to fetch post by slug: ${slug}`, error);
    }
    return null;
  }
}

/**
 * Gets user-friendly error message from Ghost API error
 */
export function getGhostErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    if (error.message === 'Ghost API key is not configured') {
      return 'Konfigurasi blog belum lengkap. Mohon hubungi administrator.';
    }

    if (error.message === 'Unable to connect to Ghost CMS server') {
      return 'Tidak dapat terhubung ke server blog. Periksa koneksi internet Anda.';
    }

    if (error.message === 'Invalid Ghost API key') {
      return 'Konfigurasi API blog tidak valid. Mohon hubungi administrator.';
    }

    if (error.message === 'Ghost API endpoint not found') {
      return 'Endpoint blog tidak ditemukan. Mohon hubungi administrator.';
    }
  }

  return 'Gagal memuat artikel blog. Silakan coba lagi nanti.';
}

/**
 * Configuration export for reusability
 */
export const GHOST_CONFIG = {
  POSTS_PER_PAGE,
  API_URL: GHOST_API_URL,
} as const;
