import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '../layout/Container';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[var(--color-neutral-bg)] to-purple-50 relative overflow-hidden">
      {/* 3D Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--color-primary)] rounded-full opacity-20 blur-xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-[var(--color-accent-orange)] rounded-full opacity-20 blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-[var(--color-accent-green)] rounded-full opacity-20 blur-xl animate-pulse delay-500" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Investing in Knowledge and{' '}
              <span className="text-[var(--color-accent-orange)]">Your Future</span>
            </h1>
            <p className="text-lg text-[var(--color-neutral-gray-500)]">
              Join live cohort-based classes in Web Development, Content Writing, and UI/UX Design.
              Learn from expert mentors and build your tech career.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-4">
              <div>
                <p className="text-3xl font-bold text-[var(--color-primary)]">50+</p>
                <p className="text-sm text-[var(--color-neutral-gray-500)]">Course Contents</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[var(--color-primary)]">1M+</p>
                <p className="text-sm text-[var(--color-neutral-gray-500)]">User Students</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/courses">
                <Button variant="primary" size="lg">
                  Browse Courses <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            {/* Purple Blob Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full opacity-30 blur-3xl transform scale-90" />

            {/* Student Image Placeholder */}
            <div className="relative z-10 bg-white rounded-[var(--radius-card-lg)] shadow-[var(--shadow-card-lg)] p-8 flex items-center justify-center aspect-square">
              <div className="text-center">
                <div className="w-64 h-64 bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-primary)] rounded-full mb-4 mx-auto" />
                <p className="text-[var(--color-neutral-gray-500)] text-sm">
                  [Student with laptop - Replace with actual image]
                </p>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute top-10 -right-4 bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-4 z-20">
              <p className="text-xs font-semibold text-[var(--color-neutral-gray-500)]">Learning Chart</p>
              <div className="flex gap-2 mt-2">
                <div className="w-2 h-16 bg-[var(--color-accent-orange)] rounded" />
                <div className="w-2 h-12 bg-[var(--color-accent-yellow)] rounded" />
                <div className="w-2 h-20 bg-[var(--color-primary)] rounded" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
