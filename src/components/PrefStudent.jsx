import React, { useState } from "react";
// import {Link} from 'react-router-dom';
import "../css/prefStudent-Exp.css";

const PrefStudent = () => {
  const [courseDetails, setCourseDetails] = useState(false);

  const handleClickCourses = () => {
    setCourseDetails(!courseDetails);
  };

  const [courseCpp, setCourseCpp] = useState(false);

  const handleClickCoursesCpp = () => {
    setCourseCpp(!courseCpp);
  };


  const features = [
    {
      id: 1,
      image: "✓",
      description: "Placement Preparation with Industry Experts",
    },
    {
      id: 2,
      image: "✓",
      description: "Instant doubt support",
    },
    {
      id: 3,
      image: "✓",
      description: "1:1 Sessions with mentors from MAANG",
    },
    {
      id: 4,
      image: "✓",
      description: "Hirist Spotlight account",
    },
    {
      id: 5,
      image: "✓",
      description: "Workshops for building your resume, LinkedIn & GitHub",
    },
    {
      id: 6,
      image: "✓",
      description: "2 Months Free Extension post course completion",
    },
    {
      id: 7,
      image: "✓",
      description: "DSA based product companies Mock Test Series",
    },
  ];

  return (
    <div className="studentPref" >
      <div className="heading-courses1">Courses Specially Curated For You</div>
      <div className="heading-courses2">
        No Work Experience
        <a href="enroll-now" style={{ color: "orangered" }}>
          &nbsp;Edit Your Preference
        </a>
      </div>
      <div>Recommended Courses for Students</div>
      <div className="student-courses" >
        <div className="course-student" onClick={handleClickCourses}>
          <div className="course-heading">Full Stack</div>
          <div className="name-img">
            MERN Stack
            <img
              src="https://files.codingninjas.com/mern-22525.png"
              alt=""
              style={{ width: "40px", height: "30px" }}
            />
          </div>
          <div className="rating">
            <div>
              <img
                src="https://files.codingninjas.in/vector-1-19336.svg"
                alt=""
                className="img"
                style={{ height: "20px", width: "20px" }}
              />
              &nbsp;140+ Hours&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div>
              <img
                src="https://files.codingninjas.in/mdi_palette-swatch-19337.svg"
                alt=""
                className="img"
                style={{ height: "20px", width: "20px" }}
              />
              6+ Projects
            </div>
          </div>
          <div>
            4.8
            <img
              src="https://files.codingninjas.in/star_vector-20760.png"
              alt=""
              className="img"
              style={{ height: "18px", width: "18px" }}
            />
            (17k+ Students)
          </div>
        </div>
        <div className="course-student" onClick={handleClickCoursesCpp}>
          <div className="course-heading">Data Structures & Algorithms</div>
          <div className="name-img">
            Basics of C++ with Data Structures and Algorithms
            <img src="https://files.codingninjas.com/c-11714.svg" alt="" />
          </div>
          <div className="rating">
            <div>
              <img
                src="https://files.codingninjas.in/vector-1-19336.svg"
                alt=""
                className="img"
                style={{ height: "20px", width: "20px" }}
              />
              &nbsp;60+ Hours&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div>
              <img
                src="https://files.codingninjas.in/mdi_palette-swatch-19337.svg"
                alt=""
                className="img"
                style={{ height: "20px", width: "20px" }}
              />
              350+ Problems
            </div>
          </div>
          <div>
            4.8
            <img
              src="https://files.codingninjas.in/star_vector-20760.png"
              alt=""
              className="img"
              style={{ height: "18px", width: "18px" }}
            />
            (17k+ Students)
          </div>
        </div>
      </div>
      {courseDetails && (
        <div
          style={{
            // display: "flex",
            display: 'flex',
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"

          }}
        >
          <div className="course-title">
            <div className="course-title-left">
              <div className="for-student">FOR STUDENTS</div>
              <div className="course-title-heading2">
                Full Stack Web Development Course — MERN Stack
              </div>
              <div className="course-title-heading3">
                Learn to build entire web applications from start to finish on
                one of the most versatile tech stacks : MongoDB, Express.js,
                React.js and Node.js (MERN stack)
              </div>
              <a href="#course-plan">
                <button className="course-title-btn">
                  Enroll Now
                  <img
                    src="https://files.codingninjas.in/icon-1-20333.svg"
                    alt=""
                  />
                </button>
              </a>
              <div className="course-title-rating">
                <div className="course-title-boxes">
                  <div className="boxes-heading1">
                    4.8
                    <img
                      src="https://files.codingninjas.in/star_vector-20760.png"
                      alt=""
                      style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "1px",
                      }}
                    />
                  </div>
                  <div className="boxes-heading2">13k+ Learners enrolled</div>
                </div>
                <div className="course-title-boxes">
                  <div className="boxes-heading1">140+</div>
                  <div className="boxes-heading2">Hours of lectures</div>
                </div>
                <div className="course-title-boxes">
                  <div className="boxes-heading1">6+</div>
                  <div className="boxes-heading2">Projects</div>
                </div>
              </div>
            </div>
            <div className="course-title-right">
              <img
                src="https://files.codingninjas.com/hero-image-25150.webp"
                alt=""
                style={{ width: "90%", height: "100%" }}
              />
            </div>
          </div>
          <div className="course-plan" id="course-plan">
            <div className="course-plan-heading1">Our Plan</div>
            <div className="course-plan-heading2">Specially designed for Students like you</div>
            <div className="course-plan-heading3">Features in all plans</div>
            <div className="course-plan-features">
              <div className="course-plan-list">
                {features.map((item) => (
                  <div className="feature-points" key={item.index}>
                    {/* <div className="feature-points-box"> */}
                      <span className="green" style={{ color: "green" }}>
                        {item.image}
                      </span>
                      {item.description}
                    {/* </div> */}
                  </div>
                ))}
              </div>
              <div className="course-plan-premium">
                <div className="course-plan-h1">Premium</div>
                <div className="course-plan-h2">Full Stack Web Development Course — MERN Stack</div>
                <div className="curriculum">
                  Curriculum <span>View full curriculum</span>
                </div>
                <div className="feature-points size-small">
                  <span className="green">✓</span>
                  Introduction to Programming
                </div>
                <div className="feature-points size-small">
                  <span className="green">✓</span>
                  Full Stack Web Development Course — MERN Stack
                </div>
                <div className="off-price">₹24,999</div> 
                <div className="o-price">₹29,998</div>
                <div className="emi">EMI starting at ₹3,499/m</div>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      )}

