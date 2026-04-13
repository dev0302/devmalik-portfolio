'use client';

import { motion } from "framer-motion";

export const BlurFade = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ filter: "blur(20px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
};
