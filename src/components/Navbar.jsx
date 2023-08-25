import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../css/navbar.css";
import mainlogo from "../assests/main-logo.png";
import CommunityDiv from "./CommunityDiv";
import PracticeDiv from "./PracticeDiv";
import NavCourses from "./NavCourses";
// import Login from "./Login";
import { Link } from "react-router-dom";
import "../css/login.css";
import google from "../assests/icon-google.png";
import fb from "../assests/icon-fb.png";
import naukri from "../assests/icon-naukri.svg";

const Navbar = () => {
  const [showlogin, setShowLogin] = useState(false);

const onLogin = () => {
    setShowLogin(!showlogin);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-content">
          <div className="header-container">
            <div className="header-content middle-header">
              <div className="main-logo">
                <a href={"/"} className="passiveLink active">
                  <img src={mainlogo} alt="logo" />
                </a>
              </div>
              <div className="menu-items">
                <div className="menu-item">
                  <a href="/" className="navbar_link">
                    Home
                  </a>
                </div>
                <div className="menu-item">
                  <a href={"/courses"} className="navbar_link">
                    Courses
                  </a>
                  <div className="inner-div">
                    <NavCourses />
                  </div>
                </div>

                <div className="menu-item">
                  <a href={"/scholarship"} className="navbar_link">
                    Scholarship
                  </a>
                </div>
                <div className="menu-item">
                  <a href={"/community"} className="navbar_link">
                    Community
                  </a>
                  <div className="inner-div">
                    <CommunityDiv />
                  </div>
                </div>
                <div className="menu-item">
                  <a href={"/practice"} className="navbar_link">
                    Practice
                  </a>
                  <div className="inner-div">
                    <PracticeDiv />
                  </div>
                </div>
              </div>
            </div>
            <div className="header-content right-content">
              <div
                className="align-item-center"
                style={{ display: "flex", alignItems: "center" }}
              >
                <button className="login-btn" onClick={onLogin} >
                  Login
                </button>
                
                <button className="enroll-btn"><a href="#enroll-now" style={{color:"white"}}>Enroll Now</a></button>
              </div>
            </div>
          </div>
        </div>
      {showlogin ? 
      (  <div className="login-container">
      <div className="login-box">
        <div className="title">
        
          <div>Login</div>
          <div className="close" onClick={()=>setShowLogin(false)}>
            <i className="fa-sharp fa-regular fa-circle-xmark"></i>
          </div>
        </div>
        <div className="link-box">
          <Link className="login-links" to={"/www.google.com/auth/accounts"}>
            <img className="img" src={google} alt="google" /> Login with Google
          </Link>
          <Link className="login-links" to={"/www.facebook.com/auth/accounts"}>
            <img src={fb} alt="fb" className="img" /> Login with Facebook
          </Link>
          <Link className="login-links" to={"/www.Naukri.com/auth/accounts"}>
            <img src={naukri} alt="naukri" className= "img" /> Login with Naukri
          </Link>
        </div>
        <div style={{ textAlign: "center" }}>OR</div>
        <div>Use your email address</div>
        <form action="" className="loginForm">
          <label htmlFor="email"  className="labels">Email Address</label>
          <input type="email" className="input" required/>
          <label htmlFor="password" className="labels" required>Password</label>
          <input type="password" name="password" id="" className="input" />
          <button className="login-btn">Continue</button>
        </form>
      </div>
    </div>) : ""}
      </div>
    </>
  );
};

export default Navbar;
