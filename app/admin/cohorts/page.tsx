'use client';

import React from 'react';
import { Calendar, Users, Plus, Clock } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import Badge from '@/components/common/Badge';

export default function AdminCohorts() {
  const cohorts = [
    {
      id: '1',
      name: 'Web Development - Cohort 5',
      course: 'Web Development Fundamentals',
      students: 28,
      maxStudents: 30,
      startDate: '2025-02-01',
      endDate: '2025-03-29',
      schedule: 'Mon, Wed, Fri - 7:00 PM',
      status: 'upcoming',
      instructor: 'Michael Chen',
    },
    {
      id: '2',
      name: 'UI/UX Design - Cohort 3',
      course: 'UI/UX Design Masterclass',
      students: 22,
      maxStudents: 25,
      startDate: '2025-02-05',
      endDate: '2025-04-02',
      schedule: 'Tue, Thu - 6:00 PM',
      status: 'upcoming',
      instructor: 'Sarah Johnson',
    },
    {
      id: '3',
      name: 'Web Development - Cohort 4',
      course: 'Web Development Fundamentals',
      students: 30,
      maxStudents: 30,
      startDate: '2025-01-15',
      endDate: '2025-03-12',
      schedule: 'Mon, Wed, Fri - 7:00 PM',
      status: 'active',
      instructor: 'Michael Chen',
    },
  ];

  return (
    <DashboardLayout
      userType="admin"
      userName="Admin User"
      userAvatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
      userEmail="admin@nomolabs.com"
    >
      <div className="p-4 sm:p-6 lg:p-8 bg-slate-50 min-h-screen">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <h1 className="text-lg font-semibold text-slate-800">Cohort Management</h1>
          <Button variant="primary" className="w-full sm:w-auto shrink-0">
            <Plus size={16} />
            Create Cohort
          </Button>
        </div>

        <div className="grid gap-4">
          {cohorts.map((cohort) => (
            <Card key={cohort.id} className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-800">{cohort.name}</h3>
                    <Badge variant={cohort.status === 'active' ? 'success' : cohort.status === 'upcoming' ? 'warning' : 'secondary'}>
                      {cohort.status}
                    </Badge>
                  </div>
                  
                  <p className="text-slate-600 mb-3 text-sm sm:text-base">{cohort.course}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="shrink-0" />
                      {cohort.students}/{cohort.maxStudents} students
                    </div>
                    <div className="flex items-center gap-2 min-w-0">
                      <Clock size={16} className="shrink-0" />
                      <span className="truncate">{cohort.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 min-w-0">
                      <Calendar size={16} className="shrink-0" />
                      <span className="truncate">{cohort.startDate} - {cohort.endDate}</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 text-sm text-slate-600">
                    Instructor: {cohort.instructor}
                  </div>
                </div>

                <div className="flex flex-row lg:flex-col gap-2 shrink-0">
                  <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                    Manage
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 lg:flex-none">
                    View Details
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