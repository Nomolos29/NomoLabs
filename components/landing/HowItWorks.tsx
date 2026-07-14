import React from 'react';
import Container from '../layout/Container';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Enroll in a Cohort',
      description: 'AI matches you with the perfect learning path.',
      tint: 'from-[var(--color-primary)] to-[var(--color-accent)]',
    },
    {
      number: 2,
      title: 'Attend Live Classes',
      description: 'AI-generated content adapts to your pace.',
      tint: 'from-[var(--color-secondary)] to-[var(--color-tertiary)]',
    },
    {
      number: 3,
      title: 'Complete Assignments',
      description: 'Smart assignments adjust difficulty automatically.',
      tint: 'from-[var(--color-accent)] to-[var(--color-primary)]',
    },
    {
      number: 4,
      title: 'Track Your Progress',
      description: 'AI tracks progress and suggests improvements.',
      tint: 'from-[var(--color-tertiary)] to-[var(--color-accent-2)]',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-atmosphere-warm relative overflow-hidden">
      <Container>
        <div className="max-w-2xl mb-14 sm:mb-20 text-center mx-auto">
          <h2 className="mb-4">How It Works</h2>
          <p className="text-[var(--color-foreground-2)] text-base sm:text-lg">
            AI adapts to your learning style for optimal results.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {steps.map((step, index) => {
            const reverse = index % 2 === 1;
            return (
              <div
                key={step.number}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center"
              >
                <div className={reverse ? 'md:order-2' : ''}>
                  <p className="text-sm font-semibold tracking-wide uppercase text-[var(--color-neutral-gray-500)] mb-4">
                    Step {step.number}
                  </p>
                  <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-medium tracking-[-0.03em] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-foreground-2)] text-base sm:text-lg max-w-md leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className={reverse ? 'md:order-1' : ''}>
                  <div
                    className={`aspect-[4/3] rounded-[1.75rem] bg-gradient-to-br ${step.tint} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
                    <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/55 backdrop-blur-md px-5 py-4">
                      <p className="font-[family-name:var(--font-heading)] text-lg font-medium">
                        {step.title}
                      </p>
                      <p className="text-sm text-[var(--color-foreground-2)] mt-1">
                        Step {step.number} of 4
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
