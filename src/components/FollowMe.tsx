import React from "react";
import "../styles/FollowMe.css";
import githubLogo from "../images/github.png";
import linkedinLogo from "../images/linkedin-logo.png";
import igLogo from "../images/instagram-logo.png";
import twitterLogo from "../images/twitter-logo.png";
import youtubeLogo from "../images/youtube-logo.png";
import whatsappLogo from "../images/whatsapp-logo.png";

const FollowMe = () => {
  return (
    <div className="FollowMe">
      <div className="container">
        <h2 className="FollowMe_heading">Follow Me!</h2>
        <div className="FollowMe_col_2">
          <div className="FollowMe_social_links_parent">
            <a href="https://youtube.com/@ryanfavourchukwuka6114" target="_blank" rel="noopener noreferrer">
              <img
                src={youtubeLogo}
                className="FollowMe_social_links"
                alt="social_link"
              />
            </a>
            <a href="http://wa.me/+2349022698402" target="_blank" rel="noopener noreferrer">
              <img
                src={whatsappLogo}
                className="FollowMe_social_links"
                alt="social_link"
              />
            </a>
            <a href="https://twitter.com/ryanfavour4" target="_blank" rel="noopener noreferrer">
              <img
                src={twitterLogo}
                className="FollowMe_social_links"
                alt="social_link"
              />
            </a>
            <a href="https://github.com/ryanfavour4" target="_blank" rel="noopener noreferrer">
              <img
                src={githubLogo}
                className="FollowMe_social_links"
                alt="social_link"
              />
            </a>
            <a href="https://instagram.com/ryan_favour_frontend_tech" target="_blank" rel="noopener noreferrer">
              <img
                src={igLogo}
                className="FollowMe_social_links"
                alt="social_link"
              />
            </a>
            <a href="https://linkedin.com/in/chukwuka-favour-6b094b240" target="_blank" rel="noopener noreferrer">
              <img
                src={linkedinLogo}
                className="FollowMe_social_links"
                alt="social_link"
              />
            </a>
          </div>
          <div className="FollowMe_me_image">
            <div className="FollowMe_card">
              <div className="FollowMe_imgbox">
                <div className="FollowMe_img"></div>
              </div>
              <div className="FollowMe_details">
                <h2 className="FollowMe_title">
                  Favour Ryan <br /> Chukwuka
                </h2>
                <span className="FollowMe_caption">Frontend Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowMe;
