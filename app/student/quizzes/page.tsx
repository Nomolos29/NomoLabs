'use client';

import React, { useState } from 'react';
import { Clock, CheckCircle, AlertCircle, Play, Trophy, Calendar } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import ProgressBar from '@/components/common/ProgressBar';

export default function StudentQuizzes() {
  const [activeTab, setActiveTab] = useState<'pending' | 'completed'>('pending');

  const pendingQuizzes = [
    {
      id: '1',
      title: 'React Components & Props',
      course: 'Web Development',
      questions: 15,
      timeLimit: 30,
      difficulty: 'Medium',
      dueDate: 'Oct 10, 2025',
    },
    {
      id: '2',
      title: 'JavaScript ES6+ Features',
      course: 'Web Development',
      questions: 20,
      timeLimit: 45,
      difficulty: 'Hard',
      dueDate: 'Oct 12, 2025',
    },
  ];

  const completedQuizzes = [
    {
      id: '3',
      title: 'HTML & CSS Fundamentals',
      course: 'Web Development',
      score: 92,
      maxScore: 100,
      completedDate: 'Oct 1, 2025',
      timeSpent: 25,
      questions: 12,
    },
    {
      id: '4',
      title: 'JavaScript Basics',
      course: 'Web Development',
      score: 85,
      maxScore: 100,
      completedDate: 'Sep 28, 2025',
      timeSpent: 35,
      questions: 18,
    },
    {
      id: '5',
      title: 'Responsive Design',
      course: 'Web Development',
      score: 88,
      maxScore: 100,
      completedDate: 'Sep 25, 2025',
      timeSpent: 20,
      questions: 10,
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
          <h1 className="text-lg font-semibold text-slate-800">Quizzes</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <AlertCircle size={24} className="text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">{pendingQuizzes.length}</p>
                <p className="text-slate-600">Pending Quizzes</p>
              </div>
            </div>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <CheckCircle size={24} className="text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">{completedQuizzes.length}</p>
                <p className="text-slate-600">Completed</p>
              </div>
            </div>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Trophy size={24} className="text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">88%</p>
                <p className="text-slate-600">Average Score</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <Button
            variant={activeTab === 'pending' ? 'primary' : 'ghost'}
            onClick={() => setActiveTab('pending')}
          >
            Pending ({pendingQuizzes.length})
          </Button>
          <Button
            variant={activeTab === 'completed' ? 'primary' : 'ghost'}
            onClick={() => setActiveTab('completed')}
          >
            Completed ({completedQuizzes.length})
          </Button>
        </div>

        {/* Pending Quizzes */}
        {activeTab === 'pending' && (
          <div className="space-y-4">
            {pendingQuizzes.map((quiz) => (
              <Card key={quiz.id} className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="primary">{quiz.course}</Badge>
                      <Badge variant={quiz.difficulty === 'Hard' ? 'danger' : quiz.difficulty === 'Medium' ? 'warning' : 'success'}>
                        {quiz.difficulty}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{quiz.title}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} />
                        {quiz.questions} questions
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        {quiz.timeLimit} minutes
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertCircle size={16} />
                        Due: {quiz.dueDate}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button variant="primary" size="sm">
                      <Play size={16} />
                      Start Quiz
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Completed Quizzes */}
        {activeTab === 'completed' && (
          <div className="space-y-4">
            {completedQuizzes.map((quiz) => (
              <Card key={quiz.id} className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="primary">{quiz.course}</Badge>
                      <Badge variant={quiz.score >= 90 ? 'success' : quiz.score >= 70 ? 'warning' : 'danger'}>
                        {quiz.score >= 90 ? 'Excellent' : quiz.score >= 70 ? 'Good' : 'Needs Improvement'}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{quiz.title}</h3>
                    
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-600">Score</span>
                        <span className="font-semibold text-slate-800">{quiz.score}/{quiz.maxScore}</span>
                      </div>
                      <ProgressBar 
                        progress={quiz.score} 
                        color={quiz.score >= 90 ? 'green' : quiz.score >= 70 ? 'orange' : 'red'}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} />
                        {quiz.questions} questions
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        {quiz.timeSpent} minutes
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {quiz.completedDate}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="sm">
                      View Results
                    </Button>
                    <Button variant="ghost" size="sm">
                      Retake Quiz
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}