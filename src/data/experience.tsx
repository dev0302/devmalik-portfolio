import type { ReactNode } from "react";
export interface ExperienceItem {
  id: string;
  logo: ReactNode;
  company: string;
  role: string;
  date: string;
  description: string | string[];
  technologies: string;
  link?: string;
}

const GFGLogo = () => (
  <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-lg font-serif italic text-white/90 shrink-0">
    G
  </div>
);

const HorizonLogo = () => (
  <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-lg font-serif italic text-white/90 shrink-0">
    H
  </div>
);

export const experienceData: ExperienceItem[] = [
  {
    id: "gfg",
    company: "GeeksforGeeks BVCOE",
    role: "Full Stack Developer",
    date: "Oct 2025 - Present · New Delhi, India",
    description: [
      "Built and deployed a production-grade platform using React, Node.js, and MongoDB with secure JWT role-based authentication and OTP-driven email verification.",
      "Developed real-time event updates, notifications, and dashboard synchronization using Socket.io (WebSockets) to streamline organizational workflows.",
      "Integrated AI APIs for automated content generation and event summarization, enhancing platform intelligence and user engagement.",
      "Implemented a robust media upload pipeline with compression, alongside an automated Excel/PDF data export system for member and event reporting.",
      "Successfully deployed via Vercel, Render, and MongoDB Atlas; platform is actively used by 100+ members for managing recruitment, events, and announcements."
    ],
    technologies: "MERN / Socket.io / AI APIs / Cloudinary",
    link: "https://www.gfg-bvcoe.com",
    logo: <GFGLogo />,
  },
  {
    id: "horizon",
    company: "Horizon BVCOE Society",
    role: "Technical Team Member",
    date: "Aug 2025 - Present · New Delhi, India",
    description: [
      "Collaborated on the society website and integrated technical systems to streamline internal workflows",
      "Managed event technical infrastructure and maintained web platforms for society-led hackathons"
    ],
    technologies: "HTML5 / CSS3 / JavaScript / GitHub Pages",
    link: "https://dev0302.github.io/horizon-web/",
    logo: <HorizonLogo />,
  },
];