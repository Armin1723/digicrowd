import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FlipLink from "./FlipLink";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import ColoredLink from "./ColoredLink";
import NavSmall from "./NavSmall";

const Header = () => {
  const services = [
    {
      name: "Development",
      subServices: [
        "Web Development",
        "App Development",
        "Software Development",
        "Blockchain Development",
      ],
    },
    {
      name: "Digital Marketing",
      subServices: [
        "Search Engine Optimization",
        "Pay-Per-Click",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Infleuncer Marketing",
      ],
    },
    {
      name: "IT Services",
      subServices: [
        "IT Strategy and Consulting",
        "Cybersecurity Solutions",
        "Cloud Computing Solutions",
        "Data Storage and Backup",
        "Infrastructure Performance",
      ],
    },
    {
      name: "Design",
      subServices: [
        "Branding",
        "Package Design",
        "Graphic Design",
        "Logo Design",
        "Brand Identity",
      ],
    },
  ];
  const { scrollY } = useScroll();

  const [isHovered, setIsHovered] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    const header = document.getElementById("header");
    if (latest > previous && latest > 250) {
      header.classList.add("-translate-y-full");
    } else {
      header.classList.remove("-translate-y-full");
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 30) {
        header.classList.add("border-b");
        header.classList.add("bg-white");
      } else {
        header.classList.remove("border-b");
        header.classList.remove("bg-white");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="header"
      className={`fixed top-0 w-full flex justify-between items-center z-[98] transition-all duration-300 py-2 ${
        isHovered && window.scrollY < 30 && "bg-white"
      }`}
    >
      <div className="navbar-container w-full flex justify-between items-center relative px-12 max-lg:px-8 max-sm:px-4 ">
        <Link to="/" className="logo">
          <img
            loading="lazy"
            src="/assets/logo.webp"
            alt="logo"
            className="object-cover max-lg:w-3/4"
          />
        </Link>

        <div className="links-container flex gap-6 max-lg:gap-4 text-lg items-center max-lg:hidden font-sans">
          <FlipLink to="/about" otherClasses="text-gray-700">
            About Us
          </FlipLink>
          <FlipLink to="/portfolio" otherClasses="text-gray-700">
            Portfolio
          </FlipLink>
          <motion.div
            className="group min-h-[10vh] flex items-center overflow-hidden"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <FlipLink to="/services" otherClasses="text-gray-700">
              Services
            </FlipLink>
            <div className="absolute w-0 !z-[99] overflow-hidden top-full left-[10%] opacity-0 -translate-y-12 h-0 bg-white group-hover:opacity-100 group-hover:translate-y-0 group-hover:min-h-fit group-hover:w-4/5 transition-opacity duration-300 border-t-4 p-4 border-dark-blue shadow-sm">
              <div className="text-container opacity-0 flex flex-wrap justify-around gap-4 -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 ease-in delay-200 pb-2">
                {services.map((service, index) => {
                  return (
                    <div
                      key={index}
                      className="service-container flex flex-col gap-4 font-sans "
                    >
                      <p className="font-bold text-lg ">{service.name}</p>
                      {service.subServices.map((subService, index) => {
                        return (
                          <ColoredLink
                            key={index}
                            to={`/services/${subService.split(" ").join("-")}`}
                            otherClasses="text-sm font-[400]"
                          >
                            {subService}
                          </ColoredLink>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
          <FlipLink to="/blog" otherClasses="text-gray-700">
            Blog
          </FlipLink>
          <FlipLink to="/contact" otherClasses="text-gray-700">
            Contact Us
          </FlipLink>

          <div className="button-container flex !text-base items-center gap-4">
            <button
              aria-label="Book Demo"
              className="button bg-accent text-white"
            >
              Book Demo
            </button>
            <button aria-label="Free Audit" className="button text-accent">
              Free Audit
            </button>
          </div>
        </div>

        <div className="hidden max-lg:flex h-full items-center justify-center">
          <NavSmall />
        </div>
      </div>
    </div>
  );
};

export default Header;
