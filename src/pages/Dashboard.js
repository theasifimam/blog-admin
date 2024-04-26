import React from "react";
import "../styles/Dashboard.css";
import EChartsReact from "echarts-for-react";

const Dashboard = () => {
  var xAxisData = [];
  var data1 = [];
  var data2 = [];
  for (var i = 0; i < 100; i++) {
    xAxisData.push("A" + i);
    data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
  }

  const colors = ["#016bb9", "grey"];

  const option = {
    color: colors,
    tooltip: {
      trigger: "none",
      axisPointer: {
        type: "cross",
      },
    },
    legend: {},
    grid: {
      top: 70,
      bottom: 50,
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: colors[1],
          },
        },
        axisPointer: {
          label: {
            formatter: function (params) {
              return (
                "Precipitation  " +
                params.value +
                (params.seriesData.length
                  ? "：" + params.seriesData[0].data
                  : "")
              );
            },
          },
        },
        // prettier-ignore
        data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12'],
      },
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: colors[0],
          },
        },
        axisPointer: {
          label: {
            formatter: function (params) {
              return (
                "Precipitation  " +
                params.value +
                (params.seriesData.length
                  ? "：" + params.seriesData[0].data
                  : "")
              );
            },
          },
        },
        // prettier-ignore
        data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12'],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Precipitation(2015)",
        type: "line",
        xAxisIndex: 1,
        smooth: true,
        emphasis: {
          focus: "series",
        },
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
      },
      {
        name: "Precipitation(2016)",
        type: "line",
        smooth: true,
        emphasis: {
          focus: "series",
        },
        data: [
          3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7,
        ],
      },
    ],
  };

  const smallerOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "India",
        "Pakistan",
        "Bangladesh",
        "Nepal",
        "Afghanistan",
        "USA",
        "UK",
      ],
      axisLabel: {
        color: "#F5F5F5",
        fontSize: 14,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "#F5F5F5",
        fontSize: 14,
      },
    },

    series: [
      {
        data: [973, 126, 245, 698, 847, 347, 128],
        type: "bar",
        itemStyle: {
          color: "#ffffffde", // Set the color of the bars
        },
        label: {
          show: true,
          position: "top",
          color: "white", // Set the text color
        },
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

  return (
    <div className="container">
      <h1 className="main-heading">Overview</h1>
      <br />
      <div className="dashboard col">
        <div className="top">
          <div className="globe-graph">
            <h4 className="h2">Country Wise Users</h4>
            <EChartsReact option={smallerOption} />
          </div>
          <div className="cards right">
            <div className="sm-card cardColor1">
              <p>Total Users</p>
              <h3>658.9M</h3>
              <h6>
                {" "}
                <span className="plus">+17%</span> - change
              </h6>
            </div>
            <div className="sm-card cardColor2">
              <p>Active Users</p>
              <h3>256.4K</h3>
              <h6>
                {" "}
                <span className="minus">-3%</span> - change
              </h6>
            </div>
            <div className="sm-card cardColor3">
              <p>Active Posts</p>
              <h3>438.1K</h3>
              <h6>
                {" "}
                <span className="plus">+29%</span> - change
              </h6>
            </div>
            <div className="sm-card cardColor4">
              <p>Active Hashtags</p>
              <h3>26.7K</h3>
              <h6>
                {" "}
                <span className="plus">+31%</span>- change
              </h6>
            </div>
          </div>
        </div>
        <h1 className="h2">Monthly Growth</h1>
        <div className="mid card">
          {/* <h4>Monthly Sales</h4> */}
          <EChartsReact option={option} />
        </div>
        <h1 className="h2">Feedbacks & Complains</h1>
        <div className=" bottom">
          <div className="table  responsiveTable card p-2">
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
                        <input type="checkbox" name={data.ic} id={data.id} />
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
  );
};

export default Dashboard;
