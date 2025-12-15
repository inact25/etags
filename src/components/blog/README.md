# Blog Component

This directory contains components for the blog feature that integrates with Ghost CMS.

## Components

### BlogGrid

Displays a grid of blog posts fetched from Ghost CMS API.

**Props:**

- `posts: BlogPost[]` - Array of blog posts from Ghost API

**BlogPost Interface:**

```typescript
interface BlogPost {
  title: string;
  excerpt: string;
  url: string;
  feature_image: string;
  published_at: string;
}
```

### BlogPagination

Pagination controls for navigating through blog posts.

**Props:**

- `currentPage: number` - Current active page
- `totalPages: number` - Total number of pages
- `hasNext: boolean` - Whether there's a next page
- `hasPrev: boolean` - Whether there's a previous page

**Features:**

- Smart page number display with ellipsis
- Previous/Next navigation buttons
- Active page highlighting
- URL-based navigation with search params
- Smooth scroll to top on page change

## Setup

1. **Get Ghost Content API Key:**
   - Go to your Ghost admin panel
   - Navigate to Settings → Integrations
   - Create a new Custom Integration or use existing one
   - Copy the Content API Key

2. **Set Environment Variable:**
   Add to your `.env` or `.env.local`:

   ```
   NEXT_PUBLIC_TOKEN=your_ghost_content_api_key_here
   ```

3. **Configure API Endpoint:**
   The blog page fetches from: `https://blog.javapixa.com/ghost/api/content/posts/`

   If you want to use a different Ghost blog, update the URL in `src/app/blog/page.tsx`:

   ```typescript
   const result = await axios.get(
     `https://your-blog-domain.com/ghost/api/content/posts/?key=${token}&limit=6&fields=title,excerpt,url,feature_image,published_at`
   );
   ```

## Features

- ✅ Server-side rendering for better SEO
- ✅ Loading skeleton during data fetch
- ✅ Error handling with user-friendly messages
- ✅ Responsive grid layout (1/2/3 columns)
- ✅ Featured image support with fallback
- ✅ Date formatting in Indonesian locale
- ✅ Hover animations and transitions
- ✅ External link handling (opens in new tab)
- ✅ Line clamping for title and excerpt
- ✅ Pagination with Ghost CMS API
- ✅ URL-based page navigation
- ✅ Smart pagination controls with ellipsis

## Customization

### Change Number of Posts Per Page

Edit the `POSTS_PER_PAGE` constant in `src/app/blog/page.tsx`:

```typescript
const POSTS_PER_PAGE = 9; // Change to your desired number
```

This will affect:

- Number of posts shown per page
- Pagination page count calculation
- API request limit parameter

### Add More Fields

Add fields to the `fields` parameter:

```typescript
`...&fields=title,excerpt,url,feature_image,published_at,tags,authors`;
```

### Styling

All components use the project's design system colors:

- Primary: `#2B4C7E`
- Dark: `#0C2340`
- Medium: `#1E3A5F`
- Gray: `#A8A8A8`
- Text: `#606060`

## API Reference

Ghost Content API documentation: https://ghost.org/docs/content-api/

**Endpoint:** `GET /ghost/api/content/posts/`

**Query Parameters:**

- `key` (required): Content API Key
- `limit`: Number of posts to return per page (default: 15)
- `page`: Page number for pagination (default: 1)
- `fields`: Comma-separated list of fields to include
- `filter`: Filter posts (e.g., `tag:blockchain`)
- `order`: Sort order (e.g., `published_at DESC`)
- `include`: Include related data (e.g., `tags,authors`)

**Response Format:**

```json
{
  "posts": [...],
  "meta": {
    "pagination": {
      "page": 1,
      "limit": 9,
      "pages": 10,
      "total": 87,
      "next": 2,
      "prev": null
    }
  }
}
```

## Troubleshooting

### "Gagal memuat artikel blog"

- Check if `NEXT_PUBLIC_TOKEN` is set in environment variables
- Verify the Ghost API endpoint is accessible
- Check if the Content API Key is valid
- Ensure CORS is configured on Ghost admin

### No posts showing

- Verify posts are published in Ghost (not drafts)
- Check the API response in browser network tab
- Try increasing the `limit` parameter

### Images not loading

- Verify `feature_image` URLs are accessible
- Check if Ghost CDN/storage is configured correctly
- The fallback UI will show if image URL is invalid
