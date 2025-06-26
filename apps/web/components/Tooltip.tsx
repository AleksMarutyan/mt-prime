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
  const [horizontalPosition, setHorizontalPosition] = useState<'left' | 'center' | 'right'>('center');
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && containerRef.current && tooltipRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      
      // Vertical positioning
      const spaceAbove = containerRect.top;
      const spaceBelow = window.innerHeight - containerRect.bottom;
      
      if (spaceAbove < 80) {
        setPosition('bottom');
      } else {
        setPosition('top');
      }

      // Horizontal positioning with better width handling
      const containerCenter = containerRect.left + containerRect.width / 2;
      const estimatedTooltipWidth = Math.min(content.length * 6 + 24, 280); // Estimate width based on content
      const tooltipHalfWidth = estimatedTooltipWidth / 2;
      const viewportWidth = window.innerWidth;
      const margin = 16; // Margin from screen edges
      
      // Check if tooltip would extend beyond left edge
      if (containerCenter - tooltipHalfWidth < margin) {
        setHorizontalPosition('left');
      }
      // Check if tooltip would extend beyond right edge
      else if (containerCenter + tooltipHalfWidth > viewportWidth - margin) {
        setHorizontalPosition('right');
      }
      // Center position is fine
      else {
        setHorizontalPosition('center');
      }
    }
  }, [isVisible, content]);

  if (!disabled) {
    return <>{children}</>;
  }

  const getHorizontalClasses = () => {
    switch (horizontalPosition) {
      case 'left':
        return 'left-0';
      case 'right':
        return 'right-0';
      default:
        return 'left-1/2 transform -translate-x-1/2';
    }
  };

  const getArrowClasses = () => {
    const baseClasses = 'absolute w-0 h-0 border-l-4 border-r-4 border-transparent';
    const verticalClasses = position === 'top'
      ? 'top-full border-t-4 border-t-gray-800/90'
      : 'bottom-full border-b-4 border-b-gray-800/90';
    
    const horizontalArrowClasses = horizontalPosition === 'left'
      ? 'left-4'
      : horizontalPosition === 'right'
      ? 'right-4'
      : 'left-1/2 transform -translate-x-1/2';

    return `${baseClasses} ${verticalClasses} ${horizontalArrowClasses}`;
  };

  return (
    <div 
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`absolute z-50 animate-in fade-in-0 zoom-in-95 duration-200 ${
          position === 'top' 
            ? 'bottom-full mb-2' 
            : 'top-full mt-2'
        } ${getHorizontalClasses()}`}>
          <div 
            ref={tooltipRef}
            className="backdrop-blur-md bg-gray-800/90 text-white text-xs rounded-lg px-3 py-2 shadow-xl border border-gray-700/50"
            style={{ 
              wordBreak: 'break-word',
              whiteSpace: 'normal',
              minWidth: '120px',
              maxWidth: horizontalPosition !== 'center' ? '220px' : '280px',
              width: 'max-content'
            }}
          >
            {content}
            <div className={getArrowClasses()}></div>
          </div>
        </div>
      )}
    </div>
  );
}
