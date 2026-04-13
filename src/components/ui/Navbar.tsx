'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Search } from 'lucide-react';
import { CommandMenu } from './CommandMenu';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '#experience' },
  { name: 'Resume', href: '/resume' },
];

/* ── animated dot that follows the active/hovered pill ── */
function MagneticIndicator({
  activeEl,
}: {
  activeEl: HTMLElement | null;
}) {
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const w = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (!activeEl) return;
    const rect = activeEl.getBoundingClientRect();
    const parent = activeEl.closest('nav')!.getBoundingClientRect();
    x.set(rect.left - parent.left);
    w.set(rect.width);
  }, [activeEl, x, w]);

  if (!activeEl) return null;

  return (
    <motion.span
      className="absolute top-1/2 -translate-y-1/2 h-[calc(100%-6px)] rounded-full bg-white/8 pointer-events-none"
      style={{ left: x, width: w }}
    />
  );
}

export const Navbar = () => {
  const pathname = usePathname();
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoveredEl, setHoveredEl] = useState<HTMLElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLElement>(null);

  /* scroll listener */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Ctrl+K shortcut */
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsCommandMenuOpen((o) => !o);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  /* mouse spotlight on the pill */
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  /* glow border color on scroll */
  const borderClass = isScrolled
    ? 'border-white/15 shadow-[0_0_24px_rgba(99,161,237,0.15)]'
    : 'border-white/8';

  return (
    <>
      {/* ── Navbar entry animation ── */}
      <motion.nav
        ref={navRef}
        onMouseMove={handleMouseMove}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22, delay: 0.1 }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled ? 'top-3' : 'top-5'
        }`}
      >
        {/* spotlight radial that follows cursor */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(120px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99,161,237,0.08), transparent 70%)`,
          }}
        />

        <div
          className={`relative flex items-center gap-1.5 p-1.5 rounded-full border bg-black/60 backdrop-blur-xl shadow-2xl transition-all duration-500 ${borderClass}`}
        >
          {/* ── Pill background that follows hover ── */}
          <MagneticIndicator activeEl={hoveredEl} />

          {/* ── Nav links ── */}
          <div className="flex items-center px-1 relative">
            {navItems.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.name}
                  className="relative"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, type: 'spring', stiffness: 250, damping: 22 }}
                  onMouseEnter={(e) => {
                    setHoveredItem(item.name);
                    setHoveredEl(e.currentTarget as HTMLElement);
                  }}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                    setHoveredEl(null);
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        const target = document.querySelector(item.href);
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full block transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {/* active dot */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="activeNavDot"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400"
                        />
                      )}
                    </AnimatePresence>

                    {item.name}
                  </Link>

                  {/* ── Hover previews ── */}
                  <AnimatePresence>
                    {(item.name === 'Resume' || item.name === 'Work') && hoveredItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.88, y: 14 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.88, y: 14 }}
                        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-5 z-[60] pointer-events-none"
                      >
                        <div className="relative">
                          {/* glow halo */}
                          <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/25 via-purple-500/15 to-green-500/20 rounded-xl blur-xl" />
                          {/* card */}
                          <div className={`relative overflow-hidden rounded-xl border border-white/12 bg-black shadow-2xl ${
                            item.name === 'Resume' ? 'w-56 h-52 md:w-64 md:h-80' : 'w-56 h-36 md:w-72 md:h-44'
                          }`}>
                            <Image
                              src={item.name === 'Resume' ? '/assets/images/Resume.webp' : '/assets/images/work.png'}
                              alt={`${item.name} Preview`}
                              fill
                              sizes="(max-width: 768px) 224px, 288px"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white/80 font-medium whitespace-nowrap uppercase tracking-widest">
                              Preview
                            </div>
                          </div>
                          {/* arrow */}
                          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-t border-l border-white/12 rotate-45" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* ── Divider ── */}
          <motion.div
            className="h-4 w-px bg-white/10 mx-0.5"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: 0.4 }}
          />

          {/* ── Search / Command button ── */}
          <motion.button
            onClick={() => setIsCommandMenuOpen(true)}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, type: 'spring', stiffness: 250, damping: 22 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-2 p-1.5 md:pl-3 md:pr-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 ml-1"
          >
            <Search size={14} className="text-neutral-400 group-hover:text-white transition-colors duration-300" />
            <div className="hidden md:flex items-center gap-0.5 bg-black/40 border border-white/5 rounded-full px-2 py-1">
              <span className="nunito text-[10px] font-semibold text-white/50 group-hover:text-white/80 transition-colors">Ctrl</span>
              <span className="nunito text-[10px] text-white/30 px-0.5">+</span>
              <span className="nunito text-[10px] font-semibold text-white/50 group-hover:text-white/80 transition-colors">K</span>
            </div>
          </motion.button>
        </div>

        {/* outer glow ring that fades in on scroll */}
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                boxShadow: '0 0 0 1px rgba(99,161,237,0.12), 0 8px 32px rgba(99,161,237,0.08)',
              }}
            />
          )}
        </AnimatePresence>
      </motion.nav>

      <CommandMenu isOpen={isCommandMenuOpen} setIsOpen={setIsCommandMenuOpen} />
    </>
  );
};
