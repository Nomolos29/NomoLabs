import React from 'react';
import Container from '../layout/Container';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'David Okafor',
      course: 'Web Development',
      quote:
        'The live cohort format made all the difference. I learned so much more than I would have from pre-recorded courses. The instructors were always available to help.',
      tint: 'bg-[var(--color-primary)]',
    },
    {
      id: 2,
      name: 'Chioma Nwankwo',
      course: 'UI/UX Design',
      quote:
        'Nomolabs helped me transition from a completely different field into design. The hands-on projects built my portfolio and confidence.',
      tint: 'bg-[var(--color-tertiary)]',
    },
    {
      id: 3,
      name: 'Ahmed Ibrahim',
      course: 'Content Writing',
      quote:
        "The feedback from instructors and peers was invaluable. I'm now a full-time content writer thanks to the skills I gained here.",
      tint: 'bg-[var(--color-secondary)]',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[var(--color-neutral-white)] overflow-hidden">
      <Container>
        <div className="max-w-2xl mb-12 sm:mb-16 text-center mx-auto">
          <h2 className="mb-4">What Our Students Say</h2>
          <p className="text-[var(--color-foreground-2)] text-base sm:text-lg">
            Hear from students who have transformed their careers with Nomolabs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.id}
              className="rounded-[1.5rem] bg-[var(--color-neutral-bg)] p-7 sm:p-8 flex flex-col"
            >
              <p className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-medium tracking-[-0.02em] leading-snug text-[var(--color-neutral-gray-900)] mb-8 flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3 mt-auto">
                <div className={`w-11 h-11 rounded-full ${testimonial.tint} shrink-0`} />
                <div>
                  <cite className="not-italic font-semibold text-[var(--color-neutral-gray-900)]">
                    {testimonial.name}
                  </cite>
                  <p className="text-sm text-[var(--color-neutral-gray-500)]">{testimonial.course}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
