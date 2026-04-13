'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight, Heart } from "lucide-react";
import { useEffect, useState } from "react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "#experience" },
  { label: "Resume", href: "/resume" },
];

const socialItems = [
  { icon: FaXTwitter, href: "https://x.com/devmalik_0302", label: "X" },
  { icon: FaGithub, href: "https://github.com/dev0302", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/dev-malik-976230311/", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:devmalik9953@gmail.com", label: "Email" },
];

export const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        })
      );
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative mt-24 pb-8">
      {/* top divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* main content row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          {/* left: branding + status */}
          <div className="flex flex-col gap-3">
            <h3 className="instrument-serif-regular text-xl text-white tracking-tight">
              Dev Malik
            </h3>
            <p className="nunito text-sm text-neutral-500 max-w-xs leading-relaxed">
              Building products that solve real problems.
              <br />
              Open to full‑time, freelance & collabs.
            </p>

            {/* live status line */}
            <div className="flex items-center gap-2 mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="nunito text-xs text-neutral-500">
                {time ? `${time} IST · Available` : "Available for work"}
              </span>
            </div>
          </div>

          {/* center: nav links */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 mb-1">Navigate</span>
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group nunito text-sm text-neutral-500 hover:text-white transition-colors duration-200 flex items-center gap-1"
              >
                {link.label}
                <ArrowUpRight
                  size={12}
                  className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-60 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200"
                />
              </Link>
            ))}
          </div>

          {/* right: social icons */}
          <div className="flex flex-col gap-2 items-start md:items-end">
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 mb-1">Connect</span>
            <div className="flex items-center gap-3">
              {socialItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="group relative p-2 rounded-lg border border-white/0 hover:border-white/10 bg-transparent hover:bg-white/5 transition-all duration-200"
                >
                  <item.icon
                    size={16}
                    className="text-neutral-500 group-hover:text-white transition-colors duration-200"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent mt-10 mb-5" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] nunito text-neutral-600">
          <span className="flex items-center gap-1">
            Crafted with <Heart size={10} className="text-red-400/70" /> by{" "}
            <Link
              href="https://x.com/devmalik_0302"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Dev Malik
            </Link>
          </span>
          <span>© {new Date().getFullYear()} · All rights reserved</span>
        </div>
      </motion.div>
    </footer>
  );
};
