import React from "react";
import Hero from "./hero/Hero";
import AboutCard from "../about/AboutCard";
import HAbout from "./HAbout";
import Test from "../testimonials/Test";
import HBlog from "./HBlog";
import Hprice from "./Hprice";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Test />
      <HBlog />
      <Hprice />
    </>
  );
};

export default Home;
