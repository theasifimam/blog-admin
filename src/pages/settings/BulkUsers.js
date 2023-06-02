import React from "react";
import Switch from "../../components/common/UI/Switch";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const BulkUsers = () => {
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
      users: "",
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
          <h3>Add Multiple User</h3>
          <form onSubmit={handleSubmit}>
            {/* UserType */}
            <div className="inputField">
              <label htmlFor="role">
                User Role<span>*</span>
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
              <label htmlFor="users">CSV file</label>
              <div className="img">
                <input
                  type="file"
                  name="users"
                  id="users"
                  tabIndex="1"
                  onChange={(e) => {
                    setFieldValue("users", e.currentTarget.files[0]);
                  }}
                  onBlur={handleBlur}
                />
                {errors.users && touched.users ? (
                  <div className="error-msg">{errors.users}</div>
                ) : null}
              </div>
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

export default BulkUsers;
