import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Button from '@/components/common/Button';
import Container from '@/components/layout/Container';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-neutral-bg)] to-purple-50 flex items-center justify-center">
      <Container>
        <div className="text-center">
          {/* 404 Illustration */}
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-[var(--color-primary)] opacity-20">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full opacity-30 blur-xl animate-pulse" />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
              Let&apos;s get you back on track with your learning journey.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="primary" size="lg">
                  <Home size={20} />
                  Go Home
                </Button>
              </Link>
              <Link href="/courses">
                <Button variant="outline" size="lg">
                  <Search size={20} />
                  Browse Courses
                </Button>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4">Quick Links:</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/courses" className="text-[var(--color-primary)] hover:underline">
                  Courses
                </Link>
                <Link href="/mentors" className="text-[var(--color-primary)] hover:underline">
                  Mentors
                </Link>
                <Link href="/pricing" className="text-[var(--color-primary)] hover:underline">
                  Pricing
                </Link>
                <Link href="/about" className="text-[var(--color-primary)] hover:underline">
                  About
                </Link>
                <Link href="/contact" className="text-[var(--color-primary)] hover:underline">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--color-accent-orange)] rounded-full opacity-20 blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-[var(--color-accent-green)] rounded-full opacity-20 blur-xl animate-pulse delay-1000" />
        </div>
      </Container>
    </div>
  );
}