import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi";
import { IoPeopleOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import "./TravelCheck.css";

const TravelCheck = () => {
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
        />

        <label className="labeldistance" htmlFor="distance">
          <GiPathDistance />
           <span className="textdistance">Distance</span>
        </label>
        <input
          className="inputdistance"
          type="text"
          placeholder="Distance k/m"
        />
        <label className="labelmaxpeople" htmlFor="maxPeople">
          <IoPeopleOutline />
           <span className="textmaxpeople">Max People</span>
        </label>
        <input className="inputmaxpeople" type="text" placeholder="0" />
        <button className="searchbtn">
          <IoSearchOutline />
        </button>
      </span>
    </div>
  );
};

export default TravelCheck;
