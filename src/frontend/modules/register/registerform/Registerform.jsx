import React from "react";
import registerImg from "../../../../assets/images/register.png";
import userLogo from '../../../../assets/images/user.png'
import './Registerform.css'

const Registerform = () => {
  return (
    <div className="registerMainContainer">
    <div className="registerContainer" >
      <div className="registerImg">
      <img width={300} height={300} src={registerImg} alt="registerImg" />
      </div>
      <div className="registerForm">
      <img width={80} height={80} src={userLogo} alt="userLogo" className="userLogo" />
      <form>
        
        <p className="registerHead">Register</p>
        <input type="text" name="text" placeholder="User Name" className="inputemail"/>
        <br />
        <input type="email" name="email" placeholder="Email" className="inputemail"/>
        <br />
        
        <input type="password" name="password" placeholder="Password" className="inputPass" />
        <br />
        <button className="registerbtn">Create Account</button>
        <p className="registerNote">Already have an <br /> account? <b className="registerNote1">register</b></p>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Registerform;
