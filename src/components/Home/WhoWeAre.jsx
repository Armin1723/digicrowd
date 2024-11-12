import React from "react";
import CountUpNumber from "../shared/CountUpNumber";

const WhoWeAre = () => {
  return (
    <div className="flex max-lg:flex-col max-sm:gap-6 w-full py-20 max-lg:py-12 max-sm:py-8 min-h-screen items-end">
      <div className="content w-1/2 max-lg:w-full flex flex-col items-center justify-center max-sm:px-4 gap-2">
        <div className="wrapper flex flex-col w-[80%] max-sm:w-full max-sm:px-4">
          <div className="heading text-left">Who We Are?</div>
          <p className="text-gray-400 text-2xl max-sm:text-lg text-left font-wix py-2">
            Professional Global IT & Digital Marketing Services Company
          </p>
          <p className=" items-start text-justify text-lg pt-12 max-sm:pt-4 max-sm:text-sm font-['inter']">
            Benefit from unparalleled digital excellence through a
            world-renowned Best Digital Marketing Company, Digicrowd, IT & best
            digital marketing services provider. As a leading digital marketing
            company, we are proud to be your partner of choice for cutting-edge
            solutions. Our experienced team is committed to providing
            world-class web development and digital marketing services and
            helping your brand shine in the digital space. Trust us as we
            provide the most affordable digital marketing agency services that
            offer budget-friendly strategies without sacrificing quality.
            Experience a seamless integration of web development and digital
            marketing services designed specifically to enhance your online
            presence. Our goal is to achieve results that exceed expectations
            and optimize brand awareness and engagement.
          </p>
        </div>

        <div className="icons flex max-sm:flex-col gap-4 my-8 w-4/5 max-sm:w-full max-sm:px-4 justify-between font-wix items-center max-sm:items-start">
            <div className="icon-1 flex  gap-2 items-center">
                <img src='/assets/who-we-are-icon-1.webp' alt='graphic' className="border-2 rounded-md border-black/60 w-20 h-20 " />
                <div className="flex flex-col">
                    <p className="font-bold text-3xl font-wix"><CountUpNumber to={1500} suffix={'+'}/></p>
                    <p>Clients Worldwide.</p>
                </div>
            </div>
            <div className="divider border border-black h-20 max-sm:hidden"></div>
            <div className="icon-2 flex gap-2 items-center">
                <img src='/assets/who-we-are-icon-2.webp' alt='graphic' className="border-2 rounded-md border-black/60 w-20 h-20" />
                <div className="flex flex-col ">
                    <p className="font-bold text-3xl font-wix"><CountUpNumber to={90} suffix={'%'}/></p>
                    <p>Customer Retention.</p>
                </div>
            </div>
        </div>

        <div className="button-container flex w-4/5 items-start"><button className="rounded-lg px-6 py-2 text-lg font-bold font-wix text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300" >Read More</button></div>
      </div>

      <div className="graphics w-1/2 max-lg:w-full max-lg:mt-4 h-full">
        <img
          src="/assets/who-we-are.webp"
          alt="graphics"
          className="object-fill h-full w-full"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
