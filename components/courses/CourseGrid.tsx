import React from 'react';
import CourseCard from './CourseCard';
import { Course } from '@/lib/data/mockCourses';

interface CourseGridProps {
  courses: Course[];
}

const CourseGrid: React.FC<CourseGridProps> = ({ courses }) => {
  if (courses.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-[var(--color-neutral-gray-500)] text-lg">
          No courses found. Check back soon for new offerings!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseGrid;
