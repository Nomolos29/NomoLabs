'use client';

import React, { useState } from 'react';
import { Bell, CheckCircle, AlertCircle, Info, Calendar, MessageSquare, CreditCard, BookOpen } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';

export default function StudentNotifications() {
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

  const notifications = [
    {
      id: '1',
      type: 'class',
      title: 'Upcoming Class: React Hooks',
      message: 'Your Web Development class starts in 30 minutes',
      time: '30 minutes ago',
      read: false,
      icon: Calendar,
      color: 'blue',
    },
    {
      id: '2',
      type: 'quiz',
      title: 'Quiz Available',
      message: 'New quiz on JavaScript ES6+ is now available',
      time: '2 hours ago',
      read: false,
      icon: BookOpen,
      color: 'green',
    },
    {
      id: '3',
      type: 'payment',
      title: 'Payment Successful',
      message: 'Your payment for UI/UX Design course has been processed',
      time: '1 day ago',
      read: true,
      icon: CreditCard,
      color: 'purple',
    },
    {
      id: '4',
      type: 'message',
      title: 'Message from Instructor',
      message: 'Michael Chen sent you feedback on your project',
      time: '2 days ago',
      read: true,
      icon: MessageSquare,
      color: 'orange',
    },
    {
      id: '5',
      type: 'system',
      title: 'Course Material Updated',
      message: 'New materials added to Web Development library',
      time: '3 days ago',
      read: true,
      icon: Info,
      color: 'gray',
    },
  ];

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread') return !notification.read;
    if (filter === 'read') return notification.read;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIconColor = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-indigo-500',
      green: 'from-green-500 to-emerald-500',
      purple: 'from-purple-500 to-violet-500',
      orange: 'from-orange-500 to-red-500',
      gray: 'from-gray-500 to-slate-500',
    };
    return colors[color as keyof typeof colors] || colors.gray;
  };

  return (
    <DashboardLayout
      userType="student"
      userName="David Okafor"
      userAvatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop"
      userEmail="david.okafor@example.com"
    >
      <div className="p-4 sm:p-6 lg:p-8 bg-slate-50 min-h-screen">
        <div className="mb-6">
          <h1 className="text-lg font-semibold text-slate-800">Notifications</h1>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-6">
          <Button
            variant={filter === 'all' ? 'primary' : 'ghost'}
            onClick={() => setFilter('all')}
            size="sm"
          >
            All ({notifications.length})
          </Button>
          <Button
            variant={filter === 'unread' ? 'primary' : 'ghost'}
            onClick={() => setFilter('unread')}
            size="sm"
          >
            Unread ({unreadCount})
          </Button>
          <Button
            variant={filter === 'read' ? 'primary' : 'ghost'}
            onClick={() => setFilter('read')}
            size="sm"
          >
            Read ({notifications.length - unreadCount})
          </Button>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.map((notification) => {
            const IconComponent = notification.icon;
            const colorClass = getIconColor(notification.color);
            
            return (
              <Card 
                key={notification.id} 
                className={`bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300 ${
                  !notification.read ? 'ring-2 ring-blue-100' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${colorClass} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <IconComponent size={20} className="text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-slate-800 truncate">{notification.title}</h3>
                      {!notification.read && (
                        <Badge variant="primary" className="text-xs">New</Badge>
                      )}
                    </div>
                    <p className="text-slate-600 text-sm mb-2">{notification.message}</p>
                    <p className="text-xs text-slate-500">{notification.time}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    {!notification.read && (
                      <Button variant="ghost" size="sm">
                        <CheckCircle size={16} />
                        Mark Read
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {filteredNotifications.length === 0 && (
          <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm text-center py-12">
            <Bell size={48} className="mx-auto text-slate-400 mb-4" />
            <h3 className="text-lg font-semibold text-slate-600 mb-2">No notifications</h3>
            <p className="text-slate-500">
              {filter === 'unread' ? 'All caught up! No unread notifications.' : 'No notifications to show.'}
            </p>
          </Card>
        )}

        {/* Quick Actions */}
        {unreadCount > 0 && (
          <div className="mt-6 flex justify-center">
            <Button variant="outline">
              Mark All as Read
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}