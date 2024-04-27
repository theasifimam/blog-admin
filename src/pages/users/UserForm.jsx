import React, { useRef, useState } from "react";
import Switch from "../../components/common/UI/Switch";
import "../../styles/AddUser.css";
import { useFormik } from "formik";
import { userSchema } from "../../utils/schema";
import { Link } from "react-router-dom";
import Modal from "../../components/common/UI/Modal";
import { useDispatch } from "react-redux";
import { signupAction } from "../../redux/slice/auth/signupSlice";

const UserForm = ({ onClose, setIsOpen, isOpen, type, title }) => {
  const [imagePreview, setImagePreview] = useState(
    "/icons-images/users/profilePicture.svg"
  );

  const dispatch = useDispatch();

  const dpRef = useRef();
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
      fname: "",
      lname: "",
      username: "",
      email: "",
      mnumber: "",
      role: "",
      profilePicture: "",
      status: "0",
    },
    // validationSchema: userSchema,
    onSubmit: (values, action) => {
      dispatch(signupAction(values));
    },
  });
  return (
    <Modal
      className="modal"
      style={{
        width: "600px",

        left: "calc(50% - 300px)",
        top: "50px",
      }}
      onClose={onClose}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
    >
      <div className="addUserPage">
        <div className="bottom">
          <h3>{title || "Form"}</h3>
          <form onSubmit={handleSubmit}>
            <div
              className="inputField"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <label htmlFor="profilePicture">Choose file</label> */}
              <div className="img">
                <input
                  type="file"
                  name="profilePicture"
                  id="profilePicture"
                  tabIndex="1"
                  ref={dpRef}
                  onChange={(e) => {
                    setFieldValue("profilePicture", e.currentTarget.files[0]);
                    e.currentTarget.files[0] &&
                      setImagePreview(
                        URL.createObjectURL(e.currentTarget.files[0])
                      );
                  }}
                  onBlur={handleBlur}
                  style={{ display: "none" }}
                />
                <div className="imgPreview">
                  <img
                    src={imagePreview}
                    alt="profile"
                    width="100"
                    onClick={() => dpRef.current.click()}
                  />
                </div>
                {errors.profilePicture && touched.profilePicture ? (
                  <div className="error-msg">{errors.profilePicture}</div>
                ) : null}
              </div>
            </div>

            {/* fname */}
            <div className="inputField">
              <label htmlFor="fname">
                First name<span>*</span>
              </label>
              <input
                type="text"
                name="fname"
                id="fname"
                tabIndex="1"
                placeholder="First name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fname}
              />
              {errors.fname && touched.fname ? (
                <div className="error-msg">{errors.fname}</div>
              ) : null}
            </div>

            {/* lname */}
            <div className="inputField">
              <label htmlFor="lname">
                Last name<span>*</span>
              </label>
              <input
                type="text"
                name="lname"
                id="lname"
                tabIndex="1"
                placeholder="Last name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lname}
              />
              {errors.lname && touched.lname ? (
                <div className="error-msg">{errors.lname}</div>
              ) : null}
            </div>

            {/* username */}
            <div className="inputField">
              <label htmlFor="username">
                Username<span>*</span>
              </label>
              <input
                type="text"
                name="username"
                id="username"
                tabIndex="1"
                placeholder="Username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {errors.username && touched.username ? (
                <div className="error-msg">{errors.username}</div>
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
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="support">Support</option>
                <option value="moderator">Moderator</option>
                <option value="admin">Admin</option>
              </select>{" "}
              {errors.role && touched.role ? (
                <div className="error-msg">{errors.role}</div>
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
              <Link to="/users">
                <button type="button" className="back" onClick={onClose}>
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default UserForm;
