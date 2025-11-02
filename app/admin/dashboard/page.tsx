'use client';

import React from 'react';
import { Users, BookOpen, DollarSign, TrendingUp, Calendar, Award } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/common/Card';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Students',
      value: '1,247',
      change: '+12%',
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Active Courses',
      value: '3',
      change: '+0%',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Revenue (MTD)',
      value: '₦2.4M',
      change: '+18%',
      icon: DollarSign,
      color: 'from-purple-500 to-violet-500',
    },
    {
      title: 'Completion Rate',
      value: '87%',
      change: '+5%',
      icon: Award,
      color: 'from-orange-500 to-red-500',
    },
  ];

  const recentActivities = [
    { id: 1, action: 'New student enrolled in Web Development', time: '2 hours ago' },
    { id: 2, action: 'Quiz submitted by David Okafor', time: '4 hours ago' },
    { id: 3, action: 'New cohort created for UI/UX Design', time: '6 hours ago' },
    { id: 4, action: 'Payment received from Chioma Nwankwo', time: '8 hours ago' },
    { id: 5, action: 'Course material uploaded to Web Dev', time: '1 day ago' },
  ];

  return (
    <DashboardLayout
      userType="admin"
      userName="Admin User"
      userAvatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
      userEmail="admin@nomolabs.com"
    >
      <div className="p-8 bg-slate-50 min-h-screen">
        <div className="mb-6">
          <h1 className="text-lg font-semibold text-slate-800">Admin Dashboard</h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                  <p className="text-slate-600 text-sm">{stat.title}</p>
                  <p className="text-green-600 text-xs font-semibold">{stat.change}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Recent Activities</h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-800">{activity.action}</p>
                    <p className="text-xs text-slate-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-left">
                <Users size={24} className="text-blue-600 mb-2" />
                <p className="font-semibold text-slate-800">Manage Students</p>
                <p className="text-xs text-slate-600">View and manage student accounts</p>
              </button>
              <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-left">
                <BookOpen size={24} className="text-green-600 mb-2" />
                <p className="font-semibold text-slate-800">Course Management</p>
                <p className="text-xs text-slate-600">Create and edit courses</p>
              </button>
              <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-left">
                <Calendar size={24} className="text-purple-600 mb-2" />
                <p className="font-semibold text-slate-800">Cohort Scheduling</p>
                <p className="text-xs text-slate-600">Schedule new cohorts</p>
              </button>
              <button className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors text-left">
                <TrendingUp size={24} className="text-orange-600 mb-2" />
                <p className="font-semibold text-slate-800">Analytics</p>
                <p className="text-xs text-slate-600">View detailed reports</p>
              </button>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}