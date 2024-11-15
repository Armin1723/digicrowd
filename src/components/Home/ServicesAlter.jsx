import { motion, useAnimation, useInView } from "framer-motion";
import { cardsData } from "../../utils";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ServicesAlter = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const ref = useRef(null);

  const isInView = useInView(ref, { triggerOnce: true });
  const motionControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      motionControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { y: 200, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial="hidden"
      animate={motionControls}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="flex max-sm:flex-col-reverse w-full py-8 max-sm:py-2 px-4 min-h-screen gap-4 items-center bg-accent-light border-b border-dark-blue"
    >
      <div className="link-container flex flex-col justify-center gap-4 w-1/2 max-sm:w-full px-12 max-lg:px-8 max-sm:px-4 md:my-8 max-sm:h-1/2 relative z-[20]">
        {cardsData.map((card, index) => {
          return (
            <motion.div
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              className={`group w-3/5 max-lg:w-4/5 max-sm:w-[90%] font-wix py-6 z-[20] cursor-pointer flex items-center gap-4 transition-all duration-300 border-dark-blue`}
              key={index}
            >
              <span className=" heading !text-6xl max-lg:!text-4xl mix-blend-difference group-hover:translate-x-12 z-[20] before:absolute before:h-[1px] before:bg-black before:w-0 before:bottom-0 before:left-0 group-hover:before:w-full before:transition-all before:duration-500 before:ease-out pb-1 transition-all duration-500 ease-out">
                {card.title}
              </span>
              <img
                src="/utility/arrow-right-colored.svg"
                alt="arrow"
                className="object-cover w-8 z-[20] !text-dark-blue !stroke-dark-blue !fill-dark-blue group-hover:translate-x-12 transition-all duration-300"
              />
            </motion.div>
          );
        })}
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <img
              key={index}
              src={`/assets/example-${index + 1}.jpg`}
              alt="bg"
              className={`absolute z-[1] h-full left-0 aspect-[3/4] object-cover rounded-md overflow-hidden border border-gray shadow-[0_0_25px_gray] ${
                index === activeIndex
                  ? "opacity-75 rotate-[15deg] !-translate-y-4 !translate-x-36 blur-0"
                  : "opacity-0 translate-y-16 translate-x-12 blur-[4px]"
              } origin-bottom-right transition-all duration-500 ease-in-out`}
            />
          );
        })}
      </div>

      <div className="h-4/5 border border-gray-300"></div>

      <div className="our-expertise w-1/2 max-sm:w-full flex flex-col items-center justify-center ">
        <p className="heading font-wix !text-3xl my-6">Our Expertise</p>
        <p className="w-4/5 border my-4 border-gray-300 max-sm:hidden"></p>
        <p className="w-2/3 max-lg:w-[90%] font-['helvetica'] max-sm:text-justify">
          Experience the epitome of the best digital marketing consultation
          services through our diverse services. As a leading Best Digital
          Marketing Company, we offer unparalleled expertise to enhance your
          online presence. Join Digicrowd for the strategic best digital
          marketing services company to ensure you deliver results-driven
          campaigns tailored to your business.
        </p>
        <Link
          to="/"
          className="text-blue-600 w-2/3 max-lg:w-[90%] text-left  hover:text-blue-800 transition-all duration-300 font-['helvetica']"
        >
          See more...
        </Link>
      </div>
    </motion.div>
  );
};

export default ServicesAlter;
