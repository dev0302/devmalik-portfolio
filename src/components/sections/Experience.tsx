'use client';

import { Exptag } from "../ui/exptag";
import { experienceData } from "@/data/experience";


export const Experience = () => {
  return (
    <section id="experience" className="mt-32 md:mt-38 max-w-5xl mx-auto">
      {/* section header */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="sofia-pro text-2xl tracking-tight text-white/90 whitespace-nowrap">
          Experience
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      {/* timeline container */}
      <div className="relative pl-6 md:pl-8">
        {/* animated vertical timeline line */}
        <div
          className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px origin-top"
          style={{
            background: "linear-gradient(to bottom, rgba(52,211,153,0.5), rgba(52,211,153,0.15) 50%, rgba(255,255,255,0.06))",
          }}
        />

        {/* cards */}
        <div className="flex flex-col gap-8">
          {experienceData.map((item, index) => (
            <Exptag
              key={item.id}
              logo={item.logo}
              company={item.company}
              role={item.role}
              date={item.date}
              description={item.description}
              technologies={item.technologies}
              link={item.link}
              isFirst={index === 0}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};