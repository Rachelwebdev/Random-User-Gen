import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="main-container">
        <h1 className="header-text">Login to See Random Users</h1>
        <div className="formContainer">
          <input type="text" name="email" id="email" placeholder="Email" />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
          />
          <Link to="/User" className="btn-submit" type="submit">
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
}

export default Landing;
