import { motion } from "framer-motion";
import React from "react";

const IntroFooter = () => {
  const texts = [
    "BRANDING",
    "INNOVATION",
    "MARKETING",
    "DEVELOPMENT",
    "SEO",
    "SOCIAL MEDIA",
    "CONTENT",
    "ANALYTICS",
    "STRATEGY",
    "CONSULTING",
  ];

  return (
    <div className="w-full px-[10%] max-lg:px-[5%] max-sm:px-6 !bg-accent-light flex flex-col max-sm:flex-col-reverse justify-around max-sm:justify-around items-center max-h-dvh min-h-[60vh] relative select-none">
      <img
        loading="lazy"
        src="/footer/overlay-1-no-background.png"
        alt="overlay"
        className="absolute bottom-0 left-0 w-full h-auto z-[-0] aspect-video object-cover select-none"
      />
      <div className="banner-display container flex min-w-full overflow-x-hidden z-[30] select-none">
        <div className="flex flex-shrink-0">
          {texts.map((text, index) => {
            return (
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                key={index}
                className="flex flex-col items-center justify-center flex-shrink-0 min-w-[10%] text-white !bg-clip-text bg-gradient-to-br from-white to-dark-blue/50 max-sm:bg-white max-sm:text-shadow font-['arial']"
              >
                <p className="text-2xl font-extrabold ">#{text}</p>
              </motion.div>
            );
          })}
          {texts.map((text, index) => {
            return (
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                key={index}
                className="flex flex-col items-center justify-center flex-shrink-0 min-w-[10%] text-white !bg-clip-text bg-gradient-to-br from-white to-dark-blue/50 max-sm:bg-white max-sm:text-shadow font-['arial']"
              >
                <p className="text-2xl font-extrabold">#{text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="newsletter w-[90%] max-sm:w-full flex max-sm:flex-col items-center justify-center rounded-lg bg-dark-blue bg-opacity-60 max-sm:bg-opacity-90 min-h-[20vh] z-[30] my-4 py-4 border border-neutral-600 text-white shadow-xl">
        <div className="flex flex-col max-lg:px-4 w-1/2 max-sm:my-4 max-sm:w-full items-center justify-center gap-2">
          <p className="text-white w-full text-center heading font-wix !text-4xl max-lg:!text-3xl max-sm:!text-2xl">
            Want to stay updated?
          </p>
          <p className="text-lg max-sm:text-sm w-full text-center text-neutral-400">
            Subscribe to our newsletter to stay in the loop.
          </p>
        </div>
        <div className="input flex items-center justify-center w-1/2 max-sm:w-full selection:bg-black selection:text-white">
          <div className="input-group max-w-[60%] flex gap-0 justify-center items-center p-2 bg-transparent">
            <input
              type="email"
              className="input bg-transparent text-white border border-r-0 border-blue-800 p-2 rounded-l-md outline-none placeholder:pl-2 pl-2"
              id="Email"
              name="Email"
              placeholder="your@email.com"
              autoComplete="off"
            />
            <input
              className="button--submit bg-blue-950/70 p-2 rounded-e-md border border-blue-800 border-l-0 transition-all duration-300 hover:bg-blue-950 cursor-pointer"
              value="Subscribe"
              type="submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroFooter;
