import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Fragment>
      <div className="logo">
        <img src="./icons/logo.png" alt="logo" />
      </div>

      <h4>Welcome Back</h4>
      <span className="heading-desc">Log in to your account</span>

      <div className="inputField">
        <label htmlFor="email">Enter Your Email</label>
        <input type="email" name="email" id="email" placeholder="Email" />
      </div>

      <div className="inputField">
        <label htmlFor="password">Enter Your Password</label>
        <input
          type={showPassword ? "password" : "text"}
          name="password"
          id="password"
          placeholder="Password"
        />

        <button
          className="showPasswordBtn"
          onClick={() => setShowPassword((value) => !value)}
        >
          <img
            src={!showPassword ? "./icons/closeEye.svg" : "./icons/openEye.svg"}
            alt=""
          />
        </button>
      </div>

      <div className="inputField">
        <input type="submit" value="Log In" />
      </div>

      <span className="forgotPasswordLink">
        Forgot Password? <Link to="/forgot-password">Click Here</Link>
      </span>
    </Fragment>
  );
};

export default Login;
