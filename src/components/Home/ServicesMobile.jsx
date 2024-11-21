import { cardsData } from "../../utils";
import React, { useState } from "react";
import AccordionItem from "../shared/AccordionItem";

const ServicesMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex md:hidden flex-col w-full px-12 max-sm:px-6 gap-4 bg-accent-light">
      <div className="accordionContainer flex flex-col ">
        {cardsData.map((card, index) => {
          return (
            <AccordionItem
              key={index}
              index={index}
              isActive={activeIndex === index}
              setActive={setActiveIndex}
              title={card.title}
            >
              <div className="flex flex-col">
                <p className="text-xs text-neutral-500">{card.description}</p>
                <div className="flex flex-col gap-4 my-4">
                  {card.sub.map((subCategory, index) => {
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <img
                          src={`/assets/${subCategory.image}.webp`}
                          alt="icon"
                          className="w-12 aspect-square p-2 object-cover rounded-full border-neutral-400 border bg-white"
                        />
                        <p className="text-lg max-lg:text-base max-sm:text-sm">{subCategory.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AccordionItem>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesMobile;
