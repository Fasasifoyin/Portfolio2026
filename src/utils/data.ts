import { Download, GitHub, LinkedIn, Mail, WhatsApp } from "@/components/svgs";
import { Experience, Link, Project, SkillGroup } from "./types";

export const links: Link[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const ROLES = [
  "Fullstack Developer",
  "Frontend Developer",
  "React Specialist",
  "UI Engineer",
  "Next.js Developer",
];

export const STACK = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "React Native",
  "Expo",
  "Tailwind CSS",
  "Chakra UI",
  "RTK Query",
  "Redux Toolkit",
  "Tanstack Query",
  "Zustand",
];

export const stats = [
  { num: "6+", label: "Projects shipped" },
  { num: "3+", label: "Years experience" },
  { num: "300L", label: "UNILAG student" },
  { num: "∞", label: "Lines of code" },
];

export const facts = [
  { icon: "📍", text: "Lagos, Nigeria" },
  { icon: "🎓", text: "Microbiology, UNILAG" },
];

export const socials = [
  {
    id: 1,
    social: "Github",
    icon: GitHub,
    link: "https://github.com/Fasasifoyin",
    download: false,
  },
  {
    id: 2,
    social: "LinkedIn",
    icon: LinkedIn,
    link: "https://linkedin.com/in/foyinfasasi",
    download: false,
  },
  {
    id: 3,
    social: "Download CV",
    icon: Download,
    link: "/My Resume (1).pdf",
    download: true,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    category: "Frontend",
    description: "Building interfaces people enjoy using",
    icon: "◈",
    color: "var(--brand)",
    skills: [
      { name: "React", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 },
      { name: "Chakra UI", level: 5 },
      { name: "HTML & CSS", level: 5 },
      { name: "Bootstrap", level: 5 },
    ],
  },
  {
    id: "state",
    category: "State & Data",
    description: "Managing complexity at scale",
    icon: "◎",
    color: "var(--brand-secondary)",
    skills: [
      { name: "Redux Toolkit", level: 5 },
      { name: "RTK Query", level: 5 },
      { name: "TanStack Query", level: 4 },
      { name: "Zustand", level: 4 },
      { name: "Context API", level: 5 },
      { name: "React Hook Form", level: 5 },
      { name: "Formik", level: 5 },
    ],
  },
  {
    id: "backend",
    category: "Backend",
    description: "APIs, databases and server-side logic",
    icon: "◉",
    color: "#22C55E",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express.js", level: 4 },
      { name: "MongoDB", level: 4 },
      { name: "REST APIs", level: 5 },
      { name: "Mongoose", level: 4 },
    ],
  },
  {
    id: "mobile",
    category: "Mobile",
    description: "Cross-platform app development",
    icon: "◧",
    color: "#F59E0B",
    skills: [
      { name: "React Native", level: 3 },
      { name: "Expo", level: 3 },
    ],
  },
  {
    id: "tools",
    category: "Tools & Platforms",
    description: "Workflow, deployment and collaboration",
    icon: "◪",
    color: "#EC4899",
    skills: [
      { name: "Git & GitHub", level: 5 },
      { name: "Vercel", level: 5 },
      { name: "Netlify", level: 4 },
      { name: "Postman", level: 4 },
      { name: "Render", level: 4 },
      { name: "Figma", level: 3 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Kenbis Technologies",
    type: "Contract",
    period: "2026",
    current: false,
    bullets: [
      "Designed and built a full production website for a Lagos-based HVAC engineering company",
      "Implemented multi-page Next.js app with Chakra UI v3, Framer Motion animations",
      "Integrated Resend for transactional email and set up custom domain, DNS and deployment on Vercel",
      "Built reusable component library covering navbar, hero, services, about, projects gallery with lightbox and contact form",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Chakra UI v3",
      "Framer Motion",
      "Resend",
      "Vercel",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Cliqss",
    type: "Full-time",
    period: "Nov 2025",
    current: false,
    bullets: [
      "Designed and developed the frontend application from scratch based on product requirements",
      "Built reusable, scalable UI components using modern React patterns",
      "Implemented Google authentication and Paystack payment integration",
      "Delivered a production-ready interface aligned with business requirements",
    ],
    stack: ["React", "Redux Toolkit Query", "Chakra UI", "Paystack"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Election Platform Project",
    type: "Contract",
    period: "Jul 2025",
    current: false,
    bullets: [
      "Built the frontend for an election website used in a local government chairman and councillor election",
      "Developed responsive, accessible and user-friendly interfaces for public-facing use",
      "Worked closely with the client to meet functional requirements under strict timelines",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 4,
    role: "Frontend Developer",
    company: "Product Room",
    type: "Full-time",
    period: "Mar 2025 – May 2025",
    current: false,
    bullets: [
      "Worked within a product team to develop two different web products from concept to advanced stages",
      "Collaborated closely with designers and developers in a fast-paced product environment",
      "Balanced academic responsibilities alongside professional development work",
      "Strengthened skills in time management, problem-solving and real-world product development",
    ],
    stack: ["React", "TypeScript", "Next.js", "Chakra UI", "Tailwind CSS"],
  },
  {
    id: 5,
    role: "Fullstack Developer",
    company: "SayFoods",
    type: "Contract",
    period: "Mar 2025",
    current: false,
    bullets: [
      "Designed and developed a fullstack marketplace platform for buying and selling items from scratch",
      "Implemented core features including product listings, user flows and transactional functionality",
      "Handled both frontend and backend development from initial setup to production-ready solution",
    ],
    stack: ["TypeScript", "React", "Redux", "Node.js", "MongoDB", "Paystack"],
  },
  {
    id: 6,
    role: "Frontend Developer",
    company: "MarketBuddy",
    type: "Contract",
    period: "Dec 2023",
    current: false,
    bullets: [
      "Revamped the UI/UX of the company website to improve usability and visual consistency",
      "Worked with an existing HTML and Bootstrap codebase to modernize layouts and components",
      "Implemented design updates based on stakeholder feedback",
    ],
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: 7,
    role: "Fullstack Web Developer Intern",
    company: "TechStudio Academy",
    type: "Internship",
    period: "Jul 2023 – Sep 2023",
    current: false,
    achievement: "Most Outstanding Intern — Fullstack Web Development",
    bullets: [
      "Collaborated with designers and developers to build a fullstack web application as part of a team",
      "Contributed to both frontend and backend features throughout the development lifecycle",
      "Participated in project planning, implementation, testing and final project defense",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "SayFoods",
    description:
      "Fullstack e-commerce marketplace for buying and selling food items with Paystack payment integration.",
    longDescription:
      "Developed the complete platform, frontend and backend, using TypeScript throughout. Implemented secure Paystack payment integration, scalable frontend architecture with Redux, and a robust Express/MongoDB backend handling product listings, user flows and transactions.",
    stack: [
      "TypeScript",
      "React",
      "Redux",
      "RTK Query",
      "Node.js",
      "Express",
      "MongoDB",
      "Paystack",
    ],
    live: "https://www.sayfoods.co/",
    featured: true,
    status: "live",
    highlights: [
      "TypeScript end-to-end",
      "Paystack payment integration",
      "Scalable Redux architecture",
      "Full product & user management",
    ],
    icon: "🛒",
    color: "#6366F1",
  },
  {
    id: 2,
    name: "Kenbis Technologies",
    description:
      "Full production website for a Lagos-based HVAC engineering company — built and deployed end-to-end.",
    longDescription:
      "Designed and built a complete marketing website from scratch. Covers five pages with complex animations, masonry project gallery with lightbox, contact form via Resend, custom domain setup, company email configuration and Vercel deployment.",
    stack: [
      "Next.js",
      "TypeScript",
      "Chakra UI v3",
      "Framer Motion",
      "Resend",
      "Vercel",
    ],
    live: "https://kenbistech.com",
    featured: true,
    status: "live",
    highlights: [
      "Framer Motion page animations",
      "Masonry gallery + lightbox",
      "Resend transactional email",
      "Full domain & DNS setup",
    ],
    icon: "❄️",
    color: "#F59E0B",
  },
  {
    id: 3,
    name: "Backyard",
    description:
      "Frontend for an automobile marketplace platform — responsive pages for dealers and buyers.",
    longDescription:
      "Built the frontend for an upcoming car marketplace. Built responsive product listing pages, dealer dashboards and buyer flows with RTK Query for API communication and a focus on performance.",
    stack: ["React", "RTK Query", "Chakra UI"],
    live: "https://www.checkbackyard.com/",
    featured: true,
    status: "live",
    highlights: [
      "Automobile marketplace",
      "Dealer & buyer flows",
      "RTK Query integration",
      "Performance focused",
    ],
    icon: "🚗",
    color: "#06B6D4",
  },
  {
    id: 4,
    name: "Cliqss",
    description:
      "Frontend application built from scratch with Google auth and Paystack payment integration.",
    longDescription:
      "Designed and developed the full frontend based on product requirements. Built reusable component architecture, implemented Google OAuth and Paystack payments, and structured the project for future scalability.",
    stack: [
      "Next.js",
      "Redux Toolkit Query",
      "Tailwind CSS",
      "Shadcn",
      "Google Auth",
      "Paystack",
    ],
    live: "https://cliqss.com",
    featured: true,
    status: "live",
    highlights: [
      "Google OAuth integration",
      "Paystack payments",
      "Reusable component system",
      "Production-ready delivery",
    ],
    icon: "⚡",
    color: "#EC4899",
  },
  {
    id: 5,
    name: "Nairaland Clone",
    description:
      "A fullstack discussion platform inspired by Nairaland with enhanced UI/UX and improved content flow.",
    longDescription:
      "Built both frontend and backend from scratch — handling application architecture, data flow and Google authentication independently. Implemented modern state management and API communication patterns with a significantly improved interface over the original.",
    stack: ["React", "Axios", "Node.js", "Express", "MongoDB", "Chakra UI"],
    github: "https://github.com/Fasasifoyin/NairalandCloneClient",
    live: "https://nairaland-clone-client.vercel.app/",
    featured: false,
    status: "live",
    highlights: [
      "Fullstack built independently from scratch",
      "Google OAuth authentication",
      "Modern state management patterns",
      "Improved UI/UX over the original",
    ],
    icon: "💬",
    color: "#F97316",
  },
  {
    id: 6,
    name: "nVORA",
    description:
      "SaaS invoicing platform with PDF generation, job queuing, Cloudinary uploads and multi-tenant architecture.",
    longDescription:
      "A complex personal project pushing into backend engineering — BullMQ job queues for async PDF generation via Puppeteer, Cloudinary for file storage, multi-tenant company/user model with JWT auth, Zustand for client state and TanStack Query for server state.",
    stack: [
      "Puppeteer",
      "React",
      "TanStack Query",
      "Zustand",
      "Chakra UI v3",
      "Typescript",
      "Node.js",
      "BullMQ",
      "Redis",
      "Cloudinary",
    ],
    live: "https://n-vora-frontend.vercel.app/auth/login",
    featured: false,
    status: "in-progress",
    highlights: [
      "BullMQ + Redis job queuing",
      "Puppeteer PDF generation",
      "Multi-tenant architecture",
      "Cloudinary file management",
    ],
    icon: "🧾",
    color: "#22C55E",
  },
  {
    id: 7,
    name: "Movie Box",
    description:
      "A frontend movie discovery app that consumes external APIs to display trending and searchable movies.",
    longDescription:
      "Built a responsive movie discovery application that consumes external APIs to fetch and display trending, popular, and searchable movies. Focused on clean UI, API integration, and responsive layout across devices.",
    stack: ["React", "REST API", "CSS", "Bootstrap"],
    github: "https://github.com/Fasasifoyin/Mymovie",
    live: "https://myplaymovie.netlify.app/",
    featured: false,
    status: "live",
    highlights: [
      "External API integration",
      "Dynamic movie search and filtering",
      "Responsive UI design",
      "Clean component-based architecture",
    ],
    icon: "🎬",
    color: "#F59E0B",
  },
  {
    id: 8,
    name: "Shome",
    description:
      "A fullstack e-commerce project with JWT authentication and Redux-based state management.",
    longDescription:
      "Built a fullstack e-commerce application featuring secure JWT authentication, protected routes, and persistent user sessions. Implemented Redux for global state management across cart, user, and product flows, ensuring smooth data consistency across the app.",
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "JWT", "CSS"],
    github: "https://github.com/Fasasifoyin/ShomeClient",
    live: "https://myshomeecommerce.netlify.app/",
    featured: false,
    status: "live",
    highlights: [
      "JWT-based authentication system",
      "Redux state management across app",
      "Fullstack architecture (frontend + backend)",
      "Persistent user sessions and protected routes",
    ],
    icon: "🛒",
    color: "#10B981",
  },
];

export const social = [
  {
    label: "GitHub",
    value: "github.com/Fasasifoyin",
    href: "https://github.com/Fasasifoyin",
    icon: GitHub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/foyinfasasi",
    href: "https://linkedin.com/in/foyinfasasi",
    icon: LinkedIn,
  },
  {
    label: "Email",
    value: "fasasifoyin@gmail.com",
    href: "mailto:fasasifoyin@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "+234 704 359 3355",
    href: `https://wa.me/2347043593355?text=${encodeURIComponent(
      "Hello, I need your services",
    )}`,
    icon: WhatsApp,
  },
];
