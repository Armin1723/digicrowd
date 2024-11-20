import React from "react";
import MarqueeItem from "../shared/MarqueeItem";

const OurClients = () => {
  const images = [
    {
      title: "Client 1",
      image: "/clients/client-1.webp",
    },
    {
      title: "Client 2",
      image: "/clients/client-2.webp",
    },
    {
      title: "Client 3",
      image: "/clients/client-3.webp",
    },
    {
      title: "Client 4",
      image: "/clients/client-4.webp",
    },
    {
      title: "Client 5",
      image: "/clients/client-5.webp",
    },
    {
      title: "Client 6",
      image: "/clients/client-6.webp",
    },
    {
      title: "Client 7",
      image: "/clients/client-7.webp",
    },
    {
      title: "Client 8",
      image: "/clients/client-8.webp",
    },
    {
      title: "Client 9",
      image: "/clients/client-9.webp",
    },
    {
      title: "Client 10",
      image: "/clients/client-10.webp",
    },
    {
      title: "Client 11",
      image: "/clients/client-11.webp",
    },
    {
      title: "Client 12",
      image: "/clients/client-12.webp",
    },
    {
      title: "Client 13",
      image: "/clients/client-13.webp",
    },
  ];

  return (
    <div className="flex flex-col w-full items-center justify-center py-4 overflow-hidden">
      <p className="heading text-4xl max-lg:text-2xl font-wix my-4">
        Our Clients
      </p>
      <p className="text-center w-1/2 max-lg:w-3/4 max-sm:w-[90%] text-lg max-sm:text-sm font-['helvetica']">
        For excellent digital marketing strategies created especially for IT
        firms, our clients count on us. Our expertise lies in devising and
        implementing the best digital marketing strategies that improve their
        best digital marketing for IT companies, Digicrowd presence and provide
        seamless integration with the ever changing IT sector.
      </p>
        <div
          className="my-4 cursor-crosshair"
        >
          <MarqueeItem images={images} />
        </div>
    </div>
  );
};

export default OurClients;
