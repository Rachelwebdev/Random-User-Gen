import React from "react";
import "./User.css";

export default function User() {
  return (
    <div>
      <div className="main-user-container">
        <h1 className="title-heading">HELLO, I AM A NEW USER 🧑</h1>
        <div className="user-box">
          <h1>User data go in here</h1>
        </div>
        <div className="buttons">
          <button className="prev">PREV</button>
          <div className="number-buttons">
            <button className="num">1</button>
            <button className="num">2</button>
            <button className="num">3</button>
            <button className="num">4</button>
            <button className="num">5</button>
          </div>

          <button className="next">NEXT</button>
        </div>
      </div>
    </div>
  );
}
