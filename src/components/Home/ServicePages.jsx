import {
  motion,
  useInView,
  useAnimation,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const ServicePages = () => {
  const cardsData = [
    {
      title: "IT Services",
      description:
        "Discover exceptional IT services at Digicrowd. Our skilled team provides innovative solutions, keeping your business at the forefront of the digital landscape. Elevate your IT experience with us today.",
      images: [
        {
          title: "IT Strategy & Consulting",
          image: "home-icon-1-1",
        },
        {
          title: "Cloud Computing Solutions",
          image: "home-icon-1-2",
        },
        {
          title: "Cybersecurity Solutions",
          image: "home-icon-1-3",
        },
        {
          title: "Data Storage & Backup",
          image: "home-icon-1-4",
        },
        {
          title: "Infrastructure Performance",
          image: "home-icon-1-5",
        },
      ],
    },
    {
      title: "Development",
      description:
        "Unlock progressive development services at Digicrowd. Our committed team shapes inventive solutions, ensuring your projects flourish in the dynamic digital realm. Elevate your development journey with us today.",
      images: [
        {
          title: "Web Design and Development",
          image: "home-icon-2-1",
        },
        {
          title: "Mobile App Development",
          image: "home-icon-2-2",
        },
        {
          title: "Software Development",
          image: "home-icon-2-3",
        },
        {
          title: "Blockchain Development",
          image: "home-icon-2-4",
        },
      ],
    },
    {
      title: "Marketing",
      description:
        "Boost your business with Digicrowd, the best SEO and digital marketing company. We offer top-notch tailored services and Enterprise digital marketing solutions to deliver results that will boost the online visibility of your brand.",
      images: [
        {
          title: "SEO",
          image: "home-icon-3-1",
        },
        {
          title: "PPC",
          image: "home-icon-3-2",
        },
        {
          title: "Social Media Marketing",
          image: "home-icon-3-3",
        },
        {
          title: "Content Marketing",
          image: "home-icon-3-4",
        },
        {
          title: "Email Marketing",
          image: "home-icon-3-5",
        },
        {
          title: "Influencer Marketing",
          image: "home-icon-3-6",
        },
      ],
    },
    {
      title: "Design",
      description:
        "Experience incomparable design services with Digicrowd, from alluring graphics to expert packaging, mesmerizing logo design, Product design consulting, and Product design and development services. Trust us with extensive services that leave a lasting impact on your business in the online realm.",
      images: [
        {
          title: "Logo Designing",
          image: "home-icon-4-1",
        },
        {
          title: "Packaging",
          image: "home-icon-4-2",
        },
        {
          title: "Graphic Design",
          image: "home-icon-4-3",
        },
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col items-center ">
      {cardsData.map((card, index) => {
        const ref = useRef(null);

        const isInView = useInView(ref);
        const animationControls = useAnimation();
        
        const [active, setActive] = useState(0);

        useEffect(() => {
          if (isInView) {
            animationControls.start("visible");
          }
        }, [isInView, animationControls]);

        return (
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 200 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animationControls}
            transition={{ duration: 0.4, delay: 0.5 }}
            key={`${index}${card.title}`}
            className={`flex max-lg:flex-col items-center justify-around gap-6 w-full px-[15%] max-lg:px-10 border-b ${
              index % 2 === 0 ? "bg-accent-light flex-row" : "bg-white flex-row-reverse"
            } border-black py-20 max-lg:py-12 max-sm:py-8 ${index < cardsData.length - 1 && "border-b"}`}
          >
            <div className="content flex flex-col w-1/2 max-lg:w-full h-full justify-center ">
              <p className="heading my-6 text-4xl max-lg:text-2xl">
                {card.title}
              </p>
              <p>{card.description}</p>
              <div className="button-container flex w-4/5 items-start my-6">
                <button className="rounded-lg px-6 py-2 text-lg font-bold font-wix text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300">
                  Know More
                </button>
              </div>
            </div>

            <div
              className={`actual-cards flex flex-col items-start justify-end w-1/2 max-lg:w-full overflow-x-hidden`}
            >
              <div className="wrapper flex gap-6 ">
                {card.images.map((image, index) => {
                  useEffect(() => {
                    const interval = setInterval(() => {
                      setActive((active) => (active + 1) % card.images.length)
                    }, 2000);
                    return () => clearInterval(interval);
                  }, []);
                  const xTranslate =
                    index < active ? index * 100 : active * 100;
                  return (
                    <motion.div
                      style={{ x: `-${xTranslate}%` }}
                      key={index}
                      className={`card relative z-[10] border border-dark-blue group group-hover:shadow-[0_0_25px_gray] overflow-hidden flex flex-col w-60 aspect-square items-center justify-center gap-4 p-2 ${
                        index % 2 == 0 ? "bg-white" : "bg-accent-dark"
                      } border-2 border-accent-dark transition-all duration-300 cursor-pointer shadow-lg`}
                    >
                      <img
                        src={`/assets/${image.image}.png`}
                        alt={image.title}
                        className="object-cover w-12 h-12"
                      />
                      <p className="text-center font-wix text-xl text-shadow group-hover:font-bold font-semibold">{image.title}</p>
                      <img src={`/assets/${image.image}.png`}
                        alt={image.title}
                        className="overlay object-cover w-36 h-36 z-[-8] absolute bottom-[-20px] right-0 rotate-45 blur-sm group-hover:blur-md transition-all duration-300"
                      />
                    </motion.div>
                  );
                })}
              </div>
              <div className="controls flex gap-4 my-4 select-none">
                <div
                  className="px-4 py-1 text-lg font-extrabold border border-black hover:bg-black/80 hover:text-white transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    setActive((active) => active > 0 ? active - 1 : card.images.length - 1)
                  }
                >
                  ←
                </div>
                <div
                  className="px-4 py-1 text-lg font-extrabold border border-black hover:bg-black/80 hover:text-white transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    setActive((active) => (active + 1) % card.images.length)
                  }
                >
                  →
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServicePages;
