export interface Mentor {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  expertise: string[];
  courses: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    portfolio?: string;
  };
  credentials: string;
  yearsOfExperience: number;
}

export const mockMentors: Mentor[] = [
  {
    id: 'mentor-001',
    name: 'Sarah Johnson',
    role: 'Senior UX Designer',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    bio: 'Award-winning UX Designer with experience at top tech companies like Google and Airbnb. Passionate about creating inclusive, accessible designs that solve real user problems.',
    expertise: ['UI/UX Design', 'Figma', 'Design Systems', 'User Research', 'Accessibility'],
    courses: ['ui-ux-design-masterclass'],
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      portfolio: 'https://sarahjohnson.design',
    },
    credentials: 'MA Design, Google UX Certificate',
    yearsOfExperience: 8,
  },
  {
    id: 'mentor-002',
    name: 'Michael Chen',
    role: 'Full Stack Developer',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'Senior Full Stack Developer with 8+ years of experience building scalable web applications. Former tech lead at Microsoft and passionate mentor to aspiring developers.',
    expertise: ['React', 'Node.js', 'JavaScript', 'TypeScript', 'Web Development', 'Cloud Architecture'],
    courses: ['web-development-fundamentals'],
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      portfolio: 'https://michaelchen.dev',
    },
    credentials: 'BS Computer Science, Meta Certified Developer',
    yearsOfExperience: 10,
  },
  {
    id: 'mentor-003',
    name: 'Emily Rodriguez',
    role: 'Content Strategist',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    bio: 'Professional content writer and strategist with bylines in TechCrunch, Forbes, and Wired. Helping brands tell compelling stories that convert.',
    expertise: ['SEO Writing', 'Copywriting', 'Content Marketing', 'Storytelling', 'Brand Voice'],
    courses: ['professional-content-writing'],
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      portfolio: 'https://emilyrodriguez.com',
    },
    credentials: 'BA Journalism, Content Marketing Certified',
    yearsOfExperience: 7,
  },
  {
    id: 'mentor-004',
    name: 'James Okonkwo',
    role: 'Product Designer',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    bio: 'Product designer specializing in mobile and web experiences. Led design for fintech products serving millions of users across Africa.',
    expertise: ['Product Design', 'Mobile Design', 'Prototyping', 'Design Thinking'],
    courses: ['ui-ux-design-masterclass'],
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    credentials: 'BFA Design, IDEO Design Thinking Certificate',
    yearsOfExperience: 6,
  },
  {
    id: 'mentor-005',
    name: 'Aisha Bello',
    role: 'Frontend Engineer',
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop',
    bio: 'Frontend specialist with expertise in React and modern web technologies. Building fast, accessible web applications that users love.',
    expertise: ['React', 'JavaScript', 'CSS', 'Performance Optimization', 'Accessibility'],
    courses: ['web-development-fundamentals'],
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      portfolio: 'https://aishabello.dev',
    },
    credentials: 'BS Software Engineering, AWS Certified',
    yearsOfExperience: 5,
  },
  {
    id: 'mentor-006',
    name: 'David Martinez',
    role: 'Technical Writer',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    bio: 'Technical writer specializing in developer documentation and API guides. Making complex technical concepts accessible to all audiences.',
    expertise: ['Technical Writing', 'Documentation', 'API Documentation', 'Developer Content'],
    courses: ['professional-content-writing'],
    socialLinks: {
      linkedin: 'https://linkedin.com',
      portfolio: 'https://davidmartinez.io',
    },
    credentials: 'MS Technical Communication, Google Technical Writing Certificate',
    yearsOfExperience: 6,
  },
];
