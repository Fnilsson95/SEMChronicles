import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import "../styles/ProjectCard.css";

/**
 * ProjectCard - Same as CourseCard but with optional
 * Github / Website buttons/link
 *
 *
 * Props:
 * - title  - string - display name
 * - to     - string - internal route for <Link>
 * - image  - string - thumbnail src
 * - github - string - external repo URL
 */

const ProjectCard = ({ title, to, image, github, website }) => {
  return (
    <Link to={to} className="project-card">
      <div className="card-content">
        {image && <img src={image} alt={title} className="card-image" />}

        <div className="card-text">
          <h3>{title}</h3>

          {(github || website) && (
            <div className="project-links">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  title="Live site"
                >
                  <CgFileDocument size={22} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
