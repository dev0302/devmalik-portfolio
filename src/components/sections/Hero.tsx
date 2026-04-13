'use client';

import Image from "next/image"
import SocialLinks from "../ui/SocialLinks"

export const Hero = () => {
  return (
    <div className="h-auto relative flex flex-col pt-4 w-full max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start relative z-10">

        {/* Left: Image Widget and Social Links */}
        <div className="w-full md:w-[35%] flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center gap-6 w-full max-w-[280px]">
            {/* Dark Nested Card Wrapper */}
            <div className="relative w-full bg-[#0a0a0a] p-3 rounded-[24px] border border-white/10 shadow-2xl group/image flex flex-col m-1 transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">

              {/* Stylish Window Header inside card */}
              <div className="flex items-center px-2 pt-2 pb-3 gap-2 w-full">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              </div>

              {/* Inner Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-[16px] overflow-hidden bg-black isolation-auto">
                {/* Images */}
                <Image
                  src="/assets/images/dev_mee.jpeg"
                  fill
                  alt="Dev Malik"
                  priority
                  className="w-full h-auto object-cover absolute inset-0 transition-all duration-700 ease-in-out opacity-100 group-hover/image:opacity-0 group-hover/image:scale-105"
                />
                <Image
                  src="/assets/images/dev_meee.jpeg"
                  fill
                  alt="Dev Malik Hover"
                  priority
                  className="w-full h-auto object-cover absolute inset-0 transition-all duration-700 ease-in-out opacity-0 group-hover/image:opacity-100 scale-95 group-hover/image:scale-100"
                />

                {/* Floating Location Pill */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-xl transition-transform duration-500 group-hover/image:-translate-y-1">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </div>
                  <span className="nunito text-[11px] text-white/90 font-medium tracking-wide whitespace-nowrap">
                    New Delhi, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="w-full">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Right: Text & Bio */}
        <div className="w-full md:w-[65%] flex flex-col gap-6 text-left md:pt-6">
          <h1 className="text-4xl md:text-5xl sofia-pro text-white tracking-tight">
            Dev Malik, <span className="text-white/40">19</span>
          </h1>

          <div className="nunito text-[#a1a1aa] text-base md:text-base leading-relaxed flex flex-col gap-5 ">
            <p>
              I am a full-stack developer who enjoys building products and platforms that solve real-world problems.
            </p>

            <p>
              I enjoy identifying problems in existing systems and creating platforms that simplify workflows, automate tasks, and bring structure to organizations. Most of my projects revolve around management systems, real-time platforms, and tools that improve how teams work and communicate.
            </p>
            <p>
              I work across the full stack - frontend, backend, databases, APIs, deployment, and system design. Recently, I have been building centralized platforms for college societies, recruitment systems, and real-time event management tools.
            </p>
          </div>
        </div>

      </div>

      {/* Goal line — full width, centered below both columns */}
      <div className="nunito text-[#a1a1aa] text-base leading-relaxed mt-6 flex items-center justify-center gap-2.5">
        <span className="w-2 h-2 rounded-full bg-[#00f260] shadow-[0_0_8px_#00f260] shrink-0 inline-block"></span>
        <span><span className="text-white font-medium">Goal:</span> Become a product engineer who can build complete scalable systems from idea to deployment.</span>
      </div>
    </div>
  )
}
