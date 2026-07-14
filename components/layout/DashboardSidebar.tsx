'use client';

import React, { useEffect } from 'react';
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
  X,
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
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  userType = 'student',
  userName = 'John Doe',
  userAvatar = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
  userEmail = 'john@example.com',
  isCollapsed,
  onToggleCollapse,
  isMobileOpen,
  onMobileClose,
}) => {
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

  useEffect(() => {
    onMobileClose();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isMobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMobileOpen]);

  const linkClass = (active: boolean, centered: boolean) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      active
        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
        : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
    } ${centered ? 'justify-center' : ''}`;

  const sidebarContent = (collapsed: boolean, showClose?: boolean) => (
    <div className="flex flex-col h-full">
      <div className={`flex items-center border-b border-slate-700 ${collapsed ? 'justify-center p-4' : 'justify-between p-4 sm:p-6'}`}>
        {!collapsed && (
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-indigo-300 transition-all"
            onClick={onMobileClose}
          >
            Nomolabs
          </Link>
        )}
        {collapsed && (
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
            onClick={onMobileClose}
          >
            N
          </Link>
        )}
        {showClose && (
          <button
            type="button"
            onClick={onMobileClose}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-700/50 hover:text-white"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        )}
      </div>

      <div className="p-4 border-b border-slate-700">
        <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
          <div className="relative shrink-0">
            <Avatar src={userAvatar} alt={userName} size="md" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-slate-800 rounded-full" />
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm truncate text-slate-100">{userName}</p>
              <p className="text-xs text-slate-400 truncate">{userEmail}</p>
            </div>
          )}
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.path);
            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={linkClass(active, collapsed)}
                  title={collapsed ? link.name : ''}
                  onClick={onMobileClose}
                >
                  <Icon size={20} className="flex-shrink-0" />
                  {!collapsed && <span className="font-medium text-sm">{link.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-slate-700 p-3">
        <ul className="space-y-1">
          <li>
            <Link
              href={`/${userType}/notifications`}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-200 ${
                collapsed ? 'justify-center' : ''
              }`}
              title={collapsed ? 'Notifications' : ''}
              onClick={onMobileClose}
            >
              <Bell size={20} className="flex-shrink-0" />
              {!collapsed && <span className="font-medium text-sm">Notifications</span>}
            </Link>
          </li>
          <li>
            <Link
              href={`/${userType}/settings`}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-200 ${
                collapsed ? 'justify-center' : ''
              }`}
              title={collapsed ? 'Settings' : ''}
              onClick={onMobileClose}
            >
              <Settings size={20} className="flex-shrink-0" />
              {!collapsed && <span className="font-medium text-sm">Settings</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/logout"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition-all duration-200 ${
                collapsed ? 'justify-center' : ''
              }`}
              title={collapsed ? 'Logout' : ''}
              onClick={onMobileClose}
            >
              <LogOut size={20} className="flex-shrink-0" />
              {!collapsed && <span className="font-medium text-sm">Logout</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile / tablet drawer overlay */}
      {isMobileOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          aria-label="Close sidebar overlay"
          onClick={onMobileClose}
        />
      )}

      {/* Mobile / tablet drawer */}
      <aside
        className={`fixed left-0 top-0 h-screen w-[min(100%,20rem)] bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 shadow-xl z-50 transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent(false, true)}
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={`hidden lg:fixed lg:left-0 lg:top-0 lg:flex lg:h-screen lg:flex-col bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 shadow-xl transition-all duration-300 ease-in-out z-40 ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {sidebarContent(isCollapsed)}
        <button
          type="button"
          onClick={onToggleCollapse}
          className="absolute -right-3 top-20 w-7 h-7 bg-slate-700 border border-slate-600 rounded-full flex items-center justify-center hover:bg-slate-600 transition-all shadow-md"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? (
            <ChevronRight size={16} className="text-slate-300" />
          ) : (
            <ChevronLeft size={16} className="text-slate-300" />
          )}
        </button>
      </aside>
    </>
  );
};

export default DashboardSidebar;
