import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedHamburger from '../shared/AnimatedHamburger'

const Header = () => {

  return (
    <div className="absolute top-5 left-1/2 -translate-x-1/2 rounded-full z-[98] font-['inter'] flex justify-between items-center w-full px-12 max-lg:px-6">
      <Link to="/" className="logo">
        <img
          src="/assets/logo-small.png"
          alt="logo"
          className="h-10 w-10 md:h-14 md:w-14"
        />
      </Link>
      <SlideTabs />

    <div className="hamburger md:hidden">
      <AnimatedHamburger />
    </div>
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto max-lg:hidden flex w-fit items-center rounded-full border-2 border-black !bg-white p-1 z-[97]"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>About Us</Tab>
      <Tab setPosition={setPosition}>Services</Tab>
      <Tab setPosition={setPosition}>Blogs</Tab>
      <Tab setPosition={setPosition}>Contact Us</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative block cursor-pointer px-3 py-1 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-2 md:text-base z-[97] font-wix"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute h-7 rounded-full bg-black md:h-10 z-[19]"
    />
  );
};

export default Header;
