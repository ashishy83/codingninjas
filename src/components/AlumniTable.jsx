import React, { useState } from "react";
import "../css/alumniTable.css";

const AlumniTable = () => {
  const [active, setActive] = useState(0);
  // const handleToggle = (index) => setActive(index);
  const alumniData = [
    {
      title: "CS Novice to Microsoft IDC",
      description:
        "Coding Ninjas is a one stop destination for understanding data structures and building algorithms from scratch.With great quality online content and video support, difficult topics are presented in a simplified manner",
      name: "Pooja Shah",
      position: "Senior Developer",
      image: "https://ninjasfiles.s3.amazonaws.com/0000000000001236.png",
      bg1: "https://files.codingninjas.in/richa-sharma-10960-_1_-17470.webp",
      bg2: "https://files.codingninjas.com/vector-62-9991.png",
      bg3: "https://files.codingninjas.com/group-40-9996.png",
      bgColor: "var(--purple-40)",
    
    },
    {
      title: "CS Novice to Microsoft IDC",
      description:
        "Coding Ninjas is a one stop destination for understanding data structures and building algorithms from scratch.With great quality online content and video support, difficult topics are presented in a simplified manner",
      name: "Pooja Shah",
      position: "Senior Developer",
      image: "https://ninjasfiles.s3.amazonaws.com/0000000000001236.png",
      bg1: "https://files.codingninjas.in/richa-sharma-10960-_1_-17470.webp",
      bg2: "https://files.codingninjas.com/vector-62-9991.png",
      bg3: "https://files.codingninjas.com/group-40-9996.png",
      bgColor: "var(--purple-50)",
    },
    {
      title: "CS Novice to Microsoft IDC",
      description:
        "Coding Ninjas is a one stop destination for understanding data structures and building algorithms from scratch.With great quality online content and video support, difficult topics are presented in a simplified manner",
      name: "Pooja Shah",
      position: "Senior Developer",
      image: "https://ninjasfiles.s3.amazonaws.com/0000000000001236.png",
      bg1: "https://files.codingninjas.in/richa-sharma-10960-_1_-17470.webp",
      bg2: "https://files.codingninjas.com/vector-62-9991.png",
      bg3: "https://files.codingninjas.com/group-40-9996.png",
      bgColor: "var(--purple-60)",
    },
    {
      title: "CS Novice to Microsoft IDC",
      description:
        "Coding Ninjas is a one stop destination for understanding data structures and building algorithms from scratch.With great quality online content and video support, difficult topics are presented in a simplified manner",
      name: "Pooja Shah",
      position: "Senior Developer",
      image: "https://ninjasfiles.s3.amazonaws.com/0000000000001236.png",
      bg1: "https://files.codingninjas.in/richa-sharma-10960-_1_-17470.webp",
      bg2: "https://files.codingninjas.com/vector-62-9991.png",
      bg3: "https://files.codingninjas.com/group-40-9996.png",
      bgColor: 'var(--blue-40)',
    },
  ];

  return (
    <>
        <h2 className="section-title">14,000+ Coding Ninjas to Inspire you</h2>
        <section className="alumni-table">
      {/* <div className="width-container-2"> */}
          {alumniData.map((item, index) => (
            <article
              key={index}
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
              style={{ backgroundColor: `${item.bgColor} `,
                background: `url(${item.bg1}) no-repeat bottom 0 right -10px / 182px 240px `
              
              }}
            >
              {/* <img src={item.bg2} alt="" className="bg2"/> */}
              {/* <img src={item.bg3} alt="" className="bg3"/> */}
              <div className="title-data">{item.title}</div>
              <div className="description">{item.description}</div>
            <div className="details-info">
            <div className="name">{item.name}</div>
              <div className="position">{item.position}</div>
              <img src={item.image} alt="Alumni Logo" className="logoC"/>
            </div>
            </article>
          ))}
        </section>
      {/* </div> */}
    </>
  );
};

export default AlumniTable;
