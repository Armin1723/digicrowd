import React from 'react'
import { Link } from 'react-router-dom';

const HoverCard = ({ title, subtitle, icon, href }) => {
    return (
      <Link
        to={href}
        className="w-full p-4 rounded border-[1px] border-black relative overflow-hidden group bg-white"
      >
        <div className="absolute inset-0 bg-accent-dark translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
  
        <img src={icon} className="absolute z-10 bottom-0 blur-sm scale-75 -right-12 text-9xl text-slate-100 group-hover:rotate-12 transition-transform duration-300" />
        <img src={icon} className="text-md h-12 aspect-square text-violet-600  transition-colors relative z-12 duration-300 object-cover" />
        <h3 className="font-medium text-lg text-slate-950 relative z-10 duration-300">
          {title}
        </h3>
        <p className="text-slate-400 group-hover:text-gray-800 relative z-10 duration-300">
          {subtitle}
        </p>
      </Link>
    );
  };
  
  export default HoverCard;
  
  
