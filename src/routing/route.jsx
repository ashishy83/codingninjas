import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Courses from "../components/Courses";
import Scholarship from "../components/Scholarship";
import Community from "../components/Community";
import Practice from "../components/Practice";
import Login from "../components/Login";
import Enrollment from "../components/Enrollment"

const route = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/community" element={<Community />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/enroll-now" element={<Enrollment/>} />
      </Routes>
    </div>
  );
};

export default route;
