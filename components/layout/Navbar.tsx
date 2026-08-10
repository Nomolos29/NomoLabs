'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Container from './Container';
import Button from '../common/Button';

interface NavbarProps {
  embedded?: boolean;
}

const Navbar = ({ embedded = false }: NavbarProps) => {
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
    <nav
      className={
        embedded
          ? 'relative z-10'
          : 'sticky top-0 z-50 border-b border-[var(--color-neutral-bg-3)]/80 bg-[color-mix(in_srgb,var(--color-neutral-white)_82%,transparent)] backdrop-blur-md'
      }
    >
      <Container className={embedded ? 'max-w-none px-5 sm:px-8 lg:px-10 xl:px-14' : undefined}>
        <div
          className={`flex justify-between items-center gap-3 ${
            embedded ? 'py-5 sm:py-6 lg:py-7' : 'py-3 sm:py-4'
          }`}
        >
          <Link
            href="/"
            className="relative font-[family-name:var(--font-heading)] text-2xl sm:text-[1.85rem] font-medium tracking-[-0.03em] text-[#1a1a1a] shrink-0"
          >
            Nomolabs
            {embedded && (
              <svg
                className="absolute -bottom-0.5 left-0 w-[58%] h-2.5 pointer-events-none"
                viewBox="0 0 100 10"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 7 C 22 2, 42 8, 98 5"
                  stroke="#7ed8f5"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            )}
          </Link>

          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-[#1a1a1a]/80 hover:text-[#1a1a1a] transition-colors font-medium text-sm xl:text-[0.95rem] whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <Link href="/login">
              <Button
                variant="ghost"
                className={embedded ? 'hover:bg-[#f3ede9] text-[#1a1a1a]' : undefined}
              >
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                variant={embedded ? 'secondary' : 'primary'}
                className={
                  embedded
                    ? 'bg-[#f4a27a] hover:bg-[#e8926a] text-[#1a1a1a] border-0 shadow-none px-5 sm:px-6'
                    : undefined
                }
              >
                Sign Up
              </Button>
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
          <div className={`lg:hidden py-4 ${embedded ? 'border-t border-[#ece5e1]' : 'border-t border-[var(--color-neutral-bg-3)]'}`}>
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
