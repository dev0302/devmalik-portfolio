"use client";

// ExpandToggle.tsx — the ONLY client component in the card tree.
// Keeps "use client" surface minimal so ProjectCard stays a Server Component.

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const ExpandToggle = ({ description }: { description: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative mb-6">
      <p
        className={`nunito text-neutral-400/90 text-[15px] leading-relaxed ${
          isExpanded ? "" : "line-clamp-2 sm:line-clamp-3"
        }`}
      >
        {description}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[11px] uppercase tracking-widest text-white/40 mt-4 flex md:hidden items-center gap-1.5 hover:text-white transition-colors font-medium border border-white/5 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full"
      >
        {isExpanded ? (
          <>
            Less <FaChevronUp size={8} />
          </>
        ) : (
          <>
            More <FaChevronDown size={8} />
          </>
        )}
      </button>
    </div>
  );
};