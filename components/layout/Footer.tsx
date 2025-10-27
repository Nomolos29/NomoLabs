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
    { icon: Facebook, url: '#' },
    { icon: Twitter, url: '#' },
    { icon: Instagram, url: '#' },
    { icon: Linkedin, url: '#' },
  ];

  return (
    <footer className="bg-[var(--color-neutral-gray-900)] text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-primary-light)] mb-4">
              Nomolabs
            </h3>
            <p className="text-[var(--color-neutral-gray-100)] mb-4">
              Empowering the next generation of tech professionals through live, cohort-based learning.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-[var(--color-neutral-gray-100)] hover:text-[var(--color-primary-light)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-500 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-neutral-gray-100)] text-sm">
            © 2025 Nomolabs. All rights reserved.
          </p>
          <p className="text-[var(--color-neutral-gray-100)] text-sm flex items-center gap-2">
            <Mail size={16} />
            support@nomolabs.com
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
