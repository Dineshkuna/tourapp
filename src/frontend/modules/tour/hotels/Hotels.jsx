import React, { useState } from "react";
import "./Hotels.css";
import hotels from "../../../../data/tourTrips";
import Pagination from "./Pagination";
import TravelCheck from "../../home/travelCheck/TravelCheck";
import { FaRegCheckCircle } from "react-icons/fa";

const Hotels = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [filters, setFilters] = useState({ location: "", distance: "", maxPeople: "" });

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const filteredHotels = hotels.filter((hotel) => {
    const matchesLocation = hotel.city.toLowerCase().includes(filters.location.toLowerCase());
    // const matchesDistance = !filters.distance || hotel.distance <= parseFloat(filters.distance);
    // const matchesMaxPeople = !filters.maxPeople || hotel.maxPeople >= parseInt(filters.maxPeople, 10);
    
    return matchesLocation ;
  }); 

  const currentPosts = filteredHotels.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="hotelMainContainer">
      <TravelCheck setFilters={setFilters} />
      <div className="hotelContainer">
        {currentPosts.length > 0 ? (
          currentPosts.map((hotel, index) => (
            <div key={index} className="hotelCards">
              <img src={hotel.photo} alt="hotelphoto" className="hotelphoto" />
              <p className="hotelcity">{hotel.city}</p>
              <p className="hoteltitle">{hotel.title}</p>
              <p className="hotelprice">
                <b>${hotel.price}</b>/per person
              </p>
              
              <button className="hotelbtn" >Book Now</button>
            </div>
          ))
        ) : (
          <p className="noTripsMessage"> <p className="noTripsMessage2" ><  FaRegCheckCircle /> </p><p className="noTripsMessage1"> Sorry,</p> <p >No trips found...!</p></p>
          
        )}
      </div>
      <Pagination
        totalPosts={filteredHotels.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Hotels;
