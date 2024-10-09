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

import React, { useEffect, useState } from 'react';
import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage on page load
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div>
      <nav className='container'>
        <ul className='navList'>
          <li>
            <img className='logoList' width={200} height={60} src={logo} alt='logo' />
          </li>
          <div className='navLink'>
            <li className='homeList'><Link to='/'>Home</Link></li>
            <li className='tourList'><Link to='/tour'>Tour</Link></li>
            {/* Conditionally render based on user's login status */}
            {user ? (
              <>
                <li className='profileList'><Link to={`/profile/${user.name}`}>Profile</Link></li>
                <li className='welcomeMessage'>Welcome, {user.name}</li>
              </>
            ) : (
              <>
                <li className='loginList'><Link to='/login'>Login</Link></li>
                <li className='registerList'><Link to='/register'>Register</Link></li>
              </>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

