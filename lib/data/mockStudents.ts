export interface Student {
  id: string;
  name: string;
  email: string;
  photo: string;
  enrolledCohorts: string[];
  attendanceRate: number;
  averageScore: number;
  status: 'active' | 'inactive' | 'completed';
  joinedDate: string;
  totalSpent: number;
}

export const mockStudents: Student[] = [
  {
    id: 'student-001',
    name: 'David Okafor',
    email: 'david.okafor@example.com',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
    enrolledCohorts: ['cohort-001'],
    attendanceRate: 95,
    averageScore: 88,
    status: 'active',
    joinedDate: '2025-01-10T00:00:00Z',
    totalSpent: 50000,
  },
  {
    id: 'student-002',
    name: 'Chioma Nwankwo',
    email: 'chioma.nwankwo@example.com',
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop',
    enrolledCohorts: ['cohort-002'],
    attendanceRate: 92,
    averageScore: 91,
    status: 'active',
    joinedDate: '2025-01-12T00:00:00Z',
    totalSpent: 50000,
  },
  {
    id: 'student-003',
    name: 'Ahmed Ibrahim',
    email: 'ahmed.ibrahim@example.com',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    enrolledCohorts: ['cohort-003'],
    attendanceRate: 88,
    averageScore: 85,
    status: 'active',
    joinedDate: '2025-01-15T00:00:00Z',
    totalSpent: 45000,
  },
  {
    id: 'student-004',
    name: 'Fatima Hassan',
    email: 'fatima.hassan@example.com',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
    enrolledCohorts: ['cohort-001', 'cohort-002'],
    attendanceRate: 97,
    averageScore: 93,
    status: 'active',
    joinedDate: '2025-01-08T00:00:00Z',
    totalSpent: 90000,
  },
  {
    id: 'student-005',
    name: 'Carlos Rodriguez',
    email: 'carlos.rodriguez@example.com',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    enrolledCohorts: ['cohort-003'],
    attendanceRate: 85,
    averageScore: 82,
    status: 'active',
    joinedDate: '2025-01-18T00:00:00Z',
    totalSpent: 45000,
  },
];
