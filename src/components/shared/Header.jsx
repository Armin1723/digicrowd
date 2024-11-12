import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FlipLink from "./FlipLink";
import AnimatedHamburger from "./AnimatedHamburger";

const Header = () => {
  const Links = [
    {
      name: "About Us",
      to: "/about",
    },
    {
      name: "Portfolio",
      to: "/portfolio",
    },
    {
      name: "Services",
      to: "/services",
    },
    {
      name: "Blog",
      to: "/blog",
    },
    {
      name: "Contact Us",
      to: "/contact",
    },
  ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const header = document.getElementById("header");
  //     if (window.scrollY > 30) {
  //       header.classList.add("bg-opacity-100");
  //       header.classList.add("border-b");
  //     } else {
  //       header.classList.remove("bg-opacity-100");
  //       header.classList.remove("border-b");
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div
      id="header"
      className="fixed top-0 w-full flex justify-between items-center z-[98] bg-white p-4 px-12 max-lg:px-8 max-sm:px-4 bg-opacity0 border-b shadow-xl transition-all duration-300"
    >
      <Link to="/" className="logo">
        <img src="/assets/logo.webp" alt="logo" className="object-cover max-lg:w-3/4" />
      </Link>

      <div className="links-container flex gap-2 font-['inter'] items-center max-lg:hidden">
        {Links.map((link, index) => (
          <FlipLink key={index} to={link.to} otherClasses="mx-4 text-lg">
            {link.name}
          </FlipLink>
        ))}

        <div className="button-container flex items-center gap-4">
          <button className="button bg-accent text-white">
            Book Demo
          </button>
          <button className="button text-accent">
            Free Audit
          </button>
        </div>
      </div>

      <div className="hidden max-lg:flex">
        <AnimatedHamburger />
      </div>
    </div>
  );
};

export default Header;
