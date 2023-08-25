import React from "react";
import Typewriter from "typewriter-effect";
import "../css/home.css";
import codingninja from "../assests/codeninja_pic1.webp";

import AlumniTable from "./AlumniTable";
import IntroBox from "./IntroBox";
import Why from "./Why";
import Footer from "./Footer";
import ReviewBox from "./ReviewBox";
import EnquiryForm from "./EnquiryForm";
import Enrollment from "./Enrollment";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="home">
          <div className="intro-main">
            <div className="intro">
              <div className="width-container">
                <div className="intro-container">
                  <div className="intro-content-container">
                    <div className="intro-container-inner">
                      <div className="intro-head">
                        <div className="intro-text-moving">
                          <div className="intro-text">
                            <Typewriter
                              onInit={(typewriter) => {
                                typewriter
                                  .typeString(
                                    "Chasing Jobs? Let the Jobs Chase you"
                                  )
                                  .pauseFor(1000)
                                  .deleteAll()
                                  .typeString("World Has enough coders")
                                  .pauseFor(1000)
                                  .deleteAll()
                                  .typeString("Be More than a Coder")
                                  .pause(1000)
                                  .deleteAll()
                                  .start()
                                  .start();
                              }}
                            />
                          </div>
                        </div>
                        <h2 className="intro-cn">Be a Coding Ninja</h2>
                      </div>
                      <div className="intro-num">
                        50,000 Students from 300
                        <br /> colleges have trusted us
                      </div>
                      <div className="button-container">
                        <button className="enroll-now-btn">
                          <span className="button-text">
                            Explore Our Programs
                          </span>
                          {/* <div className="focus-overlay"></div> */}
                        </button>
                      </div>
                    </div>
                    <div className="ninja">
                      <img
                        src={codingninja}
                        alt="coding ninja"
                        className="mascot-img"
                      />
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="intro-box">
              <IntroBox />
            </div>
          </div>
        </div>
      </div>

      <AlumniTable />
      <Why />
      <EnquiryForm />
      <ReviewBox />
      <Enrollment/>
      <Footer />
    </>
  );
};

export default Home;
