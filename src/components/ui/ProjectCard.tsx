"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";


import { Project } from "@/data/projects";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const isBuilding = status === "Building";

  return (
    <div
      className="group relative flex flex-col rounded-[32px] border border-white/[0.05] bg-gradient-to-br from-indigo-900/20 via-[#111116]/90 to-[#0a0a0c]/90 backdrop-blur-md p-3 sm:p-4 transition-all duration-500 ease-out hover:from-indigo-800/20 hover:via-[#16161d]/90 hover:border-white/[0.1] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)] transform-gpu"
    >
      {/* Background glow isolation */}
      <div className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(800px circle at 50% -20%, rgba(255,255,255,0.03), transparent 60%)"
        }}
      />

      {/* Sleek MacOS-style Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[24px] bg-black border border-white/[0.04] shadow-inner mb-5 transform-gpu">
        <Image
          src={image || '/assets/images/image.png'}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={85}
          loading={eagerImage ? "eager" : "lazy"}
          priority={eagerImage}
          alt={title}
          className="object-cover opacity-80 transition-all duration-1000 ease-[0.19,1,0.22,1] group-hover:scale-105 group-hover:opacity-100"
        />
        
        {/* Soft glass rim overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

        {/* Status Badge floating cleanly */}
        <div className="absolute top-4 left-4 z-10 flex">
          <div className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-semibold backdrop-blur-xl bg-white/5 border border-white/10 text-white flex items-center gap-1.5 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent opacity-0 transition-opacity duration-300" />
            {!isBuilding ? (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            ) : (
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            )}
            {isBuilding ? "In Progress" : "Live"}
          </div>
        </div>

        {/* Action Buttons always visible with playful hover */}
        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
          {githubUrl && (
            <Link 
              href={githubUrl} 
              target="_blank" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/80 hover:bg-white hover:text-black hover:border-white hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300 shadow-xl"
              aria-label="GitHub Repository"
            >
              <FaGithub size={18} />
            </Link>
          )}
          {liveUrl && (
            <Link 
              href={liveUrl} 
              target="_blank" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black border border-white hover:bg-neutral-200 hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300 shadow-xl"
              aria-label="Live Preview"
            >
              <ArrowUpRight size={18} />
            </Link>
          )}
        </div>
      </div>

      {/* Content wrapper with generous spacing */}
      <div className="px-2 sm:px-4 flex flex-col flex-1 pb-2">
        <h3 className="sofia-pro text-2xl sm:text-[26px] text-white tracking-tight mb-3 transition-colors duration-300">
          {title}
        </h3>

        <div className="relative mb-6">
          <p className={`nunito text-neutral-400/90 text-[15px] leading-relaxed ${isExpanded ? '' : 'line-clamp-2 sm:line-clamp-3'}`}>
            {description}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[11px] uppercase tracking-widest text-white/40 mt-4 flex md:hidden items-center gap-1.5 hover:text-white transition-colors font-medium border border-white/5 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full"
          >
            {isExpanded ? (
              <>Less <FaChevronUp size={8} /></>
            ) : (
             <>More <FaChevronDown size={8} /></>
            )}
          </button>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {tech?.map((t, idx) => (
            <span 
              key={idx} 
              className="nunito text-[11px] px-3 py-1.5 rounded-full border border-white/[0.04] bg-white/[0.02] text-neutral-400 font-medium tracking-wide hover:bg-white/[0.06] hover:text-white transition-colors duration-300 backdrop-blur-sm cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};