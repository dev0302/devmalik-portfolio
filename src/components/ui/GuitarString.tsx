'use client';

import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function GuitarString() {
  const path = useMotionValue("");
  const yPoint = useSpring(50, {
    stiffness: 300,
    damping: 15,
    mass: 1
  });
  const xPoint = useMotionValue(50);
  const d = useTransform([xPoint, yPoint], ([x, y]) => {
    return `M0 50 Q${x} ${y} 100 50`;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const relativeX = ((clientX - left) / width) * 100;
    const relativeY = ((clientY - top) / height) * 100;
    xPoint.set(relativeX);
    yPoint.set(relativeY);
  };

  const handleMouseLeave = () => {
    yPoint.set(50);
    xPoint.set(50);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {

    const { clientX, clientY } = e.touches[0];
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const relativeX = ((clientX - left) / width) * 100;
    const relativeY = ((clientY - top) / height) * 100;
    xPoint.set(relativeX);
    yPoint.set(relativeY);
  };

  const handleTouchEnd = () => {
    yPoint.set(50);
    xPoint.set(50);
  };

  useEffect(() => {
    path.set("M0 50 Q50 50 100 50");
  }, [path]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className=" absolute -top-5 flex h-60 w-full flex-col justify-center cursor-crosshair "
    >
      <svg
        className="pointer-events-none absolute left-0 top-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d={d}
          stroke="currentColor"
          strokeWidth="2"
          fill="transparent"
          className="stroke-blue-400"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

    </div>
  );
}