import React from 'react';
import { Video, Users, TrendingUp, FolderKanban, Briefcase, Sparkles } from 'lucide-react';
import Container from '../layout/Container';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered',
      description: 'Content adapts to your learning style.',
      tint: 'bg-[var(--color-primary)]',
    },
    {
      icon: Video,
      title: 'Smart Tutoring',
      description: '24/7 AI assistance and guidance.',
      tint: 'bg-[var(--color-secondary)]',
    },
    {
      icon: Users,
      title: 'Peer Learning',
      description: 'Connect with matched learning partners.',
      tint: 'bg-[var(--color-accent-2)]',
    },
    {
      icon: TrendingUp,
      title: 'Smart Analytics',
      description: 'AI tracks and optimizes your progress.',
      tint: 'bg-[var(--color-accent)]',
    },
    {
      icon: FolderKanban,
      title: 'Adaptive Projects',
      description: 'Projects that match your skill level.',
      tint: 'bg-[var(--color-tertiary)]',
    },
    {
      icon: Briefcase,
      title: 'Career AI',
      description: 'AI-powered career guidance and tips.',
      tint: 'bg-[var(--color-primary-light)]',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[var(--color-neutral-white)]">
      <Container>
        <div className="max-w-2xl mb-12 sm:mb-16 text-center mx-auto">
          <h2 className="mb-4">Why Choose AI Learning?</h2>
          <p className="text-[var(--color-foreground-2)] text-base sm:text-lg">
            Personalized education that adapts to you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 sm:gap-y-12">
          {features.map((feature) => (
            <div key={feature.title} className="group">
              <div
                className={`w-12 h-12 rounded-full ${feature.tint} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
              >
                <feature.icon size={22} className="text-[var(--color-neutral-gray-900)]" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium tracking-[-0.02em] mb-2">
                {feature.title}
              </h3>
              <p className="text-[var(--color-foreground-2)] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
