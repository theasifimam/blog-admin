import React from "react";
import Pagination from "../../components/common/UI/Pagination";
import { Link } from "react-router-dom";
import Switch from "../../components/common/UI/Switch";
import { productTableData } from "../../utils/utils";

const ViewAllProducts = () => {
  return (
    <div className="adminUserPage">
      <div className="top">
        <Link to="/products/add-product">
          Add Product{" "}
          <span>
            <img src="/icons/users/Addadminicon.svg" alt="plus icon" />
          </span>
        </Link>
      </div>

      <div className="table">
        <table className="table ">
          <thead>
            <tr className="align-middle">
              <th scope="col">Sr. No.</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Code</th>
              <th scope="col">Image</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
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
                  <td className="align-middle">{data.productCode}</td>
                  <td className="align-middle">
                    <div className="image">
                      <img src={data.productImages} alt="product" width={70} />
                    </div>
                  </td>
                  <td className="align-middle">
                    <Switch />
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

export default ViewAllProducts;
