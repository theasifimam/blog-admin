import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userRole } from "../../utils/utils";
import { useFormik } from "formik";
import { signInAction } from "../../redux/slice/auth/signinSlice";
import { signinSchema } from "../../utils/schema";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [redirectFlag, setRedirectFlag] = useState(false);
  const navigate = useNavigate();
  // const { login } = useSelector((state) => state);
  const user_role = userRole();

  // Redirecting after logout
  // useEffect(() => {
  //   if (!login.error && login.success && login.user && redirectFlag) {
  //     navigate(
  //       `/${user_role === "ROLE_TEACHER" ? "educator" : "student"}/dashboard`
  //     );
  //   }
  // }, [login.success, login.error]);

  // Handling form
  let { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signinSchema,
      onSubmit: (values, action) => {
        console.log(values);
        dispatch(
          signInAction({
            email: values.email,
          })
        );

        // action.resetForm();
        // setRedirectFlag(true);
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="logo">
        <img src="/icons-images/logo.png" alt="logo" />
      </div>

      <h4>Welcome Back</h4>
      <span className="heading-desc">Log in to your account</span>

      <div className="inputField">
        <label htmlFor="email">Enter Your Email</label>
        <input
          autoComplete="true"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <div className="error-msg">{errors.email}</div>
        ) : null}
      </div>

      <div className="inputField">
        <label htmlFor="password">Enter Your Password</label>
        <input
          type={!showPassword ? "password" : "text"}
          name="password"
          id="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="true"
        />
        {errors.password && touched.password ? (
          <div className="error-msg">{errors.password}</div>
        ) : null}
        <button
          className="showPasswordBtn"
          type="button"
          onClick={() => setShowPassword((value) => !value)}
        >
          <img
            src={!showPassword ? "./icons/closeEye.svg" : "./icons/openEye.svg"}
            alt=""
          />
        </button>
      </div>

      <div className="inputField">
        <input autoComplete="true" type="submit" value="Log In" />
      </div>

      <span className="forgotPasswordLink">
        Forgot Password? <Link to="/forgot-password">Click Here</Link>
      </span>
    </form>
  );
};

export default Login;
