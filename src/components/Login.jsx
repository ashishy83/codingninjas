import React from "react";
import { Link } from "react-router-dom";
import "../css/login.css";
import google from "../assests/icon-google.png";
import fb from "../assests/icon-fb.png";
import naukri from "../assests/icon-naukri.svg";
import axios from "axios";
// import Navbar from "./Navbar";

const Login = () => {
  const onLogin = (data) => {
    axios
      .post("https://cd-ninjas-back-end.vercel.app/auth/login",data,{
        headers:{
          Authorization:'Bearer CodingNinjas@beta1'
        },
        withCredentials: true,

      })
      .then((res) => console.log(res.json()))
      .catch((error) => {
        if(error.response){
          console.log("Server Error:",error.response)
        }else if(error.request){
          console.log("Request Error: ",error.request)
        }else{
          console.log("Error: ",error.message)
        }
      });
  };

  // const navi = useNavigate();
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="title">
          <span>Login / Sign Up</span>
          <div className="close">
            <i className="fa-sharp fa-regular fa-xmark"></i>
          </div>
        </div>
        <div className="link-box">
          <Link className="login-links" to={"/www.google.com/auth0/accounts"}>
            <img className="img" src={google} alt="google" /> Login with Google
          </Link>
          <Link className="login-links" to={"/www.facebook.com/auth0 /accounts"}>
            <img src={fb} alt="fb" className="img" /> Login with Facebook
          </Link>
          <Link className="login-links" to={"/www.Naukri.com/auth/accounts"}>
            <img src={naukri} alt="naukri" className="img" /> Login with Naukri
          </Link>
        </div>
        <div style={{ textAlign: "center" }}>OR</div>
        <div>Use your email address</div>
        <form method="POST" className="loginForm" onSubmit={onLogin} autoComplete="true">
          <label htmlFor="email">Email Address</label>
          <input type="email" />
          <label htmlFor="" >Password</label>
          <input type="text" /> 
          <button  type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
