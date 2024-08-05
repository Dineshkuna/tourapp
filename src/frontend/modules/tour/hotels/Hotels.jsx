import React from "react";
import "./Hotels.css";
import hotels from "../../../../data/tourTrips";

const Hotels = () => {
  return (
    <div className="hotelMainContainer">
      

      <div className="hotelContainer">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotelCards">
            <img src={hotel.photo} alt="hotelphoto" className="hotelphoto" />
            <p className="hotelcity">{hotel.city}</p>
            <p className="hoteltitle">{hotel.title}</p>
            <p className="hotelprice">${hotel.price}/per person</p>
            <button className="hotelbtn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
