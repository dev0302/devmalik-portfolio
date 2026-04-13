'use client';

import { Batch } from '../ui/Batch';
import { stack1, stack2 } from '@/data/stack';

export const Stack = () => {
  return (
    <div id="stack" className='mt-6 mb-16 mx-2 md:my-12 overflow-hidden max-w-6xl mx-auto'>
      <h2 className='sofia-pro text-xl mb-12 text-neutral-900 dark:text-white/90 mt-8'>
        Tools and Technologies
      </h2>

      {/* CSS Mask for perfect edge fading into any background */}
      <div 
        className="relative flex flex-col gap-5 w-full hanken-grotesk scale-90 md:scale-100"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
      >

        {/* Row 1 -> moving left */}
        <div className="flex flex-nowrap w-max animate-marquee hover:[animation-play-state:paused] will-change-transform">
          <div className="flex gap-4 pr-4">
            {stack1.map((item, index) => (
              <Batch key={`r1-a-${item.name}-${index}`}>
                <div className="flex items-center gap-2 px-1">
                  <item.icon className="w-5 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color: item.color }} />
                  <span className='text-neutral-700 dark:text-gray-200 whitespace-nowrap font-medium tracking-wide'>{item.name}</span>
                </div>
              </Batch>
            ))}
          </div>
          <div className="flex gap-4 pr-4" aria-hidden="true">
            {stack1.map((item, index) => (
              <Batch key={`r1-b-${item.name}-${index}`}>
                <div className="flex items-center gap-2 px-1">
                  <item.icon className="w-5 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color: item.color }} />
                  <span className='text-neutral-700 dark:text-gray-200 whitespace-nowrap font-medium tracking-wide'>{item.name}</span>
                </div>
              </Batch>
            ))}
          </div>
        </div>

        {/* Row 2 -> moving right (reverse marquee) */}
        <div className="flex flex-nowrap w-max animate-marquee-reverse hover:[animation-play-state:paused] will-change-transform">
          <div className="flex gap-4 pr-4">
            {stack2.map((item, index) => (
              <Batch key={`r2-a-${item.name}-${index}`}>
                <div className="flex items-center gap-2 px-1">
                  <item.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color: item.color }} />
                  <span className='text-neutral-700 dark:text-gray-200 whitespace-nowrap font-medium tracking-wide'>{item.name}</span>
                </div>
              </Batch>
            ))}
          </div>
          <div className="flex gap-4 pr-4" aria-hidden="true">
            {stack2.map((item, index) => (
              <Batch key={`r2-b-${item.name}-${index}`}>
                <div className="flex items-center gap-2 px-1">
                  <item.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color: item.color }} />
                  <span className='text-neutral-700 dark:text-gray-200 whitespace-nowrap font-medium tracking-wide'>{item.name}</span>
                </div>
              </Batch>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};