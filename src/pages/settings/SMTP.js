import { useFormik } from "formik";
import React from "react";
import Switch from "../../components/common/UI/Switch";
import { Link } from "react-router-dom";

const SMTP = () => {
  const {
    values,
    handleBlur,
    handleChange,
    touched,
    setFieldValue,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: {
      hostName: "",
      portNumber: "",
      authUser: "",
      authPassword: "",
      hostType: "",
      status: "0",
    },
    // validationSchema: userSchema,
    onSubmit: (values, action) => {
      console.log(values);
    },
  });
  return (
    <div className="addUserPage">
      <div className="card">
        <div className="top"></div>
        <div className="bottom">
          <h3>SMTP Setting</h3>
          <form onSubmit={handleSubmit}>
            {/* hostName */}
            <div className="inputField">
              <label htmlFor="hostName">
                Host Name<span>*</span>
              </label>
              <input
                type="text"
                name="hostName"
                id="hostName"
                tabIndex="1"
                placeholder="Host Name"
                autoFocus
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hostName}
              />
              {errors.hostName && touched.hostName ? (
                <div className="error-msg">{errors.hostName}</div>
              ) : null}
            </div>
            {/* portNumber */}
            <div className="inputField">
              <label htmlFor="portNumber">
                Port Number<span>*</span>
              </label>
              <input
                type="text"
                name="portNumber"
                id="portNumber"
                tabIndex="2"
                placeholder="Port Number "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.portNumber}
              />{" "}
              {errors.portNumber && touched.portNumber ? (
                <div className="error-msg">{errors.portNumber}</div>
              ) : null}
            </div>
            {/* authUser */}
            <div className="inputField">
              <label htmlFor="authUser">
                User<span>*</span>
              </label>
              <input
                type="text"
                name="authUser"
                id="authUser"
                tabIndex="1"
                placeholder="Auth User"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.authUser}
              />{" "}
              {errors.authUser && touched.authUser ? (
                <div className="error-msg">{errors.authUser}</div>
              ) : null}
            </div>
            {/* authPassword */}
            <div className="inputField">
              <label htmlFor="authPassword">
                Password<span>*</span>
              </label>
              <input
                type="password"
                name="authPassword"
                id="authPassword"
                tabIndex="1"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.authPassword}
              />{" "}
              {errors.authPassword && touched.authPassword ? (
                <div className="error-msg">{errors.authPassword}</div>
              ) : null}
            </div>

            {/* hostType */}
            <div className="inputField">
              <label htmlFor="hostType">
                hostType<span>*</span>
              </label>
              <select
                name="hostType"
                id="hostType"
                tabIndex="7"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hostType}
              >
                <option>Select hostType</option>
                <option value="admin">Admin</option>
                <option value="seller">Seller</option>
                <option value="support">Support</option>
                <option value="buyer">Buyer</option>
              </select>{" "}
              {errors.hostType && touched.hostType ? (
                <div className="error-msg">{errors.hostType}</div>
              ) : null}
            </div>

            <div className="inputField switch">
              <label>
                Status<span>*</span>
              </label>
              <Switch setFieldValue={setFieldValue} />
              {errors.status && touched.status ? (
                <div className="error-msg">{errors.status}</div>
              ) : null}
            </div>

            <div className="btns">
              <button type="submit" className="submit">
                Submit
              </button>
              <Link to="/">
                <button type="button" className="back">
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SMTP;
