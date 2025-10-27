'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import Card from '@/components/common/Card';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Alert from '@/components/common/Alert';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'support@nomolabs.com',
      link: 'mailto:support@nomolabs.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+234 800 123 4567',
      link: 'tel:+2348001234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Lagos, Nigeria',
      link: null,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="py-20">
        <Container>
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-[var(--color-neutral-gray-500)] max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                {submitted && (
                  <Alert type="success" dismissible className="mb-6">
                    Thank you for your message! We&apos;ll get back to you within 24 hours.
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="text"
                    name="name"
                    label="Full Name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    type="email"
                    name="email"
                    label="Email Address"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    type="text"
                    name="subject"
                    label="Subject"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />

                  <div className="w-full">
                    <label className="block text-sm font-semibold text-[var(--color-neutral-gray-900)] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-[var(--color-neutral-gray-100)] focus:border-[var(--color-primary)] focus:outline-none transition-colors resize-none"
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full" loading={loading}>
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">{info.title}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-[var(--color-neutral-gray-500)] hover:text-[var(--color-primary)] transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-[var(--color-neutral-gray-500)]">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 text-[var(--color-neutral-gray-500)]">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
