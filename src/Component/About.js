import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="hero-bg-image">
      <h1 className="intro-heading">
        CONNECT WITH PEOPLE ALL AROUND THE WORLD THROUGH USERLY. <br />
        👨‍👩‍👦‍👦 <br /> <br />
        <p className="sub-heading">Meet Our Users From All Over The World </p>
        <Link to="/User" className="btn-about" type="submit">
          Here
        </Link>
      </h1>
    </div>
  );
};

export default About;
