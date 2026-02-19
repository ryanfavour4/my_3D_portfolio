import React from "react";
import "../styles/HeroSection.css";
import arrowLogo from "../images/logo.png";
import fluffPumpkin from "../images/3d-fluff-pumpkin.png";
import Scene from "../mocks/Scene";
import BlobGeometry from "../mocks/Blob";
import cv from "../doc/ryan-favour-cv.pdf";

function HeroSection() {
    return (
        <div className="HeroSection">
            <div className="container">
                <div className="HeroSection_col_2">
                    <div className="HeroSection_hero_texts">
                        <h1 className="HeroSection_title">
                            Think. Solve. Build.
                        </h1>
                        <div className="HeroSection_logo_name_flex">
                            <img
                                src={arrowLogo}
                                alt=""
                                className="HeroSection_arrow"
                            />
                            <p className="HeroSection_name_gold">Ryan Favour</p>
                        </div>
                        <p className="HeroSection_subtext">
                            Transforming Your Vision into a Stunning Website.
                        </p>
                        <div className="HeroSection_cta_btns">
                            <a className="hire_btn" href="tel:+2349022698402">
                                Call Now
                            </a>
                            <a
                                className="hire_btn outline_btn"
                                href={cv}
                                download
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="HeroSection_3d_blobs">
                        <div className="HeroSection_blob">
                            <Scene>
                                <BlobGeometry />
                            </Scene>
                        </div>
                        <img src={fluffPumpkin} alt="floating fluff pumpkin" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
