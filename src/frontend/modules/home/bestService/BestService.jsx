import React from "react";
import { PiCloudSun } from "react-icons/pi";
import { FaRoute } from "react-icons/fa";
import { RiFolderSettingsLine } from "react-icons/ri";
import './BestService.css';

const serviceData = [
  {
    title: "Calculate weather",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt facere ipsa magni, velit dolor incidunt quaerat? Magni neque molestiae fuga.",
    icon: <PiCloudSun />,
  },
  {
    title: "Best tour guide",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt facere ipsa magni, velit dolor incidunt quaerat? Magni neque molestiae fuga.",
    icon: <FaRoute />,
  },
  {
    title: "Customization",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt facere ipsa magni, velit dolor incidunt quaerat? Magni neque molestiae fuga.",
    icon: <RiFolderSettingsLine />,
  },
];

const BestService = () => {
  return (
    <div className="serviceContainer">
      <div>
        <p className="serviceHeading">What we serve</p>
        <p className="serviceCaption">We offer our<br/> best services</p>
      </div>
      <span>
        {serviceData.map((service, index) => (
          <div className="serviceBox" key={index}>
            <p className="serviceIcon">{service.icon}</p>
            <p className="serviceTitle">{service.title}</p>
            <p className="serviceDescription">{service.description}</p>
          </div>
        ))}
      </span>
    </div>
  );
};

export default BestService;
