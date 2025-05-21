// components/Header.tsx
'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import SearchBar from '@/app/components/SearchBar';
import CartIcon from '@/app/components/CartIcon';
import WishlistIcon from '@/app/components/WishlistIcon';
import AccountIcon from '@/app/components/AccountIcon';

const Header = () => {
  const menuItems = ['Home', 'Contact', 'About', 'Sign Up'];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Mobile Menu Button */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden mr-4 text-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
            
            {/* Logo */}
            <div className="text-2xl font-bold text-black">
                <Link href="/">Exclusive</Link>
            </div>
          </div>
          
          {/* Middle - Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="relative text-black hover:text-gray-800 transition-colors group cursor-pointer"
                onClick={(e) => e.preventDefault()}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
          
          {/* Right side - Icons */}
          <div className="flex items-center space-x-6">
            <SearchBar />
            <WishlistIcon count={3} />
            <CartIcon count={5} />
            <AccountIcon />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-black hover:text-gray-800 transition-colors py-2 px-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="border-b border-gray-300"></div>
    </header>
  );
};

export default Header;