import React from "react";
import "../styles/Projects.css"
import { ProjectsList } from "../projects/Projects";
import githubSvg from "../svg/github.svg";
import webSvg from "../svg/web-check.svg";

function Projects() {
  return (
    <div className="Projects">
      <div className="container">
        <h2 className="Projects_head">Projects</h2>
        <p className="Projects_subhead">
          SOME OF THESE PROJECTS ARE REAL WORLD PROJECTS, SO SOME INFORMATION
          OR PAGES CANNOT BE REVEALED AS PROJECT
        </p>
      </div>
      <div className="Projects_projects_slide">
        {ProjectsList.map((project, index) => {
          return (
            <div className="Projects_project_box" key={index}>
              <div className="Projects_top_img">
                <img src={project.projectImage} alt="" />
              </div>
              <div className="Projects_bottom_textarea">
                <h3 className="Projects_project_name">{project.projectName}</h3>
                <p className="Projects_project_desc">
                  {project.projectDescription}
                </p>

                <div className="Projects_project_languages">
                  {project.languages.map((lang, index) => {
                    return (
                      <span key={index} className="Projects_language_name">
                        {lang}{" "}
                      </span>
                    );
                  })}
                </div>

                <div className="Projects_links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="Projects_live_link"
                    rel="noopener noreferrer"
                  >
                    <img src={githubSvg} alt="" />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="Projects_github_link"
                    rel="noopener noreferrer"
                  >
                    <img src={webSvg} alt="" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
