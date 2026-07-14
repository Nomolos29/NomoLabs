'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Linkedin, Twitter, Globe } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import { mockMentors } from '@/lib/data/mockMentors';

export default function MentorsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filters = ['All', 'Web Development', 'UI/UX Design', 'Content Writing'];

  const filteredMentors = selectedFilter === 'All'
    ? mockMentors
    : mockMentors.filter((mentor) =>
        mentor.expertise.some((exp) =>
          selectedFilter.toLowerCase().includes(exp.toLowerCase()) ||
          exp.toLowerCase().includes(selectedFilter.toLowerCase())
        )
      );

  return (
    <>
      <Navbar />
      <main className="py-10 sm:py-16 lg:py-20">
        <Container>
          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Meet Our Expert Mentors</h1>
            <p className="text-base sm:text-lg text-[var(--color-neutral-gray-500)] max-w-2xl mx-auto">
              Learn from industry professionals with proven track records at top tech companies.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all ${
                  selectedFilter === filter
                    ? 'bg-[var(--color-primary)] text-white shadow-[var(--shadow-card)]'
                    : 'bg-white text-[var(--color-neutral-gray-900)] border-2 border-[var(--color-neutral-gray-100)] hover:border-[var(--color-primary)]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredMentors.map((mentor) => (
              <Card key={mentor.id} className="text-center">
                {/* Mentor Photo with Blob Background */}
                <div className="relative mx-auto mb-6 w-32 h-32 sm:w-40 sm:h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full opacity-20 blur-2xl" />
                  <Image
                    src={mentor.photo}
                    alt={mentor.name}
                    width={160}
                    height={160}
                    className="rounded-full relative z-10 object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-1">{mentor.name}</h3>
                <p className="text-[var(--color-neutral-gray-500)] mb-2">{mentor.role}</p>
                <p className="text-sm text-[var(--color-primary)] font-semibold mb-4">
                  {mentor.yearsOfExperience}+ years experience
                </p>

                <p className="text-[var(--color-neutral-gray-500)] mb-6 text-sm line-clamp-3">
                  {mentor.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {mentor.expertise.slice(0, 4).map((skill) => (
                    <Badge key={skill} variant="primary">
                      {skill}
                    </Badge>
                  ))}
                  {mentor.expertise.length > 4 && (
                    <Badge variant="gray">+{mentor.expertise.length - 4}</Badge>
                  )}
                </div>

                {/* Credentials */}
                <p className="text-xs text-[var(--color-neutral-gray-500)] mb-4">
                  {mentor.credentials}
                </p>

                {/* Social Links */}
                <div className="flex gap-3 justify-center pt-4 border-t border-[var(--color-neutral-gray-100)]">
                  {mentor.socialLinks.linkedin && (
                    <a
                      href={mentor.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-[var(--color-neutral-gray-100)] rounded-full transition-colors"
                    >
                      <Linkedin size={20} className="text-[var(--color-primary)]" />
                    </a>
                  )}
                  {mentor.socialLinks.twitter && (
                    <a
                      href={mentor.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-[var(--color-neutral-gray-100)] rounded-full transition-colors"
                    >
                      <Twitter size={20} className="text-[var(--color-primary)]" />
                    </a>
                  )}
                  {mentor.socialLinks.portfolio && (
                    <a
                      href={mentor.socialLinks.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-[var(--color-neutral-gray-100)] rounded-full transition-colors"
                    >
                      <Globe size={20} className="text-[var(--color-primary)]" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
