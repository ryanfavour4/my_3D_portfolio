import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ryanfavour from "../images/ryanfavour.png";
import menu from "../svg/menu.svg";

const Navbar = () => {
    const [openSlide, setOpenSlide] = useState(true);
    return (
        <div className="Navbar">
            <div className="container">
                <div className="Navbar_links">
                    <Link to={"/"} className="tooltip">
                        <img
                            className="Navbar_logo"
                            src={ryanfavour}
                            alt="ryanfavour logo"
                        />
                        <span className="tooltiptext">RYAN FAVOUR</span>
                    </Link>
                    <ul
                        className={`navbar_ul ${openSlide ? "sink_up" : ""}`}
                        onClick={() => setOpenSlide((openSlide) => !openSlide)}
                    >
                        {/* <li className="Navbar_link">
              <Link className="navbar_links" to="/document">
                Documents
              </Link>
            </li> */}
                        {/* <li className="Navbar_link">
              <Link className="navbar_links" to="/hall">
                Works
              </Link>
            </li> */}
                        <li className="Navbar_link">
                            <Link className="navbar_links" to="/contact">
                                Contact
                            </Link>
                        </li>
                        <a
                            className="hire_btn first_hire_btn"
                            href="tel:+2349022698402"
                        >
                            Hire Now
                        </a>
                    </ul>
                </div>
                <div>
                    <a
                        className="hire_btn second_hire_btn"
                        href="tel:+2349022698402"
                    >
                        Hire Now
                    </a>
                    <img
                        onClick={() => setOpenSlide((openSlide) => !openSlide)}
                        src={menu}
                        className="Navbar_menu"
                        alt="navbar"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
