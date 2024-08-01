import React from "react";
import "./Experience.css";
import experiencephoto from "../../../../assets/images/experience.png";

const Experience = () => {
  return (
    <div>
      <div>
        <p>Experience</p>
        <p>With our all experience we will serve you</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sint
          atque dolorum veniam aliquid at.
        </p>
        <p>12k+</p>
        <p>Successfull Trips</p>
        <p>2k+</p>
        <p>Regular clients</p>
        <p>15</p>
        <p>Years of Experience</p>
      </div>
      <div>
        <img src={experiencephoto} alt="experiencephoto" />
      </div>
    </div>
  );
};

export default Experience;
