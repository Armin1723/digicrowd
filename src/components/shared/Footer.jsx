import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Footer = () => {
  const motionControls = useAnimation();
  const ref = useRef(null);

  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      motionControls.start("visible");
    }
  }, [isInView]);

  return (
    <footer className="relative bg-[#010202] text-white overflow-hidden min-h-dvh">
      {/* Other footer elements */}
      <div className="flex flex-col items-center space-y-4 py-8">
        {/* Upper section with icons/links */}
        <div className="flex flex-wrap justify-center gap-4">
          <span>Digital PR</span>
          <span>Creative</span>
          <span>B2B</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <span>Linkedin</span>
          <span>X</span>
          <span>Meta</span>
          <span>Instagram</span>
        </div>
      </div>

      {/* Large Full-Width Text */}
      <motion.div
        ref={ref}
        className="absolute bottom-0 w-full select-none"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={motionControls}
        transition={{ duration: 0.5 }}
      >
        <div
          style={{
            background: "url('/footer/overlay-gif.webp') center",
          }}
          className="text-[15.8vw] max-sm:text-[19vw] !bg-clip-text font-['arial'] text-transparent tracking-tight font-extrabold text-start leading-none"
        >
          DIGICROWD
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
