import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';
import Container from '../layout/Container';
import Button from '../common/Button';

const Mentors = () => {
  const mentors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Senior UX Designer',
      expertise: ['UI/UX', 'Figma', 'Design Systems'],
      linkedin: '#',
      twitter: '#',
      tint: 'from-[var(--color-accent)] to-[var(--color-primary)]',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Full Stack Developer',
      expertise: ['React', 'Node.js', 'JavaScript'],
      linkedin: '#',
      twitter: '#',
      tint: 'from-[var(--color-primary)] to-[var(--color-tertiary)]',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Content Strategist',
      expertise: ['SEO', 'Copywriting', 'Content Marketing'],
      linkedin: '#',
      twitter: '#',
      tint: 'from-[var(--color-secondary)] to-[var(--color-accent)]',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-atmosphere relative overflow-hidden">
      <Container>
        <div className="max-w-2xl mb-12 sm:mb-16 text-center mx-auto">
          <h2 className="mb-4">Learn from Expert Mentors</h2>
          <p className="text-[var(--color-foreground-2)] text-base sm:text-lg">
            Our instructors are industry professionals with proven track records.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-12">
          {mentors.map((mentor) => (
            <article key={mentor.id} className="text-center">
              <div className="relative mx-auto mb-6 w-36 h-36 sm:w-40 sm:h-40">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${mentor.tint} opacity-90`}
                />
                <div className="absolute inset-[6px] rounded-full bg-[var(--color-neutral-bg)]" />
                <div
                  className={`absolute inset-[14px] rounded-full bg-gradient-to-br ${mentor.tint}`}
                />
              </div>

              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-medium tracking-[-0.03em] mb-1">
                {mentor.name}
              </h3>
              <p className="text-[var(--color-foreground-2)] mb-4">{mentor.role}</p>

              <div className="flex flex-wrap gap-2 justify-center mb-5">
                {mentor.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-[var(--color-neutral-white)] text-[var(--color-foreground-2)] border border-[var(--color-neutral-bg-3)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 justify-center">
                <a
                  href={mentor.linkedin}
                  className="p-2.5 rounded-full hover:bg-[var(--color-neutral-white)] transition-colors"
                  aria-label={`${mentor.name} on LinkedIn`}
                >
                  <Linkedin size={18} className="text-[var(--color-neutral-gray-900)]" />
                </a>
                <a
                  href={mentor.twitter}
                  className="p-2.5 rounded-full hover:bg-[var(--color-neutral-white)] transition-colors"
                  aria-label={`${mentor.name} on Twitter`}
                >
                  <Twitter size={18} className="text-[var(--color-neutral-gray-900)]" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/mentors">
            <Button variant="outline">View All Mentors</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Mentors;
