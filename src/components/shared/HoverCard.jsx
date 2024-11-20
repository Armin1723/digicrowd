import React from "react";
import { Link } from "react-router-dom";

const HoverCard = ({ title, subtitle, icon, href }) => {
  return (
    <Link
      to={href}
      className="w-full rounded border-[1px] border-black relative overflow-hidden group bg-gradient-to-br from-accent-light/40"
    >
      <div className="absolute inset-0 bg-accent-dark translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <img
        loading="lazy"
        src={icon}
        alt={title}
        className="absolute z-10 bottom-0 blur-md group-hover:blur-sm scale-75 -right-12 text-9xl text-slate-100 group-hover:rotate-12 transition-all duration-300"
      />
      <img
        loading="lazy"
        src={icon}
        alt={title}
        className="h-16 m-4 aspect-square  transition-colors relative z-12 duration-300 object-cover"
      />
      <div className="texts w-full flex flex-col bg-accent-dark px-4 py-2">
        <h3 className="font-bold text-lg text-slate-950 relative z-10 duration-300">
          {title}
        </h3>
        <p className="text-black group-hover:text-gray-800 relative z-10 duration-300">
          {subtitle}
        </p>
      </div>
    </Link>
  );
};

export default HoverCard;
