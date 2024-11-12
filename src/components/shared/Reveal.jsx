import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const Reveal = ({ children, width = "fit-content" }) => {
    const ref = React.useRef(null);

    const mainControls = useAnimation();
    const slideControls = useAnimation();
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
            slideControls.start('visible');
        }
    }, [isInView]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
    >
        <motion.div variants={{
            hidden: {
                opacity: 0,
                y: 75,
            },
            visible: {
                opacity: 1,
                y: 0,
            }
        }} initial='hidden' animate={mainControls} transition={{ duration: 0.5, delay: 0.25}}>
            {children}
        </motion.div>

        <motion.div variants={{
            hidden: {
                left: 0
            },
            visible: {
                left: '100%'
            }
        }} initial='hidden' animate={slideControls} transition={{ duration: 0.5}} style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: 'var(--accent-light)',
            zIndex: 20
        }}>
            
        </motion.div>
    </div>
  );
};

export default Reveal;
