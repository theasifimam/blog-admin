import EChartsReact from "echarts-for-react";
import React from "react";

const MonthlySale = () => {
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
  return (
    <div className="addUserPage">
      <div className="card">
        <div className="top"></div>
        <div className="bottom monthlySale">
          <h3>Monthly Sale</h3>

          <form>
            <div className="inputField">
              <label htmlFor="startDate">Start Date</label>
              <input
                autoComplete="true"
                type="date"
                name="startDate"
                id="startDate"
              />
            </div>
            <div className="inputField">
              <label htmlFor="endDate">End Date</label>
              <input
                autoComplete="true"
                type="date"
                name="endDate"
                id="endDate"
              />
            </div>

            <div
              className="inputField"
              style={{ width: "15% ", minWidth: "10%" }}
            >
              <label htmlFor="search">Search </label>
              <input
                type="submit"
                name="search"
                id="search"
                placeholder="Search"
                style={{
                  background: "#4FB23A",
                  color: "white",
                  fontWeight: 700,
                  width: "auto",
                }}
              />
            </div>
          </form>

          <div className="graph">
            <EChartsReact option={option} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlySale;
