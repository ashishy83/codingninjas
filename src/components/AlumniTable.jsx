import React from "react";
import "../css/alumniTable.css";

const AlumniTable = () => {
  const alumniData = [
    {
      index: 1,
      title: "CS Novice to Microsoft IDC",
      description:
        "Coding Ninjas is a one stop destination for understanding data structures and building algorithms from scratch.With great quality online content and video support, difficult topics are presented in a simplified manner",
      name: "Pooja Shah",
      position: "Senior Developer",
      image: "https://ninjasfiles.s3.amazonaws.com/0000000000001236.png",
      company:"Microsoft",
    },
    {
      index: 2,
      title: "CS Novice to Microsoft IDC",
      description:
        "Coding Ninjas is a one stop destination for understanding data structures and building algorithms from scratch.With great quality online content and video support, difficult topics are presented in a simplified manner",
      name: "Pooja Shah",
      position: "Senior Developer",
      image: "https://ninjasfiles.s3.amazonaws.com/0000000000001236.png",
      company:"Microsoft",
    },
    {
      index: 3,
      title: "CS Novice to Microsoft IDC",
      description:
        "Coding Ninjas is a one stop destination for understanding data structures and building algorithms from scratch.With great quality online content and video support, difficult topics are presented in a simplified manner",
      name: "Pooja Shah",
      position: "Senior Developer",
      image: "https://ninjasfiles.s3.amazonaws.com/0000000000001236.png",
      company:"Microsoft",
    },
    {
      index: 4,
      title: "CS Novice to Microsoft IDC",
      description:
        "Coding Ninjas is a one stop destination for understanding data structures and building algorithms from scratch.With great quality online content and video support, difficult topics are presented in a simplified manner",
      name: "Pooja Shah",
      position: "Senior Developer",
      image: "https://ninjasfiles.s3.amazonaws.com/0000000000001236.png",
      company:"Microsoft",
    },
  ];

  return (
    <>
      <div className="width-container-2">
        <h2 className="section-title">14,000+ Coding Ninjas to Inspire you</h2>
        <div className="alumni-table">
          {alumniData.map((item) => (
            <div className="table-contents" key={item.index}>
              <h4 className="title">{item.title}</h4>
              <div className="description">{item.description}</div>
              <div className="name">{item.name}</div>
              <div className="position">{item.position}</div>
              <img src={item.image} alt="Alumni Logo" />
              <div className="company">{item.company}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AlumniTable;
