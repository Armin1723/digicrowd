import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });
  const motionControls = useAnimation();

  if (isInView) {
    motionControls.start("visible");
  }

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      setCursorVariant("text");
    };

    const handleScroll = () => {
      setCursorVariant("default");
    };

    const cta = document.querySelector(".cta-container");

    cta.addEventListener("mousemove", mouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      cta.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const variants = {
    default: {
      x: 0,
      y: 0,
      scale: 0,
      opacity: 0,
    },
    text: {
      scale: 1,
      opacity: 1,
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { y: "100px", opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial="hidden"
      animate={motionControls}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="page cta w-full flex justify-center items-center py-4 relative bg-dark-blue"
    >
      <div
        to="/about"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="cta-container cursor-none flex flex-col items-center gap-2 w-full text-white px-6 py-20 max-lg:py-12 max-sm:py-6"
      >
        <div className="text-container relative text-center">
          <p className="text-[4.5rem] leading-[4.5rem] max-lg:text-6xl max-sm:text-4xl my-4 uppercase font-wix font-[900] mix-blend-difference z-[10]">
            Ready to Talk More??
          </p>
        </div>
        <motion.div
          variants={variants}
          animate={cursorVariant}
          transition={{ duration: 0.4, ease: "easeOut" }}
          id="cursor"
          className="fixed top-0 left-0 group z-[99] w-[150px] aspect-square pointer-events-none mix-blend-difference flex items-center justify-center text-xl transition-al duratio-300 rounded-full bg-accent-light text-black font-bold "
        >
          <div className="text-4xl font-[900] -rotate-45">
            <p>
              <span className="-rotate-45 transition-all duration-300">→</span>{" "}
            </p>
          </div>
        </motion.div>
        <div className="w-3/5  max-lg:w-4/5 max-sm:w-[95%] ">
          <p className="w-full text-center font-['helvetica'] text-gray-300 text-lg max-lg:text-base">
            Get a free consultation with Digicrowd right now. We are your go-to
            source for excellent Top IT & digital marketing services company.
            Discover tactics that will take your company to new heights with our
            exceptional services.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CTA;
