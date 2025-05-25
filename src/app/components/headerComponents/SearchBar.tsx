// components/SearchBar.tsx
import React from 'react';

const SearchBar = () => {
  return (
    <div className="relative hidden md:block">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="py-2 px-4 pr-10 rounded-md bg-gray-100 focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-300 w-64 transition-colors"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth={2}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;