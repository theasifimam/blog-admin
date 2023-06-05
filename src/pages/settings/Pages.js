import React from "react";
import { Link } from "react-router-dom";
import Switch from "../../components/common/UI/Switch";
import Pagination from "../../components/common/UI/Pagination";
import { productTableData } from "../../utils/utils";

const Pages = () => {
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

  return (
    <div className="adminUserPage">
      <div className="top">
        <Link to="/settings/add-page">
          All Pages
          <span>
            <img src="/icons/users/Addadminicon.svg" alt="plus icon" />
          </span>
        </Link>

        {/* filter */}
        {/* <div className="filter">
          <label htmlFor="users">Filter Users</label>
          <select name="users" id="users">
            <option>Select User Type</option>
            <option value="all">All User</option>
            <option value="admin">Admin</option>
            <option value="seller">Seller</option>
            <option value="support">Support</option>
          </select>
        </div> */}
      </div>

      <div className="table">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col" className="align-middle">
                Sr. No.
              </th>
              <th scope="col" className="align-middle">
                Page Title
              </th>
              <th scope="col" className="align-middle">
                Short Description
              </th>
              <th scope="col" className="align-middle">
                Description
              </th>
              <th scope="col" className="align-middle">
                Banner
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
            {productTableData(10).map((data, index) => {
              return (
                <tr className="rowHeight3" key={index}>
                  <th scope="row" className="align-middle">
                    {data.srNo}
                  </th>
                  <td className="align-middle">{data.productName}</td>
                  <td className="align-middle">
                    {data.productName} {data.productName} {data.productName}{" "}
                    {data.productName}
                  </td>
                  <td className="align-middle">Rs {data.productCode}</td>
                  <td className="align-middle">
                    <div className="image">
                      <img src={data.productImages} alt="product" width={70} />
                    </div>
                  </td>
                  <td className="align-middle">
                    <Switch
                      switchValue={Math.round(Math.random() * 10) % 2 === 0}
                    />
                  </td>
                  <td className="align-middle">
                    <div className="controls">
                      <Link
                        to={`/products/view/${data.srNo} `}
                        className="center add"
                      >
                        <img src="/icons/users/view.svg" alt="plus" />
                      </Link>

                      <Link
                        to={`/products/update-product/${data.srNo}`}
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

export default Pages;
