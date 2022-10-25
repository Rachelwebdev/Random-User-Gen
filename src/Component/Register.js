import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <h2 className="register-heading">JOIN USERLY TODAY </h2>
      <form action="" className="register-form-container">
        <input
          type="text"
          name="full name"
          id="full-name"
          placeholder="Full Name"
        />
        <input type="text" name="email" id="email" placeholder="Email" />
        <input type="text" name="phone" id="phone" placeholder="Phone Number" />
        <input type="text" name="address" id="address" placeholder="Address" />
        <input type="text" name="psw" id="psw" placeholder="Date of Birth" />
        <input
          type="password"
          name="psw"
          id="psw"
          placeholder="Password"
          required
        />
        <input className="btn-form-submit" type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default Register;
