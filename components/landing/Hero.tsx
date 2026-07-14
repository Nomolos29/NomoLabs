import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '../layout/Container';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-atmosphere">
      {/* Full-bleed visual plane */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -right-[10%] top-0 h-full w-[58%] hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-neutral-bg)] via-transparent to-transparent z-10" />
          <div className="h-full w-full bg-[linear-gradient(145deg,var(--color-primary)_0%,var(--color-accent)_42%,var(--color-secondary)_78%,var(--color-tertiary)_100%)] opacity-90 animate-soft-float" />
          <div className="absolute inset-[12%] rounded-[2rem] border border-white/40 bg-white/15 backdrop-blur-[2px]" />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 min-h-[min(88vh,820px)] items-center py-16 sm:py-20 lg:py-24">
          <div className="lg:col-span-6 xl:col-span-5 space-y-7 sm:space-y-8 text-center lg:text-left">
            <p className="animate-fade-up font-[family-name:var(--font-heading)] text-[clamp(3rem,7vw,5rem)] font-medium tracking-[-0.03em] leading-[1.05] text-[var(--color-neutral-gray-900)]">
              Nomolabs
            </p>

            <h1 className="animate-fade-up-delay text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.15] text-[var(--color-neutral-gray-900)]">
              Investing in Knowledge and{' '}
              <span className="double-underline">Your Future</span>
            </h1>

            <p className="animate-fade-up-delay-2 text-base sm:text-lg text-[var(--color-foreground-2)] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Join live cohort-based classes in Web Development, Content Writing, and UI/UX Design.
              Learn from expert mentors and build your tech career.
            </p>

            <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <Link href="/courses" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Browse Courses <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile / tablet visual */}
          <div className="lg:hidden relative mx-auto w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,var(--color-primary),var(--color-accent),var(--color-secondary),var(--color-tertiary))]" />
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-[var(--color-neutral-gray-900)]/80 text-sm font-medium bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                Live cohort learning
              </p>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-6 xl:col-span-7" aria-hidden />
        </div>
      </Container>

      {/* Stats strip — below first viewport composition */}
      <div className="relative z-10 border-t border-[var(--color-neutral-bg-3)] bg-[color-mix(in_srgb,var(--color-neutral-white)_55%,transparent)] backdrop-blur-sm">
        <Container>
          <div className="flex flex-wrap justify-center lg:justify-start gap-10 sm:gap-16 py-8 sm:py-10">
            <div>
              <p className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-medium tracking-tight">
                50+
              </p>
              <p className="text-sm text-[var(--color-neutral-gray-500)] mt-1">Course Contents</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-medium tracking-tight">
                1M+
              </p>
              <p className="text-sm text-[var(--color-neutral-gray-500)] mt-1">User Students</p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
