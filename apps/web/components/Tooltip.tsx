'use client';

import { useState, ReactNode, useRef, useEffect } from 'react';

interface TooltipProps {
  content: string;
  children: ReactNode;
  disabled?: boolean;
}

export default function Tooltip({ content, children, disabled = false }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('top');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;
      
      // If there's not enough space above (less than 80px), show below
      if (spaceAbove < 80) {
        setPosition('bottom');
      } else {
        setPosition('top');
      }
    }
  }, [isVisible]);

  if (!disabled) {
    return <>{children}</>;
  }

  return (
    <div 
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`absolute left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in-0 zoom-in-95 duration-200 ${
          position === 'top' 
            ? 'bottom-full mb-2' 
            : 'top-full mt-2'
        }`}>
          <div className="backdrop-blur-md bg-gray-800/90 text-white text-xs rounded-lg px-3 py-2 shadow-xl border border-gray-700/50 whitespace-nowrap">
            {content}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-transparent ${
              position === 'top'
                ? 'top-full border-t-4 border-t-gray-800/90'
                : 'bottom-full border-b-4 border-b-gray-800/90'
            }`}></div>
          </div>
        </div>
      )}
    </div>
  );
}
