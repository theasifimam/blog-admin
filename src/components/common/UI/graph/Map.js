import React from "react";
import ReactECharts from "echarts-for-react";
import "echarts/map/js/world";
// import "echarts/map/json/world.json";

const Map = ({ countryData }) => {
  // If 'countryData' is not provided, create some dummy data for demonstration
  if (!countryData) {
    // Create an array of random country names
    const countries = [
      "USA",
      "Canada",
      "China",
      "India",
      "Germany",
      "Brazil",
      "Australia",
    ];

    // Generate random data for each country
    countryData = countries.map((country) => ({
      name: country,
      value: Math.floor(Math.random() * 100), // Random value between 0 and 100
    }));
  }
  const option = {
    title: {
      text: "Global Map Graph",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c}",
    },
    visualMap: {
      min: 0,
      max: 100, // Adjust the max value as per your data
      left: "left",
      top: "bottom",
      text: ["High", "Low"],
      calculable: true,
    },
    series: [
      {
        name: "Data",
        type: "map",
        mapType: "world",
        roam: true,
        label: {
          show: true,
        },
        data: countryData,
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "500px" }} />;
};

export default Map;
