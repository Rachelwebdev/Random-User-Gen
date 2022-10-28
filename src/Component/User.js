import React from "react";
import "./User.css";

export default function User({ user, loading }) {
  const shortenedDate = user.dob.date;
  const dateOfBirth = shortenedDate.slice(0, 10);
  return (
    <>
      <div id="main-card">
        <div class="cover-photo"></div>
        <div class="photo">
          <img className="avatar" src={user.picture.large} alt="avatar" />
        </div>
        <div class="content">
          <h2 class="name">
            {user.name.title}
            <span className="first_name">{user.name.first}</span>
            {user.name.last}
          </h2>
          <p class="email">{user.email}</p>
          <div className="icons-container">
            <div className="phone-container">
              <img
                className="icons phone-icon"
                src="/images/phone-img.png"
                alt="phone"
              />
              <p className="phone-number-text">{user.phone}</p>
            </div>
            <div className="location-container">
              <img
                className="icons location-icon"
                src="/images/location-img.png"
                alt="location"
              />
              <p className="location-number-text">
                <span className="street-num">
                  {user.location.street.number}
                </span>
                {user.location.street.name}
              </p>
            </div>
            <div className="calender-container">
              <img
                className="icons birthday-icon"
                src="/images/calender-img.png"
                alt="birthday"
              />
              <p className="dob-number-text">{dateOfBirth}</p>
            </div>
          </div>
          <div className="icon-text"></div>
        </div>
      </div>
    </>
  );
}
