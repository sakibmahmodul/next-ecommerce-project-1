'use client';
import Link from 'next/link';
import React from 'react';
import LanguageDropdown from '../components/headerComponents/LanguageDropdown';

const Topbar: React.FC = () => {
  const handleLanguageChange = (language: string) => {
    // You can add additional logic here when language changes
    console.log(`Language changed to: ${language}`);
  };

  return (
    <div className="bg-black text-white py-2 px-4 text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1 text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
          <Link 
            href="/shop" 
            className="underline hover:text-gray-300 transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            ShopNow
          </Link>
        </div>
        
        <LanguageDropdown onLanguageChange={handleLanguageChange} />
      </div>
    </div>
  );
};

export default Topbar;