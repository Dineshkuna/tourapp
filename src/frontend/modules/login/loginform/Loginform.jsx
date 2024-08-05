import React from "react";
import loginImg from "../../../../assets/images/login.png";
import userLogo from '../../../../assets/images/user.png'
import './Loginform.css'

const Loginform = () => {
  return (
    <div className="loginMainContainer">
    <div className="loginContainer" >
      <div className="loginImg">
      <img width={400} height={400} src={loginImg} alt="loginImg" />
      </div>
      <div className="loginForm">
      <img width={80} height={80} src={userLogo} alt="userLogo" className="userLogo" />
      <form>
        
        <p className="loginHead">Login</p>
        <input type="email" name="email" placeholder="Email" className="inputemail"/>
        <br />
        
        <input type="password" name="password" placeholder="Password" className="inputPass" />
        <br />
        <button className="loginbtn">Login</button>
        <p className="loginNote">Don't have an <br /> account? <b className="loginNote1">Register</b></p>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Loginform;
