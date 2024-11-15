import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FlipLink = ({ children, to = "/", otherClasses = "" }) => {
  const DURATION = 0.25;
  const STAGGER = 0.05;

  return (
    <Link to={to}>
      <motion.div
        initial="initial"
        whileHover="hovered"
        to={to}
        className={`relative block overflow-hidden whitespace-nowrap ${otherClasses}`}
        style={{
          lineHeight: 0.85,
        }}
      >
        <div>
          {Array.from(children).map((link, index) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * index,
              }}
              className="inline-block"
              key={`${link}-${index}`}
            >
              {link === " " ? "\u00A0" : link}{" "}
            </motion.span>
          ))}
        </div>

        <div className="absolute inset-0">
          {Array.from(children).map((link, index) => (
            <motion.span
              variants={{
                initial: {
                  y: '100%',
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * index,
              }}
              className="inline-block text-blue-800"
              key={`${link}-${index}`} 
            >
              {link === " " ? "\u00A0" : link}{" "}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};

export default FlipLink;
