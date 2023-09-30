import React, { useEffect, useState } from "react";
import "../../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
// import { loginAction } from "../../redux/slice/auth/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const [redirectFlag, setRedirectFlag] = useState(false);
  const [showPasword, setShowPasword] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   redirectFlag && login.success && navigate(`/${login.user?.username}`);
  // }, [login.success]);

  const { handleChange, handleBlur, handleSubmit, errors, values } = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit(values) {
      // dispatch(loginAction(values));
      // setRedirectFlag(true);
    },
  });

  return (
    <>
      <div className="signup">
        <div className="welcomeText">
          <h1>Welcome Back</h1>
          <p>Log in to Your World!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Log in now</h1>
          {/* username */}
          <div className="input-field full">
            <label htmlFor="username">
              Email or Username<span>*</span>
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Email or Username"
              tabIndex="1"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {/* Password */}
          <div className="input-field full">
            <label htmlFor="password">
              Password<span>*</span>
            </label>
            <input
              type={showPasword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              tabIndex="2"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button
              className="showPasswordBtn"
              type="button"
              onClick={() => setShowPasword(!showPasword)}
            >
              <i
                className={
                  showPasword ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"
                }
              ></i>
            </button>
          </div>

          <button type="submit" className="primary-btn">
            Log in
          </button>
          <span className="bottom-text">
            Forgot Password?{" "}
            <Link to="/forgot-password">Change Password Now!</Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;
