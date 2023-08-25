import React from "react";
import "../css/footer.css";
// import logo from '../assests/new-logo.svg';


const Footer = () => {
  return (
    <div className="Box">
     
      <div className="Container">
        <div className="Row">
       
          <div className="Column">
          
            <div className="Heading">Coding Ninjas</div>
            <a href="/">About Us</a>
          
            <a href="/">Careers Terms & Conditions</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Pricing & Refund Policy</a>
            <a href="/">Bug Bounty</a>
            <a href="/">Our Students</a>
            <a href="/">Press Release</a>
          </div>
          <div className="Column">
            <div className="Heading">Products</div>
            <a href="/">Courses</a>
            <a href="/">Try Courses For Free</a>
            <a href="/">Career Camp</a>
            <a href="/">Mock Interviews</a>
            <a href="/">Hire Talent</a>
          </div>
          <div className="Column">
            <div className="Heading">Communinity</div>
            <a href="/">Coding Ninjas Studio</a>
            <a href="/">Blog</a>
            <a href="/">Events</a>
            <a href="/">Campus Ninja</a>
            <a href="/">Affiliate</a>
            <a href="/">Schoralship Event</a>
            <a href="/">Placement Cell</a>
          </div>
          <div className="Column">
            <div className="Heading">Follow us on</div>
            <div>
              <a href="/">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>Facebook</span>
                </i>
              </a>
              <a href="/">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
                </i>
              </a>
              <a href="/">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>Twitter</span>
                </i>
              </a>
              <a href="/">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>Youtube</span>
                </i>
              </a>
              <div >
                <div className="Heading">
                    Contact Us
                    </div>
                <div className="contact">
                  Toll Free Number- 1800-123-3598 Coding Ninjas
                  Email- contact@codingninjas.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
