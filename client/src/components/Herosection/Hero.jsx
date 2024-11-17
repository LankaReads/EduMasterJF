import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container hero-container2">
      {/* Background Images in Left and Right Columns */}
      <div className="background-image image1"></div>
      <div className="background-image image2"></div>

      {/* Centered Title */}
      <div className="hero-title mt-20">
        <h1 className="welcome">AI in Medicine</h1>
        <h3 className="intro">Your Professional AI Solution partner</h3>
        
        {/* Button to go to About page */}
        <Link to="/about">
          <button className="about-button">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
