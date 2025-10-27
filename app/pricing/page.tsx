'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import PricingCard from '@/components/pricing/PricingCard';
import PaymentMethods from '@/components/pricing/PaymentMethods';
import Button from '@/components/common/Button';

export default function PricingPage() {
  const router = useRouter();

  const pricingPlans = [
    {
      title: 'Single Course',
      price: 50000,
      usdPrice: 35,
      features: [
        'Access to one complete course',
        'Live cohort-based classes',
        'Expert instructor support',
        'Hands-on projects and assignments',
        'Course completion certificate',
        'Lifetime access to course materials',
        'Community support',
      ],
      ctaText: 'Enroll Now',
    },
    {
      title: 'Two Courses Bundle',
      price: 90000,
      usdPrice: 60,
      features: [
        'Access to any two courses',
        'Live cohort-based classes',
        'Expert instructor support',
        'Hands-on projects and assignments',
        'Course completion certificates',
        'Lifetime access to materials',
        'Priority community support',
        'Portfolio review session',
      ],
      popular: true,
      discount: 'Save 10%',
      ctaText: 'Get Started',
    },
    {
      title: 'All Access Pass',
      price: 120000,
      usdPrice: 80,
      features: [
        'Access to all courses',
        'Live cohort-based classes',
        'Expert instructor support',
        'All hands-on projects',
        'All course certificates',
        'Lifetime access to all materials',
        'VIP community support',
        'Portfolio review sessions',
        'Career guidance calls',
        'First access to new courses',
      ],
      discount: 'Save 20%',
      ctaText: 'Go Premium',
    },
  ];

  const faqs = [
    {
      question: 'Can I switch courses after enrolling?',
      answer: 'Yes! Contact support within 7 days of enrollment to switch to a different course.',
    },
    {
      question: 'What is the refund policy?',
      answer: 'We offer a 7-day money-back guarantee. If you&apos;re not satisfied, request a full refund within 7 days of enrollment.',
    },
    {
      question: 'Do I get lifetime access?',
      answer: 'Yes! All pricing plans include lifetime access to course materials and updates.',
    },
    {
      question: 'Can I pay in installments?',
      answer: 'Payment plans are available for the Two Courses Bundle and All Access Pass. Contact support for details.',
    },
    {
      question: 'Are there student discounts?',
      answer: 'Yes! Students with valid IDs can get an additional 15% discount. Contact support with your student ID.',
    },
  ];

  const handleSelectPlan = (planTitle: string) => {
    // In a real app, this would navigate to checkout with the selected plan
    router.push(`/checkout?plan=${encodeURIComponent(planTitle)}`);
  };

  return (
    <>
      <Navbar />
      <main className="py-20 bg-gradient-to-br from-[var(--color-neutral-bg)] to-purple-50">
        <Container>
          {/* Hero Section */}
          <div className="text-center mb-16">
            {/* 3D Decorative Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--color-primary)] rounded-full opacity-10 blur-3xl" />
            <div className="absolute top-40 right-10 w-40 h-40 bg-[var(--color-accent-orange)] rounded-full opacity-10 blur-3xl" />

            <h1 className="text-5xl font-bold mb-4">Choose Your Learning Path</h1>
            <p className="text-lg text-[var(--color-neutral-gray-500)] max-w-2xl mx-auto">
              Flexible pricing for live cohort learning. Start your tech career journey today.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.title}
                {...plan}
                onSelect={() => handleSelectPlan(plan.title)}
              />
            ))}
          </div>

          {/* Payment Methods */}
          <PaymentMethods />

          {/* FAQ Section */}
          <section className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-[var(--color-neutral-gray-500)]">
                Got questions? We&apos;ve got answers.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
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

          {/* CTA Section */}
          <section className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-[var(--radius-card-lg)] p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
              <p className="text-lg mb-6 text-white text-opacity-90">
                Not sure which plan is right for you? Our team is here to help!
              </p>
              <Button variant="secondary" size="lg" onClick={() => router.push('/contact')}>
                Contact Us
              </Button>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
