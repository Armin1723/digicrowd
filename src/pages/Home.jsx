import React from "react";
import Hero from "../components/Home/Hero";
import Header from "../components/shared/Header";
import WhoWeAre from "../components/Home/WhoWeAre";
import OurCertificates from "../components/Home/OurCertificates";
import OurServices from "../components/Home/OurServices";
import ServicePages from "../components/Home/ServicePages";

const Home = () => {
  return (
    <div className="flex flex-col relative min-h-screen w-full">
      <Header />
      <Hero />
      <WhoWeAre />
      <OurCertificates />
      <OurServices />
      <ServicePages />
      <div className="h-screen"></div>
    </div>
  );
};

export default Home;
