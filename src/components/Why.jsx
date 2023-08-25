import React from "react";
import '../css/why.css';
// import hexbox from '../assests/hex-box.svg'

const Why = () => {
  return (
    <div className="flex">
      <div className="why">
        <div className="why-left">
            <div className="left1">
                    Why Join Us?
            </div>
            <div className="left2">
                Great Students Deserve The Best Jobs.
            </div>
            <div className="left3">
                Coding Ninjas Make it Happen... 
            </div>
        </div>
        <div className="why-right">
            <div className="hex-box1" style={{display:'flex'}}>
              <div className="hex1 hex">
                  {/* <img src={hexbox} alt="blank" /> */}
                  <div className="hex-content">
                    <div className="head">
                    150+ 
                    </div>
                    <div className="subhead">
                    Students working in FAANG 
                    </div>
                  </div>
              </div>
              <div className="hex2 hex">
                  {/* <img src={hexbox} alt="" /> */}
                  <div className="hex-content">
                    <div className="head">
                    10 
                    </div>
                    <div className="subhead">
                    Students started their own companies
                    </div>
                  </div>
              </div>
            </div>
            <div className="hex-box2" style={{display:'flex'}}>
              <div className="hex3 hex">
                {/* <img src={hexbox} alt="" /> */}
                <div className="hex-content">
                    <div className="head">
                    50+ 
                    </div>
                    <div className="subhead">
                    Students having 5 Stars on CodeChef
                    </div>
                  </div>
              </div>
              <div className="hex4 hex">
                {/* <img src={hexbox} alt="" /> */}
                <div className="hex-content">
                    <div className="head">
                    100+ 
                    </div>
                    <div className="subhead">
                    Students received International Job Offers
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
