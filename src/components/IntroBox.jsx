import React from "react";
import boxicon1 from "../assests/boxicon1.svg";
import boxicon2 from "../assests/boxicon2.svg";
import boxicon3 from "../assests/boxicon2.svg";
import '../css/IntroBox.css';

const IntroBox = () => {
  return (
    <>
      <div className="box-container">
        <div className="box-head">
          If you have the courage and the commitment to learn coding, then
          Coding Ninjas will empower you.
        </div>
        <div className="box-subhead">NO MATTER WHAT IT TAKES!</div>
        <div className="box-points flex-display">
          <div className="firstbox flex-display">
            <img src={boxicon1} alt="" />
            <div className="box-point">
              Content Designed by IIT & Stanford Alumni
            </div>
          </div>
          <div className="midbox flex-display">
            <img src={boxicon2} alt="" />
            <div className="box-point">Instant 1:1 doubt resolution</div>
          </div>
          <div className="lastbox flex-display">
            <img src={boxicon3} alt="" />
            <div className="box-point">
              Practical learning with 100+ problems & 10+ projects in each
              course
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroBox;
