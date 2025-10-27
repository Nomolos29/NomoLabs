'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bell, ChevronDown, Menu, X } from 'lucide-react';
import Container from './Container';
import Avatar from '../common/Avatar';
import Badge from '../common/Badge';

interface DashboardNavProps {
  userType?: 'student' | 'admin';
  userName?: string;
  userAvatar?: string;
  notificationCount?: number;
}

const DashboardNav: React.FC<DashboardNavProps> = ({
  userType = 'student',
  userName = 'John Doe',
  userAvatar = '/placeholder-avatar.jpg',
  notificationCount = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const studentLinks = [
    { name: 'Dashboard', path: '/student/dashboard' },
    { name: 'My Cohorts', path: '/student/cohorts' },
    { name: 'Schedule', path: '/student/schedule' },
    { name: 'Library', path: '/student/library' },
    { name: 'Profile', path: '/student/profile' },
  ];

  const adminLinks = [
    { name: 'Dashboard', path: '/admin/dashboard' },
    { name: 'Courses', path: '/admin/courses' },
    { name: 'Cohorts', path: '/admin/cohorts' },
    { name: 'Students', path: '/admin/students' },
    { name: 'Analytics', path: '/admin/analytics' },
  ];

  const navLinks = userType === 'admin' ? adminLinks : studentLinks;

  return (
    <nav className="bg-white shadow-[var(--shadow-soft)] sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[var(--color-primary)]">
            Nomolabs
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-[var(--color-neutral-gray-900)] hover:text-[var(--color-primary)] transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* User Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Notifications */}
            <button className="relative p-2 hover:bg-[var(--color-neutral-gray-100)] rounded-full transition-colors">
              <Bell size={20} />
              {notificationCount > 0 && (
                <Badge variant="orange" className="absolute -top-1 -right-1 px-2">
                  {notificationCount}
                </Badge>
              )}
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 p-2 hover:bg-[var(--color-neutral-gray-100)] rounded-full transition-colors"
              >
                <Avatar src={userAvatar} alt={userName} size="sm" />
                <ChevronDown size={16} />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-[var(--shadow-card)] py-2">
                  <Link
                    href={`/${userType}/profile`}
                    className="block px-4 py-2 hover:bg-[var(--color-neutral-gray-100)] transition-colors"
                  >
                    Profile
                  </Link>
                  <Link
                    href={`/${userType}/settings`}
                    className="block px-4 py-2 hover:bg-[var(--color-neutral-gray-100)] transition-colors"
                  >
                    Settings
                  </Link>
                  <hr className="my-2" />
                  <Link
                    href="/logout"
                    className="block px-4 py-2 text-red-600 hover:bg-[var(--color-neutral-gray-100)] transition-colors"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="block py-2 text-[var(--color-neutral-gray-900)] hover:text-[var(--color-primary)]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-4" />
            <div className="space-y-2">
              <Link
                href={`/${userType}/profile`}
                className="block py-2 text-[var(--color-neutral-gray-900)] hover:text-[var(--color-primary)]"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>
              <Link
                href={`/${userType}/settings`}
                className="block py-2 text-[var(--color-neutral-gray-900)] hover:text-[var(--color-primary)]"
                onClick={() => setIsOpen(false)}
              >
                Settings
              </Link>
              <Link
                href="/logout"
                className="block py-2 text-red-600"
                onClick={() => setIsOpen(false)}
              >
                Logout
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default DashboardNav;
