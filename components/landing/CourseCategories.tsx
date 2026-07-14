import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '../layout/Container';

const CourseCategories = () => {
  const courses = [
    {
      id: 1,
      title: 'UI/UX Design',
      tint: 'bg-[var(--color-accent)]',
      description: 'Master design thinking, wireframing, prototyping, and user research.',
      link: '/courses/ui-ux-design',
    },
    {
      id: 2,
      title: 'Web Development',
      tint: 'bg-[var(--color-primary)]',
      description: 'Build modern websites with HTML, CSS, JavaScript, and React.',
      link: '/courses/web-development',
    },
    {
      id: 3,
      title: 'Content Writing',
      tint: 'bg-[var(--color-tertiary)]',
      description: 'Craft compelling content for blogs, websites, and social media.',
      link: '/courses/content-writing',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[var(--color-neutral-white)]">
      <Container>
        <div className="max-w-2xl mb-12 sm:mb-16 text-center mx-auto">
          <h2 className="mb-4">Browse Top Essential Career Courses</h2>
          <p className="text-[var(--color-foreground-2)] text-base sm:text-lg">
            Choose from our curated selection of industry-leading courses designed to launch your tech career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {courses.map((course, index) => (
            <Link
              key={course.id}
              href={course.link}
              className="group relative overflow-hidden rounded-[1.5rem] bg-[var(--color-neutral-bg)] p-7 sm:p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className={`absolute -right-6 -top-6 h-28 w-28 rounded-full ${course.tint} opacity-70 transition-transform duration-500 group-hover:scale-125`}
              />
              <p className="relative text-sm font-medium text-[var(--color-neutral-gray-500)] mb-10">
                0{index + 1}
              </p>
              <h3 className="relative font-[family-name:var(--font-heading)] text-2xl sm:text-[1.75rem] font-medium tracking-[-0.03em] mb-3">
                {course.title}
              </h3>
              <p className="relative text-[var(--color-foreground-2)] mb-8 leading-relaxed">
                {course.description}
              </p>
              <span className="relative inline-flex items-center gap-2 font-semibold text-[var(--color-neutral-gray-900)] group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CourseCategories;
