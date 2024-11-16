import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DivOrigami = () => {
  return (
    <section className="flex h-60 max-lg:h-48 max-sm:scale-75 flex-col items-center justify-center gap-12 px-4 py-12 max-lg:py-6 md:flex-row ">
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-gradient-to-br from-[#ffc517] to-white text-white">
            <img
                loading="lazy" src="/assets/google-analytics.webp" alt='logo' className="drop-shadow-[0_0_50px_black]"/>
          </LogoItem>,
          <LogoItem key={2} className="bg-gradient-to-br from-[#8cb5f7] to-white text-white">
            <img
                loading="lazy" src="/assets/adwards.webp" alt='logo' className="drop-shadow-[0_0_50px_black]"/>
          </LogoItem>,
          <LogoItem key={3} className="bg-gradient-to-br from-[#21e1c7] to-white text-white">
            <img
                loading="lazy" src="/assets/bing.webp" alt='logo' className="drop-shadow-[0_0_50px_black]" />
          </LogoItem>,
          <LogoItem key={3} className="bg-gradient-to-br from-blue-600 to-yellow-100 text-white">
            <img
                loading="lazy" src="/assets/adsense.webp" alt='logo' className="drop-shadow-[0_0_50px_black]" />
          </LogoItem>,
        ]}
      />
    </section>
  );
};

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-neutral-700 bg-white shadow-[3px_10px_35px_gray] shadow-accent-dark"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t border-neutral-900"
      />
    </div>
  );
};

const LogoItem = ({ children, className }) => {
  return (
    <div
      className={
        `${className}
        grid h-36 w-52 place-content-center rounded-lg border border-neutral-800 text-6xl text-neutral-50`}
    >
      {children}
    </div>
  );
};

export default DivOrigami;