'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Container from './Container';
import Button from '../common/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Mentors', path: '/mentors' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-neutral-bg-3)]/80 bg-[color-mix(in_srgb,var(--color-neutral-white)_82%,transparent)] backdrop-blur-md">
      <Container>
        <div className="flex justify-between items-center py-3 sm:py-4 gap-3">
          <Link
            href="/"
            className="font-[family-name:var(--font-heading)] text-2xl sm:text-[1.75rem] font-medium tracking-[-0.03em] text-[var(--color-neutral-gray-900)] shrink-0"
          >
            Nomolabs
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-[var(--color-foreground-2)] hover:text-[var(--color-neutral-gray-900)] transition-colors font-medium text-sm xl:text-[0.95rem] whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button variant="primary">Sign Up</Button>
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-1 rounded-lg hover:bg-[var(--color-neutral-bg-2)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-[var(--color-neutral-bg-3)]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="block py-2.5 text-[var(--color-neutral-gray-900)] hover:text-[var(--color-foreground-2)]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full">
                  Login
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
