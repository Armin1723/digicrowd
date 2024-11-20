import React from "react";

const AccordionItem = ({
  title = "Accordion Title",
  isActive,
  setActive,
  children,
  index = 0,
}) => {
  return (
    <div className="space-y-4 my-2">
      <div className="border-b rounded-lg">
        {/* Accordion Header */}
        <button
          onClick={() => setActive(isActive ? null : index)}
          className="w-full flex justify-between items-center px-4 py-2 text-left text-gray-700 bg- rounded-lg"
        >
          <div className={`text-lg flex items-center gap-2 ${isActive && 'translate-x-4 font-semibold'} transition-all duration-400 ease-in`}>
            <p>{title}</p>
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
