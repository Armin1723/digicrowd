import React from "react";
import HoverCard from "../shared/HoverCard";

const Features = () => {
  const cardsData = [
    {
      title: "Proven Excellence",
      subtitle:
        "Meritorious by experience.",
      icon: "/assets/features-icon-1.webp",
      href: "/",
    },
    {
      title: "Marketing Solutions",
      subtitle:
        "Your One Stop Solution.",
      icon: "/assets/features-icon-2.webp",
      href: "/",
    },
    {
      title: "Innovative Strategies",
      subtitle:
        "Innovate to elevate.",
      icon: "/assets/features-icon-3.webp",
      href: "/",
    },
  ];

  return (
    <div className="w-full flex flex-col px-[10%] max-lg:px-[10%] max-sm:px-6 py-12">
      <p className="heading text-4xl max-lg:text-2xl font-wix">
        Why Digicrowd Solution For Best Digital Marketing Agency?
      </p>
      <div className="container flex max-lg:flex-col-reverse items-center justify-between">
        <div className="text-and-cards w-2/3 max-lg:w-full">
          <div className="content  font-['helvetica'] py-8 text-justify">
            Digicrowd Solution stands out as the Best Digital Marketing Company
            of preference for numerous reasons. With a wealth of experience and
            a proven track record, they offer a specialized and affordable
            digital marketing agency for startups. Serving as a one-stop-shop,
            their comprehensive digital marketing solutions span SEO, social
            media, content marketing, and PPC advertising. Embracing a
            data-driven approach, they ensure campaigns are not only creative
            but also backed by analytics. Client testimonials attest to their
            success, and transparent communication is a cornerstone of their
            client relationships. Innovation is woven into their strategies, and
            they pride themselves on cost-effective yet impactful solutions.
            With a dedicated customer support team and a results-driven mindset,
            Digicrowd Solution emerges as a top digital marketing services
            provider company and a reliable partner committed to turning digital
            aspirations into tangible success.
          </div>
          <div className="cards w-full flex max-sm:flex-col gap-8 max-sm:gap-4">
            {cardsData.map((card, index) => {
              return (
                <HoverCard
                  key={index}
                  title={card.title}
                  subtitle={card.subtitle}
                  icon={card.icon}
                  href={card.href}
                />
              );
            })}
          </div>
        </div>

        <div className="graphic flex items-center">
          <img
            src="/assets/features-graphic.webp"
            alt="features-graphic"
            className="object-fill w-full flex-1 aspect-[2/3] max-h-[50vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
