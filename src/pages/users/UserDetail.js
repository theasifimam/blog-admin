import React from "react";
import Switch from "../../components/common/UI/Switch";

const UserDetail = () => {
  return (
    <div className="addUserPage">
      <div className="card">
        <div className="top"></div>
        <div className="bottom">
          <h3>User View</h3>
          <form>
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
              />
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
              />
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
              />
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
              />
            </div>
            {/* ConfirmPassword */}
            <div className="inputField">
              <label htmlFor="cPassword">
                Confirm Password<span>*</span>
              </label>
              <input
                type="text"
                name="cPassword"
                id="cPassword"
                tabIndex="1"
                placeholder="Confirm Password"
              />
            </div>

            <div className="inputField">
              <label htmlFor="role">
                Role<span>*</span>
              </label>
              <select name="role" id="role" tabIndex="7">
                <option>Select Role</option>
                <option value="admin">Admin</option>
                <option value="seller">Seller</option>
                <option value="support">Support</option>
                <option value="buyer">Buyer</option>
              </select>
            </div>

            <div className="inputField file">
              <label htmlFor="profilePic">Choose file</label>
              <input
                type="file"
                name="profilePic"
                id="profilePic"
                tabIndex="1"
                placeholder="Confirm Password"
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

export default UserDetail;
