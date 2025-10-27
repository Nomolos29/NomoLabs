import React from 'react';
import { Star } from 'lucide-react';
import Container from '../layout/Container';
import Card from '../common/Card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'David Okafor',
      course: 'Web Development',
      photo: '/placeholder-student-1.jpg',
      quote: 'The live cohort format made all the difference. I learned so much more than I would have from pre-recorded courses. The instructors were always available to help.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Chioma Nwankwo',
      course: 'UI/UX Design',
      photo: '/placeholder-student-2.jpg',
      quote: 'Nomolabs helped me transition from a completely different field into design. The hands-on projects built my portfolio and confidence.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Ahmed Ibrahim',
      course: 'Content Writing',
      photo: '/placeholder-student-3.jpg',
      quote: 'The feedback from instructors and peers was invaluable. I\'m now a full-time content writer thanks to the skills I gained here.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-[var(--color-neutral-gray-500)] max-w-2xl mx-auto">
            Hear from students who have transformed their careers with Nomolabs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              {/* Decorative blob */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[var(--color-accent-yellow)] to-[var(--color-accent-orange)] rounded-full opacity-20 blur-2xl" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full" />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-[var(--color-neutral-gray-500)]">{testimonial.course}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-[var(--color-accent-orange)] text-[var(--color-accent-orange)]" />
                  ))}
                </div>

                <p className="text-[var(--color-neutral-gray-500)] italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
