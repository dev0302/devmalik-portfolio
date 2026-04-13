'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Github, Briefcase, Code, FileText, Send, User, Laptop, Sparkles, Sun } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface CommandMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

interface CommandItem {
  title: string;
  icon: any;
  href: string;
  shortcut?: string;
  external?: boolean;
}

interface CommandGroup {
  group: string;
  items: CommandItem[];
}

const commands: CommandGroup[] = [
  { group: 'Quick Actions', items: [
    { title: 'View Projects', icon: Laptop, href: '#projects', shortcut: 'P' },
    { title: 'Tech Stack / Skills', icon: Code, href: '#stack', shortcut: 'S' },
    { title: 'Open GitHub', icon: Github, href: 'https://github.com/dev0302', external: true, shortcut: 'G' },
  ]},
  { group: 'Navigate', items: [
    { title: 'Home', icon: User, href: '/', shortcut: 'H' },
    { title: 'Experience', icon: Briefcase, href: '#experience', shortcut: 'W' },
  ]},
  { group: 'Connect', items: [
    { title: 'X (Twitter)', icon: Sparkles, href: 'https://x.com/devmalik_0302', external: true, shortcut: 'X' },
    { title: 'Contact Me', icon: Send, href: 'mailto:devmalik9953@gmail.com', external: true, shortcut: 'C' },
    { title: 'Download Resume', icon: FileText, href: '/resume.pdf', external: true, shortcut: 'R' },
  ]},
  { group: 'Settings', items: [
    { title: 'Toggle Theme', icon: Sun, href: '#', shortcut: 'T' },
  ]}
];

export const CommandMenu = ({ isOpen, setIsOpen }: CommandMenuProps) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const flatCommands = commands.flatMap(g => g.items.map(item => ({ ...item, group: g.group })));
  const filteredCommands = query === '' 
    ? flatCommands 
    : flatCommands.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || 
                                 item.group.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleAction = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank');
    } else if (href.startsWith('#')) {
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(href);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        setIsOpen(false);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          handleAction(filteredCommands[selectedIndex].href, filteredCommands[selectedIndex].external);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-99"
          />
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              data-cmdk="true"
              className="w-full max-w-[640px] bg-[#0c0c0c] border border-white/10 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[80vh]"
            >
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5 bg-white/5">
            <Search size={20} className="text-neutral-400" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder="Where do you want to go?"
              className="flex-1 bg-transparent border-none text-white outline-none placeholder:text-neutral-500 text-lg"
            />
            <div 
              className="flex items-center gap-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity px-2"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar py-2">
            {filteredCommands.length === 0 ? (
              <div className="p-8 text-center text-neutral-500 italic">No results found...</div>
            ) : (
              <>
                {commands.filter(group => 
                  group.items.some(item => filteredCommands.some(f => f.title === item.title))
                ).map((group) => (
                  <div key={group.group}>
                    <div className="px-4 py-2 mt-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
                      {group.group}
                    </div>
                    {group.items.filter(item => filteredCommands.some(f => f.title === item.title)).map((item) => {
                      const isFlatIndexSelected = filteredCommands.indexOf(filteredCommands.find(f => f.title === item.title)!) === selectedIndex;
                      return (
                        <button
                          key={item.title}
                          onClick={() => handleAction(item.href, item.external)}
                          onMouseEnter={() => setSelectedIndex(filteredCommands.indexOf(filteredCommands.find(f => f.title === item.title)!))}
                          className={`relative w-full flex items-center justify-between px-4 py-3 text-sm mx-2 rounded-xl transition-colors duration-200 ${
                            isFlatIndexSelected ? 'text-white' : 'text-neutral-400 hover:text-white/80'
                          }`}
                          style={{ width: 'calc(100% - 16px)' }}
                        >
                          <div className="flex items-center gap-3 relative z-10">
                            <item.icon size={18} className={isFlatIndexSelected ? 'text-blue-400' : 'text-neutral-500'} />
                            <span className={isFlatIndexSelected ? 'font-medium' : ''}>{item.title}</span>
                          </div>
                          {isFlatIndexSelected && (
                            <div className="flex items-center gap-2 relative z-10">
                              {item.shortcut && (
                                <span className="text-[10px] text-neutral-400 px-2 py-0.5 rounded-md border border-white/10 bg-black/50 tracking-widest leading-none">
                                  {item.shortcut}
                                </span>
                              )}
                              <span className="text-[10px] text-neutral-500/80 uppercase font-semibold">Enter</span>
                            </div>
                          )}
                          {isFlatIndexSelected && (
                            <motion.div
                              layoutId="commandActiveBg"
                              className="absolute inset-0 bg-white/[0.06] rounded-xl z-0"
                              transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </>
            )}
          </div>
          
          <div className="p-3 border-t border-white/5 bg-white/2 flex items-center justify-between text-[11px] text-neutral-500">
            <div className="flex justify-between w-full gap-4">
              <span className="flex items-center gap-1.5"><Search size={12} /> Navigate with keys</span>
              <span className="flex items-center gap-1.5"><X size={12} /> Close</span>
            </div>
          </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
