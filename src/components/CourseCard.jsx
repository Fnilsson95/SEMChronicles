import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ title, to, image }) => {
  return (
    <Link to={to} className="course-card">
      <div className="card-content">
        {image && <img src={image} alt={title} className="card-image" />}
        <div className="card-text">
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
