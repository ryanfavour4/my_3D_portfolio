import React from "react";
import "../styles/BoxSection.css";
import Scene from "../mocks/Scene";
import { BoxGeometry } from "../mocks/Cube";
import { Link } from "react-router-dom";

function BoxSection() {
  return (
    <div className="BoxSection">
      <div className="container">
        <div className="BoxSection_col_2">
          <div className="BoxSection_3d_box">
            <Scene camera={{ position: [5, 5, 5], fov: 25 }}>
              <BoxGeometry />
            </Scene>
          </div>
          <div className="BoxSection_text_area">
            <h1 className="BoxSection_heading_text">
              Think outside the square space.
            </h1>
            <p className="BoxSection_subhead_text">
              Over the years web apps developed by
              <span className="HeroSection_name_gold">{" "}RYAN FAVOUR</span> has
              proven to solve most users needs more than most average 
              <span className="HeroSection_name_gold">
                {" "}FRONT END DEVELOPER.
              </span>
            </p>
{/*             <Link to="/works" className="gold_button" >See Our Works</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxSection;
