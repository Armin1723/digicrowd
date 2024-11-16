import { cardsData } from "../../utils";
import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const ServicePages = () => {

  const [activeIndex, setActiveIndex] = useState(Array(cardsData.length).fill(0));

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
            className={`flex max-lg:flex-col items-center justify-around gap-6 w-full px-[15%] max-lg:px-10 border-b ${
              cardIndex % 2 === 0 ? "bg-accent-light" : "bg-white"
            } border-black py-20 max-lg:py-12 max-sm:py-8`}
          >
            <div className="content flex flex-col w-1/2 max-lg:w-full h-full justify-center ">
              <p className="heading my-6 text-4xl max-lg:text-2xl">{card.title}</p>
              <p>{card.description}</p>
              <div className="button-container flex w-4/5 items-start my-6">
                <button className="rounded-lg px-6 py-2 text-lg font-bold font-wix text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300">
                  Know More
                </button>
              </div>
            </div>

            <div className="actual-cards flex flex-col items-start justify-end w-1/2 max-lg:w-full overflow-x-hidden">
              <div className="wrapper flex gap-6">
                {card.images.map((image, index) => {
                  const xTranslate = index < activeIndex[cardIndex] ? index * 100 : activeIndex[cardIndex] * 100;
                  return (
                    <motion.div
                      style={{ x: `-${xTranslate}%` }}
                      key={index}
                      className={`card relative z-[10] border border-dark-blue group group-hover:shadow-[0_0_25px_gray] overflow-hidden flex flex-col w-60 aspect-square items-center justify-center gap-4 p-2 ${
                        index % 2 === 0 ? "bg-white" : "bg-accent-dark"
                      } border rounded-md border-accent-dark transition-all duration-300 cursor-pointer shadow-lg`}
                    >
                      
                      <img
                        src={`/assets/${image.image}.png`}
                        alt={image.title}
                        className="icon object-cover w-16 p-2 group-hover:w-20 group-hover:border border-black aspect-square rounded-full group-hover:bg-white drop-shadow-[0_0_25px_gray] transition-all duration-300"
                      />
                      <img src={overlayImage} alt="overlay" className="overlayImg absolute w-60 translate-y-full group-hover:translate-y-0 aspect-square object-cover z-[-8] transition-all duration-300 blur-sm" />
                      <p className="text-center font-wix text-xl font-bold group-hover:text-white transition-all duration-300">{image.title}</p>
                      <img
                        src={`/assets/${image.image}.png`}
                        alt={image.title}
                        className="overlay object-cover w-36 h-36 z-[-10] absolute bottom-[-20px] right-0 rotate-45 blur-lg group-hover:blur-md transition-all duration-300"
                      />
                    </motion.div>
                  );
                })}
              </div>
              <div className="controls flex gap-4 my-4 select-none">
                <div
                  className="px-4 py-1 text-lg font-extrabold border border-black hover:bg-black/80 hover:text-white transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev.map((active, i) =>
                        i === cardIndex
                          ? active > 0
                            ? active - 1
                            : card.images.length - 1
                          : active
                      )
                    )
                  }
                >
                  ←
                </div>
                <div
                  className="px-4 py-1 text-lg font-extrabold border border-black hover:bg-black/80 hover:text-white transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev.map((active, i) =>
                        i === cardIndex ? (active + 1) % card.images.length : active
                      )
                    )
                  }
                >
                  →
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServicePages;
