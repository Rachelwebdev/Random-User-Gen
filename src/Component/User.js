import React from "react";
import "./User.css";

export default function User() {
  return (
    <div>
      <div className="main-user-container">
        <h1 className="title-heading">HELLO, I AM A NEW USER 🧑</h1>
        <div className="user-box">
          <img
            className="user-image"
            src="https://randomuser.me/api/portraits/women/3.jpg"
            alt="User-profile"
          />

          <div className="user-info">
            <h2>Name: Karl Johnson </h2>
            <h2>Email: karl.johnson@example.com</h2>
            <h2>Birthday: 1966-12-17 </h2>
            <h2>Address: 6057 Avondale Ave</h2>
            <h2>Phone-No: (268) 420-4900</h2>
            <h2>Password: luan </h2>
          </div>
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
