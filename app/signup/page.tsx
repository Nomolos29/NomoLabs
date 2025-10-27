'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Container from '@/components/layout/Container';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Redirect to student dashboard
      router.push('/student/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-neutral-bg)] to-purple-50 flex items-center justify-center py-12 px-4">
      <Container className="max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold text-[var(--color-primary)]">
            Nomolabs
          </Link>
        </div>

        <Card variant="large">
          <h1 className="text-3xl font-bold text-center mb-2">Create Your Account</h1>
          <p className="text-center text-[var(--color-neutral-gray-500)] mb-8">
            Join thousands of students learning new skills
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              name="fullName"
              label="Full Name"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              required
            />

            <Input
              type="email"
              name="email"
              label="Email Address"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />

            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Create a password (min 8 characters)"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />

            <Input
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
            />

            <div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreedToTerms"
                  checked={formData.agreedToTerms}
                  onChange={handleChange}
                  className="w-4 h-4 mt-1"
                />
                <span className="text-sm text-[var(--color-neutral-gray-500)]">
                  I agree to the{' '}
                  <Link href="/terms" className="text-[var(--color-primary)] hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-[var(--color-primary)] hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
              {errors.agreedToTerms && (
                <p className="mt-1 text-sm text-red-500">{errors.agreedToTerms}</p>
              )}
            </div>

            <Button type="submit" variant="primary" className="w-full" loading={loading}>
              Create Account
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-[var(--color-neutral-gray-500)]">
            Already have an account?{' '}
            <Link href="/login" className="text-[var(--color-primary)] font-semibold hover:underline">
              Login
            </Link>
          </p>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/" className="text-[var(--color-neutral-gray-500)] hover:text-[var(--color-primary)] text-sm">
            ← Back to Home
          </Link>
        </div>
      </Container>
    </div>
  );
}
