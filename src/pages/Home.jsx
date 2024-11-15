import React from "react";
import Hero from "../components/Home/Hero";
import Header from "../components/shared/Header";
import WhoWeAre from "../components/Home/WhoWeAre";
import OurCertificates from "../components/Home/OurCertificates";
import OurServices from "../components/Home/OurServices";
import ServicePages from "../components/Home/ServicePages";
import OurClients from "../components/Home/OurClients";
import CTA from "../components/Home/CTA";
import Features from "../components/Home/Features";
import OurProcess from "../components/Home/OurProcess";
import ServicesAlter from "../components/Home/ServicesAlter";
import Blogs from "../components/Home/Blogs";

const Home = () => {
  return (
    <div className="flex flex-col relative min-h-screen w-full ">
      <Header />
      <Hero />
      <WhoWeAre />
      <OurCertificates />
      <OurServices />
      <ServicePages />
      <ServicesAlter />
      <OurClients />
      <CTA />
      <Features />
      <OurProcess />
      <Blogs />
      <div className="h-dvh"></div>
    </div>
  );
};

export default Home;
