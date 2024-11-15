import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const ServicePagesCarousel = () => {
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

  const overlayImage =
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="w-full flex flex-col items-center">
      {cardsData.map((card, cardIndex) => {
        const ref = useRef(null);
        const isInView = useInView(ref);
        const animationControls = useAnimation();

        useEffect(() => {
          if (isInView) {
            animationControls.start("visible");
          }
        }, [isInView, animationControls]);

        return (
          <motion.div
            ref={ref}
            key={`${cardIndex}-${card.title}`}
            initial="hidden"
            animate={animationControls}
            variants={{
              hidden: { opacity: 0, y: 200 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className={`flex max-lg:flex-col items-center justify-around gap-6 w-full px-[15%] max-lg:px-10 border-b ${
              cardIndex % 2 === 0
                ? "bg-accent-light flex-row"
                : "bg-white flex-row"
            } border-black py-20 max-lg:py-12 max-sm:py-8`}
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

            <div className="actual-cards relative flex flex-col items-center w-1/2 max-lg:w-full ">
              <Carousel className="w-full max-w-xs">
                <CarouselContent className="">
                  {card.images.map((image, index) => {
                    return (
                      <CarouselItem
                        key={index}
                        className={`card select-none border m-2 h-4/5 relative rounded-md border-dark-blue group group-hover:shadow-[0_0_45px_gray] z-[10] flex flex-col overflow-hidden w-28 aspect-square items-center justify-center gap-4 p-2 ${
                          index % 2 === 0 ? "bg-white" : "bg-accent-dark"
                        }  border border-accent-dark transition-all duration-700 cursor-pointer shadow-lg`}
                      >
                        <img
                          src={`/assets/${image.image}.png`}
                          alt={image.title}
                          className="icon object-cover w-16 h-16 m-2 p-2 group-hover:bg-white group-hover:border border-black rounded-full transition-all duration-300"
                        />

                        <img
                          src={overlayImage}
                          alt="overlay"
                          className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full transition-all duration-300 z-[-8] blur-sm object-cover"
                        />
                        <p className="text-center font-wix text-2xl group-hover:text-white transition-all duration-300 font-bold px-6">
                          {image.title}
                        </p>
                        <img
                          src={`/assets/${image.image}.png`}
                          alt={image.title}
                          className="overlay object-cover w-36 h-36 z-[-9] absolute bottom-[-20px] right-0 rotate-45 blur-lg group-hover:blur-md transition-all duration-300"
                        />
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>

                <CarouselPrevious
                  className={` ${
                    cardIndex % 2 == 0 ? "bg-white " : "bg-accent-dark"
                  } hover:bg-accent-light hover:!border-black transition-all duration-300 text-black stroke-black`}
                />
                <CarouselNext
                  className={` ${
                    cardIndex % 2 == 0 ? " bg-white" : "bg-accent-dark"
                  }  hover:bg-accent-light hover:!border-black transition-all duration-300 text-black stroke-black`}
                />
              </Carousel>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServicePagesCarousel;
