/**
 * Common Types
 */

import { LucideIcon } from 'lucide-react';

export interface IconCardItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  github: string;
}

export interface TechStackItem {
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface PricingPlan {
  name: string;
  icon: LucideIcon;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted: boolean;
  color: string;
  borderColor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ShowcaseItem {
  icon: LucideIcon;
  industry: string;
  brand: string;
  description: string;
  stats: {
    tags?: string;
    scans?: string;
    fraudDetected?: string;
    nftMinted?: string;
    recalled?: string;
    locations?: string;
    alertsSent?: string;
  };
  color: string;
  bg: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  company: string;
  industry: string;
}

export interface JobPosition {
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
}

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  value: string;
  link: string | null;
}

export interface ContactReason {
  icon: LucideIcon;
  title: string;
  description: string;
  email: string;
}
