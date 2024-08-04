import React from "react";
import "./Subscribe.css";
import maleTour from '../../../assets/images/male-tourist.png'

const Subscribe = () => {
  return (
    <div className="subscribeContainer">
      <div className="subscribeSubContainer" >
        <p className="subscribeCaption">Subscribe now for usefull <br/> travelling information.</p>
        < input type="text" placeholder="Enter your email" className="subscribeInput"/>
        <button className="subscribeBtn">Subscribe</button>
        <p className="subscribeDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Officiis
          optio dicta excepturi dolores ad dolore!
        </p>
      </div>
      <div>
        < img src={maleTour} alt="maleTour" className="subscribeImg" />
      </div>
    </div>
  );
};

export default Subscribe;
