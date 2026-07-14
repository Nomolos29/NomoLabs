'use client';

import React from 'react';
import { TrendingUp, Users, DollarSign, BookOpen, BarChart3 } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/common/Card';

export default function AdminAnalytics() {
  const metrics = [
    { title: 'Total Revenue', value: '₦2.4M', change: '+18%', icon: DollarSign, color: 'green' },
    { title: 'Active Students', value: '1,247', change: '+12%', icon: Users, color: 'blue' },
    { title: 'Course Completion', value: '87%', change: '+5%', icon: BookOpen, color: 'purple' },
    { title: 'Avg. Score', value: '88%', change: '+3%', icon: TrendingUp, color: 'orange' },
  ];

  const coursePerformance = [
    { course: 'Web Development', students: 247, completion: 89, avgScore: 87 },
    { course: 'UI/UX Design', students: 189, completion: 92, avgScore: 91 },
    { course: 'Content Writing', students: 156, completion: 85, avgScore: 86 },
  ];

  return (
    <DashboardLayout
      userType="admin"
      userName="Admin User"
      userAvatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
      userEmail="admin@nomolabs.com"
    >
      <div className="p-4 sm:p-6 lg:p-8 bg-slate-50 min-h-screen">
        <div className="mb-6">
          <h1 className="text-lg font-semibold text-slate-800">Analytics & Reports</h1>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${
                  metric.color === 'green' ? 'from-green-500 to-emerald-500' :
                  metric.color === 'blue' ? 'from-blue-500 to-indigo-500' :
                  metric.color === 'purple' ? 'from-purple-500 to-violet-500' :
                  'from-orange-500 to-red-500'
                } rounded-lg flex items-center justify-center`}>
                  <metric.icon size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">{metric.value}</p>
                  <p className="text-slate-600 text-sm">{metric.title}</p>
                  <p className="text-green-600 text-xs font-semibold">{metric.change}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Course Performance */}
        <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <BarChart3 size={20} className="text-white" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">Course Performance</h2>
          </div>

          <div className="space-y-4">
            {coursePerformance.map((course, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                  <h3 className="font-semibold text-slate-800">{course.course}</h3>
                  <span className="text-sm text-slate-600">{course.students} students</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Completion Rate</span>
                      <span className="font-semibold">{course.completion}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                        style={{ width: `${course.completion}%` }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Average Score</span>
                      <span className="font-semibold">{course.avgScore}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                        style={{ width: `${course.avgScore}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Revenue Chart Placeholder */}
        <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-6">Revenue Trends</h2>
          <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 size={48} className="mx-auto text-slate-400 mb-4" />
              <p className="text-slate-600">Chart visualization would go here</p>
              <p className="text-sm text-slate-500">Integration with charting library needed</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}