import React, { useState } from "react";
import registerImg from "../../../../assets/images/register.png";
import userLogo from '../../../../assets/images/user.png';
import './Registerform.css';
import axios from 'axios';

const Registerform = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log(res.data); // Handle response or redirect user

      // Clear the form after successful submission
      setFormData({
        username: '',
        email: '',
        password: ''
      });
    } catch (err) {
      console.error(err.response ? err.response.data : err.message); // Handle error
    }
  };

  return (
    <div className="registerMainContainer">
      <div className="registerContainer">
        <div className="registerImg">
          <img width={300} height={300} src={registerImg} alt="registerImg" />
        </div>
        <div className="registerForm">
          <img width={80} height={80} src={userLogo} alt="userLogo" className="userLogo" />
          <form onSubmit={onSubmit}>
            <p className="registerHead">Register</p>
            <input 
              type="text" 
              name="username" 
              placeholder="User Name" 
              className="inputemail" 
              value={username}
              onChange={onChange}
            />
            <br />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              className="inputemail" 
              value={email}
              onChange={onChange}
            />
            <br />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              className="inputPass" 
              value={password}
              onChange={onChange}
            />
            <br />
            <button type="submit" className="registerbtn">Create Account</button>
            <p className="registerNote">
              Already have an <br /> account? 
              <b className="registerNote1">Register</b>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registerform;
