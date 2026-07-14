'use client';

import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { Menu, Bell } from 'lucide-react';
import DashboardSidebar from './DashboardSidebar';
import Avatar from '../common/Avatar';

interface DashboardLayoutProps {
  children: ReactNode;
  userType?: 'student' | 'admin';
  userName?: string;
  userAvatar?: string;
  userEmail?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  userType = 'student',
  userName = 'John Doe',
  userAvatar = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
  userEmail = 'john@example.com',
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-neutral-bg)] overflow-x-hidden">
      <DashboardSidebar
        userType={userType}
        userName={userName}
        userAvatar={userAvatar}
        userEmail={userEmail}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed((prev) => !prev)}
        isMobileOpen={isMobileOpen}
        onMobileClose={() => setIsMobileOpen(false)}
      />

      {/* Mobile top bar */}
      <header className="lg:hidden sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <button
            type="button"
            onClick={() => setIsMobileOpen(true)}
            className="p-2 -ml-1 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
          <Link
            href="/"
            className="text-lg font-bold text-[var(--color-primary)] truncate"
          >
            Nomolabs
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href={`/${userType}/notifications`}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Notifications"
            >
              <Bell size={20} />
            </Link>
            <Link href={`/${userType}/profile`} aria-label="Profile">
              <Avatar src={userAvatar} alt={userName} size="sm" />
            </Link>
          </div>
        </div>
      </header>

      <main
        className={`min-w-0 transition-all duration-300 ease-in-out ${
          isCollapsed ? 'lg:ml-20' : 'lg:ml-64'
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
