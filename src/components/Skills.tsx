import React from "react";
import "../styles/Skills.css"
import languages from "../languages/Languages.json";

function Skills() {
  return (
    <div className="Skills">
      <div className="container">
      <h1 className="Skills_heading">Skills.</h1>
      </div>
      <div className="whole_height">
        {languages.map(({ className, Language }) => {
          return (
            <div key={className} className="box">
              <div className={`${className} Skills_background_patch`}></div>
              <h1>{Language}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
