import React from "react";
import Pagination from "../../components/common/UI/Pagination";
import { Link } from "react-router-dom";
import Switch from "../../components/common/UI/Switch";

const AllKYCs = () => {
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
          KYC
          <span>
            <img src="/icons/users/Addadminicon.svg" alt="plus icon" />
          </span>
        </Link>

        <div className="filter">
          <label htmlFor="users">Filter Users</label>
          <select name="users" id="users">
            <option>Select User Type</option>
            <option value="all">All User</option>
            <option value="admin">Admin</option>
            <option value="seller">Seller</option>
            <option value="support">Support</option>
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
                Aadhaar No.
              </th>
              <th scope="col" className="align-middle">
                Aadhaar Front
              </th>
              {/* <th scope="col" className="align-middle">
                Aadhaar Back
              </th> */}
              <th scope="col" className="align-middle">
                PAN no.
              </th>
              <th scope="col" className="align-middle">
                Pan Card
              </th>
              <th scope="col" className="align-middle">
                GST No.
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
                  <td className="align-middle">{data.mNumber}</td>
                  <td className="align-middle">
                    {" "}
                    <div className="image">
                      <img
                        src="https://images.unsplash.com/photo-1627152749924-a85f39aa6f37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                        alt="product"
                        width={70}
                      />
                    </div>
                  </td>
                  {/* <td className="align-middle">
                    {" "}
                    <div className="image">
                      <img
                        src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        alt="product"
                        width={70}
                      />
                    </div>
                  </td> */}
                  <td className="align-middle">{data.mNumber}</td>
                  <td className="align-middle">
                    {" "}
                    <div className="image">
                      <img
                        src="https://images.unsplash.com/photo-1546015720-b8b30df5aa27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        alt="product"
                        width={70}
                      />
                    </div>
                  </td>
                  <td className="align-middle">{data.mNumber}</td>
                  <td className="align-middle">
                    <Switch />
                  </td>
                  <td className="align-middle">
                    <div className="controls">
                      <Link
                        to={`/users/view-kyc/${data.srNo} `}
                        className="center add"
                      >
                        <img src="/icons/users/view.svg" alt="plus" />
                      </Link>

                      <Link
                        to={`/users/update-kyc/${data.srNo}`}
                        className="center edit"
                      >
                        <img src="/icons/users/editicon.svg" alt="edit" />
                      </Link>

                      <Link className="center delete">
                        <img src="/icons/users/delete.svg" alt="delete" />
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
export default AllKYCs;
