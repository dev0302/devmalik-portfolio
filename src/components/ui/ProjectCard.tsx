// No "use client" — Server Component

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { ExpandToggle } from "./Expandtoggle";

type ProjectCardProps = Project & {
  eagerImage?: boolean;
};

export const ProjectCard = ({
  title,
  description,
  liveUrl,
  githubUrl,
  tech = [],
  image,
  status,
  eagerImage = false,
}: ProjectCardProps) => {
  const isBuilding = status === "Building";

  return (
    <div className="group relative flex flex-col rounded-[32px] border border-white/[0.05] bg-gradient-to-br from-indigo-900/20 via-[#111116] to-[#0a0a0c] p-3 sm:p-4 transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)] will-change-transform">

      {/* Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[24px] bg-[#0f1016] border border-white/[0.04] mb-5">
        <Image
          src={image || "/assets/images/image.png"}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={85}
          priority={eagerImage}
          alt={title}
          className="object-cover transition-all duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-105"
        />

        {/* Simple gradient overlay — no blur */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

        {/* Status Badge — bg-black/70 instead of backdrop-blur */}
        <div className="absolute top-4 left-4 z-10">
          <div className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-black/70 border border-white/10 text-white flex items-center gap-1.5">
            {!isBuilding ? (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            ) : (
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            )}
            {isBuilding ? "In Progress" : "Live"}
          </div>
        </div>

        {/* Action Buttons — bg-black/80 instead of backdrop-blur */}
        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black/80 border border-white/10 text-white/80 hover:bg-white hover:text-black hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300"
              aria-label="GitHub Repository"
            >
              <FaGithub size={18} />
            </Link>
          )}
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-neutral-200 hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300"
              aria-label="Live Preview"
            >
              <ArrowUpRight size={18} />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-2 sm:px-4 flex flex-col flex-1 pb-2">
        <h3 className="sofia-pro text-2xl sm:text-[26px] text-white tracking-tight mb-3">
          {title}
        </h3>

        <ExpandToggle description={description} />

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {tech?.map((t, idx) => (
            <span
              key={idx}
              className="nunito text-[11px] px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.04] text-neutral-400 font-medium tracking-wide hover:bg-white/[0.08] hover:text-white transition-colors duration-300 cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};