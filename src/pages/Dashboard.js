import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import EChartsReact from "echarts-for-react";
// import Map from "../components/common/UI/graph/Map";

const Dashboard = () => {
  const option = {
    width: "cover",
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };

  const tableData = (amount) => {
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
    let dummyArray = [];
    for (let i = 0; i < amount; i++) {
      dummyArray.push({
        srNo: i < 9 ? "0" + (i + 1) : `${i + 1}`,
        fullName: `${names[Math.floor(Math.random() * 16)]} ${
          names[Math.floor(Math.random() * 16)]
        }`,
        email:
          `${names[Math.floor(Math.random() * 11)]}${
            names[Math.floor(Math.random() * 11)]
          }` + "@gmail.com",
        mNumber: Math.floor(Math.random() * 10000000000),
        role: Math.floor(Math.random() * 10) % 2 == 0 ? "Seller" : "Buyer",
      });
    }
    return dummyArray;
  };

  // const [countryData, setCountryData] = useState([]);

  // useEffect(() => {
  //   // Dummy data for illustration purposes
  //   const dummyData = [
  //     { name: "China", value: Math.floor(Math.random() * 100) },
  //     { name: "India", value: Math.floor(Math.random() * 100) },
  //     { name: "United States", value: Math.floor(Math.random() * 100) },
  //     // Add more countries with their respective values here
  //   ];

  //   setCountryData(dummyData);
  // }, []);

  // const dummyData = [
  //   { name: "China", value: Math.floor(Math.random() * 100) },
  //   { name: "India", value: Math.floor(Math.random() * 100) },
  //   { name: "United States", value: Math.floor(Math.random() * 100) },
  //   // Add more countries with their respective values here
  // ];

  // const option = {
  //   xAxis: {
  //     type: "category",
  //     data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  //   },
  //   yAxis: {
  //     type: "value",
  //   },
  //   series: [
  //     {
  //       data: [820, 932, 901, 934, 1290, 1330, 1320],
  //       type: "line",
  //       smooth: true,
  //     },
  //   ],
  // };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="dashboard col">
            <div className="globe-graph">
              {/* <Map countryData={countryData} /> */}
            </div>
            <div className="top">
              {/* Card */}
              <div className="card red">
                <div className="bottom">
                  <span className="left">2.23B</span>
                  <div className="right">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
                <span>Total Users</span>
              </div>
              {/* Card */}
              <div className="card green">
                <div className="bottom">
                  <span className="left">89.3M</span>
                  <div className="right">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
                <span>Users Active </span>
              </div>
              {/* Card */}
              <div className="card yellow">
                <div className="bottom">
                  <span className="left">3.78M</span>
                  <div className="right">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
                <span>Total Groups</span>
              </div>
              {/* Card */}
              <div className="card purple">
                <div className="bottom">
                  <span className="left">93.3M</span>
                  <div className="right">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
                <span>Total Posts</span>
              </div>
            </div>
            <div className="mid card">
              <h4>Monthly Sales</h4>
              <EChartsReact option={option} />
            </div>
            <div className="card">
              <div className="table  responsiveTable">
                <h4>User Listing</h4>
                <table className="table table-borderless mb-0">
                  <thead className="rowHeight3">
                    <tr>
                      <th scope="col" className="align-middle">
                        <input type="checkbox" name="all" id="all" />
                      </th>
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
                        User Type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData(10).map((data, index) => {
                      return (
                        <tr className="rowHeight3" key={index}>
                          <td scope="col" className="align-middle">
                            <input
                              type="checkbox"
                              name={data.ic}
                              id={data.id}
                            />
                          </td>
                          <th scope="row" className="align-middle">
                            {data.srNo}
                          </th>
                          <td className="align-middle">{data.fullName}</td>
                          <td className="align-middle">{data.email}</td>
                          <td className="align-middle">{data.mNumber}</td>
                          <td className="align-middle">{data.role}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
