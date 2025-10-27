import React from 'react';
import { Video, Users, TrendingUp, FolderKanban, Briefcase } from 'lucide-react';
import Container from '../layout/Container';
import Card from '../common/Card';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Video,
      title: 'Live Learning',
      description: 'Interactive live classes, not pre-recorded videos.',
      color: 'text-[var(--color-primary)]',
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience.',
      color: 'text-[var(--color-accent-orange)]',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with peers and mentors throughout your journey.',
      color: 'text-[var(--color-accent-green)]',
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Monitor your progress with detailed analytics and reports.',
      color: 'text-blue-600',
    },
    {
      icon: FolderKanban,
      title: 'Hands-on Projects',
      description: 'Build real-world projects to showcase your skills.',
      color: 'text-purple-600',
    },
    {
      icon: Briefcase,
      title: 'Career Support',
      description: 'Get guidance on portfolio building and job applications.',
      color: 'text-pink-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Why Learn with Nomolabs?
          </h2>
          <p className="text-[var(--color-neutral-gray-500)] max-w-2xl mx-auto">
            We provide everything you need to succeed in your tech career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <div className={`w-12 h-12 rounded-full bg-opacity-10 flex items-center justify-center mb-4 ${
                feature.color === 'text-[var(--color-primary)]' ? 'bg-[var(--color-primary)]' :
                feature.color === 'text-[var(--color-accent-orange)]' ? 'bg-[var(--color-accent-orange)]' :
                feature.color === 'text-[var(--color-accent-green)]' ? 'bg-[var(--color-accent-green)]' :
                'bg-blue-500'
              }`}>
                <feature.icon size={24} className={feature.color} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-[var(--color-neutral-gray-500)]">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
