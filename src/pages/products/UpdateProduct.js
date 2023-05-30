import React from "react";
import Switch from "../../components/common/UI/Switch";
import MyEditor from "../../components/common/UI/MyEditor";

const UpdateProduct = () => {
  return (
    <div className="addUserPage">
      <div className="card">
        <div className="top"></div>
        <div className="bottom">
          <h3>Update Product</h3>
          <form>
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
                placeholder="Product Name "
              />
            </div>

            <div className="fullInputField editorBorder">
              <MyEditor />
            </div>

            {/* Category */}
            <div className="inputField">
              <label htmlFor="role">
                Category<span>*</span>
              </label>
              <select name="role" id="role" tabIndex="7">
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
              />
            </div>

            {/* ProductImage */}
            <div className="inputField">
              {/* <label htmlFor="profilePic">Choose file</label> */}
              <div className="img">
                <input
                  type="file"
                  name="profilePic"
                  id="profilePic"
                  tabIndex="1"
                />
                <div className="imgPreview">
                  <img
                    src="/icons/users/profilepic.svg"
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
              />
            </div>

            <div className="inputField switch">
              <label>
                Status<span>*</span>
              </label>
              <Switch />
            </div>

            <div className="btns">
              <button className="submit">Submit</button>
              <button className="back">Back</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
