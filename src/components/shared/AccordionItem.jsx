import React from "react";

const AccordionItem = ({
  title = "Accordion Title",
  isActive,
  setActive,
  children,
  index = 0,
}) => {
  return (
    <div className="space-y-4 mt-2">
      <div className="border-b border-gray-400 ">
        {/* Accordion Header */}
        <button
          onClick={() => setActive(isActive ? null : index)}
          className="w-full flex justify-between items-center px-4 py-2 text-left text-gray-700 rounded-lg"
        >
          <div className={`text-lg flex items-center gap-2 ${isActive && 'translate-x4 font-semibol'} transition-all duration-400 ease-in font-semibold  pb-2 border-b border-gray-300`}>
            <p className="text-xl max-lg:text-lg max-sm:text-base ">{`# ${title}`}</p>
            <span><img src='/utility/arrow-right-colored.svg' alt='arrow' className="w-6" /></span>
          </div>
        </button>

        {/* Accordion Content */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isActive ? "max-h-screen" : "max-h-screen"
          }`}
        >
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
