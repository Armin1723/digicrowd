import { motion } from "framer-motion";
import React, { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);

  const overlays = [
    " Digital Marketing",
    " Web Development",
    " Branding Srategy",
    " Search Engine Optimisation",
    " Social Media Marketing",
  ];
  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-gradient-to-b from-accent-light to-accent-light/60 overflow-hidden "
    >
      <div className="absolute inset-0 mt-[-5vh] w-full h-[105vh] flex flex-col items-start overlays mask-gradient">
        {overlays.map((overlay, index) => {
          return (
            <div
              key={index}
              className=" flex items-center justify-center gap-12 text-accent-dark z-[20] text-[28vh] leading-[21vh] uppercase font-[900] tracking-tight opacity-50 text-nowrap"
            >
              <motion.p
                initial={{ x: index % 2 === 0 ? '-100%' : 0 }}
                animate={{ x: index % 2 === 0 ? 0 : "-100%" }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              >
                {overlay}
              </motion.p>
              <motion.p
                 initial={{ x: index % 2 === 0 ? '-100%' : 0 }}
                 animate={{ x: index % 2 === 0 ? 0 : "-100%" }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              >
                {overlay}
              </motion.p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
