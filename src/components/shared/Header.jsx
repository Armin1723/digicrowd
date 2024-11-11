import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-white rounded-full z-[99] font-['inter']">
      <SlideTabs />
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
      className="relative mx-auto flex w-fit rounded-full border-2 border-black !bg-white p-1 z-[20]"
    >
      <Tab setPosition={setPosition}>About Us</Tab>
      <Tab setPosition={setPosition}>Pricing</Tab>
      <Tab setPosition={setPosition}>Features</Tab>
      <Tab setPosition={setPosition}>Docs</Tab>
      <Tab setPosition={setPosition}>Blog</Tab>

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
      className="relative block cursor-pointer px-3 py-1 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-2 md:text-base z-[20]"
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