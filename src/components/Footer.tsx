import React from "react";
import "../styles/Footer.css";
import mailSvg from "../svg/Mail.svg";
import phoneSvg from "../svg/PhoneIncoming.svg";
import ryanfavour from "../images/ryanfavour.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="container">
                <div className="Footer_flex_top">
                    <div className="Footer_reachout_link">
                        <p>
                            <img src={mailSvg} alt="send a mail" /> EMAIL ME :{" "}
                            <a href="mailto:rffrontendtech@gmail.com">
                                rffrontendtech@gmail.com
                            </a>
                        </p>
                        <p>
                            <img src={phoneSvg} alt="call me" /> CALL ME :{" "}
                            <a href="tel:+2349022698402">+2349022698402</a>
                        </p>
                    </div>
                    <Link to="#" className="Footer_ryanfavour_logo">
                        <img src={ryanfavour} alt="ryanfavour_logo" />
                    </Link>
                </div>
                <div className="Footer_flex_bottom">
                    <div className="Footer_3dProviders">
                        <p>Special Thanks to the 3D model providers</p>
                        <div className="Footer_supporters">
                            <a href="https://iconscout.com/3ds">Icon Scout</a>
                            <a href="https://twitter.com/realCaptainWoof">
                                Sohail Saha
                            </a>
                            <a href="https://twitter.com/lamaWebDev">
                                Lama Dev
                            </a>
                            <a href="https://uiverse.io">Ui Verse</a>
                        </div>
                    </div>
                    <p className="Footer_ryanfavour_logo">
                        © 2024 RyanFavour. All rights reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
