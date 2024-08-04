import React from "react";
import HeroSlide from "./hero/HeroSlide";
import TravelCheck from "./travelCheck/TravelCheck";
import BestService from "./bestService/BestService";
// import Features from './features/Features'
import Experience from "./experience/Experience";
import Gallery from "./gallery/Gallery";
import Carousel from "./clientReviews/Carousel";

const Home = () => {
  return (
    <div>
      <HeroSlide />
      <TravelCheck />
      <BestService />
      {/* <Features/> */}
      <Experience />
      <Gallery />
      <Carousel />
    </div>
  );
};

export default Home;
