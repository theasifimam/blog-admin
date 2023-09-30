import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="signup">
      <div className="welcomeText">
        <h1>Welcome Back</h1>
        <p>Log in to Your World!</p>
      </div>
      <form>
        <h1>Log in now</h1>
        {/* username */}
        <div className="input-field full">
          <label htmlFor="username">
            Email<span>*</span>
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Email or Username"
            tabIndex="1"
          />
        </div>

        <button type="submit" className="primary-btn">
          Reset Password
        </button>
        <span className="bottom-text">
          Do you want to login?
          <Link to="/signin">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default ForgotPassword;