{courseCpp && (
        <div
          style={{
            // display: "flex",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="course-title">
            <div className="course-title-left">
              <div className="for-student">FOR STUDENTS</div>
              <div className="course-title-heading2">
                Basics of C++ with Data Structures and Algorithms
              </div>
              <div className="course-title-heading3">
              For Beginners and Experienced Learners
              </div>
              <a href="#course-plan">
                <button className="course-title-btn">
                  Enroll Now
                  <img
                    src="https://files.codingninjas.in/icon-1-20333.svg"
                    alt=""
                  />
                </button>
              </a>
              <div className="course-title-rating">
                <div className="course-title-boxes">
                  <div className="boxes-heading1">
                    4.8
                    <img
                      src="https://files.codingninjas.in/star_vector-20760.png"
                      alt=""
                      style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "1px",
                      }}
                    />
                  </div>
                  <div className="boxes-heading2">30k+ Learners enrolled</div>
                </div>
                <div className="course-title-boxes">
                  <div className="boxes-heading1">60+</div>
                  <div className="boxes-heading2">Hours of lectures</div>
                </div>
                <div className="course-title-boxes">
                  <div className="boxes-heading1">350+</div>
                  <div className="boxes-heading2">Problems</div>
                </div>
              </div>
            </div>
            <div className="course-title-right">
              <img
                src="https://files.codingninjas.com/hero-image-25150.webp"
                alt=""
                style={{ width: "90%", height: "100%" }}
              />
            </div>
          </div>
          <div className="course-plan" id="course-plan">
            <div className="course-plan-heading1">Our Plan</div>
            <div className="course-plan-heading2">
              Specially designed for Students like you
            </div>
            <div className="course-plan-heading3">Features in all plans</div>
            <div className="course-plan-features">
              <div className="course-plan-list">
                {features.map((item) => (
                  <div className="feature-points" key={item.index}>
                    {/* <div className="feature-points-box"> */}
                    <span className="green" style={{ color: "green" }}>
                      {item.image}
                    </span>
                    {item.description}
                    {/* </div> */}
                  </div>
                ))}
              </div>
              <div className="course-plan-premium">
                <div className="course-plan-h1">Premium</div>
                <div className="course-plan-h2">
                Basics of C++ with Data Structures and Algorithms
                </div>
                <div className="curriculum">
                  Curriculum <span>View full curriculum</span>
                </div>
                <div className="feature-points size-small">
                  <span className="green">✓</span>
                  Introduction to Programming
                </div>
                <div className="feature-points size-small">
                  <span className="green">✓</span>
                  Basics of C++ with Data Structures and Algorithms
                </div>
                <div className="off-price">₹13,999</div>
                <div className="o-price">₹16,998</div>
                <div className="emi">EMI starting at ₹3,499/m</div>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PrefStudent;

export const PrefExperience = () => {
  const [courseDetails, setCourseDetails] = useState(false);

  const handleClickCourses = () => {
    setCourseDetails(!courseDetails);
  };
  const [courseCpp, setCourseCpp] = useState(false);

  const handleClickCoursesCpp = () => {
    setCourseCpp(!courseCpp);
  };
  const features = [
    {
      id: 1,
      image: "✓",
      description: "Placement Preparation with Industry Experts",
    },
    {
      id: 2,
      image: "✓",
      description: "Instant doubt support",
    },
    {
      id: 3,
      image: "✓",
      description: "1:1 Sessions with mentors from MAANG",
    },
    {
      id: 4,
      image: "✓",
      description: "Hirist Spotlight account",
    },
    {
      id: 5,
      image: "✓",
      description: "Workshops for building your resume, LinkedIn & GitHub",
    },
    {
      id: 6,
      image: "✓",
      description: "2 Months Free Extension post course completion",
    },
    {
      id: 7,
      image: "✓",
      description: "DSA based product companies Mock Test Series",
    },
  ];

  return (
    <div className="studentPref">
      <div className="heading-courses1">Courses Specially Curated For You</div>
      <div className="heading-courses2">
        No Work Experience
        <a href="enroll-now" style={{ color: "orangered" }}>
          &nbsp;Edit Your Preference
        </a>
      </div>
      <div className="heading-courses3">
        Recommended Courses for Professionals
      </div>
      <div className="student-courses" onClick={handleClickCourses}>
        <div className="course-student">
          <div className="course-heading">Full Stack</div>
          <div className="name-img">
            MERN Full Stack Web Development
            <img src="https://files.codingninjas.com/mern-22525.png" alt="" />
          </div>
          <div className="rating">
            <div>
              <img
                src="https://files.codingninjas.in/vector-1-19336.svg"
                alt=""
                className="img"
                style={{ height: "20px", width: "20px" }}
              />
              &nbsp;170+ Hours&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div>
              <img
                src="https://files.codingninjas.in/mdi_palette-swatch-19337.svg"
                alt=""
                className="img"
                style={{ height: "20px", width: "20px" }}
              />
              6+ Projects
            </div>
          </div>
          <div>
            4.8
            <img
              src="https://files.codingninjas.in/star_vector-20760.png"
              alt=""
              className="img"
              style={{ height: "18px", width: "18px" }}
            />
            (17k+ Students)
          </div>
        </div>
        <div className="course-student"  onClick={handleClickCoursesCpp} >
          <div className="course-heading">Data Structures & Algorithms</div>
          <div className="name-img">
            Data Structures & Algorithms in Python
            <img src="https://files.codingninjas.com/python-11712.svg" alt="" />
          </div>
          <div className="rating">
            <div>
              <img
                src="https://files.codingninjas.in/vector-1-19336.svg"
                alt=""
                className="img"
                style={{ height: "20px", width: "20px" }}
              />
              &nbsp;60+ Hours&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div>
              <img
                src="https://files.codingninjas.in/mdi_palette-swatch-19337.svg"
                alt=""
                className="img"
                style={{ height: "20px", width: "20px" }}
              />
              350+ Problems
            </div>
          </div>
          <div>
            4.8
            <img
              src="https://files.codingninjas.in/star_vector-20760.png"
              alt=""
              className="img"
              style={{ height: "18px", width: "18px" }}
            />
            (17k+ Students)
          </div>
        </div>
      </div>
      {courseDetails && (
        <div
          style={{
            // display: "flex",
            display: 'flex',
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"

          }}
        >
          <div className="course-title">
            <div className="course-title-left">
              <div className="for-student">FOR PROFESSIONALS</div>
              <div className="course-title-heading2">
                Full Stack Web Development Course — MERN Stack
              </div>
              <div className="course-title-heading3">
                Learn to build entire web applications from start to finish on
                one of the most versatile tech stacks : MongoDB, Express.js,
                React.js and Node.js (MERN stack)
              </div>
              <a href="#course-plan">
                <button className="course-title-btn">
                  Enroll Now
                  <img
                    src="https://files.codingninjas.in/icon-1-20333.svg"
                    alt=""
                  />
                </button>
              </a>
              <div className="course-title-rating">
                <div className="course-title-boxes">
                  <div className="boxes-heading1">
                    4.8
                    <img
                      src="https://files.codingninjas.in/star_vector-20760.png"
                      alt=""
                      style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "1px",
                      }}
                    />
                  </div>
                  <div className="boxes-heading2">25k+ Learners enrolled</div>
                </div>
                <div className="course-title-boxes">
                  <div className="boxes-heading1">170+</div>
                  <div className="boxes-heading2">Hours of lectures</div>
                </div>
                <div className="course-title-boxes">
                  <div className="boxes-heading1">6+</div>
                  <div className="boxes-heading2">Projects</div>
                </div>
              </div>
            </div>
            <div className="course-title-right">
              <img
                src="https://files.codingninjas.com/hero-image-25150.webp"
                alt=""
                style={{ width: "90%", height: "100%" }}
              />
            </div>
          </div>
          <div className="course-plan" id="course-plan">
            <div className="course-plan-heading1">Our Plan</div>
            <div className="course-plan-heading2">Specially designed for Students like you</div>
            <div className="course-plan-heading3">Features in all plans</div>
            <div className="course-plan-features">
              <div className="course-plan-list">
                {features.map((item) => (
                  <div className="feature-points" key={item.index}>
                    {/* <div className="feature-points-box"> */}
                      <span className="green" style={{ color: "green" }}>
                        {item.image}
                      </span>
                      {item.description}
                    {/* </div> */}
                  </div>
                ))}
              </div>
              <div className="course-plan-premium">
                <div className="course-plan-h1">Premium</div>
                <div className="course-plan-h2">Full Stack Web Development Course — MERN Stack</div>
                <div className="curriculum">
                  Curriculum <span>View full curriculum</span>
                </div>
                <div className="feature-points size-small">
                  <span className="green">✓</span>
                  Introduction to Programming
                </div>
                <div className="feature-points size-small">
                  <span className="green">✓</span>
                  Full Stack Web Development Course — MERN Stack
                </div>
                <div className="off-price">₹21,999</div> 
                <div className="o-price">₹27,2x99</div>
                <div className="emi">EMI starting at ₹3,499/m</div>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {courseCpp && (
        <div
          style={{
            // display: "flex",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="course-title">
            <div className="course-title-left">
              <div className="for-student">FOR STUDENTS</div>
              <div className="course-title-heading2">
                Basics of C++ with Data Structures and Algorithms
              </div>
              <div className="course-title-heading3">
              For Beginners and Experienced Learners
              </div>
              <a href="#course-plan">
                <button className="course-title-btn">
                  Enroll Now
                  <img
                    src="https://files.codingninjas.in/icon-1-20333.svg"
                    alt=""
                  />
                </button>
              </a>
              <div className="course-title-rating">
                <div className="course-title-boxes">
                  <div className="boxes-heading1">
                    4.8
                    <img
                      src="https://files.codingninjas.in/star_vector-20760.png"
                      alt=""
                      style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "1px",
                      }}
                    />
                  </div>
                  <div className="boxes-heading2">30k+ Learners enrolled</div>
                </div>
                <div className="course-title-boxes">
                  <div className="boxes-heading1">60+</div>
                  <div className="boxes-heading2">Hours of lectures</div>
                </div>
                <div className="course-title-boxes">
                  <div className="boxes-heading1">350+</div>
                  <div className="boxes-heading2">Problems</div>
                </div>
              </div>
            </div>
            <div className="course-title-right">
              <img
                src="https://files.codingninjas.com/hero-image-25150.webp"
                alt=""
                style={{ width: "90%", height: "100%" }}
              />
            </div>
          </div>
          <div className="course-plan" id="course-plan">
            <div className="course-plan-heading1">Our Plan</div>
            <div className="course-plan-heading2">
              Specially designed for Students like you
            </div>
            <div className="course-plan-heading3">Features in all plans</div>
            <div className="course-plan-features">
              <div className="course-plan-list">
                {features.map((item) => (
                  <div className="feature-points" key={item.index}>
                    {/* <div className="feature-points-box"> */}
                    <span className="green" style={{ color: "green" }}>
                      {item.image}
                    </span>
                    {item.description}
                    {/* </div> */}
                  </div>
                ))}
              </div>
              <div className="course-plan-premium">
                <div className="course-plan-h1">Premium</div>
                <div className="course-plan-h2">
                Basics of C++ with Data Structures and Algorithms
                </div>
                <div className="curriculum">
                  Curriculum <span>View full curriculum</span>
                </div>
                <div className="feature-points size-small">
                  <span className="green">✓</span>
                  Introduction to Programming
                </div>
                <div className="feature-points size-small">
                  <span className="green">✓</span>
                  Basics of C++ with Data Structures and Algorithms
                </div>
                <div className="off-price">₹13,999</div>
                <div className="o-price">₹16,998</div>
                <div className="emi">EMI starting at ₹3,499/m</div>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
