import React from "react";
import stars from "../assests/stars.svg";

const ReviewBox = () => {
  const data = [
    {
      index: 1,
      rating: "4.9",
      image: { stars },
      reviews: "100+ reviews",
      company: "Facebook",
    },
    {
      index: 2,
      rating: "4.9",
      image: { stars },
      reviews: "1000+ reviews",
      company: "Google",
    },
  ];
  const data2 = [
    {
      index: 3,
      rating: "50+",
      questions: "Questions Asked",
      reviews: "5000 answered",
      company: "Quora",
    },
  ];
  return (
    <>
      <div className="box" style={{ margin: "1% 0", display: "flex", justifyContent:'center', backgroundColor:'#feece2', width:'100%'}}>
        {data.map((item) => (
          <div
          key={item.index}
            className="box1"
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              backgroundColor: "#1d195e",
              width: "30%",
              margin: "1%",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <h1>{item.rating}</h1>
            <img src={item.image} alt="" />
            <h2 style={{ marginTop: "0" }}>{item.reviews} </h2>
            <h1>{item.company} </h1>
          </div>
        ))}
        {
            data2.map((item)=>(
                <div
                key={item.index}
                className="box1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                  backgroundColor: "#1d195e",
                  width: "30%",
                  margin: "1%",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <h1>{item.rating}</h1>
                <h3>{item.questions}</h3>
                <h2 style={{ marginTop: "0" }}>{item.reviews} </h2>
                <h1>{item.company} </h1>
              </div>
            ))
        }
      </div>
    </>
  );
};

export default ReviewBox;
