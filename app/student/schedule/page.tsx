'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Video, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';

export default function StudentSchedule() {
  const [currentWeek, setCurrentWeek] = useState(0);

  const weeklySchedule = [
    {
      week: 'Oct 7 - Oct 13, 2025',
      classes: [
        {
          id: '1',
          course: 'Web Development',
          title: 'React Hooks Deep Dive',
          date: 'Monday, Oct 7',
          time: '7:00 PM - 9:00 PM',
          instructor: 'Michael Chen',
          type: 'live',
          status: 'upcoming',
        },
        {
          id: '2',
          course: 'Web Development',
          title: 'State Management with Context',
          date: 'Wednesday, Oct 9',
          time: '7:00 PM - 9:00 PM',
          instructor: 'Michael Chen',
          type: 'live',
          status: 'upcoming',
        },
        {
          id: '3',
          course: 'Web Development',
          title: 'API Integration Workshop',
          date: 'Friday, Oct 11',
          time: '7:00 PM - 9:00 PM',
          instructor: 'Michael Chen',
          type: 'workshop',
          status: 'upcoming',
        },
      ],
    },
    {
      week: 'Oct 14 - Oct 20, 2025',
      classes: [
        {
          id: '4',
          course: 'Web Development',
          title: 'Building REST APIs',
          date: 'Monday, Oct 14',
          time: '7:00 PM - 9:00 PM',
          instructor: 'Michael Chen',
          type: 'live',
          status: 'scheduled',
        },
        {
          id: '5',
          course: 'Web Development',
          title: 'Database Integration',
          date: 'Wednesday, Oct 16',
          time: '7:00 PM - 9:00 PM',
          instructor: 'Michael Chen',
          type: 'live',
          status: 'scheduled',
        },
      ],
    },
  ];

  const currentSchedule = weeklySchedule[currentWeek];

  return (
    <DashboardLayout
      userType="student"
      userName="David Okafor"
      userAvatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop"
      userEmail="david.okafor@example.com"
    >
      <div className="p-4 sm:p-6 lg:p-8 bg-slate-50 min-h-screen">
        <div className="mb-6">
          <h1 className="text-lg font-semibold text-slate-800">Class Schedule</h1>
        </div>

        {/* Week Navigation */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentWeek(Math.max(0, currentWeek - 1))}
              disabled={currentWeek === 0}
              className="w-full sm:w-auto order-2 sm:order-1"
            >
              <ChevronLeft size={16} />
              Previous Week
            </Button>
            
            <div className="text-center order-1 sm:order-2">
              <h3 className="text-base sm:text-lg font-semibold text-slate-800">{currentSchedule.week}</h3>
              <p className="text-sm text-slate-600">Week {currentWeek + 1}</p>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentWeek(Math.min(weeklySchedule.length - 1, currentWeek + 1))}
              disabled={currentWeek === weeklySchedule.length - 1}
              className="w-full sm:w-auto order-3"
            >
              Next Week
              <ChevronRight size={16} />
            </Button>
          </div>
        </Card>

        {/* Classes List */}
        <div className="space-y-4">
          {currentSchedule.classes.map((classItem) => (
            <Card key={classItem.id} className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <Badge variant="primary">{classItem.course}</Badge>
                    <Badge variant={classItem.type === 'workshop' ? 'warning' : 'info'}>
                      {classItem.type}
                    </Badge>
                    <Badge variant={classItem.status === 'upcoming' ? 'success' : 'secondary'}>
                      {classItem.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{classItem.title}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {classItem.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {classItem.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      Instructor: {classItem.instructor}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button variant="primary" size="sm">
                    <Video size={16} />
                    {classItem.status === 'upcoming' ? 'Join Class' : 'View Details'}
                  </Button>
                  <Button variant="outline" size="sm">
                    Add to Calendar
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {currentSchedule.classes.length === 0 && (
          <Card className="text-center py-12 border border-slate-200">
            <Calendar size={48} className="mx-auto text-slate-400 mb-4" />
            <h3 className="text-lg font-semibold text-slate-600 mb-2">No classes this week</h3>
            <p className="text-slate-500">Check back later for updated schedule</p>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}