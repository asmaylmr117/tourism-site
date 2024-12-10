import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SlideNavButton = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-3/4 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full transition-all duration-300 z-20 border-4 border-white/50 hover:border-white hover:bg-gray-500"
      style={{ [direction === 'prev' ? 'left' : 'right']: '2rem' }}
    >
      {direction === 'prev' ? (
        <ChevronLeft className="w-6 h-6 text-white" />
      ) : (
        <ChevronRight className="w-6 h-6 text-white" />
      )}
    </button>
  );
};