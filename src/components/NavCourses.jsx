import React from "react";
import "../css/navCourses.css";
import MERN from "../assests/mern.svg";
import C from "../assests/c.svg";


const NavCourses = () => {
  const courseList = [
    {
      index: 1,
      courseName: "Data Structures & Algorithms",
      image: "https://files.codingninjas.com/Group-2.svg",
      title: "Data Structures & Algorithms",
      courseInfo: [
        {
          index: 1,
          details: "Basics of Python with Data Structures and Algorithms",
          img: "https://files.codingninjas.com/python-11712.svg",
        },
        {
          index: 2,
          details: "Basics of Java with Data Structures and Algorithms",
          img: "https://files.codingninjas.com/java-11713.svg",
        },
        {
          index: 3,
          details: "Basics of C++ with Data Structures and Algorithms",
          img: "https://files.codingninjas.com/c-11714.svg",
        },
      ],
    },
    {
      index: 2,
      courseName: "Competitive Programming",
      image: "https://files.codingninjas.com/Group%203738.svg",
      title: "Competitive Programming",
      courseInfo: [
        {
          index: 1,
          details: "Competitive Programming",
          img: "https://files.codingninjas.com/competitive-programming-11703.svg",
        },
      ],
    },
    {
      index: 3,
      courseName: "Interview Preparation",
      image: "https://files.codingninjas.com/interview-prep-old-11731.svg",
      title: "Interview Preps",
      courseInfo: [
        {
          index: 1,
          details: "Product Companies Interview Prep",
          img: "https://files.codingninjas.in/service-based-companies-14528.svg",
        },
        {
          index: 2,
          details: "System Design",
          img: "https://files.codingninjas.com/system-design-12695.svg",
        },
        {
          index: 3,
          details: "DataBase Management System(DBMS) Course",
          img: "https://files.codingninjas.com/os-dbms-12694.svg",
        },
        {
          index: 4,
          details: "Operating System",
          img: "https://files.codingninjas.com/operating-system-12696.svg",
        },
        {
          index: 5,
          details: "Aptitude Preparation",
          img: "https://files.codingninjas.com/aptitude-12693.svg",
        },
      ],
    },
    {
      index: 4,
      courseName: "Analytics and Data Science",
      image: "https://files.codingninjas.com/Group.svg",
      title: "Data Analytics",
      courseInfo: [
        {
          index: 1,
          details: "Data Analytics Course",
          img: "https://files.codingninjas.in/group-7241-15644.png",
        },
        {
          index: 2,
          details: "Machine Learning",
          img: "https://files.codingninjas.com/ml-11707.svg",
        },
        {
          index: 3,
          details: "Data Science & Machine Learning",
          img: "https://files.codingninjas.com/data-science-11708.svg",
        },
      ],
    },
    {
      index: 5,
      courseName: "Web Development",
      image: "https://files.codingninjas.com/Group-3.svg",
      title: "Web Dev",
      courseInfo: [
        {
          index: 2,
          details: "MERN Stack",
          img: "https://files.codingninjas.com/mern-11710.svg",
        },
        {
          index: 3,
          details: "Frontend Web Dev- React",
          img: "https://files.codingninjas.com/react-11709.svg",
        },
      ],
    },
    {
      index: 6,
      courseName: "Career Camp",
      image:
        "https://www.codingninjas.com/assets-landing/icons/cc-header-course-icon.svg",
      title: "",
      courseInfo: [
        {
          index: 1,
          details: "Avg CTC of 6 LPA",
          img: "",
        },
        {
          index: 2,
          details: "Dedicated Placement Cell",
          img: "",
        },
        {
          index: 3,
          details: "170+ Hiring partners",
          img: "",
        },
      ],
    },
  ];

  return (
    <>
      <div className="box">
        <div className="left">
          <div className="title">Recommended Courses</div>
          <div className="sub">The most in demand courses at the moment</div>
          <div className="mern-box coursebox">
            MERN Stack <img src={MERN} alt="mern logo" />
          </div>
          <div className="cpp-box coursebox">
            Basics of C++ with Data Structures and Algorithms
            <img src={C} alt="" />
          </div>
        </div>
        <div className="right">
          <div>
            All courses <br />
            Explore our wide range of courses
          </div>
          {courseList.map((item) => (
            <div className="courses dsa" key={item.index}>
              <img src={item.image} alt="" />
              <a href="/">{item.courseName} </a>
              <div className="coursesexpand">
                <div className="c-title">{item.title}</div>
                {item.courseInfo.map((data) => (
                  <div className="coursesList" key={data.index}>
                    <a href="/">{data.details}</a>
                    <img src={data.img} alt="" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavCourses;
