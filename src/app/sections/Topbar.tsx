'use client';
import React, { useState } from 'react';

const Topbar = () => {
  const [language, setLanguage] = useState('English');
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleLanguage = () => {
    setShowDropdown(!showDropdown);
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setShowDropdown(false);
  };

  return (
    <div className="bg-black text-white py-2 px-4 text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1 text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
          <a 
            href="#" 
            className="underline hover:text-gray-300 transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            ShopNow
          </a>
        </div>
        
        <div className="relative ml-4">
          <button 
            className="flex items-center gap-1 hover:text-gray-300 transition-colors"
            onClick={toggleLanguage}
          >
            {language}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-10">
              <button 
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => changeLanguage('English')}
              >
                English
              </button>
              <button 
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => changeLanguage('Bangla')}
              >
                Bangla
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;