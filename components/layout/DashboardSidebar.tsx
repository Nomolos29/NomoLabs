'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  Library,
  User,
  Bell,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';
import Avatar from '../common/Avatar';

interface SidebarLink {
  name: string;
  path: string;
  icon: React.ElementType;
}

interface DashboardSidebarProps {
  userType?: 'student' | 'admin';
  userName?: string;
  userAvatar?: string;
  userEmail?: string;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  userType = 'student',
  userName = 'John Doe',
  userAvatar = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
  userEmail = 'john@example.com',
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const studentLinks: SidebarLink[] = [
    { name: 'Dashboard', path: '/student/dashboard', icon: LayoutDashboard },
    { name: 'My Cohorts', path: '/student/cohorts', icon: GraduationCap },
    { name: 'Schedule', path: '/student/schedule', icon: Calendar },
    { name: 'Library', path: '/student/library', icon: Library },
    { name: 'Profile', path: '/student/profile', icon: User },
  ];

  const adminLinks: SidebarLink[] = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Courses', path: '/admin/courses', icon: BookOpen },
    { name: 'Cohorts', path: '/admin/cohorts', icon: GraduationCap },
    { name: 'Students', path: '/admin/students', icon: User },
    { name: 'Analytics', path: '/admin/analytics', icon: LayoutDashboard },
  ];

  const navLinks = userType === 'admin' ? adminLinks : studentLinks;

  const isActive = (path: string) => pathname === path;

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 shadow-xl transition-all duration-300 ease-in-out z-40 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Logo Section */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          {!isCollapsed && (
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-indigo-300 transition-all">
              Nomolabs
            </Link>
          )}
          {isCollapsed && (
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mx-auto">
              N
            </Link>
          )}
        </div>

        {/* User Profile Section */}
        <div className="p-4 border-b border-slate-700">
          <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
            <div className="relative">
              <Avatar src={userAvatar} alt={userName} size="md" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-slate-800 rounded-full"></div>
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate text-slate-100">{userName}</p>
                <p className="text-xs text-slate-400 truncate">{userEmail}</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      active
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                        : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                    } ${isCollapsed ? 'justify-center' : ''}`}
                    title={isCollapsed ? link.name : ''}
                  >
                    <Icon size={20} className="flex-shrink-0" />
                    {!isCollapsed && <span className="font-medium text-sm">{link.name}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Actions */}
        <div className="border-t border-slate-700 p-3">
          <ul className="space-y-1">
            <li>
              <Link
                href={`/${userType}/notifications`}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-200 ${
                  isCollapsed ? 'justify-center' : ''
                }`}
                title={isCollapsed ? 'Notifications' : ''}
              >
                <Bell size={20} className="flex-shrink-0" />
                {!isCollapsed && <span className="font-medium text-sm">Notifications</span>}
              </Link>
            </li>
            <li>
              <Link
                href={`/${userType}/settings`}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-200 ${
                  isCollapsed ? 'justify-center' : ''
                }`}
                title={isCollapsed ? 'Settings' : ''}
              >
                <Settings size={20} className="flex-shrink-0" />
                {!isCollapsed && <span className="font-medium text-sm">Settings</span>}
              </Link>
            </li>
            <li>
              <Link
                href="/logout"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition-all duration-200 ${
                  isCollapsed ? 'justify-center' : ''
                }`}
                title={isCollapsed ? 'Logout' : ''}
              >
                <LogOut size={20} className="flex-shrink-0" />
                {!isCollapsed && <span className="font-medium text-sm">Logout</span>}
              </Link>
            </li>
          </ul>
        </div>

        {/* Collapse Toggle */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-20 w-7 h-7 bg-slate-700 border border-slate-600 rounded-full flex items-center justify-center hover:bg-slate-600 transition-all shadow-md"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? (
            <ChevronRight size={16} className="text-slate-300" />
          ) : (
            <ChevronLeft size={16} className="text-slate-300" />
          )}
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
