
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi";
import { IoPeopleOutline, IoSearchOutline } from "react-icons/io5";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const TravelCheck = ({ setFilters }) => {
  
  const [filters, setLocalFilters] = useState({
    location: "",
    distance: "",
    maxPeople: "",
  });

  
  const handleChange = (e) => {
    setLocalFilters({ ...filters, [e.target.name]: e.target.value });
  };

  
  const handleSearch = () => {
    if (filters.location.trim() || filters.distance.trim() || filters.maxPeople.trim()) {
      setFilters(filters);
    } else {
      alert("Please enter at least one search filter.");
    }
  };

  return (
    <Container fluid className="py-5 bg-light">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <div className="bg-white p-3 p-md-4 rounded-5 shadow-sm">
            <Row className="g-3 align-items-center">
              
              <Col xs={12} md={4}>
                <InputGroup>
                  <InputGroup.Text className="bg-white border-0">
                    <CiLocationOn className="text-danger" />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Where are you going?"
                    name="location"
                    value={filters.location}
                    onChange={handleChange}
                    className="border-0"
                    style={{ fontSize: "14px" }}
                  />
                </InputGroup>
              </Col>

              
              <Col xs={12} md={3}>
                <InputGroup>
                  <InputGroup.Text className="bg-white border-0">
                    <GiPathDistance className="text-danger" />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Distance k/m"
                    name="distance"
                    value={filters.distance}
                    onChange={handleChange}
                    className="border-0"
                    style={{ fontSize: "14px" }}
                  />
                </InputGroup>
              </Col>

             
              <Col xs={12} md={3}>
                <InputGroup>
                  <InputGroup.Text className="bg-white border-0">
                    <IoPeopleOutline className="text-danger" />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="0"
                    name="maxPeople"
                    value={filters.maxPeople}
                    onChange={handleChange}
                    className="border-0"
                    style={{ fontSize: "14px" }}
                  />
                </InputGroup>
              </Col>

             
              <Col xs={12} md={2} className="d-flex justify-content-center">
                <Button
                  variant="warning"
                  className="rounded-5 p-2 p-md-3"
                  onClick={handleSearch}
                  aria-label="Search for tours"
                >
                  <IoSearchOutline className="fs-5" />
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TravelCheck;





// import React, { useState } from "react";
// import { CiLocationOn } from "react-icons/ci";
// import { GiPathDistance } from "react-icons/gi";
// import { IoPeopleOutline } from "react-icons/io5";
// import { IoSearchOutline } from "react-icons/io5";
// import "./TravelCheck.css";

// const TravelCheck = ({ setFilters }) => {
//   const [location, setLocation] = useState("");
//   const [distance, setDistance] = useState("");
//   const [maxPeople, setMaxPeople] = useState("");

//   const handleSearch = () => {
//     setFilters({ location, distance, maxPeople });
//   };

//   return (
//     <div className="travelfeature">
//       <span className="travelfeature1">
//         <label className="labelLocation" htmlFor="location">
//           <CiLocationOn />
//           <span className="textlocation">Location</span>
//         </label>
//         <input
//           className="inputLocation"
//           type="text"
//           placeholder="Where are you going?"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />

//         <label className="labeldistance" htmlFor="distance">
//           <GiPathDistance />
//           <span className="textdistance">Distance</span>
//         </label>
//         <input
//           className="inputdistance"
//           type="text"
//           placeholder="Distance k/m"
//           value={distance}
//           onChange={(e) => setDistance(e.target.value)}
//         />

//         <label className="labelmaxpeople" htmlFor="maxPeople">
//           <IoPeopleOutline />
//           <span className="textmaxpeople">Max People</span>
//         </label>
//         <input
//           className="inputmaxpeople"
//           type="text"
//           placeholder="0"
//           value={maxPeople}
//           onChange={(e) => setMaxPeople(e.target.value)}
//         />

//         <button className="searchbtn" onClick={handleSearch}>
//           <IoSearchOutline />
//         </button>
//       </span>
//     </div>
//   );
// };

// export default TravelCheck;
