import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import Container from './Container';

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Courses', path: '/courses' },
      { name: 'Mentors', path: '/mentors' },
      { name: 'Contact', path: '/contact' },
    ],
    Support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Refund Policy', path: '/refund' },
    ],
    Courses: [
      { name: 'Web Development', path: '/courses/web-development' },
      { name: 'Content Writing', path: '/courses/content-writing' },
      { name: 'UI/UX Design', path: '/courses/ui-ux-design' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[var(--color-neutral-bg-2)] text-[var(--color-neutral-gray-900)] py-12 sm:py-16 border-t border-[var(--color-neutral-bg-3)]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-medium tracking-[-0.03em] mb-4">
              Nomolabs
            </h3>
            <p className="text-[var(--color-foreground-2)] mb-6 leading-relaxed">
              Empowering the next generation of tech professionals through live, cohort-based learning.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[var(--color-neutral-white)] border border-[var(--color-neutral-bg-3)] flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-[family-name:var(--font-heading)] font-medium mb-4 tracking-[-0.02em]">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-[var(--color-foreground-2)] hover:text-[var(--color-neutral-gray-900)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--color-neutral-bg-3)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-neutral-gray-500)] text-sm">
            © 2025 Nomolabs. All rights reserved.
          </p>
          <p className="text-[var(--color-neutral-gray-500)] text-sm flex items-center gap-2">
            <Mail size={16} />
            support@nomolabs.com
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
