// components/LanguageDropdown.tsx
'use client';
import React, { useState } from 'react';

interface LanguageDropdownProps {
  onLanguageChange: (language: string) => void;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ onLanguageChange }) => {
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [isOpen, setIsOpen] = useState(false);

  const languages = ['English', 'Bangla'];

  const handleLanguageSelect = (language: string) => {
    setCurrentLanguage(language);
    setIsOpen(false);
    onLanguageChange(language);
  };

  return (
    <div className="relative ml-4">
      <button 
        className="flex items-center gap-1 hover:text-gray-300 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentLanguage}
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
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-10">
          {languages.map((language) => (
            <button
              key={language}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                currentLanguage === language ? 'bg-gray-100' : ''
              }`}
              onClick={() => handleLanguageSelect(language)}
            >
              {language}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;