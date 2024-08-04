import React from "react";
import "./Footer.css";
import logo from "../../../assets/images/logo.png";
import { BsPersonGear } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src={logo} alt="Booking Engine Logo" className="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            natus!
          </p>
          <div className="social-icons">
            <BsPersonGear />
            <GrGithub />
            <BiLogoLinkedin />
            <FaInstagram />
          </div>
        </div>

        <div className="footer-section">
          <h3>Discover</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/tour">Tour</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            <strong>Address:</strong> Kphb, Hyderabad
          </p>
          <p>
            <strong>Email:</strong> dineshkuna134@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +91 8688542404
          </p>
        </div>
      </div>

      <div className="copyright">
        <p>
          Copyright 2024, Design and develop by Dinesh Kuna. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
