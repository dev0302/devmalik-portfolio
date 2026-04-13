'use client';
import React, { useEffect, useState } from 'react';

export const UmamiCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        // Increment and fetch count from counter service.
        const res = await fetch('https://api.counterapi.dev/v1/dev-malik-portfolio/visitors/up');
        const bodyText = await res.text();
        const data = JSON.parse(bodyText) as { count?: number };

        if (typeof data.count === 'number') {
          setCount(data.count);
          return;
        }
      } catch {
        // Fall through to fallback count.
      }

      setCount(2451);
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className="hanken-grotesk text-sm bg-neutral-900/60 backdrop-blur-md border border-neutral-800 text-neutral-400 px-4 py-2 rounded-full shadow-xl">
      You're the <span className="text-white font-medium font-pixel-grid" data-umami-event="visitor-count-view">
        {count ? count.toLocaleString() : '...'}
      </span> th visitor
    </div>
  )
}
