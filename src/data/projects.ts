export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "ShopVerse — E-Commerce Platform",
    shortDescription:
      "A full-featured e-commerce platform with real-time inventory, payment integration, and admin dashboard.",
    fullDescription:
      "ShopVerse is a comprehensive e-commerce solution built from the ground up. It features user authentication, product catalog with advanced filtering, shopping cart, Stripe payment integration, order tracking, and a powerful admin dashboard for managing products, orders, and analytics. The platform supports real-time inventory updates and push notifications for order status changes.",
    image: "/projects/ecommerce.jpg",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS", "Redis"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    id: "task-management",
    title: "TaskFlow — Project Management",
    shortDescription:
      "Collaborative project management tool with Kanban boards, real-time updates, and team analytics.",
    fullDescription:
      "TaskFlow is a modern project management application inspired by Trello and Jira. It offers drag-and-drop Kanban boards, sprint planning, time tracking, team collaboration with real-time updates via WebSockets, file attachments, and comprehensive analytics dashboards. Built with a focus on developer experience and team productivity.",
    image: "/projects/taskflow.jpg",
    techStack: ["React", "Node.js", "Socket.io", "PostgreSQL", "Docker", "AWS"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    id: "ai-chat-app",
    title: "NeuralChat — AI Chat Application",
    shortDescription:
      "An intelligent chat application powered by AI with context-aware conversations and code generation.",
    fullDescription:
      "NeuralChat is an AI-powered chat application that leverages large language models for intelligent conversations. It supports context-aware multi-turn conversations, code generation with syntax highlighting, markdown rendering, conversation history, and custom AI personality profiles. The app features a clean, responsive UI with dark/light mode support.",
    image: "/projects/aichat.jpg",
    techStack: ["Next.js", "Python", "FastAPI", "OpenAI API", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    id: "social-media-dashboard",
    title: "SocialPulse — Analytics Dashboard",
    shortDescription:
      "Real-time social media analytics dashboard with interactive charts and automated reporting.",
    fullDescription:
      "SocialPulse is a comprehensive social media analytics platform that aggregates data from multiple social networks. It features real-time engagement tracking, audience demographics analysis, content performance metrics, automated PDF report generation, and AI-powered content suggestions. The dashboard includes interactive D3.js visualizations and customizable widgets.",
    image: "/projects/dashboard.jpg",
    techStack: ["React", "D3.js", "Express", "MongoDB", "Chart.js", "Firebase"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
  {
    id: "fitness-tracker",
    title: "FitTrack — Health & Fitness App",
    shortDescription:
      "Mobile-first fitness tracking app with workout plans, nutrition logging, and progress visualization.",
    fullDescription:
      "FitTrack is a comprehensive health and fitness tracking application designed with a mobile-first approach. It includes customizable workout plans, exercise library with video demonstrations, nutrition logging with calorie counting, progress photos, body measurements tracking, and detailed analytics with charts showing progress over time. Features social sharing and workout challenges.",
    image: "/projects/fitness.jpg",
    techStack: ["React Native", "Node.js", "MongoDB", "Firebase", "Chart.js", "Expo"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
  {
    id: "blog-platform",
    title: "DevScribe — Developer Blog Platform",
    shortDescription:
      "A modern blogging platform for developers with MDX support, code snippets, and SEO optimization.",
    fullDescription:
      "DevScribe is a developer-focused blogging platform that supports MDX content with live code examples, syntax highlighting for 50+ languages, automatic SEO optimization, RSS feeds, newsletter integration, and a built-in analytics dashboard. Features include draft management, scheduled publishing, tag-based categorization, and a powerful full-text search engine.",
    image: "/projects/blog.jpg",
    techStack: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Algolia", "Vercel"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
];
