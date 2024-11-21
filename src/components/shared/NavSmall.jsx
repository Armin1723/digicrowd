import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import AnimatedHamburger from "./AnimatedHamburger";
import { Link } from "react-router-dom";

const NavSmall = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServices = () => setIsServicesOpen((prev) => !prev);
  return (
    <Sheet>
      <SheetTrigger>
        <AnimatedHamburger />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="w-full !bg-white z-[100] flex flex-col justify-between !px-0"
      >
        <SheetHeader>
          <SheetTitle className='w-full'>
            <SheetClose asChild>
              <Link to="/" className="logo w-2/3">
                <img
                  loading="lazy"
                  src="/assets/logo.webp"
                  alt="logo"
                  className="object-cover w-1/2 px-2"
                />
              </Link>
            </SheetClose>
          </SheetTitle>
          <SheetDescription className="!w-full ">
            <nav className="flex flex-col w-full gap-2 justify-start items-start mt-4">
              {/* Static Links */}
              <Link
                to="/about-us"
                className="w-full text-left px-4 py-2 rounded font-regular border-b text-base font-sans"
              >
                About Us
              </Link>
              <Link
                to="/portfolio"
                className="w-full text-left px-4 py-2 rounded font-regular border-b text-base font-sans"
              >
                Portfolio
              </Link>

              {/* Collapsible Services */}
              <div className="w-full text-left">
                <button
                  onClick={toggleServices}
                  className="w-full flex justify-between items-center px-4 py-2 rounded border-b text-base font-sans font-regular"
                >
                  <span>Services</span>
                  <span className="">{isServicesOpen ? "-" : "+"}</span>
                </button>

                {/* Submenu */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isServicesOpen ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <ul className="pl-8 mt-2 space-y-2 flex flex-col items-start">
                    <li>
                      <Link
                        to="/services/development"
                        className="block px-4 py-2 text-gray-800 hover:text-gray-950 hover:bg-gray-100 rounded"
                      >
                        Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/it-strategy"
                        className="block px-4 py-2 text-gray-800 hover:text-gray-950 hover:bg-gray-100 rounded"
                      >
                        IT Strategy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/design"
                        className="block px-4 py-2 text-gray-800 hover:text-gray-950 hover:bg-gray-100 rounded"
                      >
                        Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/digital-marketing"
                        className="block px-4 py-2 text-gray-800 hover:text-gray-950 hover:bg-gray-100 rounded"
                      >
                        Digital Marketing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                to="/blogs"
                className="w-full text-left px-4 py-2 rounded font-regular border-b text-base font-sans"
              >
                Blogs
              </Link>
              <Link
                to="/contact-us"
                className="w-full text-left px-4 py-2 rounded font-regular border-b text-base font-sans"
              >
                Contact Us
              </Link>
            </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NavSmall;
