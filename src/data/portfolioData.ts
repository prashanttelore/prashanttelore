export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'AI / Cloud';
  description: string;
  longDescription: string;
  architecture: string[];
  challenges: string[];
  metrics: string[];
  techStack: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface ServiceCategory {
  title: string;
  description: string;
  iconName: 'code' | 'server' | 'database' | 'rocket';
  skills: string[];
}

export interface SkillGroup {
  category: string;
  skills: {
    name: string;
    level: number;
    icon?: string;
  }[];
}

export interface PortfolioData {
  developer: {
    brandName: string;
    firstName: string;
    lastName: string;
    title: string;
    welcomeMessage: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    bio: string;
    aboutBio1: string;
    aboutBio2: string;
    quote: string;
    avatar: string;
    stats: {
      projectsCompleted: string;
      yearsExperience: string;
      technologies: string;
    };
  };
  featureCards: {
    title: string;
    icon: string;
    subtitle: string;
  }[];
  services: ServiceCategory[];
  projects: Project[];
  skills: SkillGroup[];
}

export const portfolioData: PortfolioData = {
  developer: {
    brandName: "PrashantDev",
    firstName: "Prashant",
    lastName: "Developer",
    title: "Full Stack Web Developer",
    welcomeMessage: "Welcome to my portfolio",
    location: "San Francisco, CA / Remote",
    email: "prashant.dev@example.com",
    github: "https://github.com/prashanttelore",
    linkedin: "https://www.linkedin.com/in/prashant-telore-523407375",
    bio: "I craft beautiful, high-performance web applications using modern technologies like React, Next.js, and JavaScript.",
    aboutBio1: "I'm Prashant, a passionate full-stack web developer with expertise in building scalable, high-performance web applications. I specialize in React, Next.js, Node.js, Express, and modern web technologies.",
    aboutBio2: "My journey in web development started with curiosity about how things work on the internet. Today, I craft clean, efficient code and beautiful user interfaces that solve real problems and deliver exceptional user experiences.",
    quote: "I believe in writing code that's not just functional, but also maintainable, scalable, and a joy to work with.",
    avatar: "/assets/prashant-avatar.png",
    stats: {
      projectsCompleted: "50+",
      yearsExperience: "3+",
      technologies: "20+",
    },
  },

  featureCards: [
    {
      title: "Frontend",
      icon: "atom",
      subtitle: "React, Next.js, JavaScript",
    },
    {
      title: "Backend",
      icon: "wrench",
      subtitle: "Node.js, Express",
    },
    {
      title: "Database",
      icon: "database",
      subtitle: "MySQL, MongoDB",
    },
    {
      title: "Languages",
      icon: "code",
      subtitle: "Python, Java, JavaScript",
    },
    {
      title: "DevOps",
      icon: "rocket",
      subtitle: "Vercel, Render",
    },
  ],

  services: [
    {
      title: "Full Stack Web Development",
      description: "End-to-end web application development using React, Next.js, Node.js, Express, and modern databases.",
      iconName: "code",
      skills: ["React", "Next.js", "Node.js", "Express", "JavaScript"]
    },
    {
      title: "API & Backend Architecture",
      description: "Scalable REST APIs and microservices built with Express and Node.js, with secure authentication and database optimization.",
      iconName: "server",
      skills: ["Express.js", "Node.js", "REST APIs", "Authentication"]
    },
    {
      title: "Database Management & Design",
      description: "Architecting relational and NoSQL database schemas with high query performance and data integrity.",
      iconName: "database",
      skills: ["MySQL", "MongoDB", "Database Schema", "Query Optimization"]
    },
    {
      title: "Cloud Deployment & DevOps",
      description: "Automated deployment pipelines and serverless hosting on Vercel and Render for zero-downtime releases.",
      iconName: "rocket",
      skills: ["Vercel", "Render", "Git / GitHub", "CI/CD Deployment"]
    }
  ],

  projects: [
    {
      id: "shopg-platform",
      title: "ShopG – AI-Powered Grocery E-Commerce Platform",
      subtitle: "Smart grocery storefront with Gemini AI recipe converter & auto-substitute engine",
      category: "Full Stack",
      description: "Built a full-stack e-commerce platform with ReactJS frontend and Node.js/Express.js REST API backend using MVC architecture; featuring Chef AI Gemini integration & Smart Substitutes.",
      longDescription: "Built a full-stack e-commerce platform with ReactJS frontend and Node.js/Express.js REST API backend using MVC architecture; secured with JWT authentication and RBAC for customer and admin flows. Developed Chef AI — integrates Google Gemini API to convert dish names into ingredient lists, then regex-matches them against the live MongoDB product catalog for one-click cart population. Built a Smart Substitute module that auto-triggers on zero-stock searches, extracts keywords, and runs a scoped MongoDB query by category to surface in-stock alternatives automatically. Designed normalized schemas for products, orders, and users; built a full admin dashboard for inventory, order, and user management. Delivered a responsive, mobile-first UI with reusable React components across product catalog, cart, and checkout flows.",
      architecture: [
        "Chef AI Gemini API Integration (Recipe to live cart ingredient regex matching)",
        "Smart Substitute Module (Scoped MongoDB fallback query for zero-stock items)",
        "JWT Authentication & Role-Based Access Control (RBAC)",
        "Full Admin Console (Product inventory, order pipeline & user management)"
      ],
      challenges: [
        "Implemented intelligent ingredient extraction and regex catalog matching with Gemini API.",
        "Built automatic zero-stock substitute recommendations to boost checkout conversion."
      ],
      metrics: [
        "Instant one-click recipe-to-cart population",
        "Sub-100ms MongoDB category query performance",
        "Complete customer & admin RBAC security"
      ],
      techStack: ["ReactJS", "Node.js", "Express.js", "MongoDB", "JavaScript"],
      image: "/assets/shopg-project.png",
      demoUrl: "https://example.com/demo1",
      githubUrl: "https://github.com/prashanttelore",
      featured: true,
    },
    {
      id: "neural-core-ai",
      title: "Neural Core AI Engine",
      subtitle: "Autonomous LLM workflow & vector search aggregator",
      category: "AI / Cloud",
      description: "An AI orchestration engine for multi-modal agent workflows, semantic caching, and dynamic prompt routing.",
      longDescription: "Neural Core AI simplifies complex enterprise LLM pipeline execution. It features token consumption optimization, MongoDB data persistence, and real-time streaming UI components.",
      architecture: [
        "Python Backend Engine",
        "MongoDB Database Integration",
        "React + Tailwind CSS Interface"
      ],
      challenges: [
        "Reduced LLM API latencies by 65% using semantic embedding cache layers."
      ],
      metrics: [
        "65% cost reduction in token usage",
        "4.2x faster response synthesis"
      ],
      techStack: ["Python", "Java", "React", "MongoDB", "Render"],
      image: "/assets/project-ai.png",
      demoUrl: "https://example.com/demo2",
      githubUrl: "https://github.com/prashanttelore",
      featured: true,
    },
    {
      id: "dev-pulse-dashboard",
      title: "DevPulse Analytics Dashboard",
      subtitle: "Real-time infrastructure & application metrics console",
      category: "Frontend",
      description: "A sleek analytics console providing real-time data visualization, latency metrics, and automated alert logs.",
      longDescription: "DevPulse delivers real-time dashboard visualizations for server health and network telemetry with zero UI latency.",
      architecture: [
        "React + JavaScript + Chart.js",
        "WebSocket Live Telemetry Feed",
        "Tailwind CSS Dark Theme"
      ],
      challenges: [
        "Maintained 60 FPS charts under heavy 10,000 data point streaming feeds."
      ],
      metrics: [
        "60 FPS smooth chart rendering",
        "Used by 15+ internal engineering teams"
      ],
      techStack: ["React", "JavaScript", "Tailwind CSS", "Chart.js", "WebSockets"],
      image: "/assets/project-cyberdeck.png",
      demoUrl: "https://example.com/demo3",
      githubUrl: "https://github.com/prashanttelore",
      featured: false,
    }
  ],

  skills: [
    {
      category: "Frontend & Languages",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 92 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "Python", level: 88 },
        { name: "Java", level: 85 },
      ]
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Express.js", level: 94 },
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 88 },
      ]
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Vercel", level: 94 },
        { name: "Render", level: 92 },
        { name: "Git / GitHub", level: 95 },
        { name: "Tailwind CSS", level: 96 },
      ]
    }
  ]
};
