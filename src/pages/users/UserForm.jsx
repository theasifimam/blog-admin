import React, { useEffect, useRef, useState } from "react";
import Switch from "../../components/common/UI/Switch";
import "../../styles/AddUser.css";
import { useFormik } from "formik";
import { userSchema } from "../../utils/schema";
import { Link } from "react-router-dom";
import Modal from "../../components/common/UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { signupAction } from "../../redux/slice/auth/signupSlice";

const UserForm = ({ onClose, setIsOpen, isOpen, type, title }) => {
  const [imagePreview, setImagePreview] = useState(
    "/icons-images/users/profilepic.svg"
  );
  const [routeFlag, setRouteFlag] = useState(false);
  const addUser = useSelector((state) => state.signup);
  const viewUser = useSelector((state) => state.viewUser);
  const [initialValues, setInitialValues] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    mnumber: "",
    role: "",
    profilePicture: "",
    status: "0",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (addUser.success && routeFlag) {
      onClose();
    }
  }, [addUser.success, routeFlag]);

  useEffect(() => {
    if (viewUser.success && (type === "view" || type === "update")) {
      setInitialValues(viewUser.user);
      setImagePreview(viewUser.user?.profilePicture);
    }
  }, [viewUser.success]);

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
    initialValues,
    enableReinitialize: true,
    // validationSchema: userSchema,
    onSubmit: (values, action) => {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });
      if (type === "add") {
        dispatch(signupAction(formData));
      } else if (type === "update") {
        // dispatch(updateUserAction())
      }
      setRouteFlag(true);
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
                  disabled={type === "view"}
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
                disabled={type === "view"}
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
                disabled={type === "view"}
                tabIndex="2"
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
                tabIndex="3"
                disabled={type === "view"}
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
                disabled={type === "view"}
                id="email"
                tabIndex="4"
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
                disabled={type === "view"}
                tabIndex="5"
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
                disabled={type === "view"}
                tabIndex="6"
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
              {(type === "add" || type === "update") && (
                <button type="submit" className="submit">
                  {type === "update" ? "Update" : "Submit"}
                </button>
              )}
              <button type="button">
                <button type="button" className="back" onClick={onClose}>
                  Close
                </button>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default UserForm;
