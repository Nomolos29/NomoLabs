import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';
import Container from '../layout/Container';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';

const Mentors = () => {
  const mentors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Senior UX Designer',
      photo: '/placeholder-mentor-1.jpg',
      expertise: ['UI/UX', 'Figma', 'Design Systems'],
      linkedin: '#',
      twitter: '#',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Full Stack Developer',
      photo: '/placeholder-mentor-2.jpg',
      expertise: ['React', 'Node.js', 'JavaScript'],
      linkedin: '#',
      twitter: '#',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Content Strategist',
      photo: '/placeholder-mentor-3.jpg',
      expertise: ['SEO', 'Copywriting', 'Content Marketing'],
      linkedin: '#',
      twitter: '#',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-[var(--color-neutral-bg)]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Learn from Expert Mentors
          </h2>
          <p className="text-[var(--color-neutral-gray-500)] max-w-2xl mx-auto">
            Our instructors are industry professionals with proven track records.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="text-center">
              {/* Blob background */}
              <div className="relative mx-auto mb-6 w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full opacity-20 blur-xl" />
                <div className="relative w-32 h-32 bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-primary)] rounded-full" />
              </div>

              <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
              <p className="text-[var(--color-neutral-gray-500)] mb-4">{mentor.role}</p>

              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {mentor.expertise.map((skill) => (
                  <Badge key={skill} variant="primary">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3 justify-center">
                <a
                  href={mentor.linkedin}
                  className="p-2 hover:bg-[var(--color-neutral-gray-100)] rounded-full transition-colors"
                >
                  <Linkedin size={20} className="text-[var(--color-primary)]" />
                </a>
                <a
                  href={mentor.twitter}
                  className="p-2 hover:bg-[var(--color-neutral-gray-100)] rounded-full transition-colors"
                >
                  <Twitter size={20} className="text-[var(--color-primary)]" />
                </a>
              </div>
            </Card>
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
