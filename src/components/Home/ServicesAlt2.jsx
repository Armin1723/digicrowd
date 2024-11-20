import { motion, useInView, useAnimation } from "framer-motion";
import { cardsData } from "../../utils";
import React, { useRef, useEffect } from "react";

const ServicesAlt2 = () => {
  return (
    <div className="flex flex-col w-full py-6 bg-accent-light">
      {cardsData.map((card, index) => {
        const cardsRef = useRef(null);
        const isInView = useInView(cardsRef);
        const motionControls = useAnimation();
        useEffect(() => {
          if (isInView) motionControls.start("visible");
        }, [isInView]);
        return (
          <div
            key={index}
            ref={cardsRef}
            className={`service-container flex flex-col w-full gap-6 py-12 px-[10%] max-lg:px-[5%] max-sm:px-6 ${
              index % 2 == 0 ? "bg-white" : "bg-accent-light"
            }`}
          >
            <div className="content flex flex-col gap-4">
              <p className="heading !text-3xl max-lg:!text-2xl max-sm:!text-xl">
                {card.title}
              </p>
              <p className="max-sm:text-sm text-lg max-lg:text-base">{card.description}</p>
            </div>
            <div className="grid grid-cols-6 gap-6 max-lg:gap-4 max-lg:grid-cols-4 max-sm:grid-cols-2">
              {card.sub.map((subCategory, subIndex) => {
                return (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.75, y: 100 },
                      visible: { opacity: 1, scale: 1, y: 0 },
                    }}
                    initial="hidden"
                    transition={{
                      duration: 0.4,
                      ease: "easeIn",
                      delay: 0.1 * subIndex,
                    }}
                    animate={motionControls}
                    key={index}
                    className={`card group border overflow-hidden relative flex flex-col justify-between col-span-1 gap-2 rounded-md hover:bg-accent-dark z-[0] cursor-pointer transition-all duration-300 p-4 shadow-md ${
                      index % 2 !== 0 ? "bg-white" : "bg-accent-light"
                    }`}
                  >
                    <div className="top flex flex-col gap-2 items-left z-[2]">
                      <p className="text-stroke !text-4xl max-lg:!text-2xl text-dark-blue font-['arial'] font-bold">
                        0{subIndex + 1}
                      </p>
                      <p className="divider w-12 bg-dark-blue h-0.5 my-2"></p>
                      <div className="flex flex-col gap-2 items-start !w-full z-[2]">
                        <img
                          src={`/assets/${subCategory.image}.webp`}
                          alt="icon"
                          className="w-12 aspect-square p-2 border border-dark-blue rounded-full bg-white items-start text-left object-contain group-hover:scale-110 transition-all duration-300"
                        />
                      </div>
                      <p className="font-semibold !font-wix !text-xl max-lg:!text-base max-sm:!text-base text-left w-full py-2">
                        {subCategory.title}
                      </p>
                    </div>

                    <img
                      src={`/assets/${subCategory.image}.webp`}
                      alt="overlay icon"
                      className="absolute z-[1] top-0 blur-md group-hover:blur-sm scale-75 h-2/3 -right-6 text-9xl max-lg:!text-3xl max-sm:!text-xl text-slate-100 group-hover:rotate-12 transition-all duration-300"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesAlt2;
