'use client';

import React, { useState } from 'react';
import { BookOpen, Plus, Edit, Trash2, Eye, Users } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import Badge from '@/components/common/Badge';

export default function AdminCourses() {
  const courses = [
    {
      id: '1',
      title: 'Web Development Fundamentals',
      category: 'Web Development',
      students: 247,
      cohorts: 3,
      status: 'active',
      price: 50000,
      created: '2025-01-01',
    },
    {
      id: '2',
      title: 'UI/UX Design Masterclass',
      category: 'UI/UX Design',
      students: 189,
      cohorts: 2,
      status: 'active',
      price: 50000,
      created: '2025-01-01',
    },
    {
      id: '3',
      title: 'Professional Content Writing',
      category: 'Content Writing',
      students: 156,
      cohorts: 2,
      status: 'active',
      price: 45000,
      created: '2025-01-01',
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
          <h1 className="text-lg font-semibold text-slate-800">Course Management</h1>
          <Button variant="primary" className="w-full sm:w-auto shrink-0">
            <Plus size={16} />
            Add Course
          </Button>
        </div>

        <div className="grid gap-4">
          {courses.map((course) => (
            <Card key={course.id} className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-800">{course.title}</h3>
                    <Badge variant={course.status === 'active' ? 'success' : 'secondary'}>
                      {course.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2 min-w-0">
                      <BookOpen size={16} className="shrink-0" />
                      <span className="truncate">{course.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="shrink-0" />
                      {course.students} students
                    </div>
                    <div>₦{course.price.toLocaleString()}</div>
                    <div>{course.cohorts} cohorts</div>
                  </div>
                </div>

                <div className="flex gap-2 shrink-0 self-end sm:self-start">
                  <Button variant="ghost" size="sm">
                    <Eye size={16} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit size={16} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 size={16} />
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