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
import Testimonials from "../components/Home/Testimonials";
import Footer from "../components/shared/Footer";
import IntroFooter from "../components/shared/IntroFooter";

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
      <Testimonials />
      <IntroFooter />
      <Footer />
    </div>
  );
};

export default Home;
