"use client";
import { motion } from "framer-motion";
const StatusLine = () => {
  return (
    <div className="flex items-center text-neutral-900 dark:text-white">
      <div className="relative flex items-center justify-center mr-2">
        <motion.div
          className="absolute w-2 h-2 bg-green-400 rounded-full"
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: 0, scale: 3 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className=" m-1 relative w-1.5 h-1.5 bg-green-400 rounded-full" />
      </div>
      <span className="">
        <span className="font-semibold hanken-grotesk">Open to Work:</span> Full-Time, Freelance, or Collabs.
      </span>
    </div>
  );
};

export default StatusLine;