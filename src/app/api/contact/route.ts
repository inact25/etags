import { NextRequest, NextResponse } from 'next/server';
import {
  validateContactForm,
  sanitizeContactForm,
  ContactFormData,
} from '@/lib/validations/contact';
import { checkRateLimit } from '@/lib/rate-limit';

/**
 * Rate limiter configuration for contact form submissions
 * Allows 3 requests per 15 minutes per IP
 */
const RATE_LIMIT_CONFIG = {
  maxRequests: 3, // 3 requests
  windowMs: 15 * 60 * 1000, // 15 minutes
};

/**
 * POST /api/contact
 *
 * Handles contact form submissions with comprehensive validation,
 * rate limiting, and error handling.
 *
 * @param request - Next.js request object
 * @returns JSON response with success/error status
 */
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const identifier =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'anonymous';
    const rateLimitResult = checkRateLimit(identifier, RATE_LIMIT_CONFIG);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Terlalu banyak permintaan. Silakan coba lagi dalam beberapa menit.',
          code: 'RATE_LIMIT_EXCEEDED',
        },
        {
          status: 429,
          headers: {
            'Retry-After': rateLimitResult.retryAfter!.toString(),
            'X-RateLimit-Limit': RATE_LIMIT_CONFIG.maxRequests.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
          },
        }
      );
    }

    // Parse request body
    let body: ContactFormData;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: 'Format request tidak valid',
          code: 'INVALID_JSON',
        },
        { status: 400 }
      );
    }

    // Validate required fields exist
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        {
          success: false,
          error: 'Data form tidak lengkap',
          code: 'MISSING_FIELDS',
        },
        { status: 400 }
      );
    }

    // Sanitize input
    const sanitizedData = sanitizeContactForm(body);

    // Validate form data
    const validation = validateContactForm(sanitizedData);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validasi form gagal',
          code: 'VALIDATION_ERROR',
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    // TODO: Implement actual email sending or database storage
    // Examples:
    // 1. Send email via SendGrid, Resend, or similar service
    // 2. Store in database for follow-up
    // 3. Send to Slack/Discord webhook for notifications

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Log successful submission (without PII) in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submission processed successfully');
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message:
          'Pesan Anda telah diterima. Kami akan menghubungi Anda segera.',
      },
      { status: 200 }
    );
  } catch (error) {
    // Log error without exposing sensitive details
    if (process.env.NODE_ENV === 'development') {
      console.error(
        'Contact form API error:',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }

    // Generic error response for security
    return NextResponse.json(
      {
        success: false,
        error:
          'Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.',
        code: 'INTERNAL_ERROR',
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact
 *
 * Returns API information and validation rules
 */
export async function GET() {
  return NextResponse.json({
    endpoint: '/api/contact',
    method: 'POST',
    description: 'Submit contact form',
    rateLimit: '3 requests per 15 minutes',
    validation: {
      name: 'Required, 2-100 characters, letters only',
      email: 'Required, valid email format',
      company: 'Optional, 2-100 characters',
      subject: 'Required, 5-200 characters',
      message: 'Required, 20-5000 characters',
    },
  });
}
