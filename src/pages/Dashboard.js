import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import EChartsReact from "echarts-for-react";
import Map from "../components/common/UI/graph/Map";

const Dashboard = () => {
  var xAxisData = [];
  var data1 = [];
  var data2 = [];
  for (var i = 0; i < 100; i++) {
    xAxisData.push("A" + i);
    data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
  }

  const option = {
    title: {
      text: "Bar Animation Delay",
    },
    legend: {
      data: ["bar", "bar2"],
    },
    toolbox: {
      // y: 'bottom',
      feature: {
        magicType: {
          type: ["stack"],
        },
        dataView: {},
        saveAsImage: {
          pixelRatio: 2,
        },
      },
    },
    tooltip: {},
    xAxis: {
      data: xAxisData,
      splitLine: {
        show: false,
      },
    },
    yAxis: {},
    series: [
      {
        name: "bar",
        type: "bar",
        data: data1,
        emphasis: {
          focus: "series",
        },
        animationDelay: function (idx) {
          return idx * 10;
        },
      },
      {
        name: "bar2",
        type: "bar",
        data: data2,
        emphasis: {
          focus: "series",
        },
        animationDelay: function (idx) {
          return idx * 10 + 100;
        },
      },
    ],
    animationEasing: "elasticOut",
    animationDelayUpdate: function (idx) {
      return idx * 5;
    },
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

  return (
    <>
      <div className="container">
        <div className="row">
          <h1
            style={{
              fontWeight: 900,
              color: "var(--primaryColor)",
              fontSize: "3rem",
            }}
          >
            Current Status
          </h1>
          <br />
          <div className="dashboard col">
            <div className="top">
              <div className="cards right">
                <div className="sm-card cardColor1">
                  <p>Total Users</p>
                  <h3>658.04M</h3>
                  <h6>
                    {" "}
                    <span className="plus">+23%</span> - change
                  </h6>
                </div>
                <div className="sm-card cardColor2">
                  <p>Active Users</p>
                  <h3>256.04K</h3>
                  <h6>
                    {" "}
                    <span className="minus">+23%</span> - change
                  </h6>
                </div>
                <div className="sm-card cardColor3">
                  <p>Active Posts</p>
                  <h3>438.04K</h3>
                  <h6>
                    {" "}
                    <span className="plus">+23%</span> - change
                  </h6>
                </div>
                <div className="sm-card cardColor4">
                  <p>Active Hashtags</p>
                  <h3>26.04K</h3>
                  <h6>
                    {" "}
                    <span className="plus">+23%</span>- change
                  </h6>
                </div>
              </div>
              <div className="globe-graph center">{/* <Map /> */}</div>
            </div>
            <div className="mid card">
              {/* <h4>Monthly Sales</h4> */}
              <EChartsReact option={option} />
            </div>
            <div className="card bottom">
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
