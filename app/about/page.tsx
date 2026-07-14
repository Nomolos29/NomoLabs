import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import Card from '@/components/common/Card';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We believe quality tech education should be accessible to everyone, everywhere.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Learning is better together. Our cohort model creates lasting connections.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We partner with industry experts to deliver world-class education.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Mindset',
      description: 'We continuously improve our platform and courses based on student feedback.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="py-10 sm:py-16 lg:py-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[var(--color-neutral-bg)] to-purple-50 py-12 sm:py-16 lg:py-20">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">About Nomolabs</h1>
              <p className="text-base sm:text-xl text-[var(--color-neutral-gray-500)]">
                We&apos;re on a mission to democratize tech education through live, cohort-based learning.
              </p>
            </div>
          </Container>
        </section>

        {/* Our Story */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Our Story</h2>
              <div className="space-y-4 text-base sm:text-lg text-[var(--color-neutral-gray-500)]">
                <p>
                  Nomolabs was founded in 2024 with a simple belief: everyone deserves access to high-quality tech education, regardless of their background or location.
                </p>
                <p>
                  Traditional education often fails to keep pace with the rapidly evolving tech industry. We saw talented individuals struggling to break into tech careers, not because they lacked potential, but because they lacked the right learning environment.
                </p>
                <p>
                  That&apos;s why we created Nomolabs—a platform that combines the best of both worlds: the structure and accountability of traditional education with the flexibility and accessibility of online learning.
                </p>
                <p>
                  Today, we&apos;re proud to serve thousands of students across Africa and beyond, helping them transform their careers through our live, cohort-based courses in Web Development, UI/UX Design, and Content Writing.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Our Values */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[var(--color-neutral-bg)] to-purple-50">
          <Container>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-base sm:text-lg text-[var(--color-neutral-gray-500)] max-w-2xl mx-auto">
                These principles guide everything we do at Nomolabs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-[var(--color-neutral-gray-500)]">{value.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-2">1M+</p>
                <p className="text-sm sm:text-base text-[var(--color-neutral-gray-500)]">Students Enrolled</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-2">50+</p>
                <p className="text-sm sm:text-base text-[var(--color-neutral-gray-500)]">Course Contents</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-2">95%</p>
                <p className="text-sm sm:text-base text-[var(--color-neutral-gray-500)]">Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-2">20+</p>
                <p className="text-sm sm:text-base text-[var(--color-neutral-gray-500)]">Expert Instructors</p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
