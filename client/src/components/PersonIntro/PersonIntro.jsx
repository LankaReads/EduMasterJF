import React from "react";
import "@/components/PersonIntro/PersonIntro.css";
import { useNavigate } from "react-router-dom";
import sirImage from "../../assets/sir.jpeg"; // Import the local image

const PersonIntro = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/about');
  };

  const handleProjects = () => {
    navigate('/projects');
  };

  return (
    <div className="intro-container container-fluid py-5">
      <div className="row align-items-center">
        {/* Left Column - Image */}
        <div className="col-lg-5 col-md-6 col-sm-12 text-center mb-4 mb-md-0">
          <img
            src={sirImage}
            alt="AI Engineer"
            className="intro-image img-fluid rounded-circle shadow-sm"
          />
        </div>
        {/* Right Column - Text Content */}
        <div className="col-lg-7 col-md-6 col-sm-12 text-center text-md-start">
          <h1 className="intro-title display-4 fw-bold text-primary">
            Jinendra Bogahawatte
          </h1>
          <h3 className="intro-subtitle mb-4 text-muted">
            <b>
              Professional researcher: <i>AI In Medicine</i>
            </b>
          </h3>
          <p className="intro-description">
            With a strong focus on transforming healthcare, Jinendra leverages AI to advance medical
            research, diagnose with precision, and personalize treatments for improved patient outcomes.
            His work contributes to creating predictive tools and enabling proactive healthcare solutions,
            revolutionizing modern medicine.
          </p>
          <div className="mt-4">
            <button
              className="btn btn-primary btn-lg me-3 shadow-sm"
              onClick={handleViewMore}
            >
              View More
            </button>
            <button
              className="btn btn-outline-primary btn-lg shadow-sm"
              onClick={handleProjects}
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonIntro;
