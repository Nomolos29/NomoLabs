import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/landing/Hero';
import CourseCategories from '@/components/landing/CourseCategories';
import HowItWorks from '@/components/landing/HowItWorks';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import Mentors from '@/components/landing/Mentors';
import Testimonials from '@/components/landing/Testimonials';
import CTA from '@/components/landing/CTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CourseCategories />
        <HowItWorks />
        <WhyChooseUs />
        <Mentors />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
