import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="bg-img">
        <form action="" className="form-container">
          <h1 className="login-heading">Login to see Who We Are! 👨‍👩‍👦‍👦</h1>

          <label className="email-label" htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label className="pswd-label" htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="psw"
            id="psw"
            placeholder="Enter Password"
            required
          />
          <Link to="/About" className="btn-submit" type="submit">
            LOGIN
          </Link>
        </form>
      </div>
    </>
  );
}

export default Landing;
