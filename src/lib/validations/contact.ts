/**
 * Contact form validation schemas and utilities
 */

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

export interface ValidationError {
  field: keyof ContactFormData;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

/**
 * Email validation regex (RFC 5322 simplified)
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Sanitize string input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 5000); // Limit length
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  return EMAIL_REGEX.test(email.toLowerCase());
}

/**
 * Validate name (2-100 characters, letters, spaces, hyphens, apostrophes)
 */
export function isValidName(name: string): boolean {
  if (!name || name.length < 2 || name.length > 100) return false;
  return /^[a-zA-Z\s\-']+$/.test(name);
}

/**
 * Validate subject (5-200 characters)
 */
export function isValidSubject(subject: string): boolean {
  if (!subject) return false;
  const trimmed = subject.trim();
  return trimmed.length >= 5 && trimmed.length <= 200;
}

/**
 * Validate message (20-5000 characters)
 */
export function isValidMessage(message: string): boolean {
  if (!message) return false;
  const trimmed = message.trim();
  return trimmed.length >= 20 && trimmed.length <= 5000;
}

/**
 * Validate company name (optional, 2-100 characters if provided)
 */
export function isValidCompany(company: string | undefined): boolean {
  if (!company || company.trim() === '') return true; // Optional field
  return company.trim().length >= 2 && company.trim().length <= 100;
}

/**
 * Comprehensive form validation
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: ValidationError[] = [];

  // Validate name
  if (!data.name || data.name.trim() === '') {
    errors.push({ field: 'name', message: 'Nama lengkap wajib diisi' });
  } else if (!isValidName(data.name)) {
    errors.push({
      field: 'name',
      message: 'Nama harus 2-100 karakter dan hanya berisi huruf',
    });
  }

  // Validate email
  if (!data.email || data.email.trim() === '') {
    errors.push({ field: 'email', message: 'Email wajib diisi' });
  } else if (!isValidEmail(data.email)) {
    errors.push({ field: 'email', message: 'Format email tidak valid' });
  }

  // Validate company (optional)
  if (data.company && !isValidCompany(data.company)) {
    errors.push({
      field: 'company',
      message: 'Nama perusahaan harus 2-100 karakter',
    });
  }

  // Validate subject
  if (!data.subject || data.subject.trim() === '') {
    errors.push({ field: 'subject', message: 'Subjek wajib diisi' });
  } else if (!isValidSubject(data.subject)) {
    errors.push({
      field: 'subject',
      message: 'Subjek harus 5-200 karakter',
    });
  }

  // Validate message
  if (!data.message || data.message.trim() === '') {
    errors.push({ field: 'message', message: 'Pesan wajib diisi' });
  } else if (!isValidMessage(data.message)) {
    errors.push({
      field: 'message',
      message: 'Pesan harus 20-5000 karakter',
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Sanitize contact form data
 */
export function sanitizeContactForm(data: ContactFormData): ContactFormData {
  return {
    name: sanitizeInput(data.name),
    email: sanitizeInput(data.email.toLowerCase()),
    company: data.company ? sanitizeInput(data.company) : undefined,
    subject: sanitizeInput(data.subject),
    message: sanitizeInput(data.message),
  };
}
