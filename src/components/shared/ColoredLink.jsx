import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ColoredLink = ({ children, to = "/", otherClasses = "" }) => {
  const DURATION = 0.15;
  const STAGGER = 0.02;

  return (
    <Link to={to}>
      <motion.div
        initial="initial"
        whileHover="hovered"
        to={to}
        className={`relative block ${otherClasses}`}
      >
        <div>
          {Array.from(children).map((link, index) => (
            <motion.span
              variants={{
                initial: {
                color: 'black',
                },
                hovered: {
                color: '#4400ff',
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

      </motion.div>
    </Link>
  );
};

export default ColoredLink;
