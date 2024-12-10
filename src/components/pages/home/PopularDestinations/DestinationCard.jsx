import React from 'react';

export function DestinationCard({ title, image, description }) {
  return (
    <div className="flex flex-col group">
      {/* الصورة مع التأثير */}
      <div className="overflow-hidden rounded-2xl shadow-md transition-all duration-300 group-hover:shadow-xl">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-x-110"
        />
      </div>

      {/* النصوص */}
      <h3 className="mt-4 text-xl font-semibold text-gray-900 transition-transform duration-300 group-hover:translate-x-2">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-500 transition-transform duration-300 group-hover:translate-x-2">
        {description}
      </p>
    </div>
  );
}
