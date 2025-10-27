'use client';

import React, { ReactNode } from 'react';
import DashboardSidebar from './DashboardSidebar';

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
  return (
    <div className="min-h-screen bg-[var(--color-neutral-bg)]">
      <DashboardSidebar
        userType={userType}
        userName={userName}
        userAvatar={userAvatar}
        userEmail={userEmail}
      />
      <main className="ml-64 transition-all duration-300 ease-in-out">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
