'use client';

import React from 'react';
import { Calendar, FileCheck, Video, MessageCircle, TrendingUp, Award, Clock, ChevronRight } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/common/Card';
import { DashboardWidgets, UpcomingClassesWidget, RecentScoresWidget } from '@/components/student/DashboardWidgets';

export default function StudentDashboard() {
  // Mock data - in a real app, this would come from an API
  const studentData = {
    name: 'David Okafor',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
    attendanceRate: 95,
    averageScore: 88,
    upcomingClasses: 3,
  };

  const upcomingClasses = [
    {
      id: '1',
      courseName: 'Web Development - React Hooks',
      date: 'Monday, Oct 7',
      time: '7:00 PM',
      instructor: 'Michael Chen',
    },
    {
      id: '2',
      courseName: 'Web Development - State Management',
      date: 'Wednesday, Oct 9',
      time: '7:00 PM',
      instructor: 'Michael Chen',
    },
    {
      id: '3',
      courseName: 'Web Development - API Integration',
      date: 'Friday, Oct 11',
      time: '7:00 PM',
      instructor: 'Michael Chen',
    },
  ];

  const recentScores = [
    {
      id: '1',
      quizName: 'JavaScript Fundamentals',
      score: 92,
      date: 'Oct 1, 2025',
    },
    {
      id: '2',
      quizName: 'HTML & CSS Basics',
      score: 85,
      date: 'Sep 24, 2025',
    },
    {
      id: '3',
      quizName: 'Responsive Design',
      score: 88,
      date: 'Sep 17, 2025',
    },
  ];

  const recentActivity = [
    { id: '1', action: 'Quiz submitted: JavaScript Fundamentals', time: '2 hours ago' },
    { id: '2', action: 'Class attended: React Hooks', time: '1 day ago' },
    { id: '3', action: 'Material downloaded: Week 3 Notes', time: '2 days ago' },
    { id: '4', action: 'Assignment submitted: Personal Portfolio', time: '3 days ago' },
    { id: '5', action: 'Class attended: State Management', time: '4 days ago' },
  ];

  const quickActions = [
    {
      icon: FileCheck,
      title: 'View Study Materials',
      description: 'Access course content',
      link: '/student/library',
    },
    {
      icon: Video,
      title: 'Take Pending Quiz',
      description: '2 quizzes available',
      link: '/student/quizzes',
    },
    {
      icon: MessageCircle,
      title: 'Message Instructor',
      description: 'Get help',
      link: '#',
    },
    {
      icon: Calendar,
      title: 'Check Schedule',
      description: 'View upcoming classes',
      link: '/student/schedule',
    },
  ];

  return (
    <DashboardLayout
      userType="student"
      userName={studentData.name}
      userAvatar={studentData.avatar}
      userEmail="david.okafor@example.com"
    >
      <div className="p-8 bg-slate-50 min-h-screen">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-slate-800">
            Welcome back, {studentData.name.split(' ')[0]}!
          </h1>
          <p className="text-slate-600 text-lg">
            Here&apos;s your learning progress and upcoming activities.
          </p>
        </div>

        {/* Quick Stats */}
        <DashboardWidgets
          attendanceRate={studentData.attendanceRate}
          averageScore={studentData.averageScore}
          upcomingClasses={studentData.upcomingClasses}
        />

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
          {/* Upcoming Classes */}
          <UpcomingClassesWidget classes={upcomingClasses} />

          {/* Recent Scores */}
          <RecentScoresWidget scores={recentScores} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Attendance Overview */}
          <Card className="border border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Award size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Attendance Overview</h3>
            </div>
            <div className="text-center">
              {/* Circular Progress */}
              <div className="relative w-36 h-36 mx-auto mb-4">
                <svg className="transform -rotate-90 w-36 h-36">
                  <circle
                    cx="72"
                    cy="72"
                    r="64"
                    stroke="#e2e8f0"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="72"
                    cy="72"
                    r="64"
                    stroke="url(#attendanceGradient)"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 64}`}
                    strokeDashoffset={`${2 * Math.PI * 64 * (1 - studentData.attendanceRate / 100)}`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="attendanceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-emerald-600">
                      {studentData.attendanceRate}%
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 mb-3 text-sm">18 of 20 classes attended</p>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
                studentData.attendanceRate >= 80
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-amber-100 text-amber-700'
              }`}>
                <TrendingUp size={14} />
                {studentData.attendanceRate >= 80 ? 'Excellent' : 'Keep it up'}
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="border border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <FileCheck size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Quick Actions</h3>
            </div>
            <div className="space-y-2">
              {quickActions.map((action) => (
                <a
                  key={action.title}
                  href={action.link}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 border border-slate-200 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <action.icon size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-slate-800">{action.title}</p>
                    <p className="text-xs text-slate-500">{action.description}</p>
                  </div>
                  <ChevronRight size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                </a>
              ))}
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="border border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Clock size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Recent Activity</h3>
            </div>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="pb-3 border-b border-slate-200 last:border-0 last:pb-0"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-1 text-slate-800">{activity.action}</p>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock size={12} />
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
