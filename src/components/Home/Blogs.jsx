import { motion } from "framer-motion";
import React, { useEffect } from "react";

const Blogs = () => {
  const blogsData = [
    {
      title: "The secrets of a profitable advertising campaign",
      date: "12th July 2021",
    },
    {
      title: "How to make your business stand out",
      date: "23rd July 2023",
    },
    {
      title: "The importance of a good website",
      date: "1st August 2023",
    },
    {
      title: "The future of digital marketing",
      date: "12th August 2023",
    },
    {
      title: "Transform your landing page conversions rate",
      date: "12th February 2021",
    },
    {
      title: "The secrets of a profitable advertising campaign",
      date: "12th July 2021",
    },
    {
      title: "How to make your business stand out",
      date: "23rd July 2023",
    },
    {
      title: "The importance of a good website",
      date: "1st August 2023",
    },
    {
      title: "The future of digital marketing",
      date: "12th August 2023",
    },
    {
      title: "Transform your landing page conversions rate",
      date: "12th February 2021",
    },
  ];

  const [curr, setCurr] = React.useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurr((prev) => (prev + 1) % (blogsData.length - 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full px-[10%] max-lg:px-6 relative py-6 max-sm:pt-0 bg-gradient-to-b from-transparent to-accent-light/60">
      <p className="heading text-4xl max-sm:text-2xl !my-0">Our Blogs</p>

      <div className="controls flex gap-4 my-4 w-full justify-end select-none">
        <div
          className="px-4 py-1 text-lg font-extrabold border border-black hover:bg-black/80 hover:text-white transition-all duration-300 cursor-pointer"
          onClick={() =>
            setCurr((prev) => (prev > 0 ? prev - 1 : blogsData.length - 1))
          }
        >
          ←
        </div>
        <div
          className="px-4 py-1 text-lg font-extrabold border border-black hover:bg-black/80 hover:text-white transition-all duration-300 cursor-pointer"
          onClick={() => setCurr((prev) => (prev + 1) % (blogsData.length - 1))}
        >
          →
        </div>
      </div>
      <div className="blogs-container flex my-4 py-4 w-full gap-4 justify-start max-sm:gap-2 overflow-x-scroll scroll-snap-x select-none flex-shrink-0">
        {blogsData.map((blog, index) => {
          return (
            <motion.div
              key={index}
              style={{
                translateX: `-${curr * 100}%`,
              }}
              className="blog-card bg-white shadow-md rounded-lg group cursor-pointer min-w-[33%] max-lg:min-w-[50%] max-sm:min-w-full flex flex-col p-4 max-sm:p-2 transition-all duration-300 ease-in"
            >
              <div className="image-container rounded-md group-hover:!-translate-y-4 transition-all duration-300 ease-in w-full aspect-[16/9] border overflow-hidden my-4">
                <img
                  src={`/assets/blog-${
                    (index % (blogsData.length / 2)) + 1
                  }.webp`}
                  alt="logo"
                  className=" group-hover:scale-110 transition-all duration-500 ease-out object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-700 group-hover:!-translate-y-4 transition-all duration-300 ease-in rounded-lg border border-gray-700 px-3 py-1 text-xs w-fit my-1 uppercase">Tech Blog</p>
              <p className="text-xl group-hover:!-translate-y-4 transition-all duration-300 ease-in max-lg:text-lg max-sm:text-sm max-sm:leading-[1rem] my-2 font-semibold font-wix">
                {blog.title.split(" ").slice(0, 5).join(" ")}...
              </p>
              <p className="text-gray-400 group-hover:!-translate-y-4 transition-all duration-300 ease-in text-sm max-sm:text-xs">{blog.date}</p>
              <p className="py-4 group-hover:!-translate-y-4 transition-all duration-300 ease-in max-sm:py-1 max-sm:text-xs text-sm text-neutral-600 md:pr-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                officia, vero aut esse ullam ipsam unde consequatur ab
                repellendus illum!
              </p>
            </motion.div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Blogs;
