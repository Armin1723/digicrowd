import { cardsData } from "../../utils";
import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ColoredLink from "../shared/ColoredLink";

const ServicePages = () => {
  // const [activeIndex, setActiveIndex] = useState(
  //   Array(cardsData.length).fill(0)
  // );

  const overlayImage =
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevActive) =>
        prevActive.map((active, i) => (active + 1) % cardsData[i].images.length)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {cardsData.map((card, cardIndex) => {
        const ref = useRef(null);
        const isInView = useInView(ref);
        const animationControls = useAnimation();

        useEffect(() => {
          if (isInView) {
            animationControls.start("visible");
          }
        }, [isInView, animationControls]);

        return (
          <motion.div
            ref={ref}
            key={`${cardIndex}-${card.title}`}
            initial="hidden"
            animate={animationControls}
            variants={{
              hidden: { opacity: 0, y: 200 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={`flex max-lg:flex-col items-center justify-around gap-6 w-full h-full px-[15%] max-lg:px-10 border-b ${
              cardIndex % 2 === 0 ? "bg-accent-light" : "bg-white"
            } border-black py-10 max-lg:py-6 max-sm:py-4`}
          >
            <div className="content flex flex-col w-1/2 max-lg:w-full h-full justify-center ">
              <p className="heading my-6 text-4xl max-lg:text-2xl">
                {card.title}
              </p>
              <p>{card.description}</p>
              <div className="button-container flex w-4/5 items-start my-6">
                <button
                  aria-label="Know More"
                  className="rounded-lg px-6 py-2 text-lg font-bold font-wix text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                >
                  Know More
                </button>
              </div>
            </div>

            {/* <div className="divider h-1/2 w-4 bg-yellow-900 border border-red-800"></div> */}

            <div className="actual-cards group relative flex flex-col items-center justify-end h-full w-1/2 max-lg:w-full gap-4 py-10 max-lg:py-6 max-sm:py-4">
              {card.sub.map((subCategory, index) => {
                return (
                  <Link
                    key={index}
                    to={`/categories/${subCategory.title.split(" ").join("-")}`}
                    className="z-[10] text-lg "
                  >
                    <ColoredLink to={subCategory.title}>{subCategory.title}</ColoredLink>
                  </Link>
                );
              })}
               <div className="absolute inset-0 rounded-md">
              <div className="left-overlay w-1/2 h-full absolute top-0 left-0 rounded-s-md -translate-x-12 bg-dark-blue/40 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in"></div>
              <div className="right-overlay w-1/2 h-full absolute top-0 right-0 rounded-e-md translate-x-12 bg-dark-blue/40 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in"></div>
            </div>
            </div>
           
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServicePages;
