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
      className="relative w-full h-[100dvh] border-b border-dark-blue bg-gradient-to-b from-accent-light to-accent-light/60 overflow-hidden flex flex-col items-center justify-end"
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

      <div className="content z-[30] flex w-full px-[10%] max-lg:px-[5%] max-sm:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeIn", delay: 0.4 }}
          className="flex flex-col justify-end w-1/2 gap-6 max-lg:w-full left description mb-12"
        >
          <p className="text-shadow font-wix font-bold text-[4rem] leading-[4rem] max-sm:text-[2.75rem] max-sm:leading-[2.75rem] drop-shadow-md font-dark-blue">
            Custom Solutions from Best{" "}
            <span className="text-blue-500 ">Digital Marketing Agency.</span>
          </p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="font-['helvetica'] font-medium text-lg max-lg:text-sm text-gray-600 w-4/5 text-justify"
          >
            Digicrowd Solution, the premier digital marketing company, offers
            custom-made solutions tailored to align with your business's unique
            needs and objectives, ensuring your brand stands out in the digital
            realm. Heighten your online presence with our expertise, propelling
            impactful results.
          </motion.p>
          <div className="button-container flex items-center gap-4">
            <motion.button
              name="Book Demo"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="button bg-accent text-white"
            >
              Book Demo
            </motion.button>
            <motion.button
              name="Request a Call"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y : 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="button text-accent"
            >
              Request a Call
            </motion.button>
          </div>
        </motion.div>

        <div className="graphic w-1/2 max-lg:hidden max-h-screen flex bg-transparent mb-8">
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src="/assets/home-illustration.svg"
            alt="hero-graphic"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
