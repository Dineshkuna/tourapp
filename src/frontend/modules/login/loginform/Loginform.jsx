// import React, { useState } from "react";
// import loginImg from "../../../../assets/images/login.png";
// import userLogo from '../../../../assets/images/user.png';
// import './Loginform.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const Loginform = ({ setLogin }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [loginName, setLoginName] = useState(''); // State for storing user name
//   const navigate = useNavigate(); // Hook for navigation

//   const { email, password } = formData;

//   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/authLogin/login', formData);
//       const { token, name } = res.data; // Extract the name from the response

//       setLogin({ token, name });
//       localStorage.setItem('user', JSON.stringify({ token, name }));

//       // Update loginName state
//       setLoginName(name);

//       // Redirect to user profile page
//       navigate(`/profile/${name}`);
//     } catch (err) {
//       console.error(err.response ? err.response.data : err.message);
//     }
//   };

//   return (
//     <div className="loginMainContainer">
//       <div className="loginContainer">
//         <div className="loginImg">
//           <img width={400} height={400} src={loginImg} alt="loginImg" />
//         </div>
//         <div className="loginForm">
//           <img width={80} height={80} src={userLogo} alt="userLogo" className="userLogo" />
//           <form onSubmit={onSubmit}>
//             <p className="loginHead">Login</p>
//             <input 
//               type="email" 
//               name="email" 
//               placeholder="Email" 
//               className="inputemail" 
//               value={email}
//               onChange={onChange}
//             />
//             <br />
//             <input 
//               type="password" 
//               name="password" 
//               placeholder="Password" 
//               className="inputPass" 
//               value={password}
//               onChange={onChange}
//             />
//             <br />
//             <button type="submit" className="loginbtn">Login</button>
//             <p className="loginNote">
//               Don't have an <br /> account? 
//               <b className="loginNote1">Register</b>
//             </p>
//             {loginName && (
//               <p className="welcomeMessage">
//                 Welcome, <b>{loginName}</b>! <a href={`/profile/${loginName}`}>Go to profile</a>
//               </p>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loginform;


// import React, { useState } from "react";
// import loginImg from "../../../../assets/images/login.png";
// import userLogo from '../../../../assets/images/user.png';
// import './Loginform.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Loginform = ({ setLogin }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [loginName, setLoginName] = useState(''); // State for storing username
//   const navigate = useNavigate(); // Hook for navigation

//   const { email, password } = formData;

//   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async e => {
//     e.preventDefault();

//     try {
//       const res = await axios.post('http://localhost:5000/api/authLogin/login', formData);
//       const { token, name } = res.data; // Extract username and token from response

//       if (token && name) {
//         setLogin({ token, name });
//         localStorage.setItem('user', JSON.stringify({ token, name }));

//         // Set loginName state to show the username
//         setLoginName(name);

//         // Redirect to profile page
//         navigate(`/profile/${name}`);
//       }
//     } catch (err) {
//       console.error('Login failed:', err.response ? err.response.data : err.message);
//     }
//   };

//   return (
//     <div className="loginMainContainer">
//       <div className="loginContainer">
//         <div className="loginImg">
//           <img width={400} height={400} src={loginImg} alt="loginImg" />
//         </div>
//         <div className="loginForm">
//           <img width={80} height={80} src={userLogo} alt="userLogo" className="userLogo" />
//           <form onSubmit={onSubmit}>
//             <p className="loginHead">Login</p>
//             <input 
//               type="email" 
//               name="email" 
//               placeholder="Email" 
//               className="inputemail" 
//               value={email}
//               onChange={onChange}
//             />
//             <br />
//             <input 
//               type="password" 
//               name="password" 
//               placeholder="Password" 
//               className="inputPass" 
//               value={password}
//               onChange={onChange}
//             />
//             <br />
//             <button type="submit" className="loginbtn">Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loginform;

// import React, { useState } from "react";
// import loginImg from "../../../../assets/images/login.png";
// import userLogo from '../../../../assets/images/user.png';
// import './Loginform.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Loginform = ({ setLogin }) => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const { email, password } = formData;

//   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/authLogin/login', formData);
//       const { token, name } = res.data;
  
//       if (token && name) {
//         setLogin({ token, name });
//         localStorage.setItem('user', JSON.stringify({ token, name }));
//         navigate(`/profile/${name}`);
//       } else {
//         console.error('Invalid response: Token or name not found');
//       }
//     } catch (err) {
//       console.error('Server error:', err.response ? err.response.data : 'No response from server');
//     }
//   };
  

//   return (
//     <div className="loginMainContainer">
//       <div className="loginContainer">
//         <div className="loginImg">
//           <img width={400} height={400} src={loginImg} alt="loginImg" />
//         </div>
//         <div className="loginForm">
//           <img width={80} height={80} src={userLogo} alt="userLogo" className="userLogo" />
//           <form onSubmit={onSubmit}>
//             <p className="loginHead">Login</p>
//             <input 
//               type="email" 
//               name="email" 
//               placeholder="Email" 
//               className="inputemail" 
//               value={email}
//               onChange={onChange}
//             />
//             <br />
//             <input 
//               type="password" 
//               name="password" 
//               placeholder="Password" 
//               className="inputPass" 
//               value={password}
//               onChange={onChange}
//             />
//             <br />
//             <button type="submit" className="loginbtn">Login</button>
//             <p className="loginNote">
//               Don't have an <br /> account? 
//               <b className="loginNote1">Register</b>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loginform;






import React, { useState } from "react";
import loginImg from "../../../../assets/images/login.png";
import userLogo from '../../../../assets/images/user.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Loginform = ({ setUser }) => { 
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); 
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
       const BASE_URL = "https://server-3-dul6.onrender.com"; 
      // const res = await axios.post('http://localhost:5000/api/authLogin/login', formData);
      const res = await axios.post(`${BASE_URL}/api/authLogin/login`, formData);
      console.log("Response from Backend:", res.data); 
      
      const { token, name } = res.data; 
  
      if (token && name) {
        localStorage.setItem('user', JSON.stringify({ token, name })); 
        setUser({ token, name }); 

        navigate('/'); 
      } else {
        console.error('Invalid response: Token or name not found');
      }
    } catch (err) {
      console.error('Login failed:', err.response ? err.response.data : err.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-start" style={{ minHeight: '100vh', marginTop: '90px' }}>
      <div className="row shadow-lg rounded bg-white p-4 w-100" style={{ maxWidth: '700px' }}>
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
          <img src={loginImg} alt="Login" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center p-4 bg-warning rounded-end">
          <img src={userLogo} alt="User" className="mb-3" style={{ width: '80px', height: '80px' }} />
          <form onSubmit={onSubmit} className="w-100">
            <h2 className="text-white text-center mb-3">Login</h2>
            <div className="mb-3">
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                className="form-control" 
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                className="form-control" 
                value={password}
                onChange={onChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-dark w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginform;

