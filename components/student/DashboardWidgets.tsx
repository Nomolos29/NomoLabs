import React from 'react';
import { Calendar, Award, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Card from '../common/Card';
import ProgressBar from '../common/ProgressBar';
import Button from '../common/Button';

interface DashboardWidgetsProps {
  attendanceRate: number;
  averageScore: number;
  upcomingClasses: number;
}

export const DashboardWidgets: React.FC<DashboardWidgetsProps> = ({
  attendanceRate,
  averageScore,
  upcomingClasses,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
      {/* Attendance Card */}
      <Card hover={false} className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
            <Calendar size={22} className="text-white" />
          </div>
          <span className="text-3xl font-bold text-emerald-600">{attendanceRate}%</span>
        </div>
        <h3 className="font-semibold text-lg mb-3 text-slate-700">Attendance Rate</h3>
        <div className="bg-emerald-100 h-2 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-500" style={{width: `${attendanceRate}%`}}></div>
        </div>
      </Card>

      {/* Average Score Card */}
      <Card hover={false} className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
            <Award size={22} className="text-white" />
          </div>
          <span className="text-3xl font-bold text-blue-600">{averageScore}%</span>
        </div>
        <h3 className="font-semibold text-lg mb-3 text-slate-700">Average Score</h3>
        <div className="bg-blue-100 h-2 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-500" style={{width: `${averageScore}%`}}></div>
        </div>
      </Card>

      {/* Upcoming Classes Card */}
      <Card hover={false} className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
            <BookOpen size={22} className="text-white" />
          </div>
          <span className="text-3xl font-bold text-amber-600">{upcomingClasses}</span>
        </div>
        <h3 className="font-semibold text-lg mb-3 text-slate-700">Upcoming Classes</h3>
        <p className="text-slate-600 text-sm">In the next 7 days</p>
      </Card>
    </div>
  );
};

interface UpcomingClassesWidgetProps {
  classes: Array<{
    id: string;
    courseName: string;
    date: string;
    time: string;
    instructor: string;
  }>;
}

export const UpcomingClassesWidget: React.FC<UpcomingClassesWidgetProps> = ({ classes }) => {
  return (
    <Card className="border border-slate-200">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-slate-800">Upcoming Classes</h3>
        <Link href="/student/schedule">
          <span className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline">View All →</span>
        </Link>
      </div>
      <div className="space-y-3">
        {classes.slice(0, 3).map((classItem) => (
          <div
            key={classItem.id}
            className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 p-3 sm:p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200 border border-slate-200"
          >
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-slate-800 mb-2">{classItem.courseName}</h4>
              <p className="text-sm text-slate-600 mb-1">
                {classItem.date} at {classItem.time}
              </p>
              <p className="text-xs text-slate-500">Instructor: {classItem.instructor}</p>
            </div>
            <Button variant="primary" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto shrink-0">
              Join
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};

interface RecentScoresWidgetProps {
  scores: Array<{
    id: string;
    quizName: string;
    score: number;
    date: string;
  }>;
}

export const RecentScoresWidget: React.FC<RecentScoresWidgetProps> = ({ scores }) => {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'from-emerald-500 to-teal-500';
    if (score >= 80) return 'from-blue-500 to-indigo-500';
    if (score >= 70) return 'from-amber-500 to-orange-500';
    return 'from-rose-500 to-red-500';
  };

  const getScoreTextColor = (score: number) => {
    if (score >= 90) return 'text-emerald-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-amber-600';
    return 'text-rose-600';
  };

  return (
    <Card className="border border-slate-200">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-slate-800">Recent Quiz Scores</h3>
        <Link href="/student/quizzes">
          <span className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline">View All →</span>
        </Link>
      </div>
      <div className="space-y-4">
        {scores.slice(0, 3).map((quiz) => (
          <div key={quiz.id} className="space-y-2">
            <div className="flex justify-between items-center gap-3">
              <h4 className="font-semibold text-slate-800 truncate">{quiz.quizName}</h4>
              <span className={`text-xl font-bold shrink-0 ${getScoreTextColor(quiz.score)}`}>{quiz.score}%</span>
            </div>
            <div className="bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className={`bg-gradient-to-r ${getScoreColor(quiz.score)} h-full rounded-full transition-all duration-500`} style={{width: `${quiz.score}%`}}></div>
            </div>
            <p className="text-xs text-slate-500">{quiz.date}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
