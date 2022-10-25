import React from "react";
import "./About.css";
import { Link, Outlet } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="hero-bg-image">
      <h1 className="intro-heading">
        CONNECT WITH PEOPLE ALL AROUND THE WORLD THROUGH USERLY. <br />
        👨‍👩‍👦‍👦 <br /> <br />
        <p className="sub-heading">Meet Our Users From All Over The World </p>
        <div className="button-container">
          <Link
            to="/about/user"
            className="btn-about button-users"
            type="submit"
          >
            USERS
            <span className="icon-arrow">
              <BsFillArrowRightSquareFill />
            </span>
          </Link>
          <Link to="/about/register" className="btn-about" type="submit">
            REGISTER
            <span className="icon-arrow">
              <BsFillArrowRightSquareFill />
            </span>
          </Link>
        </div>
        <Outlet />
      </h1>
    </div>
  );
};

export default About;
