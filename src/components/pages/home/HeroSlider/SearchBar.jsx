import React from 'react';
import { Search } from 'lucide-react';

export const SearchBar = () => {
  return (
    <div className=" bg-gray-100">
      <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 relative z-10 -mt-8">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-2 sm:px-4 z-20">
          <div className="bg-green-800 rounded-lg shadow-lg p-2 sm:p-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
              <div className="w-full sm:flex-1">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search activities..."
                    className="w-full dark:text-black pl-8 pr-2 py-1.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="flex w-full sm:w-auto items-center gap-2">
                <select className="py-1.5 dark:text-black px-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 sm:flex-none">
                  <option>2 Adult</option>
                  <option>1 Adult</option>
                  <option>3 Adult</option>
                </select>

                <input
                  type="date"
                  className="py-1.5 dark:text-black px-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 sm:flex-none"
                />

                <button className="bg-yellow-700 text-white px-4 py-1.5 text-sm rounded-md hover:bg-yellow-600 transition-colors flex-1 sm:flex-none">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
   
  );
};