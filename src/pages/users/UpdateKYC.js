import React, { useState } from "react";
import "../../styles/AddUser.css";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
const UpdateKYC = () => {
  const [imagePreview, setImagePreview] = useState({
    aadhaarFrontImage: null,
    aadhaarBackImage: null,
    panCardFrontImage: null,
  });
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
      userEmailId: [],
      aadhaarFrontImage: "",
      aadhaarBackImage: "",
      panCardFrontImage: "",
      panNo: "",
      gstNo: "",
    },
    // validationSchema: userSchema,
    onSubmit: (values, action) => {
      console.log(values);
    },
  });

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocdfolate", label: "Chocolate" },
    { value: "strawbserry", label: "Strawberry" },
    { value: "vanillda", label: "Vanilla" },
    { value: "chocoldate", label: "Chocolate" },
    { value: "strawbesrry", label: "Strawberry" },
    { value: "vansilla", label: "Vanilla" },
    { value: "chocdfoglate", label: "Chocolate" },
    { value: "strawbserdry", label: "Strawberry" },
    { value: "vanidsfllda", label: "Vanilla" },
  ];
  return (
    <div className="addUserPage">
      <div className="card">
        <div className="top"></div>
        <div className="bottom">
          <h3>Update KYC</h3>
          <form onSubmit={handleSubmit}>
            {/* Select User emails */}

            <div className="inputField">
              <label htmlFor="userEmailId">Select User</label>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
                onChange={(selectedOptions) => {
                  const valuesInArray = selectedOptions.map((option, index) => {
                    return option.value;
                  });
                  setFieldValue("userEmailId", valuesInArray);
                }}
                onBlur={handleBlur}
                // value={values.userEmailId}
              />
              {errors.userEmailId && touched.userEmailId ? (
                <div className="error-msg">{errors.userEmailId}</div>
              ) : null}
            </div>

            {/* aadhaarNo */}
            <div className="inputField">
              <label htmlFor="aadhaarNo">
                Aadhaar Number<span>*</span>
              </label>
              <input
                type="text"
                name="aadhaarNo"
                id="aadhaarNo"
                tabIndex="2"
                placeholder="Aadhaar Number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.aadhaarNo}
              />{" "}
              {errors.aadhaarNo && touched.aadhaarNo ? (
                <div className="error-msg">{errors.aadhaarNo}</div>
              ) : null}
            </div>

            {/* panNo */}
            <div className="inputField">
              <label htmlFor="panNo">
                Pan Number<span>*</span>
              </label>
              <input
                type="text"
                name="panNo"
                id="panNo"
                tabIndex="1"
                placeholder="Confirm Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.panNo}
              />{" "}
              {errors.panNo && touched.panNo ? (
                <div className="error-msg">{errors.panNo}</div>
              ) : null}
            </div>

            {/* gstNo */}
            <div className="inputField">
              <label htmlFor="gstNo">
                Aadhaar Number<span>*</span>
              </label>
              <input
                type="text"
                name="gstNo"
                id="gstNo"
                tabIndex="2"
                placeholder="Aadhaar Number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gstNo}
              />{" "}
              {errors.gstNo && touched.gstNo ? (
                <div className="error-msg">{errors.gstNo}</div>
              ) : null}
            </div>

            {/* aadhaarFrontImage */}
            <div className="inputField">
              <label htmlFor="aadhaarFrontImage">
                Aadhaar Front Side Image<span>*</span>
              </label>
              <div className="img">
                <input
                  type="file"
                  name="aadhaarFrontImage"
                  id="aadhaarFrontImage"
                  tabIndex="1"
                  onChange={(e) => {
                    setFieldValue(
                      "aadhaarFrontImage",
                      e.currentTarget.files[0]
                    );
                    e.currentTarget.files[0] &&
                      setImagePreview({
                        ...imagePreview,
                        aadhaarFrontImage: URL.createObjectURL(
                          e.currentTarget.files[0]
                        ),
                      });
                  }}
                  onBlur={handleBlur}
                />
                {imagePreview.aadhaarFrontImage && (
                  <div className="imgPreviewRect">
                    <img
                      src={imagePreview.aadhaarFrontImage}
                      alt="profile"
                      width="100"
                    />
                  </div>
                )}
                {errors.aadhaarFrontImage && touched.aadhaarFrontImage ? (
                  <div className="error-msg">{errors.aadhaarFrontImage}</div>
                ) : null}
              </div>
            </div>

            {/* aadhaarBackImage */}
            <div className="inputField">
              <label htmlFor="aadhaarBackImage">
                Aadhaar Back Side Image<span>*</span>
              </label>
              <div className="img">
                <input
                  type="file"
                  name="aadhaarBackImage"
                  id="aadhaarBackImage"
                  tabIndex="1"
                  onChange={(e) => {
                    setFieldValue("aadhaarBackImage", e.currentTarget.files[0]);
                    e.currentTarget.files[0] &&
                      setImagePreview({
                        ...imagePreview,
                        aadhaarBackImage: URL.createObjectURL(
                          e.currentTarget.files[0]
                        ),
                      });
                  }}
                  onBlur={handleBlur}
                />
                {imagePreview.aadhaarBackImage && (
                  <div className="imgPreviewRect">
                    <img
                      src={imagePreview.aadhaarBackImage}
                      alt="profile"
                      width="100"
                    />
                  </div>
                )}
                {errors.aadhaarBackImage && touched.aadhaarBackImage ? (
                  <div className="error-msg">{errors.aadhaarBackImage}</div>
                ) : null}
              </div>
            </div>

            {/* panCardFrontImage */}
            <div className="inputField">
              <label htmlFor="panCardFrontImage">
                Pan Card Front Side Image
              </label>
              <div className="img">
                <input
                  type="file"
                  name="panCardFrontImage"
                  id="panCardFrontImage"
                  tabIndex="1"
                  onChange={(e) => {
                    setFieldValue(
                      "panCardFrontImage",
                      e.currentTarget.files[0]
                    );
                    e.currentTarget.files[0] &&
                      setImagePreview({
                        ...imagePreview,
                        panCardFrontImage: URL.createObjectURL(
                          e.currentTarget.files[0]
                        ),
                      });
                  }}
                  onBlur={handleBlur}
                />
                {imagePreview.panCardFrontImage && (
                  <div className="imgPreviewRect">
                    <img
                      src={imagePreview.panCardFrontImage}
                      alt="profile"
                      width="100"
                    />
                  </div>
                )}
                {errors.panCardFrontImage && touched.panCardFrontImage ? (
                  <div className="error-msg">{errors.panCardFrontImage}</div>
                ) : null}
              </div>
            </div>

            <div className="btns">
              <button type="submit" className="submit">
                Submit
              </button>
              <Link to="/users/kyc">
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

export default UpdateKYC;
