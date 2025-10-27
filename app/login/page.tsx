'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Container from '@/components/layout/Container';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Redirect to student dashboard (in a real app, check user role)
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
          <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
          <p className="text-center text-[var(--color-neutral-gray-500)] mb-8">
            Log in to your account to continue learning
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="email"
              label="Email Address"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm text-[var(--color-neutral-gray-500)]">
                  Remember me
                </span>
              </label>
              <Link href="/forgot-password" className="text-sm text-[var(--color-primary)] hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" variant="primary" className="w-full" loading={loading}>
              Login
            </Button>
          </form>

          <div className="mt-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--color-neutral-gray-100)]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-[var(--color-neutral-gray-500)]">Or</span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-[var(--color-neutral-gray-500)]">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-[var(--color-primary)] font-semibold hover:underline">
              Sign up for free
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
