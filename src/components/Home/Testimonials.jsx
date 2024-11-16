import React, { useEffect } from "react";

const Testimonials = () => {
  const testimonialData = [
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget",
      name: "John Doe",
      position: "CEO, Company Name",
    },
    {
      content:
        "Minus, obcaecati pariatur dolorum perferendis sed iusto dolore, nihil accusantium  Dolor, minus quasi. Illo, dolorum quam!",
      name: "Jane Doe",
      position: "CEO, New Company Name",
    },
    {
      content:
        "Nemo fuga, possimus assumenda cumque maxime vero aspernatur quibusdam quaerat consequuntur repellendus placeat expedita iure ratione!",
      name: "Another Doe",
      position: "CEO, Another Company Name",
    },
  ];

  const [active, setActive] = React.useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonialData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-accent-light/60 border-b to-accent-light min-h-[90vh] max-sm:min-h-[50vh] flex flex-col px-[10%] max-lg:px-[5%] max-sm:px-6 py-4">
      <p className="heading">Testimonials</p>
      <p className="my-4 text-lg text-neutral-800">
        Hear what our clients have to say about us
      </p>
      <div className="testimonial-container my-4 w-4/5 max-sm:w-full h-[50vh] relative flex max-sm:flex-col justify-center items-center max-sm:items-start max-sm:justify-end">
        {/* All Borders */}
        <div className="top-border absolute top-0 left-[5%] max-sm:left-[10%] w-[95%] max-sm:w-[90%] bg-dark-blue h-[0.5px]"></div>
        <div className="left-border absolute top-[10%] left-0 w-[1px] bg-dark-blue h-[90%]"></div>
        <div className="bottom-border absolute bottom-0 left-0 w-[95%] max-sm:w-[90%] bg-dark-blue h-[1px]"></div>
        <div className="right-border absolute top-0 right-0 w-[0.5px] bg-dark-blue h-[90%]"></div>

        <div className="absolute star-1 top-0 left-0 -translate-x-1/2 -translate-y-1/2">
          <img
            loading="lazy"
            src="/utility/frame.svg"
            alt="star"
            className="object-cover stroke-dark-blue h-full w-6 aspect-square !text-3xl "
          />
        </div>
        <div className="absolute star-2 bottom-0 right-0 translate-x-1/2 translate-y-1/2">
          <img
            loading="lazy"
            src="/utility/frame.svg"
            alt="star"
            className="object-cover stroke-dark-blue h-full w-6 aspect-square !text-3xl"
          />
        </div>

        <div className="testimonials w-2/3 max-sm:w-full h-full max-sm:h-3/4 relative m-4 p-4">
          {testimonialData.map((testimonial, index) => {
            return (
              <div
                key={index}
                className={`absolute top-12 max-sm:top-0 left-0 flex flex-col justify-around min-h-[40vh] transition-all duration-700 ease-in ${
                  active === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="content flex flex-col">
                  <img
                    loading="lazy"
                    src={`/testimonials/0${index + 1}.png`}
                    alt="quote"
                    className="w-24 aspect-square object-cover stroke-dark-blue !fill-dark-blue"
                  />
                  <p className="text-xl max-sm:text-base font-bold font-wix mt-4 max-sm:mt-2 pr-4 max-sm:pr-8">
                    "{testimonial.content.split(" ").slice(0, 10).join(" ")}..."
                  </p>
                </div>

                <div className="deets flex flex-col">
                  <p className="text-lg max-sm:text-sm font-semibold text-blue-600 mt-4 max-sm:mt-2 ">
                    {testimonial.name}
                  </p>
                  <div className="flex gap-2 py-1">
                    {Array.from({ length: 5 }).map((_, i) => {
                      return (
                        <img
                          loading="lazy"
                          src="/utility/star.svg"
                          alt="star"
                          key={i}
                          className="w-4 h-4 border-none"
                        />
                      );
                    })}
                  </div>
                  <p className="text-lg max-sm:text-sm text-neutral-800">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="controls flex gap-4 p-2 m-4 select-none z-[20]">
          <div
            className="px-4 py-1 flex h-fit text-lg font-extrabold border border-black hover:bg-black/80 hover:text-white transition-all duration-300 cursor-pointer"
            onClick={() =>
              setActive((prev) =>
                prev > 0 ? prev - 1 : testimonialData.length - 1
              )
            }
          >
            ←
          </div>
          <div
            className="px-4 py-1 flex h-fit text-lg font-extrabold border border-black hover:bg-black/80 hover:text-white transition-all duration-300 cursor-pointer"
            onClick={() =>
              setActive((prev) => (prev + 1) % testimonialData.length)
            }
          >
            →
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
