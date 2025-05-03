import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import "../styles/ProjectCard.css";

const ProjectCard = ({ title, to, image, github, website }) => {
  return (
    <div className="project-card">
      <div className="card-content">
        {image && (
          <Link to={to}>
            <img src={image} alt={title} className="card-image" />
          </Link>
        )}

        <div className="card-text">
          <Link to={to} className="card-title-link">
            <h3>{title}</h3>
          </Link>

          {(github || website) && (
            <div className="project-links">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectbtn"
                  title="GitHub repository"
                >
                  <FaGithub size={22} />
                </a>
              )}
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectbtn"
                  title="Live site"
                >
                  <CgFileDocument size={22} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
