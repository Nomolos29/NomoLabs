'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import CourseGrid from '@/components/courses/CourseGrid';
import { mockCourses } from '@/lib/data/mockCourses';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web Development', 'UI/UX Design', 'Content Writing'];

  const filteredCourses = selectedCategory === 'All'
    ? mockCourses.filter(course => course.settings.status === 'active')
    : mockCourses.filter(course =>
        course.category === selectedCategory && course.settings.status === 'active'
      );

  return (
    <>
      <Navbar />
      <main className="py-10 sm:py-16 lg:py-20">
        <Container>
          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Courses</h1>
            <p className="text-base sm:text-lg text-[var(--color-neutral-gray-500)] max-w-2xl mx-auto">
              Choose from our selection of industry-leading courses designed to accelerate your tech career.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[var(--color-primary)] text-white shadow-[var(--shadow-card)]'
                    : 'bg-white text-[var(--color-neutral-gray-900)] border-2 border-[var(--color-neutral-gray-100)] hover:border-[var(--color-primary)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <CourseGrid courses={filteredCourses} />
        </Container>
      </main>
      <Footer />
    </>
  );
}
