export interface Cohort {
  id: string;
  courseId: string;
  cohortName: string;
  startDate: string;
  endDate: string;
  schedule: {
    days: string[];
    time: string;
  };
  instructor: {
    lead: string;
    assistants: string[];
  };
  students: string[];
  maxStudents: number;
  status: 'upcoming' | 'active' | 'completed';
  customizations: {
    overridePrice?: number;
    additionalMaterials: string[];
    notes: string;
  };
  createdAt: string;
}

export const mockCohorts: Cohort[] = [
  {
    id: 'cohort-001',
    courseId: 'course-001',
    cohortName: 'Web Development - Cohort 5 (Feb 2025)',
    startDate: '2025-02-01T00:00:00Z',
    endDate: '2025-03-29T00:00:00Z',
    schedule: {
      days: ['Monday', 'Wednesday', 'Friday'],
      time: '19:00 - 21:00 WAT',
    },
    instructor: {
      lead: 'mentor-002',
      assistants: ['mentor-005'],
    },
    students: ['student-001', 'student-004'],
    maxStudents: 30,
    status: 'upcoming',
    customizations: {
      additionalMaterials: [],
      notes: 'Early bird discount available until Jan 25',
    },
    createdAt: '2025-01-05T00:00:00Z',
  },
  {
    id: 'cohort-002',
    courseId: 'course-002',
    cohortName: 'UI/UX Design - Cohort 3 (Feb 2025)',
    startDate: '2025-02-05T00:00:00Z',
    endDate: '2025-04-02T00:00:00Z',
    schedule: {
      days: ['Tuesday', 'Thursday'],
      time: '18:00 - 20:30 WAT',
    },
    instructor: {
      lead: 'mentor-001',
      assistants: ['mentor-004'],
    },
    students: ['student-002', 'student-004'],
    maxStudents: 25,
    status: 'upcoming',
    customizations: {
      additionalMaterials: [],
      notes: 'Includes bonus Figma workshop',
    },
    createdAt: '2025-01-06T00:00:00Z',
  },
  {
    id: 'cohort-003',
    courseId: 'course-003',
    cohortName: 'Content Writing - Cohort 4 (Feb 2025)',
    startDate: '2025-02-10T00:00:00Z',
    endDate: '2025-03-23T00:00:00Z',
    schedule: {
      days: ['Monday', 'Thursday'],
      time: '17:00 - 19:00 WAT',
    },
    instructor: {
      lead: 'mentor-003',
      assistants: ['mentor-006'],
    },
    students: ['student-003', 'student-005'],
    maxStudents: 35,
    status: 'upcoming',
    customizations: {
      additionalMaterials: [],
      notes: 'Portfolio review sessions included',
    },
    createdAt: '2025-01-07T00:00:00Z',
  },
  {
    id: 'cohort-004',
    courseId: 'course-001',
    cohortName: 'Web Development - Cohort 4 (Jan 2025)',
    startDate: '2025-01-15T00:00:00Z',
    endDate: '2025-03-12T00:00:00Z',
    schedule: {
      days: ['Monday', 'Wednesday', 'Friday'],
      time: '19:00 - 21:00 WAT',
    },
    instructor: {
      lead: 'mentor-002',
      assistants: [],
    },
    students: [],
    maxStudents: 30,
    status: 'active',
    customizations: {
      additionalMaterials: [],
      notes: '',
    },
    createdAt: '2024-12-20T00:00:00Z',
  },
];
