'use client';

import React from 'react';
import { Users, Mail, Phone, Calendar } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import Avatar from '@/components/common/Avatar';

export default function AdminStudents() {
  const students = [
    {
      id: '1',
      name: 'David Okafor',
      email: 'david.okafor@example.com',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
      courses: ['Web Development'],
      status: 'active',
      joined: '2025-01-10',
      attendance: 95,
    },
    {
      id: '2',
      name: 'Chioma Nwankwo',
      email: 'chioma.nwankwo@example.com',
      photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop',
      courses: ['UI/UX Design'],
      status: 'active',
      joined: '2025-01-12',
      attendance: 92,
    },
    {
      id: '3',
      name: 'Ahmed Ibrahim',
      email: 'ahmed.ibrahim@example.com',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      courses: ['Content Writing'],
      status: 'active',
      joined: '2025-01-15',
      attendance: 88,
    },
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
          <h1 className="text-lg font-semibold text-slate-800">Student Management</h1>
        </div>

        <div className="grid gap-4">
          {students.map((student) => (
            <Card key={student.id} className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300">
              <div className="flex items-center gap-4">
                <Avatar src={student.photo} alt={student.name} size="lg" />
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-slate-800">{student.name}</h3>
                    <Badge variant={student.status === 'active' ? 'success' : 'secondary'}>
                      {student.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      {student.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      Joined {student.joined}
                    </div>
                    <div>Attendance: {student.attendance}%</div>
                  </div>
                  
                  <div className="mt-2">
                    <span className="text-sm text-slate-600">Courses: </span>
                    {student.courses.map((course, index) => (
                      <Badge key={index} variant="secondary" className="mr-2">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}