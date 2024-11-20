import { cardsData } from "../../utils";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServicesAlt = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col px-[10%] max-lg:px-12 max-sm:px-6">
      <p className="heading uppercase">
        Boundless talent,
        <br /> One team
      </p>
      <div className="chip-container flex items-center gap-4 flex-wrap my-4">
        {["Development", "Design", "Services", "Strategy"].map(
          (service, index) => {
            return (
              <motion.div
                key={index}
                initial="initial"
                whileHover="hovered"
                onClick={() => setActiveIndex(index)}
                style={{
                  lineHeight: 1.3,
                }}
                className={`uppercase font-semibold px-4 py-1 rounded-xl block relative overflow-hidden whitespace-nowrap gap-4 border hover:border-accent-light transition-all duration-300 cursor-pointer hover:text-white hover:bg-dark-blue ${
                  activeIndex === index && "bg-dark-blue text-white"
                }`}
              >
                <motion.p
                  variants={{
                    initial: {
                      y: 0,
                    },
                    hovered: {
                      y: "-100%",
                    },
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                >
                  {service}
                </motion.p>
                <motion.p
                  className="absolute inset-0 px-4 py-1"
                  variants={{
                    initial: {
                      y: "100%",
                    },
                    hovered: {
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                >
                  {service}
                </motion.p>
              </motion.div>
            );
          }
        )}
      </div>

      <div className="wrapper relative min-h-[30vh] my-6 ">
        {cardsData.map((card, index) => {
          return (
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={activeIndex === index ? "visible" : "hidden"}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              key={index}
              className="container my-6 absolute inset-0  flex max-lg:flex-col"
            >
              <div className="deets flex flex-col w-1/2 max-lg:w-full items-start justify-start px-4">
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={activeIndex === index ? "visible" : "hidden"}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeIn" }}
                  className="heading !text-4xl max-lg:!text-2xl"
                >
                  {card.title}
                </motion.p>
                <motion.p
                  className="my-4"
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={activeIndex === index ? "visible" : "hidden"}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeIn" }}
                >
                  {card.description}
                </motion.p>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={activeIndex === index ? "visible" : "hidden"}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeIn" }}
                >
                  <Link
                    to={`/services/${card.title.split(" ").join("-")}`}
                    className="rounded-lg px-6 py-2 text-lg font-bold font-wix text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                  >
                    Know More
                  </Link>
                </motion.div>
              </div>

              <div className="sub-categories grid grid-cols-2 max-sm:grid-cols-1 place-content-center place-items-center gap-6 h-full w-1/2 max-lg:w-full">
                {card.sub.map((subCategory, subIndex) => {
                  return (
                    <motion.div
                      key={subIndex}
                      variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={activeIndex === index ? "visible" : "hidden"}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * subIndex }}
                      className="flex w-4/5 border-b border-dark-blue"
                    >
                      <Link
                        to={`/categories/${subCategory.title
                          .split(" ")
                          .join("-")}`}
                        className="group flex justify-between relative overflow-hidden gap-2  py-2"
                      >
                        <span className="text text-wrap">
                          {subCategory.title}
                        </span>
                        <img
                          src="/utility/arrow-right-colored.svg"
                          alt="arrow"
                          className="w-4 z-[2] transition-all duration-300"
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesAlt;
