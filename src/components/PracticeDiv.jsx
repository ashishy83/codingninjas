import React from "react";
import '../css/practiceDiv.css'

const PracticeDiv = () => {
  return (
    <>
      <div className="practice">
        <a href="/codingstudio" className="link link1">Coding Ninjas Studio</a>
        <hr />
        <a href="/contest" className="link link2"><span>Contests</span></a>
        <a href="/guidedpaths" className="link link2 "><span>Guided Paths</span> </a>
        <a href="/problems" className="link link2" > <span>Code Problems</span></a>
        <a href="interview" className="link link2"><span>Interview Experiences</span></a>
        <a href="/tests" className="link link2"><span>Mock Tests</span></a>
      </div>
    </>
  );
};

export default PracticeDiv;
