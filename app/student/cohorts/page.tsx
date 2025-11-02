'use client';

import React from 'react';
import { Calendar, Users, Clock, BookOpen, ChevronRight } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';

export default function StudentCohorts() {
  const enrolledCohorts = [
    {
      id: 'cohort-001',
      courseName: 'Web Development Fundamentals',
      cohortName: 'Web Development - Cohort 5 (Feb 2025)',
      progress: 65,
      status: 'active',
      schedule: 'Mon, Wed, Fri - 7:00 PM',
      instructor: 'Michael Chen',
      studentsCount: 28,
      nextClass: 'Monday, Oct 7 - 7:00 PM',
      completedLessons: 13,
      totalLessons: 20,
    },
    {
      id: 'cohort-002',
      courseName: 'UI/UX Design Masterclass',
      cohortName: 'UI/UX Design - Cohort 3 (Feb 2025)',
      progress: 30,
      status: 'upcoming',
      schedule: 'Tue, Thu - 6:00 PM',
      instructor: 'Sarah Johnson',
      studentsCount: 22,
      nextClass: 'Tuesday, Feb 5 - 6:00 PM',
      completedLessons: 0,
      totalLessons: 16,
    },
  ];

  return (
    <DashboardLayout
      userType="student"
      userName="David Okafor"
      userAvatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop"
      userEmail="david.okafor@example.com"
    >
      <div className="p-8 bg-slate-50 min-h-screen">
        <div className="mb-6">
          <h1 className="text-lg font-semibold text-slate-800">My Cohorts</h1>
        </div>

        <div className="grid gap-6">
          {enrolledCohorts.map((cohort) => (
            <Card key={cohort.id} className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-slate-800">{cohort.courseName}</h3>
                    <Badge variant={cohort.status === 'active' ? 'success' : 'warning'}>
                      {cohort.status}
                    </Badge>
                  </div>
                  
                  <p className="text-slate-600 mb-4">{cohort.cohortName}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar size={16} />
                      {cohort.schedule}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users size={16} />
                      {cohort.studentsCount} students
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <BookOpen size={16} />
                      {cohort.completedLessons}/{cohort.totalLessons} lessons
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">Progress</span>
                      <span className="font-semibold text-slate-800">{cohort.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${cohort.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock size={16} />
                    Next class: {cohort.nextClass}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button variant="primary" size="sm">
                    {cohort.status === 'active' ? 'Join Class' : 'View Details'}
                  </Button>
                  <Button variant="outline" size="sm">
                    View Materials
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}