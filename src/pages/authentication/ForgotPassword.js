import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <Fragment>
      <div className="logo">
        <img src="./icons/logo.png" alt="logo" />
      </div>
      <Link to="/signin" className="backBtn">
        <img src="./icons/back.svg" alt="back icon" />
      </Link>
      <h4>Forgot Your Password?</h4>
      <span className="heading-desc">
        Enter your email address to <br /> retrieve your password
      </span>

      <div className="inputField">
        <label htmlFor="email">Enter Your Email</label>
        <input
          autoComplete="true"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
      </div>

      <div className="inputField">
        <input autoComplete="true" type="submit" value="Reset Password" />
      </div>
    </Fragment>
  );
};

export default ForgotPassword;
