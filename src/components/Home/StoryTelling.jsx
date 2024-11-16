import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const processData = [
  {
    subheading: "Customization",
    heading: "Built for all of us.",
    icon: "/assets/process-icon-1.webp",
    description:
      "We tailor personalized solutions for your brand that meet your unique requirements. And fulfil effective and optimized approaches for digital marketing.",
  },
  {
    subheading: "Implementation",
    heading: "Never compromise.",
    icon: "/assets/process-icon-2.webp",
    description:
      "Our team of experts smoothly implements the latest techniques using updated tools, technology and precise execution to bring our plan into action seamlessly.",
  },
  {
    subheading: "Optimization",
    heading: "Whatever is for the best.",
    icon: "/assets/process-icon-3.webp",
    description:
      "To deliver effective and high-quality results for our clients, we involve continuous modification and revision.",
  },
  {
    subheading: "Analysis",
    heading: "We know what you need.",
    icon: "/assets/process-icon-4.webp",
    description:
      "We evaluate how well things are working, identify stability, and find areas where we can make things even better. These insights guide us in shaping future strategies.",
  },
];

const StoryTelling = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center w-full hide-scrollbar"
    >
      <TextParallaxContent imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <OtherContent />
      </TextParallaxContent>
    </div>
  );
};

const SLIDE_SIZE = 100;

const TextParallaxContent = ({ imgUrl, children }) => {
  const introRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, SLIDE_SIZE]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);

  return (
    <div>
      <div
        className="relative w-full"
        style={{
          height: `calc(${SLIDE_SIZE * (processData.length + 1) + 170}vh)`,
        }}
      >
        <StickyImage imgUrl={imgUrl} />
        <div
          className="overlays absolute w-full flex flex-col top-0 left-0"
          style={{
            height: `calc(${SLIDE_SIZE * (processData.length + 1) + 170}vh)`,
          }}
        >
          <motion.div
            style={{
              height: `calc(${SLIDE_SIZE}vh)`,
              y,
              opacity,
              scale,
            }}
            ref={introRef}
            className="flex flex-col items-center justify-center text-white z-[100]"
          >
            <p className="text-center text-4xl font-bold md:text-7xl max-w-[90vw] ">
              Our Process
            </p>
            <p className="text-center max-sm:text-justify mb-4 text-lg max-sm:text-base text-neutral-300 max-sm:text-neutral-400 w-3/5 max-lg:w-4/5 max-sm:w-full max-sm:px-6 py-6 ">
              At Digicrowd Solution, our digital marketing process is
              intricately crafted to provide the best digital marketing services
              & solutions. Our process kicks off with a comprehensive analysis
              to grasp your objectives and target audience. When formulating
              customized strategies, we leverage cutting-edge techniques in SEO,
              social media, and content marketing. The execution is precise,
              with continuous monitoring to ensure effectiveness. Our unwavering
              commitment to transparency guarantees that you stay informed at
              every phase. We're results-oriented, diligently tracking metrics
              for optimization. As a premier digital marketing services
              provider, we bring innovation and expertise to propel your online
              success, presenting a seamless procedure that consistently
              surpasses expectations.
            </p>
          </motion.div>
          {processData.map((item, index) => {
            return (
              <OverlayCopy
                key={item.heading}
                index={index}
                heading={item.heading}
                subheading={item.subheading}
                description={item.description}
                icon={item.icon}
              />
            );
          })}
          <div className="h-[50vh]"></div>
        </div>
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const radius = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        top: -1,
        scale,
        opacity,
        borderRadius: radius,
      }}
      ref={targetRef}
      className="sticky z-[99] overflow-hidden w-full "
    >
      <motion.div
        className="absolute inset-0 z-[100] bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ index, subheading, heading, icon, description }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.75],
    [100, 0, 0, -150]
  );
  const scale = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.6, 0.75],
    [0.6, 1, 1, 0.8]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.75],
    [0.6, 0.8, 1, 0.7]
  );

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
        height: `${SLIDE_SIZE + 30}vh`,
      }}
      ref={targetRef}
      className="z-[101] relative text-lg md:text-xl flex w-full flex-col items-center justify-start text-white"
    >
      <div className="sticky top-0 w-full flex flex-col items-center justify-center h-screen ">
        <img
          loading="lazy"
          src={icon}
          alt="icon"
          className="w-24 aspect-square object-cover my-4 rounded-full border border-black"
        />
        <p className="mb-2 text-center text-4xl md:mb-4 md:text-6xl font-bold">
          {index + 1}. {subheading}
        </p>
        <p className="text-center text-xl font-semibold md:text-3xl max-w-[90vw] ">
          {heading}
        </p>
        <p className="text-center py-8 w-1/2 max-lg:w-3/4 max-sm:w-[90%] text-xl max-sm:text-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const OtherContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 py-12 max-sm:py-4 md:grid-cols-12">
    <h2 className="col-span-1 heading !text-4xl font-bold md:col-span-4">
      Our Process
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-lg text-neutral-600">
        We tailor personalized solutions for your brand that meet your unique
        requirements. And fulfil effective and optimized approaches for digital
        marketing.
      </p>
      <p className="mb-8 text-lg text-neutral-600 ">
        We provide a wide range of services that help you to grow your business
        and reach your goals. We are here to help you with the best solutions
        for your business
      </p>
      <div className="button-container flex w-4/5 items-start my-6">
        <button
          aria-label="Know More"
          className="rounded-lg px-6 py-2 text-lg font-bold font-wix text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
        >
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default StoryTelling;
