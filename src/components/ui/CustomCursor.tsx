'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [mounted, setMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const [isHoveringCmdk, setIsHoveringCmdk] = useState(false);
  
  // Track continuous mouse position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Apply butter-smooth spring physics for trailing follower
  const springConfig = { damping: 18, stiffness: 120, mass: 0.2 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable completely on touch devices (mobile/tablets)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      setMounted(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);

      // Detect if hovering over clickable elements
      const target = e.target as HTMLElement;
      const clickableNode = target.closest('a, button, [role="button"]') || window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!clickableNode);
      setIsHoveringNav(!!target.closest('nav'));
      setIsHoveringCmdk(!!target.closest('[data-cmdk="true"]'));
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    setMounted(true);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  // Don't render until mounted on client (prevents hydration mismatch)
  if (!mounted) return null;
  // Don't render on mobile touch screens
  if (isTouchDevice) return null;

  return (
    <>
      {/* Trailing Yellow Follower */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          // Hide yellow completely when near the navbar or inside CMD+K
          opacity: (isVisible && !isHoveringNav && !isHoveringCmdk) ? 1 : 0,
        }}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
      >
        <motion.div
          className="bg-amber-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_16px_4px_rgba(251,191,36,0.3)]"
          animate={{
            width: isHovering ? 36 : 20,
            height: isHovering ? 36 : 20,
            opacity: isHovering ? 0.4 : 0.6,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </motion.div>

      {/* Primary Contextual Cursor */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
      >
        <motion.div
          className={`rounded-full -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 ${(isHoveringNav || isHoveringCmdk) ? "bg-emerald-400 shadow-[0_0_20px_6px_rgba(52,211,153,0.4)]" : "bg-blue-300 shadow-[0_0_20px_6px_rgba(96,165,250,0.4)]"}`}
          animate={{
            width: isHovering ? 24 : 12,
            height: isHovering ? 24 : 12,
            opacity: isHovering ? 0.9 : 1,
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        />
      </motion.div>
    </>
  );
};
