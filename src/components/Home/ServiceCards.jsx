import React, { useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { cardsDataSmall } from '../../utils'
import FlipLink from '../shared/FlipLink'


const ServiceCards = () => {
    const container = React.useRef(null);
    const isInView = useInView(container);
    const motionControls = useAnimation();
    useEffect(() => {
      if (isInView) {
        motionControls.start("visible");
      }
    }, [isInView]);
  
    const columns = () => {
      
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) return 2; 
      return 4; 
    }
  
  return (
    <div
        ref={container}
        className={`service-container grid ${
        columns() === 2 ? "grid-cols-2" : "grid-cols-4"
      } gap-4 my-8 grid-cols-4 max-sm:grid-cols-2 w-full px-[10%] max-lg:px-12 max-sm:px-6 py-8 max-lg:py-4`}
      >
        {/* {cardsData.map((card, index) => {
          return(
           <div key={index} className="card flex flex-col items-center gap-2 w-full">
            <p className="text-2xl font-bold py-2">{card.title}</p>
            {card.sub.map((subCategory, index) => {
              return(
                <Link key={index} to={`/categories/${subCategory.title.split(" ").join("-")}`} className="flex items-center gap-2">
                  <img src={`/assets/${subCategory.image}.webp`} alt="icon" className="w-8 h-8 p-2 rounded-full border-black border bg-white"/>
                  <ColoredLink to={subCategory.title}>{subCategory.title}</ColoredLink>
                </Link>
              )
            })}
           </div>
          )
        })} */}

        {cardsDataSmall.map((card, index) => {
           const isDark = ((index + Math.floor(index / columns())) % 2) === 0;
          return (
            <motion.div
              variants={{
                hidden: { y: 100, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              animate={motionControls}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              key={index}
              className={`flex flex-col w-full items-center p-4 ${
                isDark &&
                "bg-accent-light"
              }`}
            >
              <div className="title flex items-center gap-2 py-4 max-sm:py-2">
                <FlipLink
                  to={card.title}
                  otherClasses="font-bold text-2xl max-sm:text-base text-center "
                >
                  {card.title}
                </FlipLink>
                <img
                loading="lazy"
                src="/utility/arrow-right-colored.svg"
                alt="arrow"
                className="object-cover w-4 z-[20] !text-dark-blue !stroke-dark-blue !fill-dark-blue group-hover:translate-x-12 transition-all duration-300"
              />
              </div>
              <p className="w-full text-center max-sm:text-sm">{card.description}</p>
            </motion.div>
          );
        })}
      </div>
  )
}

export default ServiceCards
