import React, { useState } from "react";
import registerImg from "../../../../assets/images/register.png";
import userLogo from "../../../../assets/images/user.png";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Registerform = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const { username, email, password } = formData;
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      //  const BASE_URL = "https://tourappserver.onrender.com"; 
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      // const res = await axios.post(`${BASE_URL}/api/auth/register`, formData);
      console.log(res.data);
      setFormData({ username: "", email: "", password: "" });
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "calc(100vh - 100px)", marginTop: "100px" }}>
      <div className="card shadow-lg p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <div className="row g-0">
          {/* Left Image Section */}
          <div className="col-md-5 d-none d-md-flex align-items-center justify-content-center">
            <img src={registerImg} alt="Register" className="img-fluid" />
          </div>
          
          {/* Right Form Section */}
          <div className="col-md-7 d-flex flex-column align-items-center bg-warning p-4">
            <img src={userLogo} alt="User" className="mb-3" width={70} height={70} />
            <h4 className="text-white mb-3">Register</h4>
            <form onSubmit={onSubmit} className="w-100">
              <div className="mb-3">
                <input type="text" name="username" placeholder="User Name" className="form-control" value={username} onChange={onChange} />
              </div>
              <div className="mb-3">
                <input type="email" name="email" placeholder="Email" className="form-control" value={email} onChange={onChange} />
              </div>
              <div className="mb-3">
                <input type="password" name="password" placeholder="Password" className="form-control" value={password} onChange={onChange} />
              </div>
              <button type="submit" className="btn btn-dark w-100 py-2">Create Account</button>
            </form>
            <p className="text-white mt-3">
              Already have an account? <Link to="/login" className="text-dark fw-bold">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registerform;


// import React, { useState } from "react";
// import registerImg from "../../../../assets/images/register.png";
// import userLogo from '../../../../assets/images/user.png';
// import './Registerform.css';
// import axios from 'axios';

// const Registerform = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });

//   const { username, email, password } = formData;

//   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/register', formData);
//       console.log(res.data); // Handle response or redirect user

//       // Clear the form after successful submission
//       setFormData({
//         username: '',
//         email: '',
//         password: ''
//       });
//     } catch (err) {
//       console.error(err.response ? err.response.data : err.message); // Handle error
//     }
//   };

//   return (
//     <div className="registerMainContainer">
//       <div className="registerContainer">
//         <div className="registerImg">
//           <img width={300} height={300} src={registerImg} alt="registerImg" />
//         </div>
//         <div className="registerForm">
//           <img width={80} height={80} src={userLogo} alt="userLogo" className="userLogo" />
//           <form onSubmit={onSubmit}>
//             <p className="registerHead">Register</p>
//             <input 
//               type="text" 
//               name="username" 
//               placeholder="User Name" 
//               className="inputemail" 
//               value={username}
//               onChange={onChange}
//             />
//             <br />
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
//             <button type="submit" className="registerbtn">Create Account</button>
//             <p className="registerNote">
//               Already have an <br /> account? 
//               <b className="registerNote1">Register</b>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registerform;
