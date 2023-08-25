import React, { useState } from "react";
import "../css/enquiryForm.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const EnquiryForm = () => {
  const { register, handleSubmit } = useForm();

  const [showPopup, setShowPopup] = useState(false);

  const [formdata, setFormdata] = useState({
    phone: "",
    name: "",
    email: "",
    year: "",
  });
  // "https://cd-ninjas-back-end.vercel.app/callback"
  const onRequest = (formdata) => {
    // e.preventDefault();
    axios
    .post("http://localhost:8080/callback", { formdata })
    .then((res) => {
      setShowPopup(true);
      console.log(res)
    })
      .catch(err => {
        if(err.response){
          console.log("Server Error:",err.response)
        }
        else if (err.request) {
          // Request was made but no response received
          console.log('Request Error:', err.request);
        } else {
          // Something else triggered the error
          console.log('Error:', err.message);
        }
      });
    console.log(formdata);
  };

  const changeHandler = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        background: "#feece2",
        display: "flex",
        justifyContent: "center",
        margin: "1% 0",
      }}
    >
      <div className="querybox">
        <div className="info">
          <h2 style={{ fontWeight: "bold" }}>Have any queries?</h2>
          <h4 style={{ fontWeight: "lighter" }}>
            Get a free counselling session from our experts
          </h4>
          <h4 style={{ fontWeight: "lighter" }}>
            Call us on our toll free number
          </h4>
          <h2 style={{ fontWeight: "bold", top: "0%" }}>1800-123-3598</h2>
        </div>
        <div className="contact-form">
          <form
            onSubmit={handleSubmit(onRequest)}
            method="POST"
            action="https://cd-ninjas-back-end.vercel.app/callback"
          >
            <div className="ic">
              <input
                type="number"
                {...register("phone")}
                placeholder=" "
                required
                className="input"
                name="phone"
                onChange={changeHandler}
              />
              <div className="cut"></div>
              <label htmlFor="phone" className="placeholder">
                Contact Number
              </label>
            </div>
            <div className="ic">
              <input
                type="text"
                {...register("name")}
                placeholder=" "
                className="input"
                name="name"
                required
                onChange={changeHandler}
              />
              <div className="cut"></div>
              <label htmlFor="name" className="placeholder">
                First name
              </label>
            </div>
            <div className="ic">
              <input
                type="email"
                {...register("email")}
                required
                placeholder=" "
                className="input"
                name="email"
                onChange={changeHandler}
              />
              <div className="cut"></div>
              <label htmlFor="email" className="placeholder">
                Email
              </label>
            </div>
            <div className="ic">
              <input
                type="number"
                {...register("year")}
                required
                placeholder=" "
                className="input"
                name="year"
                onChange={changeHandler}
              />
              <div className="cut"></div>
              <label htmlFor="year" className="placeholder">
                Graduation Year
              </label>
            </div>
            <button type="submit" value="Request Call" className="btn-callback">
              Request Call
            </button>
          </form>
          {showPopup && (
            <div className="success">
              <div style={{ marginTop: "5%" }}>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </div>
              <div className="msg">
                <div>Success</div>
                <div>Form Submitted Successfully</div>
              </div>
              <div
                onClick={() => setShowPopup(false)}
                style={{ marginTop: "5%" }}
              >
                <i className="fa-sharp fa-regular fa-circle-xmark"></i>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
