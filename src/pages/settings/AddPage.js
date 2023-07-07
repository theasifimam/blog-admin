import React, { useState } from "react";
import Switch from "../../components/common/UI/Switch";
import { useFormik } from "formik";
import { pageSchema, userSchema } from "../../utils/schema";
import { Link } from "react-router-dom";
import MyEditor from "../../components/common/UI/MyEditor";

const AddPage = () => {
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
      title: "",
      shortDescription: "",
      description: `<p><strong><u>Hello!</u> </strong>Write something here...</p>`,
      banner: "",
      metaTitle: "",
      metaDescription: "",
      metaKeywords: "",
      status: "0",
    },
    validationSchema: pageSchema,
    onSubmit: (values, action) => {
      console.log(values);
    },
  });
  return (
    <div className="addUserPage">
      <div className="card">
        <div className="top"></div>
        <div className="bottom">
          <h3>Add Page</h3>
          <form onSubmit={handleSubmit}>
            {/* title */}
            <div className="fullInputField">
              <label htmlFor="title">
                Page Title<span>*</span>
              </label>
              <input
                type="text"
                name="title"
                id="title"
                tabIndex="1"
                placeholder="Page Title"
                autoFocus
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && touched.title ? (
                <div className="error-msg">{errors.title}</div>
              ) : null}
            </div>
            {/* shortDescription */}
            <div className="fullInputField">
              <label htmlFor="shortDescription">Short Description</label>
              <input
                type="text"
                name="shortDescription"
                id="shortDescription"
                tabIndex="2"
                placeholder="Short Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.shortDescription}
              />{" "}
              {errors.shortDescription && touched.shortDescription ? (
                <div className="error-msg">{errors.shortDescription}</div>
              ) : null}
            </div>

            {/* Description */}
            {/* <label htmlFor="description">
              Description<span>*</span>
            </label> */}

            <div className="fullInputField editorBorder">
              <MyEditor
                setFieldValue={setFieldValue}
                name="description"
                value={values.description}
              />
              {errors.description && touched.description ? (
                <div className="error-msg">{errors.description}</div>
              ) : null}
            </div>

            {/* metaTitle */}
            <div className="inputField">
              <label htmlFor="metaTitle">Meta Title</label>
              <textarea
                type="text"
                name="metaTitle"
                id="metaTitle"
                tabIndex="1"
                placeholder="Meta Title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.metaTitle}
              />{" "}
              {errors.metaTitle && touched.metaTitle ? (
                <div className="error-msg">{errors.metaTitle}</div>
              ) : null}
            </div>

            {/* metaDescription */}
            <div className="inputField">
              <label htmlFor="metaDescription">Meta Description</label>
              <textarea
                type="text"
                name="metaDescription"
                id="metaDescription"
                tabIndex="1"
                placeholder="Meta Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.metaDescription}
              />{" "}
              {errors.metaDescription && touched.metaDescription ? (
                <div className="error-msg">{errors.metaDescription}</div>
              ) : null}
            </div>

            {/* metaKeywords */}
            <div className="inputField">
              <label htmlFor="metaKeywords">meta Keywords</label>
              <textarea
                type="text"
                name="metaKeywords"
                id="metaKeywords"
                tabIndex="1"
                placeholder="Meta Keywords"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.metaKeywords}
              />{" "}
              {errors.metaKeywords && touched.metaKeywords ? (
                <div className="error-msg">{errors.metaKeywords}</div>
              ) : null}
            </div>

            {/* PageBanner */}
            <div className="inputField">
              {/* <label htmlFor="banner">Choose file</label> */}
              <div className="img">
                <input
                  type="file"
                  name="banner"
                  id="banner"
                  tabIndex="1"
                  onChange={(e) => {
                    setFieldValue("banner", e.currentTarget.files[0]);
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
                {errors.banner && touched.banner ? (
                  <div className="error-msg">{errors.banner}</div>
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

export default AddPage;
