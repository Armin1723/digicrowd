import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const CountUpNumber = ({ from = 0, to = 100, duration = 1 , suffix = ''}) => {
  const [count, setCount] = useState(from);

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const totalSteps = 30; 
      const increment = (to - from) / totalSteps; 
      const intervalTime = (duration * 1000) / totalSteps; 

      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < to) {
            return prev + increment;
          } else {
            clearInterval(interval);
            return to;
          }
        });
      }, intervalTime);
    }
  }, [isInView, from, to, duration]);

  return (
    <motion.div ref={ref} className="font-bold">
      {Math.floor(count)}{suffix}
    </motion.div>
  );
};

export default CountUpNumber;
