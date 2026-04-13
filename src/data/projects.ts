export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  status: "Live" | "Building" | "MVP";
}

const allProjectsData: Project[] = [
  {
    title: "GFG BVCOE Official Platform",
    description: "Production-grade full-stack platform for the GeeksforGeeks BVCOE society — actively used by 100+ members for managing events, announcements, media, and member activities. Features real-time updates via Socket.io, AI-powered event summaries and FAQ generation, and a hierarchical role-based access control system with secure, time-limited media links.",
    tech: ["Next.js", "Node.js", "MongoDB", "Socket.io", "AWS S3", "Redis", "OpenAI API", "JWT"],
    liveUrl: "https://www.gfg-bvcoe.com",
    githubUrl: "https://github.com/dev0302/GFGxBVCOE",
    image: "/assets/images/gfg_bvcoe.png",
    status: "Live",
  },
  {
    title: "Soc-Connect – Social Community Platform",
    description: "A modern full-stack social community platform enabling users to connect, share content, and manage profiles with a dynamic UI. Features secure JWT authentication with OTP, Cloudinary-integrated media uploads, and data export capabilities (XLSX/PDF).",
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Framer Motion", "GSAP", "Cloudinary", "JWT"],
    liveUrl: "https://soc-disconnect.vercel.app/",
    githubUrl: "https://github.com/dev0302/soc-disconnect",
    image: "/assets/images/soc-connect.png",
    status: "Live",
  },
  {
    title: "ToxiTrace – HMPI (AI-Driven Environmental Intelligence Platform)",
    description: "A high-impact environmental intelligence platform for SIH 2025. Automates complex HMPI calculations, provides district-level spatial heatmaps, and historical trend analytics to support researchers and policy planners with data-driven insights.",
    tech: ["React.js", "Node.js", "MongoDB", "PostgreSQL", "PostGIS", "D3.js", "Mapbox"],
    liveUrl: "https://grind-2025.vercel.app",
    githubUrl: "https://github.com/dev0302/SIH_PROTOTYPE_2025_ToxiTrace",
    image: "/assets/images/toxi_trace.png",
    status: "MVP",
  },
  {
    title: "Interactive GSAP & Lenis Animation Grid",
    description: "A high-performance web animation project showcasing advanced scroll-triggered animations and smooth scrolling effects. Demonstrates mastery of GSAP and Lenis for creating immersive, reactive user experiences with optimized performance.",
    tech: ["React", "GSAP", "Lenis", "TailwindCSS", "Vite", "ScrollTrigger"],
    liveUrl: "https://react-routes-forms-react-js-project-five.vercel.app/",
    githubUrl: "https://github.com/dev0302/WebAnimations_GSAP_LENIS_Project_1",
    image: "/assets/images/interactive_gsap.png",
    status: "Live",
  },
  {
    title: "StudyNotion – Ed-Tech Platform",
    description: "A comprehensive full-stack MERN learning management platform inspired by Udemy. Features a complete course management system, secure JWT + OTP authentication, Razorpay payment integration, and an analytics dashboard with real-time course progress tracking.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Redux", "Razorpay", "Cloudinary", "TailwindCSS"],
    liveUrl: "https://full-stack-project-1-study-notion-s-nine.vercel.app/",
    githubUrl: "https://github.com/dev0302/FullStackProject_1_StudyNotionSample",
    image: "/assets/images/study_notion.png",
    status: "Live",
  },
  {
    title: "Realtime Chat Application (WebSockets)",
    description: "A full-featured real-time, room-based chat application focusing on network resilience and clean architecture. Features online presence, typing indicators, auto-reconnect handling, and in-memory state management for high performance.",
    tech: ["React", "TypeScript", "WebSockets", "Node.js", "GSAP", "Vite"],
    liveUrl: "https://websockets-05-realtime-chat-app-adv.vercel.app/",
    githubUrl: "https://github.com/dev0302/websockets-05-realtime-chat-app-advanced",
    image: "/assets/images/chat_application.png",
    status: "Live",
  },
  {
    title: "Horizon Society Website (BVCOE)",
    description: "Official website for BVCOE's Horizon Society. Features an event calendar, member directory with interactive modals, and technical talk showcases. Built with a heavy focus on custom CSS animations and responsive UI.",
    tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "CSS Animations"],
    liveUrl: "https://dev0302.github.io/horizon-web/",
    githubUrl: "https://github.com/dev0302/horizon-web",
    image: "/assets/images/horizon_bvcoe.png",
    status: "Live",
  },
];
export const featuredProjects = [
  allProjectsData[0],
  allProjectsData[1],
  allProjectsData[2],
  allProjectsData[3],
  allProjectsData[4],
  allProjectsData[5],
  allProjectsData[6]
];

export const allProjects = allProjectsData;