import React, { useState } from "react";
import "../css/enroll-now.css";
import PrefStudent from "./PrefStudent";
import { PrefExperience } from "./PrefStudent";

const Enrollment = () => {
  const [prefStudent, setPrefStudent] = useState(false);
  const [prefExperience, setPrefExperience] = useState(false);
  const onClickStudent = () => {
    setPrefStudent(true);
  };

  const onClickExperience = () => {
    setPrefExperience(true);
  };

  return (
    <div className="enroll-now" id="enroll-now">
      <div
        className="enroll-container"
        style={
          { display: !prefStudent ? "flex" : "none"} 
          ||
        {display : !prefExperience ? 'flex': 'none'}
        } 
      >
        <h2>What is Your Experience? </h2>
        <h5>This will help us recommend the best programs for you</h5>
        <div className="experience">
          <div className="student" onClick={onClickStudent}>
            <img
              src="https://files.codingninjas.com/student-24426.png"
              alt=""
              style={{
                width: "110px",
                height: "110px",
                alignContent: "center ",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "80%",
                alignItems: "center",
              }}
            >
              <div>
                <div>No Work</div>
                <div>Experience</div>
              </div>
              <div>
                <h2>&gt;</h2>
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                fontWeight: "lighter",
                margin: "0% 1%",
              }}
            >
              Designed as per college student schedule
            </div>
          </div>
          <div className="student" onClick={onClickExperience}>
            <img
              src="https://files.codingninjas.com/professional-24427.png"
              alt=""
              style={{ width: "110px", height: "115px" }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "80%",
                alignItems: "center",
              }}
            >
              <div>
                <div>Having Work</div>
                <div>Experience</div>
              </div>
              <div>
                <h2>&gt;</h2>
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                fontWeight: "lighter",
                margin: "0% 1%",
              }}
            >
              Designed as per working professional schedule
            </div>
          </div>
        </div>
      </div>
      {prefStudent && <PrefStudent />}
      {prefExperience && <PrefExperience />}
     
      {/* {!prefStudent ?  <PrefExperience/> : <PrefStudent/>} */}
     
    </div>
  );
};

export default Enrollment;
