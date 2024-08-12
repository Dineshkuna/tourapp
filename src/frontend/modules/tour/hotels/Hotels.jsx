import React, { useState } from "react";
import "./Hotels.css";
import hotels from "../../../../data/tourTrips";
import Pagination from "./Pagination";

const Hotels = () => {
  const[currentPage, setCurrentPage] = useState(1);
  const[postsPerPage, setPostsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage

  const currentPosts = hotels.slice(firstPostIndex,lastPostIndex)
  


  return (
    <div className="hotelMainContainer">
      <div className="hotelContainer">
        {currentPosts.map((hotel, index) => (
          <div key={index} className="hotelCards">
            <img src={hotel.photo} alt="hotelphoto" className="hotelphoto" />
            <p className="hotelcity">{hotel.city}</p>
            <p className="hoteltitle">{hotel.title}</p>
            <p className="hotelprice"><b>${hotel.price}</b>/per person</p>
            <button className="hotelbtn">Book Now</button>
          </div>
        ))}
      </div>
      <Pagination totalPosts = {hotels.length}
      postsPerPage={postsPerPage}
      currentPage={currentPage}
      setCurrentPage = {setCurrentPage}
      />
    </div>
  );
};

export default Hotels;
