import React from "react";
import Switch from "../../components/common/UI/Switch";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const BulkProducts = () => {
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
    // validationSchema: productschema,
    onSubmit: (values, action) => {
      console.log(values);
    },
  });
  return (
    <div className="addUserPage">
      <div className="card">
        <div className="top"></div>
        <div className="bottom">
          <h3>Add Multiple Products</h3>
          <form onSubmit={handleSubmit}>
            <div className="inputField">
              <label htmlFor="products">CSV file</label>
              <div className="img">
                <input
                  type="file"
                  name="products"
                  id="products"
                  tabIndex="1"
                  onChange={(e) => {
                    setFieldValue("products", e.currentTarget.files[0]);
                  }}
                  onBlur={handleBlur}
                />
                {errors.products && touched.products ? (
                  <div className="error-msg">{errors.products}</div>
                ) : null}
              </div>
            </div>

            <div className="btns">
              <button type="submit" className="submit">
                Submit
              </button>
              <Link to="/products">
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

export default BulkProducts;
