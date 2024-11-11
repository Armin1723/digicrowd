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
      className="relative w-full h-screen bg-gradient-to-b from-accent-light to-accent-light/60 overflow-hidden flex flex-col items-center justify-end"
    >
      <div className="absolute overlay-text select-none inset-0 mt-[-5vh] w-full h-[105vh] flex flex-col items-start  mask-gradient">
        {overlays.map((overlay, index) => {
          return (
            <div
              key={index}
              className=" flex items-center justify-center gap-12 text-accent-dark z-[20] text-[28vh] leading-[21vh] uppercase font-[900] tracking-tight opacity-50 text-nowrap"
            >
              <motion.p
                initial={{ x: index % 2 === 0 ? "-100%" : 0 }}
                animate={{ x: index % 2 === 0 ? 0 : "-100%" }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              >
                {overlay}
              </motion.p>
              <motion.p
                initial={{ x: index % 2 === 0 ? "-100%" : 0 }}
                animate={{ x: index % 2 === 0 ? 0 : "-100%" }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              >
                {overlay}
              </motion.p>
            </div>
          );
        })}
      </div>

      <div className="content z-[30] flex w-[90%] mb-8 ">

        <div className="flex flex-col justify-end w-1/2 gap-6 max-lg:w-full left description">
          <p className="font-wix font-bold text-[4rem] leading-[4rem] drop-shadow-md font-dark-blue">
            Custom Solutions from Best{" "}
            <span className="text-blue-500">Digital Marketing Agency.</span>
          </p>
          <p className="font-wix font-medium  text-lg">
            Digicrowd Solution, the premier digital marketing company, offers
            custom-made solutions tailored to align with your business's unique
            needs and objectives, ensuring your brand stands out in the digital
            realm. Heighten your online presence with our expertise, propelling
            impactful results.
          </p>
          <div className="actions flex gap-2">
            <button className="border-2 bg-blue-500 border-accent-dark text-accent-light px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
              Get Started
            </button>
            <button className="border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-300 hover:text-white transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>

        <div className="graphic w-1/2 max-lg:hidden max-h-screen flex justify-end">
          <img src="/assets/hero-image.webp" alt="hero-graphic" className="object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
