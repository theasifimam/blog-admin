import React from "react";
import { Link } from "react-router-dom";
import Switch from "../../components/common/UI/Switch";
import Pagination from "../../components/common/UI/Pagination";

const Users = () => {
  const names = [
    "asif",
    "imam",
    "adil",
    "pankaj",
    "parwez",
    "kundan",
    "prashu",
    "ranjeet",
    "vipul",
    "mustakim",
    "amir",
    "rahul",
    "raghib",
    "raju",
    "rabri",
    "golu",
  ];

  const tableData = (amount) => {
    let dummyArray = [];
    for (let i = 0; i < amount; i++) {
      dummyArray.push({
        srNo: i < 9 ? "0" + (i + 1) : `${i + 1}`,
        fullName: `${names[Math.floor(Math.random() * 16)]} ${
          names[Math.floor(Math.random() * 16)]
        }`,
        email: `${names[Math.floor(Math.random() * 11)]}${
          names[Math.floor(Math.random() * 11)]
        }@gmail.com`,
        mNumber: "+91" + (1000000000 + Math.floor(Math.random() * 10000000000)),
        role: Math.floor(Math.random() * 10) % 2 === 0 ? "Seller" : "Buyer",
      });
    }
    return dummyArray;
  };
  return (
    <div className="adminUserPage">
      <div className="top">
        <Link to="/users/add-user">
          All Users
          <span>
            <i className="fa-solid fa-plus"></i>
          </span>
        </Link>

        <div className="filter">
          <label htmlFor="users">Filter Users</label>
          <select name="users" id="users">
            <option>Select User Type</option>
            <option value="all">All User</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
            <option value="user">User</option>
          </select>
        </div>
      </div>

      <div className="table responsiveTable">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col" className="align-middle">
                Sr. No.
              </th>
              <th scope="col" className="align-middle">
                Full Name
              </th>
              <th scope="col" className="align-middle">
                Email
              </th>
              <th scope="col" className="align-middle">
                Mobile No.
              </th>
              <th scope="col" className="align-middle">
                Status
              </th>
              <th scope="col" className="align-middle">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData(10).map((data, index) => {
              return (
                <tr className="rowHeight3" key={index}>
                  <th scope="row" className="align-middle">
                    {data.srNo}
                  </th>
                  <td className="align-middle">{data.fullName}</td>
                  <td className="align-middle">{data.email}</td>
                  <td className="align-middle">{data.mNumber}</td>
                  <td className="align-middle">
                    <div className="controls">
                      <Switch />
                    </div>
                  </td>
                  <td className="align-middle">
                    <div className="controls">
                      <Link
                        to={`/users/view/${data.srNo} `}
                        className="center add"
                      >
                        {/* <img src="/icons-images/users/view.svg" alt="plus" /> */}
                        <i className="fa-regular fa-eye"></i>
                      </Link>

                      <Link
                        to={`/users/update-user/${data.srNo}`}
                        className="center edit"
                      >
                        {/* <img
                          src="/icons-images/users/editicon.svg"
                          alt="edit"
                        /> */}
                        <i class="fa-regular fa-pen-to-square"></i>
                      </Link>

                      <Link className="center delete">
                        {/* <img
                          src="/icons-images/users/delete.svg"
                          alt="delete"
                        /> */}
                        <i class="fa-regular fa-trash-can"></i>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination pageNumber={1} totalPages={10} />
    </div>
  );
};

export default Users;
