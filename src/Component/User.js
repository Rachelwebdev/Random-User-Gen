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
            <span>Name:</span> {user.name.title} {user.name.first}
            {user.name.last}
          </p>
          <p>
            <span>Email: </span>
            {user.email}
          </p>
          <p>
            <span>Birthday:</span>
            {dateOfBirth}
          </p>
          <p>
            <span> Address: </span>
            <span>{user.location.street.number}</span>
            {user.location.street.name}
          </p>
          <p>
            <span>Phone:</span>
            {user.phone} 420-4900
          </p>
        </div>
      </div>
    </div>
  );
}
