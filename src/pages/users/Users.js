import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Switch from "../../components/common/UI/Switch";
import Pagination from "../../components/common/UI/Pagination";
import UserForm from "./UserForm";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../../redux/slice/user/getUsersSlice";
import { viewUserAction } from "../../redux/slice/user/viewUserSlice";

const Users = () => {
  const [showAddForm, setshowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  const addUser = useSelector((state) => state.signup);

  useEffect(() => {
    dispatch(getUsersAction());
  }, [addUser.success]);

  return (
    <div className="adminUserPage">
      {showAddForm && (
        <UserForm
          setIsOpen={setshowAddForm}
          onClose={() => setshowAddForm(false)}
          isOpen={showAddForm}
          type="add"
          title="Add"
        />
      )}

      {showUpdateForm && (
        <UserForm
          setIsOpen={setShowUpdateForm}
          onClose={() => setShowUpdateForm(false)}
          isOpen={showUpdateForm}
          type="update"
          title="Update"
        />
      )}

      {showForm && (
        <UserForm
          setIsOpen={setShowForm}
          onClose={() => setShowForm(false)}
          isOpen={showForm}
          type="view"
          title="View"
        />
      )}
      <div className="top">
        <button onClick={() => setshowAddForm(true)}>
          All Users
          <span>
            <i className="fa-solid fa-plus"></i>
          </span>
        </button>

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
              <th scope="col">Sr. No.</th>
              <th scope="col">Full Name</th>
              <th scope="col">Username</th>
              <th scope="col">Role</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.users?.map((data, index) => {
              return (
                <tr className="rowHeight3" key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.fname + " " + data.lname}</td>
                  <td>{data.username}</td>
                  <td>{data.role}</td>
                  <td>
                    <div className="controls">
                      <Switch switchValue={data.status} />
                    </div>
                  </td>
                  <td>
                    <div className="controls">
                      <button
                        onClick={() => {
                          setShowForm(true);
                          dispatch(viewUserAction(data._id));
                        }}
                        className="center add"
                      >
                        {/* <img src="/icons-images/users/view.svg" alt="plus" /> */}
                        <i className="fa-regular fa-eye"></i>
                      </button>

                      <button
                        className="center edit"
                        onClick={() => {
                          setShowUpdateForm(true);
                          dispatch(viewUserAction(data._id));
                        }}
                      >
                        {/* <img
                          src="/icons-images/users/editicon.svg"
                          alt="edit"
                        /> */}
                        <i class="fa-regular fa-pen-to-square"></i>
                      </button>

                      <button className="center delete">
                        {/* <img
                          src="/icons-images/users/delete.svg"
                          alt="delete"
                        /> */}
                        <i class="fa-regular fa-trash-can"></i>
                      </button>
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
