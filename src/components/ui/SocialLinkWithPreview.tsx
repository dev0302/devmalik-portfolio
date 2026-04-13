'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface SocialLinkWithPreviewProps {
  href: string;
  icon: any;
  previewImage?: string;
  ariaLabel: string;
  className?: string;
}

export const SocialLinkWithPreview = ({
  href,
  icon: Icon,
  previewImage,
  ariaLabel,
  className
}: SocialLinkWithPreviewProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={className}
      >
        <Icon className="w-5 h-5 md:w-6 md:h-6" />
      </Link>

      <AnimatePresence>
        {isHovered && previewImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-[60] pointer-events-none"
          >
            <div className="relative group/preview">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover/preview:opacity-100 transition-opacity duration-500" />
              
              <div className="relative w-48 aspect-video md:w-80 md:aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl">
                <Image
                  src={previewImage}
                  alt={ariaLabel}
                  fill
                  className={`object-cover transition-all duration-300 ${isHovered ? 'grayscale-0 scale-105' : 'grayscale-[20%]'}`}
                />
                
                {/* Overlay details */}
                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
                {/* <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                  <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[8px] text-white/80 font-medium">
                    Profile Preview
                  </div>
                  <div className="bg-blue-500 px-1.5 py-0.5 rounded text-[8px] text-white font-bold">
                    LIVE
                  </div>
                </div> */}
              </div>

              {/* Tooltip arrow */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-b border-r border-white/10 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
