import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, Award, Check, Calendar, Linkedin, Twitter, Globe } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import Button from '@/components/common/Button';
import Badge from '@/components/common/Badge';
import Card from '@/components/common/Card';
import { mockCourses } from '@/lib/data/mockCourses';
import { mockCohorts } from '@/lib/data/mockCohorts';

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = mockCourses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const upcomingCohorts = mockCohorts.filter(
    (cohort) => cohort.courseId === course.id && cohort.status === 'upcoming'
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const faqs = [
    {
      question: 'What if I miss a live class?',
      answer: 'All classes are recorded and available for 48 hours after the session. You can watch at your convenience.',
    },
    {
      question: 'Do I need prior experience?',
      answer: course.prerequisites.length > 0
        ? `Prerequisites: ${course.prerequisites.join(', ')}`
        : 'No prior experience required! This course is designed for beginners.',
    },
    {
      question: 'Will I get a certificate?',
      answer: course.settings.certificateEnabled
        ? 'Yes! You&apos;ll receive a certificate of completion after finishing the course with a passing grade.'
        : 'Certificate information will be provided during the course.',
    },
    {
      question: 'Can I get a refund?',
      answer: 'Yes! We offer a 7-day money-back guarantee if you&apos;re not satisfied with the course.',
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-[var(--color-neutral-bg)] to-purple-50 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={course.media.banner}
              alt={course.title}
              fill
              className="object-cover opacity-10"
            />
          </div>
          <Container className="relative z-10">
            <div className="max-w-4xl">
              <Badge variant={
                course.category === 'Web Development' ? 'primary' :
                course.category === 'UI/UX Design' ? 'orange' :
                'green'
              } className="mb-4">
                {course.category}
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-base sm:text-xl text-[var(--color-neutral-gray-500)] mb-6 sm:mb-8">
                {course.fullDescription}
              </p>

              <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-[var(--color-primary)] shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-[var(--color-primary)] shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">{course.settings.maxStudentsPerCohort} students max</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-[var(--color-primary)] shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">{course.difficultyLevel}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)]">
                    {formatPrice(course.pricing.basePrice)}
                  </span>
                  <span className="text-[var(--color-neutral-gray-500)]">
                    or ${course.pricing.usdPrice}
                  </span>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <Link href="/pricing" className="inline-block w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Enroll Now
                  </Button>
                </Link>
              </div>

              {upcomingCohorts.length > 0 && (
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-[var(--shadow-soft)]">
                  <Calendar size={16} className="text-[var(--color-accent-green)]" />
                  <span className="text-sm">
                    Next cohort starts: <strong>{new Date(upcomingCohorts[0].startDate).toLocaleDateString()}</strong>
                  </span>
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* Main Content */}
        <Container className="py-10 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8 sm:space-y-12">
              {/* What You'll Learn */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">What You&apos;ll Learn</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {course.learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check size={20} className="text-[var(--color-accent-green)] flex-shrink-0 mt-1" />
                      <span className="text-[var(--color-neutral-gray-500)]">{outcome}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Curriculum */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum.map((week) => (
                    <Card key={week.week} hover={false}>
                      <h3 className="text-xl font-bold mb-2">
                        Week {week.week}: {week.title}
                      </h3>
                      <ul className="space-y-2">
                        {week.lessons.map((lesson, index) => (
                          <li key={index} className="flex items-start gap-2 text-[var(--color-neutral-gray-500)]">
                            <span className="text-[var(--color-primary)]">•</span>
                            <div>
                              <p className="font-semibold text-[var(--color-neutral-gray-900)]">
                                {lesson.title}
                              </p>
                              <p className="text-sm">{lesson.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Instructor */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Your Instructor</h2>
                <Card>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full opacity-20 blur-xl" />
                      <Image
                        src={course.instructor.photo}
                        alt={course.instructor.name}
                        width={128}
                        height={128}
                        className="rounded-full relative z-10"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{course.instructor.name}</h3>
                      <p className="text-[var(--color-neutral-gray-500)] mb-4">
                        {course.instructor.bio}
                      </p>
                      <p className="text-sm font-semibold text-[var(--color-primary)] mb-4">
                        {course.instructor.credentials}
                      </p>
                      <div className="flex gap-3">
                        {course.instructor.socialLinks.linkedin && (
                          <a href={course.instructor.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin size={20} className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)]" />
                          </a>
                        )}
                        {course.instructor.socialLinks.twitter && (
                          <a href={course.instructor.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter size={20} className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)]" />
                          </a>
                        )}
                        {course.instructor.socialLinks.portfolio && (
                          <a href={course.instructor.socialLinks.portfolio} target="_blank" rel="noopener noreferrer">
                            <Globe size={20} className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)]" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details
                      key={index}
                      className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-6 cursor-pointer group"
                    >
                      <summary className="font-bold text-lg flex justify-between items-center">
                        {faq.question}
                        <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                          ▼
                        </span>
                      </summary>
                      <p className="mt-4 text-[var(--color-neutral-gray-500)]">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Enroll Card */}
              <Card className="sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Enroll Today</h3>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-[var(--color-primary)] mb-2">
                    {formatPrice(course.pricing.basePrice)}
                  </p>
                  <p className="text-[var(--color-neutral-gray-500)]">
                    or ${course.pricing.usdPrice}
                  </p>
                </div>
                <Link href="/pricing">
                  <Button variant="primary" className="w-full mb-4">
                    Enroll Now
                  </Button>
                </Link>
                <div className="text-sm text-[var(--color-neutral-gray-500)] space-y-2">
                  <p className="flex items-center gap-2">
                    <Check size={16} className="text-[var(--color-accent-green)]" />
                    7-day money-back guarantee
                  </p>
                  <p className="flex items-center gap-2">
                    <Check size={16} className="text-[var(--color-accent-green)]" />
                    Lifetime access to materials
                  </p>
                  <p className="flex items-center gap-2">
                    <Check size={16} className="text-[var(--color-accent-green)]" />
                    Certificate of completion
                  </p>
                </div>
              </Card>

              {/* Skills Card */}
              <Card>
                <h3 className="text-xl font-bold mb-4">Skills You&apos;ll Gain</h3>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <Badge key={skill} variant="primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Upcoming Cohorts */}
              {upcomingCohorts.length > 0 && (
                <Card>
                  <h3 className="text-xl font-bold mb-4">Upcoming Cohorts</h3>
                  <div className="space-y-4">
                    {upcomingCohorts.slice(0, 2).map((cohort) => (
                      <div key={cohort.id} className="border-b border-[var(--color-neutral-gray-100)] last:border-0 pb-4 last:pb-0">
                        <p className="font-semibold mb-1">{cohort.cohortName}</p>
                        <p className="text-sm text-[var(--color-neutral-gray-500)] mb-1">
                          Starts: {new Date(cohort.startDate).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-[var(--color-neutral-gray-500)]">
                          {cohort.schedule.days.join(', ')} at {cohort.schedule.time}
                        </p>
                        <Badge variant="green" className="mt-2">
                          {cohort.maxStudents - cohort.students.length} spots left
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>
        </Container>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
          <Container>
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Ready to Start Learning?</h2>
              <p className="text-xl mb-8 text-white text-opacity-90">
                Join thousands of students building their tech careers
              </p>
              <Link href="/pricing">
                <Button variant="secondary" size="lg">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Generate static params for all courses
export async function generateStaticParams() {
  return mockCourses.map((course) => ({
    slug: course.slug,
  }));
}
