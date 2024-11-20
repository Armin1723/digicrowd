import React from 'react';

const HeaderWithHoverCard = () => {
  return (
    <header className="flex justify-around items-center p-4 px-8 bg-gray-100">
      <h1 className="text-xl font-bold">My Website</h1>
      <div className="relative group">
        <span className="cursor-pointer">Features</span>
        <div className="absolute left-0 top-full mt-2 overflow-hidden w-48 bg-white opacity-0 -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 border-dark-blue group-hover:h-fit transition-all duration-300 ease-in">
          <ul className="p-4">
            <li className="hover:bg-gray-100 p-2 rounded">Feature 1</li>
            <li className="hover:bg-gray-100 p-2 rounded">Feature 2</li>
            <li className="hover:bg-gray-100 p-2 rounded">Feature 3</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderWithHoverCard;
