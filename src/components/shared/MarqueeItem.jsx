import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const MarqueeItem = ({ images, from = 0, to = "-100%" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(from);

  return (
    <div className="flex overflow-x-hidden">
      <motion.div
        style={{ x }}
        initial={{ x: `${from}` }}
        animate={!isHovered ? { x: `${to}` } : {}}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        onHoverStart={() => {
          x.stop();
          setIsHovered(true);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
        }}
        className={`flex flex-shrink-0 gap-4 `}
      >
        {images.map((image, index) => {
          return (
            <img
                loading="lazy"
              className="max-sm:h-16 max-lg:h-20 max-sm:aspect-video mix-blend-difference text-black fill-black stroke-black hover:scale-105 transition-all duration-500"
              src={image.image}
              alt={image.title}
              key={index}
            />
          );
        })}
      </motion.div>

      <motion.div
        style={{ x }}
        initial={{ x: `${from}` }}
        animate={!isHovered ? { x: `${to}` } : {}}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        onHoverStart={() => {
          x.stop();
          setIsHovered(true);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
        }}
        className={`flex flex-shrink-0 gap-4`}
      >
        {images.map((image, index) => {
          return (
            <img
                loading="lazy"
              className="max-sm:h-16 max-lg:h-20 max-sm:aspect-video mix-blend-difference text-black fill-black stroke-black hover:scale-105 transition-all duration-500"
              src={image.image}
              alt={image.title}
              key={index}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
