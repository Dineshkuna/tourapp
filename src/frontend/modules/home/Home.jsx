import React from "react";
import HeroSlide from "./hero/HeroSlide";
import TravelCheck from "./travelCheck/TravelCheck";
import BestService from "./bestService/BestService";

import Experience from "./experience/Experience";
import Gallery from "./gallery/Gallery";
import Carousel from "./clientReviews/Carousel";
import Subscribe from "../subscribe/Subscribe";
import Footer from "../../components/footer/Footer";
import Features from "./features/Features";
import { useState } from "react";

const Home = () => {

  // eslint-disable-next-line no-unused-vars
  const [filters, setFilters] = useState({ location: "", distance: "", maxPeople: "" });

  return (
    <div>
      <HeroSlide />
      <TravelCheck setFilters={setFilters} />
      <BestService />
      <Features/>
      <Experience />
      <Gallery />
      <Carousel />  
      <Subscribe/>
      <Footer/>
      
    </div>
  );
};

export default Home;



// import React from "react";
// import HeroSlide from "./hero/HeroSlide";
// import TravelCheck from "./travelCheck/TravelCheck";
// import BestService from "./bestService/BestService";

// import Experience from "./experience/Experience";
// import Gallery from "./gallery/Gallery";
// import Carousel from "./clientReviews/Carousel";
// import Subscribe from "../subscribe/Subscribe";
// import Footer from "../../components/footer/Footer";
// import Features from "./features/Features";

// const Home = () => {
//   return (
//     <div>
//       <HeroSlide />
//       <TravelCheck />
//       <BestService />
//       <Features/>
//       <Experience />
//       <Gallery />
//       <Carousel />  
//       <Subscribe/>
//       <Footer/>
      
//     </div>
//   );
// };

// export default Home;
