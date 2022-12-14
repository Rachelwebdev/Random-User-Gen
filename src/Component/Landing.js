import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

function Landing({ count, setCount }) {
  if (count === 5) {
    throw new Error("HAHAHA! YOU STEPPED ON A TIME BOMB! ๐");
  }

  return (
    <>
      <div className="landing-main-container">
        <img
          className="landing-image"
          src="./images/landing-img.jpg"
          alt="Group of people"
        />
        <form action="" className="form-container">
          <h1 className="login-heading">Login to see Who We Are! ๐จโ๐ฉโ๐ฆโ๐ฆ</h1>
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
          <button onClick={() => setCount(count + 1)} className="btn-error">
            TIME BOMB ๐งจ <br />
            <span className="count">{count}</span>
          </button>
        </form>
      </div>
    </>
  );
}

export default Landing;
