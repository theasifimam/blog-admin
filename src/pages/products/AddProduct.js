import React, { useState } from "react";
import Switch from "../../components/common/UI/Switch";
import MyEditor from "../../components/common/UI/MyEditor";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [imagePreview, setImagePreview] = useState(
    "/icons-images/users/profilepic.svg"
  );

  const initialValues = {
    productName: "",
    category: "",
    discountPrice: "",
    price: "",
    productImages: null,
    sellerName: "",
    moisture: "",
    husk: "",
    pulsesType: "",
    metaKeyword: "",
    broken: "",
    metaTitle: "",
    metaDesc: "",
    status: "0",
  };
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
          <h3>Add Product</h3>
          <form onSubmit={handleSubmit}>
            {/* ProductName */}
            <div className="fullInputField">
              <label htmlFor="productName">
                Product Name<span>*</span>
              </label>
              <input
                type="text"
                name="productName"
                id="productName"
                tabIndex="2"
                placeholder="Product Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.productName}
              />
            </div>

            <div className="fullInputField editorBorder">
              <MyEditor />
            </div>

            {/* Category */}
            <div className="inputField">
              <label htmlFor="category">
                Category<span>*</span>
              </label>
              <select
                name="category"
                id="category"
                tabIndex="7"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
              >
                <option>Select Category</option>
                <option value="admin">Admin</option>
                <option value="seller">Seller</option>
                <option value="support">Support</option>
                <option value="buyer">Buyer</option>
              </select>
            </div>

            {/* Discount */}
            <div className="inputField">
              <label htmlFor="discountPrice">
                Discount Price<span>*</span>
              </label>
              <input
                type="text"
                name="discountPrice"
                id="discountPrice"
                tabIndex="2"
                placeholder="Discount Price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.discountPrice}
              />
            </div>

            {/* ProductImage */}
            <div className="inputField">
              {/* <label htmlFor="profilePic">Choose file</label> */}
              <div className="img">
                <input
                  type="file"
                  name="productImages"
                  id="productImages"
                  tabIndex="1"
                  multiple
                  onChange={(e) => {
                    setFieldValue("productImages", e.currentTarget.files);
                    // e.currentTarget.files &&
                    //   setImagePreview(
                    //     URL.createObjectURL(e.currentTarget.files)
                    //   );
                  }}
                  onBlur={handleBlur}
                />
                <div className="imgPreview">
                  <img
                    src={imagePreview || "/icons-images/users/profilepic.svg"}
                    alt="profile"
                    width="100"
                  />
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="inputField">
              <label htmlFor="price">
                Price<span>*</span>
              </label>
              <input
                type="text"
                name="price"
                id="price"
                tabIndex="2"
                placeholder=" Price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
            </div>

            {/* sellerName */}
            <div className="inputField">
              <label htmlFor="sellerName">
                Seller Name<span>*</span>
              </label>
              <input
                type="text"
                name="sellerName"
                id="sellerName"
                tabIndex="2"
                placeholder="Seller Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sellerName}
              />
            </div>

            {/* moisture */}
            <div className="inputField">
              <label htmlFor="moisture">Moisture</label>
              <input
                type="text"
                name="moisture"
                id="moisture"
                tabIndex="2"
                placeholder="Moisture"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.moisture}
              />
            </div>

            {/* husk */}
            <div className="inputField">
              <label htmlFor="husk">Husk</label>
              <input
                type="text"
                name="husk"
                id="husk"
                tabIndex="2"
                placeholder="Husk"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.husk}
              />
            </div>

            {/* pulsesType */}
            <div className="inputField">
              <label htmlFor="pulsesType">Pulses Type</label>
              <input
                type="text"
                name="pulsesType"
                id="pulsesType"
                tabIndex="2"
                placeholder="Pulses Type"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pulsesType}
              />
            </div>

            {/* metaKeyword */}
            <div className="inputField">
              <label htmlFor="metaKeyword">Meta Keyword</label>
              <input
                type="text"
                name="metaKeyword"
                id="metaKeyword"
                tabIndex="2"
                placeholder="Meta Keyword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.metaKeyword}
              />
            </div>

            {/* broken */}
            <div className="inputField">
              <label htmlFor="broken">Broken</label>
              <input
                type="text"
                name="broken"
                id="broken"
                tabIndex="2"
                placeholder="Broken"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.broken}
              />
            </div>

            {/* metaTitle */}
            <div className="inputField">
              <label htmlFor="metaTitle">Meta Title</label>
              <textarea
                type="text"
                name="metaTitle"
                id="metaTitle"
                tabIndex="2"
                placeholder="Meta Title"
                rows="3"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.metaTitle}
              />
            </div>

            {/* metaDescription */}
            <div className="inputField">
              <label htmlFor="metaDesc">Meta Description</label>
              <textarea
                type="text"
                name="metaDesc"
                id="metaDesc"
                tabIndex="2"
                placeholder="Meta Description"
                rows="3"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.metaDesc}
              />
            </div>

            <div className="inputField switch">
              <label>
                Status<span>*</span>
              </label>
              <Switch setFieldValue={setFieldValue} />
            </div>

            <div className="btns">
              <button className="submit">Submit</button>
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

export default AddProduct;
