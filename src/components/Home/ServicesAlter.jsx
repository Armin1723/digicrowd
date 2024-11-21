import { motion, useAnimation, useInView } from "framer-motion";
import { cardsData } from "../../utils";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ServicesAlter = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
      className="flex max-lg:hidden w-full max-sm:py-2 px-4 min-h-[60vh] gap-4 items-center bg-accent-light"
    >
      <motion.div
        variants={{
          hidden: { y: 200, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={motionControls}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="link-container flex flex-col justify-center min-h-[70vh] items-center gap-4 w-1/2 max-sm:w-full px-12 max-lg:px-8 max-sm:px-4 max-sm:h-1/2 relative z-[20]"
      >
        {cardsData.slice(0, 4).map((card, index) => {
          return (
            <motion.div
              onHoverStart={() => {
                setActiveIndex(index);
              }}
              className={`group w-3/5 max-lg:w-4/5 max-sm:w-[90%] py-2 font-wix z-[20] cursor-pointer flex items-center gap-4 transition-all duration-300 border-dark-blue`}
              key={index}
            >
              <span
                className={`heading !text-4xl max-lg:!text-2xl mix-blend-difference ${
                  activeIndex === index && "translate-x-12 before:w-full"
                } z-[20] before:absolute before:h-[1px] before:bg-black before:w-0 before:bottom-0 before:left-0 before:transition-all before:duration-500 before:ease-out pb-1 transition-all duration-500 ease-out`}
              >
                {card.title}
              </span>
              <img
                loading="lazy"
                src="/utility/arrow-right-colored.svg"
                alt="arrow"
                className={`object-cover w-8 z-[20] !text-dark-blue !stroke-dark-blue !fill-dark-blue ${
                  activeIndex === index && "translate-x-12"
                } transition-all duration-300`}
              />
            </motion.div>
          );
        })}
        {/* {Array.from({ length: 4 }).map((_, index) => {
          return (
            <img
              loading="lazy"
              key={index}
              src={`/assets/example-${index + 1}.webp`}
              alt="bg"
              className={`absolute hidden z-[1] h-3/4 left-0 bottom-0 aspect-[3.5/4] object-cover rounded-md overflow-hidden border border-gray shadow-[0_0_25px_gray] ${
                index === activeIndex
                  ? "opacity-75 rotate-[15deg] !-translate-y-0 !translate-x-full blur-0"
                  : "opacity-0 translate-y-24 translate-x-0 blur-[4px]"
              } origin-bottom-right transition-all duration-500 ease-in-out`}
            />
          );
        })} */}
      </motion.div>

      <motion.div
        variants={{
          hidden: { y: 200, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={motionControls}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="our-expertise overflow-hidden overflow-y-visible w-1/2 max-sm:w-full min-h-[70vh] flex flex-col items-center justify-center relative"
      >
        {/* Absolute positioned sub-categories that pan out on hover */}
        {cardsData.map((card, index) => {
          return (
            <div
              key={index}
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-md p-4 transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${activeIndex === index ? 0 : "100%"})`,
              }}
            >
              <p className="heading font-wix !text-2xl my-4">{card.title}</p>
              <div className="sub-container flex flex-wrap gap-4 max-w-[80%] min-w-[80%]">
                {card.sub.map((subCategory, index) => {
                  return (
                    <Link
                      key={index}
                      to={`/categories/${subCategory.title
                        .split(" ")
                        .join("-")}`}
                      className="group flex flex-col relative overflow-hidden grow basis-2/5 items-center gap-2 rounded-lg border border-white/30 p-2 py-4 bg-white/70 backdrop-blur-md shadow-lg"
                    >
                      <img
                        src={`/assets/${subCategory.image}.webp`}
                        alt="icon"
                        className="w-12 aspect-square p-2 group-hover:scale-110 transition-all duration-300 rounded-full border-black border bg-gray-200 z-[2]"
                      />
                      <span className="text group-hover:text-white group-hover:font-bold z-[2] text-center px-2 text-wrap">
                        {subCategory.title}
                      </span>
                      <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="overlay image"
                        className="absolute inset-0 h-full blur-sm w-full object-cover translate-y-full mt-2 group-hover:translate-y-0 group-hover:mt-0 transition-all duration-300 z-[0]"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ServicesAlter;
