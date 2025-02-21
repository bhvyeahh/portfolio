import React from "react";
import "../styles/edu.css";
import FadeIn from "./FadeIn";
import ggilogo from "../assets/logo-768x235.webp";

const Education = () => {
  return (
    <div className="all-edu-in">
      <FadeIn>
        <span id="about-main">Education</span>
      </FadeIn>
      <FadeIn>
        <hr className="centered-hr" />
      </FadeIn>

      <div className="edu-cont">
        <div className="left-edu-cont">
          <img src={ggilogo} alt="" />
        </div>

        <div className="right-edu-cont">
          <div className="right-edu-cont-1">
            <h1>Gulzar Group of Institute, Khanna</h1> <br />
          </div>
          <div className="right-edu-cont-2">
            <h2>Bachelor's of Technology </h2>
            <h3>Computer Science Engineering, 2021 - 2025</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
