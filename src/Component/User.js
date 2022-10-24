import React from "react";
import "./User.css";

export default function User({ user, loading }) {
  const shortenedDate = user.dob.date;
  const dateOfBirth = shortenedDate.slice(0, 10);
  return (
    <div>
      <div className="main-user-container">
        {/* {apiError && (
          <div>{`There is a problem fetching the post data - ${apiError}`}</div>
        )} */}

        <div className="user-box">
          <>
            <img
              className="user-image"
              src={user.picture.large}
              alt="User-profile"
            />

            <div className="user-info">
              <h2>
                Name: {user.name.title} {user.name.first} {user.name.last}
              </h2>
              <h2>Email: {user.email}</h2>
              <h2>Birthday: {dateOfBirth} </h2>
              <h2>
                Address: {user.location.street.number}
                {user.location.street.name}
              </h2>
              <h2>Phone-No: {user.phone} 420-4900</h2>
              <h2>Password: {user.login.password} </h2>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
