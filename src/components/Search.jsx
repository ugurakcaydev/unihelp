import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center bg-black text-gray-400 rounded-full px-5 w-full h-[45px] border-2 border-transparent focus-within:border-[#1D9BF0] group">
      <svg
        className="w-5 h-5 mr-4 transition-colors duration-200 text-gray-400 group-focus-within:text-[#1D9BF0]"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M10.5 19a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none w-full"
      />
    </div>
  );
};

export default SearchBar;
