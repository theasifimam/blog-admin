import { useFormik } from "formik";
import React from "react";
import Switch from "../../components/common/UI/Switch";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Link } from "react-router-dom";

const animatedComponents = makeAnimated();

const ViewCouponDetail = () => {
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
      couponName: "",
      couponCode: "",
      price: "",
      userEmailId: [],
      couponStartDate: "",
      couponEndDate: "",
      couponType: "",
      status: "",
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
          <h3>View Coupon</h3>
          <form onSubmit={handleSubmit}>
            {/* CouponName */}
            <div className="inputField">
              <label htmlFor="couponName">
                Coupon Name<span>*</span>
              </label>
              <input
                type="text"
                name="couponName"
                id="couponName"
                tabIndex="1"
                placeholder="Coupon Name"
                autoFocus
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.couponName}
              />
              {errors.couponName && touched.couponName ? (
                <div className="error-msg">{errors.couponName}</div>
              ) : null}
            </div>
            {/* Coupon Code */}
            <div className="inputField">
              <label htmlFor="couponCode">
                Coupon Code<span>*</span>
              </label>
              <input
                type="text"
                name="couponCode"
                id="couponCode"
                tabIndex="2"
                placeholder="Coupon Code"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.couponCode}
              />{" "}
              {errors.couponCode && touched.couponCode ? (
                <div className="error-msg">{errors.couponCode}</div>
              ) : null}
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
                tabIndex="1"
                placeholder="Price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />{" "}
              {errors.price && touched.price ? (
                <div className="error-msg">{errors.price}</div>
              ) : null}
            </div>

            <div className="inputField">
              <label htmlFor="userEmailId">
                Select Users<span>*</span>
              </label>

              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
              />
              {errors.password && touched.password ? (
                <div className="error-msg">{errors.password}</div>
              ) : null}
            </div>
            {/* couponStartDate */}
            <div className="inputField">
              <label htmlFor="couponStartDate">
                Coupon Start Date<span>*</span>
              </label>
              <input
                type="date"
                name="couponStartDate"
                id="couponStartDate"
                tabIndex="1"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.couponStartDate}
              />{" "}
              {errors.couponStartDate && touched.couponStartDate ? (
                <div className="error-msg">{errors.couponStartDate}</div>
              ) : null}
            </div>
            {/* couponEndDate */}
            <div className="inputField">
              <label htmlFor="couponEndDate">Coupon End Date</label>
              <input
                type="date"
                name="couponEndDate"
                id="couponEndDate"
                tabIndex="1"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.couponEndDate}
              />{" "}
              {errors.couponEndDate && touched.couponEndDate ? (
                <div className="error-msg">{errors.couponEndDate}</div>
              ) : null}
            </div>

            {/* couponType */}
            <div className="inputField">
              <label htmlFor="couponType">
                Coupon Type<span>*</span>
              </label>
              <select
                name="couponType"
                id="couponType"
                tabIndex="7"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.couponType}
              >
                <option>Select Coupon Type</option>
                <option value="admin">Admin</option>
                <option value="seller">Seller</option>
                <option value="support">Support</option>
                <option value="buyer">Buyer</option>
              </select>{" "}
              {errors.couponType && touched.couponType ? (
                <div className="error-msg">{errors.couponType}</div>
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
              {/* <button type="submit" className="submit">
                Submit
              </button> */}
              <Link to="/coupons/view">
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

export default ViewCouponDetail;
