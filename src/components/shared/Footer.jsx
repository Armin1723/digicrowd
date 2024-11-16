import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import FlipLink from "./FlipLink";

const Footer = () => {
  const services = [
    "SEO",
    "WEB DESIGN",
    "SOCIAL MEDIA",
    "BRANDING",
    "MARKETING",
    "DEVELOPMENT",
    "ANALYTICS",
    "CONSULTING",
  ];
  const sectors = [
    "TECH",
    "HEALTH",
    "EDUCATION",
    "FINANCE",
    "RETAIL",
    "FOOD",
    "SPORTS",
    "ENTERTAINMENT",
  ];

  const motionControls = useAnimation();
  const ref = useRef(null);

  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      motionControls.start("visible");
    }
  }, [isInView]);

  return (
    <footer className="relative bg-[#010202] text-white min-h-dvh overflow-hidden flex flex-col justify-between items-center">

      {/* Upper section with icons/links */}
      <div className="flex max-lg:flex-col items-start py-8 max-sm:py-2 w-4/5 max-sm:w-full max-sm:px-4 max-sm:gap-6 justify-start">
        <div className="flex flex-col flex-wrap justify-center gap-4 w-1/2 max-lg:w-full">
          <p className="text-xl uppercase font-extrabold tracking-tighter">
            Services
          </p>
          <div className="links grid grid-cols-2 gap-4 place-content-start">
            {services.map((service, index) => {
              return (
                <FlipLink key={index} otherClasses="flex w-fit">
                  {service}
                </FlipLink>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-center gap-4 w-1/2 max-lg:w-full">
          <p className="text-xl uppercase font-extrabold tracking-tighter">
            Sectors
          </p>
          <div className="links grid grid-cols-2 gap-4">
            {sectors.map((sector, index) => {
              return (
                <FlipLink key={index} otherClasses="flex w-fit">
                  {sector}
                </FlipLink>
              );
            })}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-4/5 border border-neutral-600 max-sm:hidden"></div>

      {/* Middle Content */}
      <div className="flex max-sm:flex-col w-4/5 max-sm:w-full max-sm:px-4 max-sm:gap-6">
        <div className="w-1/2 max-sm:w-full flex flex-col justify-start items-start gap-3">
          <p className="text-xl uppercase font-extrabold tracking-tighter my-4">
            Contact Us
          </p>
          <div className="text-base flex items-center gap-2 ">
            <img src="/footer/call-icon.png" alt="email" className="w-6 h-6" />
            <p>+1 234 567 890</p>
          </div>
          <div className="text-base flex items-center gap-2">
            <img src="/footer/pin-icon.png" alt="email" className="w-6 h-6" />
            <p>1234 Street Name, City Name, United States</p>
          </div>
          <div className="text-base flex items-center gap-2">
            <img src="/footer/email-icon.png" alt="email" className="w-6 h-6" />
            <p>contact@digicrowdsolution.com</p>
          </div>
        </div>
        <div className="certifications w-1/2 max-sm:w-full flex flex-col justify-center items-start gap-4">
          <div className=" google-link flex flex-col gap-1">
            <img
              src="/footer/google-icon.svg"
              alt="google"
              className="w-20 aspect-video"
            />
            <p className="text-neutral-400 text-sm">(4.9) 30 reviews</p>
          </div>
          <div className="other-links flex gap-4 flex-wrap">
            {Array.from({ length: 4 }).map((_, index) => {
              return (
                <img
                  key={index}
                  src={`/footer/other-link-${index + 1}.svg`}
                  alt="cert"
                  className="h-12 w-fit object-cover"
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Large Full-Width Text */}
      <motion.div
        ref={ref}
        className="flex w-full select-none"
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
            background: "url('/footer/overlay-gif-3.webp') center",
          }}
          className="text-[15.8vw] w-full text-center !bg-clip-text font-['arial'] text-transparent bg-gradient-to-b from-[#124d69 from-dark-blue to-[#008aff] tracking-tight max-sm:tracking-normal font-extrabold leading-none"
        >
          DIGICROWD
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
