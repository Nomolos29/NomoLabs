'use client';

import React, { useState } from 'react';
import { Settings, Bell, Shield, Brain, Monitor, Globe, Moon, Sun } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import Badge from '@/components/common/Badge';

export default function StudentSettings() {
  const [aiSettings, setAiSettings] = useState({
    adaptiveDifficulty: true,
    personalizedPath: true,
    aiTutor: true,
    smartReminders: true,
  });

  const [notifications, setNotifications] = useState({
    classReminders: true,
    quizDeadlines: true,
    progressUpdates: false,
    aiInsights: true,
  });

  const [preferences, setPreferences] = useState({
    theme: 'light',
    language: 'en',
    timezone: 'WAT',
  });

  return (
    <DashboardLayout
      userType="student"
      userName="David Okafor"
      userAvatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop"
      userEmail="david.okafor@example.com"
    >
      <div className="p-4 sm:p-6 lg:p-8 bg-slate-50 min-h-screen">
        <div className="mb-6">
          <h1 className="text-lg font-semibold text-slate-800">Settings</h1>
        </div>

        <div className="space-y-6">
          {/* AI Learning Settings */}
          <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center">
                <Brain size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-800">AI Learning Assistant</h2>
                <p className="text-sm text-slate-600">Customize your AI-powered learning experience</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-slate-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-slate-800">Adaptive Difficulty</h3>
                  <p className="text-sm text-slate-600">AI adjusts course difficulty based on your performance</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="success">Recommended</Badge>
                  <button
                    onClick={() => setAiSettings(prev => ({ ...prev, adaptiveDifficulty: !prev.adaptiveDifficulty }))}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      aiSettings.adaptiveDifficulty ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      aiSettings.adaptiveDifficulty ? 'translate-x-6' : 'translate-x-0.5'
                    }`} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-slate-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-slate-800">Personalized Learning Path</h3>
                  <p className="text-sm text-slate-600">AI creates custom curriculum based on your goals</p>
                </div>
                <button
                  onClick={() => setAiSettings(prev => ({ ...prev, personalizedPath: !prev.personalizedPath }))}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    aiSettings.personalizedPath ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    aiSettings.personalizedPath ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-slate-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-slate-800">AI Tutor</h3>
                  <p className="text-sm text-slate-600">Get instant help and explanations from AI</p>
                </div>
                <button
                  onClick={() => setAiSettings(prev => ({ ...prev, aiTutor: !prev.aiTutor }))}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    aiSettings.aiTutor ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    aiSettings.aiTutor ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-slate-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-slate-800">Smart Reminders</h3>
                  <p className="text-sm text-slate-600">AI sends reminders at optimal learning times</p>
                </div>
                <button
                  onClick={() => setAiSettings(prev => ({ ...prev, smartReminders: !prev.smartReminders }))}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    aiSettings.smartReminders ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    aiSettings.smartReminders ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
            </div>
          </Card>

          {/* Notifications */}
          <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <Bell size={20} className="text-white" />
              </div>
              <h2 className="text-lg font-semibold text-slate-800">Notifications</h2>
            </div>

            <div className="space-y-4">
              {Object.entries({
                classReminders: 'Class Reminders',
                quizDeadlines: 'Quiz Deadlines',
                progressUpdates: 'Progress Updates',
                aiInsights: 'AI Learning Insights',
              }).map(([key, label]) => (
                <div key={key} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-slate-50 rounded-lg">
                  <h3 className="font-medium text-slate-800">{label}</h3>
                  <button
                    onClick={() => setNotifications(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      notifications[key as keyof typeof notifications] ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      notifications[key as keyof typeof notifications] ? 'translate-x-6' : 'translate-x-0.5'
                    }`} />
                  </button>
                </div>
              ))}
            </div>
          </Card>

          {/* Preferences */}
          <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Settings size={20} className="text-white" />
              </div>
              <h2 className="text-lg font-semibold text-slate-800">Preferences</h2>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Monitor size={20} className="text-slate-600" />
                  <h3 className="font-medium text-slate-800">Theme</h3>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={preferences.theme === 'light' ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => setPreferences(prev => ({ ...prev, theme: 'light' }))}
                  >
                    <Sun size={16} />
                    Light
                  </Button>
                  <Button
                    variant={preferences.theme === 'dark' ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => setPreferences(prev => ({ ...prev, theme: 'dark' }))}
                  >
                    <Moon size={16} />
                    Dark
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Globe size={20} className="text-slate-600" />
                  <h3 className="font-medium text-slate-800">Language</h3>
                </div>
                <select 
                  value={preferences.language}
                  onChange={(e) => setPreferences(prev => ({ ...prev, language: e.target.value }))}
                  className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Account Security */}
          <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Shield size={20} className="text-white" />
              </div>
              <h2 className="text-lg font-semibold text-slate-800">Security</h2>
            </div>

            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Two-Factor Authentication
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Download My Data
              </Button>
              <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                Delete Account
              </Button>
            </div>
          </Card>

          <div className="flex justify-end">
            <Button variant="primary">Save Changes</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}