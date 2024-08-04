import React, { useState, useEffect } from "react";
import "./Carousel.css";

import avatar1 from "../../../../assets/images/ava-1.jpg";
import avatar2 from "../../../../assets/images/ava-2.jpg";
import avatar3 from "../../../../assets/images/ava-3.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      name: "John Doe",
      role: "customer",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio voluptatum doloribus cum, nemo voluptatibus esse sequi labore magni sint praesentium,Distinctio voluptatum doloribus cum, nemo voluptatibus esse.",
      image: avatar1,
    },
    {
      name: "John Doe",
      role: "customer",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio voluptatum doloribus cum, nemo voluptatibus esse sequi labore magni sint praesentium,Distinctio voluptatum doloribus cum, nemo voluptatibus esse.",
      image: avatar1,
    },
    {
      name: "Cathrine Jo",
      role: "customer",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio voluptatum doloribus cum, nemo voluptatibus esse sequi labore magni sint praesentium,Distinctio voluptatum doloribus cum, nemo voluptatibus esse.",
      image: avatar2,
    },
    {
      name: "Cathrine Jo",
      role: "customer",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio voluptatum doloribus cum, nemo voluptatibus esse sequi labore magni sint praesentium,Distinctio voluptatum doloribus cum, nemo voluptatibus esse.",
      image: avatar2,
    },
    {
      name: "Peter Alice",
      role: "customer",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio voluptatum doloribus cum, nemo voluptatibus esse sequi labore magni sint praesentium,Distinctio voluptatum doloribus cum, nemo voluptatibus esse.",
      image: avatar3,
    },
    {
      name: "Peter Alice",
      role: "customer",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio voluptatum doloribus cum, nemo voluptatibus esse sequi labore magni sint praesentium,Distinctio voluptatum doloribus cum, nemo voluptatibus esse.",
      image: avatar3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="carouselContainer">
        <p className="carouselHead">Clients Love</p>
        <p className="carouselCaption">What our clients say about us</p>
      </div>
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <div className="carousel-content">
              <p>{slide.description}</p>
              <p>{slide.name}</p>
              <p>{slide.role}</p>
              <img
                width={100}
                height={80}
                src={slide.image}
                alt="clientimage"
              />
              {/* <button className="visit-button">Visit Collections</button> */}
            </div>
            <div className="carousel-content">
              <p>{slide.description}</p>
              <p>{slide.name}</p>
              <p>{slide.role}</p>
              <img
                width={100}
                height={80}
                src={slide.image}
                alt="clientimage"
              />
              {/* <button className="visit-button">Visit Collections</button> */}
            </div>
            <div className="carousel-content">
              <p>{slide.description}</p>
              <p className="carouselname">{slide.name}</p>
              <p>{slide.role}</p>
              <img
                width={100}
                height={80}
                src={slide.image}
                alt="clientimage"
              />
              {/* <button className="visit-button">Visit Collections</button> */}
            </div>
            <div className="carousel-image">
              {/* <img src={slide.image} alt={`Slide ${index + 1}`} /> */}
            </div>
          </div>
        ))}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
