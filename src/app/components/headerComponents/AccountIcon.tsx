// components/AccountIcon.tsx
import React from 'react';

const AccountIcon = () => {
  return (
    <div className="relative cursor-pointer">
      <div className="h-8 w-8 bg-rose-500 rounded-full flex items-center justify-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
    </div>
  );
};

export default AccountIcon;