import React from 'react';
import { Code, PenTool, Palette, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '../layout/Container';
import Card from '../common/Card';

const CourseCategories = () => {
  const courses = [
    {
      id: 1,
      title: 'UI/UX Design',
      icon: Palette,
      color: 'bg-gradient-to-br from-pink-400 to-pink-600',
      description: 'Master design thinking, wireframing, prototyping, and user research.',
      link: '/courses/ui-ux-design',
    },
    {
      id: 2,
      title: 'Web Development',
      icon: Code,
      color: 'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)]',
      description: 'Build modern websites with HTML, CSS, JavaScript, and React.',
      link: '/courses/web-development',
    },
    {
      id: 3,
      title: 'Content Writing',
      icon: PenTool,
      color: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
      description: 'Craft compelling content for blogs, websites, and social media.',
      link: '/courses/content-writing',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Browse Top Essential Career Courses
          </h2>
          <p className="text-[var(--color-neutral-gray-500)] max-w-2xl mx-auto">
            Choose from our curated selection of industry-leading courses designed to launch your tech career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link key={course.id} href={course.link}>
              <Card className="group cursor-pointer h-full">
                <div className={`${course.color} w-16 h-16 rounded-[var(--radius-card)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <course.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {course.title}
                </h3>
                <p className="text-[var(--color-neutral-gray-500)] mb-4">{course.description}</p>
                <div className="flex items-center gap-2 text-[var(--color-primary)] font-semibold group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={16} />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CourseCategories;
