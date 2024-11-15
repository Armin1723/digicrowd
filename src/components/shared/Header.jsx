import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FlipLink from "./FlipLink";
import AnimatedHamburger from "./AnimatedHamburger";
import { useMotionValueEvent, useScroll } from "framer-motion";

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

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    const header = document.getElementById("header");
    if(latest > previous && latest > 250){
      header.classList.add("-translate-y-full");
    }else{
      header.classList.remove("-translate-y-full");
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 30) {
        header.classList.add("border-b");
        header.classList.add("bg-white");
      } else {
        header.classList.remove("border-b");
        header.classList.remove("bg-white");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="header"
      className="fixed top-0 w-full overflow-hidden -translate-y-fll flex justify-between items-center z-[98] bg-whte p-4 px-12 max-lg:px-8 max-sm:px-4 bg-opacity0 transition-all duration-300"
    >
      <Link to="/" className="logo">
        <img src="/assets/logo.webp" alt="logo" className="object-cover max-lg:w-3/4" />
      </Link>

      <div className="links-container flex gap-6 max-lg:gap-4 text-xl items-center max-lg:hidden font-['helvetica']">
        {Links.map((link, index) => (
          <FlipLink key={index} to={link.to} otherClasses="text-gray-700">
            {link.name}
          </FlipLink>
        ))}

        <div className="button-container flex !text-base items-center gap-4">
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
