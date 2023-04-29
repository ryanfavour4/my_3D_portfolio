import React from "react";
import "../styles/AboutMap.css";
import Map from "./Map";

const AboutMap = () => {
  const startYear = 2020;
  const currentYear = new Date().getFullYear();

  // Calculate the years of experience
  const yearsOfExperience = currentYear - startYear + 1;

  return (
    <div className="AboutMap">
      <div className="AboutMap_flex_col2">
        <div className="AboutMap_about_text">
          <div className="container">
            <h1 className="AboutMap_heading">
              About <br /> <span className="gold_text">RYAN FAVOUR.</span>
            </h1>
            <p className="AboutMap_desc">
              👋 My name is Chukwuka Ryan Favour, and I have been working as a
              front-end developer for over {yearsOfExperience} years. 🌍 Currently, I reside
              in Lagos, Nigeria. 💡 I have a passion for learning new things, 🎮
              gaming, and coding. At work, I have received numerous praises for
              my contributions to front-end projects. 👨‍💻 I am always eager to
              take on new challenges and deliver high-quality results. 💪
            </p>
          </div>
        </div>
        <div className="AboutMap_map_box">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default AboutMap;
