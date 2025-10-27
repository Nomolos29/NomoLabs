import React from 'react';
import { UserPlus, Video, FileCheck, TrendingUp } from 'lucide-react';
import Container from '../layout/Container';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Enroll in a Cohort',
      description: 'Choose your course and join a cohort that fits your schedule.',
      icon: UserPlus,
      imagePosition: 'left',
    },
    {
      number: 2,
      title: 'Attend Live Classes',
      description: 'Participate in interactive live sessions with expert instructors.',
      icon: Video,
      imagePosition: 'right',
    },
    {
      number: 3,
      title: 'Complete Assignments',
      description: 'Practice what you learn with hands-on projects and quizzes.',
      icon: FileCheck,
      imagePosition: 'left',
    },
    {
      number: 4,
      title: 'Track Your Progress',
      description: 'Monitor your growth with detailed performance analytics.',
      icon: TrendingUp,
      imagePosition: 'right',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-neutral-bg)] to-purple-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-[var(--color-primary)] rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-[var(--color-accent-orange)] rounded-full opacity-10 blur-3xl" />

      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            How Learning Works at Nomolabs
          </h2>
          <p className="text-[var(--color-neutral-gray-500)] max-w-2xl mx-auto">
            Our cohort-based approach ensures you learn alongside peers and get personalized attention.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                step.imagePosition === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={step.imagePosition === 'right' ? 'md:order-2' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  <step.icon size={32} className="text-[var(--color-primary)]" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-[var(--color-neutral-gray-500)]">{step.description}</p>
              </div>

              {/* Image Placeholder */}
              <div className={step.imagePosition === 'right' ? 'md:order-1' : ''}>
                <div className="bg-white rounded-[var(--radius-card-lg)] shadow-[var(--shadow-card)] p-8 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className={`w-48 h-48 bg-gradient-to-br ${
                      index % 2 === 0
                        ? 'from-[var(--color-primary)] to-[var(--color-primary-light)]'
                        : 'from-[var(--color-accent-orange)] to-yellow-400'
                    } rounded-full mx-auto mb-4`} />
                    <p className="text-[var(--color-neutral-gray-500)] text-sm">
                      [Step {step.number} Illustration]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
