import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '../layout/Container';
import Button from '../common/Button';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] relative overflow-hidden">
      {/* 3D Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10 blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[var(--color-accent-orange)] rounded-full opacity-20 blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[var(--color-accent-green)] rounded-full opacity-15 blur-2xl animate-pulse delay-500" />

      <Container>
        <div className="text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Join our next cohort and transform your career with live, interactive learning.
          </p>
          <Link href="/courses">
            <Button variant="secondary" size="lg" className="shadow-[var(--shadow-card-lg)]">
              Enroll Now <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
