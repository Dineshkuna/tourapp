import React from "react";
import "./Experience.css";
import experiencephoto from "../../../../assets/images/experience.png";

const Experience = () => {
  return (
    <div className="experienceContainer">
      <div className="experienceSubContainer">
        <p className="experienceheading">Experience</p>
        <p className="experiencecaption">
          With our all experience <br/> we will serve you
        </p>
        <p className="experiencedesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br /> Sit sint atquethyi veniamylies dolorum veniam aliquid at.
        </p>
        <span className="experiencedetail">
          <div>
            <p className="experienceReviewCount">12k+</p>
            <p className="experienceReview">Successfull <br/> Trips</p>
          </div>
          <div>
            <p className="experienceClientCount">2k+</p>
            <p className="experienceClienCaption">Regular <br/> clients</p>
          </div>
          <div>
            <p className="experienceCount">15</p>
            <p className="experienceCaption">Years of <br/>Experience</p>
          </div>
        </span>
      </div>

      <div>
        <img
          className="experiencePhoto"
          src={experiencephoto}
          alt="experiencephoto"
        />
      </div>
    </div>
  );
};

export default Experience;
