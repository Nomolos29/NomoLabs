import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '../layout/Container';
import Button from '../common/Button';

const CTA = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-[var(--color-neutral-gray-900)]">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 50% at 15% 20%, color-mix(in srgb, var(--color-primary) 28%, transparent), transparent), radial-gradient(ellipse 50% 40% at 85% 80%, color-mix(in srgb, var(--color-secondary) 22%, transparent), transparent)',
        }}
      />

      <Container>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-1">
          <h2 className="text-white mb-5 text-[clamp(2.25rem,5vw,3.5rem)]">
            Ready to Start{' '}
            <span className="double-underline text-white [&::after]:bg-[var(--color-tertiary)]">
              Learning?
            </span>
          </h2>
          <p className="text-base sm:text-xl text-white/75 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Join our next cohort and transform your career with live, interactive learning.
          </p>
          <Link href="/courses" className="inline-block w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Enroll Now <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
