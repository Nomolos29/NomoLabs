import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, Award } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { Course } from '@/lib/data/mockCourses';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link href={`/courses/${course.slug}`}>
      <Card className="h-full flex flex-col cursor-pointer group">
        {/* Course Image */}
        <div className="relative h-48 -mx-8 -mt-8 mb-4 overflow-hidden rounded-t-[var(--radius-card)]">
          <Image
            src={course.media.thumbnail}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge variant={
              course.category === 'Web Development' ? 'primary' :
              course.category === 'UI/UX Design' ? 'orange' :
              'green'
            }>
              {course.category}
            </Badge>
          </div>
        </div>

        {/* Course Info */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
            {course.title}
          </h3>
          <p className="text-[var(--color-neutral-gray-500)] mb-4 line-clamp-2">
            {course.shortDescription}
          </p>

          {/* Course Meta */}
          <div className="flex flex-wrap gap-4 text-sm text-[var(--color-neutral-gray-500)] mb-4">
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={16} />
              <span>{course.settings.maxStudentsPerCohort} students</span>
            </div>
            <div className="flex items-center gap-1">
              <Award size={16} />
              <span>{course.difficultyLevel}</span>
            </div>
          </div>

          {/* Price & CTA */}
          <div className="mt-auto flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-[var(--color-primary)]">
                {formatPrice(course.pricing.basePrice)}
              </p>
              <p className="text-sm text-[var(--color-neutral-gray-500)]">
                or ${course.pricing.usdPrice}
              </p>
            </div>
            <Button variant="primary">
              View Details
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CourseCard;
