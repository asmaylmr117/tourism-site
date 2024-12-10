import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function NavigationButton({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full bg-yellow-400 shadow-lg hover:bg-yellow-500 transition-colors duration-200 z-10"
      aria-label={direction === 'prev' ? 'Previous' : 'Next'}
    >
      {direction === 'prev' ? (
        <ChevronLeft className="w-6 h-6 text-orange-500" />
      ) : (
        <ChevronRight className="w-6 h-6 text-orange-500" />
      )}
    </button>
  );
}