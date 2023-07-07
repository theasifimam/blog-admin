import React, { useState } from "react";
import Switch from "../../components/common/UI/Switch";
import "../../styles/AddUser.css";
import { useFormik } from "formik";
import { userSchema } from "../../utils/schema";
import { Link } from "react-router-dom";

const UpdateUser = () => {
  const [imagePreview, setImagePreview] = useState(
    "/icons-images/users/profilepic.svg"
  );
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
      fullName: "",
      email: "",
      mnumber: "",
      password: "",
      cPassword: "",
      role: "",
      profilePic: "",
      status: "0",
    },
    validationSchema: userSchema,
    onSubmit: (values, action) => {
      console.log(values);
    },
  });
  return (
    <div className="addUserPage">
      <div className="card">
        <div className="top"></div>
        <div className="bottom">
          <h3>Edit User</h3>
          <form onSubmit={handleSubmit}>
            {/* FullName */}
            <div className="inputField">
              <label htmlFor="fullName">
                Full Name<span>*</span>
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                tabIndex="1"
                placeholder="Full Name"
                autoFocus
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
              />
              {errors.fullName && touched.fullName ? (
                <div className="error-msg">{errors.fullName}</div>
              ) : null}
            </div>
            {/* Email */}
            <div className="inputField">
              <label htmlFor="email">
                Email Address<span>*</span>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                tabIndex="2"
                placeholder="Email Address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />{" "}
              {errors.email && touched.email ? (
                <div className="error-msg">{errors.email}</div>
              ) : null}
            </div>
            {/* PhoneNumber */}
            <div className="inputField">
              <label htmlFor="mnumber">
                Phone Number<span>*</span>
              </label>
              <input
                type="text"
                name="mnumber"
                id="mnumber"
                tabIndex="1"
                placeholder="Phone Number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mnumber}
              />{" "}
              {errors.mnumber && touched.mnumber ? (
                <div className="error-msg">{errors.mnumber}</div>
              ) : null}
            </div>
            {/* Password */}
            <div className="inputField">
              <label htmlFor="password">
                Password<span>*</span>
              </label>
              <input
                type="text"
                name="password"
                id="password"
                tabIndex="1"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />{" "}
              {errors.password && touched.password ? (
                <div className="error-msg">{errors.password}</div>
              ) : null}
            </div>
            {/* ConfirmPassword */}
            <div className="inputField">
              <label htmlFor="cPassword">Confirm Password</label>
              <input
                type="text"
                name="cPassword"
                id="cPassword"
                tabIndex="1"
                placeholder="Confirm Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cPassword}
              />{" "}
              {errors.cPassword && touched.cPassword ? (
                <div className="error-msg">{errors.cPassword}</div>
              ) : null}
            </div>

            {/* Role */}
            <div className="inputField">
              <label htmlFor="role">
                Role<span>*</span>
              </label>
              <select
                name="role"
                id="role"
                tabIndex="7"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.role}
              >
                <option>Select Role</option>
                <option value="admin">Admin</option>
                <option value="seller">Seller</option>
                <option value="support">Support</option>
                <option value="buyer">Buyer</option>
              </select>{" "}
              {errors.role && touched.role ? (
                <div className="error-msg">{errors.role}</div>
              ) : null}
            </div>

            <div className="inputField">
              {/* <label htmlFor="profilePic">Choose file</label> */}
              <div className="img">
                <input
                  type="file"
                  name="profilePic"
                  id="profilePic"
                  tabIndex="1"
                  onChange={(e) => {
                    setFieldValue("profilePic", e.currentTarget.files[0]);
                    e.currentTarget.files[0] &&
                      setImagePreview(
                        URL.createObjectURL(e.currentTarget.files[0])
                      );
                  }}
                  onBlur={handleBlur}
                />
                <div className="imgPreview">
                  <img src={imagePreview} alt="profile" width="100" />
                </div>
                {errors.profilePic && touched.profilePic ? (
                  <div className="error-msg">{errors.profilePic}</div>
                ) : null}
              </div>
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
              <Link to="/users">
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

export default UpdateUser;
