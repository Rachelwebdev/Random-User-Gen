import React from "react";
import "./User.css";

export default function User({ user, loading }) {
  const shortenedDate = user.dob.date;
  const dateOfBirth = shortenedDate.slice(0, 10);
  return (
    <div className="main-user-container">
      <div className="user-box">
        <img
          className="user-image"
          src={user.picture.large}
          alt="User-profile"
        />

        <div className="user-info">
          <p>
            Name: {user.name.title} {user.name.first} {user.name.last}
          </p>
          <p>Email: {user.email}</p>
          <p>Birthday: {dateOfBirth} </p>
          <p>
            Address: {user.location.street.number}
            {user.location.street.name}
          </p>
          <p>Phone-No: {user.phone} 420-4900</p>
          <p>Password: {user.login.password} </p>
        </div>
      </div>
    </div>
  );
}
