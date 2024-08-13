import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi";
import { IoPeopleOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import "./TravelCheck.css";

const TravelCheck = ({ setFilters }) => {
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState("");
  const [maxPeople, setMaxPeople] = useState("");

  const handleSearch = () => {
    setFilters({ location, distance, maxPeople });
  };

  return (
    <div className="travelfeature">
      <span className="travelfeature1">
        <label className="labelLocation" htmlFor="location">
          <CiLocationOn />
          <span className="textlocation">Location</span>
        </label>
        <input
          className="inputLocation"
          type="text"
          placeholder="Where are you going?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label className="labeldistance" htmlFor="distance">
          <GiPathDistance />
          <span className="textdistance">Distance</span>
        </label>
        <input
          className="inputdistance"
          type="text"
          placeholder="Distance k/m"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />

        <label className="labelmaxpeople" htmlFor="maxPeople">
          <IoPeopleOutline />
          <span className="textmaxpeople">Max People</span>
        </label>
        <input
          className="inputmaxpeople"
          type="text"
          placeholder="0"
          value={maxPeople}
          onChange={(e) => setMaxPeople(e.target.value)}
        />

        <button className="searchbtn" onClick={handleSearch}>
          <IoSearchOutline />
        </button>
      </span>
    </div>
  );
};

export default TravelCheck;
