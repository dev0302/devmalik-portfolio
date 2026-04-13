'use client';

import { ExperienceCardProps } from "@/types";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Exptag = ({
  logo,
  company,
  role,
  date,
  description,
  technologies,
  link,
  isFirst,
}: ExperienceCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  
  const techList = technologies ? technologies.split("/").map((t) => t.trim()) : [];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 95%",
        once: true,
        toggleActions: "play none none none",
      }
    });

    tl.fromTo(dotRef.current, 
      { scale: 0, opacity: 0, autoAlpha: 0 }, 
      { scale: 1, opacity: 1, autoAlpha: 1, duration: 0.25, ease: "power2.out" }
    ).fromTo(cardRef.current, 
      { y: 20, opacity: 0, rotationX: 2 }, 
      { y: 0, opacity: 1, rotationX: 0, duration: 0.35, ease: "power2.out" },
      "-=0.15"
    );
  }, { scope: containerRef });

  return (
    <div className="group relative perspective-1000" ref={containerRef}>
      {/* ── timeline node ── */}
      <div className="absolute -left-6 md:-left-8 top-7 flex items-center justify-center z-20">
        {/* outer ring */}
        <div className="relative" ref={dotRef}>
          {/* pulse ring on first item */}
          {isFirst && (
            <span className="absolute inset-0 rounded-full animate-ping bg-emerald-400/30" />
          )}
          {/* dot */}
          <span
            className={`block w-[14px] h-[14px] md:w-4 md:h-4 rounded-full border-2 transition-colors duration-300 ${
              isFirst
                ? "border-emerald-400 bg-emerald-400/30 shadow-[0_0_12px_rgba(52,211,153,0.5)]"
                : "border-white/20 bg-[#0c0c0c] group-hover:border-emerald-400/60 group-hover:bg-emerald-400/10"
            }`}
          />
        </div>
      </div>

      {/* ── card ── */}
      <div 
        ref={cardRef}
        className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md hover:bg-neutral-900/60 hover:border-white/20 transition-all duration-500 p-6 overflow-hidden shadow-2xl hover:shadow-[0_8px_30px_rgba(255,255,255,0.04)] group-hover:-translate-y-1 transform-gpu"
      >
        {/* subtle left glow accent */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* radial background glow that follows slightly on hover conceptually */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              "radial-gradient(600px circle at 0% 0%, rgba(52,211,153,0.05), transparent 60%)",
          }}
        />

        {/* top row */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 relative z-10">
          <div className="flex items-center gap-4">
            {/* logo slot */}
            <div className="shrink-0 w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-xl font-semibold text-white overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-500">
              {logo}
            </div>

            <div>
              <h3 className="instrument-serif-regular text-xl text-white leading-tight flex items-center gap-2">
                {link ? (
                  <Link
                    href={link}
                    target="_blank"
                    className="hover:text-emerald-300 transition-colors inline-flex items-center gap-1 group/link"
                  >
                    {company}
                    <ArrowUpRight size={16} className="opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                  </Link>
                ) : (
                  company
                )}
              </h3>
              <p className="text-sm text-neutral-400 mt-1 nunito tracking-wide">{role}</p>
            </div>
          </div>

          {/* date badge */}
          {date && (
            <span className="shrink-0 text-[11px] text-neutral-400 border border-white/10 rounded-full px-3 py-1.5 bg-white/5 whitespace-nowrap nunito shadow-sm self-start sm:self-auto group-hover:border-white/20 transition-colors duration-300">
              {date}
            </span>
          )}
        </div>

        {/* description */}
        <div className="mt-6 space-y-3 relative z-10">
          {Array.isArray(description) ? (
            description.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-[8px] shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400/70 shadow-[0_0_6px_rgba(52,211,153,0.4)]" />
                <p className="nunito text-sm text-neutral-300 leading-relaxed">
                  {item}
                </p>
              </div>
            ))
          ) : (
            <div className="flex items-start gap-3">
              <span className="mt-[8px] shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400/70 shadow-[0_0_6px_rgba(52,211,153,0.4)]" />
              <p className="nunito text-sm text-neutral-300 leading-relaxed">
                {description}
              </p>
            </div>
          )}
        </div>

        {/* tech pills */}
        {techList.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6 relative z-10">
            {techList.map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-3 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-400 nunito tracking-wide hover:border-emerald-400/40 hover:text-emerald-300 hover:bg-emerald-400/10 transition-all duration-300 hover:scale-105 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};