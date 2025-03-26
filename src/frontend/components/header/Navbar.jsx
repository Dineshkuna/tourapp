// import React from 'react'
// import logo from '../../../assets/images/logo.png'
// import { Link } from 'react-router-dom'
// import './Navbar.css'

// const Navbar = () => {
//   return (
//     <div>
//       <nav className='container'>
//         <ul className='navList'>
//             <li>
//                 <img className='logoList' width={200} height={60} src={logo} alt='logo'/>
//             </li>
//             <div className='navLink'>
//             <li className='homeList'><Link to = '/'>Home</Link></li>
//             <li className='tourList'><Link to = '/tour'>Tour</Link></li>
//             <li className='loginList'><Link to = '/login'>Login</Link></li>
//             <li className='registerList'><Link to = '/register'>Register</Link></li>
//             </div>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default Navbar





// import React, { useEffect, useState } from 'react';
// import logo from '../../../assets/images/logo.png';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Retrieve user data from localStorage on page load
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   return (
//     <div>
//       <nav className='container'>
//         <ul className='navList'>
//           <li>
//             <img className='logoList' width={200} height={60} src={logo} alt='logo' />
//           </li>
//           <div className='navLink'>
//             <li className='homeList'><Link to='/'>Home</Link></li>
//             <li className='tourList'><Link to='/tour'>Tour</Link></li>
//             {/* Conditionally render based on user's login status */}
//             {user ? (
//               <>
//                 <li className='profileList'><Link to={`/profile/${user.name}`}>Profile</Link></li>
//                 <li className='welcomeMessage'>Welcome, {user.name}</li>
//               </>
//             ) : (
//               <>
//                 <li className='loginList'><Link to='/login'>Login</Link></li>
//                 <li className='registerList'><Link to='/register'>Register</Link></li>
//               </>
//             )}
//           </div>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;






import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo3 from "../../../assets/images/logo.png";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    console.log("Navbar received user:", user);
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null); 
    navigate("/");
    setExpanded(false);
  };

  return (
    <>
      <Navbar expand="md" bg="light" className="shadow-sm fixed-top py-2" expanded={expanded}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="ms-3">
            <img src={logo3} alt="logo3" height="50"/>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbarNav"
            onClick={() => setExpanded(!expanded)}
          />

          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto d-flex align-items-center flex-wrap">
              <Nav.Link as={Link} to="/" className="mx-3 fw-bold text-dark" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/tour" className="mx-3 fw-bold text-dark" onClick={() => setExpanded(false)}>
                Tour
              </Nav.Link>

             
              {user ? (
                <>
                  <span className="mx-2 fw-bold text-dark">{user.name}</span>
                  <Button
                    onClick={handleLogout}
                    className="fw-bold text-white btn btn-danger rounded-pill px-3"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    as={Link}
                    to="/login"
                    className="mx-2 fw-bold text-white btn btn-primary rounded-pill px-3"
                    onClick={() => setExpanded(false)}
                  >
                    Login
                  </Button>
                  <Button
                    as={Link}
                    to="/register"
                    className="fw-bold text-dark btn btn-warning rounded-pill px-3"
                    onClick={() => setExpanded(false)}
                  >
                    Register
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="pt-5"></div>
    </>
  );
};

export default CustomNavbar;
