import React from "react";
import "./Features.css";
import trips from "../../../../data/tourTrips";

const Features = () => {
  return (
    <div className="tripMainContainer">
      <div>
        <p className="triphead">Explore</p>
        <p className="tripdesc">Our featured tours</p>
      </div>

      <div className="tripContainer">
        {trips.map((trip, index) => (
          <div key={index} className="tripCards">
            <img src={trip.photo} alt="tripphoto" className="tripphoto" />
            <p className="tripcity">{trip.city}</p>
            <p className="triptitle">{trip.title}</p>
            <p className="tripprice"><b>${trip.price}</b>/per person</p>
            <button className="tripbtn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
