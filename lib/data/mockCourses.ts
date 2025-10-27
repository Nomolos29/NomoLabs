export interface Course {
  id: string;
  slug: string;
  title: string;
  category: 'Web Development' | 'Content Writing' | 'UI/UX Design';
  shortDescription: string;
  fullDescription: string;
  curriculum: {
    week: number;
    title: string;
    lessons: { title: string; description: string }[];
  }[];
  duration: string;
  difficultyLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  prerequisites: string[];
  learningOutcomes: string[];
  skills: string[];
  pricing: {
    basePrice: number;
    usdPrice: number;
    discountPrice?: number;
  };
  media: {
    thumbnail: string;
    banner: string;
    promoVideo?: string;
  };
  instructor: {
    name: string;
    bio: string;
    photo: string;
    credentials: string;
    socialLinks: {
      linkedin?: string;
      twitter?: string;
      portfolio?: string;
    };
  };
  defaultMaterials: string[];
  settings: {
    status: 'active' | 'draft' | 'archived';
    visibility: 'public' | 'private';
    maxStudentsPerCohort: number;
    certificateEnabled: boolean;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  createdAt: string;
  updatedAt: string;
}

export const mockCourses: Course[] = [
  {
    id: 'course-001',
    slug: 'web-development-fundamentals',
    title: 'Web Development Fundamentals',
    category: 'Web Development',
    shortDescription: 'Learn to build modern, responsive websites with HTML, CSS, JavaScript, and React.',
    fullDescription: 'Master the fundamentals of web development in this comprehensive 8-week cohort-based program. You\'ll learn HTML5, CSS3, JavaScript ES6+, and React.js through hands-on projects and live instruction. Build a complete portfolio of real-world projects including a personal website, e-commerce page, and interactive web application.',
    curriculum: [
      {
        week: 1,
        title: 'Introduction to HTML & CSS',
        lessons: [
          { title: 'HTML Basics & Semantic Markup', description: 'Understanding HTML structure and semantic tags' },
          { title: 'CSS Fundamentals & Box Model', description: 'Styling web pages and understanding layout' },
        ],
      },
      {
        week: 2,
        title: 'Advanced CSS & Responsive Design',
        lessons: [
          { title: 'Flexbox & Grid Layouts', description: 'Modern CSS layout techniques' },
          { title: 'Responsive Design & Media Queries', description: 'Building mobile-first websites' },
        ],
      },
      {
        week: 3,
        title: 'JavaScript Fundamentals',
        lessons: [
          { title: 'Variables, Data Types & Functions', description: 'JavaScript basics' },
          { title: 'DOM Manipulation & Events', description: 'Making web pages interactive' },
        ],
      },
      {
        week: 4,
        title: 'Modern JavaScript (ES6+)',
        lessons: [
          { title: 'Arrow Functions & Destructuring', description: 'Modern JS syntax' },
          { title: 'Promises & Async/Await', description: 'Handling asynchronous operations' },
        ],
      },
      {
        week: 5,
        title: 'Introduction to React',
        lessons: [
          { title: 'React Components & JSX', description: 'Building with React' },
          { title: 'Props & State Management', description: 'Managing component data' },
        ],
      },
      {
        week: 6,
        title: 'Advanced React Concepts',
        lessons: [
          { title: 'Hooks & Effect Management', description: 'Using React Hooks effectively' },
          { title: 'React Router & Navigation', description: 'Building multi-page applications' },
        ],
      },
      {
        week: 7,
        title: 'Working with APIs',
        lessons: [
          { title: 'Fetch API & REST Services', description: 'Integrating external data' },
          { title: 'State Management with Context', description: 'Global state management' },
        ],
      },
      {
        week: 8,
        title: 'Final Project & Deployment',
        lessons: [
          { title: 'Building a Complete Web Application', description: 'Capstone project' },
          { title: 'Deployment & Best Practices', description: 'Publishing your website' },
        ],
      },
    ],
    duration: '8 weeks',
    difficultyLevel: 'Beginner',
    prerequisites: ['Basic computer skills', 'Text editor installation'],
    learningOutcomes: [
      'Build responsive websites from scratch',
      'Master HTML5, CSS3, and JavaScript ES6+',
      'Create interactive web applications with React',
      'Understand modern web development workflows',
      'Deploy websites to production',
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'Git'],
    pricing: {
      basePrice: 50000,
      usdPrice: 35,
    },
    media: {
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      banner: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop',
      promoVideo: 'https://www.youtube.com/watch?v=example',
    },
    instructor: {
      name: 'Michael Chen',
      bio: 'Senior Full Stack Developer with 8+ years of experience building web applications for startups and Fortune 500 companies.',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      credentials: 'BS Computer Science, Meta Certified Developer',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        portfolio: 'https://example.com',
      },
    },
    defaultMaterials: [],
    settings: {
      status: 'active',
      visibility: 'public',
      maxStudentsPerCohort: 30,
      certificateEnabled: true,
    },
    seo: {
      metaTitle: 'Web Development Fundamentals - Learn HTML, CSS, JavaScript & React',
      metaDescription: 'Master web development in 8 weeks with live instruction. Build real projects and launch your career.',
      keywords: ['web development', 'HTML', 'CSS', 'JavaScript', 'React', 'coding bootcamp'],
    },
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-15T00:00:00Z',
  },
  {
    id: 'course-002',
    slug: 'ui-ux-design-masterclass',
    title: 'UI/UX Design Masterclass',
    category: 'UI/UX Design',
    shortDescription: 'Master user interface and user experience design with industry-standard tools and practices.',
    fullDescription: 'Transform your creative vision into beautiful, user-centered designs. This 8-week program covers design thinking, wireframing, prototyping, and user research. You\'ll master Figma, learn industry best practices, and build a professional portfolio.',
    curriculum: [
      {
        week: 1,
        title: 'Design Fundamentals & Principles',
        lessons: [
          { title: 'Color Theory & Typography', description: 'Foundation of visual design' },
          { title: 'Layout & Composition', description: 'Creating balanced designs' },
        ],
      },
      {
        week: 2,
        title: 'Introduction to Figma',
        lessons: [
          { title: 'Figma Basics & Interface', description: 'Getting started with Figma' },
          { title: 'Components & Auto Layout', description: 'Building design systems' },
        ],
      },
      {
        week: 3,
        title: 'User Research & Personas',
        lessons: [
          { title: 'Conducting User Interviews', description: 'Understanding user needs' },
          { title: 'Creating User Personas', description: 'Defining target audiences' },
        ],
      },
      {
        week: 4,
        title: 'Wireframing & Information Architecture',
        lessons: [
          { title: 'Low-Fidelity Wireframes', description: 'Sketching user flows' },
          { title: 'Information Architecture', description: 'Organizing content effectively' },
        ],
      },
      {
        week: 5,
        title: 'High-Fidelity Design',
        lessons: [
          { title: 'Visual Design & Branding', description: 'Creating polished interfaces' },
          { title: 'Design Systems & Style Guides', description: 'Maintaining consistency' },
        ],
      },
      {
        week: 6,
        title: 'Prototyping & Interactions',
        lessons: [
          { title: 'Interactive Prototypes in Figma', description: 'Bringing designs to life' },
          { title: 'Micro-interactions & Animations', description: 'Enhancing user experience' },
        ],
      },
      {
        week: 7,
        title: 'Usability Testing',
        lessons: [
          { title: 'Conducting Usability Tests', description: 'Validating designs with users' },
          { title: 'Iterating Based on Feedback', description: 'Refining your designs' },
        ],
      },
      {
        week: 8,
        title: 'Portfolio & Case Studies',
        lessons: [
          { title: 'Building Your Design Portfolio', description: 'Showcasing your work' },
          { title: 'Presenting Case Studies', description: 'Telling design stories' },
        ],
      },
    ],
    duration: '8 weeks',
    difficultyLevel: 'Beginner',
    prerequisites: ['Basic computer skills', 'Creative interest'],
    learningOutcomes: [
      'Master Figma and design tools',
      'Conduct user research and testing',
      'Create wireframes and prototypes',
      'Build a professional design portfolio',
      'Apply design thinking methodology',
    ],
    skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping', 'User Testing', 'Design Systems'],
    pricing: {
      basePrice: 50000,
      usdPrice: 35,
    },
    media: {
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      banner: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&h=400&fit=crop',
    },
    instructor: {
      name: 'Sarah Johnson',
      bio: 'Award-winning UX Designer with experience at top tech companies. Passionate about creating inclusive, accessible designs.',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      credentials: 'MA Design, Google UX Certificate',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        portfolio: 'https://example.com',
      },
    },
    defaultMaterials: [],
    settings: {
      status: 'active',
      visibility: 'public',
      maxStudentsPerCohort: 25,
      certificateEnabled: true,
    },
    seo: {
      metaTitle: 'UI/UX Design Masterclass - Learn Figma & User-Centered Design',
      metaDescription: 'Master UI/UX design in 8 weeks. Learn Figma, user research, and build a professional portfolio.',
      keywords: ['UI design', 'UX design', 'Figma', 'user experience', 'design thinking'],
    },
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-15T00:00:00Z',
  },
  {
    id: 'course-003',
    slug: 'professional-content-writing',
    title: 'Professional Content Writing',
    category: 'Content Writing',
    shortDescription: 'Craft compelling content for blogs, websites, and social media that engages audiences.',
    fullDescription: 'Become a professional content writer in 6 weeks. Learn SEO writing, copywriting techniques, content strategy, and storytelling. Build a portfolio of published articles and learn to write for different platforms and audiences.',
    curriculum: [
      {
        week: 1,
        title: 'Writing Fundamentals',
        lessons: [
          { title: 'Grammar & Style Essentials', description: 'Mastering the basics' },
          { title: 'Writing for Different Audiences', description: 'Adapting your voice' },
        ],
      },
      {
        week: 2,
        title: 'SEO Writing',
        lessons: [
          { title: 'Keyword Research & Strategy', description: 'Finding the right keywords' },
          { title: 'Writing SEO-Optimized Content', description: 'Ranking in search engines' },
        ],
      },
      {
        week: 3,
        title: 'Copywriting Techniques',
        lessons: [
          { title: 'Persuasive Writing & CTAs', description: 'Converting readers to customers' },
          { title: 'Writing Sales Pages & Emails', description: 'Marketing copy that sells' },
        ],
      },
      {
        week: 4,
        title: 'Content Strategy',
        lessons: [
          { title: 'Planning Content Calendars', description: 'Organizing your content' },
          { title: 'Content Distribution & Promotion', description: 'Reaching your audience' },
        ],
      },
      {
        week: 5,
        title: 'Storytelling & Blog Writing',
        lessons: [
          { title: 'Crafting Compelling Stories', description: 'Engaging your readers' },
          { title: 'Writing Long-Form Blog Posts', description: 'Creating valuable content' },
        ],
      },
      {
        week: 6,
        title: 'Portfolio & Freelancing',
        lessons: [
          { title: 'Building Your Writing Portfolio', description: 'Showcasing your work' },
          { title: 'Finding Clients & Freelancing', description: 'Launching your career' },
        ],
      },
    ],
    duration: '6 weeks',
    difficultyLevel: 'Beginner',
    prerequisites: ['Strong command of English', 'Interest in writing'],
    learningOutcomes: [
      'Write SEO-optimized content',
      'Master copywriting techniques',
      'Develop content strategies',
      'Build a writing portfolio',
      'Find freelance writing clients',
    ],
    skills: ['SEO Writing', 'Copywriting', 'Content Strategy', 'Blogging', 'Storytelling'],
    pricing: {
      basePrice: 45000,
      usdPrice: 30,
    },
    media: {
      thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop',
      banner: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=400&fit=crop',
    },
    instructor: {
      name: 'Emily Rodriguez',
      bio: 'Professional content writer and strategist with 6+ years of experience. Published in major tech publications.',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      credentials: 'BA Journalism, Content Marketing Certified',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        portfolio: 'https://example.com',
      },
    },
    defaultMaterials: [],
    settings: {
      status: 'active',
      visibility: 'public',
      maxStudentsPerCohort: 35,
      certificateEnabled: true,
    },
    seo: {
      metaTitle: 'Professional Content Writing - Learn SEO & Copywriting',
      metaDescription: 'Master content writing in 6 weeks. Learn SEO, copywriting, and build your writing portfolio.',
      keywords: ['content writing', 'copywriting', 'SEO writing', 'blogging', 'freelance writing'],
    },
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-15T00:00:00Z',
  },
];
