import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "@/components/Herosection/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container hero-container2">
      {/* Background Images */}
      <div className="row w-100 h-100 position-relative">
        <div className="col-md-6 d-flex justify-content-center align-items-center position-relative">
          <div className="background-image image1"></div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center position-relative">
          <div className="background-image image2"></div>
        </div>
      </div>

      {/* Centered Title */}
      <div className="hero-title text-center">
        <h1 className="welcome">AI in Medicine</h1>
        <h3 className="intro">Your Professional AI Solution Partner</h3>

        {/* Button to go to About page */}
        <Link to="/about">
          <button className="btn about-button mt-4">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
